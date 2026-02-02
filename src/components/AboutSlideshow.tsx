"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
    "/media/About/AboutPic.jpg",
    "/media/About/about-pic-2.jpg",
    "/media/About/about-pic-3.jpg",
    "/media/About/about-pic-4.jpg",
];

export default function AboutSlideshow() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            {images.map((src, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-95"
                        }`}
                >
                    <Image
                        src={src}
                        alt={`NCC Training ${index + 1}`}
                        fill
                        className="object-cover"
                    />
                </div>
            ))}

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
