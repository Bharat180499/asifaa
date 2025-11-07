'use client'

import React, { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'

type HeroProps = {
  eyebrow?: string
  heading?: string
  dynamicWords?: string[]
  locationLine?: string
  description?: string
  cta?: {
    label: string
    href?: string
  }
}

const Hero = ({
  eyebrow = "It's My Pleasure!",
  heading = 'Bangalore Escorts',
  dynamicWords,
  locationLine = 'In Bangalore',
  description = 'A personal portfolio is a collection of your work, achievements, and skills that highlights your abilities and professional growth. It serves as a visual representation of your expertise and helps potential clients or employers understand what you can offer.',
  cta
}: HeroProps) => {
  const typewriterTexts = useMemo(() => {
    if (dynamicWords && dynamicWords.length > 0) {
      return dynamicWords
    }

    return [
      'Bangalore Escorts',
      'Independent Escorts',
      'Russian Escorts',
      'VIP Escorts',
      'Model Escorts',
      'High Class Escorts'
    ]
  }, [dynamicWords])

  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const currentText = typewriterTexts[currentIndex]
    let timeout: NodeJS.Timeout | undefined
    
    if (!isDeleting) {
      // Smooth continuous typing
      if (charIndex < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.substring(0, charIndex + 1))
          setCharIndex(charIndex + 1)
        }, 80) // Smooth typing speed
      } else {
        // All text typed, wait before deleting
        timeout = setTimeout(() => setIsDeleting(true), 2000)
      }
    } else {
      // Smooth continuous deleting
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.substring(0, charIndex - 1))
          setCharIndex(charIndex - 1)
        }, 40) // Faster deletion for smooth transition
      } else {
        // All text deleted, smoothly move to next text
        setIsDeleting(false)
        const nextIndex = (currentIndex + 1) % typewriterTexts.length
        setCurrentIndex(nextIndex)
        setCharIndex(0)
        setDisplayText('')
      }
    }

    return () => {
      if (timeout) clearTimeout(timeout)
    }
  }, [charIndex, isDeleting, currentIndex])

  return (
    <section 
      className="min-h-screen flex items-center py-[120px] px-0 lg:py-[120px] lg:px-0 md:py-20 relative bg-cover bg-center bg-no-repeat bg-fixed overflow-hidden"
    >
      {/* Mobile Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed md:hidden"
        style={{
          backgroundImage: 'url(/images/ff.jpg)'
        }}
      />
      
      {/* Desktop Background */}
      <div 
        className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: 'url(/images/hz.jpg)'
        }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      
      <div className="max-w-[1400px] mx-auto px-8 w-full relative z-10">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm text-[#ff84c2] uppercase tracking-[0.4em] mb-6 font-semibold">
              {eyebrow}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-white mb-2 leading-tight tracking-[-0.5px]">
              {heading}
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-[3.5rem] font-bold mb-6 flex items-center min-h-[4.5rem] tracking-[-0.5px] overflow-hidden">
              <motion.span
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="text-[#ff0080] inline-block"
              >
                {displayText}
              </motion.span>
              <motion.span
                className="text-[#ff0080] animate-blink ml-1 font-light text-[3.5rem] inline-block"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              >
                |
              </motion.span>
            </h2>
            <h3 className="text-2xl md:text-3xl lg:text-[2.5rem] font-semibold text-white mb-8 tracking-[-0.5px]">
              {locationLine}
            </h3>
            <p className="text-base text-[#e0e0e0] leading-[1.8] mb-10 max-w-[600px] font-normal">
              {description}
            </p>
            {cta ? (
              <motion.a
                href={cta.href ?? '#contact'}
                className="inline-flex items-center justify-center gap-3 px-8 py-3 rounded-full bg-[#ff0080] text-white text-sm font-semibold tracking-[0.08em] uppercase hover:bg-[#e00072] transition-colors"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                {cta.label}
              </motion.a>
            ) : null}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero

