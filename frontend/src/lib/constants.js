export const BRAND = {
  name: "DERIS",
  subtitle: "Custom Apparel",
  tagline: "Jaket Custom untuk Cerita dan Solidaritas",
  cities: ["Bandung", "Jakarta"],
  whatsapp: "081213167737",
  whatsappLink: "https://wa.me/6281213167737",
  instagram: "deris.custom",
  instagramLink: "https://instagram.com/deris.custom",
  logo: "https://customer-assets.emergentagent.com/job_jaket-komunitas/artifacts/dxv1bp4a_Logo%20Deris%20BG.Putih.jpg",
  sizeChartLink: "https://drive.google.com/drive/u/0/folders/1CgM3e1Kb7H018DZD4tlG9lOEo2jvYEu-",
};

// 5 client logos uploaded by user
export const CLIENT_LOGOS = [
  { name: "KMTB", img: "https://customer-assets.emergentagent.com/job_jaket-komunitas/artifacts/3nbwzyjd_Logo1.jpeg" },
  { name: "BEM UTB", img: "https://customer-assets.emergentagent.com/job_jaket-komunitas/artifacts/h2ycdjp1_Logo2.png" },
  { name: "IEEE Telkom Univ", img: "https://customer-assets.emergentagent.com/job_jaket-komunitas/artifacts/iuqqrpb2_Logo3.jpeg" },
  { name: "Telkom University", img: "https://customer-assets.emergentagent.com/job_jaket-komunitas/artifacts/uob7d6pt_Logo4.jpg" },
  { name: "HMT Telekomunikasi", img: "https://customer-assets.emergentagent.com/job_jaket-komunitas/artifacts/3eplpfsk_Logo5.jpg" },
];

export const MEDIA = {
  hero: "https://static.prod-images.emergentagent.com/jobs/9ec8d59b-6c96-4bab-b61d-8d70a498f9e8/images/e60b3db16d3a59bccf5641558f20ef7633bdfde1ef609d5ff6414199e783b835.png",
  jacketMockup: "https://static.prod-images.emergentagent.com/jobs/9ec8d59b-6c96-4bab-b61d-8d70a498f9e8/images/fbc44b6fe3c47eda068c52dcc8d5876baa944a66f375b139b3ece3a5bcf010ed.png",
  aboutMain: "https://customer-assets.emergentagent.com/job_jaket-komunitas/artifacts/7k9htqmy_foto%20utama1.jpeg",
  community: "https://images.unsplash.com/photo-1549057446-9f5c6ac91a04?crop=entropy&cs=srgb&fm=jpg&w=1400&q=85",
  // Product visuals — AI generated via Gemini Nano Banana
  varsity1: "/generated/varsity-jacket.png",
  varsity2: "/generated/varsity-jacket.png",
  bomber: "/generated/bomber-jacket.png",
  harrington: "/generated/harrington-jacket.png",
  coach: "/generated/coach-jacket.png",
  windbreaker: "/generated/windbreaker.png",
  hoodie: "/generated/hoodie.png",
  kemeja: "/generated/kemeja.png",
  kaos: "/generated/kaos.png",
  topi: "/generated/topi.png",
  lanyard: "/generated/lanyard.png",
  // Size chart images
  sizeKemeja: "https://customer-assets.emergentagent.com/job_jaket-komunitas/artifacts/0n2ae6p4_size1.jpg",
  sizeKaosPendek: "https://customer-assets.emergentagent.com/job_jaket-komunitas/artifacts/4qx07bse_size2.jpg",
  sizeKaosPanjang: "https://customer-assets.emergentagent.com/job_jaket-komunitas/artifacts/8rrk4t9b_size3.jpg",
  sizeJaket: "https://customer-assets.emergentagent.com/job_jaket-komunitas/artifacts/qgdgyqbv_size4.jpg",
};

export const PRODUCTS = [
  {
    slug: "varsity-jacket",
    name: "Varsity Jacket",
    category: "Jaket",
    image: MEDIA.varsity1,
    desc: "Jaket varsity klasik dengan kombinasi bahan fleece dan kulit imitasi. Pas untuk himpunan, komunitas, atau angkatan kampus yang ingin tampil ikonik.",
    materials: ["Fleece 320gsm", "Kulit imitasi premium", "Lining adem", "Patch chenille"],
  },
  {
    slug: "bomber-jacket",
    name: "Bomber Jacket",
    category: "Jaket",
    image: MEDIA.bomber,
    desc: "Bomber custom dengan siluet modern. Ringan, tahan angin, dan nyaman untuk dipakai harian maupun acara komunitas.",
    materials: ["Taslan / Parasut", "Lining mesh adem", "Karet kuncian", "Bordir / Sablon"],
  },
  {
    slug: "harrington-jacket",
    name: "Harrington Jacket",
    category: "Jaket",
    image: MEDIA.harrington,
    desc: "Jaket klasik bergaya retro dengan kerah lipat dan kancing depan. Cocok untuk look formal-casual komunitas.",
    materials: ["Drill premium", "Lining cotton tartan", "Kancing logam", "Bordir custom"],
  },
  {
    slug: "coach-jacket",
    name: "Coach Jacket",
    category: "Jaket",
    image: MEDIA.coach,
    desc: "Jaket pelatih ringan dengan kancing snap. Pilihan minimalis untuk merchandise komunitas yang clean dan modern.",
    materials: ["Nylon water-resistant", "Snap button metal", "Lining mesh", "Sablon plastisol"],
  },
  {
    slug: "windbreaker",
    name: "Windbreaker",
    category: "Jaket",
    image: MEDIA.windbreaker,
    desc: "Jaket ringan anti angin dengan hood dan zipper full. Cocok untuk aktivitas outdoor komunitas.",
    materials: ["Parasut taslan", "Zipper YKK", "Hood adjustable", "Print full panel"],
  },
  {
    slug: "hoodie",
    name: "Hoodie Custom",
    category: "Pakaian",
    image: MEDIA.hoodie,
    desc: "Hoodie fleece tebal yang nyaman dan hangat. Bisa custom warna, sablon dada, lengan, hingga punggung.",
    materials: ["Fleece 300gsm", "Kanguru pocket", "Cotton brushed", "Sablon DTF / Plastisol"],
  },
  {
    slug: "kemeja-flannel",
    name: "Kemeja & Flannel",
    category: "Pakaian",
    image: MEDIA.kemeja,
    desc: "Kemeja PDH dan flannel custom untuk seragam organisasi atau brand komunitas. Jahitan rapi, bahan premium.",
    materials: ["Drill / Flannel", "Cotton oxford", "Bordir komputer", "Custom ukuran S–XXL"],
  },
  {
    slug: "kaos-komunitas",
    name: "Kaos Komunitas",
    category: "Pakaian",
    image: MEDIA.kaos,
    desc: "Kaos cotton combed 24s/30s dengan teknik sablon DTF, plastisol, atau bordir. Cocok untuk merchandise organisasi.",
    materials: ["Cotton Combed 24s/30s", "Sablon DTF", "Sablon Plastisol", "Bordir komputer"],
  },
  {
    slug: "topi",
    name: "Topi & Bucket",
    category: "Aksesoris",
    image: MEDIA.topi,
    desc: "Topi baseball, snapback, dan bucket hat dengan bordir custom. Cocok sebagai merchandise pelengkap.",
    materials: ["Rasher / Drill", "Twill premium", "Bordir komputer", "Snap closure"],
  },
  {
    slug: "lanyard",
    name: "Lanyard",
    category: "Aksesoris",
    image: MEDIA.lanyard,
    desc: "Lanyard custom untuk ID card panitia event, komunitas, atau perusahaan. Sablon nama atau logo full color.",
    materials: ["Polyester woven", "Sablon full color", "ID card holder", "Hook metal"],
  },
];

export const SIZE_CHARTS = [
  { name: "Kemeja", img: MEDIA.sizeKemeja },
  { name: "Kaos Tangan Pendek", img: MEDIA.sizeKaosPendek },
  { name: "Kaos Tangan Panjang", img: MEDIA.sizeKaosPanjang },
  { name: "Jaket", img: MEDIA.sizeJaket },
];

export const SERVICES = [
  {
    name: "Cotton Package",
    icon: "Tshirt",
    desc: "Paket kaos cotton combed premium untuk himpunan, panitia event, atau merchandise komunitas. Termasuk konsultasi sablon DTF/plastisol dan packaging rapi.",
    tags: ["Kaos Pendek", "Kaos Panjang", "Polo Shirt"],
  },
  {
    name: "Sportswear Package",
    icon: "Lightning",
    desc: "Jersey, training jacket, dan apparel olahraga custom untuk klub kampus dan komunitas atlet. Bahan dryfit, breathable, dan tahan keringat.",
    tags: ["Jersey", "Training Set", "Windbreaker"],
  },
  {
    name: "Uniform Package",
    icon: "UsersThree",
    desc: "Seragam PDH, PDL, dan jaket angkatan untuk organisasi mahasiswa dan instansi. Jahitan presisi dengan bordir logo komputer.",
    tags: ["PDH", "Jaket Angkatan", "Kemeja Lapangan"],
  },
  {
    name: "Merchandise Package",
    icon: "Gift",
    desc: "Paket lengkap merchandise event: kaos, topi, lanyard, totebag, hingga slayer dalam satu produksi terkoordinasi.",
    tags: ["Topi", "Lanyard", "Totebag", "Slayer"],
  },
];

export const PORTFOLIO = [
  {
    org: "HIMA Teknik Telekomunikasi",
    sub: "Telkom University",
    type: "Jaket Komunitas",
    cover: MEDIA.varsity1,
    gallery: [MEDIA.varsity1, MEDIA.varsity2, MEDIA.hoodie],
    span: "md:col-span-2 md:row-span-2",
  },
  {
    org: "IEEE Telkom University",
    sub: "Institute of Electrical & Electronics Engineers",
    type: "Jaket Windrunner",
    cover: MEDIA.windbreaker,
    gallery: [MEDIA.windbreaker, MEDIA.coach, MEDIA.harrington, MEDIA.bomber],
    span: "",
  },
  {
    org: "HIMA Sistem Informasi",
    sub: "Telkom University",
    type: "Jaket Angkatan",
    cover: MEDIA.harrington,
    gallery: [MEDIA.harrington, MEDIA.varsity2, MEDIA.bomber, MEDIA.coach],
    span: "",
  },
  {
    org: "Hooligans Telco",
    sub: "Telkom University",
    type: "Kaos Komunitas",
    cover: MEDIA.kaos,
    gallery: [MEDIA.kaos, MEDIA.kemeja, MEDIA.hoodie, MEDIA.varsity1],
    span: "md:col-span-2",
  },
  {
    org: "PT Maxi Traktor",
    sub: "Corporate Client",
    type: "Topi Bordir",
    cover: MEDIA.topi,
    gallery: [MEDIA.topi, MEDIA.lanyard, MEDIA.kaos],
    span: "",
  },
  {
    org: "KM Sistem Energi",
    sub: "Telkom University",
    type: "Slayer Komunitas",
    cover: MEDIA.lanyard,
    gallery: [MEDIA.lanyard, MEDIA.topi],
    span: "",
  },
];

export const FAQS = [
  { q: "Berapa minimum order untuk produksi?", a: "Minimum order kami fleksibel: jaket mulai dari 12 pcs, kaos mulai dari 24 pcs. Untuk jumlah lebih kecil silakan diskusi via WhatsApp." },
  { q: "Berapa lama proses produksinya?", a: "Estimasi produksi 14–21 hari kerja tergantung kompleksitas desain dan jumlah pesanan. Untuk pesanan kilat tersedia layanan express 7–10 hari." },
  { q: "Apakah bisa konsultasi desain gratis?", a: "Tentu! Tim DERIS akan membantu mockup digital, revisi warna, hingga pemilihan bahan tanpa biaya tambahan sampai desain final disetujui." },
  { q: "Bahan apa saja yang tersedia?", a: "Untuk jaket: fleece, taslan, kulit imitasi, drill. Untuk kaos: cotton combed 20s/24s/30s. Untuk topi: rasher, drill, twill. Semua bahan dapat dilihat sample-nya." },
  { q: "Apakah ada size chart yang bisa dilihat?", a: "Tentu! Size chart visual tersedia di halaman Product untuk jaket, kaos pendek, kaos panjang, dan kemeja. Range sampai 8XL juga tersedia." },
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

export const REVIEWS = [
  { name: "Rifqi Pratama", org: "HIMA Teknik Telekomunikasi Telkom Univ", rating: 5, text: "Pelayanan cepat, mockup-nya niat, jahitan rapi. Angkatan kami semua puas pakai varsity DERIS!", date: "12 Jan 2025" },
  { name: "Naisya Rahmadhani", org: "IEEE Telkom University Student Branch", rating: 5, text: "Komunikasi enak banget, deadline ketat tetep selesai tepat waktu. Bahan windbreaker-nya premium, recommended!", date: "28 Nov 2024" },
  { name: "Aditya Wirawan", org: "BEM Universitas Teknologi Bandung", rating: 5, text: "Sudah 3x order PDH untuk pengurus BEM, hasilnya konsisten bagus. Vendor terpercaya untuk skala organisasi.", date: "15 Okt 2024" },
  { name: "Dinda Maharani", org: "HIMA Sistem Informasi Telkom Univ", rating: 5, text: "DP-nya transparan, progress dikabari via WA. Jaket angkatan kami jadi yang paling keren se-fakultas!", date: "03 Sep 2024" },
  { name: "Bayu Setiawan", org: "Hooligans Telco Community", rating: 4, text: "Sablonnya tajam dan tidak mudah retak. Pengiriman juga cepat ke Jakarta. Sedikit revisi warna tapi langsung diakomodir.", date: "22 Jul 2024" },
  { name: "Citra Anggraini", org: "KMTB Universitas Indonesia", rating: 5, text: "Untuk merchandise event kami, DERIS punya banyak opsi paket. Slayer dan lanyard-nya bonus desain custom!", date: "08 Mei 2024" },
];

export const STORY_QUOTES = [
  "Jaket ini bukan cuma seragam — ini cerita 4 tahun kita di kampus.",
  "Dari mockup pertama sampai jadi, tim DERIS sabar dengerin semua revisi kami.",
  "Quality-nya bikin angkatan lain tanya 'beli di mana?' tiap kami pakai.",
  "Bukan vendor biasa. DERIS jadi partner komunitas kami.",
  "Setiap jahitan rapi, setiap detail diperhatikan. Worth it banget.",
];

export const buildWaMessage = (text) => {
  const num = "6281213167737";
  return `https://wa.me/${num}?text=${encodeURIComponent(text)}`;
};
