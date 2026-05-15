import { Link } from "react-router-dom";
import { InstagramLogo, WhatsappLogo, MapPin } from "@phosphor-icons/react";
import { BRAND } from "../lib/constants";

export const Footer = () => {
  return (
    <footer data-testid="site-footer" className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center overflow-hidden shrink-0">
                <img src={BRAND.logo} alt="DERIS logo" className="w-14 h-14 object-contain" />
              </div>
              <div className="leading-none">
                <p className="font-display text-2xl font-bold tracking-tighter">DERIS<span className="text-[#D4AF37]">.</span></p>
                <p className="overline text-[10px] text-white/50 mt-1.5">Custom Apparel</p>
              </div>
            </div>
            <p className="overline text-[#D4AF37] mb-4">Bandung × Jakarta</p>
            <h3 className="font-display text-4xl md:text-5xl font-bold tracking-tighter leading-[0.95] mb-6">
              Saatnya komunitasmu punya jaket yang bercerita.
            </h3>
            <a
              href={BRAND.whatsappLink}
              target="_blank"
              rel="noreferrer"
              data-testid="footer-order-btn"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4AF37] hover:bg-[#F5C34A] text-black font-semibold rounded-full transition-all duration-300"
            >
              <WhatsappLogo size={20} weight="fill" />
              Mulai Pesan Sekarang
            </a>
          </div>

          <div className="md:col-span-3">
            <p className="overline text-white/50 mb-5">Navigasi</p>
            <ul className="space-y-3 text-sm">
              {["Home", "About", "Product", "Make a Design", "Portfolio", "Join the Story", "FAQ"].map((n) => {
                const to = n === "Home" ? "/" : n === "Make a Design" ? "/design" : n === "Join the Story" ? "/story" : `/${n.toLowerCase()}`;
                return (
                  <li key={n}>
                    <Link to={to} className="text-white/70 hover:text-[#D4AF37] transition-colors">
                      {n}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="overline text-white/50 mb-5">Hubungi Kami</p>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-white/80">
                <MapPin size={18} className="text-[#D4AF37] mt-0.5 shrink-0" />
                <span>Bandung · Jakarta, Indonesia</span>
              </li>
              <li>
                <a
                  href={BRAND.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-white/80 hover:text-[#D4AF37] transition-colors"
                >
                  <WhatsappLogo size={18} className="text-[#D4AF37]" weight="fill" />
                  {BRAND.whatsapp}
                </a>
              </li>
              <li>
                <a
                  href={BRAND.instagramLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-white/80 hover:text-[#D4AF37] transition-colors"
                >
                  <InstagramLogo size={18} className="text-[#D4AF37]" weight="fill" />
                  @{BRAND.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 overflow-hidden">
          <h1 className="font-display font-bold tracking-tighter leading-none text-[18vw] md:text-[14vw] text-white/[0.07] select-none whitespace-nowrap">
            DERIS.CUSTOM
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-8 text-xs text-white/40">
            <p>© {new Date().getFullYear()} DERIS — Jaket Custom untuk Cerita dan Solidaritas.</p>
            <p>Crafted in Bandung 🇮🇩</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
