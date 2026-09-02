import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileBar from './components/MobileBar';
import PassModal from './components/PassModal';
import ScrollToTop from './components/ScrollToTop';
import LandingPage from './pages/LandingPage';
import BlogPage from './pages/BlogPage';

export default function App() {
  const [isPassModalOpen, setIsPassModalOpen] = useState(false);

  const handleOpenModal = () => setIsPassModalOpen(true);
  const handleCloseModal = () => setIsPassModalOpen(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-root">
        <Navbar onOpenPassModal={handleOpenModal} />
        <Routes>
          <Route path="/" element={<LandingPage onOpenPassModal={handleOpenModal} />} />
          <Route path="/blog" element={<BlogPage onOpenPassModal={handleOpenModal} />} />
        </Routes>
        <Footer />
        <MobileBar onOpenPassModal={handleOpenModal} />
        <PassModal isOpen={isPassModalOpen} onClose={handleCloseModal} />
      </div>
    </BrowserRouter>
  );
}
