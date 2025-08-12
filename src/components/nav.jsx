import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(window.location.hash || window.location.pathname || "#home");
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const hoverTimeout = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
      // Animar props segun scroll
      controls.start({
        backgroundColor: isScrolled ? "rgba(17, 24, 39, 0.9)" : "rgba(0,0,0,0)", // bg-gray-900/90 vs transparente
        height: isScrolled ? 70 : 120,
        boxShadow: isScrolled ? "0 8px 32px rgba(0,0,0,0.4)" : "none",
        paddingTop: isScrolled ? 10 : 20,
        paddingBottom: isScrolled ? 10 : 20,
      });
    };

    window.addEventListener("scroll", handleScroll);
    // Init animation on mount
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  useEffect(() => {
    const onChange = () => setActive(window.location.hash || window.location.pathname || "#home");
    window.addEventListener("hashchange", onChange);
    window.addEventListener("popstate", onChange);
    return () => {
      window.removeEventListener("hashchange", onChange);
      window.removeEventListener("popstate", onChange);
    };
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(hoverTimeout.current);
    setOpen(true);
  };
  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => setOpen(false), 120);
  };

  const isActive = (hashOrPath) => {
    if (hashOrPath === "/testimonials") return window.location.pathname === "/testimonials";
    if (hashOrPath.startsWith("#")) return active === hashOrPath;
    return window.location.pathname + window.location.hash === hashOrPath;
  };

  const linkClass = (hashOrPath) =>
    `text-white font-semibold hover:text-gray-300 transition-colors px-1 relative after:content-[''] after:block after:h-0.5 after:rounded after:bg-white after:transition-all after:duration-300 after:absolute after:left-0 after:right-0 after:bottom-0 after:scale-x-0 ${
      isActive(hashOrPath) ? "after:scale-x-100 after:h-0.5" : ""
    }`;

  return (
    <motion.nav
      animate={controls}
      initial={{
        backgroundColor: "rgba(0,0,0,0)",
        height: 120,
        paddingTop: 20,
        paddingBottom: 20,
        boxShadow: "none",
      }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="fixed w-full z-50 top-0 left-0"
    >
      <div
        className={`flex px-8 ${
          scrolled ? "flex-row justify-between items-center" : "flex-col items-start gap-3"
        } transition-all duration-300`}
      >
        <motion.a
          href="/#hero"
          className={`text-white font-bold hover:text-gray-300 transition-colors cursor-pointer`}
          animate={{
            fontSize: scrolled ? "1.5rem" : "3rem", // text-2xl vs text-5xl
          }}
          transition={{ duration: 0.3 }}
        >
          Valentina Dimitrova, Ph.D.
        </motion.a>

        <div className={`flex ${scrolled ? "flex-row gap-6" : "flex-col items-start gap-2 text-2xl"}`}>
          <a href="/#philosophy" className={linkClass("#philosophy")}>
            PHILOSOPHY
          </a>

          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`text-white font-semibold hover:text-gray-300 transition-colors focus:outline-none px-1 relative after:content-[''] after:block after:h-0.5 after:rounded after:bg-white after:transition-all after:duration-300 after:absolute after:left-0 after:right-0 after:bottom-0 after:scale-x-0 ${
                ["#openlabs", "#grasp", "#tell"].some(isActive) ? "after:scale-x-100 after:h-0.5" : ""
              }`}
              onClick={() => setOpen((prev) => !prev)}
              type="button"
            >
              OUTREACH
            </button>

            <AnimatePresence>
              {open && (
                <motion.div
                  key="dropdown"
                  initial={{ opacity: 0, y: -10, pointerEvents: "none" }}
                  animate={{ opacity: 1, y: 0, pointerEvents: "auto" }}
                  exit={{ opacity: 0, y: -10, pointerEvents: "none" }}
                  transition={{ duration: 0.2 }}
                  className={`absolute mt-2 w-56 bg-white rounded-md shadow-lg py-2 z-50 flex flex-col ${
                    scrolled ? "left-0" : "left-40 top-0"
                  }`}
                >
                  <Link to="/open-labs" className="px-4 py-2 text-black hover:bg-gray-100" onClick={() => setOpen(false)}>
                    OPEN LABS AT PENN
                  </Link>
                  <Link to="/grasp" className="px-4 py-2 text-black hover:bg-gray-100" onClick={() => setOpen(false)}>
                    G.R.A.S.P.
                  </Link>
                  <Link to="/tell" className="px-4 py-2 text-black hover:bg-gray-100" onClick={() => setOpen(false)}>
                    T.E.L.L.
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="/#testimonials" className={linkClass("/#testimonials")}>
            TESTIMONIALS
          </a>
        </div>
      </div>
    </motion.nav>
  );
};
