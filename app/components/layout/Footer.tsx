"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";
import { dict } from "../../lib/dictionaries";

export default function Footer() {
  const { lang } = useLanguage();
  const t = dict[lang as keyof typeof dict];
  const d = t.nav;
  const f = t.footer;
  const c = t.contact;
  const year = new Date().getFullYear();

  const links = [
    { name: d.history, href: "/#history" },
    { name: d.philosophy, href: "/philosophy" },
    { name: d.business, href: "/business" },
    { name: d.hsse, href: "/hsse" },
    { name: d.partners, href: "/partners" },
    { name: d.references, href: "/references" },
    { name: d.contact, href: "/contact" },
  ];

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-[#003554] border-t border-white/10 z-40">
      {/* Desktop footer */}
      <div className="hidden md:block mx-auto px-4 py-4">
        <div className="flex flex-nowrap items-start justify-evenly gap-4">

          {/* Brand */}
          <div className="flex flex-col gap-1">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo1.png" alt="OMOS" width={32} height={32} className="object-contain" />
              <span className="text-white font-bold text-sm">OMOS International</span>
            </Link>
            <p className="text-[11px] text-white/50 leading-snug">
              {f.description}
            </p>
            <div className="flex items-center gap-3">
              <span className="text-[11px] text-brand-400">contact@omos-international.com</span>
              <a href="https://www.google.com/maps?q=36.742889,10.303194" target="_blank" rel="noopener noreferrer" className="text-[11px] text-brand-400 hover:text-white transition-colors">
                📍 {f.location}
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-1">
            <h4 className="text-white font-semibold text-[11px] uppercase tracking-wider">{f.navigation}</h4>
            <div className="flex flex-wrap gap-x-3 gap-y-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[11px] text-white/50 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Tunisia */}
          <div className="flex flex-col gap-1">
            <h4 className="text-white font-semibold text-[11px] uppercase tracking-wider">
              {f.headOffice}
            </h4>
            <p className="text-[11px] text-white/50">{c.tunisia || "Tunisia"}</p>
            <p className="text-[11px] text-white/50" dir="ltr">📞 {c.phoneTunisia || "+216 24 339 166"}</p>
          </div>

          {/* Libya */}
          <div className="flex flex-col gap-1">
            <h4 className="text-white font-semibold text-[11px] uppercase tracking-wider">
              {f.branchOffice}
            </h4>
            <p className="text-[11px] text-white/50">{c.libya || "Libya"}</p>
            <p className="text-[11px] text-white/50" dir="ltr">📞 {c.phoneLibya || "+218 91 226 4780"}</p>
          </div>

          {/* Copyright & Back to top */}
          <div className="flex flex-col gap-1 justify-center">
            <p className="text-[10px] text-white/30">
              © {year} OMOS International.
            </p>
            <p className="text-[10px] text-white/30">
              {f.rights}
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-[10px] text-white/30 hover:text-white/60 transition-colors text-left mt-1"
            >
              ↑ {f.backToTop}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile footer - compact single row */}
      <div className="md:hidden px-4 py-4 bg-[#003554] border-t border-white/10">
        <div className="flex items-center justify-between gap-3 mb-3">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo1.png" alt="OMOS" width={28} height={28} className="object-contain" />
            <span className="text-white font-bold text-xs">OMOS</span>
          </Link>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full text-white/70 hover:bg-white/20 hover:text-white transition-all"
          >
            ↑
          </button>
        </div>
        {/* Tunisia */}
        <div className="flex items-center justify-between bg-white/5 rounded-lg p-2 mb-2">
          <div className="flex flex-col">
            <span className="text-[10px] text-white/50 font-medium">{c.tunisia || "Tunisia"}</span>
            <span dir="ltr" className="text-[11px] text-white font-bold">{c.phoneTunisia || "+216 24 339 166"}</span>
          </div>
          <span className="text-white/30">📞</span>
        </div>
        {/* Libya */}
        <div className="flex items-center justify-between bg-white/5 rounded-lg p-2">
          <div className="flex flex-col">
            <span className="text-[10px] text-white/50 font-medium">{c.libya || "Libya"}</span>
            <span dir="ltr" className="text-[11px] text-white font-bold">{c.phoneLibya || "+218 91 226 4780"}</span>
          </div>
          <span className="text-white/30">📞</span>
        </div>
      </div>
    </footer>
  );
}
