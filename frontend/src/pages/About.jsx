import { MEDIA, BRAND } from "../lib/constants";
import { Sparkle, Scissors, Users } from "@phosphor-icons/react";
import { CountUp } from "../components/CountUp";

export default function About() {
  return (
    <div data-testid="about-page">
      <section className="pt-20 pb-12 md:pt-32 md:pb-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="flex items-center gap-6 mb-10">
            <div className="w-24 h-24 md:w-28 md:h-28 bg-white rounded-full flex items-center justify-center overflow-hidden shrink-0 ring-2 ring-[#D4AF37]/40">
              <img src={BRAND.logo} alt="DERIS logo" className="w-24 h-24 md:w-28 md:h-28 object-contain" />
            </div>
            <div>
              <p className="overline text-[#D4AF37] mb-2">About DERIS</p>
              <p className="text-sm text-white/60">Custom Apparel · Sejak 2018</p>
            </div>
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.92] max-w-5xl">
            Lebih dari sekadar <span className="text-[#D4AF37] italic font-medium">jaket</span>—
            kami menjahit cerita komunitas.
          </h1>
        </div>
      </section>

      {/* Foto utama from user */}
      <section className="pb-12 md:pb-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="relative aspect-[16/10] md:aspect-[16/8] overflow-hidden bg-white border border-white/10">
            <img src={MEDIA.aboutMain} alt="DERIS Community" className="w-full h-full object-cover" />
          </div>
          <p className="text-xs text-center text-white/40 mt-3 overline">There Is Your Apparel · DERIS Community 2024</p>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            <div className="md:col-span-5 bg-[#141414] border border-white/10 p-8 md:p-10">
              <p className="overline text-[#D4AF37] mb-4">Cerita Kami</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tighter leading-tight mb-4">
                Dari Bandung untuk Indonesia.
              </h2>
              <p className="text-white/70 leading-relaxed text-sm md:text-base">
                Berdiri sejak 2018, DERIS lahir dari kebutuhan mahasiswa akan vendor jaket yang amanah dan transparan.
                Kami percaya setiap jaket bukan hanya pakaian — ia adalah identitas, kenangan angkatan, dan simbol kebersamaan.
              </p>
            </div>
            <div className="md:col-span-7 md:row-span-2 aspect-[16/12] md:aspect-auto overflow-hidden bg-white">
              <img src={MEDIA.aboutMain} alt="DERIS Community" className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="md:col-span-5 bg-[#141414] border border-white/10 p-8 md:p-10">
              <p className="overline text-[#D4AF37] mb-4">Misi Kami</p>
              <p className="text-white/70 leading-relaxed text-sm md:text-base">
                Memudahkan komunitas, himpunan, dan organisasi kampus mendapatkan jaket custom berkualitas
                dengan proses yang transparan, harga yang terjangkau, dan hasil yang tahan lama.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-[#0c0c0c] border-y border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="max-w-3xl mb-16">
            <p className="overline text-[#D4AF37] mb-4">Cara Kerja</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[0.95]">
              Tiga langkah, jaket impian siap dipakai.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {[
              { icon: Sparkle, no: "01", title: "Konsultasi & Desain", desc: "Hubungi kami atau gunakan fitur Make a Design. Tim kami bantu mockup digital sampai final." },
              { icon: Scissors, no: "02", title: "Produksi Presisi", desc: "Penjahit lokal berpengalaman mengerjakan pesananmu dengan standar kualitas tinggi." },
              { icon: Users, no: "03", title: "Pengiriman & Aftercare", desc: "Dikirim ke seluruh Indonesia. Garansi jahitan & kepuasan terjamin." },
            ].map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} data-testid={`step-${i}`} className="bg-[#0A0A0A] p-8 md:p-10 hover:bg-[#141414] transition-colors duration-300">
                  <p className="font-display text-5xl text-[#D4AF37]/40 font-bold mb-6">{s.no}</p>
                  <Icon size={32} weight="duotone" className="text-[#D4AF37] mb-4" />
                  <h3 className="font-display text-2xl font-bold tracking-tight mb-3">{s.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-4 gap-8 text-center md:text-left">
            {[
              { n: 6, suffix: "+", l: "Tahun pengalaman" },
              { n: 500, suffix: "+", l: "Komunitas dilayani" },
              { n: 15, suffix: "k+", l: "Apparel diproduksi" },
              { n: 4.9, suffix: "/5", l: "Rating customer" },
            ].map((stat, i) => (
              <div key={i} data-testid={`stat-${i}`} className="border-t border-white/10 pt-6">
                <p className="font-display text-5xl md:text-6xl font-bold text-[#D4AF37] tracking-tighter mb-2">
                  <CountUp to={stat.n} suffix={stat.suffix} />
                </p>
                <p className="text-sm uppercase tracking-widest text-white/50">{stat.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
