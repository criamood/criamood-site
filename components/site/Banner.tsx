"use client";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { waLink } from "@/lib/site";

// Quando tiver as artes prontas, troque cada slide por uma imagem de fundo (campo img).
const slides = [
  { word: "Canecas", script: "personalizadas", bg: "linear-gradient(120deg,#f1f8c4,#c6dc2a)", wc: "#2f6a00", sc: "#1e2610", cta: "Pedir pelo WhatsApp", wa: "Olá! Quero personalizar canecas.", label: "foto: canecas personalizadas" },
  { word: "Garrafas", script: "térmicas", bg: "linear-gradient(120deg,#d9f3f0,#6fd0c8)", wc: "#0b6b64", sc: "#1e2610", cta: "Pedir pelo WhatsApp", wa: "Olá! Quero personalizar garrafas térmicas.", label: "foto: garrafas e copos" },
  { word: "Camisetas", script: "personalizadas", bg: "#14130f", wc: "#b5d334", sc: "#f1efe2", cta: "Pedir pelo WhatsApp", wa: "Olá! Quero camisetas personalizadas.", label: "foto: camiseta de poliéster", dark: true },
  { word: "Bottons", script: "e chaveiros", bg: "linear-gradient(120deg,#ffeaa8,#ffc83d)", wc: "#a35200", sc: "#2c2b26", cta: "Pedir pelo WhatsApp", wa: "Olá! Quero bottons e chaveiros personalizados.", label: "foto: bottons e chaveiros" },
  { word: "CriaClick", script: "foto lembrança para eventos", bg: "linear-gradient(120deg,#e6f6c8,#8fd14f)", wc: "#1f5d00", sc: "#1e2610", cta: "Conhecer a CriaClick", href: "/criaclick", label: "foto: foto lembrança" },
  { word: "Doxa", script: "camisetas cristãs de algodão", bg: "#0b0b0b", wc: "#EEE582", sc: "#CFC55B", cta: "Entrar na Doxa", href: "/doxa", label: "foto: camiseta Doxa", dark: true },
];

export default function Banner() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const go = useCallback((n: number) => setI((n + slides.length) % slides.length), []);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    timer.current = setInterval(() => setI((v) => (v + 1) % slides.length), 6000);
    return () => { if (timer.current) clearInterval(timer.current); };
  }, [paused, i]);

  return (
    <section className="car" aria-roledescription="carrossel" aria-label="Destaques"
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {slides.map((s, k) => (
        <div key={s.word} className={`slide${k === i ? " on" : ""}${s.dark ? " dk" : ""}`} style={{ background: s.bg }} aria-hidden={k !== i}>
          <div className="w sl">
            <div className="txt">
              <h2 style={{ color: s.wc }}>{s.word}</h2>
              <p className="scr" style={{ color: s.sc }}>{s.script}</p>
              {s.href
                ? <Link className="btn pill" href={s.href} tabIndex={k === i ? 0 : -1}>{s.cta}</Link>
                : <a className="btn pill" href={waLink(s.wa!)} target="_blank" rel="noopener noreferrer" tabIndex={k === i ? 0 : -1}>{s.cta}</a>}
            </div>
            <div className="ph">{s.label}</div>
          </div>
        </div>
      ))}
      <button className="arr l" aria-label="Banner anterior" onClick={() => go(i - 1)}>‹</button>
      <button className="arr r" aria-label="Próximo banner" onClick={() => go(i + 1)}>›</button>
      <div className="dots">
        {slides.map((s, k) => <button key={s.word} aria-label={`Ir para o banner ${k + 1}`} aria-current={k === i} onClick={() => go(k)} />)}
      </div>
    </section>
  );
}
