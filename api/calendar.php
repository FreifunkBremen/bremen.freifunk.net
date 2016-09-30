<?php
require_once('config.php');
define('CACHE_FILE', CACHE_DIR . '/calendar.json');

spl_autoload_register(function ($name) {
    $components = explode("\\", $name);
    for($i = 1; $i < count($components); $i++) {
        $path = "vendor/" . implode("/", array_merge(
            array_map("strtolower", array_slice($components, 0, $i)),
            array("lib"),
            array_slice($components, $i)
        )) . ".php";
        if (is_file($path)) {
            require_once $path;
            return;
        }
    }
});

if (!is_dir(CACHE_DIR))
    mkdir(CACHE_DIR);

if (file_exists(CACHE_FILE) && filemtime(CACHE_FILE) >= time() - CACHE_LIFETIME) {
    $out = file_get_contents(CACHE_FILE);
} else {
    $start_date = new DateTime();
    $end_date = new DateTime();
    $end_date->add(new DateInterval('P' . CALENDAR_DAYS . 'D'));
    $vcalendar = Sabre\VObject\Reader::read(
        fopen(CALENDAR_URL, 'r')
    )->expand(new DateTime(), $end_date);

    $ret = array();
    foreach ($vcalendar->VEVENT as $event) {
        $ret[] = array(
            'summary' => (string)$event->SUMMARY,
            'location' => (string)$event->LOCATION,
            'description' => (string)$event->DESCRIPTION,
            'dtstart' => $event->DTSTART->getDateTime()->getTimestamp(),
            'dtend' => $event->DTend->getDateTime()->getTimestamp(),
            'allday' => (isset($event->DTSTART->parameters['VALUE']) &&
                (string)$event->DTSTART->parameters['VALUE'] == 'DATE'),
        );
    }
    $out = json_encode($ret);
    file_put_contents(CACHE_FILE, $out);
}

header('Content-Type: application/json');
echo $out;
