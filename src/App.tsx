import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { CartSidebar } from './components/CartSidebar';
import { Features } from './components/Features';
import { products } from './data/products';
import { Product, CartItem } from './types';
import { Leaf, Phone, Mail, Instagram, Facebook, MapPin } from 'lucide-react';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(0, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const removeFromCart = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar 
        cartCount={totalItems} 
        onCartClick={() => setIsCartOpen(true)} 
      />
      
      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
      />

      <main>
        <Hero />
        
        <Features />

        <section id="products" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Fresh Harvest</h2>
              <p className="text-gray-600">Order before 2 PM for same-day delivery in Pune.</p>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-green-600 text-white rounded-full text-sm font-medium">All</button>
              <button className="px-4 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-full text-sm font-medium transition-colors">Leafy</button>
              <button className="px-4 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-full text-sm font-medium transition-colors">Roots</button>
              <button className="px-4 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-full text-sm font-medium transition-colors">Fruits</button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAdd={addToCart} 
              />
            ))}
          </div>
        </section>

        <section className="bg-green-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Are you a Farmer?</h2>
            <p className="text-green-100 max-w-2xl mx-auto mb-8 text-lg">
              Join the MahaFresh network. Get fair prices for your produce and direct access to urban customers without middlemen.
            </p>
            <button className="bg-white text-green-900 px-8 py-3 rounded-lg font-bold hover:bg-green-50 transition-colors">
              Register as Farmer
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-green-600 p-1.5 rounded-lg">
                  <Leaf className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">
                  Maha<span className="text-green-600">Fresh</span>
                </span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Connecting Maharashtra's farmers directly to your kitchen. Fresh, organic, and fair.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-green-600">About Us</a></li>
                <li><a href="#" className="hover:text-green-600">Shop Vegetables</a></li>
                <li><a href="#" className="hover:text-green-600">Our Farmers</a></li>
                <li><a href="#" className="hover:text-green-600">Bulk Orders</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" /> +91 98765 43210
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" /> hello@mahafresh.com
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> Pune, Maharashtra
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {/* Security: rel="noopener noreferrer" prevents reverse tabnabbing attacks on external links */}
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-green-600 transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
            <p>&copy; 2025 MahaFresh Market. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
