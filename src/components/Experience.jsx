import { useRef } from "react";
import { motion as Motion, useInView } from "framer-motion";
import { experiences } from "../data";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" ref={ref} className="bg-white py-28 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        <Motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-l font-medium tracking-widest uppercase text-[#A8A49E] mb-5"
        >
          Experience
        </Motion.p>
        <Motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-serif font-light text-4xl md:text-5xl tracking-tight mb-12"
        >
          Where I've worked
        </Motion.h2>

        <div className="divide-y divide-[#E8E4DC] border-y border-[#E8E4DC]">
          {experiences.map((exp, i) => (
            <Motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="grid md:grid-cols-[200px_1fr] gap-3 md:gap-12 py-8"
            >
              {/* Period */}
              <div className="text-sm text-[#A8A49E] font-light pt-0.5">
                {exp.period}
              </div>

              {/* Details */}
              <div>
                <div className="text-[1.05rem] font-medium text-[#1A1814] mb-0.5">
                  {exp.role}
                </div>
                <div className="text-sm text-blue-500 font-light mb-3">
                  {exp.company} · {exp.type}
                </div>
                <p className="text-sm text-[#6B6860] font-light leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </Motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}