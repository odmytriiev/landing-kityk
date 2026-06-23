import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, ChevronRight, Brain, TrendingUp, Shield, CheckCircle2, Figma, Trello, Sparkles, Bot, Layers, Users2, BookOpen, LogIn, AlertCircle, GitBranch, Target, Milestone } from "lucide-react";
import Frame31244 from "../../imports/Frame31244/Frame31244";
import Frame31232 from "../../imports/Frame31232/index";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import wizardImg from "../../imports/wizard.png";
import panelsGridImg from "../../imports/panels-grid_1.png";
import previewsImg from "../../imports/Previews.png";
import workflowSvgPaths from "../../imports/Container-2/svg-0n62qyvzu9";
import Wizard from "../../imports/Wizard/index";
import Prev from "../../imports/Prev/index";
import progressiveImg from "../../imports/Progressive_example.png";
import onboardingConceptImg from "../../imports/Case_Onboarding_concept.png";

const projects = [
  {
    id: 1,
    slug: "crypto-trading-platform",
    name: "Institutional Crypto Trading & Lending Platform",
    role: "Lead Product Designer",
    period: "2023 - 2026",
    categories: [
      { label: "Web", bg: "rgba(83,166,226,0.12)", color: "#53a6e2" },
      { label: "Enterprise", bg: "rgba(88,106,197,0.12)", color: "#586ac5" },
    ],
    description: "Professional crypto trading and lending platform designed for institutional users. Focused on complex financial workflows with emphasis on usability, scalability, and consistency.",
    responsibilities: [
      "End-to-end UX/UI design",
      "Wireframes and prototypes",
      "Stakeholder & Developer collaboration",
      "Integrating third-party tools into the design system",
      "Product thinking"
    ],
    tools: ["Figma", "Jira", "Figma Make", "Chat GPT"],
    framework: [
      { step: "Research", description: "User flows and requirements" },
      { step: "Quick Prototypes", description: "Rapid prototyping and AI-assisted exploration" },
      { step: "UI Design", description: "High-fidelity interfaces" },
      { step: "Feedback", description: "Collaboration with distributed teams" },
      { step: "Iteration", description: "Continuous improvements" }
    ],
    mainChallenges: [
      {
        title: "Cognitive Load Reduction",
        description: "Simplifying dense trading workflows and complex interfaces while maintaining clarity."
      },
      {
        title: "Familiar Trading Patterns",
        description: "Improving usability without breaking familiar trader mental models and workflows."
      },
      {
        title: "Consistency & Constraints",
        description: "Balancing changing requirements, business goals, technical limitations, and third-party integrations while keeping the product coherent and scalable."
      }
    ],
    images: [
      "figma-component",
      "Dashboard overview with real-time trading data",
      "Order execution interface",
      "Portfolio management view",
      "Compliance and reporting dashboard"
    ],
    impact: [
      "Improved workflow clarity",
      "More consistent product experience",
      "Scalable reusable UI patterns",
      "Better structure for complex financial operations",
      "Improved alignment between third-party tools and the design system"
    ],
    testimonial: {
      quote: "Marianna brought a rare combination of design craft and systems thinking to one of our most complex products. Her work on the trading platform fundamentally raised the bar for how we think about usability in high-stakes financial environments.",
      author: "CPTO"
    }
  },
  {
    id: 2,
    slug: "edsi-ai-learning-app",
    name: "Edsi — AI Learning App",
    role: "UX Consultant",
    period: "May 2026",
    categories: [
      { label: "iOS Mobile App", bg: "rgba(79,195,184,0.12)", color: "#4fc3b8" },
      { label: "Startup", bg: "rgba(253,169,68,0.12)", color: "#fda944" },
    ],
    description: "Edsi is an AI learning app designed to help users start learning through personalized content, themes, and an AI assistant. I conducted an expert UX review of an already built application and focused on solving urgent usability and experience issues. The onboarding flow is highlighted as one of the key solutions I helped improve and partially design.",
    responsibilities: [
      "Expert UX review of existing product",
      "Critical usability issue resolution",
      "Interaction design solutions",
      "Design system alignment",
      "Collaboration with devs, BAs, and client",
    ],
    tools: ["Figma", "Figma Make", "UX Research"],
    framework: [
      { step: "Audit", description: "Expert UX review of existing product" },
      { step: "Problem ID", description: "Identifying critical usability issues" },
      { step: "Prototyping", description: "Quick interaction design exploration" },
      { step: "UI Refinement", description: "Aligning with existing design system" },
      { step: "Iteration", description: "Collaborative refinement with team" },
    ],
    images: [
      "App overview — home screen and navigation",
      "AI assistant chat interface",
      "Theme and topic selection",
      "Personalized learning dashboard",
    ],
    impact: [
      "Improved product clarity and reduced friction",
      "Onboarding refined as a primary improvement",
      "Users better understand how to start the app",
      "Smoother transition into the learning experience",
      "Stronger alignment across design, dev, and business",
    ],
    onboardingCaseStudy: {
      problem: "Users did not clearly understand how to start using the app, what the AI assistant does, or where to find lessons and content. The onboarding needed to introduce the product naturally while reducing friction.",
      concepts: [
        {
          label: "Option 1",
          title: "Wizard Flow",
          pros: ["Structured", "Familiar pattern"],
          cons: ["Felt rigid", "Added friction", "Separated users from core AI experience"],
          imageKey: "wizard",
        },
        {
          label: "Option 2",
          title: "Progressive Onboarding",
          pros: ["Lightweight", "Less overwhelming"],
          cons: ["Not enough guidance", "Product value not immediately clear"],
          imageKey: "progressive",
        },
      ],
      finalTitle: "Chat-Based Onboarding",
      finalReasons: [
        "Aligns with the AI-first nature of the product",
        "Makes onboarding feel like part of the experience",
        "Introduces product value immediately",
        "Creates a more engaging, conversational start",
      ],
      journey: ["Conversation", "Personalization", "Theme Selection", "Dashboard"],
      outcome: "The onboarding became the user's first interaction with the AI assistant rather than a separate setup process. This reduced friction and created a smoother transition into the learning experience.",
    },
  },
  {
    id: 3,
    slug: "data-science-platform",
    name: "Data Science Platform",
    role: "Senior UI/UX Designer",
    period: "2021 - 2022",
    categories: [
      { label: "Web", bg: "rgba(83,166,226,0.12)", color: "#53a6e2" },
      { label: "AI Platform", bg: "rgba(155,108,245,0.12)", color: "#9b6cf5" },
    ],
    description: "A web-based AI-powered data science platform designed to help users of different skill levels explore, build, and collaborate on data-driven solutions. As part of the client's UX/UI team, I contributed to the design of new products and features while improving the overall user experience and consistency of existing solutions. A key focus was scaling the design system and creating reusable patterns that could support continuous product growth.",
    responsibilities: [
      "Designed new user flows and features",
      "Created wireframes and interactive prototypes",
      "Conducted UI audits and usability improvements",
      "Maintained and scaled the design system",
      "Collaborated with developers, UX writers, and BAs",
    ],
    tools: ["Figma", "Jira", "Zeplin"],
    framework: [
      { step: "Research", description: "User and product discovery" },
      { step: "Audit", description: "UI consistency and gap analysis" },
      { step: "Wireframes", description: "Flow and layout exploration" },
      { step: "Prototypes", description: "Interactive validation builds" },
      { step: "Validation", description: "Feedback and usability testing" },
      { step: "Iteration", description: "Continuous improvement cycles" },
    ],
    mainChallenges: [
      {
        title: "Design System Scalability",
        description: "Maintaining consistency while supporting new products and features across a growing platform.",
      },
      {
        title: "Diverse User Needs",
        description: "Designing for both data science experts and less experienced users without alienating either group.",
        icon: "Users2",
      },
      {
        title: "Cross-Functional Alignment",
        description: "Balancing user needs, business goals, and technical constraints across distributed product teams.",
      },
    ],
    images: [
      "Platform overview — workspace and project dashboard",
      "Data exploration and visualisation interface",
      "Collaboration and sharing flows",
      "Design system component library",
    ],
    impact: [
      "Improved consistency across product interfaces",
      "Expanded reusable UI components and patterns",
      "Supported delivery of new features and workflows",
      "Translated user insights into validated design solutions",
      "Strengthened collaboration across product teams",
    ],
  },
];

export default function ProjectsPage() {
  const { projectSlug } = useParams();
  const navigate = useNavigate();
  const [activeProject, setActiveProject] = useState(0);
  const [isDark, setIsDark] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Check dark mode from document
    setIsDark(document.documentElement.classList.contains('dark'));

    // Listen for dark mode changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          setIsDark(document.documentElement.classList.contains('dark'));
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (projectSlug) {
      const projectIndex = projects.findIndex(p => p.slug === projectSlug);
      if (projectIndex !== -1) {
        setActiveProject(projectIndex);
      }
    }
  }, [projectSlug]);

  useEffect(() => {
    // Reset carousel to first slide when project changes
    setCurrentSlide(0);
  }, [activeProject]);

  const handleProjectChange = (index: number) => {
    setActiveProject(index);
    navigate(`/projects/${projects[index].slug}`);
  };

  const currentProject = projects[activeProject];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm font-medium">Back</span>
            </button>

            <div className="flex items-center gap-3">
              <h1 className="text-lg font-semibold text-gray-900 dark:text-white">Projects</h1>
            </div>
          </div>

          {/* Project Navigation Tabs */}
          <div className="flex overflow-x-auto gap-1">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => handleProjectChange(index)}
                className={`
                  px-4 py-2 text-sm font-medium whitespace-nowrap border-b-2 transition-all
                  ${activeProject === index
                    ? 'border-emerald-600 dark:border-emerald-400 text-emerald-600 dark:text-emerald-400'
                    : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                  }
                `}
              >
                {project.name}
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Project Content */}
        <motion.div
          key={activeProject}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Project Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-3 flex flex-wrap items-center gap-3">
              {currentProject.name}
              {currentProject.slug === "crypto-trading-platform" && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-full border border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 self-center">
                  <Shield className="w-3 h-3 flex-shrink-0" />
                  Strict NDA Policy
                </span>
              )}
            </h2>
            {currentProject.categories && (
              <div className="flex flex-wrap gap-[5px] mb-3">
                {currentProject.categories.map((cat) => (
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
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span className="flex items-center gap-2">
                <span className="font-medium text-emerald-600 dark:text-emerald-400">Role:</span>
                {currentProject.role}
              </span>
              <span className="flex items-center gap-2">
                <span className="font-medium text-emerald-600 dark:text-emerald-400">Period:</span>
                {currentProject.period}
              </span>
            </div>
            {currentProject.tools && (
              <>
                <div className="flex flex-wrap gap-2 mt-4">
                  {currentProject.tools.map((tool, index) => {
                    const iconMap: Record<string, React.ReactNode> = {
                      "Figma":       <Figma className="w-4 h-4" />,
                      "Jira":        <Trello className="w-4 h-4" />,
                      "Figma Make":  <Sparkles className="w-4 h-4" />,
                      "Chat GPT":    <Bot className="w-4 h-4" />,
                      "Zeplin":      <Layers className="w-4 h-4" />,
                      "UX Research": <BookOpen className="w-4 h-4" />,
                    };
                    return (
                      <div key={index} className="relative group/tool">
                        <div className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:border-emerald-400 dark:hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                          {iconMap[tool] ?? <span className="text-[10px] font-bold">{tool[0]}</span>}
                        </div>
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover/tool:opacity-100 transition-opacity pointer-events-none z-10">
                          {tool}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="border-b border-gray-200 dark:border-gray-700 mt-6" />
              </>
            )}
          </div>

          {/* Overview — Summary · Responsibilities · Impact */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Summary */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-3">Project Summary</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                {currentProject.description}
              </p>
            </div>

            {/* Key Responsibilities */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-3">Key Responsibilities</h3>
              <div className="flex flex-wrap gap-2">
                {currentProject.responsibilities.map((responsibility, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs font-medium rounded-full border border-gray-200 dark:border-gray-700 whitespace-nowrap"
                  >
                    {responsibility}
                  </span>
                ))}
              </div>
            </div>

            {/* Impact */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-3">Impact</h3>
              {currentProject.impact ? (
                <div className="flex flex-col gap-2">
                  {currentProject.impact.map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600 dark:text-gray-300 leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              ) : currentProject.outcome ? (
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600 dark:text-gray-300 leading-snug">{currentProject.outcome}</span>
                </div>
              ) : null}
            </div>
          </div>

          {/* Testimonial */}
          {currentProject.testimonial && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-8"
            >
              <div className="relative px-8 py-6 rounded-xl bg-gray-50 dark:bg-gray-800/40">
                {/* Decorative quote mark */}
                <span
                  className="absolute right-6 top-0 select-none text-[96px] leading-none text-gray-100 dark:text-gray-800 pointer-events-none"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <blockquote className="relative">
                  <p className="text-base leading-relaxed text-gray-700 dark:text-gray-200 italic max-w-2xl">
                    &ldquo;{currentProject.testimonial.quote}&rdquo;
                  </p>
                  <footer className="mt-4 flex items-center gap-2">
                    <div className="w-4 h-px bg-emerald-500 dark:bg-emerald-400" />
                    <cite className="not-italic text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                      {currentProject.testimonial.author}
                    </cite>
                  </footer>
                </blockquote>
              </div>
            </motion.div>
          )}

          {/* Framework / Process */}
          {currentProject.framework && (
            <div className="mb-8">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-4">Framework / Process</h3>

              {currentProject.slug === "edsi-ai-learning-app" ? (() => {
                const edsiSteps = [
                  { num: "01", title: "Audit", bullets: ["Competitor analysis", "User testing results", "Business needs"] },
                  { num: "02", title: "Problem Identification", bullets: ["Define key pain points", "Synthesize insights"] },
                  { num: "03", title: "Quick Prototyping", bullets: ["Rapid ideation", "AI-assisted prototyping"] },
                  { num: "04", title: "UI Refinement", bullets: ["Visual design polishing", "Usability improvements"] },
                  { num: "05", title: "Iteration", bullets: ["User testing", "Validation", "Metrics review"] },
                ];
                return (
                  <>
                    {/* Desktop */}
                    <div className="hidden md:block rounded-[16px] overflow-hidden" style={{ minHeight: 200 }}>
                      {(() => {
                        const edsiIcons = [
                          <BookOpen className="w-6 h-6" style={{ color: '#99A1AF' }} />,
                          <AlertCircle className="w-6 h-6" style={{ color: '#99A1AF' }} />,
                          <Sparkles className="w-6 h-6" style={{ color: '#99A1AF' }} />,
                          <Layers className="w-6 h-6" style={{ color: '#99A1AF' }} />,
                          <GitBranch className="w-6 h-6" style={{ color: '#99A1AF' }} />,
                        ];
                        return (
                          <div className="flex h-full">
                            {edsiSteps.map((step, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 8 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-40px' }}
                                transition={{ duration: 0.4, delay: i * 0.07 }}
                                className="flex-1 relative min-w-0 flex flex-col"
                                style={{ borderRight: i < edsiSteps.length - 1 ? '1px solid #364153' : 'none', background: 'rgba(30,41,57,0.8)', padding: '22px', paddingLeft: i === 0 ? 18 : 22 }}
                              >
                                <p className="text-[10px] font-bold tracking-[1px] mb-3 flex-shrink-0" style={{ color: '#00d492' }}>{step.num}</p>
                                <div className="mb-3 flex-shrink-0">{edsiIcons[i]}</div>
                                <h3 className="font-semibold text-[13px] leading-[18px] text-white mb-3 flex-shrink-0">{step.title}</h3>
                                <ul className="space-y-1 mt-auto">
                                  {step.bullets.map((b, bi) => (
                                    <li key={bi} className="flex items-start gap-1.5 text-[11px] leading-[15px]" style={{ color: '#99a1af' }}>
                                      <span className="flex-shrink-0" style={{ color: '#00d492' }}>–</span>{b}
                                    </li>
                                  ))}
                                </ul>
                              </motion.div>
                            ))}
                          </div>
                        );
                      })()}
                    </div>

                    {/* Mobile */}
                    <div className="flex md:hidden flex-col gap-0">
                      {edsiSteps.map((step, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }} className="flex gap-3 items-stretch">
                          <div className="flex flex-col items-center pt-4 w-8 flex-shrink-0">
                            <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(30,41,57,0.8)', border: '1px solid #364153' }}>
                              <span className="text-[10px] font-bold" style={{ color: '#00d492' }}>{i + 1}</span>
                            </div>
                            {i < edsiSteps.length - 1 && <div className="w-px flex-1 mt-1.5" style={{ background: '#364153', minHeight: 16 }} />}
                          </div>
                          <div className="flex-1 rounded-xl p-4 mb-3" style={{ background: 'rgba(30,41,57,0.8)', border: '1px solid #364153' }}>
                            <h3 className="font-semibold text-[13px] text-white mb-2">{step.title}</h3>
                            <ul className="space-y-1">
                              {step.bullets.map((b, bi) => (
                                <li key={bi} className="flex items-start gap-1.5 text-[11px]" style={{ color: '#99a1af' }}>
                                  <span style={{ color: '#00d492' }}>–</span>{b}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </>
                );
              })() : (() => {
                const steps = [
                  {
                    num: "01", title: "Understanding Pain Points & Business Goals",
                    desc: "Identify user pain points, define KPIs, and align on business requirements before any design work begins.",
                    icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="#99A1AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={workflowSvgPaths.p2469b00} /><path d={workflowSvgPaths.p3eef23d2} /><path d="M12 11H16" /><path d="M12 16H16" /><path d="M8 11H8.01" /><path d="M8 16H8.01" /></svg>,
                  },
                  {
                    num: "02", title: "Discovery & Analysis",
                    desc: "Validate scope with BAs, review competitors, and map user flows and edge cases.",
                    icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="#99A1AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={workflowSvgPaths.p19568f00} /><path d="M21 21L16.7 16.7" /></svg>,
                  },
                  {
                    num: "03", title: "Low-Fidelity Design",
                    desc: "Create wireframes and early prototypes to define structure and concepts.",
                    icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="#99A1AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={workflowSvgPaths.p11d16a80} /><path d="M3 9H21" /><path d="M9 21V9" /></svg>,
                  },
                  {
                    num: "04", title: "Design & Stakeholder Review",
                    desc: "Iterate with stakeholders and dev team to validate direction.",
                    icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="#99A1AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={workflowSvgPaths.p223b2500} /><path d="M21 3V8H16" /><path d={workflowSvgPaths.p1f4a200} /><path d="M8 16H3V21" /></svg>,
                  },
                  {
                    num: "05", title: "Final UI & Handoff",
                    desc: "Deliver high-fidelity UI with specs and assets for development.",
                    icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="#99A1AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={workflowSvgPaths.p79ef280} /><path d="M21.854 2.147L10.914 13.086" /></svg>,
                  },
                  {
                    num: "06", title: "Validation & User Testing",
                    desc: "Review implemented feature and test with users to refine and improve.",
                    icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="#99A1AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={workflowSvgPaths.pace200} /><path d="M9 12L11 14L15 10" /></svg>,
                  },
                ];
                return (
                  <>
                    {/* Desktop: Figma dark rectangular style */}
                    <div className="hidden md:block rounded-[16px] overflow-hidden border border-[#364153]" style={{ height: 221 }}>
                      <div className="flex h-full">
                        {steps.map((step, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.4, delay: i * 0.07 }}
                            className="flex-1 relative min-w-0"
                            style={{ borderRight: i < steps.length - 1 ? '1px solid #364153' : 'none' }}
                          >
                            <div className="absolute inset-0" style={{ background: 'rgba(30,41,57,0.8)' }} />
                            <div className="relative z-10 flex flex-col h-full" style={{ padding: '22px', paddingLeft: i === 0 ? 18 : 30 }}>
                              <p className="text-[10px] font-bold tracking-[1px] mb-3" style={{ color: '#00d492', lineHeight: '15px' }}>{step.num}</p>
                              <div className="mb-3 flex-shrink-0">{step.icon}</div>
                              <h3 className="font-semibold text-[13px] leading-[18px] text-white mb-2">{step.title}</h3>
                              <p className="text-[11px] leading-[16px] mt-auto" style={{ color: '#99a1af' }}>{step.desc}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Mobile: stacked cards */}
                    <div className="flex md:hidden flex-col gap-0">
                      {steps.map((step, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: i * 0.06 }}
                          className="flex gap-3 items-stretch"
                        >
                          <div className="flex flex-col items-center pt-4 w-8 flex-shrink-0">
                            <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(30,41,57,0.8)', border: '1px solid #364153' }}>
                              <span className="text-[10px] font-bold" style={{ color: '#00d492' }}>{i + 1}</span>
                            </div>
                            {i < steps.length - 1 && <div className="w-px flex-1 mt-1.5" style={{ background: '#364153', minHeight: 16 }} />}
                          </div>
                          <div className="flex-1 rounded-xl p-4 mb-3 flex flex-col" style={{ background: 'rgba(30,41,57,0.8)', border: '1px solid #364153' }}>
                            <div className="flex items-center gap-2 mb-1.5">
                              <div className="flex-shrink-0">{step.icon}</div>
                              <h3 className="font-semibold text-[13px] text-white">{step.title}</h3>
                            </div>
                            <p className="text-[12px] leading-[17px]" style={{ color: '#99a1af' }}>{step.desc}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </>
                );
              })()}
            </div>
          )}

          {/* Data Science Platform — UI Preview */}
          {currentProject.slug === "data-science-platform" && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-4">Project Highlights</h3>
              <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/20 overflow-hidden flex items-center justify-center p-6">
                <img
                  src={previewsImg}
                  alt="Data Science Platform — UI screens"
                  className="w-full h-auto object-contain rounded-lg"
                  style={{ maxWidth: '100%', display: 'block' }}
                />
              </div>
            </motion.div>
          )}

          {/* Crypto Trading — UI Preview */}
          {currentProject.slug === "crypto-trading-platform" && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-4">Project Highlights <span className="normal-case tracking-normal font-normal text-gray-400 dark:text-gray-500">(Mid-fidelity wireframes)</span></h3>
              <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-900 overflow-hidden flex items-center justify-center p-4">
                <img
                  src={panelsGridImg}
                  alt="Institutional Crypto Trading Platform — UI panels"
                  className="w-full h-auto object-contain rounded-lg"
                  style={{ maxWidth: '100%', display: 'block' }}
                />
              </div>
            </motion.div>
          )}

          {/* Main Challenges */}

          {currentProject.mainChallenges && (
            <div className="mb-8">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-4">Main Challenges</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {currentProject.mainChallenges.map((challenge, index) => {
                  const iconOverrides: Record<string, React.ElementType> = { Users2 };
                  const defaultIcons = [Brain, TrendingUp, Shield];
                  const Icon = (challenge.icon && iconOverrides[challenge.icon]) ?? defaultIcons[index];

                  return (
                    <div
                      key={index}
                      className="bg-gray-50 dark:bg-gray-800 rounded-lg p-5 border border-gray-200 dark:border-gray-700 hover:border-emerald-300 dark:hover:border-emerald-500 transition-all"
                    >
                      <div className="w-10 h-10 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg flex items-center justify-center mb-3">
                        <Icon className="w-5 h-5 text-yellow-500 dark:text-yellow-400" />
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">{challenge.title}</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{challenge.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}


          {/* Onboarding Case Study Deep-Dive */}
          {currentProject.onboardingCaseStudy && (() => {
            const ob = currentProject.onboardingCaseStudy;
            const conceptImages: Record<string, string> = {
              wizard: wizardImg,
              progressive: progressiveImg,
            };
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5 }}
                className="mb-8 border-t border-gray-200 dark:border-gray-700 pt-8"
              >
                {/* Section heading */}
                <h3 className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-1">
                  <LogIn className="w-3.5 h-3.5 flex-shrink-0" />
                  Onboarding Redesign
                </h3>
                <p className="text-base font-semibold text-gray-900 dark:text-white mb-6">
                  From Exploration to Final Solution
                </p>

                {/* Problem */}
                <div className="relative rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 px-6 py-5 mb-6 overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-xl bg-yellow-400 dark:bg-yellow-500" />
                  <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2"><AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />Problem</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{ob.problem}</p>
                </div>

                {/* Exploration — two concepts side by side */}
                <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-3"><GitBranch className="w-3.5 h-3.5 flex-shrink-0" />Exploration</p>
                <div className="grid md:grid-cols-2 gap-0 mb-6">
                  {ob.concepts.map((concept, ci) => (
                    <div key={ci} className={ci === 0 ? "pr-6 border-r border-gray-200 dark:border-gray-700" : "pl-6"}>
                      {/* Screen preview */}
                      <div className="flex items-start justify-center overflow-hidden rounded-xl mb-4" style={{ height: 200 }}>
                        {concept.imageKey === "wizard" ? (
                          <div style={{ transform: 'scale(0.44)', transformOrigin: 'top center', width: 390, flexShrink: 0 }}>
                            <Wizard />
                          </div>
                        ) : (
                          <ImageWithFallback
                            src={conceptImages[concept.imageKey]}
                            alt={concept.title}
                            className="h-full w-auto object-contain"
                          />
                        )}
                      </div>
                      <div>
                        <p className="text-[10px] font-bold tracking-widest text-gray-400 dark:text-gray-500 uppercase mb-0.5">{concept.label}</p>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white mb-3">{concept.title}</p>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <p className="text-[10px] font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1">Pros</p>
                            <ul className="space-y-0.5">
                              {concept.pros.map((p, i) => (
                                <li key={i} className="text-xs text-gray-600 dark:text-gray-400 flex gap-1.5">
                                  <span className="text-emerald-500 flex-shrink-0">+</span>{p}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">Cons</p>
                            <ul className="space-y-0.5">
                              {concept.cons.map((c, i) => (
                                <li key={i} className="text-xs text-gray-500 dark:text-gray-500 flex gap-1.5">
                                  <span className="text-gray-400 flex-shrink-0">–</span>{c}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Final Decision */}
                <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-3"><Target className="w-3.5 h-3.5 flex-shrink-0" />Final Decision</p>
                <div className="rounded-xl overflow-hidden border border-[#364153] mb-6">
                  <style>{`
                    .final-scroll::-webkit-scrollbar { height: 4px; opacity: 0; }
                    .final-scroll { scrollbar-width: none; }
                    .final-scroll:hover { scrollbar-width: thin; scrollbar-color: #364153 transparent; }
                    .final-scroll:hover::-webkit-scrollbar { opacity: 1; }
                    .final-scroll::-webkit-scrollbar-track { background: transparent; }
                    .final-scroll::-webkit-scrollbar-thumb { background: #364153; border-radius: 2px; }
                  `}</style>

                  {/* Header — dark info panel */}
                  <div className="px-8 pt-6 pb-5" style={{ background: '#172131' }}>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#00d492' }} />
                      <span className="text-[12px] font-bold uppercase tracking-[1.2px]" style={{ color: '#00d492' }}>Selected</span>
                    </div>
                    <p className="text-base font-semibold text-white mb-4">{ob.finalTitle}</p>
                    <ul className="flex flex-wrap gap-x-6 gap-y-2">
                      {ob.finalReasons.map((r, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: '#00d492' }} />
                          <span className="text-[12px] leading-[16px]" style={{ color: '#d1d5dc' }}>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Horizontal scrollable screen strip */}
                  <div className="final-scroll overflow-x-auto flex" style={{ background: '#0f1923' }}>
                    <div className="px-6 py-5 mx-auto" style={{ flexShrink: 0 }}>
                      <div style={{ width: Math.round(1116 * 1.1), height: Math.round(390 * 1.1), position: 'relative' }}>
                        <div style={{ transform: 'scale(1.1)', transformOrigin: 'top left', width: 1116, height: 390, position: 'absolute', top: 0, left: 0 }}>
                          <Prev />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Outcome */}
                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700 px-6 py-5">
                  <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2"><TrendingUp className="w-3.5 h-3.5 flex-shrink-0" />Outcome</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{ob.outcome}</p>
                </div>
              </motion.div>
            );
          })()}

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={() => handleProjectChange(activeProject > 0 ? activeProject - 1 : projects.length - 1)}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Previous Project</span>
            </button>
            <button
              onClick={() => handleProjectChange(activeProject < projects.length - 1 ? activeProject + 1 : 0)}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              <span className="text-sm">Next Project</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
