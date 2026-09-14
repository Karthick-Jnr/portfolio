import { useEffect } from 'react';
import { Download, X, FileText } from 'lucide-react';
import { resolveAssetPath } from '../utils';

export const ResumeModal = ({ isOpen, onClose, data }) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const resumeImageUrl = resolveAssetPath(data?.resume_image || './assets/ressume.jpg');
  const resumePdfUrl = resolveAssetPath(data?.resume || './assets/resume.pdf');

  return (
    <div
      className="fixed inset-0 z-[200] bg-black/80 flex items-center justify-center p-3 sm:p-6 select-none"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div className="w-full max-w-4xl max-h-[92vh] bg-bg-secondary border border-border-color rounded-2xl flex flex-col shadow-2xl overflow-hidden text-left">
        {/* Modal Header */}
        <div className="bg-bg-tertiary px-5 py-3.5 flex items-center justify-between border-b border-border-color">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-primary/15 text-primary flex items-center justify-center flex-shrink-0">
              <FileText size={20} />
            </span>
            <div>
              <h3 id="resume-modal-title" className="text-base font-bold text-text-primary leading-tight">
                Resume
              </h3>
              <p className="text-xs text-text-muted font-medium">
                {data?.name || 'Curriculum Vitae'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={resumePdfUrl}
              download="Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-xs cursor-pointer border-none outline-none bg-primary text-bg-secondary hover:bg-primary-hover transition-colors shadow-sm"
            >
              <Download size={14} />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full flex items-center justify-center bg-bg-secondary border border-border-color text-text-secondary hover:text-text-primary hover:bg-bg-tertiary transition-colors cursor-pointer"
              title="Close (Esc)"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Body - Scrollable Resume View */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-bg-primary/50 flex justify-center">
          <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg overflow-hidden border border-border-color">
            <img
              src={resumeImageUrl}
              alt={`${data?.name || 'Professional'} Resume`}
              className="w-full h-auto block"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
