import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RankList from "@/components/RankList";

export default function RankPage() {
    return (
        <main className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />
            <div className="pt-24 pb-12 bg-ncc-navy text-center text-white relative overflow-hidden">
                {/* Decorative Background */}
                <div className="absolute inset-0 bg-[url('/media/pattern.png')] opacity-10"></div>

                <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">Cadet Leadership</h1>
                <p className="opacity-80 relative z-10 max-w-2xl mx-auto px-4">
                    Meet our distinguished cadet officers leading by example and shaping the future of our unit
                </p>
            </div>
            <div className="flex-grow">
                <RankList />
            </div>
            <Footer />
        </main>
    );
}
