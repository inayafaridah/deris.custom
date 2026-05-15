import { useState } from "react";
import { PRODUCTS, SIZE_CHARTS, buildWaMessage, BRAND } from "../lib/constants";
import { ArrowRight, WhatsappLogo, Ruler, X } from "@phosphor-icons/react";

const CATEGORIES = ["Semua", "Jaket", "Pakaian", "Aksesoris"];

export default function Products() {
  const [cat, setCat] = useState("Semua");
  const [zoom, setZoom] = useState(null);
  const filtered = cat === "Semua" ? PRODUCTS : PRODUCTS.filter((p) => p.category === cat);

  return (
    <div data-testid="products-page">
      <section className="pt-20 pb-12 md:pt-32 md:pb-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="overline text-[#D4AF37] mb-6">Katalog Produk</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.92] max-w-4xl">
            Semua produk, <br />
            <span className="text-[#D4AF37] italic font-medium">satu kualitas</span>.
          </h1>
          <p className="text-white/60 mt-6 max-w-2xl text-base md:text-lg">
            Pilih kategori atau jelajahi semua produk yang siap di-custom sesuai kebutuhan komunitasmu.
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="flex flex-wrap gap-2 mb-10 border-b border-white/10 pb-6 items-center">
            {CATEGORIES.map((c) => (
              <button key={c} onClick={() => setCat(c)} data-testid={`filter-${c.toLowerCase()}`}
                className={`px-5 py-2 text-sm font-medium rounded-full border transition-all duration-300 ${
                  cat === c ? "bg-[#D4AF37] border-[#D4AF37] text-black" : "border-white/15 text-white/70 hover:border-[#D4AF37] hover:text-[#D4AF37]"
                }`}>
                {c}
              </button>
            ))}
            <a href={BRAND.sizeChartLink} target="_blank" rel="noreferrer" data-testid="size-chart-btn"
              className="ml-auto inline-flex items-center gap-2 px-5 py-2 text-sm font-medium rounded-full border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300">
              <Ruler size={16} weight="bold" /> Drive Lengkap
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <article key={p.slug} data-testid={`product-card-${p.slug}`}
                className="group bg-[#141414] border border-white/10 hover:border-[#D4AF37] transition-all duration-500 hover:-translate-y-1 flex flex-col">
                <div className="aspect-[4/5] overflow-hidden bg-[#0A0A0A]">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <p className="overline text-white/40 mb-2">{p.category}</p>
                  <h3 className="font-display text-2xl font-bold tracking-tight mb-3">{p.name}</h3>
                  <p className="text-sm text-white/60 leading-relaxed mb-5 flex-1">{p.desc}</p>
                  <p className="overline text-[10px] text-[#D4AF37] mb-2">Bahan Tersedia</p>
                  <ul className="space-y-1.5 mb-6">
                    {p.materials.map((m, i) => (
                      <li key={i} className="text-xs text-white/65 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#D4AF37]" /> {m}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-end border-t border-white/10 pt-5">
                    <a href={buildWaMessage(`Halo DERIS, saya tertarik dengan ${p.name}. Boleh minta info lebih lanjut?`)}
                      target="_blank" rel="noreferrer" data-testid={`order-${p.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-[#D4AF37] transition-colors">
                      <WhatsappLogo size={14} weight="fill" /> Pesan via WA <ArrowRight size={12} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SIZE CHARTS VISUAL */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="mb-12">
            <p className="overline text-[#D4AF37] mb-4">Size Chart</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter leading-tight">
              Panduan ukuran resmi DERIS.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SIZE_CHARTS.map((s, i) => (
              <button key={s.name} onClick={() => setZoom(s)} data-testid={`size-chart-${i}`}
                className="group bg-[#141414] border border-white/10 hover:border-[#D4AF37] transition-all duration-300 overflow-hidden text-left">
                <div className="aspect-square overflow-hidden">
                  <img src={s.img} alt={`Size chart ${s.name}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="px-4 py-3">
                  <p className="font-display font-bold text-sm">Size Chart</p>
                  <p className="text-xs text-[#D4AF37] mt-0.5">{s.name}</p>
                </div>
              </button>
            ))}
          </div>
          <p className="text-sm text-white/60 mt-8 text-center max-w-2xl mx-auto">
            Masih ragu dengan ukuranmu?{" "}
            <a href={buildWaMessage("Halo DERIS, saya mau konsultasi size chart untuk pesanan.")} target="_blank" rel="noreferrer"
              className="text-[#D4AF37] hover:text-[#F5C34A] font-semibold underline-offset-4 hover:underline">
              Hubungi kami via WhatsApp
            </a>{" "}
            untuk konsultasi ukuran secara personal.
          </p>
        </div>
      </section>

      {/* Zoom modal */}
      {zoom && (
        <div data-testid="size-zoom" onClick={() => setZoom(null)}
          className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12">
          <button onClick={() => setZoom(null)} className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-black text-white flex items-center justify-center transition-colors">
            <X size={20} weight="bold" />
          </button>
          <img src={zoom.img} alt={zoom.name} onClick={(e) => e.stopPropagation()} className="max-w-full max-h-[85vh] object-contain" />
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm overline">{zoom.name}</p>
        </div>
      )}
    </div>
  );
}
