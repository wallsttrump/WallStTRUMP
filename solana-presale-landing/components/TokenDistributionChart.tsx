'use client'

import { motion } from 'framer-motion'
import { Flame, Coins, BarChart3, Gem, Users } from 'lucide-react'

const tokenDistribution = [
  { category: 'Burn', percentage: 50, color: '#e74c3c', icon: Flame },
  { category: 'Liquidity', percentage: 30, color: '#3498db', icon: Coins },
  { category: 'Marketing', percentage: 10, color: '#f39c12', icon: BarChart3 },
  { category: 'Staking', percentage: 5, color: '#1abc9c', icon: Gem },
  { category: 'Team', percentage: 5, color: '#9b59b6', icon: Users },
]

export function TokenDistributionChart() {
  return (
    <div className="p-8 bg-purple-900/80 backdrop-blur-sm rounded-lg">
      <h2 className="text-4xl font-bold text-center text-yellow-400 mb-8">
        W$TRUMP Tokenomics
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
        {tokenDistribution.map((item) => (
          <motion.div
            key={item.category}
            className="bg-purple-800/50 p-4 rounded-lg"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: item.color }}
              >
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white">{item.category}</h3>
                <p className="text-yellow-400">{item.percentage}%</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

