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
                Foreningens navn er Nesodden IM Makerspace, forkortet NIMMS. Foreningen er en ideell og
                ikke-fortjenestebasert organisasjon registrert i Enhetsregisteret og Frivillighetsregisteret.
              </p>
            </div>

            {/* §2 */}
            <div className="animate-fade-in">
              <h3 className="font-heading text-2xl font-bold text-[#0A4CA6] mb-3">§2 – Formål</h3>
              <p className="leading-relaxed mb-4">
                Foreningens formål er å fremme skaperglede, mestring og arbeidserfaring for ungdom i alderen 14–24 år
                gjennom praktisk læring, teknologi og medieproduksjon.
              </p>
              <p className="leading-relaxed mb-3 font-semibold">NIMMS tilbyr:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Åpent makerspace og verksted for ungdom i samarbeid med Nesodden kommune og Nesodden vgs.</li>
                <li>
                  Kurs, opplæring og veiledning innen teknologi, design, programmering, foto, film og medieproduksjon.
                </li>
                <li>
                  Mulighet til å delta i oppdrag for lokalt næringsliv, organisasjoner og kommunen, der ungdom får
                  betalt for ferdig leverte produkter og tjenester.
                </li>
                <li>
                  Et nettverk av mentorer fra bransje, frivillighet og utdanning som hjelper ungdom med faglig utvikling
                  og erfaring.
                </li>
                <li>Tilrettelegging for praksis og lærlingløp innen IT, medieproduksjon og kreative fag.</li>
                <li>Et lavterskel fellesskap der ungdom kan utvikle seg faglig og sosialt i et trygt miljø.</li>
              </ul>
              <p className="leading-relaxed mt-4">
                NIMMS skal bidra til arbeidserfaring, praksis og lærlingplasser, og være et bindeledd mellom skole,
                næringsliv, frivillighet og kommune.
              </p>
              <p className="leading-relaxed mt-4">
                Foreningen er ikke fortjenestebasert. Eventuelt overskudd skal komme formålet og medlemmene til gode.
              </p>
            </div>

            {/* §3 */}
            <div className="animate-fade-in">
              <h3 className="font-heading text-2xl font-bold text-[#0A4CA6] mb-3">§3 – Forankring og samarbeid</h3>
              <p className="leading-relaxed mb-3">
                NIMMS har formell støtte fra Nesodden kommune og Nesodden videregående skole, og samarbeider med
                Nesodden Næringsforening.
              </p>
              <p className="leading-relaxed">
                Foreningen har avtale om bruk av lokaler i Fellesverkstedet på Tangenten, hvor utstyr kan disponeres i
                samarbeid med kommunen.
              </p>
            </div>

            {/* §4 */}
            <div className="animate-fade-in">
              <h3 className="font-heading text-2xl font-bold text-[#0A4CA6] mb-3">§4 – Medlemskap</h3>
              <p className="leading-relaxed mb-3">
                Medlemskap er åpent for alle som ønsker å bidra til foreningens formål.
              </p>
              <p className="leading-relaxed mb-3">Medlemmer deles i tre grupper:</p>
              <ul className="list-none space-y-3 ml-4">
                <li>
                  <strong>a) Ungdomsmedlemmer (14–24 år):</strong> har stemmerett og kan utføre betalt arbeid for
                  foreningen.
                </li>
                <li>
                  <strong>b) Voksenmedlemmer (over 24 år):</strong> har stemmerett og kan bidra som mentorer, veiledere
                  eller frivillige, men mottar i utgangspunktet ikke lønn.
                </li>
                <li>
                  <strong>c) Støttemedlemmer:</strong> kan bidra økonomisk eller med kompetanse, uten stemmerett.
                </li>
              </ul>
              <p className="leading-relaxed mt-4">
                Medlemmer skal bidra til et inkluderende miljø, dele erfaring og støtte ungdommens faglige utvikling.
              </p>
            </div>

            {/* §5 */}
            <div className="animate-fade-in">
              <h3 className="font-heading text-2xl font-bold text-[#0A4CA6] mb-3">§5 – Arbeid og oppdrag</h3>
              <p className="leading-relaxed mb-3">
                Ungdomsmedlemmer kan motta betaling for leverte produkter, tjenester eller produksjoner på vegne av
                NIMMS, forutsatt at oppdraget er godkjent av styret eller ansvarlig leder.
              </p>
              <p className="leading-relaxed mb-3">
                Betaling skal stå i rimelig forhold til arbeidet, og skal prioriteres til ungdom mellom 14–24 år.
              </p>
              <p className="leading-relaxed">
                Voksne medlemmer (over 24 år) skal primært bidra med veiledning, fagkunnskap og støttefunksjoner, uten
                honorar.
              </p>
            </div>

            {/* §5A */}
            <div className="animate-fade-in">
              <h3 className="font-heading text-2xl font-bold text-[#0A4CA6] mb-3">§5A – Praksisplass (YFF) gjennom ungdomsbedrift</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>NIMMS tilrettelegger for praksisplass (Yrkesfaglig fordypning, YFF) i samarbeid med Nesodden videregående skole gjennom ungdomsbedriften Media i Praksis UB, etablert via Ungt Entreprenørskap.</li>
                <li>YFF-praksis er ikke lønnet, og inngår som del av elevens opplæring. Arbeidsoppgaver skal være relevante for kompetansemål i programfag/yrkesfag og avtales skriftlig mellom skole, elev/foresatt (der det er aktuelt), praksissted og NIMMS.</li>
                <li>Skolen har det overordnede opplæringsansvaret, herunder forsikring og vurdering. NIMMS stiller med veiledning, oppdragsrammer og kvalitetssikring, og kan formidle små oppdrag fra lokalt næringsliv og organisasjoner til ungdomsbedriften.</li>
                <li>Styret kan fastsette egne retningslinjer for YFF-praksis (taushet, HMS, personvern, åndsverk, kundehåndtering, timeføring, kvalitet).</li>
              </ul>
            </div>

            {/* §5B */}
            <div className="animate-fade-in">
              <h3 className="font-heading text-2xl font-bold text-[#0A4CA6] mb-3">§5B – Lærlingordning (målsetning og rammer)</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Målsetning: NIMMS har som mål å bli godkjent lærebedrift innen relevante fag (f.eks. IKT-servicefaget/IT-driftsfaget, IT-utviklerfaget, medieteknikk m.fl. når fagkoder/tilbudsstruktur tilsier det), slik at ungdom kan gjennomføre læretid som leder frem til fag-/svennebrev.</li>
                <li>Godkjenning og krav: NIMMS kan ta inn lærlinger når vilkårene for godkjenning som lærebedrift er oppfylt etter opplæringsloven og fylkeskommunens krav, herunder:</li>
                  <ol style={{ listStyleType: 'lower-alpha' }} className="ml-6 space-y-2">
                    <li>relevante og varierte arbeidsoppgaver som dekker læreplanens kompetansemål,</li>
                    <li>utpekt faglig leder med formell/real-kompetanse i faget,</li>
                    <li>tilstrekkelig instruktørkapasitet og dokumentert oppfølging (opplæringsplan, veiledning, vurdering),</li>
                    <li>tilfredsstillende HMS-/internkontroll, personvern og datasikkerhet,</li>
                    <li>inngått lærekontrakt som godkjennes og registreres av fylkeskommunen/opplæringskontor.</li>
                  </ol>
                <li>Arbeidsgiverforhold: Lærlinger er arbeidstakere og ansettes hos NIMMS eller gjennom tilknyttet opplæringskontor. Lønn og vilkår følger gjeldende lov- og avtaleverk.</li>
                <li>Oppdragsmodell: NIMMS kan organisere lærlingenes produksjon som oppdrag for kommune, næringsliv og organisasjoner. NIMMS har ansvar for faglig kvalitet og veiledning; oppdragsgivere kan motta leveranser uten å ha arbeidsgiver- eller oppfølgingsansvar for lærlingen.</li>
                <li>Samarbeid og utplassering: NIMMS kan inngå samarbeidsavtaler med eksterne opplæringskontor, kommunale enheter og bedrifter for å sikre tilstrekkelig bredde i opplæringen (delopplæring/utplassering), slik at læreplanmålene nås.</li>
                <li>Kvalitet og dokumentasjon: Styret fastsetter interne rutiner for opplæringsplan, veiledningslogg, halvårs-/sluttvurdering, fraværsoppfølging og avviksbehandling, i samsvar med fylkeskommunens krav.</li>
              </ul>
            </div>

            {/* §5C */}
            <div className="animate-fade-in">
              <h3 className="font-heading text-2xl font-bold text-[#0A4CA6] mb-3">§5C – Fremtidige mål for forsknings- og utviklingssamarbeid</h3>
              <p className="leading-relaxed mb-3">
                NIMMS har som mål å utvikle samarbeid med forskningsinstitusjoner, høgskoler og universiteter som ønsker å teste, utvikle og prototype nye løsninger innen teknologi og medieproduksjon.
              </p>
              <p className="leading-relaxed mb-3">
                Slikt samarbeid skal på sikt gi ungdom mulighet til å delta i reelle forsknings- og utviklingsprosjekter, under faglig veiledning, og bidra til lokal innovasjon og kompetansebygging i Nesodden kommune.
              </p>
            </div>

            {/* §6 */}
            <div className="animate-fade-in">
              <h3 className="font-heading text-2xl font-bold text-[#0A4CA6] mb-3">§6 – Styret</h3>
              <p className="leading-relaxed mb-3">
                Foreningen ledes av et styre på minimum 5 medlemmer og inntil 9 medlemmer, valgt for 2 år av gangen.
              </p>
              <p className="leading-relaxed mb-3">Styret skal bestå av:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>1 representant fra Nesodden kommune</li>
                <li>1 representant fra Nesodden videregående skole</li>
                <li>1 representant fra Nesodden Næringsforening</li>
                <li>1–2 elevrepresentanter (14–19 år)</li>
                <li>1–2 ungdomsrepresentanter (19–24 år)</li>
                <li>1–2 frivillige eller faglige mentorer</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Styret konstituerer seg selv med leder, nestleder, kasserer og sekretær.
              </p>
              <p className="leading-relaxed mt-3">
                Styret har ansvar for økonomi, HMS, forsikring, politiattest for voksne som arbeider med ungdom, samt å
                sikre at all aktivitet følger foreningens formål.
              </p>
            </div>

            {/* §7 */}
            <div className="animate-fade-in">
              <h3 className="font-heading text-2xl font-bold text-[#0A4CA6] mb-3">§7 – Årsmøte</h3>
              <p className="leading-relaxed mb-3">
                Årsmøtet er foreningens øverste organ og avholdes innen 1. april hvert år.
              </p>
              <p className="leading-relaxed mb-3">Innkalling skal sendes minst 14 dager før møtet.</p>
              <p className="leading-relaxed mb-3">Årsmøtet skal:</p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Godkjenne årsrapport og regnskap</li>
                <li>Fastsette medlemskontingent (om aktuelt)</li>
                <li>Behandle innkomne forslag</li>
                <li>Velge styre og valgkomité</li>
                <li>Vedta eventuelle endringer i vedtektene</li>
              </ol>
              <p className="leading-relaxed mt-4">
                Vedtak krever simpelt flertall. Ved stemmelikhet har styreleder dobbeltstemme.
              </p>
            </div>

            {/* §8 */}
            <div className="animate-fade-in">
              <h3 className="font-heading text-2xl font-bold text-[#0A4CA6] mb-3">§8 – Økonomi og regnskap</h3>
              <p className="leading-relaxed mb-3">Foreningens regnskapsår følger kalenderåret.</p>
              <p className="leading-relaxed mb-3">
                Foreningen skal føre ordentlig regnskap i tråd med bokføringsloven.
              </p>
              <p className="leading-relaxed mb-3">
                Eventuelle midler eller overskudd skal brukes til å styrke foreningens aktivitet, utstyr og
                ungdomsarbeid.
              </p>
              <p className="leading-relaxed">
                Ved oppløsning skal eventuelle midler tilfalle tiltak for ungdom i Nesodden kommune, besluttet av
                årsmøtet i samråd med kommunen.
              </p>
            </div>

            {/* §9 */}
            <div className="animate-fade-in">
              <h3 className="font-heading text-2xl font-bold text-[#0A4CA6] mb-3">§9 – Signatur og fullmakter</h3>
              <p className="leading-relaxed mb-3">Styrets leder og kasserer har signaturrett i fellesskap.</p>
              <p className="leading-relaxed">
                Styret kan gi prokura til daglig leder eller prosjektleder for drift av oppdrag.
              </p>
            </div>

            {/* §10 */}
            <div className="animate-fade-in">
              <h3 className="font-heading text-2xl font-bold text-[#0A4CA6] mb-3">§10 – Endring av vedtekter</h3>
              <p className="leading-relaxed mb-3">
                Endringer i vedtektene kan bare gjøres av årsmøtet og krever 2/3 flertall.
              </p>
              <p className="leading-relaxed">
                Forslag til endringer må være sendt til styret minst 14 dager før årsmøtet.
              </p>
            </div>

            {/* §11 */}
            <div className="animate-fade-in">
              <h3 className="font-heading text-2xl font-bold text-[#0A4CA6] mb-3">§11 – Oppløsning</h3>
              <p className="leading-relaxed mb-3">Ved oppløsning kreves 2/3 flertall på årsmøtet.</p>
              <p className="leading-relaxed">
                Eventuelle midler, utstyr og eiendeler tilfaller Nesodden kommune eller annen ideell organisasjon som
                arbeider for ungdom i alderen 14–24 år på Nesodden.
              </p>
            </div>

            {/* §12 */}
            <div className="animate-fade-in">
              <h3 className="font-heading text-2xl font-bold text-[#0A4CA6] mb-3">
                §12 – Medlemskap, HMS og politiattest
              </h3>
              <p className="leading-relaxed mb-3">
                Foreningen skal ha rutiner for HMS, forsvarlig bruk av utstyr og opplæring.
              </p>
              <p className="leading-relaxed mb-3">
                Alle voksne som jobber direkte med ungdom skal fremvise gyldig politiattest.
              </p>
              <p className="leading-relaxed mb-3">
                Foreningen skal sørge for at forsikringer dekker både medlemmer, frivillige og aktiviteter.
              </p>
              <p className="leading-relaxed">
                HMS-ansvarlig skal rapportere direkte til styret og sikre at all aktivitet skjer i trygge rammer.
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
