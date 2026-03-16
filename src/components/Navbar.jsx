import React, { useState, useEffect, useRef } from "react";
import OverlayMenu from "./OverlayMenu";
import LazyImage from "./LazyImage";
import Logo from "../assets/Logo.png";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [forceVisible, setForceVisible] = useState(false);

  const lastScrollY = useRef(0);
  const timerId = useRef(null);

  useEffect(() => {
    const homeSection = document.querySelector("#home");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setForceVisible(true);
          setVisible(true);
          if (timerId.current) clearTimeout(timerId.current);
        } else {
          setForceVisible(false);
        }
      },
      { threshold: 0.1 }
    );
    if (homeSection) observer.observe(homeSection);
    return () => {
      if (homeSection) observer.unobserve(homeSection);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Logic for Home Page and Top of Page
      if (forceVisible || window.scrollY < 50) {
        setVisible(true);
        if (timerId.current) clearTimeout(timerId.current);
        return;
      }

      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        // Scrolling Down
        setVisible(false);
        if (timerId.current) clearTimeout(timerId.current);
      } else {
        // Scrolling Up
        setVisible(true);
        if (timerId.current) clearTimeout(timerId.current);

        if (currentScrollY > 100) {
          timerId.current = setTimeout(() => {
            setVisible(false);
          }, 3000);
        }
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timerId.current) clearTimeout(timerId.current);
    };
  }, [forceVisible]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-1 z-50 transition-all duration-300 ${
          visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } bg-transparent`} // Removed black background and backdrop blur
      >
        <div className="flex items-center space-x-1"> {/* Reduced gap between logo and name */}
          <img 
            src={Logo} 
            alt="logo" 
            className="w-20 h-20 md:w-24 md:h-24 object-contain transition-transform hover:scale-105" 
          />

          <div className="text-3xl font-bold text-white hidden sm:block tracking-tighter">
            Vinarm
          </div>
        </div>

        <div className="block lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
          <button
            onClick={() => setMenuOpen(true)}
            className="text-white text-4xl focus:outline-none hover:scale-110 transition-transform"
            aria-label="Open Menu"
          >
            <FiMenu />
          </button>
        </div>

        <div className="hidden lg:block">
          <a
            href="mailto:princeofpersiajmp@gmail.com?subject=Let's%20Connect&body=Hi%20Vinarm,%20I%20would%20like%20to%20discuss%20a%20project%20with%20you."
            className="relative px-7 py-3.5 font-semibold text-white overflow-hidden group transition-all duration-400 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, rgba(28, 216, 210, 0.15) 0%, rgba(0, 191, 143, 0.1) 100%)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1.5px solid rgba(28, 216, 210, 0.35)",
              borderRadius: "12px",
              boxShadow: "0 4px 20px rgba(28, 216, 210, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
              position: "relative",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "linear-gradient(135deg, rgba(28, 216, 210, 0.25) 0%, rgba(0, 191, 143, 0.15) 100%)";
              e.currentTarget.style.borderColor = "rgba(28, 216, 210, 0.6)";
              e.currentTarget.style.boxShadow = "0 8px 35px rgba(28, 216, 210, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "linear-gradient(135deg, rgba(28, 216, 210, 0.15) 0%, rgba(0, 191, 143, 0.1) 100%)";
              e.currentTarget.style.borderColor = "rgba(28, 216, 210, 0.35)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(28, 216, 210, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)";
            }}
          >
            {/* Animated background gradient accent */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[12px]"
              style={{
                background: "radial-gradient(circle at 30% 50%, rgba(28, 216, 210, 0.1) 0%, transparent 60%)",
                pointerEvents: "none",
              }}
            />
            
            <span className="relative z-10 flex items-center gap-2 text-base tracking-wide">
              ✨ Reach Out
            </span>
          </a>
        </div>
      </nav>
      <OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}