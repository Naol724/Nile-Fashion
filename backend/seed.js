require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

const products = [
  {
    name: "Classic Blue Blazer",
    price: 189.99,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop",
    description: "Elegant navy blazer perfect for business and formal occasions",
    category: "jackets"
  },
  {
    name: "Ocean Breeze Shirt",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&h=1000&fit=crop",
    description: "Light blue cotton shirt with modern fit",
    category: "shirts"
  },
  {
    name: "Skyline Dress",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&h=1000&fit=crop",
    description: "Elegant blue dress for evening events",
    category: "dresses"
  },
  {
    name: "Denim Classic Jeans",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=1000&fit=crop",
    description: "Premium denim jeans with perfect fit",
    category: "jeans"
  },
  {
    name: "Azure Summer Top",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&h=1000&fit=crop",
    description: "Light and breezy summer top in sky blue",
    category: "tops"
  },
  {
    name: "Midnight Trousers",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&h=1000&fit=crop",
    description: "Professional dark blue trousers for any occasion",
    category: "trousers"
  },
  {
    name: "Cerulean Sweater",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&h=1000&fit=crop",
    description: "Cozy blue sweater for cold days",
    category: "sweaters"
  },
  {
    name: "Royal Blue Accessories Set",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1524863479829-916d8e77f114?w=800&h=1000&fit=crop",
    description: "Complete accessory set with blue theme",
    category: "accessories"
  }
];

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(async () => {
  console.log('MongoDB connected');
  
  // Clear existing products
  await Product.deleteMany();
  console.log('Cleared existing products');
  
  // Insert new products
  await Product.insertMany(products);
  console.log('Products seeded successfully');
  
  mongoose.connection.close();
})
.catch(err => {
  console.error('Error:', err);
  mongoose.connection.close();
});
