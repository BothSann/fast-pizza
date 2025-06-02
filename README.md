# 🍕 Kon Khmer Pizza CO.

A modern, responsive pizza ordering application built with React, Redux Toolkit, and React Router. Experience the fastest pizza ordering system with real-time cart management, geolocation services, and priority delivery options.

## 🚀 Live Demo

**[View Live Application](https://kon-khmer-pizza.vercel.app/)**

## ✨ Features

### 🛒 **Smart Shopping Cart**

- Add, remove, and update pizza quantities
- Real-time price calculations
- Persistent cart state with Redux
- Visual cart overview with item count and total price

### 📍 **Geolocation Integration**

- Automatic address detection using browser geolocation
- Reverse geocoding for accurate delivery addresses
- Manual address input option

### ⚡ **Priority Delivery**

- Optional priority delivery for 20% extra cost
- Real-time total price updates
- Clear pricing breakdown

### 🔍 **Order Tracking**

- Search orders by order ID
- Real-time order status updates
- Estimated delivery time countdown
- Order history with detailed information

### 📱 **Responsive Design**

- Mobile-first approach
- Tailwind CSS for modern UI
- Smooth animations and transitions
- Cross-device compatibility

### 🎯 **User Experience**

- Username persistence across sessions
- Form validation with helpful error messages
- Loading states and spinners
- Intuitive navigation

## 🛠️ Technology Stack

### **Frontend**

- **React 18** - Modern React with hooks
- **Redux Toolkit** - State management
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework

### **Build Tools**

- **Vite** - Fast build tool and dev server
- **PostCSS** - CSS processing
- **ESLint** - Code linting
- **Prettier** - Code formatting

### **APIs & Services**

- **REST API** - Pizza menu and order management
- **Geolocation API** - Browser location services
- **BigDataCloud API** - Reverse geocoding

## 🏗️ Project Structure

```
src/
├── features/
│   ├── cart/           # Shopping cart functionality
│   ├── menu/           # Pizza menu display
│   ├── order/          # Order creation and tracking
│   └── user/           # User management
├── services/           # API communication
├── ui/                 # Reusable UI components
└── utils/              # Helper functions
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd fast-react-pizza
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
```

## 🎮 How to Use

### 1. **Getting Started**

- Enter your name on the homepage
- Browse the pizza menu
- Add pizzas to your cart

### 2. **Placing an Order**

- Review items in your cart
- Fill out the order form
- Use "Get Position" for automatic address detection
- Choose priority delivery if needed
- Submit your order

### 3. **Order Tracking**

- Use the order ID to track your order
- View estimated delivery time
- See order status updates

## 🔧 Key Features Implementation

### **State Management**

- Redux Toolkit for global state
- Separate slices for cart and user data
- Async thunks for API calls

### **Routing**

- React Router for navigation
- Loader functions for data fetching
- Action functions for form submissions

### **Form Handling**

- React Router Form component
- Client-side validation
- Error handling and display

### **Responsive Design**

- Mobile-first CSS approach
- Flexible grid layouts
- Touch-friendly interface

## 🎨 Design Highlights

- **Modern UI** with clean, intuitive design
- **Yellow accent color** for brand consistency
- **Roboto Mono font** for a modern, technical feel
- **Smooth animations** for better user experience
- **Loading states** for all async operations

## 🌟 Performance Optimizations

- **Code splitting** with React Router
- **Lazy loading** for better performance
- **Optimized Redux selectors**
- **Efficient re-renders** with proper state structure

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Pizza API provided by [Jonas Schmedtmann](https://react-fast-pizza-api.jonas.io/)
- Geolocation services by [BigDataCloud](https://www.bigdatacloud.com/)
- Icons and design inspiration from modern web applications

---

**Built with ❤️ and lots of 🍕**
