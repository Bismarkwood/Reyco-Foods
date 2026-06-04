// src/components/IntroLoader.jsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

const IntroLoader = () => {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const hasSeenLoader = sessionStorage.getItem("ryecofoods-loader-seen");

    if (!hasSeenLoader) {
      setShowLoader(true);

      const timer = setTimeout(() => {
        setShowLoader(false);
        sessionStorage.setItem("ryecofoods-loader-seen", "true");
      }, 3200);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          style={styles.overlay}
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.75, ease: EASE },
          }}
        >
          <div style={styles.container}>

            {/* ── Step 1: intro distribution line (0.4s → 0.9s) ── */}
            <motion.div
              style={styles.topLine}
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 80, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.55, ease: EASE }}
            />

            {/* ── Step 2: logo reveal (0.9s → 1.5s) ── */}
            <motion.img
              src="/logo.png"
              alt="Ryeco Foods"
              style={styles.logo}
              initial={{ opacity: 0, scale: 0.92, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ delay: 0.9, duration: 0.85, ease: EASE }}
            />

            {/* ── Step 3: orange underline accent (1.5s → 2.0s) ── */}
            <motion.div
              style={styles.underline}
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 160, opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.65, ease: EASE }}
            />

            {/* ── Step 4: tagline (2.0s → 2.4s) ── */}
            <motion.p
              style={styles.tagline}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.0, duration: 0.55, ease: EASE }}
            >
              Producers &amp; Exporters of Quality Meats
            </motion.p>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/* ── Inline styles (no Tailwind dependency) ── */
const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    zIndex: 9999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  topLine: {
    height: "3px",
    backgroundColor: "#E36A2E",
    borderRadius: "9999px",
    marginBottom: "20px",
  },
  logo: {
    width: "200px",
    maxWidth: "56vw",
    objectFit: "contain",
  },
  underline: {
    height: "2px",
    backgroundColor: "#E36A2E",
    borderRadius: "9999px",
    marginTop: "18px",
  },
  tagline: {
    marginTop: "14px",
    fontSize: "11px",
    letterSpacing: "0.28em",
    textTransform: "uppercase",
    color: "#1f6b3b",
    fontWeight: 600,
    fontFamily: "'Manrope', 'Segoe UI', sans-serif",
  },
};

export default IntroLoader;
