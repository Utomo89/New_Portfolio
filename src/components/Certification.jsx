import { useRef, useState } from "react";
import { motion as Motion, useInView } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import { certifications } from "../data/certificate";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export default function Certification() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [currentPage, setCurrentPage] = useState(1);
  const PER_PAGE = 3;

  const totalPages = Math.ceil(certifications.length / PER_PAGE);
  const paginated = certifications.slice(
    (currentPage - 1) * PER_PAGE,
    currentPage * PER_PAGE,
  );

  return (
    <section
      id="certification"
      ref={ref}
      className="py-28 px-6 md:px-12 bg-[#FAF8F4]">
      <div className="max-w-6xl mx-auto">
        {/* ── Header ── */}
        <Motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0}
          className="text-xs font-medium tracking-widest uppercase text-[#A8A49E] mb-5">
          Certifications
        </Motion.p>
        <Motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0.1}
          className="font-serif font-light text-4xl md:text-5xl tracking-tight text-[#1A1814] mb-12">
          Credentials & courses
        </Motion.h2>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {paginated.map((cert, i) => (
            <Motion.div
              key={cert.id}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.1 + i * 0.07}
              className="group bg-white border border-[#E8E4DC] rounded-2xl p-5 flex flex-col justify-between hover:border-[#C8C4BC] hover:shadow-md transition-all duration-300">
              {/* Top — Logo + Issuer */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl overflow-hidden bg-[#F0EDE8] flex items-center justify-center flex-shrink-0">
                  {cert.logo ? (
                    <img
                      src={cert.logo}
                      alt={cert.issuer}
                      className="w-full h-full object-contain p-1"
                    />
                  ) : (
                    <Award size={18} className="text-[#A8A49E]" />
                  )}
                </div>
                {cert.credential && (
                  <a
                    href={cert.credential}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#A8A49E] hover:text-[#1A1814] transition-colors p-1 -mt-1 -mr-1"
                    aria-label="View credential">
                    <ExternalLink size={15} />
                  </a>
                )}
              </div>

              {/* Cert Name */}
              <div className="flex-1">
                <h3 className="text-[0.95rem] font-medium text-[#1A1814] leading-snug mb-1 group-hover:text-blue-600 transition-colors duration-200">
                  {cert.name}
                </h3>
                <p className="text-sm text-[#6B6860] font-light">
                  {cert.issuer}
                </p>
              </div>

              {/* Bottom — Date + Badge */}
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#F0EDE8]">
                <span className="text-xs text-[#A8A49E] font-light">
                  {cert.date}
                </span>
                <span className="text-[0.65rem] font-medium tracking-widest uppercase bg-[#F0EDE8] text-[#6B6860] px-2.5 py-1 rounded-full">
                  Verified
                </span>
              </div>
            </Motion.div>
          ))}
        </div>
        {/* ── Pagination ── */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-10">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="w-9 h-9 rounded-full border border-[#E8E4DC] flex items-center justify-center text-sm text-[#6B6860] hover:border-[#1A1814] hover:text-[#1A1814] disabled:opacity-30 disabled:cursor-not-allowed transition-all">
              ←
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-9 h-9 rounded-full text-sm font-light transition-all ${
                  currentPage === page
                    ? "bg-[#1A1814] text-white"
                    : "border border-[#E8E4DC] text-[#6B6860] hover:border-[#1A1814] hover:text-[#1A1814]"
                }`}>
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="w-9 h-9 rounded-full border border-[#E8E4DC] flex items-center justify-center text-sm text-[#6B6860] hover:border-[#1A1814] hover:text-[#1A1814] disabled:opacity-30 disabled:cursor-not-allowed transition-all">
              →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
