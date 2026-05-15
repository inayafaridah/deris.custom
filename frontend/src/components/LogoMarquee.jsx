import { CLIENT_LOGOS } from "../lib/constants";

export const LogoMarquee = () => {
  return (
    <section data-testid="logo-marquee" className="border-y border-white/10 bg-[#0A0A0A] py-10 overflow-hidden">
      <p className="overline text-center text-[#D4AF37] mb-6 text-xs">Dipercaya komunitas & organisasi</p>
      <div className="relative">
        <div className="flex marquee-track gap-16 whitespace-nowrap items-center">
          {[...Array(2)].map((_, dup) => (
            <div key={dup} className="flex gap-16 items-center shrink-0">
              {CLIENT_LOGOS.map((c, i) => (
                <div key={`${dup}-${i}`} className="flex items-center gap-4 shrink-0 group">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center overflow-hidden ring-1 ring-white/10 group-hover:ring-[#D4AF37] transition-all">
                    <img src={c.img} alt={c.name} className="w-full h-full object-contain p-1.5" />
                  </div>
                  <span className="font-display text-base md:text-lg font-bold tracking-tight text-white/60 group-hover:text-white transition-colors">
                    {c.name}
                  </span>
                  <span className="text-[#D4AF37] text-2xl">·</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
