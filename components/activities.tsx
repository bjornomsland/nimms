import Image from "next/image"

const activities = [
  {
    title: "3D-print workshop",
    date: "12. november 2025",
    image: "/images/3d-printers.jpg",
    description: "Lær å modellere og printe egne 3D-objekter. Ta med egen laptop eller bruk våre maskiner."
  },
  {
    title: "Robotikk-kveld",
    date: "19. november 2025",
    image: "/images/robotics-projects.jpg",
    description: "Bygg og programmer enkle roboter sammen med mentorer fra NIMMS. Passer for alle nivåer. Roman og Nathalie fra IT og Medialinja på Nesodden vgs viser hvordan."
  },
  {
    title: "Greenscreen in AfterEffects",
    date: "19. november 2025",
    image: "/images/greenscreen.jpg",
    description: "Vi tester greenscreen og leker med Adobe AfterEffects. Lysander og Kristoffer fra Medialinja på Nesodden vgs viser oss hvordan."
  },
  {
    title: "Åpen dag på Makerspace",
    date: "26. november 2025",
    image: "/images/workshop-overview.jpg",
    description: "Kom innom, se utstyret, møt folk og få en omvisning. Gratis og åpent for alle ungdommer."
  },
  {
    title: "Robotbil-løp",
    date: "26. november 2025",
    image: "/images/robot-car-race.jpg",
    description: "Hvilken robotbil er raskest gjennom hinderløypa? Meld deg på med din egen robotbil eller bygg en hos oss.",
  },
  {
    title: "Oppdrag Nesodden 2026",
    date: "Søndag 7. juni 2026",
    image: "/images/DieHardWaterRiddle.jpg",
    description: "Norges morsomste rebusløp! Et unikt konsept hvor kreative oppgaver utviklet fra NIMMS, blander teknologi, innovasjon, aktivitet og moro."
  },
]

export default function Activities() {
  return (
    <section id="aktiviteter" className="py-24 sm:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center mb-16">
          <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl mb-6 bg-gradient-to-r from-[#0A4CA6] to-[#2EA7B7] bg-clip-text text-transparent">
            Aktiviteter
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Her finner du kommende arrangementer og aktiviteter hos NIMMS.
          </p>
        </div>
        <div className="grid gap-12 md:grid-cols-3">
          {activities.map((activity, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
              <div className="relative h-56 w-full">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <h3 className="text-2xl font-bold text-[#0A4CA6] mb-2">{activity.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{activity.date}</p>
                <p className="text-gray-800 text-base mb-2">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}