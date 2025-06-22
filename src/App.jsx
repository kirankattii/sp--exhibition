import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";
import Contact from "./pages/contact/Contact";
import Gallary from "./pages/gallary/Gallary";
import Exhibition from "./pages/exhibition/exhibition";
import About from "./pages/about/About";
import ExhibitionGallery from "./pages/exhibition/ExhibitionGallery.js/ExhibitionGallery";
import ExhibitorDetail from "./pages/exhibition/ExhibitorDetail/ExhibitorDetail";
import BrandListPage from "./pages/BrandListPage/BrandListPage";
import BrandDetailPage from "./pages/BrandDetailPage/BrandDetailPage";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <Navbar />
      <div className="margintop">
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallary" element={<Gallary />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallary/exhibitions" element={<Exhibition />} />
          <Route
            path="/gallary/exhibitiongallery"
            element={<ExhibitionGallery />}
          />
          <Route path="/clients" element={<BrandListPage />} />
          <Route path="/brand/:name" element={<BrandDetailPage />} />

          <Route path="/exhibitor/:name" element={<ExhibitorDetail />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
