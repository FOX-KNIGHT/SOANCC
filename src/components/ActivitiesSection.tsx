"use client";

import Image from "next/image";
import Link from "next/link";
import { Users } from "lucide-react";

const activities = [
    {
        id: "parade",
        title: "Drill & Discipline",
        description: "Precision drill and ceremonial parades showcasing discipline and coordination.",
        image: "/media/Activities/parade.jpg",
        details: "Experience the precision and discipline of NCC parade platoon. Our cadets demonstrate exceptional coordination through synchronized drill movements and ceremonial displays."
    },
    {
        id: "adventure",
        title: "Adventure Activities",
        description: "NCC cadets train in mountaineering, trekking, and survival skills through adventure camps.",
        image: "/media/Activities/Mountaineering.jpeg",
        details: "Take part in trekking, camping, mountaineering, survival skills, and other adventure activities that build courage, endurance, teamwork, and confidence."
    },
    {
        id: "extracurricular",
        title: "Extracurricular Activities",
        description: "Involvement of cadets in Sports, Debate, Cultural, Drone Tech, Public Speaking, etc.",
        image: "/media/Activities/extracurricular.jpeg",
        details: "Contributing to environmental conservation through extensive tree plantation drives. We're committed to creating a greener future for generations to come."
    },
    {
        id: "innovation",
        title: "Startup & Innovation",
        description: "Fostering creativity and entrepreneurial spirit among cadets.",
        image: "/media/Activities/NCCday_Startup.jpeg",
        details: "Encouraging innovative thinking and problem-solving. Our cadets actively participate in startup challenges, hackathons, and projects that address real-world needs."
    },
    {
        id: "camps",
        title: "National Camps",
        description: "Cadets earn national/state representation through national camps like YEP, RDC, TSC, etc.",
        image: "/media/Activities/camps.jpeg",
        details: "Cadets actively participate in national and international-level camps and competitions, engaging in leadership and skill-building activities to gain knowledge, confidence, and experience."
    },
    {
        id: "social",
        title: "Social Service",
        description: "Serving communities through health camps, cleanliness drives, and disaster relief.",
        image: "/media/Activities/social-service.jpeg",
        details: "Our cadets support society through disaster relief, blood donation, cleanliness drives, and awareness campaigns, building empathy and responsibility."
    }
];

export default function ActivitiesSection() {
    return (
        <section id="activities" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-ncc-light border border-ncc-navy/10 shadow-sm text-ncc-navy font-medium mb-6">
                        <Users size={18} />
                        <span>Our Activities</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Excellence in <span className="text-ncc-blue">Action</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Engaging in diverse activities that build character, serve the nation, and develop exceptional leadership skills
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {activities.map((activity) => (
                        <div key={activity.id} className="group relative rounded-2xl overflow-hidden shadow-lg h-[400px]">
                            {/* Image */}
                            <div className="absolute inset-0">
                                <Image
                                    src={activity.image}
                                    alt={activity.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                            </div>

                            {/* Default Content */}
                            <div className="absolute bottom-0 left-0 w-full p-6 transform transition-transform duration-500 group-hover:translate-y-full">
                                <h3 className="text-2xl font-bold text-white mb-2">{activity.title}</h3>
                                <p className="text-gray-200 line-clamp-2">{activity.description}</p>
                            </div>

                            {/* Hover Content */}
                            <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/60 backdrop-blur-sm">
                                <p className="text-white text-lg mb-6 leading-relaxed shadow-sm">
                                    {activity.details}
                                </p>
                                <Link
                                    href="/gallery"
                                    className="px-6 py-2 bg-white text-ncc-navy font-semibold rounded-lg hover:bg-ncc-blue hover:text-white transition-colors shadow-lg"
                                >
                                    View Gallery
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
