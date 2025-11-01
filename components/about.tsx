import Image from "next/image"

export default function About() {
  return (
    <section id="om-nimms" className="py-24 sm:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-heading text-4xl font-bold tracking-tight bg-gradient-to-r from-[#0A4CA6] to-[#2EA7B7] bg-clip-text text-transparent sm:text-5xl mb-16 text-center">
            Om NIMMS
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 animate-slide-up">
              <p className="text-lg text-[#1E1E1E] leading-relaxed">
                Nesodden IM Makerspace (NIMMS) er en ideell forening etablert med støtte fra Nesodden kommune og
                Nesodden videregående skole. Foreningen samarbeider med Nesodden Næringsforening og har base i kommunens
                fellesverksted på Tangenten.
              </p>
              <p className="text-lg text-[#1E1E1E] leading-relaxed">
                NIMMS tilbyr et inkluderende miljø hvor ungdom får lære, utforske og samarbeide med lokale aktører i
                reelle prosjekter.
              </p>
            </div>

            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl hover-lift image-overlay-blue">
              <Image
                src="/images/team-photo.jpg"
                alt="NIMMS team og mentorer ved laserskjærer"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
