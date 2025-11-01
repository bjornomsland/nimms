import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Offerings from "@/components/offerings"
import EquipmentGallery from "@/components/equipment-gallery"
import ForWho from "@/components/for-who"
import Contact from "@/components/contact"
import Poster from "@/components/poster"
import Vedtekter from "@/components/vedtekter"
import Footer from "@/components/footer"
import Activities from "@/components/activities"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Offerings />
      <EquipmentGallery />
      <ForWho />
      <Activities />
      <Contact />
      <Poster />
      <Vedtekter />
      <Footer />
    </main>
  )
}
