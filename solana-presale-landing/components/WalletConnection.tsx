'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { toast } from 'react-hot-toast'
import { connectWallet, disconnectWallet, contributeToPresale } from '@/utils/solana'
import { Wallet, Rocket } from 'lucide-react'

export function WalletConnection() {
  const [walletAddress, setWalletAddress] = useState<string | null>(null)
  const [isContributing, setIsContributing] = useState(false)

  useEffect(() => {
    const checkWalletConnection = async () => {
      if (typeof window !== 'undefined' && 'solana' in window) {
        const address = await connectWallet();
        setWalletAddress(address);
      }
    };
    checkWalletConnection();
  }, []);

  const handleConnect = async () => {
    const address = await connectWallet();
    if (address) {
      setWalletAddress(address);
      toast.success('Wallet Connected! Very Nice! 👌', {
        style: {
          border: '1px solid #713200',
          padding: '16px',
          color: '#713200',
        },
        iconTheme: {
          primary: '#713200',
          secondary: '#FFFAEE',
        },
      });
    } else {
      toast.error('Failed to connect wallet! Sad! 😢', {
        style: {
          border: '1px solid #713200',
          padding: '16px',
          color: '#713200',
        },
        iconTheme: {
          primary: '#713200',
          secondary: '#FFFAEE',
        },
      });
    }
  };

  const handleDisconnect = async () => {
    await disconnectWallet();
    setWalletAddress(null);
    toast.success('Wallet Disconnected! See You Soon! 👋', {
      style: {
        border: '1px solid #713200',
        padding: '16px',
        color: '#713200',
      },
      iconTheme: {
        primary: '#713200',
        secondary: '#FFFAEE',
      },
    });
  };

  const handleContribute = async () => {
    if (!walletAddress) {
      toast.error('No Wallet? That\'s Fake News! Connect First! 😤', {
        style: {
          border: '1px solid #713200',
          padding: '16px',
          color: '#713200',
        },
        iconTheme: {
          primary: '#713200',
          secondary: '#FFFAEE',
        },
      });
      return;
    }

    setIsContributing(true);
    const result = await contributeToPresale(0.1);
    setIsContributing(false);

    if (result.success) {
      toast.success('Tremendous Contribution! The Best! 🎉', {
        style: {
          border: '1px solid #713200',
          padding: '16px',
          color: '#713200',
        },
        iconTheme: {
          primary: '#713200',
          secondary: '#FFFAEE',
        },
      });
    } else {
      toast.error(`Sad! An Error Occurred: ${result.message} 😢`, {
        style: {
          border: '1px solid #713200',
          padding: '16px',
          color: '#713200',
        },
        iconTheme: {
          primary: '#713200',
          secondary: '#FFFAEE',
        },
      });
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4">
      {walletAddress ? (
        <>
          <Button 
            onClick={handleDisconnect}
            className="meme-button bg-red-500 hover:bg-red-600 text-white"
          >
            <Wallet className="w-5 h-5 mr-2" />
            Disconnect
          </Button>
          <Button 
            onClick={handleContribute} 
            disabled={isContributing}
            className="meme-button bg-green-500 hover:bg-green-600 text-white"
          >
            <Rocket className="w-5 h-5 mr-2" />
            {isContributing ? 'Making It Happen...' : 'Send 0.1 SOL!'}
          </Button>
        </>
      ) : (
        <Button 
          onClick={handleConnect}
          className="meme-button bg-yellow-400 hover:bg-yellow-500 text-black"
        >
          <Wallet className="w-5 h-5 mr-2" />
          Connect Wallet
        </Button>
      )}
    </div>
  )
}

