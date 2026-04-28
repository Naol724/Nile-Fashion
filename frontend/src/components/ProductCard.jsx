import { useState } from 'react';

const ProductCard = ({ product }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden card-hover cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-w-3 aspect-h-4 bg-gray-100">
        {/* Loading skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
        
        {/* Product image */}
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-64 object-cover transition-all duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          } ${isHovered ? 'scale-110' : 'scale-100'}`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Hover overlay */}
        <div className={`absolute inset-0 bg-black bg-opacity-0 transition-all duration-300 flex items-center justify-center ${
          isHovered ? 'bg-opacity-20' : ''
        }`}>
          <button className={`bg-white text-deep-blue px-4 py-2 rounded-lg font-medium transform transition-all duration-300 ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            Quick View
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <div className="mb-2">
          <span className="text-xs text-sky-blue font-medium uppercase tracking-wide">
            {product.category}
          </span>
        </div>
        
        <h3 className="text-lg font-semibold text-text-dark mb-2 line-clamp-1">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-deep-blue">
            ${product.price}
          </span>
          
          <button className="bg-sky-blue text-white p-2 rounded-lg hover:bg-blue-400 transition-colors duration-300 transform hover:scale-110">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
