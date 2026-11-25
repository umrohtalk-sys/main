"""Jadwal harian Threads @bidanvirdaa jam 06:19 WIB (23:19 UTC hari sebelumnya).
Usage: python3 virda.py check | now | days <start YYYY-MM-DD WIB> <n>
"""
import json, subprocess, sys, datetime, os

ACC = "6afc6815fc43f81b789dc731"  # Threads @bidanvirdaa
BASE = "https://comment-center-edugamelabs.netlify.app/virda/"
IMG = {
 "selfie": "virda-01-bidan-dan-bayi.jpg", "kenalan": "virda-02-kenalan.jpg", "wajah": "virda-03-wajah-kecil.jpg",
 "pulas": "virda-04-tidur-pulas.jpg", "tunda": "virda-05-kapan-ditunda.jpg", "adnan": "virda-06-testimoni-adnan.jpg",
}
VIDEO = "virda-video-pijat-newborn.mp4"

CAPTIONS = [
"Wargaaa, semangatin aku dongg 🥹❤️\n\nAku bidan resign dan sekarang tiap babycare dan Newborn care keliling di Jember\n\nGak tertarik juga gapapa, pura-pura tanya harga atau bantu tap love aja udah berarti banget buat aku. Siapa tahu dari Threads ada rezeki yang mampir 🥲🫶🏻",
"Pagi wargaaa 🥹\n\nAku Virda, bidan yang resign dan sekarang keliling Jember buat pijat bayi sama newborn care di rumah Bunda.\n\nKalau lewat sini, bantu tap love ya. Pura-pura tanya harga juga boleh banget kok 🤭 siapa tahu rezekiku nyangkut dari Threads 🫶🏻",
"Wargaaa, boleh minta semangatnya pagi ini? 🥲\n\nAku bidan yang milih resign, sekarang dari rumah ke rumah di Jember: pijat bayi, baby spa, rawat newborn.\n\nNggak butuh juga gapapa. Satu love dari kamu udah bikin aku makin semangat berangkat ❤️",
"Bismillah, berangkat lagi pagi ini 🥹\n\nBuat yang belum kenal, aku bidan resign yang sekarang keliling Jember buat babycare dan newborn care.\n\nGak tertarik juga gapapa, bantu tap love atau komen \"semangat\" aja udah berarti banget buat aku 🫶🏻",
"Wargaaa Jember mana suaranyaa 🥹❤️\n\nAku bidan yang resign, sekarang datang ke rumah buat pijat bayi, baby spa, sama perawatan newborn.\n\nKalau punya saudara atau teman yang baru lahiran, boleh tag dia ya. Kalau nggak, tap love aja udah seneng banget aku 🥲",
"Pagi Bunda, pagi wargaaa 🥹\n\nKata salah satu Bunda kemarin, dedeknya jadi lebih anteng dan tidurnya pulas habis dipijat. Seneng banget dengernya 🥲\n\nAku bidan resign yang sekarang keliling Jember buat babycare dan newborn care. Bantu tap love ya, siapa tahu ada rezeki mampir dari Threads 🫶🏻",
"Semangatin aku dong wargaaa 🥹❤️\n\nSejak resign jadi bidan, sekarang aku yang datang ke rumah Bunda di Jember. Pijat bayi, baby spa, rawat newborn.\n\nGak tertarik juga gapapa. Pura-pura tanya harga aja aku udah seneng kok 🤭🫶🏻",
"Halo wargaaa, aku Virda 🥹\n\nBidan yang resign dan sekarang keliling Jember buat babycare dan newborn care.\n\nCuma mau minta satu hal pagi ini: bantu tap love ya. Biar postingan ini nyampe ke Bunda di Jember yang lagi butuh 🥲🫶🏻",
"Wargaaa, aku masih di sini dan masih semangat 🥹❤️\n\nBidan resign, sekarang tiap hari keliling Jember buat pijat bayi dan newborn care di rumah.\n\nKalau kamu baca sampai sini, makasih banyak ya. Tap love atau komen apa aja udah berarti banget 🫶🏻",
"Pagi wargaaa 🥹\n\nBayi baru lahir boleh dipijat nggak sih? Boleh, asal sesuai kondisi dan caranya pelan 🥲\n\nAku bidan resign yang sekarang keliling Jember buat babycare dan newborn care. Mau tanya-tanya dulu juga boleh banget, DM aja ya 🫶🏻",
]

def media_for(i):
    """Rotasi media per hari. 0=album semua foto, lalu video, lalu foto satuan."""
    cycle = ["video", "selfie", "album", "adnan", "pulas", "video", "kenalan", "wajah", "tunda", "album"]
    k = cycle[i % len(cycle)]
    if k == "video":
        return "video", [{"type": "video", "url": BASE + VIDEO, "alt": "Bidan Virda memijat punggung bayi baru lahir"}]
    if k == "album":
        order = ["selfie", "kenalan", "adnan", "pulas", "tunda", "wajah"]
        return "album", [{"type": "image", "url": BASE + IMG[x]} for x in order]
    return "image", [{"type": "image", "url": BASE + IMG[k]}]

def payload(i, when, caption_i=None, kind=None):
    t, m = media_for(i)
    if kind == "album":
        t, m = "album", media_for(2)[1]
    cap = CAPTIONS[(caption_i if caption_i is not None else i) % len(CAPTIONS)]
    return {"accountId": ACC, "type": t, "description": cap, "medias": m, "scheduleAt": when}

def send(p):
    here = os.path.dirname(os.path.abspath(__file__))
    out = subprocess.run(["python3", os.path.join(here, "..", "mcp.py"), "repliz", "repliz_create_schedule", json.dumps(p)],
                         capture_output=True, text=True, cwd=os.path.join(here, ".."))
    return (out.stdout + out.stderr).strip()

if __name__ == "__main__":
    cmd = sys.argv[1]
    if cmd == "check":
        for c in CAPTIONS: print(len(c), c[:40].replace("\n", " "))
    elif cmd == "now":
        when = (datetime.datetime.now(datetime.timezone.utc) + datetime.timedelta(minutes=2)).strftime('%Y-%m-%dT%H:%M:00.000Z')
        print(when, send(payload(0, when, 0, "album")))
    elif cmd == "days":
        start = datetime.date.fromisoformat(sys.argv[2]); n = int(sys.argv[3])
        for d in range(n):
            day = start + datetime.timedelta(days=d)
            when = (datetime.datetime(day.year, day.month, day.day, 6, 19) - datetime.timedelta(hours=7)).strftime('%Y-%m-%dT%H:%M:00.000Z')
            idx = (day - datetime.date(2026, 11, 26)).days  # hari ke-1 = 27 Nov
            r = send(payload(idx, when))
            print(day, when, media_for(idx)[0], "cap", idx % len(CAPTIONS), r.replace("\n", " ")[:80])
