import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import SectionWrapper from '../components/SectionWrapper';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products');
      if (!response.ok) throw new Error('Failed to fetch products');
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const categories = ['all', 'jackets', 'shirts', 'dresses', 'jeans', 'tops', 'trousers', 'sweaters', 'accessories'];
  
  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(product => product.category === filter);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-deep-blue to-sky-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Our Collection
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Discover our complete range of premium blue fashion pieces
          </p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="bg-white shadow-sm sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-600">Filter:</span>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setFilter(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      filter === category
                        ? 'bg-deep-blue text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            <div className="text-sm text-gray-600">
              {filteredProducts.length} products
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <SectionWrapper className="bg-gray-50">
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gray-200 h-64 animate-pulse" />
                <div className="p-4">
                  <div className="bg-gray-200 h-4 rounded mb-2 animate-pulse" />
                  <div className="bg-gray-200 h-4 rounded w-3/4 animate-pulse" />
                  <div className="bg-gray-200 h-6 rounded w-1/2 mt-3 animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-500 text-lg">Error loading products: {error}</p>
            <button 
              onClick={fetchProducts}
              className="btn-primary mt-4"
            >
              Try Again
            </button>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found in this category.</p>
            <button 
              onClick={() => setFilter('all')}
              className="btn-secondary mt-4"
            >
              View All Products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </SectionWrapper>
    </div>
  );
};

export default Products;
