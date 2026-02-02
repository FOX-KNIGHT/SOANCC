"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Award } from "lucide-react";

const achievements = [
    {
        title: "MOUNTAINEERING CAMP",
        desc: "CDT Vivek Ranjan Sahoo was one of 150 cadets to attend Leadership & Team Building Camp at NIM Uttarkashi.",
        image: "/media/Achievement/MountaineeringCamp.jpeg",
    },
    {
        title: "AITSC 2025",
        desc: "2 Cadets from SOA NCC represented Odisha Directorate at the All India Thal Sainik Camp, DG NCC New Delhi",
        image: "/media/Achievement/AITSC2025.png",
    },
    {
        title: "ID STATE PARADE",
        desc: "Best Senior Division Boys Platoon Trophy by the Honorable Chief Minister of Odisha.",
        image: "/media/Achievement/ID-STATE-PARADE.png",
    },
    {
        title: "EBSB CAMP",
        desc: "3 Cadets of SOA NCC got selected in Ek Bharat Shrestha Bharat Camp held at AAD Centre Gopalpur, Ganjam, Odisha",
        image: "/media/Achievement/EBSB.jpeg",
    },
    {
        title: "YEP 2024",
        desc: "SUO Abinash Nanda represented India at the Youth Exchange Program (YEP) in Kyrgyzstan.",
        image: "/media/Achievement/YEP.png",
    },
    {
        title: "AITSC 2024",
        desc: "All India Thal Sainik Camp representation with outstanding performance at Rajpath, New Delhi.",
        image: "/media/Achievement/TSC2024.png",
    },
    {
        title: "Capital Day Awards",
        desc: "6 SOA NCC Cadets won 2nd Prize at the 77th Capital Foundation Day Parade.",
        image: "/media/Achievement/CapitalFoundationDay.png",
    },
    {
        title: "DG NCC Medallion",
        desc: "CDT Bidisha Karna received the DG NCC Medallion and qualified for the 66th NSCC, New Delhi.",
        image: "/media/Achievement/DG_NCC_Shooting.jpg",
    },

];

export default function AchievementsSection() {
    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent((c) => (c === 0 ? achievements.length - 1 : c - 1));
    const next = () => setCurrent((c) => (c === achievements.length - 1 ? 0 : c + 1));

    return (
        <section id="achievements" className="py-20 bg-ncc-navy text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/40 z-0"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 shadow-sm text-white font-medium mb-6">
                        <Award size={18} />
                        <span>Our Pride</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Celebrating Excellence</h2>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                        Recognizing outstanding achievements in training, competitions, and dedicated national service
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                    <div className="relative aspect-[16/9] md:aspect-[21/9]">
                        <Image
                            src={achievements[current].image}
                            alt={achievements[current].title}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />

                        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
                            <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                                {achievements[current].title}
                            </h3>
                            <p className="text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed">
                                {achievements[current].desc}
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={prev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/30 hover:bg-black/60 backdrop-blur text-white transition-all shadow-lg border border-white/20"
                    >
                        <ChevronLeft size={32} />
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/30 hover:bg-black/60 backdrop-blur text-white transition-all shadow-lg border border-white/20"
                    >
                        <ChevronRight size={32} />
                    </button>

                    <div className="absolute bottom-4 right-8 flex space-x-2">
                        {achievements.map((_, idx) => (
                            <div
                                key={idx}
                                onClick={() => setCurrent(idx)}
                                className={`w-2 h-2 rounded-full cursor-pointer transition-all ${idx === current ? "bg-orange-500 w-8" : "bg-white/50 hover:bg-white"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
