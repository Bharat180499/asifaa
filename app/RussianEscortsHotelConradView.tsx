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

const RussianEscortsHotelConradView = () => {
  return (
    <main className="bg-black text-white">
      <Hero
        locationLine="Russian Escorts In Hotel Conrad"
        description="Our alluring and energetic young Russian Escorts in Hotel Conrad Bangalore will knock you off."
      />

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 space-y-12">
          <motion.div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-start" {...fadeUp}>
            <div className="space-y-5 text-base leading-[1.9] text-[#d9d9e5]">
              <h2 className="text-3xl font-semibold text-[#ffdca9]">Russian Escorts in Hotel Conrad Bangalore</h2>
              <p>
                Our alluring and energetic young <Link href="/russian-escorts-in-hotel-conrad" className="text-[#ff4c82] font-semibold underline-offset-4 hover:underline">Russian Escorts in Hotel Conrad</Link> Bangalore will knock you off. They will move to the relieving music and lick your body from best to the base. You will be in paradise while our young lady unfurls our secret.
              </p>
              <p>
                The minute she begins dropping her garments, you will be on the eleventh sky.
              </p>
              <p>
                The minute she strips you will get your moment salvation. You will never at any point overlook such a staggering and you will esteem these perky minutes until the end of time. The fortune of perfect call young ladies in our Female Escorts in Hotel Conrad Bangalore is enormous. They enable you to have a sweetheart ordeal and a quality time with them. Be it party time or you feel alone call our escort benefit and have a great time and gathering throughout the night.
              </p>
            </div>

            <div className="grid gap-6">
              {['/images/5.jpg', '/images/2.jpeg'].map((src, index) => (
                <div key={src} className="relative h-[260px] overflow-hidden rounded-[28px] border border-white/10">
                  <Image src={src} alt={`Hotel Conrad gallery ${index + 1}`} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 space-y-12">
          <motion.div className="space-y-5 text-base leading-[1.9] text-[#d7d7eb]" {...fadeUp}>
            <p>
              Carry on with a calm life; make the most of your energy for substantial delights. There is no damage in the event that you want to be unified with some delightful Russian Escorts in Hotel Conrad Bangalore. It is splendidly typical for a person to get pulled in to an exquisite young lady. A large portion of the general population, who are not very great looking, couldn’t discover incredible looking young ladies as a buddy.
            </p>
            <p>
              A large portion of the general population don’t have young lady companion for a similar reason. Be that as it may, you can invest quality energy with our delightful Russian Escorts in Hotel Conrad Bangalore and investigate your shrouded insidious propensities.
            </p>
            <p>
                A large portion of our customers say that they have a best and wonderful sexual experience with our <Link href="/" className="text-[#ff4c82] font-semibold underline-offset-4 hover:underline">Bangalore escorts</Link>. We give new wings to your fantasies and wants individuals.
            </p>
            <p>
              We work with enthusiastic and rich women with shaking identities. These escorts young ladies are from an alternate class and you will without a doubt understand this once you get a chance to go through a night with them. Your life gets another turn and you appreciate all your sentimental time with your fantasy call young lady. All your private points of interest will be dealt with entirely secretly. What’s more, you will get a faultless girl from Russian Escorts in Hotel Conrad Bangalore. Their style is one of a kind and best than other Escort in Bangalore.
            </p>
            <p>
              Unwavering quality and customer trust are our qualities and they have made us what we are today. Our escort benefit young ladies are fabulous with lovely eyes and shadowy appearance will take your heart away.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 space-y-12">
          <motion.div className="space-y-5 text-base leading-[1.9] text-[#d6d6e8]" {...fadeUp}>
            <h3 className="text-3xl font-semibold text-[#ffdca9]">New Escorts Girls 2021 at 24/7 Available</h3>
            <p>
              Her moves and provocative voice will help support your sexual want and will change your disposition until the end of time. Our Russian Escorts in Hotel Conrad Bangalore will influence you wild; to will play with you all through this energetic exotic voyage. The peak will be enormous; believe us you will be engaged like anything.
            </p>
            <p>
              Our escorts benefit master women are awesome sexy player and precisely know your adoration spots. They are constantly anxious to serve you in your way. They go the way you need, the way you like infant. You will be hypnotized by the blamelessness and magnificence of such bubbly and lean escort. A few clients like buxom ladies and some like lean young lady with a flawless figure.
            </p>
          </motion.div>

          <motion.div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start" {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.08 }}>
            <div className="relative overflow-hidden rounded-[34px] border border-white/10">
              <Image src="/images/3.jpeg" alt="Hotel Conrad suite" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent" />
            </div>

            <div className="flex flex-wrap gap-3">
              {[{ label: 'Female escorts in Taj Vivanta', href: '/escorts-in-taj-vivanta' }, { label: 'Top Class Girls in Chennai', href: '/top-class-girls-in-chennai' }].map((link) => (
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

export default RussianEscortsHotelConradView


