import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
      {/* Gradient background with diagonal pattern */}
      <div className="absolute inset-0 gradient-blue-turquoise">
        <div className="absolute inset-0 opacity-20">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="diagonal-lines"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(45)"
              >
                <line x1="0" y1="0" x2="0" y2="60" stroke="white" strokeWidth="1" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diagonal-lines)" />
          </svg>
        </div>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center animate-fade-in -mt-20 sm:-mt-28 lg:-mt-32">
          
          {/* Transparent logo that softly blends into the gradient background */}
            <div className="mb-8 flex justify-center">
            <img
              src="images/nimms-logo-white-transparent.png" // place your transparent PNG in the /public folder
              alt="NIMMS logo"
              className="w-28 sm:w-32 lg:w-40 opacity-90 mix-blend-overlay transition-opacity duration-700 ease-out filter drop-shadow-xl animate-fade-in"
              style={{ willChange: "opacity, transform" }}
            />
            </div>
          
          <div className="mb-6 flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-white/90">
            <span>Skaperglede</span>
            <span className="text-white/60">•</span>
            <span>Teknologi</span>
            <span className="text-white/60">•</span>
            <span>Fellesskap</span>
            <span className="text-white/60">•</span>
            <span>Oppdrag</span>
          </div>

          

          <h1 className="font-heading text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl text-balance mb-8">
            Nesodden IM Makerspace
          </h1>

          <p className="text-lg leading-relaxed text-white/95 sm:text-xl lg:text-2xl text-pretty max-w-3xl mx-auto mb-12">
            Et skaperverksted for ungdom 14-24 år.<br />
            Som kobler yrkesfag, frivilligheten og lokalt næringsliv.<br />
            Vi gir praksis, mikro-oppdrag og vei til lærling/jobb innen IT og medieproduksjon – åpent for
            alle på Nesodden.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-[#0A4CA6] hover:bg-white/90 font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="#om-nimms">Les mer</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#0A4CA6] font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 bg-transparent"
            >
              <Link href="#kontakt">Kontakt oss</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#F7F9FB"
          />
        </svg>
      </div>
    </section>
  )
}
