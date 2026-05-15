import { useState } from "react";
import { PRODUCTS, buildWaMessage, BRAND } from "../lib/constants";
import { ArrowRight, WhatsappLogo, Ruler } from "@phosphor-icons/react";

const CATEGORIES = ["Semua", "Jaket", "Hoodie", "Kaos", "Kemeja", "Headwear"];

export default function Products() {
  const [cat, setCat] = useState("Semua");
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
              <button
                key={c}
                onClick={() => setCat(c)}
                data-testid={`filter-${c.toLowerCase()}`}
                className={`px-5 py-2 text-sm font-medium rounded-full border transition-all duration-300 ${
                  cat === c
                    ? "bg-[#D4AF37] border-[#D4AF37] text-black"
                    : "border-white/15 text-white/70 hover:border-[#D4AF37] hover:text-[#D4AF37]"
                }`}
              >
                {c}
              </button>
            ))}
            <a
              href={BRAND.sizeChartLink}
              target="_blank"
              rel="noreferrer"
              data-testid="size-chart-btn"
              className="ml-auto inline-flex items-center gap-2 px-5 py-2 text-sm font-medium rounded-full border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
            >
              <Ruler size={16} weight="bold" />
              Lihat Size Chart
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <article
                key={p.slug}
                data-testid={`product-card-${p.slug}`}
                className="group bg-[#141414] border border-white/10 hover:border-[#D4AF37] transition-all duration-500 hover:-translate-y-1 flex flex-col"
              >
                <div className="aspect-[4/5] overflow-hidden bg-[#0A0A0A]">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <p className="overline text-white/40 mb-2">{p.category}</p>
                  <h3 className="font-display text-2xl font-bold tracking-tight mb-3">{p.name}</h3>
                  <p className="text-sm text-white/60 leading-relaxed mb-5 flex-1">{p.desc}</p>
                  <ul className="space-y-1.5 mb-6">
                    {p.highlights.map((h, i) => (
                      <li key={i} className="text-xs text-white/50 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#D4AF37]" /> {h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between border-t border-white/10 pt-5">
                    <p className="text-[#D4AF37] font-semibold text-sm">{p.price}</p>
                    <a
                      href={buildWaMessage(`Halo DERIS, saya tertarik dengan ${p.name}. Boleh minta info lebih lanjut?`)}
                      target="_blank"
                      rel="noreferrer"
                      data-testid={`order-${p.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-[#D4AF37] transition-colors"
                    >
                      <WhatsappLogo size={14} weight="fill" />
                      Pesan
                      <ArrowRight size={12} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* SIZE CHART CALLOUT */}
          <div className="mt-16 bg-gradient-to-br from-[#141414] to-[#0A0A0A] border border-white/10 p-8 md:p-12">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-2 flex justify-center md:justify-start">
                <div className="w-20 h-20 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center">
                  <Ruler size={36} weight="duotone" className="text-[#D4AF37]" />
                </div>
              </div>
              <div className="md:col-span-7">
                <p className="overline text-[#D4AF37] mb-3">Size Chart Lengkap</p>
                <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tighter mb-3 leading-tight">
                  Bingung pilih ukuran? Pakai panduan resmi DERIS.
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  Tersedia size chart untuk <span className="text-white">Jaket, Kaos Panjang, Kaos Pendek, Kemeja</span>, dengan range sampai <span className="text-white">8XL</span>. Akses langsung via Google Drive.
                </p>
              </div>
              <div className="md:col-span-3 flex md:justify-end">
                <a
                  href={BRAND.sizeChartLink}
                  target="_blank"
                  rel="noreferrer"
                  data-testid="size-chart-cta"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4AF37] hover:bg-[#F5C34A] text-black font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5"
                >
                  Buka Size Chart
                  <ArrowRight size={16} weight="bold" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
