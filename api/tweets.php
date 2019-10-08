<?php
require_once('config.php');
define('CACHE_FILE', CACHE_DIR . '/tweets.json');

require_once('vendor/twitteroauth/autoload.php');
use Abraham\TwitterOAuth\TwitterOAuth;


function entity_cmp($a, $b) {
    if ($a->indices[1] == $b->indices[1])
        return 0;
    return ($a->indices[1] > $b->indices[1])? -1 : 1;
}


function mb_substr_replace($string, $replacement, $start, $length) {
    return mb_substr($string, 0, $start) . $replacement . mb_substr($string, $start +
    $length);
}

function getTwitterContent($media_url) {
    $file_name = basename($media_url);
    $info = pathinfo($file_name);
    $file_path = '../images/twitter/' . $info['filename'] . '.jpg';
    if(!file_exists($file_path)) {
        $base_url = preg_match("/^(http(|s).*)(.jpe?g|.png)/", $media_url, $matches);
        // twitter api should only return jpg/png images
        if($matches[3] === '.jpg' || $matches[3] === '.jpeg' || $matches[3] === '.png') {
            $file = file_get_contents($matches[1].$matches[3].':thumb', FALSE, NULL, 0, 1024*1024);
            file_put_contents($file_path, $file, LOCK_EX);
        } else {
            return '';
        }
    }
    return '/images/twitter/' . $file_name;
}

if (!is_dir(CACHE_DIR))
    mkdir(CACHE_DIR);

if (file_exists(CACHE_FILE) && filemtime(CACHE_FILE) >= time() - CACHE_LIFETIME) {
    $out = file_get_contents(CACHE_FILE);
} else {
    $twitter = new TwitterOAuth(
        TWITTER_CONSUMER_KEY,
        TWITTER_CONSUMER_SECRET,
        TWITTER_ACCESS_TOKEN,
        TWITTER_ACCESS_TOKEN_SECRET
    );

    $tweets_orig = $twitter->get(
        "statuses/user_timeline",
        [
            "screen_name"     => "FreifunkHB",
            "include_rts"     => false,
            "exclude_replies" => true,
            "trim_user"       => true,
            "count"           => 10*TWITTER_COUNT
        ]
    );

    $tweets_parsed = array();
    foreach ($tweets_orig as $tweet) {
        if (count($tweets_parsed) >= TWITTER_COUNT)
            break;

        if (strpos($tweet->source, "IFTTT") !== FALSE)
            continue;
        if (strpos($tweet->source, "FreifunkHB") !== FALSE)
            continue;

        $tweet_parsed = array(
            'id' => $tweet->id_str,
            'html' => $tweet->text,
            'text' => $tweet->text,
            'media' => [],
            'timestamp' => (new DateTime($tweet->created_at))->getTimestamp(),
        );

        if (isset($tweet->entities)) {
            $entities = array();
            foreach (['media', 'hashtags', 'user_mentions', 'urls'] as $type)
                if (isset($tweet->entities->$type) &&
                        is_array($tweet->entities->$type))
                    $entities = array_merge($entities, $tweet->entities->$type);
            usort($entities, "entity_cmp");

            foreach ($entities as $entity) {
                $link_templ = '<a href="%s">%s</a>';
                 if (isset($entity->media_url_https)) {
                    $repl = "";
                    $tweet_parsed['media'][] = array(
                        'thumb' => getTwitterContent($entity->media_url_https),
                        'url' => $entity->expanded_url
                    );
                }
                elseif (isset($entity->display_url)) {
                    $repl = sprintf(
                        $link_templ,
                        $entity->expanded_url,
                        $entity->display_url
                    );
                }
                elseif (isset($entity->screen_name)) {
                    $repl = sprintf(
                        '<a href="%s" title="%s">%s</a>',
                        'https://twitter.com/' . $entity->screen_name,
                        $entity->name,
                        $entity->screen_name
                    );
                }
                elseif (isset($entity->text)) {
                    $repl = sprintf(
                        $link_templ,
                        'https://twitter.com/hashtag/' . $entity->text . '?src=hash',
                        $entity->text
                    );
                }
                $tweet_parsed['html'] = mb_substr_replace(
                    $tweet_parsed['html'],
                    $repl,
                    $entity->indices[0],
                    $entity->indices[1] - $entity->indices[0]
                );
            }
        }
        $tweet_parsed['html'] = str_replace("\n", '<br>', $tweet_parsed['html']);
        $tweets_parsed[] = $tweet_parsed;
    }

    $out = json_encode($tweets_parsed);
    file_put_contents(CACHE_FILE, $out);
}

header('Content-Type: application/json');
echo $out;

# vim: syntax=php sw=4 ts=4 sts=4 et
