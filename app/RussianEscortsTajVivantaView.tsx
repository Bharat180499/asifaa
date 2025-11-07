"use client"

import Hero from '@/components/Hero'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const defaultEase = [0.2, 0.65, 0.3, 1] as const

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: defaultEase },
  viewport: { once: true, amount: 0.25 },
}

const imageReveal = {
  initial: { opacity: 0, scale: 0.98 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: defaultEase },
  viewport: { once: true, amount: 0.3 },
}

const RussianEscortsTajVivantaView = () => {
  return (
    <main className="bg-black text-white">
      <Hero
        locationLine="Russian Escorts in Taj Vivanta Bangalore"
        description="Experience full-bosomed Russian escorts in Taj Vivanta with Priyanka’s team—tantric thrills, luxury venues, and unforgettable nights on MG Road."
      />

      {/* Intro narrative */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 space-y-14">
          <motion.div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start" {...fadeUp}>
            <div className="space-y-5 text-base leading-[1.9] text-[#d9d9e5]">
              <p>
                <Link href="/russian-escorts-in-taj-vivanta" className="text-[#ff4c82] font-semibold underline-offset-4 hover:underline">Russian escorts in Taj Vivanta</Link> Bangalore full bosomed escort in simply holding up to indicate you as quite a bit of their dazzling figure as you need to see. How you approach making the most of their bends is completely up to you. For admirers of firm bosoms, super well-endowed escorts or normally peppy boobs, we have the best determination of <Link href="/" className="text-[#ff4c82] font-semibold underline-offset-4 hover:underline">escorts in Bangalore</Link> who are accessible now to ponder to each need. Our well-endowed women are up for a night of diversion in the city, regardless of whether that includes being gone out on the town or getting a charge out of somebody on-one treatment.
              </p>
              <p>
                Similarly, huge numbers of our well-proportioned escorts love treating their customers to erotic back rubs, completely dressed or something else, to enable them to unwind and loosen up. Accessible for in all intents and purposes all city areas, from Sarjapur to Whitefield and Koramangala to Jayanagar.
              </p>
            </div>

            <motion.div className="grid gap-6 md:grid-cols-2" {...imageReveal}>
              {['/images/hero.jpeg', '/images/5.jpg', '/images/4.jpeg', '/images/3.jpeg'].map((src, index) => (
                <div key={src} className="relative h-48 overflow-hidden rounded-[28px] border border-white/10">
                  <Image src={src} alt={`Russian escorts Taj Vivanta ${index + 1}`} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/45 to-black/80" />
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div className="rounded-[34px] border border-white/10 bg-gradient-to-br from-[#101018] via-[#15152a] to-[#1b1b33] p-10 shadow-[0_30px_90px_rgba(0,0,0,0.55)]" {...fadeUp}>
            <h2 className="text-3xl font-semibold text-[#ffdca9] uppercase tracking-[0.1em]">Amazing girls for fun</h2>
            <div className="mt-6 space-y-5 text-base leading-[1.9] text-[#d8d8eb]">
              <p>
                <span className="text-[#ff4c82] font-semibold">Russian escorts in Taj Vivanta</span> Bangalore are accessible for in calls and outcalls at day and evening. This exhibition offers you a look into the sheer scope of buxom women in Bangalore on offer from our set up office. Call today to book your escorting knowledge.
              </p>
              <p>
                Do Asifaa loves truly have a ton of fun than brunettes? Do noble men want to be in the organization of Asifaa love Celebrity Russian escorts in Taj Vivanta Bangalore?
              </p>
              <p>
                Whatever we can state is that our exhibition of Bangalore escorts in Bangalore ought to be sufficient to enable you to influence your brain up to. A standout amongst the most well-known and effective dreams of female magnificence is a blonde blue-peered toward, blonde haired shapely woman.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience section */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 space-y-16">
          <motion.div className="space-y-5 text-base leading-[1.9] text-[#d6d6e8]" {...fadeUp}>
            <h3 className="text-3xl font-semibold text-[#ffdca9]">Russian escorts in Taj Vivanta …Never Ever Experienced in your life</h3>
            <p>
              With such a significant number <span className="text-[#ff4c82] font-semibold">Russian escorts in Taj Vivanta Bangalore</span>, it’s unquestionably difficult to settle on a choice. One thing’s without a doubt, however – among all their impressive abilities, every one of these Young ladies stunners are specialists in three specific zones. Right off the bat, they are remarkably certain about their amble bodies and love demonstrating them off at each open door.
            </p>
            <p>
              Two, they have sharp personalities and love nothing superior to participating in discussion. Three, they have a magnificent comical inclination that will add a red hot start to any encounter. All of our Young Russian escorts in Taj Vivanta Bangalore are accessible for in call and outcall arrangements. What might you want to do with one of our Young ladies marvels?
            </p>
          </motion.div>

          <motion.div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-start" {...fadeUp}>
            <div className="space-y-5 text-base leading-[1.9] text-[#d7d7eb]">
              <p>
                Maybe you’re searching for an energetic night on the town, a night of fine feasting or a night of drinking and moving in your lodging room. Whatever you want might be, we have a determination of carefree, certain and excellent Young ladies’ escorts to keep you engaged.
              </p>
            </div>

            <motion.div className="relative overflow-hidden rounded-[34px] border border-white/10 h-64" {...imageReveal}>
              <Image src="/images/6.avif" alt="Taj Vivanta evening" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
            </motion.div>
          </motion.div>

          <motion.div className="space-y-3" {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.08 }}>
            <p className="text-sm uppercase tracking-[0.35em] text-[#ff4c82]">Read More:</p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Taj Vivanta Escorts', href: '/escorts-in-taj-vivanta' },
                { label: 'Independent Escorts in TNagar', href: '/escort-girls-in-t-nagar' },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-2 text-xs uppercase tracking-[0.3em] text-[#ffb6de] transition-colors hover:bg-white/15"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default RussianEscortsTajVivantaView


