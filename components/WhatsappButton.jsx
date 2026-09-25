export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/5521995515124"
      target="_blank"
      className="
        fixed
        bottom-4
        right-4
        bg-brand
        hover:bg-brand-dark
        hover:scale-105
        text-ink
        px-4
        py-3 md:px-6 md:py-4
        rounded-full
        shadow-2xl
        flex
        items-center
        gap-3
        z-50
        duration-300
      "
    >
      <img
        src="/icons/whatsapp.svg"
        alt="WhatsApp"
        className="w-5 h-5"
      />

      <span className="hidden md:block">
        WhatsApp
      </span>
    </a>
  );
}