#!/usr/bin/env bash
# Panggil tool MCP Repliz / Zernio langsung lewat HTTP (JSON-RPC), tanpa connector.
# Kunci TIDAK ditulis di sini: proxy environment "Konten" menyuntikkan header
# Authorization otomatis untuk mcp.repliz.com dan mcp.zernio.com (network secrets).
#
# Pakai:
#   bash mcp-call.sh repliz tools/list
#   bash mcp-call.sh repliz repliz_list_accounts '{}'
#   bash mcp-call.sh zernio media_get_media_presigned_url '{"filename":"x.mp4","content_type":"video/mp4","size":123}'
set -euo pipefail
SERVER="${1:?repliz|zernio}"; TOOL="${2:?nama tool atau tools/list}"; ARGS="${3:-{\}}"
case "$SERVER" in
  repliz) URL="https://mcp.repliz.com/mcp" ;;
  zernio) URL="https://mcp.zernio.com/mcp" ;;
  *) echo "server tidak dikenal: $SERVER" >&2; exit 1 ;;
esac
H=(-H 'Content-Type: application/json' -H 'Accept: application/json, text/event-stream')
TMP=$(mktemp -d); trap 'rm -rf "$TMP"' EXIT

# 1) initialize (ambil Mcp-Session-Id kalau server memakainya)
curl -sS -D "$TMP/h" -o "$TMP/init" -X POST "$URL" "${H[@]}" \
  -d '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-03-26","capabilities":{},"clientInfo":{"name":"cloud-sop","version":"1"}}}'
CODE=$(head -1 "$TMP/h" | awk '{print $2}')
if [ "$CODE" = "401" ]; then echo "401: kunci $SERVER belum tersimpan di environment Konten" >&2; exit 2; fi
SID=$(grep -i '^mcp-session-id:' "$TMP/h" | awk '{print $2}' | tr -d '\r' || true)
[ -n "$SID" ] && H+=(-H "Mcp-Session-Id: $SID")
curl -sS -o /dev/null -X POST "$URL" "${H[@]}" -d '{"jsonrpc":"2.0","method":"notifications/initialized"}' || true

# 2) panggil
if [ "$TOOL" = "tools/list" ]; then
  BODY='{"jsonrpc":"2.0","id":2,"method":"tools/list"}'
else
  BODY=$(python3 -c 'import json,sys;print(json.dumps({"jsonrpc":"2.0","id":2,"method":"tools/call","params":{"name":sys.argv[1],"arguments":json.loads(sys.argv[2])}}))' "$TOOL" "$ARGS")
fi
# Respons bisa JSON biasa atau SSE ("data: {...}"); ambil JSON-nya saja.
curl -sS -X POST "$URL" "${H[@]}" -d "$BODY" | sed -n 's/^data: //p;/^{/p'
