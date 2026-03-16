import WhatsAppButton from "./components/WhatsAppButton";
import Navbar from "./components/Navbar";
import ContactSection from "./components/ContactSection";
import PortfolioShowcase from "./components/PortfolioShowcase";
import DashboardShowcase from "./components/DashboardShowcase";
import UseCaseGenerator from "./components/UseCaseGenerator";
import AutomationEngine from "./components/AutomationEngine";
import VoicePlayground from "./components/VoicePlayground";
import { motion } from "framer-motion";
import CallSimulation from "./components/CallSimulation";
function App() {
  return (
    <div className="min-h-screen bg-background text-white">

      {/* HERO SECTION */}

      <section className="flex flex-col items-center justify-center text-center h-screen px-6 pt-24">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold"
        >
          Meet Your AI Voice Agent
        </motion.h1>

        <p className="mt-6 text-gray-300 max-w-xl text-lg">
          Automate calls, customer conversations and support using
          multilingual AI voice agents built by Uddan AI Solutions.
        </p>

        <div className="flex gap-4 mt-10">

          <button className="bg-blue-600 px-6 py-3 rounded-lg hover:scale-105 transition">
            Try Voice Demo
          </button>

          <button className="border border-gray-600 px-6 py-3 rounded-lg hover:scale-105 transition">
            Book Consultation
          </button>

        </div>

      </section>

      {/* VOICE PLAYGROUND */}

      <VoicePlayground />
      <CallSimulation />
      <AutomationEngine />
      <UseCaseGenerator />
      <DashboardShowcase />
      <PortfolioShowcase />
      <ContactSection />
      <Navbar />
      <WhatsAppButton />
    </div>
  );
}

export default App;