"use client";

import Image from "next/image";
import { GraduationCap, Anchor, Building, Trophy, Plane } from "lucide-react";

const alumni = [
    {
        name: "Sushant Dhar",
        position: "Sub Lieutenant",
        achievement: "Indian Navy",
        desc: "Successfully recommended at 33 SSB Bhopal for Navy SSC IT, exemplifying technical excellence and leadership.",
        image: "/SOANCC/media/Alumni/Susant_dhar.png",
        stats: [
            { icon: <Anchor size={14} />, label: "Navy" },
            { icon: <Building size={14} />, label: "IT Officer" },
        ],
        color: "text-blue-900",
        badge: "bg-blue-50 text-blue-700"
    },
    {
        name: "Kumar Abinash",
        position: "OPSC Officer",
        achievement: "Rank 278 (2022)",
        desc: "Serving with distinction as a Group B Officer in Odisha Government, contributing to state administration excellence.",
        image: "/SOANCC/media/Alumni/Kumar_Abinash.png",
        stats: [
            { icon: <Building size={14} />, label: "OPSC" },
            { icon: <Trophy size={14} />, label: "Rank 278" },
        ],
        color: "text-orange-700",
        badge: "bg-orange-50 text-orange-700"
    },
    {
        name: "Ankit Raj Biswal",
        position: "Lieutenant",
        achievement: "Indian Army",
        desc: "Commissioned as Lieutenant in the Indian Army, leading with honor after completing training at OTA Chennai.",
        image: "/SOANCC/media/Alumni/Ankit_Biswal.png",
        stats: [
            { icon: <Building size={14} />, label: "Army" },
            { icon: <Trophy size={14} />, label: "Lieutenant" },
        ],
        color: "text-green-700",
        badge: "bg-green-50 text-green-700"
    },
    {
        name: "Ranbir Singh",
        position: "Flying Officer",
        achievement: "Indian Air Force",
        desc: "Recommended for Indian Air Force through AFCAT, ready to serve the nation in the skies with distinction.",
        image: "/SOANCC/media/Alumni/Ranbir_Singh.png", // Assuming filename
        stats: [
            { icon: <Plane size={14} />, label: "Air Force" },
            { icon: <Trophy size={14} />, label: "Flying Officer" },
        ],
        color: "text-sky-600",
        badge: "bg-sky-50 text-sky-700"
    },
];

export default function AlumniSection() {
    return (
        <section id="alumni" className="py-12 md:py-16 bg-gradient-to-br from-orange-50 via-white to-green-50 relative overflow-hidden">
            {/* Subtle Map Texture Background */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}
            />

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-orange-200 shadow-sm text-ncc-navy font-semibold text-sm mb-4">
                        <GraduationCap size={16} className="text-orange-600" />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-blue-900 to-green-600">
                            Hall of Fame
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                        Our Distinguished <span className="text-ncc-blue">Alumni</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
                        Celebrating our exceptional alumni and their inspiring journeys of service to the nation
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {alumni.map((alum, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full ring-1 ring-black/5"
                        >
                            {/* Card Image Area */}
                            <div className="relative h-48 overflow-hidden bg-gray-100">
                                <Image
                                    src={alum.image}
                                    alt={alum.name}
                                    fill
                                    className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>

                                {/* Badge */}
                                <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                                    <span className="text-white text-xs font-medium bg-white/20 backdrop-blur-md px-2 py-1 rounded border border-white/30">
                                        {alum.achievement}
                                    </span>
                                </div>

                                {/* Tricolor Top Border (Hidden initially, shown on hover/active) */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-white to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* Card Content Area */}
                            <div className="p-4 flex flex-col flex-grow">
                                <div className="mb-auto">
                                    <h3 className="text-lg font-bold text-gray-900 leading-tight mb-1 group-hover:text-ncc-blue transition-colors">
                                        {alum.name}
                                    </h3>
                                    <p className={`text-sm font-semibold mb-2 ${alum.color}`}>
                                        {alum.position}
                                    </p>
                                    <p className="text-gray-500 text-xs leading-relaxed line-clamp-3">
                                        {alum.desc}
                                    </p>
                                </div>

                                <div className="flex gap-2 mt-4 pt-3 border-t border-gray-100">
                                    {alum.stats.map((stat, i) => (
                                        <div key={i} className={`flex items-center gap-1.5 text-xs font-medium px-2 py-1 rounded-md ${alum.badge}`}>
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
