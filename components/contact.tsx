"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, ExternalLink } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // placeholder: will be replaced with async POST
    void (async () => {
      setSubmitting(true)
      setError('')
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        })
        const body = await res.json()
        if (res.ok && body?.success) {
          setSuccess(body.message || 'Takk!')
          setFormData({ name: '', email: '', message: '' })
        } else {
          setError(body?.message || 'Noe gikk galt')
        }
      } catch (err) {
        console.error(err)
        setError('Feil ved sending. Prøv igjen senere.')
      } finally {
        setSubmitting(false)
      }
    })()
  }

  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  return (
    <section id="kontakt" className="py-24 sm:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-20">
          <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl mb-6 bg-gradient-to-r from-[#0A4CA6] to-[#2EA7B7] bg-clip-text text-transparent">
            Kontakt oss
          </h2>
          <p className="text-xl text-[#1E1E1E] leading-relaxed">
            Har du spørsmål eller vil samarbeide med oss? Kontakt NIMMS via vårt kontaktskjema eller send e-post til
            foreningen.
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="font-heading text-2xl font-bold mb-6 text-[#0A4CA6]">Kontaktinformasjon</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-gradient-to-br from-[#2EA7B7]/20 to-[#0A4CA6]/20 flex items-center justify-center">
                      <Mail className="h-6 w-6 text-[#2EA7B7]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#0A4CA6] mb-1">E-post</p>
                      <a href="mailto:post@nimms.no" className="text-[#1E1E1E] hover:text-[#2EA7B7] transition-colors">
                        bjornom@afk.no
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-gradient-to-br from-[#2EA7B7]/20 to-[#0A4CA6]/20 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-[#2EA7B7]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#0A4CA6] mb-1">Adresse</p>
                      <p className="text-[#1E1E1E]">
                        Tangenten
                        <br />
                        Nesodden
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-[#0A4CA6]/10">
                <p className="text-[#1E1E1E] leading-relaxed">
                  NIMMS er et samarbeid mellom Nesodden kommune, Nesodden videregående skole og Nesodden
                  Næringsforening.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[#0A4CA6] font-semibold">
                    Navn
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Ditt navn"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="border-[#0A4CA6]/20 focus:border-[#2EA7B7] rounded-xl h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#0A4CA6] font-semibold">
                    E-post
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="din@epost.no"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="border-[#0A4CA6]/20 focus:border-[#2EA7B7] rounded-xl h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[#0A4CA6] font-semibold">
                    Melding
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Skriv din melding her..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="border-[#0A4CA6]/20 focus:border-[#2EA7B7] rounded-xl"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full gradient-blue-turquoise text-white font-semibold h-12 rounded-xl hover:shadow-lg transition-all duration-300"
                  disabled={submitting}
                >
                  {submitting ? 'Sender...' : 'Send melding'}
                </Button>
              </form>

              {success ? (
                <p className="mt-4 text-center text-green-600 font-medium">{success}</p>
              ) : null}

              {error ? (
                <p className="mt-4 text-center text-red-600 font-medium">{error}</p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
