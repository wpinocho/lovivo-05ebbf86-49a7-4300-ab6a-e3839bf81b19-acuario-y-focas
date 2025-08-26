import React, { useState, useMemo } from 'react';
import { Header } from '../components/Header';
import { ProductCard } from '../components/ProductCard';
import { ProductFilters } from '../components/ProductFilters';
import { CartProvider } from '../contexts/CartContext';
import { products } from '../data/products';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'fish' | 'seal'>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  console.log('Index page rendered, selected category:', selectedCategory);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') {
      return products;
    }
    return products.filter(product => product.category === selectedCategory);
  }, [selectedCategory]);

  console.log('Filtered products:', filteredProducts.length);

  return (
    <CartProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Bienvenido a AquaMarina
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Descubre nuestra increíble colección de peces tropicales y adorables focas. 
              Todo lo que necesitas para crear tu acuario perfecto.
            </p>
          </div>

          {/* Filters */}
          <ProductFilters
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
          />

          {/* Products Grid */}
          <div className={`${
            viewMode === 'grid' 
              ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
              : 'space-y-4'
          }`}>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No se encontraron productos en esta categoría.
              </p>
            </div>
          )}

          {/* Footer */}
          <footer className="mt-16 text-center text-gray-600">
            <div className="border-t pt-8">
              <p className="mb-2">© 2024 AquaMarina - Tienda de Peces Tropicales y Focas</p>
              <p className="text-sm">Creando experiencias acuáticas únicas desde 2024</p>
            </div>
          </footer>
        </main>
      </div>
    </CartProvider>
  );
};

export default Index;