export const BRAND = {
  name: "DERIS",
  subtitle: "Custom Apparel",
  tagline: "Jaket Custom untuk Cerita dan Solidaritas",
  cities: ["Bandung", "Jakarta"],
  whatsapp: "08312345343",
  whatsappLink: "https://wa.me/6283123453430",
  instagram: "deris.custom",
  instagramLink: "https://instagram.com/deris.custom",
  logo: "https://customer-assets.emergentagent.com/job_jaket-komunitas/artifacts/dxv1bp4a_Logo%20Deris%20BG.Putih.jpg",
  sizeChartLink: "https://drive.google.com/drive/u/0/folders/1CgM3e1Kb7H018DZD4tlG9lOEo2jvYEu-",
};

export const MEDIA = {
  hero: "https://static.prod-images.emergentagent.com/jobs/9ec8d59b-6c96-4bab-b61d-8d70a498f9e8/images/e60b3db16d3a59bccf5641558f20ef7633bdfde1ef609d5ff6414199e783b835.png",
  jacketMockup: "https://static.prod-images.emergentagent.com/jobs/9ec8d59b-6c96-4bab-b61d-8d70a498f9e8/images/fbc44b6fe3c47eda068c52dcc8d5876baa944a66f375b139b3ece3a5bcf010ed.png",
  varsity1: "https://images.unsplash.com/photo-1771310972919-b91ef93d08ef?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHw0fHx2YXJzaXR5JTIwamFja2V0fGVufDB8fHx8MTc3ODgzNDY5OXww&ixlib=rb-4.1.0&q=85",
  varsity2: "https://images.unsplash.com/photo-1663374723561-885d23959717?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwyfHx2YXJzaXR5JTIwamFja2V0fGVufDB8fHx8MTc3ODgzNDY5OXww&ixlib=rb-4.1.0&q=85",
  tshirt: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwxfHxibGFjayUyMHQlMjBzaGlydCUyMG1vY2t1cHxlbnwwfHx8fDE3Nzg4MzQ3MjF8MA&ixlib=rb-4.1.0&q=85",
  hoodie: "https://images.unsplash.com/photo-1680292783974-a9a336c10366?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzN8MHwxfHNlYXJjaHwxfHxibGFjayUyMGhvb2RpZSUyMG1vY2t1cHxlbnwwfHx8fDE3Nzg4MzQ3MjF8MA&ixlib=rb-4.1.0&q=85",
  community: "https://images.unsplash.com/photo-1549057446-9f5c6ac91a04?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwyfHxjYW1wdXMlMjB1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBjb21tdW5pdHl8ZW58MHx8fHwxNzc4ODM0Njk5fDA&ixlib=rb-4.1.0&q=85",
};

export const PRODUCTS = [
  {
    slug: "varsity-jacket",
    name: "Varsity Jacket",
    category: "Jaket",
    price: "Mulai Rp 285.000",
    image: MEDIA.varsity1,
    desc: "Jaket varsity klasik dengan kombinasi bahan fleece dan kulit imitasi. Pas untuk himpunan, komunitas, atau angkatan kampus yang ingin tampil ikonik.",
    highlights: ["Bordir nama & logo", "Patch chenille", "Bahan fleece 320gsm"],
  },
  {
    slug: "bomber-jacket",
    name: "Bomber Jacket",
    category: "Jaket",
    price: "Mulai Rp 245.000",
    image: MEDIA.varsity2,
    desc: "Bomber custom dengan siluet modern. Ringan, tahan angin, dan nyaman untuk dipakai harian maupun acara komunitas.",
    highlights: ["Bahan taslan / parasut", "Lining adem", "Sablon / bordir"],
  },
  {
    slug: "kaos-komunitas",
    name: "Kaos Komunitas",
    category: "Kaos",
    price: "Mulai Rp 65.000",
    image: MEDIA.tshirt,
    desc: "Kaos cotton combed 24s/30s dengan teknik sablon DTF, plastisol, atau bordir. Cocok untuk merchandise organisasi.",
    highlights: ["Cotton combed 24s", "Sablon DTF / Plastisol", "Custom warna & ukuran"],
  },
  {
    slug: "hoodie",
    name: "Hoodie Custom",
    category: "Hoodie",
    price: "Mulai Rp 175.000",
    image: MEDIA.hoodie,
    desc: "Hoodie fleece tebal yang nyaman dan hangat. Bisa custom warna, sablon dada, lengan, hingga punggung.",
    highlights: ["Fleece 300gsm", "Kanguru pocket", "Custom full print"],
  },
  {
    slug: "kemeja-flannel",
    name: "Kemeja & Flannel",
    category: "Kemeja",
    price: "Mulai Rp 195.000",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=1200&q=85",
    desc: "Kemeja PDH dan flannel custom untuk seragam organisasi atau brand komunitas. Jahitan rapi, bahan premium.",
    highlights: ["Bahan drill / flannel", "Bordir logo", "Custom ukuran S–XXL"],
  },
  {
    slug: "topi",
    name: "Topi & Bucket",
    category: "Headwear",
    price: "Mulai Rp 55.000",
    image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=1200&q=85",
    desc: "Topi baseball, snapback, dan bucket hat dengan bordir custom. Cocok sebagai merchandise pelengkap.",
    highlights: ["Bordir komputer", "Bahan rasher / drill", "Banyak pilihan warna"],
  },
];

export const PORTFOLIO = [
  { org: "HIMA Teknik Telekomunikasi", sub: "Telkom University", year: "2024", img: MEDIA.varsity1, type: "Jaket Komunitas", span: "md:col-span-2 md:row-span-2" },
  { org: "IEEE Telkom University", sub: "Institute of Electrical & Electronics Engineers", year: "2024", img: MEDIA.varsity2, type: "Jaket Windrunner", span: "" },
  { org: "TELCO 2025", sub: "Telkom University", year: "2025", img: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=1200&q=85", type: "Topi Custom Bordir", span: "" },
  { org: "TELCO 2025", sub: "Telkom University", year: "2025", img: MEDIA.tshirt, type: "Kaos Komunitas", span: "md:col-span-2" },
  { org: "Tim Budi Pekerti", sub: "Telkom University", year: "2024", img: MEDIA.hoodie, type: "Hoodie Custom", span: "" },
  { org: "Electronics Lab", sub: "Telkom University", year: "2024", img: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=1200&q=85", type: "Kemeja PDH", span: "" },
];

export const FAQS = [
  { q: "Berapa minimum order untuk produksi?", a: "Minimum order kami fleksibel: jaket mulai dari 12 pcs, kaos mulai dari 24 pcs. Untuk jumlah lebih kecil silakan diskusi via WhatsApp." },
  { q: "Berapa lama proses produksinya?", a: "Estimasi produksi 14–21 hari kerja tergantung kompleksitas desain dan jumlah pesanan. Untuk pesanan kilat tersedia layanan express 7–10 hari." },
  { q: "Apakah bisa konsultasi desain gratis?", a: "Tentu! Tim DERIS akan membantu mockup digital, revisi warna, hingga pemilihan bahan tanpa biaya tambahan sampai desain final disetujui." },
  { q: "Bahan apa saja yang tersedia?", a: "Untuk jaket: fleece, taslan, kulit imitasi, drill. Untuk kaos: cotton combed 20s/24s/30s. Untuk topi: rasher, drill, twill. Semua bahan dapat dilihat sample-nya." },
  { q: "Apakah ada size chart yang bisa dilihat?", a: "Tentu! Kami menyediakan size chart lengkap untuk jaket, kaos pendek, kaos panjang, dan kemeja dengan range sampai 8XL. Tombol \"Lihat Size Chart\" tersedia di halaman Product, atau buka langsung folder Google Drive resmi kami." },
  { q: "Bagaimana cara pemesanannya?", a: "1) Hubungi WhatsApp kami atau gunakan fitur Make a Design. 2) Diskusi kebutuhan & terima mockup. 3) DP 50%. 4) Produksi. 5) Pelunasan & pengiriman." },
  { q: "Apakah melayani pengiriman ke luar kota?", a: "Ya, kami melayani pengiriman ke seluruh Indonesia melalui JNE, J&T, SiCepat, atau ekspedisi pilihan customer. Bandung & Jakarta bisa COD." },
  { q: "Apakah bisa request desain tertentu?", a: "Bisa banget. Kirim referensi desain via WhatsApp atau pakai fitur Make a Design di website untuk merancang sendiri jaket impian komunitas Anda." },
];

export const VALUES = [
  { icon: "Hand", title: "Handmade Berkualitas", desc: "Setiap produk dijahit dengan tangan pengrajin lokal berpengalaman lebih dari 10 tahun." },
  { icon: "MapPin", title: "Bahan Lokal Premium", desc: "100% bahan dari konveksi pilihan di Bandung yang telah teruji kualitasnya." },
  { icon: "Coins", title: "Harga Terjangkau", desc: "Solusi terbaik untuk anggaran mahasiswa dan komunitas tanpa kompromi kualitas." },
  { icon: "Lightning", title: "Pembuatan Cepat", desc: "Kapasitas produksi besar memungkinkan pengerjaan 14–21 hari kerja." },
];

export const buildWaMessage = (text) => {
  const num = "6283123453430";
  return `https://wa.me/${num}?text=${encodeURIComponent(text)}`;
};
