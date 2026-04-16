#
# Docker image for building and serving the FFHB website.
#
# This image runs an Apache webserver which provides a webhook for triggering
# website regeneration from Github.
# Note: the webserver does not handle SSL/TLS.
#

FROM docker.io/debian:trixie-slim

RUN apt-get install --update -y --no-install-recommends apache2

# only for development of this Dockerfile:
RUN apt-get install -y --no-install-recommends less nano iproute2

RUN apt-get install -y --no-install-recommends git
RUN apt-get install -y --no-install-recommends imagemagick
RUN apt-get install -y --no-install-recommends ruby-bundler

RUN mkdir ~/jekyll-envs && \
    cd ~/jekyll-envs/ && \
    git clone https://github.com/FreifunkBremen/bremen.freifunk.net bremen.freifunk.net

RUN apt-get install -y --no-install-recommends ruby-dev
RUN apt-get install -y --no-install-recommends libssl-dev
RUN apt-get install -y --no-install-recommends build-essential
RUN apt-get install -y --no-install-recommends shared-mime-info # for mimemagic gem

RUN cd ~/jekyll-envs/bremen.freifunk.net/ && \
    bundle config set --local path './vendor/bundle/' && \
    echo "gem 'sass-embedded', '~> 1.71.0'" >> Gemfile && \
    bundler install

EXPOSE 80

CMD ["apache2ctl", "-DFOREGROUND"]
