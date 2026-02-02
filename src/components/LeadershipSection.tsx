"use client";

import Image from "next/image";
import { Star, Quote } from "lucide-react";

const officers = {
    commander: {
        name: "Col Satyabrata Swain",
        rank: "Group Commander",
        quote: "Leadership is earned through courage and responsibility.",
        image: "/media/Officers/GC_Satyabrata_Swain.png",
    },
    sd: [
        {
            name: "Lt Col Shantanu Dey",
            position: "Officer Commanding (OC)",
            quote: "Discipline is the foundation of true strength.",
            image: "/media/Officers/OC_Shantunu_Dey.jpg",
        },
        {
            name: "Sreyansu Satya Prakash",
            position: "Care Taker Officer (CTO)",
            quote: "Duty performed with honor builds lasting respect.",
            image: "/media/Officers/CTO_Sreyanshu_Satya_Prakash.png",
        },
    ],
    sw: [
        {
            name: "Col Sanjeev Dewan",
            position: "Commanding Officer (CO)",
            quote: "Discipline and determination create unstoppable leaders.",
            image: "/media/Officers/CO_Sanjeev_Dewan.jpg",
        },
        {
            name: "Dr. Rima Sahani",
            position: "Care Taker Officer (CTO)",
            quote: "Resilience and willpower shape the strongest warriors.",
            image: "/media/Officers/CTO_Rima_Sahani.png",
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
        className={`relative bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ${isCommander ? "max-w-md mx-auto" : ""
            }`}
    >
        <div className={`relative ${isCommander ? "h-[400px]" : "h-[350px]"} overflow-hidden bg-gray-100`}>
            <Image
                src={officer.image}
                alt={officer.name}
                fill
                className="object-cover object-top transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ncc-navy/90 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className={`${isCommander ? "text-2xl" : "text-xl"} font-bold`}>{officer.name}</h3>
                <p className="text-ncc-blue font-medium">{officer.rank || officer.position}</p>
            </div>
        </div>
        <div className="p-6 bg-white relative">
            <Quote className="absolute top-4 right-4 text-ncc-navy/10 w-8 h-8 rotate-180" />
            <p className="text-gray-600 italic font-medium leading-relaxed relative z-10">
                &quot;{officer.quote}&quot;
            </p>
        </div>
    </div>
);

export default function LeadershipSection() {
    return (
        <section id="leadership" className="py-20 bg-ncc-light pattern-dots relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 backdrop-blur border border-ncc-navy/10 shadow-sm text-ncc-navy font-medium mb-6">
                        <Star size={18} />
                        <span>Our Leaders</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Words from Our <span className="text-ncc-red">Leaders</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Meet the distinguished leaders who guide our NCC unit with dedication and vision
                    </p>
                </div>

                {/* Commander */}
                <div className="mb-20">
                    <OfficerCard officer={officers.commander} isCommander />
                </div>

                {/* Divisions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* SD Division */}
                    <div className="space-y-8">
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-ncc-navy inline-block border-b-4 border-ncc-orange pb-2">
                                Senior Division
                            </h3>
                        </div>
                        <div className="grid gap-8">
                            {officers.sd.map((officer, idx) => (
                                <OfficerCard key={idx} officer={officer} />
                            ))}
                        </div>
                    </div>

                    {/* SW Division */}
                    <div className="space-y-8">
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-ncc-navy inline-block border-b-4 border-ncc-green pb-2">
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
