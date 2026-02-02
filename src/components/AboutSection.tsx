"use client";

import AboutSlideshow from "./AboutSlideshow";
import { Info } from "lucide-react";

export default function AboutSection() {
    return (
        <section id="about" className="py-20 bg-gradient-to-br from-white via-gray-50 to-slate-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-center gap-2 mb-12">
                    <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 backdrop-blur border border-ncc-navy/10 shadow-sm text-ncc-navy font-medium">
                        <Info size={18} />
                        <span>About Us</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Slideshow */}
                    <div className="w-full">
                        <AboutSlideshow />
                    </div>

                    {/* Content */}
                    <div className="text-center lg:text-left space-y-6">
                        <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                            About <span className="text-ncc-navy">SOA NCC</span>
                        </h2>
                        <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                            <p>
                                Established as an integral part of the prestigious{" "}
                                <strong className="text-ncc-navy font-semibold">
                                    4 (O) CTC and 1 (O) GIRLS BN under the Odisha Directorate
                                </strong>
                                , SOA NCC Unit stands as a beacon of excellence in character development,
                                leadership training, and national service.
                            </p>
                            <p>
                                Affiliated with{" "}
                                <strong className="text-ncc-navy font-semibold">
                                    Siksha &apos;O&apos; Anusandhan University
                                </strong>
                                , we are committed to nurturing young minds into disciplined citizens and
                                future leaders who embody the highest ideals of patriotism, integrity, and
                                service.
                            </p>
                        </div>

                        <div className="pt-4 flex justify-center lg:justify-start gap-4">
                            <div className="text-center px-4 py-2 bg-white rounded-lg shadow border border-gray-100">
                                <span className="block text-2xl font-bold text-ncc-navy">100+</span>
                                <span className="text-sm text-gray-500">Cadets</span>
                            </div>
                            <div className="text-center px-4 py-2 bg-white rounded-lg shadow border border-gray-100">
                                <span className="block text-2xl font-bold text-ncc-navy">50+</span>
                                <span className="text-sm text-gray-500">Events</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
