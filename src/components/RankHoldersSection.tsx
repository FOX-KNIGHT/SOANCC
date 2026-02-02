"use client";

import Image from "next/image";
import Link from "next/link";
import { Award, ArrowRight } from "lucide-react";

const cadets = [
    {
        name: "Devi Prasad Sarangi",
        rank: "SUO",
        year: "Third Year",
        desc: "Leading with dedication and inspiring fellow cadets through exemplary service.",
        image: "/SOANCC/media/Rank-Holders/SD/SUO DEVI PRASAD SARANGI.png",
    },
    {
        name: "Nikhilesh Sahoo",
        rank: "JUO",
        year: "Third Year",
        desc: "Passionate about training and mentoring new cadets in NCC values.",
        image: "/SOANCC/media/Rank-Holders/SD/JUO NIKHILESH SAHOO.png",
    },
    {
        name: "Raj Sahasranshu Biswal",
        rank: "JUO",
        year: "Third Year",
        desc: "Committed to excellence and fostering team spirit among junior cadets.",
        image: "/SOANCC/media/Rank-Holders/SD/JUO RAJ SAHASRANSU BISWAL.png",
    },
    {
        name: "Anubhav Samantray",
        rank: "JUO",
        year: "Third Year",
        desc: "Dedicated to community service and upholding the highest standards of discipline.",
        image: "/SOANCC/media/Rank-Holders/SD/JUO ANUBHAB SAMANTARAY.png",
    },
    {
        name: "Komal Kumari",
        rank: "JUO",
        year: "Fourth Year",
        desc: "Exhibiting remarkable leadership and a steadfast commitment to NCC ideals.",
        image: "/SOANCC/media/Rank-Holders/SW/JUO Komal Kumari.jpeg",
    },
];

export default function RankHoldersSection() {
    return (
        <section id="ranks" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-ncc-light border border-ncc-navy/10 shadow-sm text-ncc-navy font-medium mb-6">
                        <Award size={18} />
                        <span>Leading Forward</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Our Distinguished Cadet <span className="text-ncc-blue">Under Officers</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Meet our exceptional cadet leaders who exemplify excellence and inspire their peers through dedicated service
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {cadets.map((cadet, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center"
                        >
                            <div className="relative w-32 h-32 mb-6 p-1 rounded-full bg-gradient-to-br from-ncc-orange to-ncc-green">
                                <div className="w-full h-full rounded-full overflow-hidden relative bg-white border-2 border-white">
                                    <Image
                                        src={cadet.image}
                                        alt={cadet.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-1">{cadet.name}</h3>
                            <span className="inline-block px-3 py-1 bg-ncc-navy/10 text-ncc-navy text-xs font-bold rounded-full mb-2">
                                {cadet.rank}
                            </span>
                            <p className="text-sm text-gray-400 font-medium mb-4">{cadet.year}</p>
                            <p className="text-sm text-gray-600 leading-relaxed">{cadet.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        href="/rank"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-ncc-navy text-white font-semibold rounded-lg hover:bg-ncc-blue hover:scale-105 transition-all shadow-lg"
                    >
                        View all Rank Holders
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
