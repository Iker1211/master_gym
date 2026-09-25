import React, { useEffect } from 'react';
import { X } from 'lucide-react';

/**
 * Master Gym UI Primitive: Modal
 * Diálogo accesible con focus lock, soporte para tecla Escape, scroll locking y ergonomía móvil.
 */
export default function Modal({
  isOpen,
  onClose,
  title,
  ariaLabel,
  maxWidth = '540px',
  children
}) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    // Bloquear scroll de fondo
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className={`modal-overlay ${isOpen ? 'open' : ''}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel || title}
    >
      <div 
        className="modal-box"
        style={{ maxWidth }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Cerrar ventana"
        >
          <X size={20} />
        </button>

        {children}
      </div>
    </div>
  );
}
