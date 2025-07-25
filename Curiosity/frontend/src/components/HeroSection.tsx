'use client'

import { Brain, Lightbulb, Users, BookOpen, Sparkles, Zap } from 'lucide-react'
import Image from 'next/image'

export default function HeroSection() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Learning",
      description: "Discover the 'why' behind every ingredient with intelligent recipe insights"
    },
    {
      icon: Lightbulb,
      title: "Smart Alternatives",
      description: "Missing ingredients? Get AI-suggested alternatives with what you have"
    },
    {
      icon: Users,
      title: "Social Learning",
      description: "Connect with curious cooks and share knowledge about cooking techniques"
    },
    {
      icon: Zap,
      title: "Instant Ingredient Intel",
      description: "Click any ingredient to learn its history, origins, and preparation methods"
    }
  ]

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-accent-cream via-primary-50 to-secondary-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="animate-slide-up">
            <div className="inline-flex items-center bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Brain className="h-4 w-4 mr-2" />
              AI-Powered Culinary Learning Platform
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-600 bg-clip-text text-transparent">
                Curiosity
              </span>
              <br />
              <span className="text-gray-800">
                Learn. Cook. Connect.
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              More than just recipes – <strong>Curiosity</strong> is where cooking meets intelligence. 
              Discover the fascinating stories behind every ingredient, find smart alternatives when 
              your pantry's missing something, and join a community of curious cooks who love to 
              learn the <em>why</em> behind every dish.
            </p>

            <div className="bg-gradient-to-r from-secondary-50 to-primary-50 p-6 rounded-xl mb-8 border-l-4 border-primary-500">
              <p className="text-gray-700 font-medium">
                💡 <strong>Example:</strong> Making Thai Green Curry but no fish sauce? 
                Our AI suggests soy sauce + anchovy paste, explains the umami differences, 
                and links you to homemade fish sauce recipes to satisfy your curiosity!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full hover:from-primary-600 hover:to-primary-700 transition-all duration-300 transform hover:scale-105 shadow-xl text-lg font-semibold">
                Start Learning 🧠
              </button>
              <button className="border-2 border-secondary-500 text-secondary-700 px-8 py-4 rounded-full hover:bg-secondary-50 transition-all duration-300 text-lg font-semibold">
                Explore Recipes
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-600">50K+</div>
                <div className="text-gray-600">Recipe Insights</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary-600">10K+</div>
                <div className="text-gray-600">Ingredient Alternatives</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600">25K+</div>
                <div className="text-gray-600">Curious Learners</div>
              </div>
            </div>
          </div>

          {/* Right Column - LARGER Image Container */}
          <div className="animate-fade-in">
            <div className="relative w-full">
              {/* Main Large Image Container */}
              <div className="bg-gradient-to-br from-primary-400 to-secondary-400 rounded-3xl p-4 shadow-2xl">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                  {/* Large Image Area */}
                  <div className="relative h-96 lg:h-[500px] w-full">
                    <Image
                      src="/images/hero-ai-cooking.png"
                      alt="AI-powered recipe learning interface showing ingredient analysis"
                      fill
                      className="object-cover object-center"
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-secondary-500 text-white p-4 rounded-full shadow-lg animate-bounce-gentle">
                <Brain className="h-7 w-7" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary-500 text-white p-4 rounded-full shadow-lg animate-bounce-gentle" style={{ animationDelay: '1s' }}>
                <Lightbulb className="h-7 w-7" />
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-24 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-to-r from-primary-500 to-secondary-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 