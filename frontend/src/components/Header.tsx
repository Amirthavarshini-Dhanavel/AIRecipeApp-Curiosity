'use client'

import { useState } from 'react'
import { ChefHat, Menu, X, User } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-2 rounded-lg">
              <ChefHat className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Curiosity
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Recipes
            </a>
            <a href="#" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Community
            </a>
            <a href="#" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              About
            </a>
          </nav>

          {/* Login Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-2 rounded-full hover:from-primary-600 hover:to-primary-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>Login</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
                Recipes
              </a>
              <a href="#" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
                Community
              </a>
              <a href="#" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
                About
              </a>
              <button className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-2 rounded-full hover:from-primary-600 hover:to-primary-700 transition-all duration-300 flex items-center justify-center space-x-2 w-full">
                <User className="h-4 w-4" />
                <span>Login</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
} 