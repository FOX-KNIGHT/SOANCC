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
        className={`relative bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group ${isCommander ? "max-w-md mx-auto" : ""
            }`}
    >
        {/* Decorative Tricolor Line */}
        <div className="absolute top-0 left-0 right-0 h-1 z-20 bg-gradient-to-r from-orange-500 via-white to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className={`relative w-full aspect-[3/4] overflow-hidden bg-gray-100`}>
            <Image
                src={officer.image}
                alt={officer.name}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ncc-navy/90 via-transparent to-transparent opacity-90" />
            <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="flex items-center gap-2 mb-2 opacity-80">
                    {isCommander && <Star size={16} className="text-orange-400 fill-orange-400" />}
                </div>
                <h3 className={`${isCommander ? "text-2xl" : "text-xl"} font-bold tracking-tight`}>{officer.name}</h3>
                <p className="text-ncc-blue font-medium text-sm tracking-wide uppercase bg-white/10 backdrop-blur-sm inline-block px-2 py-0.5 rounded mt-1 border border-white/20">
                    {officer.rank || officer.position}
                </p>
            </div>
        </div>
        <div className="p-6 bg-white relative">
            <Quote className="absolute top-4 right-4 text-ncc-navy/5 w-10 h-10 rotate-180" />
            <p className="text-gray-600 italic font-medium leading-relaxed relative z-10 text-[15px]">
                &quot;{officer.quote}&quot;
            </p>
        </div>
    </div>
);

export default function LeadershipSection() {
    return (
        <section id="leadership" className="py-12 md:py-24 bg-ncc-light relative">
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

                <div className="mb-20">
                    <OfficerCard officer={officers.commander} isCommander />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div className="text-center relative">
                            <div className="absolute left-0 right-0 top-1/2 h-px bg-gray-200 -z-10"></div>
                            <h3 className="text-2xl font-bold text-ncc-navy inline-block bg-ncc-light px-6">
                                Senior Division
                            </h3>
                        </div>
                        <div className="grid gap-8">
                            {officers.sd.map((officer, idx) => (
                                <OfficerCard key={idx} officer={officer} />
                            ))}
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="text-center relative">
                            <div className="absolute left-0 right-0 top-1/2 h-px bg-gray-200 -z-10"></div>
                            <h3 className="text-2xl font-bold text-ncc-navy inline-block bg-ncc-light px-6">
                                Senior Wing
                            </h3>
                        </div>
                        <div className="grid gap-8">
                            {officers.sw.map((officer, idx) => (
                                <OfficerCard key={idx} officer={officer} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
