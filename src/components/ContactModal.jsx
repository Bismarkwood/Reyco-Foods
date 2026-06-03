// src/components/ContactModal.jsx
import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./ContactModal.css";

export default function ContactModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose?.();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="contact-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="presentation"
          onMouseDown={onClose}
        >
          <motion.div
            className="contact-modal__panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="contact-modal__close"
              aria-label="Close contact dialog"
              onClick={onClose}
            >
              x
            </button>

            <p className="contact-modal__eyebrow">Trade enquiries</p>
            <h2 id="contact-modal-title" className="contact-modal__title">
              Start a conversation with Ryeco Foods
            </h2>
            <p className="contact-modal__copy">
              Tell us what you need to source, export, or distribute and the team
              will come back with the right next step.
            </p>

            <div className="contact-modal__actions">
              <a href="mailto:trade@ryecofoods.com" className="contact-modal__primary">
                Email trade@ryecofoods.com
              </a>
              <a href="https://wa.me/447960267571" className="contact-modal__secondary" target="_blank" rel="noreferrer">
                WhatsApp +44 7960 267 571
              </a>
              <a href="tel:+447908183169" className="contact-modal__secondary">
                Call +44 7908 183 169
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
