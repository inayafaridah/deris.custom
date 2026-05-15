import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { FAQS, buildWaMessage } from "../lib/constants";

export default function FAQ() {
  return (
    <div data-testid="faq-page">
      <section className="pt-20 pb-12 md:pt-32 md:pb-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="overline text-[#D4AF37] mb-6">FAQ · Pertanyaan Umum</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.92] max-w-4xl">
            Tanya jawab <br />
            <span className="text-[#D4AF37] italic font-medium">sebelum order</span>.
          </h1>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                data-testid={`faq-item-${i}`}
                className="border-b border-white/10"
              >
                <AccordionTrigger className="text-left font-display text-lg md:text-xl font-semibold hover:text-[#D4AF37] hover:no-underline py-6">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-white/70 text-base leading-relaxed pb-6">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-16 border border-white/10 p-8 md:p-10 bg-[#141414] text-center">
            <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-3">Masih ada pertanyaan?</h3>
            <p className="text-white/60 mb-6 max-w-md mx-auto">Tim DERIS siap membantu via WhatsApp setiap hari pukul 09.00–21.00 WIB.</p>
            <a
              href={buildWaMessage("Halo DERIS, saya mau bertanya tentang pemesanan.")}
              target="_blank"
              rel="noreferrer"
              data-testid="faq-cta"
              className="inline-flex items-center gap-2 px-7 py-4 bg-[#D4AF37] hover:bg-[#F5C34A] text-black font-semibold rounded-full transition-all duration-300"
            >
              Chat WhatsApp Sekarang
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
