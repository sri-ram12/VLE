import React, { useState } from 'react';
import { PRODUCTS_DATA } from './data/products';
import type { Product } from './types';
import { Navbar } from './components/layout/Navbar';
import { AnimatedRunningBanner } from './components/layout/AnimatedRunningBanner';
import { CinematicIntro } from './components/intro/CinematicIntro';
import { Hero } from './components/hero/Hero';
import { ShowroomHighlightsReel } from './components/showroom/ShowroomHighlightsReel';
import { ShowroomVideoTours } from './components/video/ShowroomVideoTours';
import { TrustBar } from './components/trust/TrustBar';
import { CategorySection } from './components/categories/CategorySection';
import { ProductCatalog } from './components/products/ProductCatalog';
import { ProductWall } from './components/products/ProductWall';
import { BrandMarquee } from './components/brands/BrandMarquee';
import { ShowroomGallery } from './components/showroom/ShowroomGallery';
import { WholesaleRetailSection } from './components/wholesale/WholesaleRetailSection';
import { ProjectUseCases } from './components/projects/ProjectUseCases';
import { WhyChooseUs } from './components/whyus/WhyChooseUs';
import { StoreSection } from './components/store/StoreSection';
import { Footer } from './components/layout/Footer';
import { MobileActionBar } from './components/layout/MobileActionBar';
import { ProductDetailsModal } from './components/products/ProductDetailsModal';
import { EnquiryModal } from './components/store/EnquiryModal';
import { AdminPreviewModal } from './components/admin/AdminPreviewModal';

export const App: React.FC = () => {
  // Navigation & Catalog filter state
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Modals state
  const [selectedProductForModal, setSelectedProductForModal] = useState<Product | null>(null);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [enquiryTargetProduct, setEnquiryTargetProduct] = useState<Product | null>(null);
  const [adminPreviewOpen, setAdminPreviewOpen] = useState(false);
  const [introOpen, setIntroOpen] = useState(true);

  // Handlers
  const handleSelectCategory = (cat: string) => {
    setSelectedCategory(cat);
    const catalogEl = document.querySelector('#products');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenSearch = () => {
    const catalogEl = document.querySelector('#products');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
      // Focus search input
      setTimeout(() => {
        const searchInput = catalogEl.querySelector('input[type="text"]') as HTMLInputElement;
        if (searchInput) searchInput.focus();
      }, 300);
    }
  };

  const handleOpenEnquiryModal = (product?: Product | string) => {
    if (typeof product === 'object' && product !== null) {
      setEnquiryTargetProduct(product);
    } else {
      setEnquiryTargetProduct(null);
    }
    setEnquiryModalOpen(true);
  };

  const handleSelectBrand = (brandName: string) => {
    const catalogEl = document.querySelector('#products');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
      // Set search query to brand name
      setTimeout(() => {
        const searchInput = catalogEl.querySelector('input[type="text"]') as HTMLInputElement;
        if (searchInput) {
          searchInput.value = brandName;
          searchInput.dispatchEvent(new Event('input', { bubbles: true }));
        }
      }, 200);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-lime-500 selection:text-white">
      
      {/* 0. Cinematic Animated Intro Splash (Shop Name, Sparks & Colorful Energy) */}
      <CinematicIntro
        isOpen={introOpen}
        onComplete={() => setIntroOpen(false)}
      />

      {/* Top Colorful Animated Running Marquee Banner */}
      <AnimatedRunningBanner
        onReplayIntro={() => setIntroOpen(true)}
      />

      {/* Top Sticky Navbar */}
      <Navbar
        onOpenSearch={handleOpenSearch}
        onOpenEnquiry={() => handleOpenEnquiryModal()}
        onOpenAdminPreview={() => setAdminPreviewOpen(true)}
        activeCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onExploreClick={() => handleSelectCategory('all')}
          onContactClick={() => {
            const el = document.querySelector('#store');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 1.5 Authentic Shop Highlights Reel (Real In-Store Photos) */}
        <ShowroomHighlightsReel />

        {/* 1.6 Showroom Video Tours (vid1 & vid2 9:16 Smartphone Walkthroughs) */}
        <ShowroomVideoTours />

        {/* 2. Trust Metrics Bar */}
        <TrustBar />

        {/* 3. Four Core Category Showrooms */}
        <CategorySection onSelectCategory={handleSelectCategory} />

        {/* 4. Complete Interactive Catalog & Search */}
        <ProductCatalog
          products={PRODUCTS_DATA}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onViewDetails={(product) => setSelectedProductForModal(product)}
          onEnquire={(product) => handleOpenEnquiryModal(product)}
        />

        {/* 5. Asymmetric Interactive Product Wall */}
        <ProductWall
          products={PRODUCTS_DATA}
          onViewProduct={(product) => setSelectedProductForModal(product)}
        />

        {/* 6. Brands We Deal In Infinite Marquee */}
        <BrandMarquee onSelectBrand={handleSelectBrand} />

        {/* 7. Authentic Sangivalasa Showroom Walkthrough Gallery */}
        <ShowroomGallery
          onSelectCategory={handleSelectCategory}
          onOpenEnquiry={(subject) => handleOpenEnquiryModal(subject)}
        />

        {/* 8. Wholesale vs Retail Dedicated Track */}
        <WholesaleRetailSection
          onBrowseRetail={() => handleSelectCategory('all')}
          onRequestBulk={() => handleOpenEnquiryModal()}
        />

        {/* 8. Construction & Project Use Cases */}
        <ProjectUseCases
          onSelectProject={handleSelectCategory}
          onOpenEnquiry={(projectName) => handleOpenEnquiryModal(projectName)}
        />

        {/* 9. Why Choose Us (One Store. Multiple Solutions) */}
        <WhyChooseUs />

        {/* 10. Store Location, Contacts & Direct Enquiry */}
        <StoreSection />
      </main>

      {/* Footer */}
      <Footer
        onSelectCategory={handleSelectCategory}
        onOpenAdminPreview={() => setAdminPreviewOpen(true)}
      />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileActionBar
        onOpenEnquiry={() => handleOpenEnquiryModal()}
      />

      {/* Product Details Modal */}
      <ProductDetailsModal
        product={selectedProductForModal}
        onClose={() => setSelectedProductForModal(null)}
        onOpenEnquiry={(product) => handleOpenEnquiryModal(product)}
      />

      {/* General Product & Quote Enquiry Modal */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        targetProduct={enquiryTargetProduct}
        targetCategory={selectedCategory}
      />

      {/* Conceptual Admin Dashboard Preview Modal */}
      {adminPreviewOpen && (
        <AdminPreviewModal onClose={() => setAdminPreviewOpen(false)} />
      )}

    </div>
  );
};

export default App;
