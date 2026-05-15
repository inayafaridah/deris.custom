import { Link } from "react-router-dom";
import { Star, ArrowRight } from "@phosphor-icons/react";
import { REVIEWS } from "../lib/constants";

export const ReviewsCarousel = () => {
  return (
    <section data-testid="reviews-section" className="py-24 md:py-32 bg-[#0c0c0c] border-y border-white/10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 mb-12">
        <p className="overline text-[#D4AF37] mb-4">Kata Mereka</p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[0.95] max-w-3xl">
          Cerita dari komunitas yang sudah <span className="text-[#D4AF37] italic font-medium">percaya.</span>
        </h2>
      </div>

      <div className="relative">
        <div className="flex marquee-track gap-6 whitespace-normal" style={{ animationDuration: "60s" }}>
          {[...Array(2)].map((_, dup) => (
            <div key={dup} className="flex gap-6 shrink-0">
              {REVIEWS.map((r, i) => (
                <article
                  key={`${dup}-${i}`}
                  data-testid={`review-${i}`}
                  className="w-[340px] md:w-[400px] shrink-0 bg-[#141414] border border-white/10 hover:border-[#D4AF37] p-7 transition-colors duration-300"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} size={16} weight={s < r.rating ? "fill" : "regular"} className={s < r.rating ? "text-[#D4AF37]" : "text-white/15"} />
                    ))}
                  </div>
                  <p className="text-white/85 text-sm md:text-base leading-relaxed mb-6 whitespace-normal">"{r.text}"</p>
                  <div className="pt-5 border-t border-white/10">
                    <p className="font-display font-bold text-base">{r.name}</p>
                    <p className="text-xs text-white/50 mt-1">{r.org}</p>
                    <p className="text-[10px] text-[#D4AF37] mt-2 overline">{r.date}</p>
                  </div>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
        <Link
          to="/story"
          data-testid="share-story-btn"
          className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black rounded-full font-semibold text-sm transition-all duration-300"
        >
          Bagikan Ceritamu
          <ArrowRight size={16} weight="bold" />
        </Link>
      </div>
    </section>
  );
};
