"use client";

import { Target, Eye, Flag } from "lucide-react";

const objectives = [
    {
        title: "Aim",
        icon: <Target className="w-8 h-8 text-white" />,
        iconBg: "bg-red-500",
        shadow: "shadow-red-500/30",
        items: [
            "Develop character, camaraderie, discipline, and leadership",
            "Shaping organized and trained youth for the future",
            "Provide environment that motivates young people",
        ],
    },
    {
        title: "Vision",
        icon: <Eye className="w-8 h-8 text-white" />,
        iconBg: "bg-blue-500",
        shadow: "shadow-blue-500/30",
        items: [
            "Empower youth volunteers to become leaders",
            "Foster leadership and character development",
            "Create disciplined and responsible citizens",
        ],
    },
    {
        title: "Motto",
        icon: <Flag className="w-8 h-8 text-white" />,
        iconBg: "bg-sky-400",
        shadow: "shadow-sky-400/30",
        items: [
            "Uphold Unity and Discipline as core values",
            "Promote National Integration and a secular outlook",
            "Encourage the spirit of adventure and sportsmanship",
        ],
    },
];

export default function ObjectivesSection() {
    return (
        <section id="objectives" className="py-20 bg-ncc-light relative overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-30 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-200/50 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-red-200/40 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 backdrop-blur border border-ncc-navy/10 shadow-sm text-ncc-navy font-medium mb-6">
                        <Target size={18} />
                        <span>Core Principles</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-ncc-navy to-ncc-blue bg-clip-text text-transparent mb-4">
                        NCC Objectives
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Building character, developing leadership, and fostering national unity through disciplined training and service
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {objectives.map((obj, index) => (
                        <div
                            key={index}
                            className="group bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-white/60 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                        >
                            <div
                                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto ${obj.iconBg} ${obj.shadow} shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                            >
                                {obj.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-ncca-navy text-center mb-6 group-hover:text-ncc-blue transition-colors">
                                {obj.title}
                            </h3>
                            <ul className="space-y-4">
                                {obj.items.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-start text-gray-600 text-[15px] leading-relaxed group-hover:translate-x-1 transition-transform duration-300"
                                    >
                                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-ncc-navy/30 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
