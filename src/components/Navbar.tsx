"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Objectives", href: "#objectives" },
    { name: "Activities", href: "#activities" },
    { name: "Achievements", href: "#achievements" },
    { name: "Alumni", href: "#alumni" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-ncc-navy/90 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Left: Logo & Brand */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 overflow-hidden rounded-lg transition-transform group-hover:scale-110">
              <Image
                src="/media/Logo/NCC_logo.png"
                alt="SOA NCC Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col text-white leading-tight hidden sm:flex">
              <span className="text-xl font-bold">SOA NCC</span>
              <span className="text-xs opacity-80">4 (O) CTC | 1 (O) GIRLS BN</span>
            </div>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white text-sm font-medium hover:text-ncc-blue transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#join"
            className="px-6 py-2 bg-gradient-to-r from-ncc-orange to-orange-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all text-sm"
          >
            Join
          </Link>
          <a
            href="https://www.soa.ac.in/iter"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-12 h-12 hover:scale-110 transition-transform"
          >
             <Image
                src="/media/Logo/SOA_logo.png"
                alt="SOA University Logo"
                fill
                className="object-contain rounded-md"
              />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-ncc-navy/95 backdrop-blur-xl border-t border-white/10 shadow-xl flex flex-col py-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-8 py-3 text-white font-medium hover:bg-white/10 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-4 px-8">
             <Link
              href="#join"
              className="inline-block px-8 py-3 bg-gradient-to-r from-ncc-orange to-orange-500 text-white font-semibold rounded-lg shadow-md w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              Join Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
