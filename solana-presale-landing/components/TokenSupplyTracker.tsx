'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Progress } from "@/components/ui/progress"

const TOTAL_SUPPLY = 1000000000 // 1 billion tokens

export function TokenSupplyTracker() {
  const [circulatingSupply, setCirculatingSupply] = useState(0)
  const [tokensBurned, setTokensBurned] = useState(0)
  const [liquidityPool, setLiquidityPool] = useState(0)

  useEffect(() => {
    // Simulating real-time updates
    const interval = setInterval(() => {
      setCirculatingSupply(Math.floor(Math.random() * 500000000))
      setTokensBurned(Math.floor(Math.random() * 250000000))
      setLiquidityPool(Math.floor(Math.random() * 300000000))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-purple-900/80 backdrop-blur-sm p-6 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <TrackerItem
          title="Circulating Supply"
          value={circulatingSupply}
          total={TOTAL_SUPPLY}
          color="bg-blue-500"
        />
        <TrackerItem
          title="Tokens Burned"
          value={tokensBurned}
          total={TOTAL_SUPPLY}
          color="bg-red-500"
        />
        <TrackerItem
          title="Liquidity Pool"
          value={liquidityPool}
          total={TOTAL_SUPPLY}
          color="bg-green-500"
        />
      </div>
    </div>
  )
}

function TrackerItem({ title, value, total, color }: { title: string; value: number; total: number; color: string }) {
  const percentage = (value / total) * 100

  return (
    <motion.div
      className="bg-purple-800/50 p-4 rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h3 className="text-lg font-bold text-yellow-400 mb-2">{title}</h3>
      <p className="text-2xl font-bold text-white mb-2">
        {value.toLocaleString()} / {total.toLocaleString()}
      </p>
      <Progress value={percentage} className={`h-2 ${color}`} />
      <p className="text-sm text-gray-300 mt-2">{percentage.toFixed(2)}% of total supply</p>
    </motion.div>
  )
}

