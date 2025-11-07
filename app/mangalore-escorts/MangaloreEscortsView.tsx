'use client'

import Hero from '@/components/Hero'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
  viewport: { once: true, amount: 0.25 },
}

const imageReveal = {
  initial: { opacity: 0, scale: 0.98 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: 'easeOut' },
  viewport: { once: true, amount: 0.3 },
}

const MangaloreEscortsView = () => {
  return (
    <main className="bg-[#050505] text-white">
      <Hero
        eyebrow="Mangalore Escorts"
        heading="Coastal Companions of Pure Indulgence"
        dynamicWords={['Mangalore Escorts', 'Five-Star Experiences', '24x7 Indulgence']}
        locationLine="Across Gateway Hotel, Goldfinch, OYO, Treebo & More"
        description="This coastal place is known for its most beautiful Mangalore escorts, offering you flawless beauties on call day and night to fulfil every refined desire."
        cta={{ label: 'Book Your Mangalore Evening', href: '#reserve' }}
      />

      {/* Coastal allure section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,128,0.12),transparent_60%)]" />
        <div className="absolute inset-y-0 right-0 w-[45%] bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.12),transparent_65%)]" />

        <div className="max-w-6xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <motion.div
              className="rounded-[32px] border border-white/10 bg-black/40 p-10 backdrop-blur-xl shadow-[0_35px_90px_rgba(0,0,0,0.55)]"
              {...fadeUp}
            >
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.4em] text-[#ff7ec8]">
                A City Of Radiant Beauties
              </div>
              <h2 className="mt-6 text-3xl lg:text-[2.8rem] font-semibold leading-[1.25]">
                Mangalore Escorts Ready To Serve Your Desires 24x7
              </h2>
              <div className="mt-6 space-y-5 text-base leading-[1.85] text-[#d7d7d7]">
                <p>
                  This coastal place is known for its most beautiful Mangalore Escorts, many of the world's most beautiful women are from this place. Now it is your time to full fill the sexual desires with these flawless beauties who are waiting to serve men. Sizzling young girls from the age groups of 22 to 27 who are willing to offer you everything with a happy and open minded attitude.
                </p>
                <p>
                  Asifaa.com is one of the most elite escort service in Mangalore to offer a vast selection of escorts at the most affordable rates around the clock. Working 24x7 we have our in-call service in most elite hotels in Mangalore such as The gateway hotel, Goldfinch, the chain of OYO hotels, Treebo Hotels and many more.
                </p>
              </div>
              <div className="mt-12 grid gap-4 sm:grid-cols-2">
                {['Goldfinch', 'The Gateway', 'Treebo Select', 'OYO Premium'].map((hotel) => (
                  <motion.div
                    key={hotel}
                    className="rounded-2xl border border-white/10 bg-gradient-to-r from-[#111118] to-[#161621] px-6 py-4 text-xs uppercase tracking-[0.28em] text-[#ffdca9]"
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.25 }}
                  >
                    {hotel}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="relative grid gap-6">
              <motion.div
                className="relative h-[320px] overflow-hidden rounded-[28px] border border-white/10"
                {...imageReveal}
              >
                <Image
                  src="/images/3.jpeg"
                  alt="Sunset rendezvous in Mangalore"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/70" />
              </motion.div>
              <div className="grid gap-6 sm:grid-cols-2">
                {['/images/1.jpeg', '/images/2.jpeg'].map((src, index) => (
                  <motion.div
                    key={src}
                    className="relative h-48 overflow-hidden rounded-[22px] border border-white/10"
                    {...imageReveal}
                    transition={{ ...imageReveal.transition, delay: 0.1 * (index + 1) }}
                  >
                    <Image src={src} alt={`Luxury stay ${index + 1}`} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience grid section */}
      <section className="relative py-24" id="reserve">
        <div className="absolute inset-0 bg-[#030307]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,0,128,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,215,0,0.12),transparent_65%)]" />

        <div className="max-w-6xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid gap-14 xl:grid-cols-[1.15fr_0.85fr] items-start">
            <motion.div
              className="space-y-6"
              {...fadeUp}
            >
              <p className="text-xs uppercase tracking-[0.4em] text-[#ff7ec8]">Enjoy With A Dream Girl Of Passion And Love</p>
              <div className="space-y-5 text-base leading-[1.85] text-[#d8d8d8]">
                <p>
                  Relax and enjoy your private time with the sexiest and hot Mangalore escorts who will offer you erotic pleasures and immense sexual satisfaction. Our Mangalore escorts will offer come from various places of India. We have escorts from Delhi, Mumbai, Kolkata, Bangalore, Chennai, Hyderabad and many more. Also foreign escorts from German, Russia and other top countries with the most beautiful women.
                </p>
                <p>
                  Men can easily get tempted by female beauty and their seductive structure, but many men do not get the chance to enjoy the company of such women. But they always have the unending desire for it. But now with the help of quroa.co.in it is a simple task that everyone can attain and get the complete satisfaction of what you have always dreamt. Our Mangalore escorts are very kind and frank to all the gentlemen who visit them. As they are highly trained and well educated they communicate without any difficulty and understand your intimate needs.
                </p>
                <p>
                  With proper understanding they put in their entire tactics and effort in making every moment count and valuable for your time spent with her.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {[ 
                  {
                    title: 'Trained For Discretion',
                    detail: 'Each companion arrives poised, articulate, and ready to align with your preferred setting and pace.'
                  },
                  {
                    title: 'Communicate Effortlessly',
                    detail: 'Conversations remain fluid and engaging thanks to multilingual ease and polished etiquette.'
                  },
                  {
                    title: 'Intimate Understanding',
                    detail: 'They recognise subtle cues and craft experiences that feel bespoke to your desires.'
                  },
                  {
                    title: 'Always Frank & Kind',
                    detail: 'Genuine warmth keeps every rendezvous relaxed, confident, and truly memorable.'
                  }
                ].map((card) => (
                  <motion.div
                    key={card.title}
                    className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#101018] to-[#171727] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)]"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.25 }}
                  >
                    <h3 className="text-lg font-semibold text-white mb-3">{card.title}</h3>
                    <p className="text-sm leading-[1.7] text-[#cfcfe0]">{card.detail}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative flex flex-col gap-6"
              {...imageReveal}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <div className="relative h-[420px] overflow-hidden rounded-[34px] border border-white/10">
                <Image src="/images/6.avif" alt="Private suite in Mangalore" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-2xl font-semibold">Private Experiences Curated Around Your Mood</h3>
                  <p className="mt-3 text-sm leading-[1.8] text-[#ececf4]">
                    Men can easily get tempted by female beauty and their seductive structure, but many men do not get the chance to enjoy the company of such women. But they always have the unending desire for it. But now with the help of quroa.co.in it is a simple task that everyone can attain and get the complete satisfaction of what you have always dreamt.
                  </p>
                </div>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {[ '/images/hero1.avif', '/images/5.jpg' ].map((src, index) => (
                  <div key={src} className="relative h-48 overflow-hidden rounded-[22px] border border-white/10">
                    <Image src={src} alt={`Luxury arrival ${index + 1}`} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/60" />
                  </div>
                ))}
              </div>
              <motion.a
                href="#contact"
                className="inline-flex w-max items-center gap-3 rounded-full bg-[#ff0080] px-8 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white hover:bg-[#e00072] transition-colors"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Call Now
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lifestyle adventures section */}
      <section className="relative py-24">
        <Image
          src="/images/4.jpeg"
          alt="Night drive with companions"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(5,5,10,0.95)_0%,rgba(5,5,5,0.8)_40%,rgba(5,5,5,0.92)_100%)]" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
          <motion.div className="max-w-3xl" {...fadeUp}>
            <p className="text-xs uppercase tracking-[0.4em] text-[#ff7ec8]">
              Fun And Foreplay Helps You To Reach Glory
            </p>
            <h2 className="mt-4 text-3xl lg:text-[2.75rem] font-semibold leading-[1.3]">
              Adventures That Travel With You Wherever You Go
            </h2>
            <div className="mt-6 space-y-5 text-base leading-[1.85] text-[#dbdbe9]">
              <p>
                As it is a sub urban area, there are gentlemen who want to take the escorts on long drive or to some faraway places. Our escorts in Mangalore are highly comfortable and they would accompany to any farther distance and make it more enjoyable, all our escorts in Mangalore are available for it and they dress and present themselves accord to what you prefer. At any place, they can be the centre of attraction.
              </p>
              <p>
                With high knowledge on fashion and design of the current trends, our escorts are always being up to date on everything that makes them shine more in the crowd. Call us now to fix your date with the most sizzling Mangalore escorts and enjoy the time with the company of the lovely women as per your desire and mood.
              </p>
            </div>
          </motion.div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Chauffeured Drives',
                detail: 'Escorts happy to accompany you on any long drive or faraway plan you prefer.',
                image: '/images/zx.jpg'
              },
              {
                title: 'Dress To Match Your Mood',
                detail: 'Every wardrobe change is styled to suit your evening and keep all eyes on you both.',
                image: '/images/WhatsApp Image 2025-11-06 at 9.05.40 PM (1).jpeg'
              },
              {
                title: 'Always The Centre Of Attraction',
                detail: 'Their confidence, etiquette, and sparkle ensure every venue remembers your arrival.',
                image: '/images/WhatsApp Image 2025-11-06 at 9.05.39 PM (2).jpeg'
              },
            ].map((card) => (
              <motion.div
                key={card.title}
                className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-[0_22px_70px_rgba(0,0,0,0.45)]"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0">
                  <Image src={card.image} alt={`${card.title} showcase`} fill className="object-cover opacity-25" />
                </div>
                <div className="relative">
                  <h3 className="text-xl font-semibold text-white mb-3">{card.title}</h3>
                  <p className="text-sm text-[#d6d6df] leading-[1.7]">{card.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Read more ribbon */}
      <section className="py-20 bg-[#030308]">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <motion.div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between" {...fadeUp}>
            <div className="flex flex-col gap-4">
              <p className="text-xs uppercase tracking-[0.45em] text-[#ff7ec8]">Read More</p>
              <p className="text-lg text-[#dedee8]">
                Extend the journey with curated guides that keep you close to coastal indulgence across Karnataka.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/mysore-escorts"
                  className="rounded-full border border-[#ff0080]/40 bg-[#ff0080]/15 px-6 py-2 text-xs uppercase tracking-[0.3em] text-[#ffb6de] hover:bg-[#ff0080]/25 transition-colors"
                >
                  Mysore Escorts
                </Link>
                <Link
                  href="/love-and-sex"
                  className="rounded-full border border-[#ffd700]/40 bg-[#ffd700]/15 px-6 py-2 text-xs uppercase tracking-[0.3em] text-[#ffe5a8] hover:bg-[#ffd700]/25 transition-colors"
                >
                  Love And Sex
                </Link>
              </div>
            </div>
            <motion.div className="relative h-44 w-full max-w-lg overflow-hidden rounded-[28px] border border-white/10" {...imageReveal}>
              <Image
                src="/images/WhatsApp Image 2025-11-06 at 9.05.39 PM.jpeg"
                alt="Mangalore skyline at twilight"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer info blocks */}
      <section className="relative py-28 bg-[#020206]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,128,0.16),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,215,0,0.12),transparent_65%)]" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#0b0b11] via-[#0f0f18] to-[#19192a] p-12 shadow-[0_32px_90px_rgba(0,0,0,0.5)]"
              {...fadeUp}
            >
              <div className="absolute -left-20 top-20 h-44 w-44 rounded-full bg-[#ff0080]/20 blur-3xl" />
              <div className="absolute -right-24 -bottom-10 h-48 w-48 rounded-full bg-[#ffd700]/18 blur-3xl" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[0.65rem] uppercase tracking-[0.45em] text-[#ff94d3]">
                  Evergreen Assurance
                </div>
                <h3 className="mt-6 text-3xl font-semibold text-white">Disclaimer</h3>
                <p className="mt-6 text-base leading-[1.85] text-[#e5e5f1]">
                  Asifaa is a trusted escort agency in Bangalore providing high profile Bangalore escorts in various categories. We provide direct hand cash payment call girls for 24×7 escort service in Bangalore. You can browse our live chat for a low cost deal on the call girl service in and around Bangalore.
                </p>
                <p className="mt-4 text-base leading-[1.85] text-[#e5e5f1]">
                  Our pricing starts at INR 20K onwards. On our adult exclusive website, you will find vast types of female escorts in Bangalore more so not including Russians, models, college girls, celebrity escorts, mature housewives, and much more! Plus, your privacy is always secured with us!
                </p>

                <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                  <motion.div
                    className="relative overflow-hidden rounded-[26px] border border-white/10 bg-gradient-to-br from-[#11111a] to-[#19192c] p-8"
                    {...fadeUp}
                    transition={{ ...fadeUp.transition, delay: 0.08 }}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,0,128,0.15),transparent_70%)]" />
                    <div className="relative">
                      <h4 className="text-lg font-semibold text-white">What We Guarantee</h4>
                      <ul className="mt-4 space-y-3 text-sm text-[#d8d8eb]">
                        <li className="flex items-start gap-3">
                          <span className="mt-1 h-2 w-2 rounded-full bg-[#ff8ad7]" />
                          Direct hand cash payments accepted 24×7 for your convenience.
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-1 h-2 w-2 rounded-full bg-[#ffd87c]" />
                          Verified companions from college graduates to celebrity muses.
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-1 h-2 w-2 rounded-full bg-[#72f1ff]" />
                          Privacy-first bookings with encrypted chats and discreet arrivals.
                        </li>
                      </ul>
                    </div>
                  </motion.div>

                  <motion.div
                    className="relative overflow-hidden rounded-[26px] border border-white/10"
                    {...imageReveal}
                    transition={{ ...imageReveal.transition, duration: 0.5, delay: 0.12 }}
                  >
                    <Image
                      src="/images/WhatsApp Image 2025-11-06 at 9.05.40 PM.jpeg"
                      alt="Hotel interiors"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-[0.7rem] uppercase tracking-[0.35em] text-white">
                      Hotel Interiors
                    </div>
                  </motion.div>
                </div>
                <motion.div
                  className="mt-6 relative overflow-hidden rounded-[26px] border border-white/10"
                  {...imageReveal}
                  transition={{ ...imageReveal.transition, duration: 0.5, delay: 0.18 }}
                >
                  <Image
                    src="/images/WhatsApp Image 2025-11-06 at 9.05.41 PM.jpeg"
                    alt="City skyline"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-[0.7rem] uppercase tracking-[0.35em] text-white">
                    City Skyline
                  </div>
                </motion.div>

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  {[
                    {
                      title: 'Transparent Pricing',
                      detail: 'Packages start at INR 20K with no surprise add-ons.'
                    },
                    {
                      title: 'Trusted Privacy',
                      detail: 'Encrypted chats and discreet arrivals keep every plan confidential.'
                    },
                    {
                      title: '24×7 Host Support',
                      detail: 'Reach a personal concierge anytime for bookings or changes.'
                    }
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[20px] border border-white/10 bg-white/5 px-5 py-4 text-left text-sm text-[#eaeaf6] backdrop-blur-lg"
                    >
                      <h5 className="text-sm font-semibold text-white">{item.title}</h5>
                      <p className="mt-2 text-[0.8rem] leading-relaxed text-[#d0d0e4]">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col gap-8"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
            >
              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#10101a] to-[#17172a] p-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,128,0.18),transparent_70%)]" />
                <div className="relative">
                  <span className="inline-block rounded-full border border-white/15 bg-white/10 px-4 py-1 text-[0.65rem] uppercase tracking-[0.35em] text-[#ff95d8]">
                    Call Girls
                  </span>
                  <h3 className="mt-5 text-2xl font-semibold text-white">High Class Experiences</h3>
                  <ul className="mt-6 space-y-3 text-sm text-[#d6d6e8]">
                    <li>High Class Call Girls Bangalore</li>
                    <li>Top Call Girls Bangalore</li>
                    <li>Bangalore Call Girls 12K</li>
                    <li>Call Girls in Kamanahalli</li>
                  </ul>
                  <motion.a
                    href="#contact"
                    className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#ff0080] px-7 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-white hover:bg-[#e00072] transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    Call Now
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#10101a] to-[#17172a] p-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,215,0,0.14),transparent_70%)]" />
                <div className="relative flex flex-col gap-10">
                  <div>
                    <span className="inline-block rounded-full border border-white/15 bg-white/10 px-4 py-1 text-[0.65rem] uppercase tracking-[0.35em] text-[#ffdca9]">
                      Other Cities
                    </span>
                    <div className="mt-6 grid gap-3">
                      {[
                        { label: 'Chennai', href: '/chennai-escorts' },
                        { label: 'Goa', href: '/goa-escorts' },
                        { label: 'Bangalore', href: '/bangalore-escort' },
                        { label: 'Pune', href: '/pune-escorts' }
                      ].map((link) => (
                        <Link
                          key={link.label}
                          href={link.href}
                          className="group inline-flex items-center justify-between rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-[#f2f2ff] transition-transform duration-300 hover:-translate-y-1 hover:border-[#ffdca9]/40"
                        >
                          <span>{link.label}</span>
                          <ArrowRight className="h-4 w-4 text-[#ffdca9] transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="inline-block rounded-full border border-white/15 bg-white/10 px-4 py-1 text-[0.65rem] uppercase tracking-[0.35em] text-[#ffe8b5]">
                      Best Selling
                    </span>
                    <div className="mt-6 grid gap-3">
                      {[
                        { label: 'No Broker Escort Bangalore', href: '/no-broker-escort-bangalore' },
                        { label: 'Bangalore Escorts Service', href: '/escorts-service-in-bangalore' },
                        { label: 'Independent Bangalore Escorts', href: '/independent-bangalore-escorts' },
                        { label: 'One Night Stand In Bangalore', href: '/one-night-stand-in-bangalore' },
                        { label: 'Bangalore Sex Guide', href: '/bangalore-sex-guide' },
                        { label: 'Cheap Escorts Bangalore', href: '/cheap-escorts-in-bangalore' }
                      ].map((link) => (
                        <Link
                          key={link.label}
                          href={link.href}
                          className="group inline-flex items-center justify-between rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-[#f2f2ff] transition-transform duration-300 hover:-translate-y-1 hover:border-[#ffe8b5]/45"
                        >
                          <span>{link.label}</span>
                          <ArrowRight className="h-4 w-4 text-[#ffe8b5] transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default MangaloreEscortsView

