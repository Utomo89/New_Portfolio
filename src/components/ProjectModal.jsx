import { useEffect, useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, Github, ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  const [activeImg, setActiveImg] = useState(0);
  const images = project?.images || [project?.image];

  // Tutup dengan Escape
  useEffect(() => {
    const handler = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Cegah scroll body saat modal terbuka
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const prev = () => setActiveImg((i) => (i - 1 + images.length) % images.length);
  const next = () => setActiveImg((i) => (i + 1) % images.length);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <Motion.div
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 pointer-events-none"
          >
            <div
              className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto pointer-events-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* ── Image Gallery ── */}
              <div className="relative w-full h-[260px] md:h-[380px] bg-[#F0EDE8] overflow-hidden rounded-t-2xl">
                <img
                  key={activeImg}
                  src={images[activeImg]}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />

                {/* Prev / Next — hanya muncul jika gambar > 1 */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={prev}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-md"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={next}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-md"
                    >
                      <ChevronRight size={18} />
                    </button>

                    {/* Dot indicators */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                      {images.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveImg(i)}
                          className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                            i === activeImg ? "bg-white w-4" : "bg-white/50"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}

                {/* Category badge */}
                <span className="absolute top-3 left-3 text-[0.65rem] font-medium tracking-widest uppercase text-white bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full">
                  {project.category}
                </span>

                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-md"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Thumbnail strip — hanya jika gambar > 1 */}
              {images.length > 1 && (
                <div className="flex gap-2 px-6 pt-4 overflow-x-auto">
                  {images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImg(i)}
                      className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                        i === activeImg
                          ? "border-[#1A1814]"
                          : "border-transparent opacity-50 hover:opacity-80"
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* ── Content ── */}
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h2 className="font-serif font-light text-2xl md:text-3xl tracking-tight text-[#1A1814]">
                    {project.name}
                  </h2>
                  <span className="font-serif text-sm text-[#C8C4BC] font-light flex-shrink-0 pt-1">
                    {project.number}
                  </span>
                </div>

                <p className="text-sm text-[#6B6860] font-light leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Stack */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[0.72rem] bg-[#F0EDE8] text-[#6B6860] px-2.5 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-5 border-t border-[#F0EDE8]">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 bg-[#1A1814] text-white text-sm font-medium px-5 py-2.5 rounded-full hover:opacity-80 transition-opacity"
                    >
                      Live preview <ArrowUpRight size={14} />
                    </a>
                  )}
                  {project.github && project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 border border-[#E8E4DC] text-[#1A1814] text-sm font-medium px-5 py-2.5 rounded-full hover:border-[#1A1814] transition-colors"
                    >
                      <Github size={14} /> Source
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Motion.div>
        </>
      )}
    </AnimatePresence>
  );
}