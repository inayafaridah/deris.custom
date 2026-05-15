import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { List, X } from "@phosphor-icons/react";
import { BRAND } from "../lib/constants";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Product" },
  { to: "/design", label: "Make a Design" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/70 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <Link to="/" data-testid="logo-link" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden shrink-0 ring-1 ring-white/20 group-hover:ring-[#D4AF37] transition-all">
            <img src={BRAND.logo} alt="DERIS logo" className="w-10 h-10 object-contain" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-xl font-bold tracking-tighter">
              {BRAND.name}
              <span className="text-[#D4AF37]">.</span>
            </span>
            <span className="overline text-[10px] text-white/50 mt-1 hidden sm:inline">Custom Apparel</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              data-testid={`nav-${n.label.toLowerCase().replace(/\s+/g, "-")}`}
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive ? "text-[#D4AF37]" : "text-white/70 hover:text-white"
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={BRAND.whatsappLink}
            target="_blank"
            rel="noreferrer"
            data-testid="header-order-btn"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-[#D4AF37] hover:bg-[#F5C34A] text-black font-semibold text-sm rounded-full transition-all duration-300 hover:-translate-y-0.5"
          >
            Order via WA
          </a>
          <button
            onClick={() => setOpen(!open)}
            data-testid="mobile-menu-toggle"
            className="lg:hidden p-2 text-white"
            aria-label="menu"
          >
            {open ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div data-testid="mobile-menu" className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">
          <nav className="px-6 py-6 flex flex-col gap-1">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                data-testid={`mobile-nav-${n.label.toLowerCase().replace(/\s+/g, "-")}`}
                className={({ isActive }) =>
                  `py-3 text-base font-medium border-b border-white/5 ${
                    isActive ? "text-[#D4AF37]" : "text-white/80"
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
