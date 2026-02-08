export default function Vedtekter() {
  return (
    <section id="vedtekter" className="py-20 bg-gradient-to-b from-white to-[#F7F9FB]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#0A4CA6] mb-4">
            Vedtekter for Nesodden IM Makerspace (NIMMS)
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-[#0A4CA6]/10">
          <div className="space-y-8 text-[#1E1E1E]">
            {/* §1 */}
            <div className="animate-fade-in">
              <h3 className="font-heading text-2xl font-bold text-[#0A4CA6] mb-3">§1 – Navn og organisasjonsform</h3>
              <p className="leading-relaxed">
                Foreningens navn er Nesodden IM Makerspace, forkortet NIMMS. Foreningen er en frittstående juridisk
                person med medlemmer, og er en ideell organisasjon registrert i Enhetsregisteret og Frivillighetsregisteret.
                Medlemmene hefter ikke for foreningens gjeld utover forfalt kontingent.
              </p>
            </div>

            {/* §2 */}
            <div className="animate-fade-in">
              <h3 className="font-heading text-2xl font-bold text-[#0A4CA6] mb-3">§2 – Formål</h3>
              <p className="leading-relaxed mb-4">
                Foreningens formål er å fremme teknologisk kompetanse, skaperglede og arbeidsinkludering på Nesodden.
                Dette gjøres gjennom å drifte en profesjonell læringsarena der ungdom (14–24 år) samarbeider med erfarne
                fagfolk om reelle leveranser.
              </p>
              <p className="leading-relaxed mb-3 font-semibold">NIMMS skal:</p>
              <ul className="list-decimal list-inside space-y-2 ml-4">
                <li>
                  Tilby et verksted og kompetansesenter for teknologi, AI, programmering og medieproduksjon.
                </li>
                <li>
                  Levere prototyper, teknologiske tjenester og drift av lokal IT-infrastruktur til lokalt næringsliv og
                  offentlig sektor.
                </li>
                <li>
                  Være en arena for praksis, arbeidstrening og lærlingløp, og fungere som et bindeledd mellom skole, NAV,
                  næringsliv og kommune.
                </li>
              </ul>
              <p className="leading-relaxed mt-4">
                Foreningen har ikke til formål å skape økonomisk utbytte for eiere, men skal drive økonomisk bærekraftig
                virksomhet for å finansiere formålet, lønne nøkkelpersonell og investere i utstyr.
              </p>
            </div>

            {/* §3 */}
            <div className="animate-fade-in">
              <h3 className="font-heading text-2xl font-bold text-[#0A4CA6] mb-3">§3 – Forankring og samarbeid</h3>
              <p className="leading-relaxed mb-3">
                NIMMS søker formell forankring hos Nesodden kommune og Nesodden videregående skole, og samarbeider tett
                med Nesodden Næringsforening.
              </p>
              <p className="leading-relaxed">
                Foreningen skal arbeide for å disponere egnede lokaler (f.eks. i samarbeid med kommunen/Fellesverkstedet)
                for å sikre tilgang til nødvendig infrastruktur.
              </p>
            </div>

            {/* §4 */}
            <div className="animate-fade-in">
              <h3 className="font-heading text-2xl font-bold text-[#0A4CA6] mb-3">§4 – Medlemskap</h3>
              <p className="leading-relaxed mb-3">
                Medlemskap er åpent for alle som støtter foreningens formål.
              </p>
              <p className="leading-relaxed mb-3">Medlemmer deles i tre grupper:</p>
              <ul className="list-none space-y-3 ml-4">
                <li>
                  <strong>a) Ungdomsmedlemmer (14–24 år):</strong> Har stemmerett og er målgruppen for foreningens
                  aktiviteter og betalte oppdrag.
                </li>
                <li>
                  <strong>b) Ressursmedlemmer (over 24 år):</strong> Har stemmerett. Kan bidra som mentorer, veiledere
                  eller fagpersoner.
                </li>
                <li>
                  <strong>c) Støttemedlemmer/Bedriftsmedlemmer:</strong> Kan bidra økonomisk eller med oppdrag, uten
                  stemmerett.
                </li>
              </ul>
            </div>

            {/* §5 */}
            <div className="animate-fade-in">
              <h3 className="font-heading text-2xl font-bold text-[#0A4CA6] mb-3">§5 – Drift, arbeid og oppdrag</h3>
              <p className="leading-relaxed mb-3">
                Foreningen baserer sin drift på en kombinasjon av frivillighet, prosjektmidler og salg av tjenester.
              </p>
              <ol className="list-decimal list-inside space-y-3 ml-4">
                <li className="leading-relaxed">
                  <strong>Profesjonell ledelse:</strong> Styret kan ansette eller engasjere daglig leder/faglig ansvarlig
                  på kontrakt for å forestå den daglige driften, kvalitetssikre leveranser og veilede ungdom/lærlinger.
                  Lønn/honorar skal være konkurransedyktig og stå i forhold til ansvar og kompetanse.
                </li>
                <li className="leading-relaxed">
                  <strong>Ungdom i arbeid:</strong> Ungdomsmedlemmer kan engasjeres i betalte oppdrag for NIMMS.
                  Betaling skal stå i rimelig forhold til arbeidet.
                </li>
                <li className="leading-relaxed">
                  <strong>Salg av tjenester:</strong> NIMMS kan selge kurs, konsulenttjenester, driftstjenester og
                  produkter til eksterne aktører. Inntektene fra dette skal dekke drift, honorarer og utvikling av
                  tilbudet.
                </li>
              </ol>
            </div>

            {/* §5A */}
            <div className="animate-fade-in">
              <h3 className="font-heading text-2xl font-bold text-[#0A4CA6] mb-3">§5A – Praksis (YFF) og Ungdomsbedrift</h3>
              <p className="leading-relaxed mb-3">
                NIMMS tilrettelegger for praksis (Yrkesfaglig fordypning) i samarbeid med videregående skole. NIMMS
                stiller med faglig veiledning, reelle oppdrag og kvalitetssikring. Skolen har det formelle
                opplæringsansvaret.
              </p>
            </div>

            {/* §5B */}
            <div className="animate-fade-in">
              <h3 className="font-heading text-2xl font-bold text-[#0A4CA6] mb-3">§5B – Lærlingordning</h3>
              <p className="leading-relaxed mb-3">
                NIMMS har som mål å være godkjent lærebedrift innen relevante fag (f.eks. IT-driftsfaget,
                IT-utviklerfaget).
              </p>
              <p className="leading-relaxed mb-3">
                NIMMS forplikter seg til å ha en faglig leder med nødvendig formell eller realkompetanse til å ivareta
                opplæringsansvaret.
              </p>
              <p className="leading-relaxed">
                Lærlinger ansettes i NIMMS eller gjennom opplæringskontor.
              </p>
            </div>

            {/* §5C */}
            <div className="animate-fade-in">
              <h3 className="font-heading text-2xl font-bold text-[#0A4CA6] mb-3">§5C – Forskning og Utvikling (R&D)</h3>
              <p className="leading-relaxed">
                NIMMS skal fungere som en lokal &quot;innovasjonslab&quot; hvor bedrifter og kommuner kan teste nye
                løsninger (f.eks. AI/IoT) i et kontrollert miljø, driftet av NIMMS sine ressurser under faglig ledelse.
              </p>
            </div>

            {/* §6 */}
            <div className="animate-fade-in">
              <h3 className="font-heading text-2xl font-bold text-[#0A4CA6] mb-3">§6 – Styret</h3>
              <p className="leading-relaxed mb-3">
                Foreningen ledes av et styre på 3–7 medlemmer, valgt av årsmøtet for 2 år av gangen. Styret er
                foreningens øverste myndighet mellom årsmøtene.
              </p>
              <p className="leading-relaxed mb-3">Styret bør søkes sammensatt av representanter fra:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Nesodden Næringsforening / Lokalt næringsliv</li>
                <li>Skole / Utdanning</li>
                <li>Kommune / Offentlig sektor</li>
                <li>Ungdomsrepresentanter</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Styret ansetter/engasjerer daglig leder.
              </p>
              <p className="leading-relaxed mt-3">
                <strong>Habilitet:</strong> Daglig leder/faglig ansvarlig har møte- og talerett i styret, men ikke stemmerett.
              </p>
            </div>

            {/* §7 */}
            <div className="animate-fade-in">
              <h3 className="font-heading text-2xl font-bold text-[#0A4CA6] mb-3">§7 – Årsmøte</h3>
              <p className="leading-relaxed mb-3">
                Årsmøtet er foreningens øverste organ og avholdes innen utgangen av april hvert år. Innkalling sendes
                minst 14 dager før.
              </p>
              <p className="leading-relaxed mb-3">Årsmøtet skal:</p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Godkjenne årsrapporten og regnskapene.</li>
                <li>Vedta budsjett og strategi.</li>
                <li>Velge styre.</li>
                <li>Behandle innkomne forslag.</li>
              </ol>
            </div>

            {/* §8 */}
            <div className="animate-fade-in">
              <h3 className="font-heading text-2xl font-bold text-[#0A4CA6] mb-3">§8 – Økonomi og disponering av midler</h3>
              <p className="leading-relaxed mb-3">
                Foreningens regnskapsår følger kalenderåret. Foreningen skal føre regnskap i tråd med god regnskapsskikk.
                Foreningens inntekter skal brukes til:
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Drift av foreningen (herunder lønn/honorar til ledelse og administrasjon).</li>
                <li>Investeringer i utstyr, lisenser og teknisk infrastruktur.</li>
                <li>Aktiviteter og sosiale tiltak for ungdomsmedlemmene.</li>
              </ol>
              <p className="leading-relaxed mt-4">
                Et eventuelt årsoverskudd skal overføres til egenkapitalen for å sikre fremtidig drift og investeringer.
                Det utbetales ikke utbytte til medlemmer.
              </p>
            </div>

            {/* §9 */}
            <div className="animate-fade-in">
              <h3 className="font-heading text-2xl font-bold text-[#0A4CA6] mb-3">§9 – Signatur og fullmakter</h3>
              <p className="leading-relaxed mb-3">
                Foreningen tegnes av styrets leder og ett styremedlem i fellesskap.
              </p>
              <p className="leading-relaxed">
                Styret kan tildele prokura til daglig leder for å ivareta den daglige driften, inkludert inngåelse av
                oppdragsavtaler, ansettelser og løpende innkjøp innenfor vedtatt budsjett.
              </p>
            </div>

            {/* §10 */}
            <div className="animate-fade-in">
              <h3 className="font-heading text-2xl font-bold text-[#0A4CA6] mb-3">§10 – Endring av vedtekter</h3>
              <p className="leading-relaxed">
                Endringer i vedtektene krever 2/3 flertall på årsmøtet.
              </p>
            </div>

            {/* §11 */}
            <div className="animate-fade-in">
              <h3 className="font-heading text-2xl font-bold text-[#0A4CA6] mb-3">§11 – Oppløsning</h3>
              <p className="leading-relaxed mb-3">
                Ved oppløsning kreves 2/3 flertall på to påfølgende årsmøter.
              </p>
              <p className="leading-relaxed">
                Eventuelle midler og utstyr skal tilfalle Nesodden kommune eller en ideell organisasjon på Nesodden som
                arbeider for barn og unges oppvekstvilkår, øremerket teknologisk opplæring.
              </p>
            </div>

            {/* Footer note */}
            <div className="mt-12 pt-8 border-t border-[#0A4CA6]/20 text-center">
              <p className="text-sm text-[#1E1E1E]/70 italic">
                Vedtektene ble vedtatt på stiftelsesmøte for Nesodden IM Makerspace (NIMMS) [dato], på Tangenten,
                Nesodden.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}