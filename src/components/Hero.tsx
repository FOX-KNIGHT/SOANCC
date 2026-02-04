"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Volume2, VolumeX, ChevronDown } from "lucide-react";

export default function Hero() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isMuted, setIsMuted] = useState(true);

    const toggleAudio = () => {
        if (audioRef.current) {
            if (isMuted) {
                audioRef.current.play().catch((e) => console.log("Audio play failed:", e));
                audioRef.current.muted = false;
            } else {
                audioRef.current.muted = true;
            }
            setIsMuted(!isMuted);
        }
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/SOANCC/media/HeroPage/HeroImage.jpeg"
                    alt="NCC Hero Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40 z-0"></div>
            </div>

            <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto mt-0 md:mt-[-50px]">
                <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight">
                    <span className="bg-gradient-to-r from-ncc-red via-ncc-navy to-ncc-blue bg-clip-text text-transparent drop-shadow-lg animate-shimmer">
                        SOA NCC
                    </span>
                </h1>
                <h2 className="text-2xl md:text-4xl font-semibold mb-6 drop-shadow-md">
                    4 (O) CTC | 1 (O) GIRLS BN
                </h2>
                <p className="text-lg md:text-2xl mb-8 font-medium text-gray-200 drop-shadow-sm max-w-2xl mx-auto">
                    Discipline. Leadership. Service.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                    <button
                        onClick={() => scrollToSection("about")}
                        className="px-8 py-3 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold hover:bg-white/40 hover:scale-105 transition-all shadow-lg"
                    >
                        Explore
                    </button>
                    <button
                        onClick={() => scrollToSection("join")}
                        className="px-8 py-3 rounded-xl bg-transparent border border-white/50 text-white font-semibold hover:bg-white/10 hover:scale-105 transition-all shadow-lg"
                    >
                        Why Join Us
                    </button>
                    <button
                        onClick={() => scrollToSection("achievements")}
                        className="px-8 py-3 rounded-xl bg-ncc-green/80 backdrop-blur-sm text-white font-semibold hover:bg-ncc-green hover:scale-105 transition-all shadow-lg"
                    >
                        Achievements
                    </button>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/50 animate-bounce cursor-pointer" onClick={() => scrollToSection("about")}>
                <ChevronDown size={40} className="text-white opacity-80" />
            </div>

            <button
                onClick={toggleAudio}
                className={`fixed bottom-6 left-6 z-50 w-14 h-14 flex items-center justify-center rounded-full backdrop-blur-md border border-white/30 transition-all shadow-xl ${isMuted ? "bg-gray-500/30 text-white/70" : "bg-ncc-blue/50 text-white border-white scale-110"
                    } hover:scale-110 hover:bg-ncc-blue/80`}
                aria-label="Toggle Music"
            >
                {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
            </button>

            <audio ref={audioRef} loop playsInline src="/SOANCC/media/HeroPage/hero-music.mp3" />
        </section>
    );
}
