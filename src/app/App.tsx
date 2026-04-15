import { ArrowRight, Mail, Linkedin, Github, ExternalLink, GraduationCap, BookOpen, Award, Figma, Pencil, Palette, Share2, Users, GitBranch, Box, FileText, Trello, BookMarked, Sparkles, MessageSquare, Image } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

export default function App() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const buddhaY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const buddhaOpacity = useTransform(scrollYProgress, [0, 0.5], [0.15, 0]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="size-full overflow-y-auto bg-white">
      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
        {/* Buddha Parallax Background */}
        <motion.div
          style={{ y: buddhaY, opacity: buddhaOpacity }}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[800px] pointer-events-none"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1625888593861-8c7493a26025?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Buddha"
            className="w-full h-full object-contain"
            style={{
              filter: "grayscale(100%) brightness(1.2) contrast(1.5)",
              mixBlendMode: "multiply",
              opacity: 0.4,
            }}
          />
        </motion.div>

        <div className="max-w-4xl w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 text-emerald-600 font-medium">UX/UI Designer</div>
            <h1 className="text-6xl font-semibold mb-6 text-gray-900">
              Marianna Ozharovska
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
              I design end-to-end experiences for complex web and mobile products,
              specializing in FinTech and Data Science with a focus on user profiling,
              competitive research, and prototyping.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors flex items-center gap-2"
              >
                View Work
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-6 py-3 border border-gray-300 text-gray-900 rounded-lg hover:border-emerald-600 hover:text-emerald-600 transition-colors"
              >
                Contact
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm uppercase tracking-wider text-emerald-600 mb-4">About</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  UX/UI designer with 3+ years of experience in complex web and mobile products.
                  Focused on end-to-end design including analyzing complexity, user profiling,
                  branding, competitive research, and prototyping for FinTech and Data Science
                  products.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  I specialize in designing complex web applications, data-heavy interfaces,
                  and complete systems while maintaining design systems and ensuring accessibility
                  and inclusive design practices.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-4 text-gray-900">Core Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "End-to-End Design",
                    "UX/UI Design",
                    "User Research",
                    "Prototyping",
                    "Design Systems",
                    "Data-Heavy Interfaces",
                    "Accessibility Design",
                    "Figma",
                    "Sketch",
                    "Adobe XD",
                    "Miro",
                    "Jira",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-white text-gray-700 text-sm rounded-full border border-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm uppercase tracking-wider text-emerald-600 mb-12">Experience</h2>
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border-l-2 border-gray-200 pl-6 relative"
                >
                  <div className="absolute w-3 h-3 bg-emerald-600 rounded-full -left-[7px] top-1.5"></div>
                  <div className="text-sm text-gray-500 mb-1">{exp.period}</div>
                  <h3 className="text-xl font-medium text-gray-900 mb-1">{exp.role}</h3>
                  <div className="text-emerald-600 mb-3">{exp.company}</div>
                  <ul className="space-y-2 text-gray-700">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-emerald-600 mt-1.5">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-6 bg-gradient-to-b from-emerald-50/30 to-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm uppercase tracking-wider text-emerald-600 mb-12">Education & Learning</h2>

            {/* Horizontal flow layout */}
            <div className="relative">
              {/* Connection line */}
              <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-200 via-emerald-300 to-emerald-200"></div>

              <div className="grid md:grid-cols-2 gap-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    whileHover={{ y: -8, transition: { duration: 0.2 } }}
                    className="relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-emerald-300 hover:shadow-xl transition-all group"
                  >
                    {/* Connector dot */}
                    <div className="hidden md:block absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-white border-4 border-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      {edu.icon === "graduation" && <GraduationCap className="w-7 h-7 text-emerald-600" />}
                      {edu.icon === "book" && <BookOpen className="w-7 h-7 text-emerald-600" />}
                      {edu.icon === "award" && <Award className="w-7 h-7 text-emerald-600" />}
                    </div>

                    <div className="mt-4">
                      <div className="text-sm text-emerald-600 font-medium mb-2">{edu.period}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{edu.degree}</h3>
                      <div className="text-gray-600 mb-4">{edu.institution}</div>

                      {edu.focus && (
                        <div className="mb-4">
                          <p className="text-sm text-gray-700 leading-relaxed">{edu.focus}</p>
                        </div>
                      )}

                      {edu.highlights && edu.highlights.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {edu.highlights.map((highlight, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-full border border-emerald-100 group-hover:bg-emerald-100 transition-colors"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Decorative corner accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-50 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm uppercase tracking-wider text-emerald-600 mb-12">Selected Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 border border-gray-200 hover:border-emerald-600 hover:shadow-lg transition-all cursor-pointer group"
                >
                  <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-100 transition-colors">
                    <div className="w-6 h-6 bg-emerald-600 rounded"></div>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{project.name}</h3>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">{project.description}</p>
                  <div className="text-xs text-emerald-600 font-medium mb-2">{project.role}</div>
                  {project.outcome && (
                    <p className="text-xs text-gray-500">{project.outcome}</p>
                  )}
                  <div className="mt-4 flex items-center text-emerald-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    View Case Study
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm uppercase tracking-wider text-emerald-600 mb-12">Skills & Expertise</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">UX Expertise</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Complex Web Applications</li>
                  <li>End-to-End Product Design</li>
                  <li>User Profiling</li>
                  <li>Competitive Research</li>
                  <li>User Testing & Validation</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">UI Specialization</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Design Systems Growth</li>
                  <li>Data-Heavy Interfaces</li>
                  <li>Complete Systems Design</li>
                  <li>Accessibility & Inclusion</li>
                  <li>FinTech & Data Science</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Tools & Tech</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Figma</li>
                  <li>Sketch</li>
                  <li>Adobe XD</li>
                  <li>Miro</li>
                  <li>Jira, Notion, Confluence</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tools & Skills Section - Network Grid */}
      <section id="tools" className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-sm uppercase tracking-wider text-emerald-600">Tools & Technologies</h2>
            </div>

            {/* Network Grid */}
            <div className="relative">
              {/* SVG Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#d1d5db" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#10b981" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#d1d5db" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                {/* Horizontal connections */}
                {[0, 1, 2, 3].map((row) => (
                  <motion.line
                    key={`h-${row}`}
                    x1="8%"
                    y1={`${20 + row * 23}%`}
                    x2="92%"
                    y2={`${20 + row * 23}%`}
                    stroke="url(#lineGradient)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: row * 0.1 }}
                  />
                ))}
                {/* Vertical connections */}
                {[0, 1, 2, 3, 4, 5].map((col) => (
                  <motion.line
                    key={`v-${col}`}
                    x1={`${10 + col * 16}%`}
                    y1="20%"
                    x2={`${10 + col * 16}%`}
                    y2="89%"
                    stroke="url(#lineGradient)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: col * 0.05 }}
                  />
                ))}
              </svg>

              {/* Tool Nodes */}
              <div className="relative grid grid-cols-3 md:grid-cols-6 gap-x-8 gap-y-12 md:gap-x-12 md:gap-y-16 py-8" style={{ zIndex: 1 }}>
                {allTools.map((tool, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.15, zIndex: 10 }}
                    className="relative flex justify-center group"
                  >
                    {/* Circular Node */}
                    <div className={`
                      relative w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center cursor-pointer
                      transition-all duration-300
                      ${tool.primary
                        ? 'bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-lg shadow-emerald-200'
                        : 'bg-white border-2 border-gray-200 group-hover:border-emerald-400 group-hover:shadow-lg group-hover:shadow-emerald-100'
                      }
                    `}>
                      {/* Icon */}
                      <div className={`
                        transition-colors
                        ${tool.primary ? 'text-white' : 'text-gray-600 group-hover:text-emerald-600'}
                      `}>
                        {tool.iconComponent}
                      </div>

                      {/* Pulsing ring on hover */}
                      <motion.div
                        className={`absolute inset-0 rounded-full border-2 ${tool.primary ? 'border-emerald-400' : 'border-emerald-300'}`}
                        initial={{ scale: 1, opacity: 0 }}
                        whileHover={{ scale: 1.3, opacity: 0 }}
                        transition={{ duration: 0.6, repeat: Infinity }}
                      />

                      {/* Primary indicator */}
                      {tool.primary && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full border-2 border-white"></div>
                      )}
                    </div>

                    {/* Tooltip - Tool Name */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                      <div className="bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg">
                        {tool.name}
                      </div>
                    </div>

                    {/* Tooltip - Description on hover */}
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20">
                      <div className="bg-emerald-600 text-white text-xs px-3 py-1.5 rounded-lg">
                        {tool.description}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm uppercase tracking-wider text-emerald-600 mb-6">Get In Touch</h2>
            <p className="text-2xl text-gray-900 mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="flex justify-center gap-6 mb-8">
              <a
                href="mailto:marianna.ozharovska@example.com"
                className="flex items-center gap-2 text-gray-700 hover:text-emerald-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>marianna.ozharovska@example.com</span>
              </a>
            </div>
            <div className="flex justify-center gap-4">
              <a
                href="#"
                className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center hover:border-emerald-600 hover:text-emerald-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center hover:border-emerald-600 hover:text-emerald-600 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center text-sm text-gray-500">
          © 2026 Marianna Ozharovska. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

const experiences = [
  {
    period: "2021 - Present",
    role: "UX/UI Designer",
    company: "DataArt | Design Studio",
    achievements: [
      "UX/UI design for complex web applications including FinTech and Data Science platforms",
      "End-to-end product design from concept to delivery",
      "Complete system & data-heavy interfaces design and optimization",
      "Design systems maintenance & growth across multiple products",
      "Accessibility & inclusive design implementation",
    ],
  },
  {
    period: "2023",
    role: "UX Researcher, UI Designer, Project Lead",
    company: "Design Hackathon - 1st Prize Winner 🏆",
    achievements: [
      "Led design process for mobile insurance app from concept to prototype",
      "Conducted competitive analysis and business requirements gathering",
      "Coordinated with experts and stakeholders throughout design process",
      "Created and tested interactive prototypes across multiple stages",
      "Won 1st place for innovative home insurance quote solution",
    ],
  },
];

const education = [
  {
    period: "Master's Degree",
    degree: "Applied Linguistics",
    institution: "Ukrainian Institute of Linguistics and Management, Ukraine",
    icon: "graduation",
    focus: "Advanced study in linguistics, communication theory, and cognitive patterns with applications to user research and design thinking",
    highlights: ["Communication Theory", "User Psychology", "Research Methods", "Cross-Cultural Analysis"],
  },
];

const allTools = [
  { name: "Figma", iconComponent: <Figma className="w-6 h-6 md:w-7 md:h-7" />, description: "Primary design tool", primary: true },
  { name: "Adobe XD", iconComponent: <Pencil className="w-6 h-6 md:w-7 md:h-7" />, description: "UI/UX design" },
  { name: "Sketch", iconComponent: <Palette className="w-6 h-6 md:w-7 md:h-7" />, description: "Interface design" },
  { name: "Miro", iconComponent: <Share2 className="w-6 h-6 md:w-7 md:h-7" />, description: "Workshops & ideation" },
  { name: "FigJam", iconComponent: <Users className="w-6 h-6 md:w-7 md:h-7" />, description: "Collaborative whiteboard" },
  { name: "Zeplin", iconComponent: <GitBranch className="w-6 h-6 md:w-7 md:h-7" />, description: "Design handoff" },
  { name: "Abstract", iconComponent: <Box className="w-6 h-6 md:w-7 md:h-7" />, description: "Version control" },
  { name: "Confluence", iconComponent: <FileText className="w-6 h-6 md:w-7 md:h-7" />, description: "Documentation" },
  { name: "Jira", iconComponent: <Trello className="w-6 h-6 md:w-7 md:h-7" />, description: "Project management" },
  { name: "Notion", iconComponent: <BookMarked className="w-6 h-6 md:w-7 md:h-7" />, description: "Knowledge base" },
  { name: "Figma Make", iconComponent: <Sparkles className="w-6 h-6 md:w-7 md:h-7" />, description: "AI-powered design" },
  { name: "ChatGPT", iconComponent: <MessageSquare className="w-6 h-6 md:w-7 md:h-7" />, description: "AI assistance" },
];

const projects = [
  {
    name: "Crypto Trading & Lending Platform",
    description: "Designed one-stop shop for individuals and institutions to trade, borrow, lend crypto, and participate in new financial markets using DeFi protocols.",
    role: "UX/UI Designer",
    outcome: "44M+ unique addresses, $80B+ annualized transaction volume",
  },
  {
    name: "Data Science Platform",
    description: "AI platform empowering users to engage in data science and facilitate collaboration among specialists focused on data-driven transformation and business growth.",
    role: "UX/UI Designer",
    outcome: "Leveraged AI to cut concept time by 40%",
  },
  {
    name: "Krisp Control Software",
    description: "Voice AI application making audio crystal clear across different platforms. Solo voice AI app deployed for web and mobile environments.",
    role: "UX/UI Designer",
    outcome: "Multi-platform deployment",
  },
  {
    name: "Skills in Platforms",
    description: "Designed B2B SaaS UX & UI from scratch, built on UI8 templates and integrated with Zapier and Active Campaign for automated workflows.",
    role: "Lead Designer",
    outcome: "Full automation integration",
  },
  {
    name: "Home Insurance Mobile App",
    description: "Award-winning mobile solution guiding users through home insurance quotes. Led full design process including research, prototyping, and testing.",
    role: "UX Researcher, UI Designer, Project Lead",
    outcome: "1st Prize at Design Hackathon 🏆",
  },
  {
    name: "Digital Products - Crypto LP & DeFi",
    description: "Designed digital products from scratch within crypto liquidity provision and decentralized finance ecosystem as part of product team.",
    role: "Product Designer",
    outcome: "Platform facilitates billions in transactions",
  },
];