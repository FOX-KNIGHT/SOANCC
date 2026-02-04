"use client";

import Image from "next/image";
import { Star, Quote } from "lucide-react";

const officers = {
    commander: {
        name: "Col Satyabrata Swain",
        rank: "Group Commander",
        quote: "Leadership is earned through courage and responsibility.",
        image: "/SOANCC/media/Officers/GC_Satyabrata_Swain.png",
    },
    sd: [
        {
            name: "Lt Col Shantanu Dey",
            position: "Officer Commanding (OC)",
            quote: "Discipline is the foundation of true strength.",
            image: "/SOANCC/media/Officers/OC_Shantunu_Dey.jpg",
        },
        {
            name: "Sreyansu Satya Prakash",
            position: "Care Taker Officer (CTO)",
            quote: "Duty performed with honor builds lasting respect.",
            image: "/SOANCC/media/Officers/CTO_Sreyanshu_Satya_Prakash.png",
        },
    ],
    sw: [
        {
            name: "Col Sanjeev Dewan",
            position: "Commanding Officer (CO)",
            quote: "Discipline and determination create unstoppable leaders.",
            image: "/SOANCC/media/Officers/CO_Sanjeev_Dewan.jpg",
        },
        {
            name: "Dr. Rima Sahani",
            position: "Care Taker Officer (CTO)",
            quote: "Resilience and willpower shape the strongest warriors.",
            image: "/SOANCC/media/Officers/CTO_Rima_Sahani.png",
        },
    ],
};

const OfficerCard = ({
    officer,
    isCommander = false,
}: {
    officer: { name: string; rank?: string; position?: string; quote: string; image: string };
    isCommander?: boolean;
}) => (
    <div
        className={`group bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full ring-1 ring-black/5 ${isCommander ? "max-w-sm mx-auto" : "w-full"
            }`}
    >
        <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
            <Image
                src={officer.image}
                alt={officer.name}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>

            {/* Tricolor Top Border on Hover */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-ncc-red via-ncc-navy to-ncc-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="absolute bottom-3 left-3 right-3">
                {isCommander && (
                    <div className="flex items-center gap-1 mb-1 text-orange-400">
                        <Star size={16} fill="currentColor" />
                    </div>
                )}
                <span className="text-white text-xs font-medium bg-white/20 backdrop-blur-md px-2 py-1 rounded border border-white/30 inline-block">
                    {officer.rank || officer.position}
                </span>
            </div>
        </div>

        <div className="p-4 flex flex-col flex-grow bg-white relative">
            <Quote className="absolute top-3 right-3 text-ncc-navy/5 w-6 h-6 rotate-180" />
            <h3 className="text-lg font-bold text-gray-900 leading-tight mb-1 group-hover:text-ncc-blue transition-colors">
                {officer.name}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed italic mt-2 line-clamp-3">
                &quot;{officer.quote}&quot;
            </p>
        </div>
    </div>
);

export default function LeadershipSection() {
    return (
        <section id="leadership" className="py-12 md:py-24 bg-ncc-light relative">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-ncc-red via-ncc-navy to-ncc-blue z-20" />
            {/* Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '32px 32px' }}
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 backdrop-blur border border-ncc-navy/10 shadow-sm text-ncc-navy font-medium mb-6">
                        <Star size={18} className="text-orange-500" />
                        <span>Command Structure</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Words from Our <span className="text-ncc-red">Leaders</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Meet the distinguished leaders who guide our NCC unit with dedication and vision
                    </p>
                </div>

                <div className="mb-12">
                    <OfficerCard officer={officers.commander} isCommander />
                </div>

                <div className="text-center relative mb-8">
                    <span className="relative z-10 px-4 bg-ncc-light text-xl font-bold text-ncc-navy">Senior Division & Wing</span>
                    <div className="absolute left-0 right-0 top-1/2 h-px bg-gray-200 -z-10"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Combine SD and SW arrays for a single unified grid */}
                    {[...officers.sd, ...officers.sw].map((officer, idx) => (
                        <OfficerCard key={idx} officer={officer} />
                    ))}
                </div>
            </div>
        </section>
    );
}
