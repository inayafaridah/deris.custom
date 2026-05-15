import { useEffect } from "react";
import { X, CaretLeft, CaretRight } from "@phosphor-icons/react";

export const Lightbox = ({ images, index, onClose, onPrev, onNext }) => {
  useEffect(() => {
    if (index === -1) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, onClose, onPrev, onNext]);

  if (index === -1) return null;

  return (
    <div
      data-testid="lightbox"
      onClick={onClose}
      className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12"
    >
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        data-testid="lightbox-close"
        className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-black text-white flex items-center justify-center transition-colors"
        aria-label="Close"
      >
        <X size={20} weight="bold" />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        data-testid="lightbox-prev"
        className="absolute left-4 md:left-12 w-12 h-12 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-black text-white flex items-center justify-center transition-colors"
        aria-label="Previous"
      >
        <CaretLeft size={20} weight="bold" />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        data-testid="lightbox-next"
        className="absolute right-4 md:right-12 w-12 h-12 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-black text-white flex items-center justify-center transition-colors"
        aria-label="Next"
      >
        <CaretRight size={20} weight="bold" />
      </button>
      <img
        src={images[index]}
        alt="gallery"
        className="max-w-full max-h-[85vh] object-contain"
        onClick={(e) => e.stopPropagation()}
      />
      <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm overline">
        {index + 1} / {images.length}
      </p>
    </div>
  );
};
