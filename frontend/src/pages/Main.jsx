import Header from "../components/Header"
import VisionMission from "../components/VisionMission"
import Hero from "../components/Hero"
import Values from "../components/Values"
import Mandate from "../components/Mandate"
import Community from "../components/Community"
import Ethics from "../components/Ethics"
import CTA from "../components/CTA"
import Footer from "../components/Footer"

export default function Main() {
  return (
    <div>
      <Header />
      <div className="hero overflow-hidden">
        <div className="scroll h-[calc(100vh-44px)] overflow-y-auto scrollbar-hide mt-11">
          <Hero />
          <VisionMission />
          <Values />
          <Mandate />
          <Community />
          <Ethics />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  )
}