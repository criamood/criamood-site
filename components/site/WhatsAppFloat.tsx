import { waLink } from "@/lib/site";
export default function WhatsAppFloat() {
  return <a className="fab" href={waLink("Olá! Vim pelo site da CriaMood.")} target="_blank" rel="noopener noreferrer">WhatsApp</a>;
}
