import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import LogosSection from './components/LogosSection'
import AboutSection from './components/AboutSection'
import CoreCompetencies from './components/CoreCompetencies'
import MidCarousel from './components/MidCarousel'
import EducationSection from './components/EducationSection'
import ExperienceSection from './components/ExperienceSection'
import ResearchSection from './components/ResearchSection'
import VideoCTASection from './components/VideoCTASection'
import AchievementsSection from './components/AchievementsSection'
import ComplianceSection from './components/ComplianceSection'
import TechnicalSkillsSection from './components/TechnicalSkillsSection'
import CertificationsSection from './components/CertificationsSection'
import HighlightsSection from './components/HighlightsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <LogosSection />
        <AboutSection />
        <EducationSection />
        <MidCarousel />
        <ExperienceSection />
        <ResearchSection />
        <CoreCompetencies />
        <VideoCTASection />
        <AchievementsSection />
        <ComplianceSection />
        <TechnicalSkillsSection />
        <CertificationsSection />
        <HighlightsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  )
}

export default App
