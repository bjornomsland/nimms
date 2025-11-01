import { GraduationCap, Briefcase, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const Lightbulb = (props: any) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={props.strokeWidth ?? 2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9 18h6" />
    <path d="M10 22h4" />
    <path d="M12 2a6 6 0 0 0-6 6c0 3.3 2.4 4.9 3 6v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2c.6-1.1 3-2.7 3-6a6 6 0 0 0-6-6z" />
  </svg>
)

const audiences = [
  {
    icon: GraduationCap,
    title: "For ungdom",
    description:
      "Lær og skap noe nytt! Få erfaring, oppdrag og praksis. Din kunnskap og skaperlyst kan gjøre en forskjell for lokalt næringsliv.",
  },
  {
    icon: Heart,
    title: "For mentorer",
    description:
      "Få tilgang til utstyr. Del din erfaring og inspirer neste generasjon skapere. Din innsats styrker lokalt engasjement, innovasjon og næringsliv på Nesodden.",
  },
  {
    icon: Briefcase,
    title: "For næringsliv og organisasjoner",
    description:
      "Samarbeid med NIMMS og gi ungdom reelle prosjekter og oppdrag – samtidig som dere får kreative medieproduksjoner og teknologiske bidrag tilbake.",
  },
  {
    icon: Lightbulb,
    title: "For ungdomsbedrifter og gründere",
    description:
      "Realiser deres ideer. Få tilgang til utstyr, veiledning og et kreativt miljø for å utvikle deres prototyper til salgbare produkter.",
  },
]

export default function ForWho() {
  return (
    <section id="bli-med" className="py-24 sm:py-32 bg-[#F7F9FB] relative">
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
            For ungdom, mentorer og næringsliv
          </h2>
          <p className="text-xl text-[#1E1E1E] leading-relaxed">
            NIMMS er åpent for ungdom, mentorer og næringsliv som vil skape muligheter sammen.
            Sammen bidrar vi til innovasjon, kompetansebygging og lokal verdiskaping i tråd 
            med Nesodden kommunes næringsstrategi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {audiences.map((audience, index) => {
            const Icon = audience.icon
            return (
              <Card key={index} className="border-none bg-white shadow-lg hover-lift rounded-2xl overflow-hidden">
                <CardContent className="p-10">
                  <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#2EA7B7]/20 to-[#0A4CA6]/20">
                    <Icon className="h-10 w-10 text-[#2EA7B7]" strokeWidth={2} />
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-5 text-[#0A4CA6]">{audience.title}</h3>
                  <p className="text-[#1E1E1E] leading-relaxed text-lg">{audience.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
