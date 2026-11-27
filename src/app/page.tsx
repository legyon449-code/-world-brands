"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight, Search, ShoppingBag, Globe2, ShieldCheck, Truck,
  Sparkles, Menu, Heart, Star, ChevronDown, Instagram, Facebook,
  Headphones, Shirt, House, Dumbbell, Gem, X, Check
} from "lucide-react";

const categories = [
  { name: "Elektronika", icon: Headphones, note: "Gadjetlar va texnika" },
  { name: "Moda", icon: Shirt, note: "Kiyim va uslub" },
  { name: "Go‘zallik", icon: Sparkles, note: "Parvarish va kosmetika" },
  { name: "Uy uchun", icon: House, note: "Interyer va qulaylik" },
  { name: "Sport", icon: Dumbbell, note: "Faol hayot" },
  { name: "Aksessuarlar", icon: Gem, note: "Mayda detallar" },
];

const products = [
  { id: 1, name: "Studio Wireless Headphones", brand: "SOUND / AUDIO", price: "1 290 000", category: "Elektronika", label: "TOP TANLOV", emoji: "🎧", tone: "from-[#d9e4ec] to-[#aabcc9]" },
  { id: 2, name: "Urban Everyday Sneakers", brand: "NORTH / STREET", price: "890 000", category: "Moda", label: "YANGI", emoji: "👟", tone: "from-[#e8dfd1] to-[#c8b8a2]" },
  { id: 3, name: "Minimal Signature Watch", brand: "FORM / OBJECTS", price: "2 450 000", category: "Aksessuarlar", label: "PREMIUM", emoji: "⌚", tone: "from-[#d9d7ca] to-[#a9aa9d]" },
  { id: 4, name: "Daily Care Essentials", brand: "PURE / STUDIO", price: "420 000", category: "Go‘zallik", label: "BESTSELLER", emoji: "🧴", tone: "from-[#ead9d4] to-[#cdaea5]" },
];

const benefits = [
  { icon: Globe2, title: "Global tanlov", text: "Xalqaro brendlar va mahalliy do‘konlar — barchasi bir joyda." },
  { icon: ShieldCheck, title: "Ishonchli xarid", text: "Sotuvchilar tekshiruvi va shaffof buyurtma jarayoni." },
  { icon: Truck, title: "Qulay yetkazish", text: "Buyurtmangiz holatini bir platformada kuzating." },
];

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Barchasi");
  const [menuOpen, setMenuOpen] = useState(false);
  const [saved, setSaved] = useState<number[]>([]);

  const visibleProducts = useMemo(() => products.filter((product) => {
    const matchesCategory = activeCategory === "Barchasi" || product.category === activeCategory;
    const term = query.trim().toLowerCase();
    const matchesQuery = !term || (product.name + " " + product.brand + " " + product.category).toLowerCase().includes(term);
    return matchesCategory && matchesQuery;
  }), [query, activeCategory]);

  function toggleSaved(id: number) {
    setSaved((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f7f3] text-[#171a18]">
      <div className="bg-[#18241d] px-4 py-2.5 text-center text-[11px] font-medium tracking-[.12em] text-white/80">
        <span className="text-[#c7f36a]">YANGI MAVSUM</span><span className="mx-2 text-white/30">/</span> WORLD BRANDS OLAMI BILAN TANISHING
      </div>

      <header className="sticky top-0 z-40 border-b border-black/[.06] bg-[#f7f7f3]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
          <a href="/" className="flex shrink-0 items-center gap-2.5" aria-label="WORLD BRANDS bosh sahifa">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#c7f36a] text-lg font-black">W.</span>
            <span className="text-[15px] font-black tracking-[.13em]">WORLD BRANDS</span>
          </a>
          <nav className="hidden items-center gap-8 text-[13px] font-semibold text-[#5f665f] lg:flex">
            <a className="transition hover:text-black" href="#categories">Kategoriyalar</a>
            <a className="transition hover:text-black" href="#featured">Tanlanganlar</a>
            <a className="transition hover:text-black" href="#about">Biz haqimizda</a>
            <a className="transition hover:text-black" href="#seller">Sotuvchilar uchun</a>
          </nav>
          <div className="flex items-center gap-2">
            <button className="hidden items-center gap-2 rounded-full border border-black/10 px-3.5 py-2 text-xs font-bold sm:flex">UZ <ChevronDown size={13}/><span className="mx-1 text-black/20">|</span> UZS</button>
            <a href="#featured" className="inline-flex items-center gap-2 rounded-full bg-[#18241d] px-4 py-2.5 text-xs font-bold text-white transition hover:bg-[#2d4032]"><ShoppingBag size={15}/> <span className="hidden sm:inline">Xarid qilish</span></a>
            <button onClick={() => setMenuOpen(!menuOpen)} className="rounded-full border border-black/10 p-2.5 lg:hidden" aria-label="Menyuni ochish">{menuOpen ? <X size={17}/> : <Menu size={17}/>}</button>
          </div>
        </div>
        {menuOpen && <nav className="grid gap-1 border-t border-black/5 px-5 py-3 text-sm font-medium lg:hidden"><a onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-2 hover:bg-black/5" href="#categories">Kategoriyalar</a><a onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-2 hover:bg-black/5" href="#featured">Tanlanganlar</a><a onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-2 hover:bg-black/5" href="#seller">Sotuvchi bo‘lish</a></nav>}
      </header>

      <section className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-12 sm:pt-16 lg:grid-cols-[1fr_.92fr] lg:px-8 lg:pb-24 lg:pt-20">
        <div className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#9fbd65]/40 bg-[#eaf2dc] px-3.5 py-2 text-[10px] font-extrabold tracking-[.15em] text-[#42572c]"><Sparkles size={13}/> O‘ZBEKISTON UCHUN YANGI MARKETPLACE</div>
          <h1 className="max-w-2xl text-[clamp(3.25rem,7vw,6.2rem)] font-black leading-[.94] tracking-[-.075em]">Dunyo brendlari.<br/><span className="font-serif font-medium italic tracking-[-.065em] text-[#738e4a]">Sizga yaqin.</span></h1>
          <p className="mt-7 max-w-lg text-[15px] leading-7 text-[#687068] sm:text-base">O‘zingiz yoqtirgan brendlarni kashf eting. Yangi kolleksiyalar, sevimli mahsulotlar va ishonchli sotuvchilar — yagona makonda.</p>
          <form onSubmit={(event) => { event.preventDefault(); document.getElementById("featured")?.scrollIntoView({ behavior: "smooth" }); }} className="mt-8 flex max-w-xl items-center rounded-2xl border border-black/[.08] bg-white p-2 shadow-[0_14px_45px_rgba(26,35,22,.07)]">
            <Search className="ml-3 shrink-0 text-[#899187]" size={19}/>
            <input value={query} onChange={(event) => setQuery(event.target.value)} aria-label="Mahsulot qidirish" placeholder="Brend yoki mahsulotni qidiring..." className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm outline-none placeholder:text-[#a4aaa1]"/>
            <button className="rounded-xl bg-[#c7f36a] px-5 py-3 text-xs font-black transition hover:bg-[#b8e65a]">Qidirish</button>
          </form>
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-[11px] font-semibold text-[#7b8379]"><span className="inline-flex items-center gap-1.5"><Check size={13} className="text-[#789b42}"/> Ko‘p valyutali savdo</span><span className="inline-flex items-center gap-1.5"><Check size={13} className="text-[#789b42}"/> Tekshirilgan sotuvchilar</span></div>
        </div>

        <div className="relative mx-auto w-full max-w-[570px]">
          <div className="absolute -right-10 top-0 h-52 w-52 rounded-full bg-[#dce9c4] blur-3xl"/>
          <div className="relative overflow-hidden rounded-[2rem] bg-[#dfe6d6] p-5 sm:p-7">
            <div className="flex items-center justify-between text-[10px] font-extrabold tracking-[.18em] text-[#4d5a47]"><span>THE WORLD EDIT</span><span>№ 001 — 2026</span></div>
            <div className="relative mt-5 flex min-h-[330px] items-center justify-center overflow-hidden rounded-[1.5rem] bg-[radial-gradient(ellipse_at_50%_45%,#f7f6ed_0%,#c4d0b5_58%,#9ba98d_100%)] sm:min-h-[390px]">
              <div className="absolute left-[8%] top-[12%] h-44 w-44 rounded-full border border-white/50"/>
              <div className="absolute bottom-[8%] right-[7%] h-64 w-64 rounded-full border border-white/40"/>
              <div className="absolute h-64 w-64 rounded-full bg-white/30 blur-3xl"/>
              <div className="relative flex h-52 w-52 rotate-[-9deg] items-center justify-center rounded-[2.5rem] border border-white/70 bg-gradient-to-br from-[#f9f8f0] via-[#e6e9dc] to-[#9eac91] shadow-[18px_30px_55px_rgba(43,57,37,.22)] sm:h-64 sm:w-64">
                <span className="font-serif text-[8rem] font-bold italic tracking-[-.12em] text-[#53664a] sm:text-[10rem]">W</span>
              </div>
              <span className="absolute left-4 top-5 rounded-full bg-white/70 px-3 py-2 text-[9px] font-black tracking-[.16em] text-[#42513b] backdrop-blur">CURATED FINDS</span>
              <span className="absolute bottom-5 right-4 rounded-full bg-[#18241d] px-3 py-2 text-[9px] font-bold tracking-[.12em] text-white">DISCOVER MORE ↗</span>
            </div>
            <div className="flex items-end justify-between px-1 pt-5"><div><p className="text-[9px] font-bold tracking-[.18em] text-[#65715e]">SIZNING DUNYONGIZ</p><p className="mt-1 font-serif text-2xl italic text-[#263324]">Har kuni yangi kashfiyot.</p></div><span className="grid h-10 w-10 place-items-center rounded-full bg-[#c7f36a]"><ArrowRight size={18}/></span></div>
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-black/5 bg-white px-4 py-3 shadow-xl sm:block"><p className="text-[9px] font-bold tracking-[.15em] text-[#8a9186]">BIR PLATFORMADA</p><p className="mt-1 text-sm font-black">Global tanlov <span className="text-[#83a34d]">✳</span></p></div>
        </div>
      </section>

      <section id="categories" className="border-y border-black/[.06] bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-16">
          <div className="mb-8 flex items-end justify-between"><div><p className="text-[10px] font-black tracking-[.2em] text-[#809b51]">O‘ZINGIZGA MOSINI TOPING</p><h2 className="mt-2 text-3xl font-black tracking-[-.05em] sm:text-4xl">Kategoriyalar</h2></div><span className="hidden text-xs font-semibold text-[#899187] sm:block">O‘zingiz yoqtirgan yo‘nalishni tanlang</span></div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {categories.map(({name,icon:Icon,note})=><button key={name} onClick={()=>{setActiveCategory(name);document.getElementById("featured")?.scrollIntoView({behavior:"smooth"});}} className="group rounded-2xl border border-[#e9ebe5] bg-[#fafbf8] p-4 text-left transition hover:-translate-y-1 hover:border-[#b9d78a] hover:bg-[#f2f7e9] sm:p-5"><span className="grid h-11 w-11 place-items-center rounded-xl bg-[#eaf2dc] text-[#526d37] transition group-hover:bg-[#c7f36a]"><Icon size={20}/></span><span className="mt-4 block text-sm font-extrabold">{name}</span><span className="mt-1 block text-[10px] text-[#8b9288]">{note}</span></button>)}
          </div>
        </div>
      </section>

      <section id="featured" className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-[10px] font-black tracking-[.2em] text-[#809b51]">EDITOR TANLOVI</p><h2 className="mt-2 text-3xl font-black tracking-[-.05em] sm:text-4xl">E’tiborga loyiq mahsulotlar</h2><p className="mt-2 text-sm text-[#7e867c]">Dastlabki vitrina konsepti — mahsulotlar namuna sifatida ko‘rsatilgan.</p></div><div className="flex flex-wrap gap-2">{["Barchasi",...categories.map(c=>c.name)].map(name=><button key={name} onClick={()=>setActiveCategory(name)} className={`rounded-full px-4 py-2 text-[11px] font-bold transition ${activeCategory===name?"bg-[#18241d] text-white":"border border-black/10 bg-white text-[#646c62] hover:border-black/30"}`}>{name}</button>)}</div></div>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {visibleProducts.map((product)=><article key={product.id} className="group min-w-0"><div className={`relative flex aspect-[.83] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${product.tone}`}><span className="absolute left-3 top-3 rounded-full bg-white/80 px-2.5 py-1.5 text-[8px] font-black tracking-[.12em] text-[#343b32] backdrop-blur">{product.label}</span><button onClick={()=>toggleSaved(product.id)} aria-label="Sevimlilarga qo‘shish" className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-white/80 text-[#333] backdrop-blur transition hover:scale-105"><Heart size={15} fill={saved.includes(product.id)?"#e36c65":"none"} className={saved.includes(product.id)?"text-[#e36c65]":""}/></button><span className="select-none text-[5.5rem] drop-shadow-[0_18px_18px_rgba(0,0,0,.15)] transition duration-500 group-hover:scale-110 sm:text-[7rem]">{product.emoji}</span><span className="absolute bottom-3 right-3 rounded-full bg-white/80 px-3 py-2 text-[9px] font-bold text-[#283126] opacity-0 backdrop-blur transition group-hover:opacity-100">Ko‘rish ↗</span></div><div className="pt-3"><p className="text-[9px] font-black tracking-[.16em] text-[#8c9488]">{product.brand}</p><h3 className="mt-1 line-clamp-2 text-xs font-bold leading-5 sm:text-sm">{product.name}</h3><div className="mt-2 flex items-center justify-between gap-1"><span className="text-xs font-black sm:text-sm">{product.price} <span className="text-[9px] text-[#8a9186]">UZS</span></span><span className="flex items-center gap-1 text-[10px] text-[#7b8477]"><Star size={11} fill="#9db76b" className="text-[#9db76b]"/> 4.9</span></div></div></article>)}
        </div>
        {visibleProducts.length===0 && <div className="rounded-2xl border border-dashed border-black/15 py-14 text-center text-sm text-[#7e867c]">Bu qidiruv bo‘yicha namuna topilmadi. Boshqa so‘zni sinab ko‘ring.</div>}
        <div className="mt-10 text-center"><span className="inline-flex items-center gap-2 rounded-full border border-black/10 px-5 py-3 text-[11px] font-bold text-[#697166]">TO‘LIQ KATALOG KEYINGI BOSQICHDA <ArrowRight size={14}/></span></div>
      </section>

      <section id="about" className="bg-[#18241d] text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20"><div className="max-w-xl"><p className="text-[10px] font-black tracking-[.2em] text-[#c7f36a]">NIMA UCHUN WORLD BRANDS?</p><h2 className="mt-3 text-3xl font-black leading-tight tracking-[-.05em] sm:text-4xl">Xarid qilishning yangi, qulay usuli.</h2></div><div className="mt-10 grid gap-8 md:grid-cols-3">{benefits.map(({icon:Icon,title,text},i)=><div key={title} className="border-t border-white/15 pt-5"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-[#c7f36a]"><Icon size={21}/></span><p className="mt-6 text-[10px] font-bold tracking-[.15em] text-white/40">0{i+1} / WORLD BRANDS</p><h3 className="mt-2 text-lg font-extrabold">{title}</h3><p className="mt-2 max-w-xs text-sm leading-6 text-white/55">{text}</p></div>)}</div></div>
      </section>

      <section id="seller" className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20"><div className="relative overflow-hidden rounded-[2rem] bg-[#dfe9d2] p-8 sm:p-12 lg:p-14"><div className="absolute -right-10 -top-24 h-72 w-72 rounded-full border-[38px] border-white/30"/><div className="relative max-w-2xl"><p className="text-[10px] font-black tracking-[.2em] text-[#687e4d]">SOTUVCHILAR VA BRENDLAR UCHUN</p><h2 className="mt-3 text-3xl font-black leading-tight tracking-[-.06em] sm:text-5xl">Brendingizni yangi auditoriyaga olib chiqing.</h2><p className="mt-4 max-w-lg text-sm leading-6 text-[#65715e]">WORLD BRANDS platformasida do‘kon ochish va mahsulotlaringizni kengroq mijozlarga taqdim etish imkoniyati.</p><a href="mailto:hello@worldbrands.uz?subject=Seller%20registration" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#18241d] px-6 py-3.5 text-xs font-bold text-white transition hover:bg-[#2d4032]">Hamkor bo‘lish <ArrowRight size={15}/></a></div></div></section>

      <footer className="bg-[#111a14] text-white"><div className="mx-auto max-w-7xl px-5 py-10 lg:px-8"><div className="flex flex-col justify-between gap-8 sm:flex-row"><div><a href="/" className="flex items-center gap-2.5"><span className="grid h-9 w-9 place-items-center rounded-xl bg-[#c7f36a] font-black text-[#18241d]">W.</span><span className="text-sm font-black tracking-[.13em]">WORLD BRANDS</span></a><p className="mt-4 max-w-xs text-xs leading-5 text-white/45">Dunyo brendlari va yangi imkoniyatlar — bir manzilda.</p></div><div className="grid grid-cols-2 gap-x-12 gap-y-3 text-xs text-white/55"><a href="#categories" className="hover:text-white">Kategoriyalar</a><a href="#about" className="hover:text-white">Biz haqimizda</a><a href="#seller" className="hover:text-white">Sotuvchilar uchun</a><a href="mailto:hello@worldbrands.uz" className="hover:text-white">Bog‘lanish</a></div><div className="flex gap-2"><a aria-label="Instagram" href="#seller" className="grid h-9 w-9 place-items-center rounded-full border border-white/15"><Instagram size={15}/></a><a aria-label="Facebook" href="#seller" className="grid h-9 w-9 place-items-center rounded-full border border-white/15"><Facebook size={15}/></a></div></div><div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-5 text-[10px] text-white/35 sm:flex-row sm:justify-between"><span>© 2026 WORLD BRANDS. Barcha huquqlar himoyalangan.</span><span>O‘zbekiston · UZS / USD / EUR</span></div></div></footer>
    </main>
  );
}
