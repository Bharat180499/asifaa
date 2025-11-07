'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Lock, Send, DollarSign } from 'lucide-react'
import Hero from '@/components/Hero'
import ImageTextSection from '@/components/ImageTextSection'

const Home = () => {

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      <Hero />
      <ImageTextSection />

      {/* About Me Section */}
      <section className="py-24 bg-[#0f0f0f]">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 items-start">
            <div className="relative">
              <motion.div 
                className="bg-[#1a1a1a] rounded-[20px] py-12 px-8 mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-[5rem] font-black text-white leading-none mb-2">10+</div>
                <div className="flex flex-col gap-1">
                  <span className="text-xl text-white font-semibold">Years Of</span>
                  <span className="text-xl text-white font-semibold">Experience</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-[#1a1a1a] rounded-[20px] p-8 mb-6 flex items-center gap-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Lock className="w-10 h-10 text-[#ff0080]" />
                <div>
                  <h3 className="text-xl text-white mb-1 font-semibold">UI/UX Design</h3>
                  <p className="text-sm text-[#999999] font-normal">241 Projects</p>
                </div>
              </motion.div>

              <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
                <div className="absolute w-[200px] h-[200px] top-[10%] -left-[10%] rounded-full bg-gradient-to-br from-[#ff0080] to-[#ff0066] opacity-30 blur-[60px]"></div>
                <div className="absolute w-[150px] h-[150px] bottom-[20%] -right-[5%] rounded-full bg-gradient-to-br from-[#ff0080] to-[#ff0066] opacity-30 blur-[50px]"></div>
              </div>
            </div>

            <div className="pt-8">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <p className="text-sm text-[#ff0080] uppercase tracking-[2px] mb-4 font-semibold">ABOUT ME</p>
                <h2 className="text-4xl lg:text-[2.5rem] font-bold text-white mb-6 leading-[1.3] tracking-[-0.5px]">Boost Business Strategic Solutions with Us</h2>
                <p className="text-base text-[#e0e0e0] leading-[1.8] mb-8 font-normal">
                  Business consulting consultants provide expert advice and guidance to businesses to help them improve their performance, efficiency, and organizational effectiveness. They analyze current business practices and develop strategic solutions.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <motion.div 
                    className="bg-[#1a1a1a] rounded-[15px] p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-[50px] h-[50px] bg-[rgba(255,0,128,0.2)] rounded-xl flex items-center justify-center mb-4">
                      <Send className="w-6 h-6 text-[#ff0080]" />
                    </div>
                    <h3 className="text-xl text-white mb-2 font-semibold">Business Solutions</h3>
                    <p className="text-sm text-[#999999] leading-[1.6] font-normal">Each one showcases my approach and dedication to detail, creativity, and professional excellence in delivering results.</p>
                  </motion.div>

                  <motion.div 
                    className="bg-[#1a1a1a] rounded-[15px] p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-[50px] h-[50px] bg-[rgba(255,0,128,0.2)] rounded-xl flex items-center justify-center mb-4">
                      <DollarSign className="w-6 h-6 text-[#ff0080]" />
                    </div>
                    <h3 className="text-xl text-white mb-2 font-semibold">Profit Partners</h3>
                    <p className="text-sm text-[#999999] leading-[1.6] font-normal">Business consulting consultants provide expert advice and guidance to businesses to help them improve their performance.</p>
                  </motion.div>
                </div>

                <Link href="/about" className="inline-flex items-center gap-2 text-[#ff0080] no-underline font-semibold text-base transition-all duration-300 hover:text-[#ff0066] hover:translate-x-1">
                  Read More About Me <ArrowRight className="w-[18px] h-[18px]" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Service Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <p className="text-sm text-[#ff0080] uppercase tracking-[2px] mb-4 font-semibold">LATEST SERVICE</p>
                <h2 className="text-4xl lg:text-[2.5rem] font-bold text-white mb-6 leading-[1.3] tracking-[-0.5px]">Inspiring The World One Project</h2>
                <p className="text-base text-[#e0e0e0] leading-[1.8] mb-8 font-normal">
                  Business consulting consultants provide expert advice and guidance to businesses to help them improve their performance, efficiency, and organizational effectiveness.
                </p>

                <div className="mt-8">
                  <motion.div 
                    className="flex gap-6 mb-8 bg-[#1a1a1a] p-6 rounded-[15px]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-3xl font-bold text-[#ff0080] min-w-[60px]">01</div>
                    <div>
                      <h3 className="text-xl text-white mb-2 font-semibold">A Portfolio of Creativity</h3>
                      <p className="text-[0.95rem] text-[#999999] leading-[1.6] font-normal">Showcasing innovative design solutions and creative approaches that transform ideas into exceptional visual experiences.</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex gap-6 mb-8 bg-[#1a1a1a] p-6 rounded-[15px]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-3xl font-bold text-[#ff0080] min-w-[60px]">02</div>
                    <div>
                      <h3 className="text-xl text-white mb-2 font-semibold">My Portfolio of Innovation</h3>
                      <p className="text-[0.95rem] text-[#999999] leading-[1.6] font-normal">Exploring cutting-edge technologies and methodologies that push the boundaries of what's possible in design and development.</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex gap-6 mb-8 bg-[#1a1a1a] p-6 rounded-[15px]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-3xl font-bold text-[#ff0080] min-w-[60px]">03</div>
                    <div>
                      <h3 className="text-xl text-white mb-2 font-semibold">A Showcase of My Projects</h3>
                      <p className="text-[0.95rem] text-[#999999] leading-[1.6] font-normal">Highlighting successful projects that demonstrate expertise, attention to detail, and commitment to delivering outstanding results.</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img src="/images/hero.jpeg" alt="Services" className="w-full h-[500px] object-cover rounded-[20px]" />
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
                <div className="absolute w-[180px] h-[180px] -top-[10%] -right-[5%] rounded-full bg-gradient-to-br from-[#ff0080] to-[#ff0066] opacity-30 blur-[60px]"></div>
                <div className="absolute w-[120px] h-[120px] -bottom-[5%] -left-[5%] rounded-full bg-gradient-to-br from-[#ff0080] to-[#ff0066] opacity-30 blur-[50px]"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home
