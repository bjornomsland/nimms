import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const equipment = [
  {
    image: "/images/youth-media-production.jpg",
    title: "Medieproduksjon",
    description: "Fotostudio, kamera- og lys, mikrofoner og redigeringsutstyr",
  },
  {
    image: "/images/laser-cutter.jpg",
    title: "Laserskjærer",
    description: "Presisjons laserskjæring og gravering",
  },
  {
    image: "/images/3d-printers.jpg",
    title: "3D-printere",
    description: "Bambu Lab X1-Carbon med multi-material system",
  },
  {
    image: "/images/robotics-projects.jpg",
    title: "Robotikk og elektronikk",
    description: "Arduino, Raspberry Pi, droner, roboter og mikrokontrollere",
  },
  {
    image: "/images/cnc-mill.jpg",
    title: "CNC-fres",
    description: "EMCO VMC-100 datastyrt fres til deler i metall og plast med høy presisjon",
  },
  {
    image: "/images/fabrication-tools.jpg",
    title: "Produksjonsutstyr",
    description: "Varmepresse, 3D-printere og mer",
  },
  {
    image: "/images/workshop-overview.jpg",
    title: "Verksted",
    description: "Fullt utstyrt makerspace med CNC-router og arbeidsbenker",
  },
  {
    image: "/images/exhibition-display.jpg",
    title: "Prosjektutstilling",
    description: "Vis frem dine prosjekter og inspirer andre",
  },
  {
    image: "/images/mentor-workshop.jpg",
    title: "Tradisjonelle verktøy",
    description: "Boremaskin, dreiebenk og klassisk verkstedsutstyr",
  },
]

export default function EquipmentGallery() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-20">
          <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl mb-6 bg-gradient-to-r from-[#0A4CA6] to-[#2EA7B7] bg-clip-text text-transparent">
            Vårt utstyr
          </h2>
          <p className="text-xl text-[#1E1E1E] leading-relaxed">
            NIMMS har moderne utstyr for digital fabrikasjon, medieproduksjon og tradisjonelt håndverk
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipment.map((item, index) => (
            <Card key={index} className="border-none bg-white shadow-lg hover-lift rounded-2xl overflow-hidden group">
              <div className="relative h-72 w-full overflow-hidden image-overlay-blue">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-bold mb-2 text-[#0A4CA6]">{item.title}</h3>
                <p className="text-[#1E1E1E]">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
