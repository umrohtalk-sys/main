---
name: project-zernio-ig-automation
description: Zernio tersambung ke IG @auzan_hasfi; automation komen PROMPT/GAME → DM demoprompt aktif sejak 6 Nov 2026
metadata:
  node_type: memory
  type: project
  originSessionId: bfc18cae-c09c-49e4-8c7f-cefd97326ee9
  modified: 2026-11-06T08:47:32.757Z
---

Zernio MCP: IG @auzan_hasfi (account 6aed915ef79bc72b77e0f13a, Default Profile 68f39b1c8fcd90cb1120bec8), disambung lewat Instagram Login (bukan Facebook Login → tidak ada mentions/tagged/like komen/iklan Meta). Token habis ~5 Jan 2027. Billing usage-based, 2 akun gratis, 10.000 DM/bulan gratis.

6 Nov 2026: automation 6aed9409d6e1f2819b76d548 "PROMPT / GAME → DM demo prompt" untuk semua post: keyword prompt/game (word + typo), DM BM dengan link di TEKS (tanpa tombol) → https://demoprompt.edugamelabs.com, audiens "any" (follow gate dimatikan 6 Nov atas permintaan user: semua orang langsung dapat link), sekali per orang, juga untuk DM, balasan publik "cek DM" after_dm.
Hari yang sama 21 komentar lama (7 Prompt di reel pensyarah DfYqRnHvly1, 14 Game di reel ML DfQSALnT9G3) dibalas manual: private reply teks + link (tanpa tombol, karena tombol bisa ditolak untuk non-follower) + balasan publik "cek DM".

**Why:** user mau semua komen PROMPT/GAME dapat link demo lewat DM, ala ManyChat.
**How to apply:** private reply = 1x per komen, maks 7 hari; cek log automation sebelum membalas manual supaya tidak dobel. Lihat [[project-prompt-generator-demo]].

Batas variasi Zernio: 1 teks utama + 5 variasi (API tolak lebih dari 5) untuk DM dan untuk balasan komen. 6 Nov 09:02: dipasang 6 DM + 6 balasan gaya Malaysia (BM, "Salam", "cikgu dan ibu bapa", tip cek Message Requests). Tes user 08:52–08:58 dari 6 akun sendiri: semua DM + balasan terkirim dalam ~3–7 detik. Belum ada versi Indonesia (perlu automation per-post untuk reel bahasa Indonesia).

7 Nov 2026: typo tolerance DIMATIKAN (komen "same" ikut kena karena mirip "game"); keyword kini prompt/promp/promt/prompts/game/games. Sampai 7 Nov automation PROMPT/GAME sudah kirim 135 DM, 0 gagal.
Automation kedua 6aef1eaba2736dba710d701d "NAK → DM LP tools MY": keyword "nak" match EXACT (supaya "nak tanya", "nak jadi cikgu" tidak kena), DM 6 variasi BM berisi https://lptoolsmy.edugamelabs.com di teks, balasan "cek DM" after_dm, sekali per orang, juga di DM. 6 komen NAK lama di reel Roblox DfatsGETsvR dibalas manual.

12 Nov 2026: automation ketiga 6af4f2d23d5c0eec0f235b2a "VIDEO → DM Prompt Video": keyword video/videos/vidio/vedio/nak video/video please/video pls, match EXACT (kata "video" terlalu umum), DM 6 variasi BM berisi https://promptvideo.edugamelabs.com (demo Galeri Prompt Video; tombol Pro di sana → lpvideo), balasan "cek DM" after_dm, sekali per orang, juga di DM, click tag klik-prompt-video. Aktif hanya untuk komen baharu.

12 Nov 2026 malam: automation VIDEO diubah ke repeat_policy every_comment (user minta SETIAP komen video dapat link, termasuk orang yang sama di reel lain). Keyword ditambah: videoo, video!, video 🙏, link video, nak link video, video cikgu/kak/bang, mau/minta video (tetap exact). Catatan: komen dari akun @auzan_hasfi sendiri TIDAK PERNAH memicu automation (tak boleh DM diri sendiri), tes harus pakai akun lain. Komen growwai.id di reel Dfnm8RLy3KH yang ter-skip dikirim manual.

15 Nov 2026 — TERKINI: VIDEO (6af4f2d23d5c0eec0f235b2a, kini "VIDEO → DM LP Video") DM 6 variasi BM berisi https://lpvideo.edugamelabs.com (bukan lagi promptvideo), click tag klik-lp-video, keyword + video🙏💞/videi/send video. Automation KEEMPAT 6af945366e794b2df826ef7c "TOOLS → DM LP Video": keyword tools/tool/tols/toolz/nak tools/link tools dll, exact, every_comment, link sama lpvideo, click tag klik-lp-video-tools. Hari sama 6 komen tertinggal dibalas manual (growwai.id & abangeyoy "tools" di reel bahasa Melayu 5 negara, nazurah_1409 "Video🙏💞", refleeesia "Link", farrisayiesh "Nk", qiahhh.afifah "Nakkk") + balasan publik untuk 3 komen yang DM-nya terkirim tapi balasan publiknya gagal 403 (eirazah__hizam99, najlaafatin, aina_monologs). Penerima VIDEO lama (50 orang s/d 15 Nov) dapat link promptvideo, tidak dikirim ulang.

23 Nov 2026 (WIB): Threads @auzan_hasfi kini tersambung ke Zernio (account 6b035af818f2bdaca6cbc9f5, profil sama). Threads TIADA DM → automation hanya balasan komen awam berisi link. Dipasang: 6b035b4cb963006ae9c79c42 "TOOLS → balas link LP Video" (keyword sama IG, exact, every_comment, link lpvideo.edugamelabs.com) dan 6b035b4ff0a0b440614b74e1 "NAK → balas link Prompt Generator" (nak/nakk/nakkk/nk, exact, once, link https://lptoolsid.edugamelabs.com/ms/). public_reply_policy always. 15 komen lama (nak / nak beli / nak tuan dll, termasuk yang dulu dibalas "cek bio" saja) dibalas manual via REST POST /v1/inbox/comments/{postId} dengan link — 15/15 berjaya. Komen akaun bidanvirdaa (akaun isteri user) dilangkau. Skrip di scratchpad sesi threads-balas/.
