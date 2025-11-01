import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const data = await req.json()
    // Minimal validation
    const { name, email, message } = data || {}
    console.log('Contact form submission (Next API):', { name, email, message })

    return NextResponse.json({ success: true, message: 'Takk for din henvendelse! Vi tar kontakt snart.' })
  } catch (err) {
    console.error('Error in /api/contact:', err)
    return NextResponse.json({ success: false, message: 'Feil ved behandling av forespørselen.' }, { status: 500 })
  }
}
