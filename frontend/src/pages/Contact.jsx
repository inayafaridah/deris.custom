import { useState } from "react";
import { WhatsappLogo, InstagramLogo, MapPin, Clock, ArrowRight } from "@phosphor-icons/react";
import { BRAND, buildWaMessage } from "../lib/constants";

export default function Contact() {
  const [form, setForm] = useState({ name: "", org: "", product: "Varsity Jacket", qty: "", note: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Halo DERIS!\n\nNama: ${form.name}\nOrganisasi/Kampus: ${form.org}\nProduk: ${form.product}\nJumlah: ${form.qty}\nCatatan: ${form.note}\n\nMohon info lebih lanjut. Terima kasih!`;
    window.open(buildWaMessage(msg), "_blank");
  };

  return (
    <div data-testid="contact-page">
      <section className="pt-20 pb-12 md:pt-32 md:pb-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="overline text-[#D4AF37] mb-6">Contact</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.92] max-w-4xl">
            Mari ngobrol soal <br />
            <span className="text-[#D4AF37] italic font-medium">jaket</span> kalian.
          </h1>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5 space-y-6">
              <a
                href={BRAND.whatsappLink}
                target="_blank"
                rel="noreferrer"
                data-testid="contact-wa-card"
                className="block bg-[#141414] border border-white/10 hover:border-[#D4AF37] p-8 transition-all duration-300 hover:-translate-y-1 group"
              >
                <WhatsappLogo size={36} weight="duotone" className="text-[#D4AF37] mb-4" />
                <p className="overline text-white/40 mb-2">WhatsApp</p>
                <p className="font-display text-2xl font-bold tracking-tight mb-2">{BRAND.whatsapp}</p>
                <p className="text-sm text-white/60 inline-flex items-center gap-1 group-hover:text-[#D4AF37] transition-colors">
                  Chat sekarang <ArrowRight size={14} />
                </p>
              </a>

              <a
                href={BRAND.instagramLink}
                target="_blank"
                rel="noreferrer"
                data-testid="contact-ig-card"
                className="block bg-[#141414] border border-white/10 hover:border-[#D4AF37] p-8 transition-all duration-300 hover:-translate-y-1 group"
              >
                <InstagramLogo size={36} weight="duotone" className="text-[#D4AF37] mb-4" />
                <p className="overline text-white/40 mb-2">Instagram</p>
                <p className="font-display text-2xl font-bold tracking-tight mb-2">@{BRAND.instagram}</p>
                <p className="text-sm text-white/60 inline-flex items-center gap-1 group-hover:text-[#D4AF37] transition-colors">
                  Lihat portfolio <ArrowRight size={14} />
                </p>
              </a>

              <div className="bg-[#141414] border border-white/10 p-8 space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin size={22} className="text-[#D4AF37] shrink-0 mt-0.5" weight="duotone" />
                  <div>
                    <p className="text-sm font-semibold mb-1">Lokasi</p>
                    <p className="text-sm text-white/60">Bandung & Jakarta, Indonesia</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={22} className="text-[#D4AF37] shrink-0 mt-0.5" weight="duotone" />
                  <div>
                    <p className="text-sm font-semibold mb-1">Jam Operasional</p>
                    <p className="text-sm text-white/60">Senin – Sabtu · 09.00 – 21.00 WIB</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-[#141414] border border-white/10 p-8 md:p-10">
                <p className="overline text-[#D4AF37] mb-3">Form Pemesanan Cepat</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tighter leading-tight mb-8">
                  Kirim detail, kami balas via WhatsApp.
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <Field label="Nama Lengkap" name="name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} placeholder="Budi Santoso" required />
                    <Field label="Organisasi / Kampus" name="org" value={form.org} onChange={(v) => setForm({ ...form, org: v })} placeholder="HIMA TI ITB" required />
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="overline text-white/50 mb-2 block">Produk</label>
                      <select
                        data-testid="contact-product"
                        value={form.product}
                        onChange={(e) => setForm({ ...form, product: e.target.value })}
                        className="w-full bg-[#0A0A0A] border border-white/15 px-4 py-3 text-sm focus:border-[#D4AF37] outline-none transition-colors"
                      >
                        {["Varsity Jacket", "Bomber Jacket", "Hoodie", "Kaos Komunitas", "Kemeja", "Topi"].map((p) => (
                          <option key={p}>{p}</option>
                        ))}
                      </select>
                    </div>
                    <Field label="Estimasi Jumlah" name="qty" value={form.qty} onChange={(v) => setForm({ ...form, qty: v })} placeholder="50 pcs" required />
                  </div>
                  <div>
                    <label className="overline text-white/50 mb-2 block">Catatan</label>
                    <textarea
                      data-testid="contact-note"
                      value={form.note}
                      onChange={(e) => setForm({ ...form, note: e.target.value })}
                      rows={4}
                      placeholder="Ceritakan kebutuhan, deadline, atau referensi desain..."
                      className="w-full bg-[#0A0A0A] border border-white/15 px-4 py-3 text-sm focus:border-[#D4AF37] outline-none transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    data-testid="contact-submit"
                    className="inline-flex items-center gap-2 px-7 py-4 bg-[#D4AF37] hover:bg-[#F5C34A] text-black font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Kirim via WhatsApp
                    <WhatsappLogo size={18} weight="fill" />
                  </button>
                </form>
              </div>
            </div>
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
      data-testid={`contact-${name}`}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      required={required}
      className="w-full bg-[#0A0A0A] border border-white/15 px-4 py-3 text-sm focus:border-[#D4AF37] outline-none transition-colors"
    />
  </div>
);
