'use client'

import { motion } from 'framer-motion'
import { Rocket, Plane, PartyPopper, BarChart2, Moon } from 'lucide-react'

const roadmapSteps = [
  {
    title: "Launch Party",
    description: "A meme-tastic celebration with balloons, confetti, and sick beats!",
    icon: PartyPopper,
    emoji: "🎉"
  },
  {
    title: "Airdrop Campaign",
    description: "Free W$ raining from the sky! Catch them if you can!",
    icon: Plane,
    emoji: "✈️"
  },
  {
    title: "Presale Madness",
    description: "Rocket's fueled up! Last chance to grab your seat to the moon!",
    icon: Rocket,
    emoji: "🚀"
  },
  {
    title: "Exchange Listings",
    description: "W$ takes over the charts! FOMO intensifies!",
    icon: BarChart2,
    emoji: "💹"
  },
  {
    title: "Moon Landing",
    description: "One small step for meme, one giant leap for memekind!",
    icon: Moon,
    emoji: "🌕"
  }
]

export function RoadmapSection() {
  return (
    <div className="py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-circles opacity-50"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold meme-text gradient-text mb-4">
            The Most TREMENDOUS Roadmap
          </h2>
          <p className="text-xl text-yellow-400">
            Buckle up, folks! We're going on a wild ride to the moon! 🚀🌕
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* Golden Road */}
          <div className="absolute top-1/2 left-0 right-0 h-4 bg-gradient-to-r from-yellow-400 to-yellow-600 transform -translate-y-1/2 rounded-full"></div>

          {/* Roadmap Steps */}
          <div className="relative z-10">
            {roadmapSteps.map((step, index) => (
              <motion.div
                key={step.title}
                className="flex items-center mb-16 last:mb-0"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <div className="meme-card p-6 inline-block">
                    <h3 className="text-2xl font-bold text-yellow-400 mb-2">
                      {step.emoji} {step.title}
                    </h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-yellow-500 flex items-center justify-center border-4 border-purple-900">
                    <step.icon className="w-8 h-8 text-purple-900" />
                  </div>
                </div>
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>

          {/* Decorative Elements */}
          <motion.div
            className="absolute top-0 left-0 text-6xl"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            🌟
          </motion.div>
          <motion.div
            className="absolute bottom-0 right-0 text-6xl"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            💫
          </motion.div>
          <motion.div
            className="absolute top-1/4 right-1/4 text-4xl"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            🚀
          </motion.div>
          <motion.div
            className="absolute bottom-1/4 left-1/4 text-4xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            💰
          </motion.div>
        </div>

        <div className="text-center mt-16">
          <div className="meme-card inline-block p-6 max-w-2xl mx-auto">
            <p className="text-xl text-yellow-400 mb-4">
              🚀 Join us on this YUGE journey to crypto greatness! 🚀
            </p>
            <p className="text-gray-300">
              We're not just going to the moon, folks. We're building a tremendous, 
              beautiful Wall$t right there on the lunar surface! It's going to be 
              fantastic, believe me! 🌕🧱💰
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

