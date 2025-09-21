'use client'

import { useState } from 'react'
import { Wallet, BookOpen, Trophy, Coins, Users, Star, ArrowRight, CheckCircle } from 'lucide-react'

export default function Home() {
  const [walletConnected, setWalletConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState('')

  const connectWallet = async () => {
    try {
      if (typeof window !== 'undefined' && (window as any).ethereum) {
        const accounts = await (window as any).ethereum.request({
          method: 'eth_requestAccounts'
        })
        
        if (accounts.length > 0) {
          setWalletAddress(accounts[0])
          setWalletConnected(true)
        }
      } else {
        alert('Por favor instala MetaMask para conectar tu wallet')
      }
    } catch (error) {
      console.error('Error conectando wallet:', error)
      alert('Error al conectar la wallet')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <nav className="p-6 backdrop-blur-sm bg-black/10">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl flex items-center justify-center shadow-lg">
              <BookOpen className="w-7 h-7 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold text-white">EduPass</span>
              <div className="text-sm text-purple-300 font-medium">EDUX Token</div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Características</a>
            <a href="#tokenomics" className="text-gray-300 hover:text-white transition-colors">Tokenomics</a>
          </div>

          <div>
            {walletConnected ? (
              <div className="bg-green-600/20 border border-green-500 text-green-400 px-6 py-3 rounded-xl flex items-center space-x-3 backdrop-blur-sm">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">{walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}</span>
              </div>
            ) : (
              <button 
                onClick={connectWallet}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-xl flex items-center space-x-2 transition-all transform hover:scale-105 shadow-lg"
              >
                <Wallet className="w-5 h-5" />
                <span className="font-semibold">Conectar Wallet</span>
              </button>
            )}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
            EduPass
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 mt-2">
              EDUX
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            La primera plataforma educativa descentralizada donde puedes aprender, 
            certificarte y ganar tokens EDUX. Únete a la revolución de la educación Web3.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-10 py-4 rounded-2xl text-lg font-bold transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center space-x-3">
              <BookOpen className="w-6 h-6" />
              <span>Explorar Cursos</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">100M</div>
              <div className="text-sm text-gray-400">Tokens EDUX</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">10K+</div>
              <div className="text-sm text-gray-400">Estudiantes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-sm text-gray-400">Cursos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-sm text-gray-400">Satisfacción</div>
            </div>
          </div>
        </div>

        <section id="tokenomics" className="mb-24">
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">Tokenomics EDUX</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Detalles Técnicos</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl">
                    <span className="text-gray-300">Nombre:</span>
                    <span className="text-white font-bold">EduPass</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl">
                    <span className="text-gray-300">Símbolo:</span>
                    <span className="text-white font-bold">EDUX</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl">
                    <span className="text-gray-300">Red:</span>
                    <span className="text-white font-bold">Polygon</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Distribución</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
                    <span className="text-gray-300">Airdrops</span>
                    <span className="text-purple-400 font-bold">40%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-pink-500/10 rounded-xl border border-pink-500/20">
                    <span className="text-gray-300">Staking</span>
                    <span className="text-pink-400 font-bold">30%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
