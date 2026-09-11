import React, { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, 
  Send, 
  Download, 
  Copy, 
  Check, 
  CheckCircle2 
} from 'lucide-react';
import Modal from './ui/Modal';
import Button from './ui/Button';
import PassForm from './pass/PassForm';
import VipTicketCard from './pass/VipTicketCard';
import { createTicketRecord, generateTicketCanvas } from '../utils/ticketGenerator';

const STORAGE_KEY = 'mastergym_vip_pass';

export default function PassModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: 'ULEAM'
  });
  const [ticket, setTicket] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [notice, setNotice] = useState(null);

  const ticketRef = useRef(null);

  // Sync ticket to localStorage for user convenience
  useEffect(() => {
    if (ticket) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(ticket));
      } catch {}
    }
  }, [ticket]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTicket = createTicketRecord(formData);
    setTicket(newTicket);
    setNotice(null);
    setDownloadSuccess(false);
    setCopySuccess(false);
  };

  const handleClearTicket = () => {
    setTicket(null);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
    setNotice(null);
  };

  const handleDownloadImage = async () => {
    if (!ticket) return;
    setIsGeneratingImage(true);

    try {
      const canvas = await generateTicketCanvas(ticketRef, ticket);
      if (!canvas) throw new Error('Could not generate canvas');

      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `Pase-VIP-MasterGym-1Semana-${ticket.id}.png`;
      link.href = dataUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3500);
    } catch (err) {
      console.error('Error downloading ticket image:', err);
      alert('Hubo un inconveniente al generar la imagen. Por favor intenta nuevamente.');
    } finally {
      setIsGeneratingImage(false);
    }
  };

  const handleCopyImage = async () => {
    if (!ticket) return;
    setIsGeneratingImage(true);

    try {
      const canvas = await generateTicketCanvas(ticketRef, ticket);
      if (!canvas) throw new Error('Could not render canvas');

      const blob = await new Promise((res) => canvas.toBlob(res, 'image/png'));
      if (blob && navigator.clipboard && window.ClipboardItem) {
        await navigator.clipboard.write([
          new ClipboardItem({ 'image/png': blob })
        ]);
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 3000);
      } else {
        handleDownloadImage();
      }
    } catch (err) {
      console.warn('Clipboard write failed:', err);
      handleDownloadImage();
    } finally {
      setIsGeneratingImage(false);
    }
  };

  const handleShareWhatsApp = async () => {
    if (!ticket) return;
    setIsGeneratingImage(true);

    try {
      const canvas = await generateTicketCanvas(ticketRef, ticket);
      if (!canvas) {
        window.open(ticket.whatsappUrl, '_blank');
        return;
      }

      const blob = await new Promise((res) => canvas.toBlob(res, 'image/png'));
      const filename = `Pase-VIP-MasterGym-${ticket.id}.png`;
      const file = new File([blob], filename, { type: 'image/png' });

      // Native mobile Web Share
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        try {
          await navigator.share({
            files: [file],
            title: 'Mi Pase VIP Master Gym Manta (1 Semana)',
            text: ticket.rawMsg
          });
          setIsGeneratingImage(false);
          return;
        } catch (shareErr) {
          if (shareErr.name === 'AbortError') {
            setIsGeneratingImage(false);
            return;
          }
        }
      }

      // Desktop / Web WhatsApp flow:
      let copied = false;
      if (navigator.clipboard && window.ClipboardItem) {
        try {
          await navigator.clipboard.write([
            new ClipboardItem({ 'image/png': blob })
          ]);
          copied = true;
        } catch {}
      }

      // Trigger automatic image download
      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = filename;
      link.href = dataUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setNotice({
        title: '¡Ticket preparado y WhatsApp abierto!',
        message: copied
          ? 'Copiamos tu ticket al portapapeles y lo descargamos. En WhatsApp presiona Pegar (Ctrl+V) en el chat para enviar la imagen junto con el mensaje.'
          : 'Descargamos tu ticket como imagen. En WhatsApp adjúntalo al chat junto con tu mensaje.'
      });

      window.open(ticket.whatsappUrl, '_blank');
    } catch (err) {
      console.error('Error in WhatsApp share:', err);
      window.open(ticket.whatsappUrl, '_blank');
    } finally {
      setIsGeneratingImage(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Pase VIP 1 Semana Gratis"
      maxWidth="540px"
    >
      {!ticket ? (
        <PassForm
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleSubmit}
        />
      ) : (
        <div style={{ textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
            <Sparkles size={16} style={{ color: 'var(--accent)' }} />
            <span className="font-mono text-yellow" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 'bold' }}>
              PASE VIP 1 SEMANA EMITIDO EXITOSAMENTE
            </span>
          </div>

          <VipTicketCard ticket={ticket} ticketRef={ticketRef} />

          {notice && (
            <div 
              style={{ 
                background: 'rgba(37, 211, 102, 0.12)', 
                border: '1px solid rgba(37, 211, 102, 0.4)', 
                borderRadius: '10px', 
                padding: '0.75rem', 
                marginBottom: '0.85rem',
                textAlign: 'left',
                fontSize: '12px',
                color: '#FFFFFF'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 'bold', color: '#25D366', marginBottom: '2px' }}>
                <CheckCircle2 size={15} />
                <span>{notice.title}</span>
              </div>
              <p style={{ margin: 0, fontSize: '11px', color: '#E2E8F0', lineHeight: '1.4' }}>
                {notice.message}
              </p>
            </div>
          )}

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            <Button
              onClick={handleShareWhatsApp}
              disabled={isGeneratingImage}
              variant="primary"
              fullWidth
              size="lg"
              style={{ minHeight: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
            >
              <Send size={18} />
              <span>
                {isGeneratingImage ? 'Generando Ticket...' : 'Enviar por WhatsApp (Ticket + Mensaje) →'}
              </span>
            </Button>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem' }}>
              <Button
                onClick={handleDownloadImage}
                disabled={isGeneratingImage}
                variant="outline"
                size="sm"
                style={{ minHeight: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}
              >
                {downloadSuccess ? (
                  <>
                    <Check size={14} style={{ color: '#25D366' }} />
                    <span style={{ color: '#25D366' }}>¡Descargado!</span>
                  </>
                ) : (
                  <>
                    <Download size={14} />
                    <span>Descargar Ticket (PNG)</span>
                  </>
                )}
              </Button>

              <Button
                onClick={handleCopyImage}
                disabled={isGeneratingImage}
                variant="outline"
                size="sm"
                style={{ minHeight: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}
              >
                {copySuccess ? (
                  <>
                    <Check size={14} style={{ color: '#25D366' }} />
                    <span style={{ color: '#25D366' }}>¡Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copiar Imagen</span>
                  </>
                )}
              </Button>
            </div>

            <div style={{ fontSize: '11px', color: 'var(--text-muted)', lineHeight: '1.4', marginTop: '0.2rem' }}>
              💡 En tu celular WhatsApp se abrirá con el ticket adjunto. En tu PC se descargará el ticket para adjuntarlo o pegarlo con Ctrl+V.
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '0.4rem' }}>
              <button 
                onClick={handleClearTicket} 
                type="button"
                className="text-muted"
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '11px', textTransform: 'uppercase', textDecoration: 'underline', padding: '0.3rem', minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}
              >
                Modificar Datos
              </button>
              <button 
                onClick={onClose} 
                type="button"
                className="text-muted"
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '11px', textTransform: 'uppercase', textDecoration: 'underline', padding: '0.3rem', minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
}
