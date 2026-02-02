"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-ncc-navy text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-ncc-orange to-ncc-green bg-clip-text text-transparent">
                            SOA NCC
                        </h2>
                        <p className="text-gray-400 leading-relaxed">
                            4 (O) CTC | 1 (O) GIRLS BN <br />
                            Siksha &apos;O&apos; Anusandhan University
                        </p>
                        <p className="text-sm text-gray-500">
                            Developing character, comradeship, discipline, secular outlook, spirit of adventure, and ideals of selfless service amongst young citizens.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            {[
                                { name: "Home", href: "#home" },
                                { name: "About Us", href: "#about" },
                                { name: "Objectives", href: "#objectives" },
                                { name: "Activities", href: "#activities" },
                                { name: "Achievements", href: "#achievements" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-ncc-blue transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400 text-sm">
                                <MapPin size={18} className="shrink-0 text-ncc-orange mt-0.5" />
                                <span>
                                    SOA University, Khandagiri Square, <br />
                                    Bhubaneswar, Odisha - 751030
                                </span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <Mail size={18} className="shrink-0 text-ncc-blue" />
                                <a href="mailto:ncc@soa.ac.in" className="hover:text-white transition-colors">
                                    ncc@soa.ac.in
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <Phone size={18} className="shrink-0 text-ncc-green" />
                                <span>+91 12345 67890</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6">Follow Us</h3>
                        <div className="flex gap-4 mb-8">
                            {[
                                { icon: <Facebook size={20} />, href: "#" },
                                { icon: <Twitter size={20} />, href: "#" },
                                { icon: <Instagram size={20} />, href: "#" },
                                { icon: <Linkedin size={20} />, href: "#" },
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-ncc-blue hover:scale-110 transition-all"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>

                        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                            <p className="text-xs text-gray-400 mb-2">Join our newsletter for updates</p>
                            <div className="flex">
                                <input type="email" placeholder="Email address" className="bg-black/20 text-white text-sm px-3 py-2 rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-ncc-blue" />
                                <button className="bg-ncc-blue px-3 py-2 rounded-r-md text-white hover:bg-blue-600 transition-colors">
                                    Go
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm text-center md:text-left">
                        &copy; {new Date().getFullYear()} SOA NCC. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
