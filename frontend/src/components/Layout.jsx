import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div className="grain min-h-screen bg-[#0A0A0A] text-white">
      <Header />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
