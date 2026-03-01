import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

// ─── Slide Data ───
const slides = [
  {
    id: "cover",
    render: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-6 sm:px-20">
        <div className="mb-4 sm:mb-8">
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-primary/30 text-primary font-mono text-[10px] sm:text-sm tracking-widest uppercase mb-6 sm:mb-10">
            Cloud Computing · Level 8
          </span>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-4 sm:mb-8 max-w-[1400px]">
          Practical Evaluation of
          <br />
          <span className="text-gradient">Free Cloud Services</span>
        </h1>
        <p className="text-sm sm:text-xl lg:text-2xl text-muted-foreground font-body max-w-[800px] mb-6 sm:mb-12">
          A Case Study of Vercel Cloud Platform using G2Cloud
        </p>
        <div className="flex gap-4 sm:gap-12 text-muted-foreground font-mono text-[10px] sm:text-sm tracking-wide">
          <span>March 2026</span>
          <span className="text-border">|</span>
          <span>Group Presentation</span>
        </div>
        <div className="mt-8 sm:mt-16 grid grid-cols-2 sm:grid-cols-3 gap-x-6 sm:gap-x-16 gap-y-2 sm:gap-y-3 text-[10px] sm:text-sm font-body text-muted-foreground">
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
    ),
  },
  {
    id: "introduction",
    render: () => (
      <div className="flex flex-col h-full px-6 sm:px-24 py-8 sm:py-20">
        <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-primary mb-2 sm:mb-4">01</span>
        <h2 className="font-display text-2xl sm:text-4xl lg:text-6xl font-bold mb-6 sm:mb-16">Introduction</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-12 flex-1">
          {[
            { title: "Cloud Computing", points: ["On demand compute, storage, and networking", "No server maintenance for teams"] },
            { title: "Free Tiers", points: ["Learn and experiment at low or zero cost", "Prototype MVPs and student projects fast"] },
            { title: "This Study", points: ["Vercel Hobby plan with G2Cloud site", "Focus on capabilities, limits, and deploy ease"] },
          ].map((col) => (
            <div key={col.title} className="flex flex-col">
              <h3 className="font-display text-lg sm:text-2xl font-bold mb-2 sm:mb-4">{col.title}</h3>
              <div className="w-12 h-0.5 bg-primary mb-3 sm:mb-6" />
              <ul className="space-y-2 sm:space-y-4 font-body text-sm sm:text-lg text-muted-foreground leading-relaxed">
                {col.points.map((p, i) => <li key={i}>{p}</li>)}
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
      <div className="flex flex-col h-full px-6 sm:px-24 py-8 sm:py-20">
        <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-primary mb-2 sm:mb-4">02</span>
        <h2 className="font-display text-2xl sm:text-4xl lg:text-6xl font-bold mb-2 sm:mb-4">Vercel Free Tier Services</h2>
        <p className="font-body text-sm sm:text-xl text-muted-foreground mb-6 sm:mb-16">Hosting, Serverless Functions, CDN</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-10 flex-1">
          {[
            { title: "Hosting", points: ["Git based deploys with automatic builds and scaling", "Great for static and Jamstack sites", "Limits include bandwidth, build minutes, and concurrency"] },
            { title: "Serverless Functions", points: ["HTTP triggered backend logic in the same project", "Good for forms, auth callbacks, and basic APIs", "Limits include execution time and concurrency"] },
            { title: "CDN", points: ["Global edge delivery by default", "Low latency for worldwide users", "Limits include bandwidth caps after allowance"] },
          ].map((s) => (
            <div key={s.title} className="rounded-xl sm:rounded-2xl border border-border bg-card/50 p-5 sm:p-10 flex flex-col">
              <h3 className="font-display text-lg sm:text-2xl font-bold mb-3 sm:mb-6">{s.title}</h3>
              <ul className="space-y-2 sm:space-y-4 font-body text-sm sm:text-lg text-muted-foreground leading-relaxed">
                {s.points.map((p, i) => (
                  <li key={i} className="flex gap-2 sm:gap-3">
                    <span className="text-primary mt-0.5 shrink-0">&#x2022;</span>
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
      <div className="flex flex-col h-full px-6 sm:px-24 py-8 sm:py-20">
        <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-primary mb-2 sm:mb-4">03</span>
        <h2 className="font-display text-2xl sm:text-4xl lg:text-6xl font-bold mb-2 sm:mb-4">G2Cloud Deployment</h2>
        <p className="font-body text-sm sm:text-xl text-muted-foreground mb-6 sm:mb-14">Static site on Vercel free tier</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16 flex-1">
          <div>
            <h3 className="font-display text-lg sm:text-2xl font-bold mb-3 sm:mb-6">Context and Results</h3>
            <div className="space-y-2 sm:space-y-4 font-body text-sm sm:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-10">
              <p>Need: zero cost startup web presence</p>
              <p>Solution: static site with About, Services, Vision, Contact</p>
              <p>Architecture: Git repo to Vercel build to global CDN</p>
            </div>
            <h3 className="font-display text-lg sm:text-2xl font-bold mb-3 sm:mb-6">Evidence</h3>
            <ul className="space-y-2 sm:space-y-3 font-body text-sm sm:text-lg text-muted-foreground">
              <li>Public site deployed in minutes</li>
              <li>Fast global performance via edge CDN</li>
              <li>Simple operations with CI/CD pipeline</li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-lg sm:text-2xl font-bold mb-4 sm:mb-8">Deployment Workflow</h3>
            <div className="space-y-3 sm:space-y-6">
              {[
                { step: "1", label: "Git Repository", desc: "Push source code" },
                { step: "2", label: "Vercel Build", desc: "Auto detect and build" },
                { step: "3", label: "Global CDN", desc: "Edge delivery worldwide" },
                { step: "4", label: "Public URL", desc: "Live site accessible" },
              ].map((item) => (
                <div key={item.step} className="flex items-center gap-4 sm:gap-6 rounded-lg sm:rounded-xl border border-border bg-card/30 px-4 sm:px-8 py-3 sm:py-5">
                  <span className="font-mono text-xl sm:text-3xl font-bold text-primary">{item.step}</span>
                  <div>
                    <p className="font-display text-sm sm:text-lg font-bold">{item.label}</p>
                    <p className="font-body text-xs sm:text-base text-muted-foreground">{item.desc}</p>
                  </div>
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
      <div className="flex flex-col h-full px-6 sm:px-24 py-8 sm:py-20">
        <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-primary mb-2 sm:mb-4">04</span>
        <h2 className="font-display text-2xl sm:text-4xl lg:text-6xl font-bold mb-2 sm:mb-4">Responsible Use</h2>
        <p className="font-body text-sm sm:text-xl text-muted-foreground mb-6 sm:mb-14">Free tier usage, security, and governance</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 flex-1">
          {[
            { title: "Usage and Cost", items: ["Know free tier limits and monitor usage", "Disable auto upgrades to prevent surprise billing", "Set cost alerts and bandwidth thresholds", "Review dashboards regularly for anomalies"] },
            { title: "Security", items: ["Enable MFA and use strong passwords", "Apply least privilege roles and permissions", "Keep secrets out of code and rotate tokens", "Protect repository access and ownership"] },
            { title: "Governance", items: ["Define acceptable use and upgrade approvals", "Assign owners for monitoring and maintenance", "Track SLAs, backups, and recovery steps", "Audit configurations on a regular cadence"] },
          ].map((col) => (
            <div key={col.title}>
              <h3 className="font-display text-lg sm:text-2xl font-bold mb-3 sm:mb-6">{col.title}</h3>
              <div className="w-12 h-0.5 bg-primary mb-3 sm:mb-6" />
              <ul className="space-y-2 sm:space-y-4">
                {col.items.map((item, i) => (
                  <li key={i} className="flex gap-2 sm:gap-3 font-body text-sm sm:text-lg text-muted-foreground leading-relaxed">
                    <span className="text-primary shrink-0 mt-0.5">&#x2713;</span>
                    {item}
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
      <div className="flex flex-col h-full px-6 sm:px-24 py-8 sm:py-20">
        <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-primary mb-2 sm:mb-4">05</span>
        <h2 className="font-display text-2xl sm:text-4xl lg:text-6xl font-bold mb-6 sm:mb-14">Vercel vs AWS Free Tier</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-16 flex-1">
          <div className="rounded-xl sm:rounded-2xl border border-primary/30 bg-primary/5 p-6 sm:p-12 flex flex-col">
            <h3 className="font-display text-xl sm:text-3xl font-bold mb-4 sm:mb-8 text-primary">Vercel</h3>
            <ul className="space-y-3 sm:space-y-5 font-body text-sm sm:text-xl text-muted-foreground leading-relaxed flex-1">
              <li>Fast setup and great developer experience</li>
              <li>Optimized for frontend and serverless web apps</li>
              <li>Best for students, prototypes, and MVPs</li>
            </ul>
            <p className="font-mono text-[10px] sm:text-sm text-primary mt-4 sm:mt-8 tracking-wide">Choose for static sites and full stack JS</p>
          </div>
          <div className="rounded-xl sm:rounded-2xl border border-border bg-card/50 p-6 sm:p-12 flex flex-col">
            <h3 className="font-display text-xl sm:text-3xl font-bold mb-4 sm:mb-8">AWS</h3>
            <ul className="space-y-3 sm:space-y-5 font-body text-sm sm:text-xl text-muted-foreground leading-relaxed flex-1">
              <li>Broad services and fine grained control</li>
              <li>Suitable for complex, production systems</li>
              <li>More learning effort but greater flexibility</li>
            </ul>
            <p className="font-mono text-[10px] sm:text-sm text-muted-foreground mt-4 sm:mt-8 tracking-wide">Choose for custom infrastructure and advanced services</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "conclusion",
    render: () => (
      <div className="flex flex-col h-full px-6 sm:px-24 py-8 sm:py-20">
        <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-primary mb-2 sm:mb-4">06</span>
        <h2 className="font-display text-2xl sm:text-4xl lg:text-6xl font-bold mb-6 sm:mb-14">Key Takeaways</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-12 flex-1">
          {[
            { title: "Findings", items: ["Vercel free tier fits education and early stage startups", "G2Cloud site deployed fast with global reach", "Automation and CDN reduce operations work"] },
            { title: "Next Steps", items: ["Monitor limits for bandwidth and function runtime", "Add analytics and basic serverless APIs", "Define upgrade thresholds and governance rules"] },
            { title: "Appendices", items: ["A: System architecture diagram", "B: Deployment screenshots", "C: Live demo link"] },
          ].map((col) => (
            <div key={col.title}>
              <h3 className="font-display text-lg sm:text-2xl font-bold mb-3 sm:mb-6">{col.title}</h3>
              <div className="w-12 h-0.5 bg-primary mb-3 sm:mb-6" />
              <ul className="space-y-3 sm:space-y-5 font-body text-sm sm:text-lg text-muted-foreground leading-relaxed">
                {col.items.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-auto pt-8 sm:pt-12 text-center">
          <p className="font-display text-xl sm:text-3xl font-bold text-gradient">Thank You</p>
          <p className="font-body text-sm sm:text-lg text-muted-foreground mt-2 sm:mt-3">Questions and Discussion</p>
        </div>
      </div>
    ),
  },
];

// ─── Presentation Component ───
const Presentation = () => {
  const [current, setCurrent] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const touchRef = useRef<{ startX: number; startY: number } | null>(null);

  const goNext = useCallback(() => setCurrent((c) => Math.min(c + 1, slides.length - 1)), []);
  const goPrev = useCallback(() => setCurrent((c) => Math.max(c - 1, 0)), []);

  // Touch swipe support
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

  // On mobile we render slides as scrollable cards, on desktop we use scaled fixed-resolution
  if (isMobile && !isFullscreen) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        {/* Mobile toolbar */}
        <div className="sticky top-0 z-10 h-12 border-b border-border glass flex items-center justify-between px-4">
          <button onClick={() => navigate("/")} className="font-mono text-xs text-muted-foreground">
            ← Back
          </button>
          <span className="font-mono text-[10px] text-muted-foreground">
            {current + 1} / {slides.length}
          </span>
          <button onClick={toggleFullscreen} className="font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded bg-primary text-primary-foreground">
            Present
          </button>
        </div>

        {/* Mobile slide view */}
        <div
          className="flex-1 overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.25 }}
              className="min-h-[calc(100vh-7rem)] overflow-y-auto"
            >
              {slides[current].render()}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile bottom nav */}
        <div className="sticky bottom-0 h-12 border-t border-border glass flex items-center justify-between px-4">
          <button
            onClick={goPrev}
            disabled={current === 0}
            className="font-mono text-xs px-4 py-1.5 rounded border border-border disabled:opacity-30"
          >
            Prev
          </button>
          {/* Dot indicators */}
          <div className="flex gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-border"}`}
              />
            ))}
          </div>
          <button
            onClick={goNext}
            disabled={current === slides.length - 1}
            className="font-mono text-xs px-4 py-1.5 rounded border border-border disabled:opacity-30"
          >
            Next
          </button>
        </div>
      </div>
    );
  }

  // ─── Desktop / Fullscreen view ───
  return (
    <div className="h-screen bg-background text-foreground flex flex-col overflow-hidden">
      {/* Toolbar */}
      {!isFullscreen && (
        <div className="h-14 border-b border-border flex items-center justify-between px-6 shrink-0">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate("/")} className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors">
              ← Back to G2Cloud
            </button>
            <button
              onClick={() => setShowSidebar(!showSidebar)}
              className="font-mono text-xs text-muted-foreground hover:text-foreground border border-border rounded px-3 py-1"
            >
              {showSidebar ? "Hide slides" : "Show slides"}
            </button>
          </div>
          <span className="font-display text-sm font-bold tracking-tight hidden lg:block">
            Practical Evaluation of Free Cloud Services
          </span>
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-muted-foreground">
              {current + 1} / {slides.length}
            </span>
            <button
              onClick={toggleFullscreen}
              className="font-mono text-xs uppercase tracking-widest px-4 py-1.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Present
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar thumbnails */}
        {!isFullscreen && showSidebar && (
          <div className="w-48 border-r border-border overflow-y-auto shrink-0 p-2 space-y-2">
            {slides.map((slide, i) => (
              <button
                key={slide.id}
                onClick={() => setCurrent(i)}
                className={`w-full rounded-lg overflow-hidden border-2 transition-all ${
                  i === current ? "border-primary shadow-lg shadow-primary/10" : "border-transparent hover:border-border"
                }`}
              >
                <div className="relative bg-card aspect-video overflow-hidden">
                  <div
                    style={{ width: 1920, height: 1080, transform: `scale(${168 / 1920})`, transformOrigin: "top left" }}
                    className="pointer-events-none"
                  >
                    {slide.render()}
                  </div>
                </div>
                <div className="py-0.5 text-center">
                  <span className="font-mono text-[10px] text-muted-foreground">{i + 1}</span>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Main slide area */}
        <div
          className={`flex-1 relative overflow-hidden ${isFullscreen ? "bg-background" : "bg-muted/30"}`}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onClick={(e) => {
            if (!isFullscreen) return;
            const rect = e.currentTarget.getBoundingClientRect();
            if (e.clientX - rect.left > rect.width / 2) goNext();
            else goPrev();
          }}
        >
          <ScaledSlide current={current} goNext={goNext} goPrev={goPrev} isFullscreen={isFullscreen} />

          {isFullscreen && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-20 hover:opacity-80 transition-opacity">
              <span className="font-mono text-xs text-muted-foreground">{current + 1} / {slides.length}</span>
            </div>
          )}
        </div>
      </div>

      {/* Bottom nav */}
      {!isFullscreen && (
        <div className="h-12 border-t border-border flex items-center justify-center gap-4 shrink-0">
          <button onClick={goPrev} disabled={current === 0} className="font-mono text-xs px-4 py-1.5 rounded-md border border-border hover:bg-card disabled:opacity-30 transition-colors">
            Previous
          </button>
          <div className="flex gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-border"}`}
              />
            ))}
          </div>
          <button onClick={goNext} disabled={current === slides.length - 1} className="font-mono text-xs px-4 py-1.5 rounded-md border border-border hover:bg-card disabled:opacity-30 transition-colors">
            Next
          </button>
        </div>
      )}
    </div>
  );
};

// ─── Scaled Slide Renderer ───
const ScaledSlide = ({ current, isFullscreen }: { current: number; goNext: () => void; goPrev: () => void; isFullscreen: boolean }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const W = 1920, H = 1080;

  const updateScale = useCallback(() => {
    if (!containerRef.current) return;
    const r = containerRef.current.getBoundingClientRect();
    setScale(Math.min(r.width / W, r.height / H));
  }, []);

  useEffect(() => {
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [updateScale, isFullscreen]);

  return (
    <div ref={containerRef} className="absolute inset-0">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute"
          style={{
            width: W, height: H,
            left: "50%", top: "50%",
            marginLeft: -W / 2, marginTop: -H / 2,
            transform: `scale(${scale})`,
            transformOrigin: "center center",
          }}
        >
          <div className={`w-full h-full bg-background overflow-hidden ${isFullscreen ? "" : "rounded-lg border border-border shadow-2xl"}`}>
            {slides[current].render()}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Presentation;
