# Nile Fashion

A premium, production-ready fashion e-commerce website built with modern web technologies. Nile Fashion celebrates the timeless elegance of blue through carefully curated fashion pieces.

![Nile Fashion](https://img.shields.io/badge/Version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB.svg)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933.svg)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3.3-06B6D4.svg)

## 🌟 Features

### Frontend
- **Mobile-First Responsive Design** - Optimized for all devices (320px to 1920px+)
- **Beautiful Blue Color System** - Premium design with deep blue, sky blue, and soft blue accents
- **Smooth Animations** - Micro-interactions, hover effects, and transitions
- **Loading States** - Skeleton screens and loading indicators
- **Error Handling** - Graceful error states and retry mechanisms
- **Modern UI Components** - Reusable, accessible components

### Backend
- **RESTful API** - Clean, well-structured endpoints
- **MongoDB Integration** - Scalable database with Mongoose ODM
- **Environment Configuration** - Secure environment variable management
- **Error Handling** - Comprehensive error middleware
- **Data Seeding** - Sample fashion products for development

### Pages
- **Home** - Hero section, featured products, brand story
- **Products** - Responsive grid, category filtering, product cards
- **About** - Brand story, team, values, mission
- **Contact** - Contact form, location map, contact information

## 🛠 Tech Stack

### Frontend
- **React 18** - Modern, component-based UI
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API requests
- **Tailwind CSS** - Utility-first CSS framework
- **Inter Font** - Modern typography

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB Atlas** - Cloud database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 📱 Responsive Design

The application follows a mobile-first approach with carefully designed breakpoints:

- **Mobile**: 320px - 768px
  - 1 column product grid
  - Hamburger navigation menu
  - Optimized touch interactions

- **Tablet**: 768px - 1024px
  - 2-3 column product grid
  - Horizontal navigation
  - Enhanced spacing

- **Desktop**: 1024px+
  - 4 column product grid
  - Full navigation menu
  - Hover states and animations

## 🎨 Design System

### Colors
- **Primary Blue**: `#1E3A8A` - Deep blue for branding and CTAs
- **Secondary Blue**: `#38BDF8` - Sky blue for accents
- **Accent Blue**: `#E0F2FE` - Soft blue for backgrounds
- **Text Dark**: `#1F2937` - Dark gray for text
- **Neutral**: White and light grays

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold weights, clear hierarchy
- **Body Text**: Regular weight, excellent readability

### Components
- **Buttons**: Primary and secondary variants with hover effects
- **Cards**: Product cards with image loading states
- **Navigation**: Sticky navbar with mobile menu
- **Forms**: Clean, accessible form inputs

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- MongoDB Atlas account (or local MongoDB)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nile-fashion
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```

3. **Configure Environment Variables**
   ```bash
   # Copy the .env file (already provided)
   # Update MONGODB_URI if needed
   ```

4. **Seed Database** (optional)
   ```bash
   node seed.js
   ```

5. **Start Backend Server**
   ```bash
   npm run dev
   ```
   Backend runs on `http://localhost:5000`

6. **Frontend Setup** (in new terminal)
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
   Frontend runs on `http://localhost:3000`

## 📁 Project Structure

```
nile-fashion/
├── backend/
│   ├── models/
│   │   └── Product.js          # Product Mongoose model
│   ├── routes/
│   │   └── products.js         # Product API routes
│   ├── .env                    # Environment variables
│   ├── package.json            # Backend dependencies
│   ├── seed.js                 # Database seeding script
│   └── server.js               # Express server
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx      # Navigation component
│   │   │   ├── Footer.jsx      # Footer component
│   │   │   ├── ProductCard.jsx # Product card component
│   │   │   └── SectionWrapper.jsx # Layout wrapper
│   │   ├── pages/
│   │   │   ├── Home.jsx        # Home page
│   │   │   ├── Products.jsx    # Products page
│   │   │   ├── About.jsx       # About page
│   │   │   └── Contact.jsx     # Contact page
│   │   ├── App.jsx             # Main app component
│   │   ├── main.jsx            # React entry point
│   │   └── index.css           # Global styles
│   ├── package.json            # Frontend dependencies
│   ├── tailwind.config.js      # Tailwind configuration
│   └── vite.config.js          # Vite configuration
├── README.md                   # This file
└── SETUP.md                    # Setup instructions
```

## 🔌 API Endpoints

### Products
- `GET /api/products` - Retrieve all products
- `POST /api/products` - Create a new product

### Product Schema
```javascript
{
  name: String (required),
  price: Number (required),
  image: String (required),
  description: String (required),
  category: String (required)
}
```

## 🛍 Sample Products

The database comes pre-seeded with 8 fashion products:

1. **Classic Blue Blazer** - $189.99
2. **Ocean Breeze Shirt** - $79.99
3. **Skyline Dress** - $149.99
4. **Denim Classic Jeans** - $99.99
5. **Azure Summer Top** - $59.99
6. **Midnight Trousers** - $119.99
7. **Cerulean Sweater** - $89.99
8. **Royal Blue Accessories Set** - $39.99

## 🎯 Key Features Explained

### Mobile-First Design
- All layouts start with mobile viewport
- Progressive enhancement for larger screens
- Touch-friendly interactions
- Optimized performance for mobile networks

### Blue Color System
- Consistent brand identity throughout
- Accessible color contrasts
- Professional, premium appearance
- Unique visual differentiation

### Loading States
- Skeleton screens for product cards
- Loading indicators during API calls
- Smooth transitions between states
- Error boundaries for graceful failures

### Responsive Grids
- **Home**: 1 col mobile, 2 col tablet, 4 col desktop
- **Products**: 1 col mobile, 2 col tablet, 3 col desktop, 4 col xl
- **About**: Adaptive layouts for team and values

## 🔧 Development Scripts

### Backend
```bash
npm start      # Production server
npm run dev    # Development with nodemon
```

### Frontend
```bash
npm run dev    # Development server
npm run build  # Production build
npm run preview # Preview production build
npm run lint   # ESLint check
```

## 🌐 Deployment

### Backend (Production)
1. Set environment variables
2. Install production dependencies
3. Start with `npm start`
4. Use process manager (PM2 recommended)

### Frontend (Production)
1. Build with `npm run build`
2. Deploy `dist/` folder to static hosting
3. Configure API proxy for production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Created By

**BlueNile Web Studio** - Premium web development services

*Specializing in modern, responsive web applications with exceptional user experiences.*

---

## 📞 Support

For questions or support:
- Email: info@nilefashion.com
- Phone: +1 (555) 123-4567
- Location: 123 Fashion Ave, New York, NY 10001

---

**Nile Fashion** - Where timeless elegance meets contemporary blue fashion.
