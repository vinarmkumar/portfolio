import React, { useState, useEffect, useRef } from "react";
import OverlayMenu from "./OverlayMenu";
import Logo from "../assets/Logo.png";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [forceVisible, setForceVisible] = useState(false);
  const buttonRef = useRef(null);

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
      if (forceVisible || window.scrollY < 50) {
        setVisible(true);
        if (timerId.current) clearTimeout(timerId.current);
        return;
      }

      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        setVisible(false);
        if (timerId.current) clearTimeout(timerId.current);
      } else {
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

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    buttonRef.current.style.setProperty("--x", `${x}%`);
    buttonRef.current.style.setProperty("--y", `${y}%`);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 md:px-12 py-2 z-50 transition-all duration-500 ${
          visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } bg-transparent`}
      >
        
        <div className="flex items-center">
          <img 
            src={Logo} 
            alt="logo" 
            className="w-16 h-16 md:w-20 md:h-20 object-contain transition-transform hover:scale-110 duration-500" 
          />
        </div>

        <div className="flex items-center gap-5 md:gap-8">
          
          <div className="hidden md:block">
            <a
              ref={buttonRef}
              href="mailto:princeofpersiajmp@gmail.com?subject=Let's%20Connect&body=Hi,%20I%20would%20like%20to%20discuss%20a%20project%20with%20you."
              className="reach-out-btn group"
              onMouseMove={handleMouseMove}
            >
              <span className="sparkle-icon">✨</span>
              <span className="relative z-10 tracking-wide">Reach Out</span>
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="nav-icon-wrapper group focus:outline-none"
            aria-label="Open Menu"
          >
            <FiMenu className="text-white text-2xl transition-transform duration-300 group-hover:scale-110" />
          </button>
        </div>
      </nav>
      <OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}