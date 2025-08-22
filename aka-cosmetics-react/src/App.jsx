// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Catalog from './components/Catalog.jsx';
import Contact from './components/Contact.jsx';
import Cart from './components/Cart.jsx';

const App = () => {
  return (
    <div className="main_layout">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;




































// import React from 'react';
// import Header from './components/Header';
// import DealBanner from './components/DealBanner';
// import ProductList from './components/ProductList';
// import Team from './components/Team';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <div className="main_layout">
//       {/* Header Section */}
//       <Header />

//       {/* Main Content */}
//       <main>
//         {/* Top Banner with Deal */}
//         <DealBanner />

//         {/* Best Sellers Product Section */}
//         <ProductList />

//         {/* Divider Line */}
//         <hr
//           className="breakThrough"
//           style={{ width: '80%', marginLeft: '9rem', border: '1px solid black' }}
//         />

//         {/* Team / Owners Section */}
//         <Team />
//       </main>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// }

// export default App;


