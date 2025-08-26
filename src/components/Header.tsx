import React, { useState } from 'react';
import { ShoppingCart, Fish, Waves } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { Cart } from './Cart';

export const Header = () => {
  const { getTotalItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  console.log('Header rendered, total items in cart:', getTotalItems());

  return (
    <>
      <header className="bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <Fish className="h-8 w-8" />
                <Waves className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">AquaMarina</h1>
                <p className="text-blue-100 text-sm">Peces Tropicales & Focas</p>
              </div>
            </div>
            
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold">
                  {getTotalItems()}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>
      
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};