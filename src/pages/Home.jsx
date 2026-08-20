import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

const menuItems = [
  { id: 1, name: "McSpicy Special", rating: "5.0", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop" },
  { id: 2, name: "McSpicy Special", rating: "5.0", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop" },
  { id: 3, name: "McSpicy Special", rating: "5.0", image: "https://images.unsplash.com/photo-1586816001966-79b736744398?w=400&h=300&fit=crop" },
  { id: 4, name: "McSpicy Special", rating: "5.0", image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop" },
  { id: 5, name: "McSpicy Special", rating: "5.0", image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop" },
  { id: 6, name: "McSpicy Special", rating: "5.0", image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=300&fit=crop" },
  { id: 7, name: "McSpicy Special", rating: "5.0", image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400&h=300&fit=crop" },
  { id: 8, name: "McSpicy Special", rating: "5.0", image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=300&fit=crop" },
];

const reviews = [
  {
    id: 1,
    stars: 4,
    text: '"You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change."',
    name: "Leslie Alexander",
    role: "Founder",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    stars: 4,
    text: '"Simply the best. Better than all the rest. I\'d recommend this product to beginners and advanced users."',
    name: "Jacob Jones",
    role: "Co-Founder",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 3,
    stars: 4,
    text: '"I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and faster and easier to work."',
    name: "Jenny Wilson",
    role: "Chief Marketing Officer",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 4,
    stars: 4,
    text: '"Absolutely fantastic service! The delivery was on time and the food was fresh and delicious. Will definitely order again!"',
    name: "Robert Fox",
    role: "Regular Customer",
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    id: 5,
    stars: 5,
    text: '"Best food delivery app I have ever used. The UI is clean, ordering is easy and the food arrives hot every single time."',
    name: "Savannah Nguyen",
    role: "Food Blogger",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

const CARDS_PER_VIEW = 3;

const Home = () => {
  const [reviewIndex, setReviewIndex] = useState(0);
  const maxIndex = reviews.length - CARDS_PER_VIEW;
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  // Create refs for each section
  const heroRef = useRef(null);
  const menuRef = useRef(null);
  const downloadRef = useRef(null);
  const testimonialsRef = useRef(null);

  const handlePrev = () => setReviewIndex((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setReviewIndex((prev) => Math.min(prev + 1, maxIndex));
  const visibleReviews = reviews.slice(reviewIndex, reviewIndex + CARDS_PER_VIEW);

  // Scroll to section function
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-red-50 font-sans antialiased">

      {/* ========== NAVBAR ========== */}
      <nav className="sticky top-0 z-50 flex h-[90px] items-center justify-between bg-red-50 px-6 md:px-10 lg:px-20 xl:px-[120px] ">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection(heroRef)}>
          <svg width="34" height="40" viewBox="0 0 34 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-7 md:h-10 md:w-9">
            <path d="M17 2C13 11 6 15 6 24C6 32.3 11 38 17 38C23 38 28 32.3 28 24C28 15 21 11 17 2Z" fill="#EF4444" />
            <path d="M17 13C14.5 18.5 13 22 13 26C13 29.3 14.8 32 17 32C19.2 32 21 29.3 21 26C21 22 19.5 18.5 17 13Z" fill="#FF8C00" />
          </svg>
          <span className="text-xl font-bold text-gray-900 md:text-2xl">Foody</span>
        </div>
        <div className="hidden items-center gap-6 md:flex lg:gap-8">
          <button onClick={() => scrollToSection(heroRef)} className="text-sm font-medium text-gray-900 transition-colors hover:text-red-500 md:text-base cursor-pointer bg-transparent border-none">
            Home
          </button>
          <button onClick={() => scrollToSection(menuRef)} className="text-sm font-medium text-gray-900 transition-colors hover:text-red-500 md:text-base cursor-pointer bg-transparent border-none">
            Service
          </button>
          <button onClick={() => scrollToSection(menuRef)} className="flex items-center gap-1 text-sm font-medium text-gray-900 transition-colors hover:text-red-500 md:text-base cursor-pointer bg-transparent border-none">
            Menu
            <svg width="11" height="7" viewBox="0 0 11 7" fill="none">
              <path d="M1 1L5.5 6L10 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button onClick={() => scrollToSection(testimonialsRef)} className="text-sm font-medium text-gray-900 transition-colors hover:text-red-500 md:text-base cursor-pointer bg-transparent border-none">
            Help
          </button>
        </div>
        <div className="flex items-center gap-4 md:gap-6">
          <button className="cursor-pointer border-none bg-transparent p-0">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 md:h-[22px] md:w-[22px]">
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
          <button className="cursor-pointer border-none bg-transparent p-0">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 md:h-[22px] md:w-[22px]">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
          </button>
          {user ? (
            <button
              onClick={logout}
              className="flex cursor-pointer items-center gap-2 rounded-full border-none bg-red-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-red-500/20 transition-opacity hover:opacity-90 md:px-6 md:text-base"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
                <polyline points="16,17 21,12 16,7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
              <span className="hidden sm:inline">Logout</span>
            </button>
          ) : (
            <button
              onClick={() => navigate('/login')}
              className="flex cursor-pointer items-center gap-2 rounded-full border-none bg-red-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-red-500/20 transition-opacity hover:opacity-90 md:px-6 md:text-base"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4" />
                <polyline points="10,17 15,12 10,7" />
                <line x1="15" y1="12" x2="3" y2="12" />
              </svg>
              <span className="hidden sm:inline">Login</span>
            </button>
          )}
        </div>
      </nav>

      {/* ========== HERO SECTION ========== */}
      <div ref={heroRef} className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12 xl:px-16 pt-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="z-10 order-2 lg:order-1 lg:col-span-7">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-100/70 px-4 py-2 shadow-sm">
              <span className="text-sm font-semibold text-gray-900 md:text-base">Fast Delivery</span>
              <span className="text-base">🛵</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-[68px] lg:leading-[1.1]">
              Fastest <br />
              <span className="text-red-500">Delivery</span> &amp; <br />
              Esay <span className="text-red-500">Pickup.</span>
            </h1>
            <p className="mt-5 text-sm leading-relaxed text-gray-500 sm:text-base md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              <br className="hidden sm:block" />
              Imperdiet tempus felis vitae sit est quisque.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <button className="rounded-full bg-red-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-red-500/30 transition-all hover:opacity-90 md:text-base">
                Order Now
              </button>
              <button className="group flex cursor-pointer items-center gap-3 border-none bg-transparent font-semibold text-gray-900">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-red-500 bg-white shadow-md transition-transform group-hover:scale-105">
                  <svg width="12" height="14" viewBox="0 0 13 15" fill="#EF4444" className="translate-x-0.5">
                    <polygon points="1,1 12,7.5 1,14" />
                  </svg>
                </div>
                <span className="text-sm text-gray-800 md:text-base">Watch Video</span>
              </button>
            </div>
            <div className="mt-10 flex items-center gap-4">
              <div className="flex">
                {[
                  "https://randomuser.me/api/portraits/men/32.jpg",
                  "https://randomuser.me/api/portraits/women/65.jpg",
                  "https://randomuser.me/api/portraits/men/45.jpg",
                  "https://randomuser.me/api/portraits/women/44.jpg"
                ].map((img, i) => (
                  <div 
                    key={i} 
                    className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-white shadow-sm"
                    style={{ 
                      marginLeft: i === 0 ? "0" : "-14px", 
                      zIndex: 4 - i 
                    }}
                  >
                    <img 
                      src={img} 
                      alt={`Customer ${i + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900 md:text-base">Our Happy Customer</p>
                <div className="flex items-center gap-1.5 text-xs text-gray-500 md:text-sm">
                  <span className="text-yellow-400">★</span>
                  <span className="font-bold text-gray-900">4.8</span>
                  <span>(10.08k Review)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative order-1 flex items-center justify-center lg:order-2 lg:col-span-5 h-[780px] sm:h-[550px] lg:h-[620px]">
  
{/* RIGHT VISUAL */}
<div className="relative order-1  flex items-center justify-center lg:order-2 lg:col-span-5 h-[480px] sm:h-[550px] lg:h-[620px]">
  
  {/* Red Circle Background Container (Without overflow-hidden) */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[620px] w-[620px] sm:h-[460px] sm:w-[460px] lg:h-[540px] lg:w-[560px] rounded-full bg-red-500 shadow-lg z-0"></div>

  {/* Person Image positioned to pop out of the top of the circle */}
  <img 
    src="/src/assets/man.png" 
    alt="Person with burger" 
    className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 -translate-y-20 z-10 object-cover object-down pointer-events-none max-w-none" 
    style={{ height: "620px", width: "550px" }} 
  />


</div>
  {/* Floating Burger Card */}
  <div className="absolute bottom-2 right-2 sm:left-60 z-20 flex w-[210px] items-center gap-3 rounded-2xl bg-white/95 p-3.5 shadow-2xl backdrop-blur-sm md:w-[240px] md:p-4">
    <span className="text-3xl md:text-4xl">🍔</span>
    <div>
      <p className="text-xs font-bold leading-tight text-gray-900 md:text-sm">Quarter Pounder with <br />Cheese</p>
      <div className="mt-1 flex gap-0.5">
        {[1, 2, 3, 4].map((s) => (<span key={s} className="text-xs text-yellow-400">★</span>))}
        <span className="text-xs text-gray-200">★</span>
      </div>
    </div>
  </div>

</div>
        </div>
      </div>

      {/* ========== SPECIAL MENU SECTION ========== */}
      <section ref={menuRef} className="bg-red-50 px-4 py-14 sm:px-6 md:px-10 lg:py-20">
        <div className="mx-auto w-full max-w-[1140px]">
          <div className="mb-10 text-center lg:mb-14">
            <h2 className="font-bold text-gray-900" style={{ fontFamily: "Outfit, sans-serif", fontSize: "clamp(26px, 4vw, 40px)", lineHeight: "100%" }}>
              Special Menu for you
            </h2>
            <p className="mx-auto mt-4 max-w-[640px] text-gray-900" style={{ fontFamily: "Outfit, sans-serif", fontSize: "clamp(14px, 2vw, 20px)", lineHeight: "30px", opacity: 0.6 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus cum purus bibendum risus nibh cursus integer dolor, commodo. Amet, aliquam condimentum.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
            {menuItems.map((item) => (
              <div key={item.id} className="group flex flex-col overflow-hidden rounded-[20px] bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative overflow-hidden" style={{ height: "150px", borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }}>
                  <img src={item.image} alt={item.name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  <button className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md transition-transform hover:scale-110" aria-label="Wishlist">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </button>
                </div>
                <div className="flex flex-1 flex-col justify-between" style={{ padding: "16px", gap: "10px", borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px", minHeight: "161px" }}>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-gray-900" style={{ fontSize: "15px" }}>{item.name}</span>
                    <div className="flex items-center gap-1">
                      <span className="text-sm text-red-500">★</span>
                      <span className="text-xs font-semibold text-gray-900">{item.rating}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
                    <span className="flex items-center gap-1"><span>🛵</span><span>Free Delivery</span></span>
                    <span className="flex items-center gap-1">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round">
                        <circle cx="12" cy="12" r="10" /><polyline points="12,6 12,12 16,14" />
                      </svg>
                      <span>25-30 min</span>
                    </span>
                  </div>
                  <button className="flex w-full cursor-pointer items-center justify-center font-semibold text-white transition-all hover:opacity-90 active:scale-95" style={{ height: "50px", paddingTop: "13px", paddingBottom: "13px", paddingLeft: "20px", paddingRight: "20px", gap: "10px", borderRadius: "20px", backgroundColor: "rgba(245, 71, 73, 1)", border: "none", fontSize: "15px", boxShadow: "0 4px 14px rgba(245,71,73,0.3)" }}>
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== DOWNLOAD APP SECTION ========== */}
      <section ref={downloadRef} className="bg-red-50 px-4 py-10 sm:px-6 md:px-10 lg:py-0">
        <div className="mx-auto max-w-[1140px]">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-0">
            <div className="flex flex-col justify-center pl-0 pt-10 lg:pl-10 lg:pt-10" style={{ maxWidth: "503px" }}>
              <h2 className="font-extrabold text-gray-900" style={{ fontFamily: "Outfit, sans-serif", fontSize: "clamp(26px, 3.5vw, 38px)", lineHeight: "1.2" }}>
                Download our Mobile App
              </h2>
              <p className="mt-4 text-gray-500" style={{ fontFamily: "Outfit, sans-serif", fontSize: "clamp(13px, 1.5vw, 16px)", lineHeight: "1.75", opacity: 0.85, maxWidth: "420px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus cum purus bibendum risus nibh cursus integer dolor, commodo. Amet, aliquam condimentum.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button className="flex cursor-pointer items-center gap-3 rounded-xl border-none bg-gray-900 px-5 text-white transition-opacity hover:opacity-85" style={{ width: "clamp(160px, 20vw, 236px)", height: "70px" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div className="text-left leading-tight">
                    <p className="text-[10px] font-normal opacity-80">Download on the</p>
                    <p className="text-base font-bold">App Store</p>
                  </div>
                </button>
                <button className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-200 bg-white px-5 text-gray-900 shadow-sm transition-opacity hover:opacity-85" style={{ height: "70px", minWidth: "160px" }}>
                  <svg width="26" height="26" viewBox="0 0 24 24">
                    <path d="M3.18 23.76c.35.2.76.22 1.14.04l11.34-6.54-2.56-2.56-9.92 9.06z" fill="#EA4335" />
                    <path d="M22.47 10.2L19.7 8.6l-2.87 2.87 2.87 2.87 2.8-1.62a1.6 1.6 0 000-2.52z" fill="#FBBC04" />
                    <path d="M3.18.24C2.8.06 2.37.1 2.02.32L13.1 11.4l2.57-2.57L3.18.24z" fill="#4285F4" />
                    <path d="M2.02.32A1.6 1.6 0 001 1.74v20.52c0 .6.33 1.13.84 1.42l.34.18L13.1 12.6 2.02.32z" fill="#34A853" />
                  </svg>
                  <div className="text-left leading-tight">
                    <p className="text-[10px] font-normal text-gray-500">Get it on</p>
                    <p className="text-base font-bold text-gray-900">Google Play</p>
                  </div>
                </button>
              </div>
            </div>
            <div className="relative mx-auto flex items-end justify-center lg:mx-0 lg:justify-end" style={{ height: "clamp(380px, 50vw, 611px)", width: "100%" }}>
              <div className="absolute z-0" style={{ width: "clamp(150px, 20vw, 269px)", height: "clamp(300px, 40vw, 544px)", right: "0", bottom: "0" }}>
                <div className="h-full w-full overflow-hidden rounded-[32px] border-4 border-gray-200 bg-gray-100 shadow-xl" style={{ borderRadius: "36px" }}>
                  <img src="/src/assets/mobile2.png" alt="" className="h-full w-full object-cover" />
                </div>
              </div>
              <div className="absolute z-10" style={{ width: "clamp(150px, 20vw, 269px)", height: "clamp(300px, 40vw, 544px)", right: "clamp(100px, 22vw, 170px)", top: "clamp(80px, 19vw, 170px)" }}>
                <div className="h-full w-full overflow-hidden border-4 border-gray-800 bg-white shadow-2xl" style={{ borderRadius: "36px" }}>
                  <img src="/src/assets/mobile1.png" alt="" className="h-full w-full object-cover" />
                </div>
                <div className="absolute left-1/2 top-2 -translate-x-1/2 rounded-full bg-gray-800" style={{ width: "60px", height: "18px" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS SECTION ========== */}
      <section ref={testimonialsRef} className="bg-red-50 px-4 py-14 sm:px-6 md:px-10 lg:py-20">
        <div className="mx-auto w-full max-w-[1140px]">
          <div className="flex items-start justify-between gap-4">
            <h2
              className="font-bold text-gray-900"
              style={{ fontFamily: "Outfit, sans-serif", fontSize: "clamp(24px, 3.5vw, 40px)", lineHeight: "1.2", maxWidth: "560px" }}
            >
              What our customer <br className="hidden sm:block" /> say about this
            </h2>
            <div className="flex shrink-0 items-center gap-3" style={{ marginTop: "4px" }}>
              <button
                onClick={handlePrev}
                disabled={reviewIndex === 0}
                className="flex items-center justify-center rounded-full transition-all hover:scale-105 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
                style={{ width: "50px", height: "50px", backgroundColor: "#fde8e8", border: "none" }}
                aria-label="Previous"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15,18 9,12 15,6" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                disabled={reviewIndex >= maxIndex}
                className="flex items-center justify-center rounded-full transition-all hover:scale-105 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
                style={{ width: "50px", height: "50px", backgroundColor: "rgba(245, 71, 73, 1)", border: "none", boxShadow: "0 4px 14px rgba(245,71,73,0.35)" }}
                aria-label="Next"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9,18 15,12 9,6" />
                </svg>
              </button>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {visibleReviews.map((review) => (
              <div key={review.id} className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" style={{ minHeight: "300px" }}>
                <div>
                  <div className="mb-4 flex gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span key={s} className="text-lg" style={{ color: s <= review.stars ? "#FBBF24" : "#E5E7EB" }}>★</span>
                    ))}
                  </div>
                  <p className="leading-relaxed text-gray-600" style={{ fontFamily: "Outfit, sans-serif", fontSize: "clamp(13px, 1.3vw, 15px)", lineHeight: "1.7" }}>
                    {review.text}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-5">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="h-11 w-11 rounded-full object-cover shadow-sm ring-2 ring-red-100"
                    onError={(e) => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }}
                  />
                  <div className="hidden h-11 w-11 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-500">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900" style={{ fontFamily: "Outfit, sans-serif", fontSize: "15px" }}>{review.name}</p>
                    <p className="text-gray-400" style={{ fontFamily: "Outfit, sans-serif", fontSize: "13px" }}>{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: reviews.length - CARDS_PER_VIEW + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setReviewIndex(i)}
                className="rounded-full transition-all duration-300"
                style={{ width: reviewIndex === i ? "24px" : "8px", height: "8px", backgroundColor: reviewIndex === i ? "rgba(245, 71, 73, 1)" : "#fca5a5", border: "none", cursor: "pointer" }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="w-full bg-white px-4 sm:px-6 md:px-10 xl:px-[120px] lg:pt-10">
        <div className="mx-auto max-w-[1140px]">

          {/* ── Top Bar ── */}
          <div
            className="flex flex-col items-center justify-between gap-6 rounded-2xl px-6 py-0 sm:flex-row sm:px-8 md:px-10 lg:flex-row"
            style={{
              backgroundColor: "white",
              minHeight: "130px",
            
            }}
          >
            {/* Logo */}
            <div
              className="flex shrink-0 items-center gap-2 cursor-pointer"
              onClick={() => scrollToSection(heroRef)}
              style={{ width: "129px", height: "50px" }}
            >
              <svg width="32" height="38" viewBox="0 0 34 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 2C13 11 6 15 6 24C6 32.3 11 38 17 38C23 38 28 32.3 28 24C28 15 21 11 17 2Z" fill="#EF4444" />
                <path d="M17 13C14.5 18.5 13 22 13 26C13 29.3 14.8 32 17 32C19.2 32 21 29.3 21 26C21 22 19.5 18.5 17 13Z" fill="#FF8C00" />
              </svg>
              <span className="text-xl font-bold text-black">Foody</span>
            </div>

            {/* Nav Links */}
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-[60px]">
              <button onClick={() => scrollToSection(heroRef)} className="text-sm font-medium transition-colors hover:text-red-400 md:text-base bg-transparent border-none cursor-pointer" style={{ color: "rgba(2, 0, 0, 0.85)" }}>
                Home
              </button>
              <button onClick={() => scrollToSection(menuRef)} className="text-sm font-medium transition-colors hover:text-red-400 md:text-base bg-transparent border-none cursor-pointer" style={{ color: "rgba(2, 0, 0, 0.85)" }}>
                Service
              </button>
              <button onClick={() => scrollToSection(menuRef)} className="text-sm font-medium transition-colors hover:text-red-400 md:text-base bg-transparent border-none cursor-pointer" style={{ color: "rgba(2, 0, 0, 0.85)" }}>
                Blog
              </button>
              <button onClick={() => scrollToSection(testimonialsRef)} className="text-sm font-medium transition-colors hover:text-red-400 md:text-base bg-transparent border-none cursor-pointer" style={{ color: "rgba(2, 0, 0, 0.85)" }}>
                Contact Us
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-5">
              {/* Twitter / X */}
              <a href="#" className="transition-opacity hover:opacity-70" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="black">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" className="transition-opacity hover:opacity-70" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="black">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="transition-opacity hover:opacity-70" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="black">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* GitHub */}
              <a href="#" className="transition-opacity hover:opacity-70" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="black">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* ── Divider ── */}
          <div className="my-0 h-px w-full bg-gray-200" />

          {/* ── Bottom Bar ── */}
          <div className="flex flex-col items-center justify-between gap-3 py-5 sm:flex-row">
            {/* Copyright */}
            <p
              className="text-center text-gray-500 sm:text-left"
              style={{
                fontFamily: "Outfit, sans-serif",
                fontSize: "16px",
                lineHeight: "26px",
                opacity: 0.8,
              }}
            >
              © Copyright 2022, All Rights Reserved
            </p>

            {/* Policy Links */}
            <div className="flex items-center gap-6 sm:gap-8">
              <a
                href="#"
                className="transition-colors hover:text-red-500"
                style={{
                  fontFamily: "Outfit, sans-serif",
                  fontSize: "16px",
                  lineHeight: "26px",
                  color: "#4B5563",
                  opacity: 0.8,
                  textDecoration: "none",
                }}
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="transition-colors hover:text-red-500"
                style={{
                  fontFamily: "Outfit, sans-serif",
                  fontSize: "16px",
                  lineHeight: "26px",
                  color: "#4B5563",
                  opacity: 0.8,
                  textDecoration: "none",
                }}
              >
                Terms &amp; Conditions
              </a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
};

export default Home;