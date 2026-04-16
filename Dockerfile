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

EXPOSE 80

CMD ["apache2ctl", "-DFOREGROUND"]
