#!/bin/sh
set -eu

js_escape() {
  printf '%s' "$1" | sed 's/\\/\\\\/g; s/"/\\"/g'
}

api_url="$(js_escape "${WEDDING_REGISTRY_API_URL:-}")"
admin_key="$(js_escape "${WEDDING_REGISTRY_ADMIN_KEY:-}")"
transport="$(js_escape "${WEDDING_REGISTRY_API_TRANSPORT:-jsonp}")"

{
  printf 'window.WEDDING_REGISTRY_API_URL = "%s";\n' "$api_url"
  printf 'window.WEDDING_REGISTRY_ADMIN_KEY = "%s";\n' "$admin_key"
  printf 'window.WEDDING_REGISTRY_API_TRANSPORT = "%s";\n' "$transport"
} > /usr/share/nginx/html/config.js
