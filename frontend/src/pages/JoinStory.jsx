import { useState, useEffect } from "react";
import { Star, UploadSimple, CheckCircle, WhatsappLogo, Quotes } from "@phosphor-icons/react";
import { STORY_QUOTES, REVIEWS, buildWaMessage } from "../lib/constants";

export default function JoinStory() {
  const [quoteIdx, setQuoteIdx] = useState(0);
  const [form, setForm] = useState({ name: "", org: "", rating: 5, text: "", photo: null });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setQuoteIdx((i) => (i + 1) % STORY_QUOTES.length), 4500);
    return () => clearInterval(t);
  }, []);

  const onPhoto = (e) => {
    const f = e.target.files?.[0];
    if (f) setForm({ ...form, photo: f.name });
  };

  const submit = (e) => {
    e.preventDefault();
    const msg =
      `Halo DERIS, saya ingin berbagi cerita:\n\n` +
      `Nama: ${form.name}\n` +
      `Organisasi: ${form.org}\n` +
      `Rating: ${"★".repeat(form.rating)}${"☆".repeat(5 - form.rating)}\n` +
      `Cerita: ${form.text}\n` +
      (form.photo ? `Foto: ${form.photo} (akan dikirim terpisah)\n` : "") +
      `\nMohon dipublikasikan jika berkenan. Terima kasih!`;
    setSubmitted(true);
    setTimeout(() => window.open(buildWaMessage(msg), "_blank"), 800);
  };

  return (
    <div data-testid="story-page">
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.12)_0%,_transparent_50%)]" />
        <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 text-center">
          <p className="overline text-[#D4AF37] mb-6">Join the Story</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.92] max-w-5xl mx-auto">
            Setiap jaket punya <br />
            <span className="text-[#D4AF37] italic font-medium">cerita</span>. Ini cerita kamu.
          </h1>
          <p className="text-base md:text-lg text-white/65 max-w-2xl mx-auto mt-8 leading-relaxed">
            Bagikan pengalamanmu bersama DERIS — kisah komunitas, momen tak terlupakan, dan jaket yang menemani perjalananmu.
          </p>
        </div>
      </section>

      {/* Auto-rotating quotes */}
      <section className="py-16 md:py-24 bg-[#0c0c0c] border-y border-white/10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Quotes size={42} weight="fill" className="text-[#D4AF37] mx-auto mb-6 opacity-80" />
          <div className="relative h-32 md:h-24 flex items-center justify-center">
            {STORY_QUOTES.map((q, i) => (
              <p
                key={i}
                data-testid={`quote-${i}`}
                className={`absolute font-display text-xl md:text-2xl lg:text-3xl font-medium tracking-tight leading-snug transition-opacity duration-700 ${
                  i === quoteIdx ? "opacity-100" : "opacity-0"
                }`}
              >
                "{q}"
              </p>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-8">
            {STORY_QUOTES.map((_, i) => (
              <span key={i} className={`h-1 rounded-full transition-all ${i === quoteIdx ? "w-8 bg-[#D4AF37]" : "w-2 bg-white/20"}`} />
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <div className="bg-[#141414] border border-white/10 p-8 md:p-12 relative">
            {submitted ? (
              <div data-testid="success-state" className="text-center py-12 success-pulse">
                <CheckCircle size={72} weight="duotone" className="text-[#D4AF37] mx-auto mb-6" />
                <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tighter mb-3">Terima kasih, ceritamu sudah kami terima!</h3>
                <p className="text-white/65 max-w-md mx-auto">Tim DERIS akan menghubungi via WhatsApp untuk konfirmasi & publikasi.</p>
              </div>
            ) : (
              <>
                <p className="overline text-[#D4AF37] mb-3">Bagikan Ceritamu</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tighter leading-tight mb-8">
                  Tulis pengalamanmu di bawah.
                </h2>
                <form onSubmit={submit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <Field label="Nama Lengkap" required value={form.name} onChange={(v) => setForm({ ...form, name: v })} placeholder="Budi Santoso" name="name" />
                    <Field label="Organisasi / Komunitas" required value={form.org} onChange={(v) => setForm({ ...form, org: v })} placeholder="HIMA TI Telkom Univ" name="org" />
                  </div>

                  <div>
                    <label className="overline text-white/50 mb-3 block">Rating</label>
                    <div className="flex gap-2" data-testid="rating-stars">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <button
                          key={n}
                          type="button"
                          onClick={() => setForm({ ...form, rating: n })}
                          data-testid={`star-${n}`}
                          className="transition-transform hover:scale-110"
                        >
                          <Star size={32} weight={n <= form.rating ? "fill" : "regular"} className={n <= form.rating ? "text-[#D4AF37]" : "text-white/20"} />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="overline text-white/50 mb-2 block">Cerita Kamu</label>
                    <textarea
                      data-testid="story-text"
                      value={form.text}
                      onChange={(e) => setForm({ ...form, text: e.target.value })}
                      rows={5}
                      required
                      placeholder="Ceritakan pengalamanmu order di DERIS, kualitas produk, atau momen spesial bersama komunitasmu..."
                      className="w-full bg-[#0A0A0A] border border-white/15 px-4 py-3 text-sm focus:border-[#D4AF37] outline-none transition-colors resize-none"
                    />
                  </div>

                  <label data-testid="upload-photo-label" className="flex items-center gap-3 w-full px-4 py-4 border border-dashed border-white/15 hover:border-[#D4AF37] hover:text-[#D4AF37] text-white/65 text-sm cursor-pointer transition-colors">
                    <UploadSimple size={20} weight="bold" />
                    <span>{form.photo || "Upload foto (opsional)"}</span>
                    <input type="file" accept="image/*" onChange={onPhoto} className="hidden" data-testid="upload-photo-input" />
                  </label>

                  <button
                    type="submit"
                    data-testid="story-submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#D4AF37] hover:bg-[#F5C34A] text-black font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <WhatsappLogo size={20} weight="fill" /> Kirim Cerita ke DERIS
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Featured Reviews */}
      <section className="py-24 md:py-32 bg-[#0c0c0c] border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="overline text-[#D4AF37] mb-4">Featured Reviews</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tighter leading-[0.95] mb-12 max-w-2xl">
            Cerita pilihan dari komunitas DERIS.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.slice(0, 6).map((r, i) => (
              <article key={i} data-testid={`featured-review-${i}`} className="bg-[#141414] border border-white/10 hover:border-[#D4AF37] p-7 transition-colors duration-300">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} size={16} weight={s < r.rating ? "fill" : "regular"} className={s < r.rating ? "text-[#D4AF37]" : "text-white/15"} />
                  ))}
                </div>
                <p className="text-white/85 text-sm leading-relaxed mb-6">"{r.text}"</p>
                <div className="pt-5 border-t border-white/10">
                  <p className="font-display font-bold">{r.name}</p>
                  <p className="text-xs text-white/50 mt-1">{r.org}</p>
                  <p className="text-[10px] text-[#D4AF37] mt-2 overline">{r.date}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const Field = ({ label, name, value, onChange, placeholder, required }) => (
  <div>
    <label className="overline text-white/50 mb-2 block">{label}</label>
    <input
      type="text"
      data-testid={`story-${name}`}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      required={required}
      className="w-full bg-[#0A0A0A] border border-white/15 px-4 py-3 text-sm focus:border-[#D4AF37] outline-none transition-colors"
    />
  </div>
);
