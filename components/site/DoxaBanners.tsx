"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export type BannerSlide = { src: string; alt: string; href: string };

// Carrossel de banners: troca sozinho, pausa com o mouse/foco, aceita setas, bolinhas e deslize no celular.
// Respeita "reduzir movimento" do sistema (nesse caso não troca sozinho).
export default function DoxaBanners({ slides, intervalMs = 5500 }: { slides: BannerSlide[]; intervalMs?: number }) {
  const n = slides.length;
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const touchX = useRef<number | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const h = () => setReduced(mq.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, []);

  useEffect(() => {
    if (paused || reduced || n < 2) return;
    const t = setInterval(() => setI((v) => (v + 1) % n), intervalMs);
    return () => clearInterval(t);
  }, [paused, reduced, n, intervalMs, i]);

  const go = (d: number) => setI((v) => (v + d + n) % n);

  return (
    <div
      role="group"
      aria-roledescription="carrossel"
      aria-label="Destaques da Doxa"
      className="relative overflow-hidden rounded-2xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
        touchX.current = null;
      }}
    >
      <div className="relative aspect-[2/1] w-full bg-ink-soft">
        {slides.map((s, k) => (
          <a
            key={s.src}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-hidden={k !== i}
            tabIndex={k === i ? 0 : -1}
            className={`absolute inset-0 transition-opacity duration-700 motion-reduce:transition-none ${
              k === i ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <Image
              src={s.src}
              alt={s.alt}
              fill
              priority={k === 0}
              sizes="(min-width: 1200px) 1200px, 100vw"
              className="object-cover"
            />
          </a>
        ))}
      </div>

      {n > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Banner anterior"
            className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-ink/60 text-xl text-paper backdrop-blur hover:bg-ink/80 focus-visible:outline-2 focus-visible:outline-brand"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Próximo banner"
            className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-ink/60 text-xl text-paper backdrop-blur hover:bg-ink/80 focus-visible:outline-2 focus-visible:outline-brand"
          >
            ›
          </button>
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
            {slides.map((s, k) => (
              <button
                key={s.src}
                type="button"
                onClick={() => setI(k)}
                aria-label={`Ir para o banner ${k + 1} de ${n}`}
                aria-current={k === i}
                className={`h-2.5 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-brand ${
                  k === i ? "w-7 bg-brand" : "w-2.5 bg-paper/60 hover:bg-paper"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
