import { useRef } from "react";
import { motion as Motion, useInView } from "framer-motion";
import { Mail, Linkedin, Github, FileText } from "lucide-react";
import { personalInfo } from "../data";

const links = [
  {
    label: "Send an email",
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
    primary: true,
  },
  {
    label: "LinkedIn",
    href: personalInfo.linkedin,
    icon: Linkedin,
    primary: false,
  },
  {
    label: "GitHub",
    href: personalInfo.github,
    icon: Github,
    primary: false,
  },
  {
    label: "Download CV",
    href: personalInfo.cv,
    icon: FileText,
    primary: false,
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      <section
        id="contact"
        ref={ref}
        className="bg-[#1A1814] text-white py-28 px-6 md:px-12 text-center"
      >
        <div className="max-w-2xl mx-auto">
          <Motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs font-medium tracking-widest uppercase text-white/30 mb-5"
          >
            Contact
          </Motion.p>

          <Motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif font-light text-4xl md:text-5xl tracking-tight text-white mb-5 leading-[1.15]"
          >
            Let's build something{" "}
            <em className="not-italic text-white/40">together.</em>
          </Motion.h2>

          <Motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#A8A49E] font-light leading-relaxed mb-12"
          >
            I'm open to fulltime roles, freelance projects, and collaborations.
            If you have something in mind, feel free to reach out.
          </Motion.p>

          <Motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className={`inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-full transition-all duration-200 ${
                  link.primary
                    ? "bg-white text-[#1A1814] hover:opacity-85"
                    : "border border-white/20 text-white hover:border-white/50 hover:bg-white/5"
                }`}
              >
                <link.icon size={15} />
                {link.label}
              </a>
            ))}
          </Motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1814] border-t border-white/[0.07] px-6 md:px-12 py-5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <span className="text-xs text-white/25">
            © {new Date().getFullYear()} {personalInfo.name}. Built with React &
            Tailwind.
          </span>
          <span className="text-xs text-white/25">
            Designed & developed by you.
          </span>
        </div>
      </footer>
    </>
  );
}