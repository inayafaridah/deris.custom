import { useRef, useState } from "react";
import {
  Upload, TextT, ArrowsClockwise, Trash, WhatsappLogo, Palette, Plus,
  CoatHanger, TShirt, ArrowLeft, FileArrowUp, CheckCircle,
} from "@phosphor-icons/react";
import { buildWaMessage } from "../lib/constants";

const CATEGORIES = [
  { id: "jaket", name: "Jaket", icon: CoatHanger, desc: "Varsity, Bomber, Hoodie, Coach, Windbreaker" },
  { id: "kemeja", name: "Kemeja", icon: TShirt, desc: "PDH, Flannel, Oxford Custom" },
  { id: "kaos", name: "Kaos", icon: TShirt, desc: "Cotton Combed, Polo, Jersey" },
];

const COLOR_PRESETS = [
  { name: "Hitam", body: "#0F0F0F", sleeves: "#0F0F0F" },
  { name: "Putih", body: "#F4EFE6", sleeves: "#F4EFE6" },
  { name: "Emas", body: "#D4AF37", sleeves: "#1A1A1A" },
  { name: "Maroon", body: "#5B0E0E", sleeves: "#1A1A1A" },
  { name: "Navy", body: "#0E1B3A", sleeves: "#F4EFE6" },
  { name: "Forest", body: "#1F3B2E", sleeves: "#E8E2D1" },
];

const FONTS = ["Cabinet Grotesk", "Manrope", "Impact", "Georgia", "Courier New", "Times New Roman", "Helvetica", "Verdana"];

export default function Designer() {
  const [category, setCategory] = useState(null); // null | "jaket" | "kemeja" | "kaos"
  const [path, setPath] = useState(null); // null | "have" | "create"
  const [uploaded, setUploaded] = useState(null);

  if (!category) return <CategorySelect onPick={setCategory} />;
  if (!path) return <PathQuestion category={category} onBack={() => setCategory(null)} onPick={setPath} />;
  if (path === "have") return <UploadFlow category={category} onBack={() => setPath(null)} uploaded={uploaded} setUploaded={setUploaded} />;
  return <Editor category={category} onBack={() => setPath(null)} />;
}

// === STEP 1: Pick category ===
const CategorySelect = ({ onPick }) => (
  <div data-testid="designer-page" className="pb-20 md:pb-32">
    <section className="pt-20 pb-8 md:pt-28 md:pb-12">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 text-center">
        <p className="overline text-[#D4AF37] mb-6">Make a Design · Step 1 / 3</p>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.95] mb-4">
          Mau desain <span className="text-[#D4AF37] italic font-medium">apa</span> hari ini?
        </h1>
        <p className="text-white/60 max-w-xl mx-auto">Pilih kategori produk yang ingin kamu desain.</p>
      </div>
    </section>
    <section>
      <div className="max-w-[1100px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-3 gap-5">
          {CATEGORIES.map((c) => {
            const Icon = c.icon;
            return (
              <button key={c.id} onClick={() => onPick(c.id)} data-testid={`cat-${c.id}`}
                className="group bg-[#141414] border border-white/10 hover:border-[#D4AF37] p-8 md:p-10 text-left transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] transition-colors">
                  <Icon size={32} weight="duotone" className="text-[#D4AF37] group-hover:text-black transition-colors" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-2">Design {c.name}</h3>
                <p className="text-sm text-white/60">{c.desc}</p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  </div>
);

// === STEP 2: Have design or create new ===
const PathQuestion = ({ category, onBack, onPick }) => (
  <div data-testid="path-question" className="pb-20 md:pb-32">
    <section className="pt-20 pb-8 md:pt-28 md:pb-12">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <button onClick={onBack} data-testid="back-to-cat" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-[#D4AF37] mb-8 transition-colors">
          <ArrowLeft size={16} /> Ganti kategori
        </button>
        <p className="overline text-[#D4AF37] mb-6">Make a Design · Step 2 / 3</p>
        <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tighter leading-[0.95] max-w-3xl mb-4">
          Apakah kamu sudah punya <span className="text-[#D4AF37] italic font-medium">desain sendiri</span>?
        </h1>
        <p className="text-white/60">Kategori: <span className="text-white capitalize">{category}</span></p>
      </div>
    </section>
    <section>
      <div className="max-w-[900px] mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-5">
        <button onClick={() => onPick("have")} data-testid="path-have"
          className="group bg-[#141414] border border-white/10 hover:border-[#D4AF37] p-10 text-left transition-all duration-300 hover:-translate-y-1">
          <FileArrowUp size={36} weight="duotone" className="text-[#D4AF37] mb-6" />
          <h3 className="font-display text-2xl font-bold tracking-tight mb-3">Sudah punya desain</h3>
          <p className="text-sm text-white/60">Upload file desain kamu (JPG, PNG, PDF, AI, CDR). Tim DERIS akan langsung review via WhatsApp.</p>
        </button>
        <button onClick={() => onPick("create")} data-testid="path-create"
          className="group bg-[#141414] border border-white/10 hover:border-[#D4AF37] p-10 text-left transition-all duration-300 hover:-translate-y-1">
          <Palette size={36} weight="duotone" className="text-[#D4AF37] mb-6" />
          <h3 className="font-display text-2xl font-bold tracking-tight mb-3">Belum, ingin buat sendiri</h3>
          <p className="text-sm text-white/60">Pakai editor interaktif untuk merancang desain dari nol — drag & drop, pilih warna, font, logo.</p>
        </button>
      </div>
    </section>
  </div>
);

// === STEP 3a: Upload existing design ===
const UploadFlow = ({ category, onBack, uploaded, setUploaded }) => {
  const fileInput = useRef(null);
  const handleFile = (e) => {
    const f = e.target.files?.[0];
    if (f) setUploaded({ name: f.name, size: (f.size / 1024).toFixed(0) });
  };
  const sendWA = () => {
    const text = `Halo DERIS, saya mau pesan ${category} custom dengan desain yang sudah saya buat.\n\nFile: ${uploaded?.name || "(akan saya kirim setelah ini)"}\n\nMohon dibantu review & quotation. Terima kasih!`;
    window.open(buildWaMessage(text), "_blank");
  };

  return (
    <div data-testid="upload-flow" className="pb-20 md:pb-32">
      <section className="pt-20 pb-8 md:pt-28 md:pb-12">
        <div className="max-w-[900px] mx-auto px-6 md:px-10">
          <button onClick={onBack} data-testid="back-to-path" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-[#D4AF37] mb-8 transition-colors">
            <ArrowLeft size={16} /> Ganti pilihan
          </button>
          <p className="overline text-[#D4AF37] mb-6">Make a Design · Step 3 / 3 · Upload</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tighter leading-[0.95] mb-4">
            Upload desainmu.
          </h1>
          <p className="text-white/60 mb-10">Format yang didukung: JPG, PNG, PDF, AI, CDR · Maks 20MB</p>

          <label data-testid="design-file-label"
            className="flex flex-col items-center justify-center gap-3 w-full px-6 py-16 border-2 border-dashed border-white/15 hover:border-[#D4AF37] hover:bg-[#141414] text-white/65 cursor-pointer transition-colors">
            <Upload size={48} weight="duotone" className="text-[#D4AF37]" />
            <p className="font-display text-lg font-semibold">Klik untuk pilih file</p>
            <p className="text-xs text-white/50">atau drag & drop di sini</p>
            <input ref={fileInput} type="file" accept=".jpg,.jpeg,.png,.pdf,.ai,.cdr" onChange={handleFile} className="hidden" data-testid="design-file-input" />
          </label>

          {uploaded && (
            <div data-testid="upload-preview" className="mt-6 bg-[#141414] border border-[#D4AF37]/30 p-6 flex items-center gap-4">
              <CheckCircle size={32} weight="duotone" className="text-[#D4AF37] shrink-0" />
              <div className="flex-1">
                <p className="font-display font-bold">{uploaded.name}</p>
                <p className="text-xs text-white/50 mt-0.5">{uploaded.size} KB</p>
              </div>
              <button onClick={() => setUploaded(null)} className="text-white/40 hover:text-red-400 transition-colors">
                <Trash size={20} />
              </button>
            </div>
          )}

          <button onClick={sendWA} data-testid="send-upload-wa"
            className="mt-8 w-full inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#D4AF37] hover:bg-[#F5C34A] text-black font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5">
            <WhatsappLogo size={20} weight="fill" /> Kirim Desain via WhatsApp
          </button>
          <p className="text-xs text-white/40 text-center mt-3">Anda akan diarahkan ke chat WhatsApp dengan tim DERIS.</p>
        </div>
      </section>
    </div>
  );
};

// === STEP 3b: Interactive editor ===
const Editor = ({ category, onBack }) => {
  const [side, setSide] = useState("front");
  const [bodyColor, setBodyColor] = useState(COLOR_PRESETS[0].body);
  const [sleevesColor, setSleevesColor] = useState(COLOR_PRESETS[0].sleeves);
  const [front, setFront] = useState([{ id: "init", type: "text", text: "DERIS", x: 50, y: 40, size: 28, color: "#D4AF37", font: "Cabinet Grotesk", weight: 700, align: "center" }]);
  const [back, setBack] = useState([{ id: "initB", type: "text", text: "ANGKATAN '25", x: 50, y: 30, size: 24, color: "#FFFFFF", font: "Cabinet Grotesk", weight: 700, align: "center" }]);
  const [selectedId, setSelectedId] = useState(null);
  const [newText, setNewText] = useState("");
  const canvasRef = useRef(null);
  const dragRef = useRef({ id: null, offX: 0, offY: 0 });

  const items = side === "front" ? front : back;
  const setItems = side === "front" ? setFront : setBack;
  const selected = items.find((i) => i.id === selectedId);

  const applyPreset = (p) => { setBodyColor(p.body); setSleevesColor(p.sleeves); };

  const addText = () => {
    if (!newText.trim()) return;
    const id = `t-${Date.now()}`;
    setItems([...items, { id, type: "text", text: newText, x: 50, y: 50, size: 24, color: "#FFFFFF", font: "Cabinet Grotesk", weight: 700, align: "center" }]);
    setNewText("");
    setSelectedId(id);
  };

  const uploadLogo = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const id = `img-${Date.now()}`;
      setItems([...items, { id, type: "image", src: ev.target.result, x: 50, y: 45, size: 22 }]);
      setSelectedId(id);
    };
    reader.readAsDataURL(file);
    e.target.value = "";
  };

  const updateSelected = (patch) => setItems(items.map((i) => (i.id === selectedId ? { ...i, ...patch } : i)));
  const deleteSelected = () => { setItems(items.filter((i) => i.id !== selectedId)); setSelectedId(null); };

  const onPointerDown = (e, item) => {
    e.stopPropagation();
    setSelectedId(item.id);
    const rect = canvasRef.current.getBoundingClientRect();
    const point = e.touches ? e.touches[0] : e;
    dragRef.current = {
      id: item.id,
      offX: ((point.clientX - rect.left) / rect.width) * 100 - item.x,
      offY: ((point.clientY - rect.top) / rect.height) * 100 - item.y,
    };
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
  };
  const onPointerMove = (e) => {
    if (!dragRef.current.id || !canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100 - dragRef.current.offX;
    const y = ((e.clientY - rect.top) / rect.height) * 100 - dragRef.current.offY;
    setItems((curr) => curr.map((i) => i.id === dragRef.current.id ? { ...i, x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(100, y)) } : i));
  };
  const onPointerUp = () => {
    dragRef.current = { id: null, offX: 0, offY: 0 };
    window.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("pointerup", onPointerUp);
  };

  const sendWA = () => {
    const sum = (arr, l) =>
      arr.length === 0 ? `(${l}) kosong`
      : arr.map((i, idx) => i.type === "text" ? `  ${idx + 1}. Teks: "${i.text}" (font: ${i.font}, warna: ${i.color}, align: ${i.align || "center"})` : `  ${idx + 1}. Logo upload`).join("\n");
    const text =
      `Halo DERIS, saya mau pesan ${category} custom dengan desain berikut:\n\n` +
      `Warna badan: ${bodyColor}\nWarna lengan: ${sleevesColor}\n\n` +
      `BAGIAN DEPAN:\n${sum(front, "depan")}\n\n` +
      `BAGIAN BELAKANG:\n${sum(back, "belakang")}\n\n` +
      `Mohon dibantu mockup & quotation. Terima kasih!`;
    window.open(buildWaMessage(text), "_blank");
  };

  return (
    <div data-testid="designer-editor" className="pb-20 md:pb-32">
      <section className="pt-20 pb-6 md:pt-28 md:pb-10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <button onClick={onBack} data-testid="back-to-path" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-[#D4AF37] mb-6 transition-colors">
            <ArrowLeft size={16} /> Ganti pilihan
          </button>
          <p className="overline text-[#D4AF37] mb-4">Editor · Step 3 / 3</p>
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[0.95] max-w-4xl">
            Rancang <span className="capitalize text-[#D4AF37]">{category}</span>mu, <span className="italic text-[#D4AF37]">drag & drop</span>.
          </h1>
        </div>
      </section>

      <section>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 xl:col-span-8">
              <div className="flex items-center gap-2 mb-4">
                <button onClick={() => setSide("front")} data-testid="side-front-btn"
                  className={`px-5 py-2 text-sm font-semibold rounded-full transition-colors ${side === "front" ? "bg-[#D4AF37] text-black" : "bg-[#141414] text-white/70 border border-white/10 hover:border-[#D4AF37]"}`}>
                  Depan
                </button>
                <button onClick={() => setSide("back")} data-testid="side-back-btn"
                  className={`px-5 py-2 text-sm font-semibold rounded-full transition-colors ${side === "back" ? "bg-[#D4AF37] text-black" : "bg-[#141414] text-white/70 border border-white/10 hover:border-[#D4AF37]"}`}>
                  Belakang
                </button>
                <span className="ml-auto text-xs text-white/40 hidden md:inline">Klik & seret elemen untuk memindah</span>
              </div>

              <div ref={canvasRef} data-testid="design-canvas" onClick={() => setSelectedId(null)}
                className="relative aspect-square w-full bg-gradient-to-br from-[#1a1a1a] via-[#262626] to-[#1a1a1a] border border-white/10 overflow-hidden select-none touch-none rounded-sm">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.06)_0%,_transparent_60%)]" />
                <ApparelSVG category={category} bodyColor={bodyColor} sleevesColor={sleevesColor} side={side} />
                {items.map((it) => (
                  <div key={it.id} onPointerDown={(e) => onPointerDown(e, it)}
                    className={`absolute cursor-move touch-none ${selectedId === it.id ? "outline outline-2 outline-[#D4AF37] outline-offset-2" : ""}`}
                    style={{ left: `${it.x}%`, top: `${it.y}%`, transform: "translate(-50%, -50%)" }}
                    data-testid={`overlay-${it.id}`}>
                    {it.type === "text" ? (
                      <span style={{ fontFamily: it.font, fontSize: `${it.size}px`, color: it.color, fontWeight: it.weight, letterSpacing: "-0.02em", whiteSpace: "nowrap", textAlign: it.align || "center", textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}>
                        {it.text}
                      </span>
                    ) : (
                      <img src={it.src} alt="logo" style={{ width: `${it.size * 4}px`, height: "auto", maxWidth: "240px" }} draggable={false} />
                    )}
                  </div>
                ))}
              </div>
              <p className="text-xs text-white/40 mt-3 text-center">Preview ilustratif. Hasil akhir tergantung bahan & teknik produksi.</p>
            </div>

            <div className="lg:col-span-5 xl:col-span-4 space-y-4">
              <Panel title="Warna" icon={<Palette size={18} weight="duotone" />}>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {COLOR_PRESETS.map((c) => (
                    <button key={c.name} onClick={() => applyPreset(c)} data-testid={`preset-${c.name.toLowerCase()}`}
                      className={`p-2 border text-xs rounded transition-colors ${bodyColor === c.body ? "border-[#D4AF37] bg-[#D4AF37]/10" : "border-white/10 hover:border-white/30"}`}>
                      <div className="flex gap-1 mb-1.5 h-6">
                        <div className="flex-1 rounded-sm" style={{ background: c.body }} />
                        <div className="flex-1 rounded-sm border border-white/5" style={{ background: c.sleeves }} />
                      </div>
                      <span className="text-white/70">{c.name}</span>
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <label className="space-y-1.5 block">
                    <span className="text-white/50">Badan</span>
                    <div className="flex items-center gap-2 bg-[#0A0A0A] border border-white/10 p-1.5 rounded">
                      <input type="color" value={bodyColor} onChange={(e) => setBodyColor(e.target.value)} className="w-7 h-7 rounded cursor-pointer bg-transparent" data-testid="color-body" />
                      <input type="text" value={bodyColor} onChange={(e) => setBodyColor(e.target.value)} className="text-white/70 font-mono text-[10px] bg-transparent outline-none w-full" />
                    </div>
                  </label>
                  <label className="space-y-1.5 block">
                    <span className="text-white/50">Sekunder</span>
                    <div className="flex items-center gap-2 bg-[#0A0A0A] border border-white/10 p-1.5 rounded">
                      <input type="color" value={sleevesColor} onChange={(e) => setSleevesColor(e.target.value)} className="w-7 h-7 rounded cursor-pointer bg-transparent" data-testid="color-sleeves" />
                      <input type="text" value={sleevesColor} onChange={(e) => setSleevesColor(e.target.value)} className="text-white/70 font-mono text-[10px] bg-transparent outline-none w-full" />
                    </div>
                  </label>
                </div>
              </Panel>

              <Panel title="Tambah Elemen" icon={<Plus size={18} weight="duotone" />}>
                <div className="flex gap-2 mb-3">
                  <input type="text" value={newText} onChange={(e) => setNewText(e.target.value)} onKeyDown={(e) => e.key === "Enter" && addText()}
                    placeholder="Tulis nama / teks…" data-testid="new-text-input"
                    className="flex-1 bg-[#0A0A0A] border border-white/10 px-3 py-2.5 text-sm focus:border-[#D4AF37] outline-none rounded" />
                  <button onClick={addText} data-testid="add-text-btn" className="px-4 bg-[#D4AF37] hover:bg-[#F5C34A] text-black font-semibold text-sm rounded transition-colors">
                    <TextT size={16} weight="bold" />
                  </button>
                </div>
                <label data-testid="upload-logo-label" className="flex items-center justify-center gap-2 w-full px-4 py-3 border border-dashed border-white/15 hover:border-[#D4AF37] hover:text-[#D4AF37] text-white/70 text-sm rounded cursor-pointer transition-colors">
                  <Upload size={16} weight="bold" /> Upload Logo (PNG / JPG)
                  <input type="file" accept="image/*" onChange={uploadLogo} className="hidden" data-testid="upload-logo-input" />
                </label>
              </Panel>

              <Panel title="Edit Elemen Terpilih" icon={<ArrowsClockwise size={18} weight="duotone" />}>
                {!selected ? (
                  <p className="text-xs text-white/40 text-center py-4">Klik elemen di canvas untuk mengedit.</p>
                ) : (
                  <div className="space-y-3 text-xs">
                    {selected.type === "text" && (
                      <>
                        <label className="block">
                          <span className="text-white/50 mb-1.5 block">Teks</span>
                          <input type="text" value={selected.text} onChange={(e) => updateSelected({ text: e.target.value })} data-testid="edit-text"
                            className="w-full bg-[#0A0A0A] border border-white/10 px-3 py-2 text-sm focus:border-[#D4AF37] outline-none rounded" />
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          <label className="block">
                            <span className="text-white/50 mb-1.5 block">Font</span>
                            <select value={selected.font} onChange={(e) => updateSelected({ font: e.target.value })} data-testid="edit-font"
                              className="w-full bg-[#0A0A0A] border border-white/10 px-2 py-2 text-xs focus:border-[#D4AF37] outline-none rounded">
                              {FONTS.map((f) => <option key={f}>{f}</option>)}
                            </select>
                          </label>
                          <label className="block">
                            <span className="text-white/50 mb-1.5 block">Warna</span>
                            <input type="color" value={selected.color} onChange={(e) => updateSelected({ color: e.target.value })} data-testid="edit-color"
                              className="w-full h-9 bg-[#0A0A0A] border border-white/10 rounded cursor-pointer" />
                          </label>
                        </div>
                        <div>
                          <span className="text-white/50 mb-1.5 block">Align</span>
                          <div className="flex gap-1.5">
                            {["left", "center", "right"].map((a) => (
                              <button key={a} onClick={() => updateSelected({ align: a })} data-testid={`align-${a}`}
                                className={`flex-1 py-1.5 text-[10px] uppercase tracking-wider rounded border ${selected.align === a ? "bg-[#D4AF37] border-[#D4AF37] text-black" : "border-white/10 text-white/60 hover:border-white/30"}`}>
                                {a}
                              </button>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                    <label className="block">
                      <span className="text-white/50 mb-1.5 flex justify-between"><span>Ukuran</span><span className="text-white/40">{selected.size}px</span></span>
                      <input type="range" min={selected.type === "image" ? 8 : 12} max="80" value={selected.size} onChange={(e) => updateSelected({ size: parseInt(e.target.value) })} data-testid="edit-size" className="w-full accent-[#D4AF37]" />
                    </label>
                    <button onClick={deleteSelected} data-testid="delete-element-btn" className="w-full flex items-center justify-center gap-2 py-2 border border-red-500/30 text-red-400 hover:bg-red-500/10 text-xs rounded transition-colors">
                      <Trash size={14} /> Hapus Elemen
                    </button>
                  </div>
                )}
              </Panel>

              <button onClick={sendWA} data-testid="send-design-btn"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#D4AF37] hover:bg-[#F5C34A] text-black font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5">
                <WhatsappLogo size={20} weight="fill" /> Kirim Desain ke WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Panel = ({ title, icon, children }) => (
  <div className="bg-[#141414] border border-white/10 p-5">
    <div className="flex items-center gap-2 mb-4 text-[#D4AF37]">
      {icon}
      <p className="overline text-white">{title}</p>
    </div>
    {children}
  </div>
);

const ApparelSVG = ({ category, bodyColor, sleevesColor, side }) => {
  if (category === "kaos" || category === "kemeja") {
    // Simple T-shirt / shirt silhouette
    const showButtons = category === "kemeja" && side === "front";
    return (
      <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full p-8" preserveAspectRatio="xMidYMid meet">
        <path d="M 100 100 L 160 80 L 200 100 L 240 80 L 300 100 L 320 160 L 285 175 L 285 320 L 115 320 L 115 175 L 80 160 Z"
          fill={bodyColor} stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" />
        <path d="M 160 80 L 200 100 L 240 80 L 230 60 L 200 55 L 170 60 Z" fill={sleevesColor} stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" />
        {showButtons && Array.from({ length: 5 }).map((_, i) => (
          <circle key={i} cx="200" cy={130 + i * 35} r="2.5" fill={sleevesColor} stroke="rgba(255,255,255,0.4)" />
        ))}
      </svg>
    );
  }
  // Default jaket varsity
  return (
    <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full p-8" preserveAspectRatio="xMidYMid meet">
      <path d="M 60 130 L 100 110 L 130 165 L 110 270 L 80 280 L 50 265 Z" fill={sleevesColor} stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" />
      <path d="M 340 130 L 300 110 L 270 165 L 290 270 L 320 280 L 350 265 Z" fill={sleevesColor} stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" />
      <path d="M 130 110 L 165 95 L 200 105 L 235 95 L 270 110 L 285 290 L 250 305 L 200 310 L 150 305 L 115 290 Z" fill={bodyColor} stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" />
      <path d="M 165 95 L 200 105 L 235 95 L 230 75 L 200 70 L 170 75 Z" fill={sleevesColor} stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" />
      {side === "front" && <line x1="200" y1="105" x2="200" y2="310" stroke="rgba(255,255,255,0.55)" strokeWidth="1" strokeDasharray="3 3" opacity="0.7" />}
      <rect x="55" y="265" width="50" height="18" fill={sleevesColor} stroke="rgba(255,255,255,0.45)" strokeWidth="1" />
      <rect x="295" y="265" width="50" height="18" fill={sleevesColor} stroke="rgba(255,255,255,0.45)" strokeWidth="1" />
      <rect x="115" y="290" width="170" height="22" fill={sleevesColor} stroke="rgba(255,255,255,0.45)" strokeWidth="1" />
    </svg>
  );
};
