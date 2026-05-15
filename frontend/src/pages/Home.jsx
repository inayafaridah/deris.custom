import { Link } from "react-router-dom";
import { ArrowRight, Hand, MapPin, Coins, Lightning, TShirt, UsersThree, Gift } from "@phosphor-icons/react";
import { MEDIA, PRODUCTS, VALUES, SERVICES } from "../lib/constants";
import { LogoMarquee } from "../components/LogoMarquee";
import { ReviewsCarousel } from "../components/ReviewsCarousel";

const valueIcons = { Hand, MapPin, Coins, Lightning };
const serviceIcons = { Tshirt: TShirt, Lightning, UsersThree, Gift };

export default function Home() {
  return (
    <div data-testid="home-page">
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-end overflow-hidden">
        <img src={MEDIA.hero} alt="DERIS jacket" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/80 via-transparent to-transparent" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 pb-20 md:pb-28 w-full">
          <div className="max-w-4xl reveal">
            <p className="overline text-[#D4AF37] mb-6">Custom Apparel · Sejak 2018 · Bandung × Jakarta</p>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.92] tracking-tighter mb-8 text-[#FFFFFF]">
              Jaket Custom <br />
              untuk <span className="text-[#D4AF37] italic font-medium">Cerita</span> <br />
              dan Solidaritas.
            </h1>
            <p className="text-base md:text-lg text-[rgba(255,255,255,0.7)] max-w-xl mb-10 leading-relaxed">
              Vendor jaket komunitas yang amanah dan profesional — dipercaya himpunan, organisasi kampus, dan komunitas di seluruh Indonesia.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/design" data-testid="hero-design-btn"
                className="inline-flex items-center gap-2 px-7 py-4 bg-[#D4AF37] hover:bg-[#F5C34A] text-black font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5">
                Rancang Jaketmu <ArrowRight size={18} weight="bold" />
              </Link>
              <Link to="/products" data-testid="hero-product-btn"
                className="inline-flex items-center gap-2 px-7 py-4 border border-[rgba(255,255,255,0.2)] hover:border-[#D4AF37] hover:text-[#D4AF37] text-[#FFFFFF] font-semibold rounded-full transition-all duration-300">
                Lihat Katalog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT LOGOS MARQUEE */}
      <LogoMarquee />

      {/* VALUES */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="max-w-3xl mb-16">
            <p className="overline text-[#D4AF37] mb-4">Kenapa DERIS</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[0.95]">
              Empat hal yang bikin kami <span className="text-[#D4AF37]">berbeda.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10">
            {VALUES.map((v, i) => {
              const Icon = valueIcons[v.icon];
              return (
                <div key={i} data-testid={`value-card-${i}`}
                  className="p-8 lg:p-10 border-r border-b border-white/10 hover:bg-[#141414] transition-colors duration-300 group">
                  <Icon size={36} weight="duotone" className="text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform duration-500" />
                  <h3 className="font-display text-xl font-bold tracking-tight mb-3">{v.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRODUCT PREVIEW */}
      <section className="py-24 md:py-32 bg-[#0c0c0c]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <p className="overline text-[#D4AF37] mb-4">Produk Unggulan</p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[0.95]">
                Dari varsity sampai lanyard — kami bikin semuanya.
              </h2>
            </div>
            <Link to="/products" data-testid="home-view-all-btn" className="text-[#D4AF37] hover:text-[#F5C34A] font-medium inline-flex items-center gap-2 group">
              Lihat semua <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.slice(0, 6).map((p) => (
              <Link to="/products" key={p.slug} data-testid={`home-product-${p.slug}`}
                className="group block bg-[#141414] border border-white/10 hover:border-[#D4AF37] transition-all duration-500 hover:-translate-y-1">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <p className="overline text-white/40 mb-2">{p.category}</p>
                  <h3 className="font-display text-xl font-bold tracking-tight mb-2">{p.name}</h3>
                  <p className="text-xs text-[#D4AF37]/80">Bahan: {p.materials.slice(0,2).join(" · ")}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* OUR SERVICES */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="max-w-3xl mb-16">
            <p className="overline text-[#D4AF37] mb-4">Our Services</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[0.95]">
              Empat paket lengkap untuk <span className="text-[#D4AF37] italic font-medium">komunitasmu.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s, i) => {
              const Icon = serviceIcons[s.icon];
              return (
                <div key={i} data-testid={`service-card-${i}`}
                  className="group bg-[#141414] border border-white/10 hover:border-[#D4AF37] p-7 md:p-8 transition-all duration-500 hover:-translate-y-1 flex flex-col">
                  <div className="w-14 h-14 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center mb-6">
                    <Icon size={28} weight="duotone" className="text-[#D4AF37]" />
                  </div>
                  <h3 className="font-display text-xl font-bold tracking-tight mb-3">{s.name}</h3>
                  <p className="text-sm text-white/65 leading-relaxed mb-5 flex-1">{s.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {s.tags.map((t) => (
                      <span key={t} className="text-[10px] uppercase tracking-wider px-2.5 py-1 border border-white/10 text-white/60">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DESIGNER CTA */}
      <section className="py-24 md:py-32 bg-[#0c0c0c] border-y border-white/10 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="overline text-[#D4AF37] mb-4">Make a Design</p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[0.95] mb-6">
                Rancang sendiri. <br />Lihat hasilnya <span className="italic text-[#D4AF37]">real-time.</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg">
                Tools interaktif untuk meletakkan logo, nama, dan teks pada mockup jaket. Setelah selesai, kirim langsung ke WhatsApp kami.
              </p>
              <Link to="/design" data-testid="home-designer-cta"
                className="inline-flex items-center gap-2 px-7 py-4 bg-[#D4AF37] hover:bg-[#F5C34A] text-black font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5">
                Mulai Mendesain <ArrowRight size={18} weight="bold" />
              </Link>
            </div>
            <div className="relative aspect-square bg-gradient-to-br from-[#141414] to-[#0A0A0A] border border-white/10 overflow-hidden">
              <img src={MEDIA.jacketMockup} alt="mockup" className="w-full h-full object-contain p-8" />
              <div className="absolute top-6 left-6 px-3 py-1.5 bg-[#D4AF37] text-black text-xs font-semibold rounded-full">
                LIVE PREVIEW
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <ReviewsCarousel />
    </div>
  );
}
