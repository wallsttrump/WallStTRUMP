'use client'

import { Flame, Droplets, Target, Megaphone, Gift, Wrench } from 'lucide-react'

const tokenomics = [
  {
    title: "Burn",
    percentage: 50,
    description: "We're Making W$TRUMP Rare Again!",
    details: "From day one, 50% of the total supply will be burned and sent straight to the void.",
    icon: Flame,
    color: "from-red-600 to-orange-500",
    emoji: "🔥"
  },
  {
    title: "Liquidity",
    percentage: 25,
    description: "Strong Foundation, No Funny Business",
    details: "Locked liquidity ensuring smooth trades and minimizing price volatility.",
    icon: Droplets,
    color: "from-blue-600 to-cyan-500",
    emoji: "💧"
  },
  {
    title: "Presale",
    percentage: 10,
    description: "Buy the Dip Before the Rocket Flips!",
    details: "Exclusive presale for early adopters. Don't miss out!",
    icon: Target,
    color: "from-yellow-500 to-orange-500",
    emoji: "🎯"
  },
  {
    title: "Marketing",
    percentage: 5,
    description: "We Go Big or We Go Home",
    details: "Marketing blitzes, partnerships, and viral meme campaigns.",
    icon: Megaphone,
    color: "from-purple-600 to-pink-500",
    emoji: "📢"
  },
  {
    title: "Community",
    percentage: 5,
    description: "Meme It, Win It",
    details: "Airdrops, contests, and rewards for our tremendous community.",
    icon: Gift,
    color: "from-green-600 to-emerald-500",
    emoji: "🎉"
  },
  {
    title: "Development",
    percentage: 5,
    description: "Building the Next Meme Dynasty",
    details: "Continual upgrades and new features for the W$TRUMP empire.",
    icon: Wrench,
    color: "from-indigo-600 to-blue-500",
    emoji: "🛠️"
  }
]

export function TokenomicsSection() {
  return (
    <div className="py-16 px-4 bg-gradient-to-b from-red-900 to-purple-900">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
          W$TRUMP Tokenomics
        </h2>
        <p className="text-xl text-white">
          The Most Tremendous Token Distribution in the History of Crypto! 👑
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {tokenomics.map((item) => (
          <div
            key={item.title}
            className="bg-black bg-opacity-50 rounded-lg overflow-hidden border-2 border-yellow-400"
          >
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-yellow-400">
                    {item.emoji} {item.title}
                  </h3>
                  <p className="text-3xl font-bold text-white">
                    {item.percentage}%
                  </p>
                </div>
              </div>
              
              <div className="space-y-2">
                <p className="text-lg font-bold text-yellow-400">
                  {item.description}
                </p>
                <p className="text-white">
                  {item.details}
                </p>
              </div>

              <div className="mt-4 w-full bg-gray-700 rounded-full h-2">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <div className="inline-block p-6 max-w-2xl mx-auto bg-black bg-opacity-50 rounded-lg border-2 border-yellow-400">
          <p className="text-xl text-yellow-400 mb-4">
            🚀 Total Supply: 8,500,000,000 W$TRUMP
          </p>
          <p className="text-white">
            W$TRUMP isn't your average meme coin—it's a full-blown meme empire. 
            Join us on our mission to meme our way to the moon! 
            The most tremendous tokenomics in the history of crypto! 
            Believe me! 🌕👑🚀
          </p>
        </div>
      </div>
    </div>
  )
}

