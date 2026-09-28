"use client";

import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const STORE_URL = "https://criamood.lojavirtualnuvem.com.br";

/**
 * Slides do banner rotativo da home.
 *
 * Dois formatos possíveis por slide:
 *
 * 1) Imagem pronta (arte já com texto/logo desenhados nela):
 *    { image: "/banners/arquivo.jpg", width, height, alt: "descrição", link: STORE_URL }
 *    width/height = dimensões reais do arquivo (pra evitar distorção).
 *
 * 2) Texto + botões (usado quando ainda não tem arte pronta):
 *    { eyebrow, title: [linha1, linha2, linha3], subtitle, primaryCta, secondaryCta }
 *
 * Pra adicionar um banner novo, é só colocar a imagem em /public/banners/
 * e adicionar um objeto no formato (1) nesta lista.
 */
const slides = [
  {
    image: "/banners/banner-pense-ilimitado.jpg",
    width: 3780,
    height: 1890,
    alt: "CriaMood — Pense Ilimitado. Vista a sua fé com estilo.",
    link: STORE_URL,
  },
  {
    image: "/banners/banner-camisetas-oversized.jpg",
    width: 3780,
    height: 1890,
    alt: "CriaMood — Camisetas Oversized. Fé + Estilo. Design exclusivo.",
    link: STORE_URL,
  },
  {
    eyebrow: "Loja online",
    title: ["TUDO NUM", "SÓ LUGAR", "PRA VOCÊ."],
    subtitle:
      "Canecas, azulejos, garrafas e MDF personalizados também fazem parte da CriaMood. Dá uma olhada na loja completa.",
    primaryCta: { label: "Explorar a loja", href: STORE_URL, external: true },
    secondaryCta: {
      label: "Falar no WhatsApp",
      href: "https://wa.me/5521995515124",
      external: true,
    },
  },
];

const AUTOPLAY_MS = 6000;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % slides.length);
  }, []);

  const prev = () => {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [paused, next]);

  const slide = slides[index];
  const isImageSlide = Boolean(slide.image);

  return (
    <section
      className="relative bg-ink pt-[112px] md:pt-[122px] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {isImageSlide ? (
              <a
                href={slide.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  width={slide.width}
                  height={slide.height}
                  priority={index === 0}
                  sizes="100vw"
                  className="w-full h-auto block"
                />
              </a>
            ) : (
              <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-14 items-center px-6 py-20 min-h-[420px]">
                <div>
                  <p className="uppercase tracking-[4px] text-sm text-brand mb-5 font-medium">
                    {slide.eyebrow}
                  </p>

                  <h1 className="font-display text-5xl md:text-7xl leading-[0.95] text-paper mb-8">
                    {slide.title.map((line, i) => (
                      <span key={i}>
                        {i === slide.title.length - 1 ? (
                          <span className="text-brand">{line}</span>
                        ) : (
                          line
                        )}
                        {i < slide.title.length - 1 && <br />}
                      </span>
                    ))}
                  </h1>

                  <p className="text-lg md:text-xl text-paper-muted max-w-lg mb-10">
                    {slide.subtitle}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={slide.primaryCta.href}
                      target={
                        slide.primaryCta.external ? "_blank" : undefined
                      }
                      rel={
                        slide.primaryCta.external
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="bg-brand hover:bg-brand-dark text-ink font-semibold px-8 py-4 rounded-full duration-300 text-center"
                    >
                      {slide.primaryCta.label}
                    </a>

                    {slide.secondaryCta && (
                      <a
                        href={slide.secondaryCta.href}
                        target={
                          slide.secondaryCta.external ? "_blank" : undefined
                        }
                        rel={
                          slide.secondaryCta.external
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="border-2 border-paper/30 text-paper font-semibold px-8 py-4 rounded-full hover:border-brand hover:text-brand duration-300 text-center"
                      >
                        {slide.secondaryCta.label}
                      </a>
                    )}
                  </div>
                </div>

                <div className="relative">
                  <div className="border border-white/10 rounded-[32px] p-10 bg-ink-soft">
                    <p className="font-display text-3xl md:text-4xl text-paper leading-tight mb-6">
                      &ldquo;Os que confiam no SENHOR serão como o monte
                      de Sião, que não se abala, mas permanece para
                      sempre.&rdquo;
                    </p>
                    <p className="text-sm uppercase tracking-[3px] text-brand mb-8">
                      Salmos 125:1
                    </p>
                    <div className="h-px bg-white/10 mb-8" />
                    <p className="text-paper-muted text-sm leading-relaxed">
                      Design autoral inspirado em passagens que marcam. Cada
                      estampa carrega uma mensagem — sem perder a estética
                      urbana que você já usa no dia a dia.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* NAVEGAÇÃO (sobreposta, funciona igual nos dois tipos de slide) */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-4 z-10">
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Ir para o banner ${i + 1}`}
                className={`h-2 rounded-full duration-300 ${
                  i === index ? "w-8 bg-brand" : "w-2 bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>

        <button
          onClick={prev}
          aria-label="Banner anterior"
          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-ink/60 backdrop-blur border border-white/15 text-paper hover:border-brand hover:text-brand duration-300 flex items-center justify-center z-10"
        >
          ←
        </button>
        <button
          onClick={next}
          aria-label="Próximo banner"
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-ink/60 backdrop-blur border border-white/15 text-paper hover:border-brand hover:text-brand duration-300 flex items-center justify-center z-10"
        >
          →
        </button>
      </div>
    </section>
  );
}
