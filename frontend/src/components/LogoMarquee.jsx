import { CLIENT_LOGOS } from "../lib/constants";

export const LogoMarquee = () => {
  return (
    <section data-testid="logo-marquee" className="border-y border-white/10 bg-[#0A0A0A] py-10 overflow-hidden">
      <p className="overline text-center text-[#D4AF37] mb-6 text-xs">Dipercaya komunitas & organisasi</p>
      <div className="relative">
        <div className="flex marquee-track gap-24 whitespace-nowrap items-center">
          {[...Array(2)].map((_, dup) => (
            <div key={dup} className="flex gap-24 items-center shrink-0">
              {CLIENT_LOGOS.map((c, i) => (
                <div key={`${dup}-${i}`} className="shrink-0">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center overflow-hidden ring-1 ring-white/10 hover:ring-[#D4AF37] transition-all">
                    <img src={c.img} alt={c.name} className="w-full h-full object-contain p-2" />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
