import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ObjectivesSection from "@/components/ObjectivesSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import LeadershipSection from "@/components/LeadershipSection";
import RankHoldersSection from "@/components/RankHoldersSection";
import AchievementsSection from "@/components/AchievementsSection";
import AlumniSection from "@/components/AlumniSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 relative selection:bg-ncc-orange/30">
      <Navbar />
      <Hero />
      <AboutSection />
      <ObjectivesSection />
      <ActivitiesSection />
      <LeadershipSection />
      <RankHoldersSection />
      <AchievementsSection />
      <AlumniSection />
      <Footer />
    </main>
  );
}
