'use client'

import { useState, type FormEvent } from 'react'

/* ─── Shared field styles (same pink / purple look as the rest of the page) ─── */
const inputClass =
  'w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#2E1A47] placeholder-gray-400 focus:outline-none focus:border-[#D6246E] focus:ring-2 focus:ring-[#D6246E]/20'
const labelClass = 'block text-sm font-medium text-[#2E1A47] mb-1.5'

const QUALIFICATIONS = [
  'Registered Nurse (RN)',
  'Registered Midwife (RM)',
  'RN and RM',
  'Other',
]

type Mode = 'find' | 'register' | null

type NurseForm = {
  name: string
  phone: string
  licence: string
  qualification: string
  area: string
  consent: boolean
}

const emptyNurse: NurseForm = {
  name: '',
  phone: '',
  licence: '',
  qualification: '',
  area: '',
  consent: false,
}

/* ─── Small icons ─── */
function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" />
    </svg>
  )
}

function NurseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <circle cx="9" cy="8" r="4" />
      <path d="M2 21c0-4 3-6.5 7-6.5s7 2.5 7 6.5" />
      <path d="M19 8v6M16 11h6" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

/* ─── Greyed-out placeholder card: shows where nurse profiles will appear ─── */
function PlaceholderNurseCard() {
  return (
    <div
      className="flex flex-col items-center gap-3 rounded-2xl border border-gray-100 bg-white p-5 opacity-60"
      aria-hidden="true"
    >
      <div className="w-14 h-14 rounded-full bg-[#FDE8F1]" />
      <div className="w-24 h-3 rounded-full bg-gray-200" />
      <div className="w-32 h-2.5 rounded-full bg-gray-100" />
      <div className="w-20 h-7 rounded-full bg-[#FDF2F7] border border-[#F9C6DC]" />
    </div>
  )
}

export default function NurseSection({ whatsappNumber }: { whatsappNumber: string }) {
  const waLink = (message: string) =>
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  const [mode, setMode] = useState<Mode>(null)

  function toggle(next: Exclude<Mode, null>) {
    setMode((current) => (current === next ? null : next))
  }

  /* ── Find a nurse ── */
  const [location, setLocation] = useState('')
  const [searchedLocation, setSearchedLocation] = useState<string | null>(null)
  const [locationError, setLocationError] = useState('')

  function handleSearch(e: FormEvent) {
    e.preventDefault()
    if (!location.trim()) {
      setLocationError('Please enter your location.')
      return
    }
    setLocationError('')
    setSearchedLocation(location.trim())
  }

  /* ── Register as a nurse ── */
  const [nurse, setNurse] = useState<NurseForm>(emptyNurse)
  const [error, setError] = useState('')
  const [applicationLink, setApplicationLink] = useState<string | null>(null)

  function update<K extends keyof NurseForm>(field: K, value: NurseForm[K]) {
    setNurse((prev) => ({ ...prev, [field]: value }))
  }

  function handleRegister(e: FormEvent) {
    e.preventDefault()

    if (
      !nurse.name.trim() ||
      !nurse.phone.trim() ||
      !nurse.licence.trim() ||
      !nurse.qualification ||
      !nurse.area.trim()
    ) {
      setError('Please fill in all the fields.')
      return
    }
    if (nurse.phone.replace(/\D/g, '').length < 10) {
      setError('Please enter a valid WhatsApp number.')
      return
    }
    if (!nurse.consent) {
      setError('Please tick the box so we can contact you and verify your licence.')
      return
    }
    setError('')

    // Always starts with NURSE APPLICATION so it can be told apart from a mother's chat
    const message = [
      'NURSE APPLICATION',
      `Name: ${nurse.name.trim()}`,
      `WhatsApp: ${nurse.phone.trim()}`,
      `Licence number: ${nurse.licence.trim()}`,
      `Qualification: ${nurse.qualification}`,
      `Area: ${nurse.area.trim()}`,
      '',
      'I want to work as a nurse on MamaPlus.',
    ].join('\n')

    const link = waLink(message)
    setApplicationLink(link)
    window.open(link, '_blank', 'noopener,noreferrer')
  }

  const tabBase =
    'inline-flex items-center justify-center gap-2 font-semibold text-sm sm:text-base px-6 py-3.5 rounded-full border transition-all duration-200'
  const tabActive = 'bg-[#D6246E] border-[#D6246E] text-white shadow-md'
  const tabIdle =
    'bg-[#FDF2F7] border-[#F9C6DC] text-[#B01C58] hover:bg-[#FDE8F1] hover:-translate-y-0.5'

  return (
    <section id="nurses" className="py-16 lg:py-24 bg-white scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2E1A47] mb-3">
            Need a nurse at home?
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            Find a verified nurse near you, or join MamaPlus as a nurse.
          </p>
        </div>

        {/* The two buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={() => toggle('find')}
            aria-expanded={mode === 'find'}
            className={`${tabBase} ${mode === 'find' ? tabActive : tabIdle}`}
          >
            <SearchIcon />
            Find a nurse
          </button>
          <button
            type="button"
            onClick={() => toggle('register')}
            aria-expanded={mode === 'register'}
            className={`${tabBase} ${mode === 'register' ? tabActive : tabIdle}`}
          >
            <NurseIcon />
            Register as a nurse
          </button>
        </div>

        {/* ── FIND A NURSE PANEL ── */}
        {mode === 'find' && (
          <div className="animate-fade-up mt-8 max-w-3xl mx-auto bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-[#2E1A47] mb-1">Find a nurse near you</h3>
            <p className="text-sm text-gray-500 mb-5 leading-relaxed">
              Enter your area and we will show verified nurses who can visit you at home.
            </p>

            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3" noValidate>
              <div className="flex-1">
                <label htmlFor="nurse-location" className="sr-only">
                  Your location
                </label>
                <input
                  id="nurse-location"
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter your location, e.g. Ikeja, Lagos"
                  className={inputClass}
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center bg-[#D6246E] hover:bg-[#B01C58] text-white font-semibold text-sm px-8 py-3 rounded-full transition-colors duration-200"
              >
                Send
              </button>
            </form>
            {locationError && <p className="text-sm text-red-600 mt-2">{locationError}</p>}

            {/* Where the nurse profiles will appear */}
            {searchedLocation && (
              <div className="animate-fade-up mt-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h4 className="text-base font-semibold text-[#2E1A47]">
                    Nurses near {searchedLocation}
                  </h4>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#FDE8F1] text-[#B01C58] text-xs font-semibold tracking-wide uppercase">
                    Coming soon
                  </span>
                </div>

                <div className="rounded-2xl bg-[#FDF2F7] border border-[#F9C6DC] p-5 sm:p-6">
                  <p className="text-sm text-gray-600 leading-relaxed mb-5">
                    We are verifying nurses in your area right now. Nurse profiles will show here
                    as soon as they are ready. Join the waitlist and we will message you on
                    WhatsApp the moment a verified nurse is available.
                  </p>

                  <div className="grid grid-cols-3 gap-3 mb-5">
                    <PlaceholderNurseCard />
                    <PlaceholderNurseCard />
                    <PlaceholderNurseCard />
                  </div>

                  <a
                    href={waLink(
                      `Hi MamaPlus, please notify me when a nurse is available in ${searchedLocation}`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#FDE8F1] text-[#B01C58] border border-[#F9C6DC] font-semibold text-sm px-6 py-3 rounded-full transition-colors duration-200"
                  >
                    <WhatsAppIcon />
                    Notify me on WhatsApp
                  </a>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ── REGISTER AS A NURSE PANEL ── */}
        {mode === 'register' && (
          <div className="animate-fade-up mt-8 max-w-3xl mx-auto bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-[#2E1A47] mb-1">Register as a nurse</h3>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">
              Join MamaPlus and care for mothers near you. Every nurse is verified within 24 hours
              before going live.
            </p>

            {applicationLink ? (
              <div className="rounded-2xl bg-[#FDF2F7] border border-[#F9C6DC] p-5 sm:p-6">
                <p className="text-base font-semibold text-[#2E1A47] mb-3">Almost done!</p>
                <ol className="flex flex-col gap-3 mb-5">
                  {[
                    'WhatsApp should have opened with your details. Tap Send.',
                    'In the same chat, send a clear photo of your nursing licence and your certificate.',
                    'We will verify you within 24 hours and message you on WhatsApp.',
                  ].map((step, i) => (
                    <li key={step} className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#D6246E] text-white text-xs font-bold flex-shrink-0">
                        {i + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                  <a
                    href={applicationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#D6246E] hover:bg-[#B01C58] text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors duration-200"
                  >
                    <WhatsAppIcon />
                    Open WhatsApp again
                  </a>
                  <button
                    type="button"
                    onClick={() => setApplicationLink(null)}
                    className="text-sm font-semibold text-[#B01C58] underline underline-offset-4 hover:text-[#D6246E]"
                  >
                    Edit my details
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleRegister} className="flex flex-col gap-4" noValidate>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nurse-name" className={labelClass}>Full name</label>
                    <input
                      id="nurse-name"
                      type="text"
                      value={nurse.name}
                      onChange={(e) => update('name', e.target.value)}
                      placeholder=""
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="nurse-phone" className={labelClass}>WhatsApp number</label>
                    <input
                      id="nurse-phone"
                      type="tel"
                      value={nurse.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      placeholder=""
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="nurse-licence" className={labelClass}>
                      Nursing licence number
                    </label>
                    <input
                      id="nurse-licence"
                      type="text"
                      value={nurse.licence}
                      onChange={(e) => update('licence', e.target.value)}
                      placeholder=""
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="nurse-qualification" className={labelClass}>Qualification</label>
                    <select
                      id="nurse-qualification"
                      value={nurse.qualification}
                      onChange={(e) => update('qualification', e.target.value)}
                      className={inputClass}
                    >
                      <option value="">Select your qualification</option>
                      {QUALIFICATIONS.map((q) => (
                        <option key={q} value={q}>{q}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="nurse-area" className={labelClass}>Area you work in</label>
                  <input
                    id="nurse-area"
                    type="text"
                    value={nurse.area}
                    onChange={(e) => update('area', e.target.value)}
                    placeholder=""
                    className={inputClass}
                  />
                </div>

                <label className="flex items-start gap-2 text-xs text-gray-500 leading-relaxed cursor-pointer">
                  <input
                    type="checkbox"
                    checked={nurse.consent}
                    onChange={(e) => update('consent', e.target.checked)}
                    className="mt-0.5 accent-[#D6246E]"
                  />
                  <span>
                    I agree that MamaPlus may contact me on WhatsApp and verify my licence. My
                    details are kept private.
                  </span>
                </label>

                {error && <p className="text-sm text-red-600">{error}</p>}

                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 bg-[#D6246E] hover:bg-[#B01C58] text-white font-semibold text-base px-8 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <WhatsAppIcon />
                    Register
                  </button>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    This opens WhatsApp with your details ready to send. You will be asked for a
                    photo of your licence and certificate at the end.
                  </p>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </section>
  )
}