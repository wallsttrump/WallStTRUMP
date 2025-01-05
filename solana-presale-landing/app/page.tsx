import Link from 'next/link'
import Image from 'next/image'
import { WalletConnection } from '@/components/WalletConnection'
import { PresaleTracker } from '@/components/PresaleTracker'
import { Rocket, Star, Trophy, FlameIcon as Fire } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-600 via-purple-600 to-blue-600 text-white">
      <header className="py-6 px-4 sm:px-6 lg:px-8 bg-black bg-opacity-50">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.jpg-iblcPfKuZxuVSPNSbfIo4h8IiDlyrh.jpeg"
              alt="Wall$t TRUMP Logo"
              width={100}
              height={100}
              className="rounded-full border-4 border-yellow-400 shadow-glow"
            />
            <span className="text-4xl font-bold text-yellow-400 font-meme">
              Wall$t TRUMP
            </span>
          </Link>
          <WalletConnection />
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-16 relative">
          <div className="mb-8">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full animate-pulse"></div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.jpg-iblcPfKuZxuVSPNSbfIo4h8IiDlyrh.jpeg"
                alt="Wall$t TRUMP Meme"
                width={400}
                height={400}
                className="relative rounded-full border-8 border-yellow-400 shadow-glow transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="mt-4 text-xl font-meme text-yellow-400">
              100% Not From China 🚫🇨🇳
            </div>
          </div>
          <div className="bg-black bg-opacity-50 rounded-lg p-8 border-4 border-yellow-400 shadow-neon">
            <h1 className="text-6xl font-bold text-yellow-400 mb-4 font-meme stroke-black">
              The Most TREMENDOUS Token
            </h1>
            <p className="text-3xl mb-8 text-white font-meme">
              We're Going to Make Crypto Great Again! 🚀🇺🇸💰
            </p>
            
            <Link 
              href="/presale" 
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-full text-2xl inline-block font-meme transform hover:scale-105 transition-transform duration-200 shadow-neon"
            >
              Join The YUGE Presale Now!
            </Link>
          </div>
        </div>

        <div className="mb-16">
          <PresaleTracker />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <FeatureCard 
            icon={Rocket}
            title="To The Moon!"
            description="We have the best rockets, nobody has better rockets than us!"
          />
          <FeatureCard 
            icon={Star}
            title="Tremendous Gains"
            description="We're going to win so much, you'll get tired of winning!"
          />
          <FeatureCard 
            icon={Trophy}
            title="Victory Secured"
            description="This is going to be the biggest victory in crypto history, folks!"
          />
          <FeatureCard 
            icon={Fire}
            title="Hot Token"
            description="This token is on fire, and it's going to be YUGE!"
          />
        </div>

        <div className="text-center mt-16">
          <h2 className="text-5xl font-bold text-yellow-400 mb-8 font-meme stroke-black">
            Don't Miss Out on the BIGGEST Token Launch in History!
          </h2>
          <div className="max-w-3xl mx-auto bg-black bg-opacity-50 p-8 rounded-lg border-4 border-yellow-400 shadow-neon">
            <p className="text-2xl mb-4 text-white font-meme">
              🎉 Early investors get SPECIAL BONUS tokens! 🎉
            </p>
            <p className="text-xl text-yellow-400 font-meme">
              Join now before the paper hands take over!
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-black bg-opacity-50 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg text-yellow-400 font-meme">
            &copy; 2025 Wall$t TRUMP. Making Crypto Great Again! 🇺🇸💰🚀
          </p>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
  return (
    <div className="bg-black bg-opacity-50 p-6 rounded-lg border-4 border-yellow-400 shadow-neon transform hover:scale-105 transition-transform duration-200">
      <div className="flex flex-col items-center text-center">
        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-yellow-400 to-red-500 flex items-center justify-center mb-4 shadow-glow">
          <Icon className="w-12 h-12 text-black" />
        </div>
        <h3 className="text-2xl font-bold mb-2 text-yellow-400 font-meme">{title}</h3>
        <p className="text-white text-lg">{description}</p>
      </div>
    </div>
  )
}

