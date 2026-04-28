import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import SectionWrapper from '../components/SectionWrapper';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products');
      if (!response.ok) throw new Error('Failed to fetch products');
      const data = await response.json();
      setProducts(data.slice(0, 4)); // Show only 4 featured products
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-deep-blue via-sky-blue to-soft-blue overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-repeat" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 animate-fade-in">
            Discover the
            <span className="block text-sky-blue mt-2">Essence of Blue</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl mx-auto animate-slide-up">
            Premium fashion inspired by the timeless elegance of the Nile. 
            Experience luxury in every shade of blue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Link to="/products" className="btn-primary bg-white text-deep-blue hover:bg-gray-100">
              Explore Collection
            </Link>
            <button className="btn-secondary border-2 border-white text-white hover:bg-white hover:text-sky-blue">
              View Lookbook
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce-slow">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Featured Products */}
      <SectionWrapper 
        title="Featured Collection"
        subtitle="Handpicked pieces from our latest collection"
        className="bg-white"
      >
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gray-200 h-64 animate-pulse" />
                <div className="p-4">
                  <div className="bg-gray-200 h-4 rounded mb-2 animate-pulse" />
                  <div className="bg-gray-200 h-4 rounded w-3/4 animate-pulse" />
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
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Link to="/products" className="btn-secondary">
            View All Products
          </Link>
        </div>
      </SectionWrapper>

      {/* Brand Story */}
      <SectionWrapper 
        title="Our Story"
        subtitle="Inspired by the timeless flow of the Nile"
        className="bg-soft-blue"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Nile Fashion was born from a deep appreciation for the color blue in all its shades. 
              From the deep waters of the Nile to the vast sky above, blue represents tranquility, 
              confidence, and timeless elegance.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Each piece in our collection is carefully crafted to embody these qualities, 
              bringing you fashion that not only looks exceptional but feels meaningful.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-deep-blue mb-2">500+</div>
                <div className="text-gray-600">Premium Designs</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-sky-blue mb-2">50+</div>
                <div className="text-gray-600">Countries Served</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop"
              alt="Nile Fashion Store"
              className="rounded-xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-deep-blue text-white p-6 rounded-xl shadow-xl">
              <div className="text-2xl font-bold mb-1">Since 2020</div>
              <div className="text-sm">Defining Blue Fashion</div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <section className="bg-deep-blue text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Experience Blue Fashion?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of customers who have discovered their perfect shade of blue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products" className="btn-primary bg-white text-deep-blue hover:bg-gray-100">
              Shop Now
            </Link>
            <Link to="/contact" className="btn-secondary border-2 border-white text-white hover:bg-white hover:text-deep-blue">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
