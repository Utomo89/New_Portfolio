import { useRef } from "react";
import { motion as Motion, useInView } from "framer-motion";
import { skills, personalInfo } from "../data";

const photo =
  "https://res.cloudinary.com/dnjak65ws/image/upload/v1771836402/pras_sfje2d.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

// Komponen untuk Profile Section dengan gambar besar
const ProfileSection = ({ inView }) => (
  <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
    {/* Gambar besar di kiri */}
    <Motion.div
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={0.1}
      className="w-full md:w-1/3"
    >
      <div className="relative w-fit mx-auto md:mx-0">
        <div className="w-[200px] h-[200px] md:w-[280px] md:h-[280px] rounded-3xl overflow-hidden ring-2 ring-[#E8E4DC] shadow-xl">
          <img
            src={photo}
            alt={personalInfo.name}
            className="w-full h-full object-cover"
          />
        </div>
        {personalInfo.availableForWork && (
          <span className="absolute -bottom-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center ring-2 ring-[#E8E4DC]">
            <span className="w-3.5 h-3.5 rounded-full bg-emerald-400 block" />
          </span>
        )}
      </div>
    </Motion.div>

    {/* Bio di kanan gambar */}
    <Motion.div
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={0.2}
      className="w-full md:w-2/3 space-y-4"
    >
      <div>
        <div className="text-2xl md:text-3xl font-medium tracking-tight text-[#1A1814]">
          {personalInfo.name}
        </div>
        <div className="text-base md:text-lg text-[#A8A49E] font-light mt-1">
          {personalInfo.role}
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-[#6B6860] font-light leading-relaxed text-base md:text-lg">
          I’m a frontend developer who focuses on crafting pixel-precise,
          accessible, and high-performance user interfaces. I pay close
          attention to usability, performance optimization, code quality, and
          the subtle interactions that elevate user experience.
        </p>
        <p className="text-[#6B6860] font-light leading-relaxed text-base md:text-lg">
          Currently building with React and Next.js, leveraging modern CSS and
          component-driven architecture to create scalable and maintainable
          frontend systems. I value clean structure, readable code, and
          delivering polished interfaces that work seamlessly across devices.
        </p>
      </div>
    </Motion.div>
  </div>
);

// Komponen untuk Skill Cards
const SkillCard = ({ category, items, highlight }) => (
  <div className="bg-[#FAF8F4] border border-[#E8E4DC] rounded-xl p-5 hover:shadow-md transition-shadow">
    <p className="text-xs font-medium tracking-widest uppercase text-[#A8A49E] mb-4">
      {category}
    </p>
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className={`text-sm px-3 py-1.5 rounded-full font-light ${
            highlight
              ? "bg-blue-50 text-blue-600"
              : "bg-[#F0EDE8] text-[#6B6860]"
          }`}
        >
          {item}
        </span>
      ))}
    </div>
  </div>
);

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={ref}
      className="bg-white py-28 px-6 md:px-12 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <Motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0}
          className="text-xs font-medium tracking-widest uppercase text-[#A8A49E] text-center md:text-left"
        >
          About me
        </Motion.p>

        {/* Profile Section - Gambar besar + Bio */}
        <ProfileSection inView={inView} />

        {/* Headline di tengah */}
        <Motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0.3}
          className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.2] text-[#1A1814] max-w-3xl mx-auto text-center"
        >
          I care about the details others overlook.
        </Motion.h2>

        {/* Skills Grid - Di bawah gambar dan bio */}
        <Motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0.4}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {skills.map((skillGroup) => (
            <SkillCard
              key={skillGroup.category}
              category={skillGroup.category}
              items={skillGroup.items}
              highlight={skillGroup.highlight}
            />
          ))}
        </Motion.div>
      </div>
    </section>
  );
}
