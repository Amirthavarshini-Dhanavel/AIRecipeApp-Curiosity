'use client'

import Image from 'next/image'

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Why <span className="text-primary-600">Curiosity</span> is Different
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            We believe cooking is more than following instructions. It's about understanding 
            ingredients, learning techniques, and satisfying your culinary curiosity with 
            AI-powered insights that make you a smarter cook.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left - Features List */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-primary-100 p-3 rounded-lg flex-shrink-0">
                <span className="text-2xl">🧠</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">AI-Powered Ingredient Intelligence</h3>
                <p className="text-gray-600">
                  Click on "sumac" in a Middle Eastern recipe and instantly learn its tangy flavor profile, 
                  how it's harvested, and traditional uses. Every ingredient becomes a doorway to culinary knowledge.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-secondary-100 p-3 rounded-lg flex-shrink-0">
                <span className="text-2xl">🔄</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Smart Ingredient Alternatives</h3>
                <p className="text-gray-600">
                  No lemongrass for Thai curry? Our AI suggests lime zest + ginger. Missing masa harina for Mexican tortillas? 
                  Try corn flour + lime juice. Cook any cuisine with ingredients you have.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary-100 p-3 rounded-lg flex-shrink-0">
                <span className="text-2xl">📚</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Deep Culinary Learning</h3>
                <p className="text-gray-600">
                  Discover why Indian garam masala varies by region, how French herbs de Provence got its name, 
                  or the science behind perfect Italian pasta water. Turn every meal into a learning experience.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-secondary-100 p-3 rounded-lg flex-shrink-0">
                <span className="text-2xl">👥</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Global Learning Community</h3>
                <p className="text-gray-600">
                  Connect with home cooks from Mexico sharing mole secrets, Italian nonnas discussing pasta techniques, 
                  and Thai cooks explaining curry paste nuances. Learn from authentic voices worldwide.
                </p>
              </div>
            </div>
          </div>

          {/* Right - LARGER Image Container */}
          <div className="relative">
            <div className="bg-gradient-to-br from-secondary-100 to-primary-100 rounded-3xl p-4 shadow-xl">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                {/* Large Features Image Area */}
                <div className="relative h-80 lg:h-96 w-full">
                  <Image
                    src="/images/ai-ingredient-analysis.png"
                    alt="AI analyzing diverse global ingredients and providing smart alternatives"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>

            {/* Larger Example Cards Floating Around */}
            <div className="absolute -top-8 -right-8 bg-white rounded-xl shadow-lg p-4 text-sm max-w-56 border-l-4 border-primary-500">
              <div className="font-semibold text-primary-600 mb-1">💡 Smart Tip</div>
              <div className="text-gray-600">No saffron? Try turmeric + paprika for color and a hint of the earthy flavor!</div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-lg p-4 text-sm max-w-56 border-l-4 border-secondary-500">
              <div className="font-semibold text-secondary-600 mb-1">🌍 Fun Fact</div>
              <div className="text-gray-600">Za'atar blend varies across the Middle East - Lebanese versions often include sumac!</div>
            </div>
          </div>
        </div>

        {/* Value Proposition Section */}
        <div className="mt-20 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              From "What's This Ingredient?" to "I Want to Learn More!"
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl mb-3">🤔</div>
                <h4 className="font-semibold text-gray-800 mb-2">Curious Beginner</h4>
                <p className="text-gray-600">What's cardamom? Learn about this fragrant spice's origins in Guatemala and its uses across cuisines!</p>
              </div>
              <div>
                <div className="text-4xl mb-3">🍳</div>
                <h4 className="font-semibold text-gray-800 mb-2">Home Cook</h4>
                <p className="text-gray-600">Making paella but no bomba rice? Discover why arborio works and how to adjust your technique.</p>
              </div>
              <div>
                <div className="text-4xl mb-3">👨‍🍳</div>
                <h4 className="font-semibold text-gray-800 mb-2">Culinary Explorer</h4>
                <p className="text-gray-600">Deep dive into fermentation science behind kimchi, the terroir of Parmigiano-Reggiano, or miso aging.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Global Cuisine Showcase */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Explore Ingredients from <span className="text-primary-600">Every Corner</span> of the World
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { flag: "🇮🇹", cuisine: "Italian", ingredient: "San Marzano" },
              { flag: "🇹🇭", cuisine: "Thai", ingredient: "Galangal" },
              { flag: "🇲🇽", cuisine: "Mexican", ingredient: "Epazote" },
              { flag: "🇮🇳", cuisine: "Indian", ingredient: "Asafoetida" },
              { flag: "🇯🇵", cuisine: "Japanese", ingredient: "Mirin" },
              { flag: "🇲🇦", cuisine: "Moroccan", ingredient: "Preserved Lemon" }
            ].map((item, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">{item.flag}</div>
                <div className="font-semibold text-gray-800">{item.cuisine}</div>
                <div className="text-sm text-gray-600">{item.ingredient}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 