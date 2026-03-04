import { motion as Motion } from "framer-motion";
import { personalInfo, stats } from "../data";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-24 pb-16 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto w-full">

        {/* Availability Badge */}
        {personalInfo.availableForWork && (
          <Motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-flex items-center gap-2 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-medium tracking-widest uppercase text-[#6B6860]">
              Available for opportunities
            </span>
          </Motion.div>
        )}

        {/* Headline */}
        <Motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="font-serif font-light text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight text-[#1A1814] mb-6"
        >
          {personalInfo.role}
          <br />
          <em className="not-italic text-[#A8A49E]">{personalInfo.tagline.split(" ").slice(0, 2).join(" ")}</em>{" "}
          {personalInfo.tagline.split(" ").slice(2).join(" ")}
        </Motion.h1>

        {/* Description */}
        <Motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="max-w-lg text-lg text-[#6B6860] font-light leading-relaxed mb-10"
        >
          {personalInfo.description}
        </Motion.p>

        {/* CTA Buttons */}
        <Motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
          className="flex flex-wrap gap-3 mb-20"
        >
          <a
            href="#work"
            className="inline-flex items-center gap-2 bg-[#1A1814] text-white text-sm font-medium px-6 py-3 rounded-full hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200"
          >
            See my work →
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-[#E8E4DC] text-[#1A1814] text-sm font-medium px-6 py-3 rounded-full hover:border-[#1A1814] hover:bg-white transition-all duration-200"
          >
            Let's connect
          </a>
        </Motion.div>

        {/* Stats */}
        <Motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.4}
          className="flex flex-wrap gap-10 pt-8 border-t border-[#E8E4DC]"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-serif font-light text-4xl tracking-tight text-[#1A1814]">
                {stat.number}
              </div>
              <div className="text-xs text-[#A8A49E] font-light mt-1 tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </Motion.div>
      </div>
    </section>
  );
}