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
      <div className="md:hidden px-3 sm:px-4 py-2 sm:py-2.5">
        <div className="flex items-center justify-between gap-2">
          <Link href="/" className="flex items-center gap-1.5">
            <Image src="/logo1.png" alt="OMOS" width={24} height={24} className="object-contain" />
            <span className="text-white font-bold text-xs">OMOS</span>
          </Link>
          <div className="flex items-center gap-2 sm:gap-3 text-[9px] sm:text-[10px] text-white/50">
            <span className="hidden sm:inline" dir="ltr">{c.phoneTunisia || "+216 24 339 166"}</span>
            <span className="hidden sm:inline" dir="ltr">{c.phoneLibya || "+218 91 226 4780"}</span>
            <span className="sm:hidden">📞</span>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-[10px] text-white/30 hover:text-white/60 transition-colors"
          >
            ↑
          </button>
        </div>
        {/* Show phone numbers on very small screens below */}
        <div className="flex items-center justify-between mt-2 sm:hidden text-[9px] text-white/50">
          <span dir="ltr">{c.phoneTunisia || "+216 24 339 166"}</span>
          <span dir="ltr">{c.phoneLibya || "+218 91 226 4780"}</span>
        </div>
      </div>
    </footer>
  );
}
