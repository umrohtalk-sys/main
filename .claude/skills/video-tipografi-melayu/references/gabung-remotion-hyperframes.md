# Gabung dengan skill Remotion & HyperFrames

Engine ini = **fungsi tulen `render(t)` di atas satu kanvas 1920×1080**. Itu bentuk yang diterima oleh kedua-dua kerangka, jadi babak yang sama boleh dipakai di tiga tempat.

| Pilih | Bila |
|---|---|
| Engine terus (skill ini, `render.mjs`) | Mahu MP4 cepat, tanpa kebergantungan, render paralel (~1× masa nyata) |
| **Remotion** | Pengguna mahu sunting dalam React / Remotion Studio, campur klip video sebenar, templat berparameter |
| **HyperFrames** | Pengguna mahu komposisi HTML tulen yang diedit agen, GSAP timeline, atau campur elemen DOM/CSS |

Semasa membina, ikut aturan skill ini untuk **gaya, timing kata, tipografi, semakan lembaran kenalan**; guna skill remotion/hyperframes untuk **struktur projek & arahan render mereka**.

## Remotion
```tsx
// src/Gemi.tsx — bungkus engine sebagai komponen
import {useCurrentFrame, useVideoConfig, Audio, staticFile, AbsoluteFill, delayRender, continueRender} from 'remotion';
import {useEffect, useRef, useState} from 'react';

export const Gemi: React.FC = () => {
  const frame = useCurrentFrame(), {fps} = useVideoConfig(), ref = useRef<HTMLCanvasElement>(null);
  const [handle] = useState(() => delayRender('fon & engine'));
  useEffect(() => { (async () => {
    // muat engine/kinetik.js, bulat.js, words.js, scenes.js sebagai skrip global (public/), kemudian:
    await (window as any).bootRemotion(ref.current);   // = boot(canvas, false): muat fon, tanpa gelung pratonton
    continueRender(handle);
  })(); }, []);
  useEffect(() => { (window as any).__draw?.(frame / fps); }, [frame]);
  return <AbsoluteFill>
    <canvas ref={ref} width={1920} height={1080} style={{width: '100%', height: '100%'}} />
    <Audio src={staticFile('suara.wav')} startFrom={0} /* OFF: guna <Sequence from={Math.round(OFF*fps)}> */ />
  </AbsoluteFill>;
};
// Root.tsx: <Composition id="Gemi" component={Gemi} durationInFrames={Math.round(DUR*30)} fps={30} width={1920} height={1080} />
// npx remotion render Gemi out/gemi.mp4
```
Nota: Remotion merender setiap bingkai secara bebas — engine sudah deterministik, jadi selamat. Jangan guna `requestAnimationFrame` (pratonton) dalam Remotion; panggil `__draw(frame/fps)` sahaja.

## HyperFrames
HyperFrames (HTML → video, dipacu agen) merender halaman dengan masa yang dikawal. Letak kanvas dalam komposisi dan ikat masa:
```html
<div data-composition-id="gemi" data-width="1920" data-height="1080" data-duration="93.5">
  <canvas id="cv" width="1920" height="1080"></canvas>
  <audio data-start="0.6" src="suara.wav"></audio>
</div>
<script src="engine/kinetik.js"></script><script src="engine/bulat.js"></script>
<script src="words.js"></script><script src="scenes.js"></script>
<script>
  // pacu engine dari timeline GSAP supaya seek HyperFrames = __draw(t)
  const tl = gsap.timeline({paused: true}); const clock = {t: 0};
  tl.to(clock, {t: 93.5, duration: 93.5, ease: 'none', onUpdate: () => window.__draw?.(clock.t)});
  window.__timelines = window.__timelines || {}; window.__timelines.gemi = tl;
  boot();   // engine memuat fon dan menetapkan __draw
</script>
```
Semak dokumentasi skill hyperframes untuk atribut komposisi & arahan render tepat (versi mungkin berbeza); prinsipnya sama: satu jam → `__draw(t)`.

## Elemen yang boleh dikongsi tanpa ubah
`words.js` (timing), `scenes.js` (babak), `engine/` (primitif), `suara.wav`. Hanya pembungkus (index.html / komponen React / komposisi HyperFrames) yang berbeza.
