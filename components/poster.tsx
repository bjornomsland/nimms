import Image from "next/image"

export default function Poster() {
  return (
    <section id="poster" className="py-24 sm:py-32 bg-gradient-to-br from-[#0A4CA6]/5 via-[#2EA7B7]/5 to-[#0A4CA6]/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl hover-lift bg-white p-4">
            <Image
              src="/images/nimms-poster.jpg"
              alt="NIMMS informasjonsplakat - Skaperglede, Teknologi, Fellesskap, Oppdrag"
              width={1200}
              height={1697}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
