import { useRef, useState } from "react";
import { motion as Motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { projects, projectCategories, personalInfo } from "../data";
import ProjectModal from "./ProjectModal";

export default function Work() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);
  const PER_PAGE = 3;

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE);

  return (
    <section id="work" ref={ref} className="py-28 px-6 md:px-12 bg-[#FAF8F4]">
      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
          <div>
            <Motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-l font-medium tracking-widest uppercase text-[#A8A49E] mb-4"
            >
              Selected work
            </Motion.p>
            <Motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif font-light text-4xl md:text-5xl tracking-tight text-[#1A1814]"
            >
              Projects I've built
            </Motion.h2>
          </div>
          <Motion.a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm text-[#6B6860] hover:text-[#1A1814] underline underline-offset-4 transition-colors self-start md:self-auto whitespace-nowrap"
          >
            View all on GitHub →
          </Motion.a>
        </div>

        {/* ── Filter Tabs ── */}
        <Motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-2 mb-10 flex-wrap"
        >
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveFilter(cat); setCurrentPage(1); }}
              className={`inline-flex items-center gap-1.5 text-sm px-4 py-1.5 rounded-full font-light transition-all duration-200 cursor-pointer ${
                activeFilter === cat
                  ? "bg-[#1A1814] text-white"
                  : "bg-white border border-[#E8E4DC] text-[#6B6860] hover:border-[#1A1814] hover:text-[#1A1814]"
              }`}
            >
              {cat}
              <span
                className={`text-[0.65rem] font-medium tabular-nums ${
                  activeFilter === cat ? "text-white/50" : "text-[#A8A49E]"
                }`}
              >
                {cat === "All"
                  ? projects.length
                  : projects.filter((p) => p.category === cat).length}
              </span>
            </button>
          ))}
        </Motion.div>

        {/* ── Project Cards ── */}
        <Motion.div layout className="flex flex-col gap-4">
          <AnimatePresence mode="popLayout">
            {paginated.map((project, i) => (
              <Motion.div
                key={project.number}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="group bg-white border border-[#E8E4DC] rounded-2xl overflow-hidden hover:border-[#C8C4BC] hover:shadow-md transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:h-[220px]">

                  {/* ── Image — left ── */}
                  <div
                    className="relative w-full md:w-[280px] md:min-w-[280px] h-[220px] overflow-hidden bg-[#F0EDE8] flex-shrink-0 cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-500 ease-out"
                    />
                    {/* Category badge */}
                    <span className="absolute top-3 left-3 text-[0.65rem] font-medium tracking-widest uppercase text-white bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full">
                      {project.category}
                    </span>
                    {/* View detail hint */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-xs font-medium bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
                        View details
                      </span>
                    </div>
                  </div>

                  {/* ── Content — right ── */}
                  <div className="flex flex-col justify-between flex-1 p-6 md:p-8 min-w-0 overflow-hidden">
                    <div className="flex-1 min-h-0 overflow-hidden">
                      {/* Number + Name */}
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3
                          className="text-xl font-medium tracking-tight text-[#1A1814] group-hover:text-blue-600 transition-colors duration-200 leading-snug line-clamp-1 cursor-pointer"
                          onClick={() => setSelectedProject(project)}
                        >
                          {project.name}
                        </h3>
                        <span className="font-serif text-sm text-[#C8C4BC] font-light flex-shrink-0 pt-0.5">
                          {project.number}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-[#6B6860] font-light leading-relaxed mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Stack Tags */}
                      <div className="flex flex-wrap gap-1.5 overflow-hidden max-h-[28px]">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="text-[0.72rem] bg-[#F0EDE8] text-[#6B6860] px-2.5 py-1 rounded-full whitespace-nowrap"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4 pt-4 flex-shrink-0">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-[#1A1814] hover:text-blue-600 transition-colors"
                        >
                          Live preview <ArrowUpRight size={14} />
                        </a>
                      )}
                      {project.github && project.github !== "#" && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-[#A8A49E] hover:text-[#1A1814] transition-colors"
                        >
                          <Github size={14} /> Source
                        </a>
                      )}
                      {/* Fallback jika tidak ada link apapun */}
                      {!project.link && (!project.github || project.github === "#") && (
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="inline-flex items-center gap-1.5 text-sm text-[#A8A49E] hover:text-[#1A1814] transition-colors"
                        >
                          View details →
                        </button>
                      )}
                    </div>
                  </div>

                </div>
              </Motion.div>
            ))}
          </AnimatePresence>
        </Motion.div>

        {/* ── Pagination ── */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-10">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="w-9 h-9 rounded-full border border-[#E8E4DC] flex items-center justify-center text-sm text-[#6B6860] hover:border-[#1A1814] hover:text-[#1A1814] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
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
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="w-9 h-9 rounded-full border border-[#E8E4DC] flex items-center justify-center text-sm text-[#6B6860] hover:border-[#1A1814] hover:text-[#1A1814] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              →
            </button>
          </div>
        )}

        {/* ── Empty State ── */}
        {filtered.length === 0 && (
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 text-[#A8A49E] text-sm font-light"
          >
            No projects in this category yet.
          </Motion.div>
        )}

      </div>

      {/* ── Modal ── */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

    </section>
  );
}