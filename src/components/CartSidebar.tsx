import React from 'react';
import { X, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CartItem } from '../types';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: number, delta: number) => void;
  onRemove: (id: number) => void;
}

export function CartSidebar({ isOpen, onClose, items, onUpdateQuantity, onRemove }: CartSidebarProps) {
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <ShoppingBag className="h-5 w-5 text-green-600" />
                Your Basket
              </h2>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X className="h-6 w-6 text-gray-500" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                  <div className="bg-gray-50 p-6 rounded-full">
                    <ShoppingBag className="h-12 w-12 text-gray-300" />
                  </div>
                  <div>
                    <p className="text-lg font-medium text-gray-900">Your basket is empty</p>
                    <p className="text-gray-500 mt-1">Add some fresh veggies to get started!</p>
                  </div>
                  <button 
                    onClick={onClose}
                    className="text-green-600 font-medium hover:underline"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg border border-gray-200">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>{item.name}</h3>
                        <p className="ml-4">₹{item.price * item.quantity}</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">{item.localName} - ₹{item.price}/{item.unit}</p>
                      
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <div className="flex items-center border border-gray-300 rounded-md">
                          <button 
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="p-1 hover:bg-gray-100 px-2"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="px-2 font-medium">{item.quantity}</span>
                          <button 
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="p-1 hover:bg-gray-100 px-2"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>

                        <button 
                          type="button" 
                          onClick={() => onRemove(item.id)}
                          className="font-medium text-red-500 hover:text-red-600"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-gray-100 p-6 bg-gray-50">
                <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
                  <p>Subtotal</p>
                  <p>₹{total}</p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500 mb-6">
                  Shipping and taxes calculated at checkout.
                </p>
                <button
                  className="w-full flex items-center justify-center rounded-lg border border-transparent bg-green-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-700 transition-colors"
                >
                  Checkout
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
