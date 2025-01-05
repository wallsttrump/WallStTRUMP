'use client'

import { useState, useEffect } from 'react'

export function PresaleTracker() {
  const [raisedAmount, setRaisedAmount] = useState(136)
  const targetAmount = 1000
  const progress = (raisedAmount / targetAmount) * 100

  useEffect(() => {
    const timer = setInterval(() => {
      setRaisedAmount(prevAmount => {
        const newAmount = prevAmount + Math.random() * 0.1
        return newAmount > targetAmount ? targetAmount : newAmount
      })
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-black bg-opacity-50 rounded-lg overflow-hidden border-4 border-yellow-400 p-8 shadow-neon">
      <h2 className="text-4xl font-bold text-yellow-400 mb-6 font-meme stroke-black text-center">Presale Tracker</h2>
      <div className="mb-6">
        <div className="flex justify-between text-white mb-4 text-xl font-meme">
          <span>Raised: {raisedAmount.toFixed(2)} SOL</span>
          <span>Target: {targetAmount} SOL</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-6 shadow-inner">
          <div
            className="h-full rounded-full bg-gradient-to-r from-yellow-400 to-red-500 shadow-glow"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      <p className="text-white text-center text-2xl font-meme">
        Join now before it's too late! The presale is filling up BIGLY! 🚀💰
      </p>
    </div>
  )
}

