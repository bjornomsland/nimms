import { Wrench, GraduationCap, Briefcase, Users, TrendingUp, Lightbulb } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const offerings = [
  {
    icon: Wrench,
    title: "Makerspace og verksted",
    description: "Makerspace og verksted for ungdom, i samarbeid med kommune og skole.",
  },
  {
    icon: GraduationCap,
    title: "Kurs og opplæring",
    description: "Kurs og opplæring innen teknologi, design, programmering, foto, film og medieproduksjon.",
  },
  {
    icon: Briefcase,
    title: "Betalte mikro-oppdrag",
    description: "Mulighet for betalte mikro-oppdrag fra NIMMS, lokalt næringsliv og organisasjoner.",
  },
  {
    icon: Users,
    title: "Mentornettverk",
    description: "Mentornettverk av frivillige fagpersoner som støtter ungdommens utvikling.",
  },
  {
    icon: TrendingUp,
    title: "Praksis og lærlingløp",
    description: "Tilrettelegging for praksisplass og lærlingløp innen IT og medieproduksjon.",
  },
  {
    icon: Lightbulb,
    title: "Lavterskel fellesskap",
    description: "Et lavterskel fellesskap for læring, mestring og kreativitet.",
  },
]

export default function Offerings() {
  return (
    <section id="hva-vi-tilbyr" className="py-24 sm:py-32 bg-[#F7F9FB] relative">
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full rotate-180">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-3xl text-center mb-20">
          <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl mb-6 bg-gradient-to-r from-[#0A4CA6] to-[#2EA7B7] bg-clip-text text-transparent">
            Hva vi tilbyr
          </h2>
          <p className="text-xl text-[#1E1E1E] leading-relaxed">
            NIMMS gir deg tilgang til moderne utstyr, kunnskap og et inspirerende fellesskap.
            Vi skal tilrettelegge for å gi deg arbeidserfaring, praksis- og lærlingplasser, og være
            bindeledd mellom skole, næringsliv, frivillighet og kommune.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, index) => {
            const Icon = offering.icon
            return (
              <Card key={index} className="border-none bg-white shadow-lg hover-lift rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-[#2EA7B7]/20 to-[#0A4CA6]/20">
                    <Icon className="h-8 w-8 text-[#2EA7B7]" strokeWidth={2} />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-4 text-[#0A4CA6]">{offering.title}</h3>
                  <p className="text-[#1E1E1E] leading-relaxed">{offering.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
