'use client'

import { Heart, Users, BookOpen, Sparkles } from 'lucide-react'

export default function HeroSection() {
  const features = [
    {
      icon: BookOpen,
      title: "Share Recipes",
      description: "Upload and share your favorite recipes with the world"
    },
    {
      icon: Users,
      title: "Connect",
      description: "Follow fellow food enthusiasts and discover new flavors"
    },
    {
      icon: Heart,
      title: "Save Favorites",
      description: "Bookmark recipes you love and create your personal cookbook"
    },
    {
      icon: Sparkles,
      title: "Get Inspired",
      description: "Discover trending recipes and culinary innovations"
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="animate-slide-up">
            <div className="inline-flex items-center bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4 mr-2" />
              Welcome to the Future of Recipe Sharing
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-600 bg-clip-text text-transparent">
                Curiosity
              </span>
              <br />
              <span className="text-gray-800">
                Where Recipes Come Alive
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join our vibrant community of food lovers! Share your culinary creations, 
              discover amazing recipes from around the world, and connect with fellow 
              cooking enthusiasts. Every dish tells a story – what's yours?
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full hover:from-primary-600 hover:to-primary-700 transition-all duration-300 transform hover:scale-105 shadow-xl text-lg font-semibold">
                Start Cooking 🍳
              </button>
              <button className="border-2 border-secondary-500 text-secondary-700 px-8 py-4 rounded-full hover:bg-secondary-50 transition-all duration-300 text-lg font-semibold">
                Explore Recipes
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-600">10K+</div>
                <div className="text-gray-600">Recipes</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary-600">5K+</div>
                <div className="text-gray-600">Chefs</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600">50K+</div>
                <div className="text-gray-600">Food Lovers</div>
              </div>
            </div>
          </div>

          {/* Right Column - Image Placeholder */}
          <div className="animate-fade-in">
            <div className="relative">
              {/* Main Image Container */}
              <div className="bg-gradient-to-br from-primary-400 to-secondary-400 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 text-center">
                  <div className="text-6xl mb-4">🍽️</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Hero Image Placeholder</h3>
                  <p className="text-gray-600">
                    Place your main hero image here<br />
                    <strong>Location:</strong> <code>frontend/public/images/hero-food.jpg</code>
                  </p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-secondary-500 text-white p-3 rounded-full shadow-lg animate-bounce-gentle">
                <Heart className="h-6 w-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-primary-500 text-white p-3 rounded-full shadow-lg animate-bounce-gentle" style={{ animationDelay: '1s' }}>
                <BookOpen className="h-6 w-6" />
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