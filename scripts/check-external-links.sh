#!/bin/bash
# Check external (outbound) links across the site for broken URLs.
# Scans src/content (markdown) and src/app + src/components (tsx), extracts
# http(s) URLs that do not point to ein.so, and tests each for reachability.
# Usage: ./scripts/check-external-links.sh
# Exit code: 0 if all links are reachable, 1 if any broken link is found.

set -u
cd "$(dirname "$0")/.." || exit 2

UA="Mozilla/5.0 (compatible; ein-so-linkcheck/1.0)"
TMP="$(mktemp)"
broken=0
checked=0

# Extract external URLs from content + source, strip trailing punctuation,
# drop our own domain, schema.org enum values, and runtime-built fragments
# (URLs ending in "/" immediately after a known API prefix are concatenated
# with a variable at runtime and are not real static links).
grep -rhoE 'https?://[a-zA-Z0-9./?=_%:+-]+' \
  src/content src/app src/components \
  --include='_index.md' --include='*.tsx' 2>/dev/null \
  | sed -E 's/[).,"'"'"'>]+$//' \
  | grep -viE '^https?://(www\.)?ein\.so' \
  | grep -viE '^https?://schema\.org' \
  | grep -viE '^https://www\.clarity\.ms/tag/$' \
  | sort -u > "$TMP"

echo "Checking $(wc -l < "$TMP" | tr -d ' ') external URLs..."
echo ""

while read -r url; do
  [ -z "$url" ] && continue
  checked=$((checked + 1))
  code=$(curl -s -o /dev/null -w "%{http_code}" -L --max-time 15 -A "$UA" "$url" 2>/dev/null)
  if [ "$code" -ge 200 ] && [ "$code" -lt 400 ]; then
    echo "  OK   $code  $url"
  else
    echo "  DEAD $code  $url"
    broken=$((broken + 1))
  fi
done < "$TMP"

rm -f "$TMP"
echo ""
echo "Checked $checked external URLs; $broken broken."
[ "$broken" -eq 0 ] || exit 1
