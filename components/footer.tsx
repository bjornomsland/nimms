export default function Footer() {
  return (
    <footer className="bg-[#0A4CA6] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col items-center mb-12">
          <p className="text-2xl md:text-3xl font-bold text-center tracking-wide">
            Skaperglede • Teknologi • Fellesskap • Oppdrag
          </p>
        </div>
        {/* </CHANGE> */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Copyright and Info */}
          <div>
            <p className="text-white/90 leading-relaxed text-lg">
              © {new Date().getFullYear()} Nesodden IM Makerspace (NIMMS)
            </p>
            <p className="text-white/70 mt-2">Ideell forening for ungdom, teknologi og fellesskap.</p>
          </div>

          {/* Partner Logos */}
          <div className="flex flex-wrap items-center justify-start md:justify-end gap-8">
            <div className="flex items-center space-x-3">
              <div className="h-14 w-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                <span className="text-sm font-bold text-white">NK</span>
              </div>
              <span className="text-sm text-white/90 font-medium">
                Nesodden
                <br />
                kommune
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <div className="h-14 w-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                <span className="text-sm font-bold text-white">NVS</span>
              </div>
              <span className="text-sm text-white/90 font-medium">
                Nesodden
                <br />
                vgs
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <div className="h-14 w-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                <span className="text-sm font-bold text-white">NN</span>
              </div>
              <span className="text-sm text-white/90 font-medium">
                Nesodden
                <br />
                Næringsforening
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
