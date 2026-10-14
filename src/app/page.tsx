import Image from 'next/image'
import heroMother from './hero-mother.webp'
import NurseSection from './NurseSection'

/* ─── Replace this with your real Nigerian WhatsApp number ─── */
const WHATSAPP_NUMBER = '2348030438907'
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20MamaPlus%2C%20I%20want%20to%20get%20started`

/* Plan-specific WhatsApp links: visitors only reach the chat AFTER choosing a plan */
const planLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

/* ─── WhatsApp SVG icon ─── */
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

/* ─── MamaPlus logo (simplified from your flyer) ─── */
function LogoIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="48" fill="#FDE8F1" />
      <circle cx="38" cy="17" r="6" fill="#D6246E" />
      <circle cx="47" cy="24" r="10" fill="#D6246E" />
      <path
        fill="#D6246E"
        d="M42 28 L52 28 L53 35 C57 37 64 41 68 49 C74 60 67 73 53 75 L51 88 L36 88 L37 67 C33 57 33 43 41 35 Z"
      />
      <path
        fill="#FFFFFF"
        transform="translate(52 50) scale(0.62)"
        d="M12 21s-7-4.5-9.5-9C.8 8.8 3 5 6.5 5 8.5 5 10.5 6 12 8c1.5-2 3.5-3 5.5-3 3.5 0 5.7 3.8 4 7-2.5 4.5-9.5 9-9.5 9z"
      />
      <path
        fill="#3E9A4B"
        transform="translate(66 12) scale(0.7)"
        d="M12 21s-7-4.5-9.5-9C.8 8.8 3 5 6.5 5 8.5 5 10.5 6 12 8c1.5-2 3.5-3 5.5-3 3.5 0 5.7 3.8 4 7-2.5 4.5-9.5 9-9.5 9z"
      />
    </svg>
  )
}

function Logo({ dark = false, small = false }: { dark?: boolean; small?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <LogoIcon className={small ? 'w-8 h-8' : 'w-10 h-10'} />
      <span className={`${small ? 'text-lg' : 'text-xl'} font-extrabold tracking-tight leading-none`}>
        <span className="text-[#D6246E]">Mama</span>
        <span className={dark ? 'text-white' : 'text-[#4B2A6B]'}>plus</span>
        <sup className="text-[#D6246E] text-xs font-extrabold ml-0.5">+</sup>
      </span>
    </div>
  )
}

/* ─── Trust badge pill ─── */
function TrustBadge({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FDF2F7] border border-[#F9C6DC] text-[#B01C58] text-xs font-medium">
      <span className="w-1.5 h-1.5 rounded-full bg-[#D6246E] flex-shrink-0" />
      {text}
    </span>
  )
}

/* ─── Step card ─── */
function Step({
  number,
  title,
  description,
  delay,
}: {
  number: string
  title: string
  description: string
  delay: string
}) {
  return (
    <div
      className={`animate-fade-up ${delay} flex flex-col items-start gap-4 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow duration-300`}
    >
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#D6246E] text-white font-bold text-sm flex-shrink-0">
        {number}
      </div>
      <div>
        <h3 className="text-base font-semibold text-[#2E1A47] mb-1">{title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

/* ─── Tick icon for plan features ─── */
function Tick() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-4 h-4 text-[#3E9A4B] flex-shrink-0 mt-0.5"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 011.4-1.4l3.8 3.8 6.8-6.8a1 1 0 011.4 0z"
        clipRule="evenodd"
      />
    </svg>
  )
}

/* ─── Plan card ─── */
function PlanCard({
  name,
  price,
  period,
  altPrice,
  description,
  features,
  ctaText,
  ctaHref,
  badge,
  featured,
  delay,
}: {
  name: string
  price: string
  period?: string
  altPrice?: string
  description: string
  features: string[]
  ctaText: string
  ctaHref: string
  badge?: string
  featured?: boolean
  delay: string
}) {
  return (
    <div
      className={`animate-fade-up ${delay} relative flex flex-col bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 ${
        featured ? 'border-2 border-[#D6246E]' : 'border border-gray-100'
      }`}
    >
      {badge && (
        <span className="absolute -top-3 left-6 inline-flex px-3 py-1 rounded-full bg-[#D6246E] text-white text-xs font-semibold">
          {badge}
        </span>
      )}

      <h3 className="text-base font-semibold text-[#2E1A47]">{name}</h3>
      <p className="text-sm text-gray-500 mt-1 leading-relaxed">{description}</p>

      <div className="mt-5 mb-1 flex items-baseline gap-1">
        <span className="text-3xl font-bold text-[#2E1A47]">{price}</span>
        {period && <span className="text-sm text-gray-500">{period}</span>}
      </div>
      <p className="text-sm font-bold text-[#2E1A47] h-5">{altPrice}</p>

      <ul className="mt-6 mb-8 flex flex-col gap-3 flex-1">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
            <Tick />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <a
        href={ctaHref}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center gap-2 font-semibold text-sm px-6 py-3 rounded-full transition-colors duration-200 ${
          featured
            ? 'bg-[#D6246E] hover:bg-[#B01C58] text-white'
            : 'bg-[#FDF2F7] hover:bg-[#FDE8F1] text-[#B01C58] border border-[#F9C6DC]'
        }`}
      >
        <WhatsAppIcon />
        {ctaText}
      </a>
    </div>
  )
}

/* ─── Main page ─── */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">

      {/* ── NAV ── */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Tagline — hidden on small screens */}
          <p className="hidden sm:block text-sm text-gray-500">
            Your daily pregnancy companion — on WhatsApp
          </p>

          {/* Nav CTA — goes to plans first */}
          <a
            href="#plans"
            className="flex items-center gap-2 bg-[#D6246E] hover:bg-[#B01C58] text-white text-sm font-medium px-4 py-2 rounded-full transition-colors duration-200"
          >
            <span className="hidden sm:inline">View plans</span>
            <span className="sm:hidden">Plans</span>
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="flex-1 bg-gradient-to-b from-[#FDF2F7] to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left: copy */}
            <div className="flex flex-col gap-6">

              {/* Available now badge */}
              <div className="animate-fade-up delay-100 inline-flex">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FDE8F1] text-[#B01C58] text-xs font-semibold tracking-wide uppercase">
                  <span className="w-2 h-2 rounded-full bg-[#D6246E] animate-pulse" />
                  Available now in Nigeria
                </span>
              </div>

              {/* Headline */}
              <h1 className="animate-fade-up delay-200 text-4xl sm:text-5xl font-bold text-[#2E1A47] leading-tight">
                Daily pregnancy support on{' '}
                <span className="text-[#D6246E]">WhatsApp</span>
              </h1>

              {/* Subheadline */}
              <p className="animate-fade-up delay-300 text-lg text-gray-600 leading-relaxed max-w-lg">
                No app to download. Pick a plan, add our number and start chatting.
              </p>

              {/* CTA button — goes to plans first */}
              <div className="animate-fade-up delay-400 flex flex-wrap items-center gap-x-6 gap-y-3">
                <a
                  href="#plans"
                  className="inline-flex items-center gap-3 bg-[#D6246E] hover:bg-[#B01C58] text-white font-semibold text-base px-8 py-4 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  View plans
                </a>
                <a
                  href={planLink('Hi MamaPlus, I want to start the 14-day trial')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-[#B01C58] underline underline-offset-4 hover:text-[#D6246E]"
                >
                  or start the 14-day trial
                </a>
              </div>

              {/* Trust badges */}
              <div className="animate-fade-up delay-500 flex flex-wrap gap-2">
                <TrustBadge text="Private. Available 24/7." />
                <TrustBadge text="Verified nurses" />
                <TrustBadge text="No signup needed" />
                <TrustBadge text="100% confidential" />
              </div>
            </div>

            {/* Right: hero image */}
            <div className="animate-fade-up delay-300 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-lg">
                {/* Decorative green blob behind image */}
                <div className="absolute -inset-4 bg-[#FDE8F1] rounded-3xl -z-10" />
                <Image
                  src={heroMother}
                  alt="Smiling pregnant woman using her phone for pregnancy support"
                  width={560}
                  height={640}
                  priority
                  className="relative rounded-2xl object-cover w-full h-auto shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2E1A47] mb-3">
              How it works
            </h2>
            <p className="text-gray-500 text-base">
              Getting started takes less than a minute
            </p>
          </div>

          {/* Steps */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Step
              number="1"
              title="Choose your plan"
              description="Pick the plan that fits you. Your 14-day trial starts on any plan."
              delay="delay-100"
            />
            <Step
              number="2"
              title="Tell us your stage"
              description="Share your pregnancy stage and any health concerns you'd like us to track."
              delay="delay-200"
            />
            <Step
              number="3"
              title="Get daily support"
              description="Receive daily reminders, answers to your questions, and guidance — instantly."
              delay="delay-300"
            />
          </div>
        </div>
      </section>

      {/* ── PLANS ── */}
      <section id="plans" className="py-16 lg:py-24 bg-[#FDF2F7] scroll-mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2E1A47] mb-3">
              Choose your plan
            </h2>
            <p className="text-gray-500 text-base max-w-xl mx-auto">
              Care for you and your baby, with real nurses when you need them
            </p>
          </div>

          {/* Plan cards */}
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            <PlanCard
              name="14-Day Trial"
              price="₦0"
              period="for 14 days"
              description="Start with daily support and meet a real nurse. No payment needed."
              features={[
                'Daily check-ins',
                'Danger-sign support',
                'Medication and antenatal reminders',
                'Meet a real, named, licensed nurse',
              ]}
              ctaText="Start 14-day trial"
              ctaHref={planLink('Hi MamaPlus, I want to start the 14-day trial')}
              delay="delay-100"
            />
            <PlanCard
              name="Pro"
              price="₦850"
              period="/month"
              altPrice="or ₦8,700/year"
              description="Everything in the trial, plus live nurse voice access."
              features={[
                'Everything in the trial',
                'Live nurse voice access',
                'Personalised tips for your pregnancy week',
              ]}
              ctaText="Choose Pro"
              ctaHref={planLink('Hi MamaPlus, I want the Pro plan')}
              badge="Most popular"
              featured
              delay="delay-200"
            />
            <PlanCard
              name="Premium"
              price="₦2,630"
              period="/month"
              altPrice="or ₦26,900/year"
              description="Everything in Pro, plus a verified drug wallet for you and your baby."
              features={[
                'Everything in Pro',
                'Verified drug wallet for you and your baby',
                'Redeem at any PCN-registered pharmacy you choose',
              ]}
              ctaText="Join Premium waitlist"
              ctaHref={planLink('Hi MamaPlus, please add me to the Premium waitlist')}
              badge="Coming soon"
              delay="delay-300"
            />
          </div>

          {/* Compliance note */}
          <p className="text-xs text-gray-400 text-center mt-8 max-w-2xl mx-auto leading-relaxed">
            The Premium drug wallet is prepaid funds you spend at a PCN-registered pharmacy of
            your choice. MamaPlus does not sell or dispense medication. MamaPlus provides
            information and reminders only and does not diagnose.
          </p>
        </div>
      </section>

      {/* ── BOOK A NURSE (coming soon) ── */}
      <NurseSection whatsappNumber={WHATSAPP_NUMBER} />

      {/* ── BOTTOM CTA ── */}
      <section className="bg-[#D6246E] py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center gap-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to get started?
          </h2>
          <p className="text-pink-100 text-base leading-relaxed">
            Join Nigerian mothers getting daily pregnancy support.
          </p>
          <a
            href="#plans"
            className="inline-flex items-center gap-3 bg-white hover:bg-[#FDF2F7] text-[#B01C58] font-semibold text-base px-8 py-4 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
          >
            View plans
          </a>
        </div>
      </section>

      {/* ── QR CODE (unchanged from your original) ── */}
      <section className="py-12 bg-[#FDF2F7]">
        <div className="max-w-2xl mx-auto px-4 text-center flex flex-col items-center gap-4">
          <h2 className="text-2xl font-bold text-[#2E1A47]">
            Scan to start on WhatsApp
          </h2>
          <p className="text-gray-500 text-sm">
            On desktop? Scan this QR code with your phone camera to open WhatsApp instantly.
          </p>
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(WHATSAPP_LINK)}`}
            alt="Scan to open MamaPlus on WhatsApp"
            className="rounded-xl shadow-md w-48 h-48"
          />
          <p className="text-xs text-gray-400">
            Point your phone camera at the QR code — no app needed
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#2E1A47] text-gray-400 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <Logo dark small />

          {/* Tagline */}
          <p className="text-sm text-center sm:text-left">
            Simple. Safe. Supportive. Built for Nigerian mothers.
          </p>

          {/* Copyright */}
          <p className="text-sm">© 2026 MamaPlus</p>
        </div>
      </footer>

    </div>
  )
}