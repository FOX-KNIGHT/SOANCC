"use client";

import Image from "next/image";
import { GraduationCap, Anchor, Building, Trophy } from "lucide-react";

const alumni = [
    {
        name: "Sushant Dhar",
        position: "Sub Lieutenant",
        achievement: "Indian Navy",
        desc: "Successfully recommended at 33 SSB Bhopal for Navy SSC IT, exemplifying technical excellence and leadership in naval service.",
        image: "/SOANCC/media/Alumni/Susant_dhar.png",
        stats: [
            { icon: <Anchor size={16} />, label: "Navy" },
            { icon: <Building size={16} />, label: "IT Officer" },
        ],
    },
    {
        name: "Kumar Abinash",
        position: "OPSC Officer",
        achievement: "Rank 278 (2022)",
        desc: "Serving with distinction as a Group B Officer in Odisha Government, contributing to state administration excellence.",
        image: "/SOANCC/media/Alumni/Kumar_Abinash.png",
        stats: [
            { icon: <Building size={16} />, label: "OPSC" },
            { icon: <Trophy size={16} />, label: "Rank 278" },
        ],
    },
    {
        name: "Ankit Raj Biswal",
        position: "Lieutenant",
        achievement: "Indian Army",
        desc: "Commissioned as Lieutenant in the Indian Army, leading with honor after completing training at OTA Chennai.",
        image: "/SOANCC/media/Alumni/Ankit_Biswal.png",
        stats: [
            { icon: <Building size={16} />, label: "Army" },
            { icon: <Trophy size={16} />, label: "Lieutenant" },
        ],
    },
];

export default function AlumniSection() {
    return (
        <section id="alumni" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-ncc-navy font-medium mb-6">
                        <GraduationCap size={18} />
                        <span>Alumni Excellence</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Our Distinguished <span className="text-ncc-blue">Alumni</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Celebrating our exceptional alumni and their inspiring journeys of service to the nation
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {alumni.map((alum, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                        >
                            <div className="relative h-[300px] overflow-hidden bg-ncc-navy/5">
                                <Image
                                    src={alum.image}
                                    alt={alum.name}
                                    fill
                                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-ncc-navy shadow-sm">
                                    Alumni
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-1">{alum.name}</h3>
                                <p className="text-ncc-blue font-semibold mb-1">{alum.position}</p>
                                <p className="text-sm font-bold text-ncc-orange mb-4">{alum.achievement}</p>
                                <p className="text-gray-600 text-[15px] leading-relaxed mb-6">{alum.desc}</p>

                                <div className="flex gap-4 pt-4 border-t border-gray-100">
                                    {alum.stats.map((stat, i) => (
                                        <div key={i} className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                                            {stat.icon}
                                            <span>{stat.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
