import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GalleryGrid from "@/components/GalleryGrid";

export default function GalleryPage() {
    return (
        <main className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />
            <div className="pt-24 pb-12 bg-ncc-navy text-center text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
                <p className="opacity-80">Capturing moments of discipline, service, and camaraderie</p>
            </div>
            <div className="flex-grow">
                <GalleryGrid />
            </div>
            <Footer />
        </main>
    );
}
