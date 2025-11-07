"use client";

import { useState, useEffect, useRef } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Hero images
  const heroImages = [
    {
      src: "/images/1.jpeg",
      alt: "Modern design workspace",
    },
    {
      src: "/images/2.jpeg",
      alt: "Creative design workspace",
    },
    {
      src: "/images/3.jpeg",
      alt: "Modern technology",
    },
    {
      src: "/images/4.jpeg",
      alt: "Business analytics",
    },
  ];

  return (
    <section
      id="hero-11"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#000] pt-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#33415512_1px,transparent_1px),linear-gradient(to_bottom,#33415512_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Dynamic Image Layout */}
          <div
            className={`relative transition-all duration-1000 delay-300 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Mobile: Dynamic Asymmetric Layout */}
            <div className="lg:hidden relative w-full h-[400px] sm:h-[500px]">
              {/* Large Featured Image - Top Left */}
              <div
                className="absolute top-0 left-0 w-[65%] h-[55%] rounded-2xl overflow-hidden shadow-2xl group transition-all duration-700"
                style={{
                  transitionDelay: "0ms",
                }}
              >
                <img
                  src={heroImages[0].src}
                  alt={heroImages[0].alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Medium Image - Top Right */}
              <div
                className="absolute top-0 right-0 w-[32%] h-[40%] rounded-xl overflow-hidden shadow-xl group transition-all duration-700 delay-100"
                style={{
                  transitionDelay: "100ms",
                }}
              >
                <img
                  src={heroImages[1].src}
                  alt={heroImages[1].alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Medium Image - Middle Right */}
              <div
                className="absolute top-[42%] right-0 w-[32%] h-[35%] rounded-xl overflow-hidden shadow-xl group transition-all duration-700 delay-200"
                style={{
                  transitionDelay: "200ms",
                }}
              >
                <img
                  src={heroImages[2].src}
                  alt={heroImages[2].alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Small Image - Bottom Left */}
              <div
                className="absolute bottom-0 left-[5%] w-[55%] h-[40%] rounded-xl overflow-hidden shadow-xl group transition-all duration-700 delay-300"
                style={{
                  transitionDelay: "300ms",
                }}
              >
                <img
                  src={heroImages[3].src}
                  alt={heroImages[3].alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-2 -right-2 w-16 h-16 bg-purple-200/30 rounded-full blur-2xl -z-10"></div>
              <div className="absolute -bottom-2 -left-2 w-20 h-20 bg-pink-200/30 rounded-full blur-2xl -z-10"></div>
            </div>

            {/* Desktop: Dynamic Asymmetric Layout */}
            <div className="hidden lg:block relative w-full h-[600px] xl:h-[700px]">
              {/* Large Featured Image - Top Left */}
              <div
                className="absolute top-0 left-0 w-[65%] h-[55%] rounded-3xl overflow-hidden shadow-2xl group transition-all duration-700 hover:shadow-purple-500/30 hover:scale-[1.02] hover:-rotate-1 border-4 border-white"
                style={{
                  transitionDelay: "0ms",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img
                  src={heroImages[0].src}
                  alt={heroImages[0].alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </div>

              {/* Medium Image - Top Right */}
              <div
                className="absolute top-0 right-0 w-[32%] h-[40%] rounded-2xl overflow-hidden shadow-xl group transition-all duration-700 delay-100 hover:shadow-pink-500/30 hover:scale-[1.03] hover:rotate-1 border-4 border-white"
                style={{
                  transitionDelay: "100ms",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img
                  src={heroImages[1].src}
                  alt={heroImages[1].alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Medium Image - Middle Right */}
              <div
                className="absolute top-[42%] right-0 w-[32%] h-[35%] rounded-2xl overflow-hidden shadow-xl group transition-all duration-700 delay-200 hover:shadow-blue-500/30 hover:scale-[1.03] hover:-rotate-1 border-4 border-white"
                style={{
                  transitionDelay: "200ms",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img
                  src={heroImages[2].src}
                  alt={heroImages[2].alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Small Image - Bottom Left */}
              <div
                className="absolute bottom-0 left-[5%] w-[55%] h-[40%] rounded-2xl overflow-hidden shadow-xl group transition-all duration-700 delay-300 hover:shadow-purple-500/30 hover:scale-[1.02] hover:rotate-1 border-4 border-white"
                style={{
                  transitionDelay: "300ms",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img
                  src={heroImages[3].src}
                  alt={heroImages[3].alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Enhanced Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-200/40 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-200/40 rounded-full blur-3xl -z-10 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-blue-200/30 rounded-full blur-2xl -z-10"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div
            className={`transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-purple-700/50 rounded-full text-purple-300 text-sm font-medium shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              Bangalore's Finest Selection
            </div>

            {/* Main heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white leading-[1.1] tracking-tight">
              About
              <br />
              <span className="relative inline-block">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-[length:200%_auto] animate-gradient">
                  Asifaa
                </span>
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-purple-500/30 blur-xl -z-10"></span>
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl sm:text-2xl text-slate-300 mb-10 leading-relaxed font-light max-w-xl">
              Asifaa stands as Bangalore's distinguished service provider, curating exceptional experiences for those who appreciate refinement and sophistication. Our carefully selected team brings together grace, intelligence, and professionalism, ensuring every moment reflects the highest standards of quality and care.
            </p>

            {/* Description Content */}
            <div className="space-y-6 mb-8">
              <p className="text-lg text-slate-300 leading-relaxed">
                In the vibrant heart of Bangalore, Asifaa has established itself as the city's most trusted name, where every interaction is crafted with attention to detail and genuine understanding. We recognize that each client seeks something unique, and our approach reflects this understanding through personalized service that adapts to individual preferences and desires.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Our commitment extends beyond mere service delivery. We maintain rigorous standards in selection, ensuring that every member of our team embodies the values that define Asifaa: integrity, respect, and unwavering dedication to creating meaningful connections. Whether you're visiting Bangalore for business engagements or personal leisure, we provide an experience that feels natural, comfortable, and perfectly tailored to your needs.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
              <a
                href="#banner-3"
                className="group relative px-10 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-[length:200%_auto] text-white font-bold rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 animate-gradient"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Begin Your Journey
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 bg-[length:200%_auto] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient"></div>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </a>
              <div className="flex items-center gap-3 text-slate-300">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-900/50">
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="text-sm font-medium">
                  Verified professionals, available around the clock
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-sm text-slate-300">Satisfied Clients</div>
              </div>
              <div className="h-12 w-px bg-slate-700"></div>
              <div>
                <div className="text-3xl font-bold text-white">5.0★</div>
                <div className="text-sm text-slate-300">Client Rating</div>
              </div>
              <div className="h-12 w-px bg-slate-700"></div>
              <div>
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-sm text-slate-300">Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
