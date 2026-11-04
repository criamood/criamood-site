// Lê as fotos de public/produtos e gera src/lib/fotos.json
import { readdirSync, writeFileSync } from "node:fs";
const ok = /\.(jpe?g|png|webp)$/i;
const mapa = {};
for (const f of readdirSync("public/produtos")) {
  if (ok.test(f)) mapa[f.replace(ok, "").toLowerCase()] = "/produtos/" + f;
}
writeFileSync("lib/fotos.json", JSON.stringify(mapa, null, 2) + "\n");
console.log(Object.keys(mapa).length + " foto(s) encontrada(s).");
