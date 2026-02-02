"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, Linkedin } from "lucide-react";
import rankData from "@/data/rank-data.json";


type Social = {
    linkedin?: string;
    email?: string;
};

type Officer = {
    name: string;
    rank: string;
    year: string;
    image: string;
    social: Social;
};

type RankGroup = {
    [key: string]: Officer[];
};

type SectionData = {
    name: string;
    officers: RankGroup;
};

type RankData = {
    header: { title: string; subtitle: string };
    sections: {
        sd: SectionData;
        sw: SectionData;
    };
};

const data = rankData as RankData;

const rankOrder = ["SUO", "JUO", "CQMS", "SGT", "CPL", "LCPL"];

export default function RankList() {
    const [activeTab, setActiveTab] = useState<"sd" | "sw">("sd");
    const activeSection = data.sections[activeTab];

    if (!activeSection) return null;

    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="flex justify-center mb-12">
                <div className="bg-white p-2 rounded-full shadow-md border border-gray-100 flex gap-2">
                    <button
                        onClick={() => setActiveTab("sd")}
                        className={`px-8 py-3 rounded-full font-bold transition-all ${activeTab === "sd"
                            ? "bg-ncc-navy text-white shadow-md"
                            : "text-gray-500 hover:bg-gray-50"
                            }`}
                    >
                        Senior Division (SD)
                    </button>
                    <button
                        onClick={() => setActiveTab("sw")}
                        className={`px-8 py-3 rounded-full font-bold transition-all ${activeTab === "sw"
                            ? "bg-ncc-navy text-white shadow-md"
                            : "text-gray-500 hover:bg-gray-50"
                            }`}
                    >
                        Senior Wing (SW)
                    </button>
                </div>
            </div>

            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 border-b-4 border-ncc-orange inline-block pb-2">
                    {activeSection.name}
                </h2>
            </div>

            <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {rankOrder.map((rank) => {
                    const officers = activeSection.officers[rank];
                    if (!officers || officers.length === 0) return null;

                    return (
                        <div key={rank} className="relative">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-px bg-gray-200 flex-grow"></div>
                                <span className="text-2xl font-bold text-ncc-navy bg-ncc-light px-6 py-2 rounded-lg border border-ncc-navy/10">
                                    {rank}
                                </span>
                                <div className="h-px bg-gray-200 flex-grow"></div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center">
                                {officers.map((officer, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                                    >
                                        <div className="relative h-[280px] bg-gray-100 group">
                                            <Image
                                                src={`/SOANCC/${officer.image}`}
                                                alt={officer.name}
                                                fill
                                                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                                            <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                                                {officer.social.linkedin && officer.social.linkedin !== "#" && (
                                                    <a href={officer.social.linkedin} target="_blank" rel="noopener noreferrer" className="bg-white/90 p-2 rounded-full text-blue-600 hover:bg-white transition-colors">
                                                        <Linkedin size={18} />
                                                    </a>
                                                )}
                                                {officer.social.email && (
                                                    <a href={`mailto:${officer.social.email}`} className="bg-white/90 p-2 rounded-full text-red-500 hover:bg-white transition-colors">
                                                        <Mail size={18} />
                                                    </a>
                                                )}
                                            </div>

                                            <div className="absolute bottom-4 left-4 text-white">
                                                <p className="text-xs font-bold bg-ncc-orange px-2 py-0.5 rounded text-white inline-block mb-1">
                                                    {officer.year}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="p-5 text-center">
                                            <h3 className="text-xl font-bold text-gray-900 mb-1">{officer.name}</h3>
                                            <p className="text-ncc-blue font-semibold">{officer.rank}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
