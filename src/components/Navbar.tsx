import React from 'react';
import { ShoppingBasket, Menu, X, Leaf } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../utils/cn';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
}

export function Navbar({ cartCount, onCartClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-green-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="bg-green-600 p-1.5 rounded-lg">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">
              Maha<span className="text-green-600">Fresh</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-green-600 transition-colors font-medium">Home</a>
            <a href="#products" className="text-gray-600 hover:text-green-600 transition-colors font-medium">Shop</a>
            <a href="#farmers" className="text-gray-600 hover:text-green-600 transition-colors font-medium">Our Farmers</a>
            <a href="#about" className="text-gray-600 hover:text-green-600 transition-colors font-medium">About</a>
            
            <button 
              onClick={onCartClick}
              className="relative p-2 hover:bg-green-50 rounded-full transition-colors group"
            >
              <ShoppingBasket className="h-6 w-6 text-gray-700 group-hover:text-green-600" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={onCartClick}
              className="relative p-2"
            >
              <ShoppingBasket className="h-6 w-6 text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              <a href="#home" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md">Home</a>
              <a href="#products" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md">Shop</a>
              <a href="#farmers" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md">Our Farmers</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md">About</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
