import { useState } from "react";
import { PORTFOLIO } from "../lib/constants";
import { Lightbox } from "../components/Lightbox";

export default function Portfolio() {
  const [lightbox, setLightbox] = useState({ open: false, images: [], index: 0 });

  const openGallery = (images, i = 0) => setLightbox({ open: true, images, index: i });
  const close = () => setLightbox({ ...lightbox, open: false });
  const prev = () => setLightbox((s) => ({ ...s, index: (s.index - 1 + s.images.length) % s.images.length }));
  const next = () => setLightbox((s) => ({ ...s, index: (s.index + 1) % s.images.length }));

  return (
    <div data-testid="portfolio-page">
      <section className="pt-20 pb-12 md:pt-32 md:pb-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="overline text-[#D4AF37] mb-6">Portfolio · Hasil Produksi</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.92] max-w-5xl">
            500+ komunitas. <br />
            <span className="text-[#D4AF37] italic font-medium">Satu standar</span> kualitas.
          </h1>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[280px] md:auto-rows-[300px] gap-4">
            {PORTFOLIO.map((item, i) => (
              <button
                key={i}
                onClick={() => openGallery(item.gallery, 0)}
                data-testid={`portfolio-item-${i}`}
                className={`group relative overflow-hidden bg-[#141414] border border-white/10 hover:border-[#D4AF37] transition-all duration-500 text-left ${item.span}`}
              >
                <img src={item.cover} alt={item.org} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute top-4 right-4 px-2.5 py-1 bg-[#D4AF37] text-black text-[10px] font-bold rounded-full overline">
                  {item.gallery.length} foto
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="overline text-[#D4AF37] mb-2">{item.type}</p>
                  <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight text-[#FFFFFF]">{item.org}</h3>
                  {item.sub && <p className="text-xs text-[rgba(255,255,255,0.75)] mt-1">{item.sub}</p>}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-16 text-center border-t border-white/10 pt-12">
            <p className="text-white/60 mb-4">Mau jadi bagian dari portfolio DERIS berikutnya?</p>
            <a
              href="https://wa.me/6281213167737?text=Halo%20DERIS,%20kami%20mau%20konsultasi%20pemesanan%20jaket%20komunitas."
              target="_blank" rel="noreferrer" data-testid="portfolio-cta"
              className="inline-flex items-center gap-2 px-7 py-4 bg-[#D4AF37] hover:bg-[#F5C34A] text-black font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5"
            >
              Mulai Konsultasi
            </a>
          </div>
        </div>
      </section>

      <Lightbox
        images={lightbox.images}
        index={lightbox.open ? lightbox.index : -1}
        onClose={close}
        onPrev={prev}
        onNext={next}
      />
    </div>
  );
}
