import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative pt-24 pb-12 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1595855709940-5776ee45969c?auto=format&fit=crop&q=80&w=2000" 
          alt="Fresh Farm Vegetables" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <MapPin className="h-4 w-4" />
              <span>Delivering across Pune & Mumbai</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Fresh from <span className="text-green-600">Maharashtra's</span> Farms to Your Fork
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Support local farmers and enjoy the freshest organic vegetables. harvested daily from Nashik, Satara, and Pune districts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#products"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 transition-colors shadow-lg shadow-green-600/20"
              >
                Order Fresh Veggies
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#about"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                Learn How It Works
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1000" 
                alt="Farmer holding vegetables" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white font-medium">"We ensure you get the price you deserve."</p>
                <p className="text-green-300 text-sm mt-1">- Ramesh Patil, Farmer from Nashik</p>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl hidden md:block animate-bounce-slow">
              <div className="flex items-center gap-3">
                <div className="bg-yellow-100 p-2 rounded-full">
                  <span className="text-2xl">🚜</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase">Direct Source</p>
                  <p className="text-gray-900 font-bold">100% Organic</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
