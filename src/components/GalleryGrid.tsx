"use client";

import { useState } from "react";
import Image from "next/image";
import galleryData from "@/data/gallery-data.json";


type GalleryCategory = {
    title: string;
    description: string;
    images: {
        src: string;
        alt: string;
        caption: string;
    }[];
};

type GalleryData = {
    [key: string]: GalleryCategory;
};

const categories = Object.keys(galleryData as GalleryData);

export default function GalleryGrid() {
    const [activeTab, setActiveTab] = useState(categories[0]);
    const data = (galleryData as GalleryData)[activeTab];

    if (!data) return null;

    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((cat) => {
                    const catTitle = (galleryData as GalleryData)[cat].title;
                    const label = catTitle.replace(" Gallery", "");

                    return (
                        <button
                            key={cat}
                            onClick={() => setActiveTab(cat)}
                            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeTab === cat
                                ? "bg-ncc-navy text-white shadow-lg scale-105"
                                : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                                }`}
                        >
                            {label}
                        </button>
                    );
                })}
            </div>

            <div className="animate-in fade-in duration-500">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{data.title}</h2>
                    <p className="text-gray-600">{data.description}</p>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {data.images.map((img, idx) => (
                        <div key={idx} className="group relative break-inside-avoid">
                            <div className="relative w-full rounded-xl overflow-hidden shadow-md">
                                <img
                                    src={`/SOANCC/${img.src.split('?')[0]}`}
                                    alt={img.alt}
                                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                                    <p className="text-white font-medium">{img.caption}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
