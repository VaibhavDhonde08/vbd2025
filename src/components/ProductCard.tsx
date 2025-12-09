import React from 'react';
import { Plus, MapPin } from 'lucide-react';
import { Product } from '../types';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
  onAdd: (product: Product) => void;
}

export function ProductCard({ product, onAdd }: ProductCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 overflow-hidden group"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-semibold text-green-700 shadow-sm">
          Fresh
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
            <p className="text-sm text-gray-500 italic">({product.localName})</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold text-green-700">₹{product.price}</p>
            <p className="text-xs text-gray-500">per {product.unit}</p>
          </div>
        </div>

        <div className="flex items-center gap-1 text-xs text-gray-500 mb-4">
          <MapPin className="h-3 w-3" />
          {/* Updated label to "BirthPlace" as requested */}
          <span>BirthPlace: {product.farmerLocation}</span>
        </div>

        <button 
          onClick={() => onAdd(product)}
          className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white py-2.5 rounded-lg hover:bg-green-600 transition-colors font-medium text-sm active:scale-95 transform duration-100"
        >
          <Plus className="h-4 w-4" />
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
}
