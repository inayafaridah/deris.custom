import "@/App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Products from "@/pages/Products";
import Designer from "@/pages/Designer";
import Portfolio from "@/pages/Portfolio";
import FAQ from "@/pages/FAQ";
import JoinStory from "@/pages/JoinStory";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/design" element={<Designer />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/story" element={<JoinStory />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <Toaster theme="dark" />
      </div>
    </ThemeProvider>
  );
}

export default App;
