import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import architectureDiagram from "@/assets/architecture-diagram.png";
import {
  Cloud,
  Globe,
  Zap,
  Server,
  GitBranch,
  Shield,
  Eye,
  DollarSign,
  Lock,
  Scale,
  TriangleAlert,
  Rocket,
  ChevronLeft,
  ChevronRight,
  Maximize,
  PanelLeftClose,
  PanelLeft,
  ArrowLeft,
  BookOpen,
  Target,
  CheckCircle2,
  Users,
  FileText,
  Link as LinkIcon,
} from "lucide-react";

// Light-theme slide wrapper class
const S = {
  muted: "text-gray-500",
  heading: "text-gray-900",
  card: "bg-gray-50/80 border border-gray-200/80",
  cardHover: "hover:border-primary/30",
  iconBox: "w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6",
  icon: "w-7 h-7 text-primary",
  divider: "w-16 h-0.5 bg-primary/40",
  bullet: "w-2 h-2 rounded-full bg-primary shrink-0 mt-2.5",
  check: "w-5 h-5 text-primary shrink-0 mt-1",
};

// ─── Slide Data ───
const slides = [
  {
    id: "cover",
    render: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-16 sm:px-[100px] relative overflow-hidden">
        <div className="absolute top-20 right-20 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-20 left-20 w-[400px] h-[400px] rounded-full bg-primary/3 blur-[100px]" />
        <div className="relative z-10 flex flex-col items-center">
          <div className="mb-10">
            <span className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-primary/30 bg-primary/5 text-primary font-mono text-base tracking-widest uppercase">
              <BookOpen className="w-5 h-5" />
              Cloud Computing · Level 8
            </span>
          </div>
          <h1 className={`font-display text-[90px] font-bold leading-[0.95] mb-10 max-w-[1400px] ${S.heading}`}>
            Practical Evaluation of
            <br />
            <span className="text-gradient">Free Cloud Services</span>
          </h1>
          <p className={`text-3xl font-body max-w-[900px] mb-14 leading-relaxed ${S.muted}`}>
            A Case Study of Vercel Cloud Platform using G2Cloud
          </p>
          <div className={`flex items-center gap-8 font-mono text-lg tracking-wide mb-20 ${S.muted}`}>
            <span className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              March 2026
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              Group Presentation
            </span>
          </div>
          <div className={`grid grid-cols-4 gap-x-20 gap-y-4 text-lg font-body ${S.muted}`}>
            <span>David Mpinzile</span>
            <span>Regina Mlay</span>
            <span>Lightness Joachim</span>
            <span>Erick Peter</span>
            <span>Dhiki Kidanha</span>
            <span>Elizabeth Tobias</span>
            <span>Gabriel Lyaruu</span>
            <span>Peter Kwene</span>
            <span>Salvatory Mchesha</span>
            <span>Regan Mtuka</span>
            <span>Emilia Nzilano</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "introduction",
    render: () => (
      <div className="flex flex-col h-full px-[72px] py-16 relative">
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-primary/5 blur-[100px] rounded-full" />
        <div className="relative z-10">
          <span className="font-mono text-sm uppercase tracking-[0.3em] text-primary mb-3 block">01</span>
          <h2 className={`font-display text-[72px] font-bold leading-[1] mb-16 ${S.heading}`}>Introduction</h2>
        </div>
        <div className="grid grid-cols-3 gap-10 flex-1 relative z-10">
          {[
            { icon: Cloud, title: "Cloud Computing", points: ["On demand compute, storage, and networking", "No server maintenance for teams"] },
            { icon: Zap, title: "Free Tiers", points: ["Learn and experiment at low or zero cost", "Prototype MVPs and student projects fast"] },
            { icon: Target, title: "This Study", points: ["Vercel Hobby plan with G2Cloud site", "Focus on capabilities, limits, and deploy ease"] },
          ].map((col) => (
            <div key={col.title} className={`flex flex-col rounded-2xl p-10 ${S.card}`}>
              <div className={S.iconBox}><col.icon className={S.icon} /></div>
              <h3 className={`font-display text-3xl font-bold mb-5 ${S.heading}`}>{col.title}</h3>
              <div className={S.divider + " mb-6"} />
              <ul className={`space-y-5 font-body text-xl leading-relaxed ${S.muted}`}>
                {col.points.map((p, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle2 className={S.check} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "vercel-services",
    render: () => (
      <div className="flex flex-col h-full px-[72px] py-16 relative">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full" />
        <div className="relative z-10">
          <span className="font-mono text-sm uppercase tracking-[0.3em] text-primary mb-3 block">02</span>
          <h2 className={`font-display text-[72px] font-bold leading-[1] mb-3 ${S.heading}`}>Vercel Free Tier Services</h2>
          <p className={`font-body text-2xl mb-14 ${S.muted}`}>Hosting, Serverless Functions, CDN</p>
        </div>
        <div className="grid grid-cols-3 gap-8 flex-1 relative z-10">
          {[
            { icon: Server, title: "Hosting", points: ["Git based deploys with automatic builds and scaling", "Great for static and Jamstack sites", "Limits include bandwidth, build minutes, and concurrency"] },
            { icon: Zap, title: "Serverless Functions", points: ["HTTP triggered backend logic in the same project", "Good for forms, auth callbacks, and basic APIs", "Limits include execution time and concurrency"] },
            { icon: Globe, title: "CDN", points: ["Global edge delivery by default", "Low latency for worldwide users", "Limits include bandwidth caps after allowance"] },
          ].map((s) => (
            <div key={s.title} className={`rounded-2xl p-10 flex flex-col ${S.card}`}>
              <div className={S.iconBox}><s.icon className={S.icon} /></div>
              <h3 className={`font-display text-3xl font-bold mb-8 ${S.heading}`}>{s.title}</h3>
              <ul className={`space-y-5 font-body text-xl leading-relaxed ${S.muted}`}>
                {s.points.map((p, i) => (
                  <li key={i} className="flex gap-3">
                    <span className={S.bullet} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "case-study",
    render: () => (
      <div className="flex flex-col h-full px-[72px] py-16 relative">
        <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full" />
        <div className="relative z-10">
          <span className="font-mono text-sm uppercase tracking-[0.3em] text-primary mb-3 block">03</span>
          <h2 className={`font-display text-[72px] font-bold leading-[1] mb-3 ${S.heading}`}>G2Cloud Deployment</h2>
          <p className={`font-body text-2xl mb-12 ${S.muted}`}>Static site on Vercel free tier</p>
        </div>
        <div className="grid grid-cols-2 gap-16 flex-1 relative z-10">
          <div>
            <div className={`rounded-2xl p-10 mb-8 ${S.card}`}>
              <h3 className={`font-display text-2xl font-bold mb-6 flex items-center gap-3 ${S.heading}`}>
                <Target className="w-6 h-6 text-primary" />
                Context and Results
              </h3>
              <div className={`space-y-4 font-body text-xl leading-relaxed ${S.muted}`}>
                <p className="flex gap-3"><CheckCircle2 className={S.check} /> Zero cost startup web presence</p>
                <p className="flex gap-3"><CheckCircle2 className={S.check} /> Static site with About, Services, Vision, Contact</p>
                <p className="flex gap-3"><CheckCircle2 className={S.check} /> Git repo to Vercel build to global CDN</p>
              </div>
            </div>
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-10">
              <h3 className={`font-display text-2xl font-bold mb-6 flex items-center gap-3 ${S.heading}`}>
                <Eye className="w-6 h-6 text-primary" />
                Evidence
              </h3>
              <ul className={`space-y-4 font-body text-xl ${S.muted}`}>
                <li className="flex gap-3"><Rocket className="w-5 h-5 text-primary shrink-0 mt-1" /> Public site deployed in minutes</li>
                <li className="flex gap-3"><Globe className="w-5 h-5 text-primary shrink-0 mt-1" /> Fast global performance via edge CDN</li>
                <li className="flex gap-3"><GitBranch className="w-5 h-5 text-primary shrink-0 mt-1" /> Simple operations with CI/CD pipeline</li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className={`font-display text-2xl font-bold mb-8 flex items-center gap-3 ${S.heading}`}>
              <Rocket className="w-6 h-6 text-primary" />
              Deployment Workflow
            </h3>
            <div className="space-y-5">
              {[
                { step: "01", icon: GitBranch, label: "Git Repository", desc: "Push source code" },
                { step: "02", icon: Server, label: "Vercel Build", desc: "Auto detect and build" },
                { step: "03", icon: Globe, label: "Global CDN", desc: "Edge delivery worldwide" },
                { step: "04", icon: LinkIcon, label: "Public URL", desc: "Live site accessible" },
              ].map((item) => (
                <div key={item.step} className={`flex items-center gap-6 rounded-xl px-8 py-6 ${S.card} ${S.cardHover} transition-colors`}>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className={`font-display text-xl font-bold ${S.heading}`}>{item.label}</p>
                    <p className={`font-body text-lg ${S.muted}`}>{item.desc}</p>
                  </div>
                  <span className="font-mono text-3xl font-bold text-primary/20">{item.step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "best-practices",
    render: () => (
      <div className="flex flex-col h-full px-[72px] py-16 relative">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full" />
        <div className="relative z-10">
          <span className="font-mono text-sm uppercase tracking-[0.3em] text-primary mb-3 block">04</span>
          <h2 className={`font-display text-[72px] font-bold leading-[1] mb-3 ${S.heading}`}>Responsible Use</h2>
          <p className={`font-body text-2xl mb-14 ${S.muted}`}>Free tier usage, security, and governance</p>
        </div>
        <div className="grid grid-cols-3 gap-8 flex-1 relative z-10">
          {[
            {
              icon: DollarSign, title: "Usage and Cost",
              items: [
                { icon: Eye, text: "Know free tier limits and monitor usage" },
                { icon: TriangleAlert, text: "Disable auto upgrades to prevent surprise billing" },
                { icon: Target, text: "Set cost alerts and bandwidth thresholds" },
                { icon: FileText, text: "Review dashboards regularly for anomalies" },
              ],
            },
            {
              icon: Lock, title: "Security",
              items: [
                { icon: Shield, text: "Enable MFA and use strong passwords" },
                { icon: Users, text: "Apply least privilege roles and permissions" },
                { icon: Lock, text: "Keep secrets out of code and rotate tokens" },
                { icon: GitBranch, text: "Protect repository access and ownership" },
              ],
            },
            {
              icon: Scale, title: "Governance",
              items: [
                { icon: FileText, text: "Define acceptable use and upgrade approvals" },
                { icon: Users, text: "Assign owners for monitoring and maintenance" },
                { icon: Target, text: "Track SLAs, backups, and recovery steps" },
                { icon: Eye, text: "Audit configurations on a regular cadence" },
              ],
            },
          ].map((col) => (
            <div key={col.title} className={`rounded-2xl p-10 flex flex-col ${S.card}`}>
              <div className={S.iconBox}><col.icon className={S.icon} /></div>
              <h3 className={`font-display text-3xl font-bold mb-6 ${S.heading}`}>{col.title}</h3>
              <div className={S.divider + " mb-6"} />
              <ul className="space-y-5">
                {col.items.map((item, i) => (
                  <li key={i} className={`flex gap-3 font-body text-xl leading-relaxed ${S.muted}`}>
                    <item.icon className={S.check} />
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "comparison",
    render: () => (
      <div className="flex flex-col h-full px-[72px] py-16 relative">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full" />
        <div className="relative z-10">
          <span className="font-mono text-sm uppercase tracking-[0.3em] text-primary mb-3 block">05</span>
          <h2 className={`font-display text-[72px] font-bold leading-[1] mb-14 ${S.heading}`}>Vercel vs AWS Free Tier</h2>
        </div>
        <div className="grid grid-cols-2 gap-12 flex-1 relative z-10">
          <div className="rounded-2xl border-2 border-primary/30 bg-primary/5 p-14 flex flex-col">
            <div className="w-16 h-16 rounded-2xl bg-primary/15 flex items-center justify-center mb-8">
              <Zap className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-display text-4xl font-bold mb-10 text-primary">Vercel</h3>
            <ul className={`space-y-6 font-body text-2xl leading-relaxed flex-1 ${S.heading}`}>
              <li className="flex gap-4"><CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" /> Fast setup and great developer experience</li>
              <li className="flex gap-4"><CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" /> Optimized for frontend and serverless web apps</li>
              <li className="flex gap-4"><CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" /> Best for students, prototypes, and MVPs</li>
            </ul>
            <div className="mt-10 pt-8 border-t border-primary/20">
              <p className="font-mono text-base text-primary tracking-wide">Best for static sites and full stack JS</p>
            </div>
          </div>
          <div className={`rounded-2xl p-14 flex flex-col ${S.card}`}>
            <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mb-8">
              <Cloud className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className={`font-display text-4xl font-bold mb-10 ${S.heading}`}>AWS</h3>
            <ul className={`space-y-6 font-body text-2xl leading-relaxed flex-1 ${S.muted}`}>
              <li className="flex gap-4"><span className="w-2 h-2 rounded-full bg-gray-400 shrink-0 mt-3" /> Broad services and fine grained control</li>
              <li className="flex gap-4"><span className="w-2 h-2 rounded-full bg-gray-400 shrink-0 mt-3" /> Suitable for complex, production systems</li>
              <li className="flex gap-4"><span className="w-2 h-2 rounded-full bg-gray-400 shrink-0 mt-3" /> More learning effort but greater flexibility</li>
            </ul>
            <div className="mt-10 pt-8 border-t border-gray-200">
              <p className={`font-mono text-base tracking-wide ${S.muted}`}>Best for custom infrastructure and advanced services</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "architecture",
    render: () => (
      <div className="flex flex-col items-center justify-center h-full px-[72px] py-16 relative">
        <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full" />
        <div className="relative z-10 text-center mb-8">
          <span className="font-mono text-sm uppercase tracking-[0.3em] text-primary mb-3 block">06</span>
          <h2 className={`font-display text-[72px] font-bold leading-[1] ${S.heading}`}>System Architecture</h2>
        </div>
        <div className="relative z-10 flex-1 flex items-center justify-center w-full">
          <img src={architectureDiagram} alt="G2Cloud Static Website Architecture" className="max-w-full max-h-full object-contain rounded-2xl" />
        </div>
      </div>
    ),
  },
  {
    id: "conclusion",
    render: () => (
      <div className="flex flex-col h-full px-[72px] py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/3" />
        <div className="relative z-10">
          <span className="font-mono text-sm uppercase tracking-[0.3em] text-primary mb-3 block">07</span>
          <h2 className={`font-display text-[72px] font-bold leading-[1] mb-14 ${S.heading}`}>Key Takeaways</h2>
        </div>
        <div className="grid grid-cols-3 gap-10 flex-1 relative z-10">
          {[
            { icon: Target, title: "Findings", items: ["Vercel free tier fits education and early stage startups", "G2Cloud site deployed fast with global reach", "Automation and CDN reduce operations work"] },
            { icon: Rocket, title: "Next Steps", items: ["Monitor limits for bandwidth and function runtime", "Add analytics and basic serverless APIs", "Define upgrade thresholds and governance rules"] },
            { icon: FileText, title: "Appendices", items: ["A: System architecture diagram", "B: Deployment screenshots", "C: Live demo link"] },
          ].map((col) => (
            <div key={col.title} className={`rounded-2xl p-10 flex flex-col ${S.card}`}>
              <div className={S.iconBox}><col.icon className={S.icon} /></div>
              <h3 className={`font-display text-3xl font-bold mb-6 ${S.heading}`}>{col.title}</h3>
              <div className={S.divider + " mb-6"} />
              <ul className={`space-y-5 font-body text-xl leading-relaxed ${S.muted}`}>
                {col.items.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle2 className={S.check} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-auto pt-14 text-center relative z-10">
          <p className="font-display text-5xl font-bold text-gradient mb-4">Thank You</p>
          <p className={`font-body text-2xl ${S.muted}`}>Questions and Discussion</p>
        </div>
      </div>
    ),
  },
];

// ─── Presentation Component ───
const Presentation = () => {
  const [current, setCurrent] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const touchRef = useRef<{ startX: number; startY: number } | null>(null);

  const goNext = useCallback(() => setCurrent((c) => Math.min(c + 1, slides.length - 1)), []);
  const goPrev = useCallback(() => setCurrent((c) => Math.max(c - 1, 0)), []);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    touchRef.current = { startX: e.touches[0].clientX, startY: e.touches[0].clientY };
  }, []);

  const onTouchEnd = useCallback((e: React.TouchEvent) => {
    if (!touchRef.current) return;
    const dx = e.changedTouches[0].clientX - touchRef.current.startX;
    const dy = e.changedTouches[0].clientY - touchRef.current.startY;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
      if (dx < 0) goNext();
      else goPrev();
    }
    touchRef.current = null;
  }, [goNext, goPrev]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); goNext(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); goPrev(); }
      if (e.key === "Escape" && isFullscreen) document.exitFullscreen();
      if (e.key === "f" || e.key === "F5") { e.preventDefault(); toggleFullscreen(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev, isFullscreen]);

  useEffect(() => {
    const onFSChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onFSChange);
    return () => document.removeEventListener("fullscreenchange", onFSChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen();
    else document.exitFullscreen();
  };

  // ─── Mobile View ───
  if (isMobile && !isFullscreen) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <div className="sticky top-0 z-10 h-14 border-b border-border glass flex items-center justify-between px-4">
          <button onClick={() => navigate("/")} className="flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <span className="font-mono text-sm font-bold text-foreground">
            {current + 1}<span className="text-muted-foreground font-normal"> / {slides.length}</span>
          </span>
          <button onClick={toggleFullscreen} className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-md bg-primary text-primary-foreground">
            <Maximize className="w-3.5 h-3.5" /> Present
          </button>
        </div>

        <div className="flex-1" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.25 }}
              className="min-h-[calc(100vh-7rem)] overflow-y-auto p-6"
            >
              <MobileSlide index={current} />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="sticky bottom-0 h-14 border-t border-border glass flex items-center justify-between px-4">
          <button onClick={goPrev} disabled={current === 0} className="flex items-center gap-1 font-mono text-xs px-4 py-2 rounded-md border border-border disabled:opacity-20 hover:bg-card transition-colors">
            <ChevronLeft className="w-4 h-4" /> Prev
          </button>
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? "bg-primary scale-125" : "bg-border hover:bg-muted-foreground"}`} />
            ))}
          </div>
          <button onClick={goNext} disabled={current === slides.length - 1} className="flex items-center gap-1 font-mono text-xs px-4 py-2 rounded-md border border-border disabled:opacity-20 hover:bg-card transition-colors">
            Next <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  // ─── Desktop / Fullscreen ───
  return (
    <div className="h-screen bg-background text-foreground flex flex-col overflow-hidden">
      {!isFullscreen && (
        <div className="h-14 border-b border-border flex items-center justify-between px-6 shrink-0 bg-card/50">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate("/")} className="flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
            <div className="w-px h-6 bg-border" />
            <button onClick={() => setShowSidebar(!showSidebar)} className="flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-foreground border border-border rounded-md px-3 py-1.5 transition-colors">
              {showSidebar ? <PanelLeftClose className="w-4 h-4" /> : <PanelLeft className="w-4 h-4" />}
              {showSidebar ? "Hide" : "Slides"}
            </button>
          </div>
          <span className="font-display text-sm font-bold tracking-tight hidden lg:block">
            Practical Evaluation of Free Cloud Services
          </span>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-muted">
              <span className="font-mono text-sm font-bold text-foreground">{current + 1}</span>
              <span className="font-mono text-xs text-muted-foreground">/ {slides.length}</span>
            </div>
            <button onClick={toggleFullscreen} className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest px-5 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
              <Maximize className="w-4 h-4" /> Present
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-1 overflow-hidden">
        {!isFullscreen && showSidebar && (
          <div className="w-56 border-r border-border overflow-y-auto shrink-0 p-3 space-y-2 bg-card/30">
            {slides.map((slide, i) => (
              <button
                key={slide.id}
                onClick={() => setCurrent(i)}
                className={`w-full rounded-lg overflow-hidden border-2 transition-all ${
                  i === current ? "border-primary shadow-lg shadow-primary/20 ring-2 ring-primary/10" : "border-transparent hover:border-border"
                }`}
              >
                <div className="relative bg-white aspect-video overflow-hidden rounded-md">
                  <div style={{ width: 1920, height: 1080, transform: `scale(${192 / 1920})`, transformOrigin: "top left" }} className="pointer-events-none">
                    {slide.render()}
                  </div>
                </div>
                <div className="py-1.5 flex items-center justify-center gap-2 bg-card/50">
                  <span className={`font-mono text-xs ${i === current ? "text-primary font-bold" : "text-muted-foreground"}`}>{i + 1}</span>
                </div>
              </button>
            ))}
          </div>
        )}

        <div
          className={`flex-1 relative overflow-hidden ${isFullscreen ? "bg-background" : "bg-muted/20"}`}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onClick={(e) => {
            if (!isFullscreen) return;
            const rect = e.currentTarget.getBoundingClientRect();
            if (e.clientX - rect.left > rect.width / 2) goNext();
            else goPrev();
          }}
        >
          <ScaledSlide current={current} isFullscreen={isFullscreen} />

          {isFullscreen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 opacity-0 hover:opacity-100 transition-opacity duration-500"
            >
              <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-card/80 backdrop-blur-xl border border-border/50">
                <button onClick={goPrev} disabled={current === 0} className="disabled:opacity-20"><ChevronLeft className="w-5 h-5 text-foreground" /></button>
                <span className="font-mono text-sm text-foreground">{current + 1} / {slides.length}</span>
                <button onClick={goNext} disabled={current === slides.length - 1} className="disabled:opacity-20"><ChevronRight className="w-5 h-5 text-foreground" /></button>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {!isFullscreen && (
        <div className="h-12 border-t border-border flex items-center justify-center gap-6 shrink-0 bg-card/30">
          <button onClick={goPrev} disabled={current === 0} className="flex items-center gap-1.5 font-mono text-xs px-4 py-1.5 rounded-md border border-border hover:bg-card disabled:opacity-20 transition-colors">
            <ChevronLeft className="w-4 h-4" /> Previous
          </button>
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-primary scale-125" : "bg-border hover:bg-muted-foreground"}`} />
            ))}
          </div>
          <button onClick={goNext} disabled={current === slides.length - 1} className="flex items-center gap-1.5 font-mono text-xs px-4 py-1.5 rounded-md border border-border hover:bg-card disabled:opacity-20 transition-colors">
            Next <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};

// ─── Mobile Slide Content (simplified for small screens) ───
const MobileSlide = ({ index }: { index: number }) => {
  const slide = slides[index];
  // Re-render slide content directly, already responsive from the render function
  return <div className="min-h-[60vh]">{slide.render()}</div>;
};

// ─── Scaled Slide Renderer ───
const ScaledSlide = ({ current, isFullscreen }: { current: number; isFullscreen: boolean }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const W = 1920, H = 1080;

  const updateScale = useCallback(() => {
    if (!containerRef.current) return;
    const r = containerRef.current.getBoundingClientRect();
    // Use 96% of available space to leave breathing room
    setScale(Math.min((r.width * 0.96) / W, (r.height * 0.96) / H));
  }, []);

  useEffect(() => {
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [updateScale, isFullscreen]);

  // Re-calc when sidebar toggles
  useEffect(() => {
    const timer = setTimeout(updateScale, 50);
    return () => clearTimeout(timer);
  });

  return (
    <div ref={containerRef} className="absolute inset-0 flex items-center justify-center p-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div
            style={{
              width: W,
              height: H,
              transform: `scale(${scale})`,
              transformOrigin: "center center",
            }}
          >
            <div className={`w-full h-full bg-white text-gray-900 overflow-hidden ${isFullscreen ? "" : "rounded-xl border border-gray-200 shadow-2xl shadow-black/10"}`}>
              {slides[current].render()}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Presentation;
