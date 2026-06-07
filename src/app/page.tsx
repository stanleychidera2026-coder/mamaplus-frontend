import Image from 'next/image'

/* ─── Replace this with your real Nigerian WhatsApp number ─── */
const WHATSAPP_NUMBER = '2348030438907'
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20MamaPlus%2C%20I%20want%20to%20get%20started`

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

/* ─── Trust badge pill ─── */
function TrustBadge({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 border border-green-200 text-green-700 text-xs font-medium">
      <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
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
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white font-bold text-sm flex-shrink-0">
        {number}
      </div>
      <div>
        <h3 className="text-base font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
      </div>
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
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="text-xl font-bold text-gray-900">MamaPlus</span>
          </div>

          {/* Tagline — hidden on small screens */}
          <p className="hidden sm:block text-sm text-gray-500">
            Your daily pregnancy companion — on WhatsApp
          </p>

          {/* Nav CTA */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors duration-200"
          >
            <WhatsAppIcon />
            <span className="hidden sm:inline">Start on WhatsApp</span>
            <span className="sm:hidden">Start</span>
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="flex-1 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left: copy */}
            <div className="flex flex-col gap-6">

              {/* Available now badge */}
              <div className="animate-fade-up delay-100 inline-flex">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100 text-green-700 text-xs font-semibold tracking-wide uppercase">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Available now in Nigeria
                </span>
              </div>

              {/* Headline */}
              <h1 className="animate-fade-up delay-200 text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                Get free daily pregnancy support on{' '}
                <span className="text-green-600">WhatsApp</span>
              </h1>

              {/* Subheadline */}
              <p className="animate-fade-up delay-300 text-lg text-gray-600 leading-relaxed max-w-lg">
                No app to download. Just add our number and start chatting.
              </p>

              {/* CTA button */}
              <div className="animate-fade-up delay-400">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold text-base px-8 py-4 rounded-full transition-all duration-200"
                >
                  <WhatsAppIcon />
                  Start on WhatsApp
                </a>
              </div>

              {/* Trust badges */}
              <div className="animate-fade-up delay-500 flex flex-wrap gap-2">
                <TrustBadge text="Free. Private. Available 24/7." />
                <TrustBadge text="100% free" />
                <TrustBadge text="No signup needed" />
                <TrustBadge text="Trusted by mothers" />
              </div>
            </div>

            {/* Right: hero image */}
            <div className="animate-fade-up delay-300 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-lg">
                {/* Decorative green blob behind image */}
                <div className="absolute -inset-4 bg-green-100 rounded-3xl -z-10" />
                <Image
                  src="https://ai-mama-support.lovable.app/assets/hero-mother-CQv7t45m.png"
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
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
              title="Add our WhatsApp number"
              description="Save our number and send us a message. No downloads, no sign-ups."
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

      {/* ── BOTTOM CTA ── */}
      <section className="bg-green-600 py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center gap-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to get started?
          </h2>
          <p className="text-green-100 text-base leading-relaxed">
            Join thousands of Nigerian mothers getting daily pregnancy support.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white hover:bg-green-50 text-green-700 font-semibold text-base px-8 py-4 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
          >
            <WhatsAppIcon />
            Start on WhatsApp
          </a>
        </div>
      </section>

      {/* ── QR CODE ── */}
<section className="py-12 bg-green-50">
  <div className="max-w-2xl mx-auto px-4 text-center flex flex-col items-center gap-4">
    <h2 className="text-2xl font-bold text-gray-900">
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
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-green-600 flex items-center justify-center">
              <span className="text-white font-bold text-xs">M</span>
            </div>
            <span className="text-white font-semibold">MamaPlus</span>
          </div>

          {/* Tagline */}
          <p className="text-sm text-center sm:text-left">
            Powered by AI. Built for Nigerian mothers.
          </p>

          {/* Copyright */}
          <p className="text-sm">© 2026 MamaPlus</p>
        </div>
      </footer>

    </div>
  )
}
