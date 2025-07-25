'use client'

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Why Choose <span className="text-primary-600">Curiosity</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another recipe website. We're a community that celebrates 
            the art of cooking and brings people together through food.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Features List */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-primary-100 p-3 rounded-lg flex-shrink-0">
                <span className="text-2xl">📱</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Social Recipe Sharing</h3>
                <p className="text-gray-600">Share your recipes with beautiful photos, get feedback from the community, and build your culinary reputation.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-secondary-100 p-3 rounded-lg flex-shrink-0">
                <span className="text-2xl">🔄</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Recipe Remixing</h3>
                <p className="text-gray-600">Found a great recipe? Add your own twist! Remix existing recipes and share your creative variations.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary-100 p-3 rounded-lg flex-shrink-0">
                <span className="text-2xl">💬</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Interactive Community</h3>
                <p className="text-gray-600">Comment, rate, and discuss recipes. Get cooking tips and share your culinary experiences with others.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-secondary-100 p-3 rounded-lg flex-shrink-0">
                <span className="text-2xl">🔗</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Easy Sharing</h3>
                <p className="text-gray-600">Share recipes as links with friends and family. Perfect for dinner party planning and gift ideas.</p>
              </div>
            </div>
          </div>

          {/* Right - Image Placeholder */}
          <div className="relative">
            <div className="bg-gradient-to-br from-secondary-100 to-primary-100 rounded-3xl p-8">
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                <div className="text-6xl mb-4">🥘</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Features Image</h3>
                <p className="text-gray-600">
                  Add an image showcasing app features<br />
                  <strong>Location:</strong> <code>frontend/public/images/features.jpg</code>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 