#! /usr/bin/env sh

# shellcheck disable=SC1091
. /etc/profile

set -eu

SOURCE="$HOME/jekyll-envs/bremen.freifunk.net/"
DESTINATION="/var/www/html/"

cd "$SOURCE"

git fetch --quiet origin
git reset --quiet --hard origin/master
git submodule --quiet update --init

bundle install --quiet

exec bundle exec jekyll build --quiet --destination "$DESTINATION"
