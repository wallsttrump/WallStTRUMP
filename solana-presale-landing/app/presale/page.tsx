import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Rocket, FlameIcon as Fire, Trophy, Star } from 'lucide-react'
import { WalletConnection } from '@/components/WalletConnection'

export default function PresalePage() {
  return (
    <div className="min-h-screen bg-circles text-white">
      <header className="py-6 px-4 sm:px-6 lg:px-8 backdrop-blur-md border-b border-red-500/20">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/trump.jpg"
              alt="Wall$t TRUMP Logo"
              width={50}
              height={50}
              className="rounded-full border-2 border-yellow-400"
            />
            <span className="text-3xl font-bold gradient-text">
              Wall$t TRUMP
            </span>
          </Link>
          <WalletConnection />
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold meme-text mb-4 gradient-text">
            The YUGE Presale Event
          </h1>
          <p className="text-2xl mb-8 text-yellow-400">
            Don't be a Paper Hand! Join the Movement! 🚀
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="meme-card">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">Why You Should Join NOW!</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <PresaleFeature 
                icon={Rocket}
                title="Early Bird Bonus"
                description="First 1000 investors get 20% extra tokens! It's going to be beautiful!"
              />
              <PresaleFeature 
                icon={Fire}
                title="Deflationary Tokenomics"
                description="We burn tokens like nobody's business! The best burning in crypto!"
              />
              <PresaleFeature 
                icon={Trophy}
                title="Community Rewards"
                description="Huge rewards for diamond hands! The most tremendous rewards ever!"
              />
            </CardContent>
          </Card>

          <Card className="meme-card">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">Presale Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-red-900/20 p-4 rounded-lg border border-yellow-400/50">
                <p className="text-lg mb-2"><span className="text-yellow-400 font-bold">Start Date:</span> January 3rd, 2025</p>
                <p className="text-lg mb-2"><span className="text-yellow-400 font-bold">End Date:</span> February 10th, 2025</p>
                <p className="text-lg mb-2"><span className="text-yellow-400 font-bold">Minimum Buy:</span> 0.1 SOL</p>
                <p className="text-lg mb-2"><span className="text-yellow-400 font-bold">Maximum Buy:</span> 50 SOL</p>
                <p className="text-lg"><span className="text-yellow-400 font-bold">Token Price:</span> 1 SOL = 1,000,000 W$TRUMP</p>
              </div>
              <div className="text-center mt-6">
                <p className="text-sm text-yellow-400 animate-pulse">
                  🔥 Early Bird Bonus Active Now! 🔥
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="meme-card mb-12">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">The Most Tremendous Roadmap</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <RoadmapItem 
                phase="Phase 1"
                title="The Launch"
                description="The biggest, most beautiful token launch in history! Nobody launches better than us!"
                icon={Star}
              />
              <RoadmapItem 
                phase="Phase 2"
                title="Exchange Listings"
                description="We're going to be on all the best exchanges, and they're going to pay for it!"
                icon={Rocket}
              />
              <RoadmapItem 
                phase="Phase 3"
                title="Market Domination"
                description="We're going to make crypto great again! Believe me!"
                icon={Trophy}
              />
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="border-t border-red-500/20 py-8 backdrop-blur-md">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-400">
            &copy; 2025 Wall$t TRUMP. Making Crypto Great Again! 🇺🇸
          </p>
        </div>
      </footer>
    </div>
  )
}

function PresaleFeature({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 to-red-500 flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-black" />
      </div>
      <div>
        <h3 className="font-bold text-lg text-yellow-400">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  )
}

function RoadmapItem({ phase, title, description, icon: Icon }: { phase: string, title: string, description: string, icon: any }) {
  return (
    <div className="flex items-start gap-4 bg-red-900/20 p-4 rounded-lg border border-yellow-400/50">
      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-red-500 flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6 text-black" />
      </div>
      <div>
        <h3 className="font-bold text-xl text-yellow-400">{phase} - {title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  )
}

