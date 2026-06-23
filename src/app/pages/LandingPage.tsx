import { ArrowRight, Mail, Linkedin, ExternalLink, GraduationCap, BookOpen, Award, Figma, Pencil, Palette, Share2, Users, GitBranch, Box, FileText, Trello, BookMarked, Sparkles, MessageSquare, ClipboardList, Search, Layout, RefreshCw, Send, CheckCircle2, Moon, Sun, Phone, Bot, Heart, ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { useRef, useState, useEffect, useLayoutEffect } from "react";
import { useNavigate } from "react-router";
import { LaptopMockup } from "../components/LaptopMockup";
import Frame from "../../imports/Frame31246/Frame31246";
import PuzzleElement from "../../imports/PuzzleElement/PuzzleElement";
import projectImgCrypto from "../../imports/Container-1/36e3e784637904be7a8e410419ea91f18310db4b.png";
import projectImgEdsi from "../../imports/Container-1/a5526c6f24a719265593475f62097f6d256be11f.png";
import projectImgDataScience from "../../imports/Container-1/8d50bead1bf9bc506378a401589ec4532e3ad1c7.png";

export default function LandingPage() {
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(true);
  const [showStickyNav, setShowStickyNav] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const scrollPosition = container.scrollTop;
      const heroHeight = heroRef.current?.offsetHeight || 0;
      setShowStickyNav(scrollPosition > heroHeight * 0.7);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    const container = containerRef.current;
    if (element && container) {
      const offset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - offset;

      container.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleViewProject = (index: number) => {
    const projectSlugs = [
      "crypto-trading-platform",
      "data-science-platform",
      "mobile-banking-app",
      "saas-collaboration-tool"
    ];
    navigate(`/projects/${projectSlugs[index]}`);
  };

  const getToolIcon = (toolName: string) => {
    const iconProps = "w-3.5 h-3.5";
    switch (toolName) {
      case "Figma":
        return <Figma className={iconProps} />;
      case "Jira":
        return <Trello className={iconProps} />;
      case "Miro":
        return <Share2 className={iconProps} />;
      case "Figma Make":
        return <Sparkles className={iconProps} />;
      case "OpenAI":
        return (
          <svg viewBox="0 0 24 24" className={iconProps} fill="currentColor" aria-hidden>
            <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zm-9.022 12.608a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387 2.02-1.168a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.663zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
          </svg>
        );
      default:
        return null;
    }
  };

  const getWorkflowIcon = (iconName: string) => {
    const iconProps = "w-6 h-6";
    switch (iconName) {
      case "ClipboardList":
        return <ClipboardList className={iconProps} />;
      case "Search":
        return <Search className={iconProps} />;
      case "Layout":
        return <Layout className={iconProps} />;
      case "RefreshCw":
        return <RefreshCw className={iconProps} />;
      case "Send":
        return <Send className={iconProps} />;
      case "CheckCircle2":
        return <CheckCircle2 className={iconProps} />;
      default:
        return null;
    }
  };

  const getNetworkToolIcon = (iconName: string, size: string = "w-6 h-6 md:w-7 md:h-7") => {
    switch (iconName) {
      case "Figma":
        return <Figma className={size} />;
      case "Pencil":
        return <Pencil className={size} />;
      case "Palette":
        return <Palette className={size} />;
      case "Share2":
        return <Share2 className={size} />;
      case "Users":
        return <Users className={size} />;
      case "GitBranch":
        return <GitBranch className={size} />;
      case "Box":
        return <Box className={size} />;
      case "FileText":
        return <FileText className={size} />;
      case "Trello":
        return <Trello className={size} />;
      case "BookMarked":
        return <BookMarked className={size} />;
      case "Sparkles":
        return <Sparkles className={size} />;
      case "MessageSquare":
        return <MessageSquare className={size} />;
      case "Bot":
        return <Bot className={size} />;
      case "Heart":
        return <Heart className={size} />;
      default:
        return null;
    }
  };

  return (
    <div ref={containerRef} className="size-full overflow-y-auto bg-white dark:bg-gray-900 transition-colors duration-300 relative">
      {/* Sticky Navigation Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: showStickyNav ? 0 : -100, opacity: showStickyNav ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-sm"
      >
        <div className="max-w-6xl mx-auto px-6 py-3 grid grid-cols-3 items-center">
          {/* Name & Title */}
          <div className="flex items-center gap-3">
            <div>
              <h2 className="text-base font-semibold text-gray-900 dark:text-white">Marianna Ozharovska</h2>
              <p className="text-xs text-emerald-600 dark:text-emerald-400">Product Designer</p>
            </div>
          </div>

          {/* Navigation Links - Centered */}
          <nav className="hidden md:flex items-center justify-center gap-6">
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("workflow")}
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              Workflow
            </button>
            <button
              onClick={() => scrollToSection("tools")}
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              Tools
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button - Shows navigation links on mobile */}
          <div className="flex justify-end">
            <button
              onClick={() => scrollToSection("contact")}
              className="md:hidden px-4 py-2 text-xs bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </motion.header>

      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-6 right-6 z-50 hover:scale-110 transition-all"
        aria-label="Toggle dark mode"
        style={{
          width: '68px',
          height: '56px',
          filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.13))',
        }}
      >
        {/* PuzzleElement fills the container; CSS vars control fill and stroke colours */}
        <div
          className="relative size-full"
          style={{
            '--fill-0': isDark ? '#1f2937' : '#ffffff',
            '--stroke-0': isDark ? '#4b5563' : '#d1d5db',
          } as React.CSSProperties}
        >
          <PuzzleElement />
          <div
            className="absolute inset-0 flex items-center justify-center"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-gray-600" />
            )}
          </div>
        </div>
      </button>

      {/* Hero Section — includes description + Core Skills */}
      <section ref={heroRef} className="flex items-center justify-center px-6 py-20 dark:bg-gray-900">
        <div className="max-w-4xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-1.5 text-emerald-600 dark:text-emerald-400 font-medium text-sm">Product Designer</div>
            <h1 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
              Marianna Ozharovska
            </h1>

            {/* Two-column: description left, Core Skills right */}
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div className="space-y-3">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Product Designer with strong experience designing complex B2B and enterprise products across{" "}
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">FinTech, Healthcare, and Travel</span> sectors.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                  Focused on simplifying complex workflows, building scalable design systems, and improving usability and decision-making. Experienced in AI-driven design workflows.
                </p>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-3">Core Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "End-to-End Design",
                    "UX/UI Design",
                    "User Research",
                    "Prototyping",
                    "Design Systems",
                    "Data-Heavy Interfaces",
                    "Accessibility Design",
                    "Micro-interactions",
                    "Cross-functional collaboration",
                    "Figma",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs rounded-full border border-gray-200 dark:border-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <hr className="border-gray-200 dark:border-gray-700 mb-4" />
            <nav className="flex items-center gap-6">
              {[
                { label: "Projects", id: "projects" },
                { label: "Workflow", id: "workflow" },
                { label: "Tools", id: "tools" },
                { label: "Contact", id: "contact" },
              ].map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  {label}
                </button>
              ))}
            </nav>
          </motion.div>
        </div>
      </section>

      {/* Experience Section — hidden */}
      {false && <section id="experience" className="py-16 px-6 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-4">Experience</h2>
            <ExperienceList />
          </motion.div>
        </div>
      </section>}

      {/* Education Section — hidden */}
      {false && <section id="education" className="py-16 px-6 bg-gradient-to-b from-emerald-50/30 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-6">Education & Learning</h2>

            {/* Compact horizontal layout */}
            <div className="space-y-3">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-6 bg-white dark:bg-gray-800/50 rounded-lg p-4 border border-gray-200 dark:border-gray-700 hover:border-emerald-300 dark:hover:border-emerald-500 transition-all group"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/50 transition-colors">
                    {edu.icon === "graduation" && <GraduationCap className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />}
                    {edu.icon === "book" && <BookOpen className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />}
                    {edu.icon === "award" && <Award className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />}
                  </div>

                  {/* Content - Horizontal Layout */}
                  <div className="flex-1 grid md:grid-cols-3 gap-4 items-start">
                    {/* Degree Info */}
                    <div>
                      <div className="text-xs text-emerald-600 dark:text-emerald-400 font-medium mb-1">{edu.period}</div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{edu.degree}</h3>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{edu.institution}</div>
                    </div>

                    {/* Focus */}
                    {edu.focus && (
                      <div className="md:col-span-1">
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{edu.focus}</p>
                      </div>
                    )}

                    {/* Highlights */}
                    {edu.highlights && edu.highlights.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 items-start">
                        {edu.highlights.map((highlight, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs rounded-full border border-emerald-100 dark:border-emerald-700"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>}

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 bg-[#0a0f1e]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-[#00d492] mb-6">Latest Projects</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {featuredProjects.map((proj, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  onClick={() => navigate(`/projects/${proj.slug}`)}
                  className="bg-[#101828] border border-[#364153] rounded-xl p-[21px] cursor-pointer group hover:border-emerald-500/60 transition-all duration-300 flex flex-col"
                >
                  {/* Thumbnail */}
                  <div className="h-[130px] rounded-[10px] overflow-hidden mb-0 flex-shrink-0">
                    <img
                      src={proj.image}
                      alt={proj.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Badges */}
                  {proj.categories && (
                    <div className="flex flex-wrap gap-[5px] mt-2.5 mb-1">
                      {proj.categories.map((cat) => (
                        <span
                          key={cat.label}
                          className="px-2 py-[3px] rounded-full text-[11px] font-medium whitespace-nowrap"
                          style={{ background: cat.bg, color: cat.color }}
                        >
                          {cat.label}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="text-white font-medium text-base mt-1 mb-0 leading-snug">{proj.name}</h3>

                  {/* Description */}
                  <p className="text-[#d1d5dc] text-[14px] leading-[1.625] mt-1.5 flex-1">{proj.description}</p>

                  {/* Role */}
                  <p className="text-[#00d492] text-[12px] font-medium mt-2">{proj.role}</p>

                  {/* Divider + tools + hover CTA */}
                  <div className="border-t border-[#1e2939] mt-3 pt-3 flex items-center justify-between">
                    <div className="flex gap-2">
                      {proj.tools.map((toolName, ti) => (
                        <div
                          key={ti}
                          className="relative group/tool w-7 h-7 rounded-full bg-[#1e2939] flex items-center justify-center text-[#99A1AF] hover:text-white transition-colors"
                          title={toolName}
                        >
                          {getToolIcon(toolName)}
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover/tool:opacity-100 transition-opacity pointer-events-none">
                            {toolName}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center text-[#00d492] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      View Case Study
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Workflow Section */}
      <section id="workflow" className="py-16 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-10">
              <h2 className="text-sm uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">My Workflow</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                End-to-end product design process for fintech and data-driven products
              </p>
            </div>

            {/* Desktop: Puzzle Pieces */}
            <div className="hidden md:block rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="flex" style={{ overflow: 'visible', isolation: 'isolate' }}>
                {workflowSteps.map((step, index) => {
                  const isFirst = index === 0;
                  const isLast = index === workflowSteps.length - 1;
                  const T = 14; // tab/notch depth in px
                  const n = workflowSteps.length;

                  // Polygon clip-path: tab protrudes T px right, notch cuts T px inward from left
                  let points: string;
                  if (isFirst && isLast) {
                    points = '0% 0%, 100% 0%, 100% 100%, 0% 100%';
                  } else if (isFirst) {
                    points = [
                      '0% 0%',
                      '100% 0%',
                      `100% calc(50% - ${T}px)`,
                      `calc(100% + ${T}px) calc(50% - ${T}px)`,
                      `calc(100% + ${T}px) calc(50% + ${T}px)`,
                      `100% calc(50% + ${T}px)`,
                      '100% 100%',
                      '0% 100%',
                    ].join(', ');
                  } else if (isLast) {
                    points = [
                      '0% 0%',
                      '100% 0%',
                      '100% 100%',
                      '0% 100%',
                      `0% calc(50% + ${T}px)`,
                      `${T}px calc(50% + ${T}px)`,
                      `${T}px calc(50% - ${T}px)`,
                      `0% calc(50% - ${T}px)`,
                    ].join(', ');
                  } else {
                    points = [
                      '0% 0%',
                      '100% 0%',
                      `100% calc(50% - ${T}px)`,
                      `calc(100% + ${T}px) calc(50% - ${T}px)`,
                      `calc(100% + ${T}px) calc(50% + ${T}px)`,
                      `100% calc(50% + ${T}px)`,
                      '100% 100%',
                      '0% 100%',
                      `0% calc(50% + ${T}px)`,
                      `${T}px calc(50% + ${T}px)`,
                      `${T}px calc(50% - ${T}px)`,
                      `0% calc(50% - ${T}px)`,
                    ].join(', ');
                  }

                  const pl = isFirst ? 18 : T + 16;
                  const pr = isLast ? 18 : T + 16;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.45, delay: index * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="relative flex-1 min-w-0 flex flex-col border-r border-gray-200 dark:border-gray-700 last:border-r-0"
                      style={{
                        clipPath: `polygon(${points})`,
                        zIndex: n - index,
                        paddingLeft: `${pl}px`,
                        paddingRight: `${pr}px`,
                        paddingTop: '22px',
                        paddingBottom: '22px',
                        minHeight: '180px',
                      }}
                    >
                      {/* Neutral background — extends into tab area so it fills the puzzle protrusion */}
                      <div
                        className="absolute inset-0 bg-white dark:bg-gray-800/80"
                        style={{ right: isLast ? '0' : `-${T}px` }}
                      />

                      {/* Content */}
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="text-[10px] font-bold tracking-widest text-emerald-500 dark:text-emerald-400 mb-3">
                          {String(index + 1).padStart(2, '0')}
                        </div>

                        <div className="w-7 h-7 mb-3 text-gray-500 dark:text-gray-400">
                          {getWorkflowIcon(step.iconName)}
                        </div>

                        <h3 className="font-semibold text-[13px] leading-[18px] text-gray-900 dark:text-white mb-2">
                          {step.title}
                        </h3>

                        <p className="text-[11px] leading-[16px] text-gray-500 dark:text-gray-400 mt-auto">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Mobile: Stacked cards with numbered connector */}
            <div className="flex md:hidden flex-col gap-0">
              {workflowSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="flex gap-3 items-stretch"
                >
                  {/* Timeline spine */}
                  <div className="flex flex-col items-center pt-4 w-8 flex-shrink-0">
                    <div className="w-7 h-7 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center flex-shrink-0">
                      <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-300">{index + 1}</span>
                    </div>
                    {index < workflowSteps.length - 1 && (
                      <div className="w-px flex-1 bg-gray-200 dark:bg-gray-700 mt-1.5" style={{ minHeight: '16px' }} />
                    )}
                  </div>

                  {/* Card */}
                  <div className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-xl p-4 mb-3 flex flex-col">
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="text-emerald-600 dark:text-emerald-400 w-4 h-4">
                        {getWorkflowIcon(step.iconName)}
                      </div>
                      <h3 className="font-semibold text-[13px] text-gray-900 dark:text-white">{step.title}</h3>
                    </div>
                    <p className="text-[12px] leading-[17px] text-gray-500 dark:text-gray-400">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}

      {/* Tools & Skills Section - Network Grid */}
      <section id="tools" className="py-10 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-5">Tools & Technologies</h2>
            <div className="flex flex-wrap gap-3">
              {allTools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                  whileHover={{ scale: 1.05 }}
                  className="group relative flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-200 cursor-default bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-emerald-400 dark:hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400"
                >
                  <span className="w-4 h-4 flex-shrink-0">
                    {getNetworkToolIcon(tool.iconName, "w-4 h-4")}
                  </span>
                  <span className="text-xs font-medium whitespace-nowrap">{tool.name}</span>
                  {tool.primary && (
                    <span className="text-orange-400 text-[10px] leading-none">★</span>
                  )}
                  <div className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-20">
                    <div className="bg-gray-900 dark:bg-gray-700 text-white text-xs px-2.5 py-1 rounded-md whitespace-nowrap">
                      {tool.description}
                    </div>
                    <div className="w-2 h-2 bg-gray-900 dark:bg-gray-700 rotate-45 mx-auto -mt-1" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-900 dark:text-white mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="mailto:marylady14@gmail.com"
                className="flex items-center gap-2.5 px-5 py-3 border border-gray-300 dark:border-gray-600 rounded-full text-gray-700 dark:text-gray-300 hover:border-emerald-600 dark:hover:border-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors text-sm font-medium"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                marylady14@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/marianna-ozharovska/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-5 py-3 border border-gray-300 dark:border-gray-600 rounded-full text-gray-700 dark:text-gray-300 hover:border-emerald-600 dark:hover:border-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors text-sm font-medium"
              >
                <Linkedin className="w-4 h-4 flex-shrink-0" />
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-200 dark:border-gray-800 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto text-center text-sm text-gray-500 dark:text-gray-400">
          © 2026 Marianna Ozharovska. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

function ExperienceList() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="divide-y divide-gray-100 dark:divide-gray-800">
      {experiences.map((exp, index) => {
        const isOpen = openIndex === index;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full grid grid-cols-[140px_1fr_auto] items-center gap-4 py-3.5 text-left group"
            >
              <span className="text-[11px] text-gray-400 dark:text-gray-500 tabular-nums leading-tight">
                {exp.period}
              </span>
              <span className="flex items-baseline gap-2 min-w-0">
                <span className="text-sm font-medium text-gray-900 dark:text-white truncate">{exp.role}</span>
                <span className="text-xs text-emerald-600 dark:text-emerald-400 whitespace-nowrap flex-shrink-0">{exp.company}</span>
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-gray-300 dark:text-gray-600 group-hover:text-gray-500 dark:group-hover:text-gray-400 transition-colors flex-shrink-0"
              >
                <ChevronDown className="w-3.5 h-3.5" />
              </motion.span>
            </button>

            <motion.div
              initial={false}
              animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
            >
              <ul className="pb-4 pl-[156px] space-y-1.5">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex gap-2 text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    <span className="text-emerald-500 dark:text-emerald-400 mt-0.5 flex-shrink-0">–</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}

const experiences = [
  {
    period: "Feb 2012 – Present",
    role: "Senior UI/UX Designer",
    company: "DataArt",
    achievements: [
      "Led end-to-end UX/UI design for complex B2B and enterprise products in FinTech, Travel, and Healthcare domains",
      "Designed and optimized complex user flows, improving usability and reducing cognitive load",
      "Streamlined key user journeys by reducing steps and increasing task efficiency",
      "Built and maintained scalable design systems, including reusable components and interaction patterns",
      "Collaborated with Product Owners, Business Analysts, and engineering teams to align UX with business and technical requirements",
      "Used interactive prototyping and AI-assisted workflows to accelerate discovery, validation, and delivery",
    ],
  },
  {
    period: "Nov 2009 – Feb 2012",
    role: "UI Designer / Graphic Designer",
    company: "Freelance",
    achievements: [
      "Delivered end-to-end design for web, e-commerce, and branding projects",
      "Designed conversion-focused interfaces using usability principles",
      "Created UI systems and interaction patterns across projects",
    ],
  },
  {
    period: "Apr 2009 – Nov 2009",
    role: "UI Designer",
    company: "StarWind Software Inc.",
    achievements: [
      "Designed user interfaces for web and desktop enterprise applications with a focus on usability and clarity",
      "Created diagrams, icons, and visual assets",
      "Produced structured documentation and case studies",
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

const workflowSteps = [
  {
    title: "Understanding Pain Points & Business Goals",
    description: "Identify user pain points, define KPIs, and align on business requirements before any design work begins.",
    iconName: "ClipboardList",
    phase: "discovery",
  },
  {
    title: "Discovery & Analysis",
    description: "Validate scope with BAs, review competitors, and map user flows and edge cases.",
    iconName: "Search",
    phase: "discovery",
  },
  {
    title: "Low-Fidelity Design",
    description: "Create wireframes and early prototypes to define structure and concepts.",
    iconName: "Layout",
    phase: "design",
  },
  {
    title: "Design & Stakeholder Review",
    description: "Iterate with stakeholders and dev team to validate direction.",
    iconName: "RefreshCw",
    phase: "review",
  },
  {
    title: "Final UI & Handoff",
    description: "Deliver high-fidelity UI with specs and assets for development.",
    iconName: "Send",
    phase: "delivery",
  },
  {
    title: "Validation & User Testing",
    description: "Review implemented feature and test with users to refine and improve.",
    iconName: "CheckCircle2",
    phase: "delivery",
  },
];

const allTools = [
  { name: "Figma", iconName: "Figma", description: "Primary design tool", primary: true },
  { name: "Figma Make", iconName: "Sparkles", description: "AI-powered design" },
  { name: "Claude", iconName: "Bot", description: "AI assistant" },
  { name: "Lovable", iconName: "Heart", description: "AI app builder" },
  { name: "FigJam", iconName: "Users", description: "Collaborative whiteboard" },
  { name: "Miro", iconName: "Share2", description: "Workshops & ideation" },
  { name: "Zeplin", iconName: "GitBranch", description: "Design handoff" },
  { name: "Jira", iconName: "Trello", description: "Project management" },
  { name: "Notion", iconName: "BookMarked", description: "Knowledge base" },
];

const projects = [
  {
    name: "Crypto Trading & Lending Platform",
    description: "Designed and delivered an institutional crypto trading and lending platform from scratch, creating a scalable and consistent product foundation.",
    role: "Product Designer",
    outcome: "44M+ unique addresses, $80B+ annualized transaction volume",
    tools: ["Figma", "Jira", "Miro", "OpenAI"],
  },
  {
    name: "Data Science Platform",
    description: "AI platform empowering users to engage in data science and facilitate collaboration among specialists focused on data-driven transformation and business growth.",
    role: "Product Designer",
    outcome: "Leveraged AI to cut concept time by 40%",
    tools: ["Figma", "Jira", "Miro"],
  },
  {
    name: "Krisp Control Software",
    description: "Voice AI application making audio crystal clear across different platforms. Solo voice AI app deployed for web and mobile environments.",
    role: "Product Designer",
    outcome: "Multi-platform deployment",
    tools: ["Figma", "Jira", "Miro"],
  },
  {
    name: "Skills in Platforms",
    description: "Designed B2B SaaS UX & UI from scratch, built on UI8 templates and integrated with Zapier and Active Campaign for automated workflows.",
    role: "Lead Designer",
    outcome: "Full automation integration",
    tools: ["Figma", "Jira", "Miro"],
  },
];

const featuredProjects = [
  {
    slug: "crypto-trading-platform",
    name: "Crypto Trading & Lending Platform",
    description: "Designed and delivered an institutional crypto trading and lending platform from scratch, creating a scalable and consistent product foundation.",
    role: "Product Designer",
    image: projectImgCrypto,
    tools: ["Figma", "Jira", "Miro", "OpenAI"],
    categories: [
      { label: "Web", bg: "rgba(83,166,226,0.12)", color: "#53a6e2" },
      { label: "Enterprise", bg: "rgba(88,106,197,0.12)", color: "#586ac5" },
    ],
  },
  {
    slug: "edsi-ai-learning-app",
    name: "Edsi — AI Learning App",
    description: "Edsi is an AI learning app designed to help users start learning through personalized content, themes, and an AI assistant. I conducted an expert UX review of an already built application and focused on solving urgent usability and experience issues.",
    role: "UX Consultant",
    image: projectImgEdsi,
    tools: ["Figma", "Figma Make", "OpenAI"],
    categories: [
      { label: "iOS Mobile App", bg: "rgba(79,195,184,0.12)", color: "#4fc3b8" },
      { label: "Startup", bg: "rgba(253,169,68,0.12)", color: "#fda944" },
    ],
  },
  {
    slug: "data-science-platform",
    name: "Data Science Platform",
    description: "AI platform empowering users to engage in data science and facilitate collaboration among specialists focused on data-driven transformation and business growth.",
    role: "Product Designer",
    image: projectImgDataScience,
    tools: ["Figma", "Jira", "Miro", "OpenAI"],
    categories: [
      { label: "Web", bg: "rgba(83,166,226,0.12)", color: "#53a6e2" },
      { label: "AI Platform", bg: "rgba(155,108,245,0.12)", color: "#9b6cf5" },
    ],
  },
];
