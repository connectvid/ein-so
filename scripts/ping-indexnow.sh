#!/bin/bash
# Ping IndexNow after deploy — submits changed URLs to Bing, Yandex, Naver, Seznam, Yep
# Usage: ./scripts/ping-indexnow.sh [url1] [url2] ...
# If no URLs provided, submits sitemap URL

KEY="b3768febb2c24272a847fa047b3dd619"
HOST="www.ein.so"

if [ $# -eq 0 ]; then
  # No args — submit sitemap for re-crawl
  curl -s -X POST "https://api.indexnow.org/indexnow" \
    -H "Content-Type: application/json" \
    -d "{\"host\": \"$HOST\", \"key\": \"$KEY\", \"urlList\": [\"https://$HOST/sitemap.xml\"]}"
  echo "Submitted sitemap to IndexNow"
else
  # Build URL list from args
  URLS=$(printf '"%s",' "$@" | sed 's/,$//')
  curl -s -X POST "https://api.indexnow.org/indexnow" \
    -H "Content-Type: application/json" \
    -d "{\"host\": \"$HOST\", \"key\": \"$KEY\", \"urlList\": [$URLS]}"
  echo "Submitted $# URLs to IndexNow"
fi
