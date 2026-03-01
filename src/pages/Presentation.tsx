import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

// ─── Slide Data ───
const slides = [
  {
    id: "cover",
    render: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-20">
        <div className="mb-8">
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-primary font-mono text-sm tracking-widest uppercase mb-10">
            Cloud Computing · Level 8
          </span>
        </div>
        <h1 className="font-display text-7xl font-bold leading-tight mb-8 max-w-[1400px]">
          Practical Evaluation of
          <br />
          <span className="text-gradient">Free Cloud Services</span>
        </h1>
        <p className="text-2xl text-muted-foreground font-body max-w-[800px] mb-12">
          A Case Study of Vercel Cloud Platform using G2Cloud
        </p>
        <div className="flex gap-12 text-muted-foreground font-mono text-sm tracking-wide">
          <span>March 2026</span>
          <span className="text-border">|</span>
          <span>Group Presentation</span>
        </div>
        <div className="mt-16 grid grid-cols-3 gap-x-16 gap-y-3 text-sm font-body text-muted-foreground">
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
      <div className="flex flex-col h-full px-24 py-20">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">
          01
        </span>
        <h2 className="font-display text-6xl font-bold mb-16">Introduction</h2>
        <div className="grid grid-cols-3 gap-12 flex-1">
          <div className="flex flex-col">
            <h3 className="font-display text-2xl font-bold mb-4">Cloud Computing</h3>
            <div className="w-12 h-0.5 bg-primary mb-6" />
            <ul className="space-y-4 font-body text-lg text-muted-foreground leading-relaxed">
              <li>On demand compute, storage, and networking</li>
              <li>No server maintenance for teams</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="font-display text-2xl font-bold mb-4">Free Tiers</h3>
            <div className="w-12 h-0.5 bg-primary mb-6" />
            <ul className="space-y-4 font-body text-lg text-muted-foreground leading-relaxed">
              <li>Learn and experiment at low or zero cost</li>
              <li>Prototype MVPs and student projects fast</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="font-display text-2xl font-bold mb-4">This Study</h3>
            <div className="w-12 h-0.5 bg-primary mb-6" />
            <ul className="space-y-4 font-body text-lg text-muted-foreground leading-relaxed">
              <li>Vercel Hobby plan with G2Cloud site</li>
              <li>Focus on capabilities, limits, and deploy ease</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "vercel-services",
    render: () => (
      <div className="flex flex-col h-full px-24 py-20">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">
          02
        </span>
        <h2 className="font-display text-6xl font-bold mb-4">
          Vercel Free Tier Services
        </h2>
        <p className="font-body text-xl text-muted-foreground mb-16">
          Hosting, Serverless Functions, CDN
        </p>
        <div className="grid grid-cols-3 gap-10 flex-1">
          {[
            {
              title: "Hosting",
              points: [
                "Git based deploys with automatic builds and scaling",
                "Great for static and Jamstack sites",
                "Limits include bandwidth, build minutes, and concurrency",
              ],
            },
            {
              title: "Serverless Functions",
              points: [
                "HTTP triggered backend logic in the same project",
                "Good for forms, auth callbacks, and basic APIs",
                "Limits include execution time and concurrency",
              ],
            },
            {
              title: "CDN",
              points: [
                "Global edge delivery by default",
                "Low latency for worldwide users",
                "Limits include bandwidth caps after allowance",
              ],
            },
          ].map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-border bg-card/50 p-10 flex flex-col"
            >
              <h3 className="font-display text-2xl font-bold mb-6">{s.title}</h3>
              <ul className="space-y-4 font-body text-lg text-muted-foreground leading-relaxed">
                {s.points.map((p, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-primary mt-1 shrink-0">&#x2022;</span>
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
      <div className="flex flex-col h-full px-24 py-20">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">
          03
        </span>
        <h2 className="font-display text-6xl font-bold mb-4">
          G2Cloud Deployment
        </h2>
        <p className="font-body text-xl text-muted-foreground mb-14">
          Static site on Vercel free tier
        </p>
        <div className="grid grid-cols-2 gap-16 flex-1">
          <div>
            <h3 className="font-display text-2xl font-bold mb-6">Context and Results</h3>
            <div className="space-y-4 font-body text-lg text-muted-foreground leading-relaxed mb-10">
              <p>Need: zero cost startup web presence</p>
              <p>Solution: static site with About, Services, Vision, Contact</p>
              <p>Architecture: Git repo to Vercel build to global CDN</p>
            </div>
            <h3 className="font-display text-2xl font-bold mb-6">Evidence</h3>
            <ul className="space-y-3 font-body text-lg text-muted-foreground">
              <li>Public site deployed in minutes</li>
              <li>Fast global performance via edge CDN</li>
              <li>Simple operations with CI/CD pipeline</li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-2xl font-bold mb-8">Deployment Workflow</h3>
            <div className="space-y-6">
              {[
                { step: "1", label: "Git Repository", desc: "Push source code" },
                { step: "2", label: "Vercel Build", desc: "Auto detect and build" },
                { step: "3", label: "Global CDN", desc: "Edge delivery worldwide" },
                { step: "4", label: "Public URL", desc: "Live site accessible" },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex items-center gap-6 rounded-xl border border-border bg-card/30 px-8 py-5"
                >
                  <span className="font-mono text-3xl font-bold text-primary">
                    {item.step}
                  </span>
                  <div>
                    <p className="font-display text-lg font-bold">{item.label}</p>
                    <p className="font-body text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="font-body text-sm text-muted-foreground mt-6 italic">
              Updates: commit a change to trigger automatic redeploy
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "best-practices",
    render: () => (
      <div className="flex flex-col h-full px-24 py-20">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">
          04
        </span>
        <h2 className="font-display text-6xl font-bold mb-4">
          Responsible Use
        </h2>
        <p className="font-body text-xl text-muted-foreground mb-14">
          Free tier usage, security, and governance
        </p>
        <div className="grid grid-cols-3 gap-10 flex-1">
          {[
            {
              title: "Usage and Cost",
              items: [
                "Know free tier limits and monitor usage",
                "Disable auto upgrades to prevent surprise billing",
                "Set cost alerts and bandwidth thresholds",
                "Review dashboards regularly for anomalies",
              ],
            },
            {
              title: "Security",
              items: [
                "Enable MFA and use strong passwords",
                "Apply least privilege roles and permissions",
                "Keep secrets out of code and rotate tokens",
                "Protect repository access and ownership",
              ],
            },
            {
              title: "Governance",
              items: [
                "Define acceptable use and upgrade approvals",
                "Assign owners for monitoring and maintenance",
                "Track SLAs, backups, and recovery steps",
                "Audit configurations on a regular cadence",
              ],
            },
          ].map((col) => (
            <div key={col.title}>
              <h3 className="font-display text-2xl font-bold mb-6">{col.title}</h3>
              <div className="w-12 h-0.5 bg-primary mb-6" />
              <ul className="space-y-4">
                {col.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3 font-body text-lg text-muted-foreground leading-relaxed"
                  >
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
      <div className="flex flex-col h-full px-24 py-20">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">
          05
        </span>
        <h2 className="font-display text-6xl font-bold mb-14">
          Vercel vs AWS Free Tier
        </h2>
        <div className="grid grid-cols-2 gap-16 flex-1">
          <div className="rounded-2xl border border-primary/30 bg-primary/5 p-12 flex flex-col">
            <h3 className="font-display text-3xl font-bold mb-8 text-primary">Vercel</h3>
            <ul className="space-y-5 font-body text-xl text-muted-foreground leading-relaxed flex-1">
              <li>Fast setup and great developer experience</li>
              <li>Optimized for frontend and serverless web apps</li>
              <li>Best for students, prototypes, and MVPs</li>
            </ul>
            <p className="font-mono text-sm text-primary mt-8 tracking-wide">
              Choose for static sites and full stack JS
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card/50 p-12 flex flex-col">
            <h3 className="font-display text-3xl font-bold mb-8">AWS</h3>
            <ul className="space-y-5 font-body text-xl text-muted-foreground leading-relaxed flex-1">
              <li>Broad services and fine grained control</li>
              <li>Suitable for complex, production systems</li>
              <li>More learning effort but greater flexibility</li>
            </ul>
            <p className="font-mono text-sm text-muted-foreground mt-8 tracking-wide">
              Choose for custom infrastructure and advanced services
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "conclusion",
    render: () => (
      <div className="flex flex-col h-full px-24 py-20">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">
          06
        </span>
        <h2 className="font-display text-6xl font-bold mb-14">
          Key Takeaways
        </h2>
        <div className="grid grid-cols-3 gap-12 flex-1">
          <div>
            <h3 className="font-display text-2xl font-bold mb-6">Findings</h3>
            <div className="w-12 h-0.5 bg-primary mb-6" />
            <ul className="space-y-5 font-body text-lg text-muted-foreground leading-relaxed">
              <li>Vercel free tier fits education and early stage startups</li>
              <li>G2Cloud site deployed fast with global reach</li>
              <li>Automation and CDN reduce operations work</li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-2xl font-bold mb-6">Next Steps</h3>
            <div className="w-12 h-0.5 bg-primary mb-6" />
            <ul className="space-y-5 font-body text-lg text-muted-foreground leading-relaxed">
              <li>Monitor limits for bandwidth and function runtime</li>
              <li>Add analytics and basic serverless APIs</li>
              <li>Define upgrade thresholds and governance rules</li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-2xl font-bold mb-6">Appendices</h3>
            <div className="w-12 h-0.5 bg-primary mb-6" />
            <ul className="space-y-5 font-body text-lg text-muted-foreground leading-relaxed">
              <li>A: System architecture diagram</li>
              <li>B: Deployment screenshots</li>
              <li>C: Live demo link</li>
            </ul>
          </div>
        </div>
        <div className="mt-auto pt-12 text-center">
          <p className="font-display text-3xl font-bold text-gradient">
            Thank You
          </p>
          <p className="font-body text-lg text-muted-foreground mt-3">
            Questions and Discussion
          </p>
        </div>
      </div>
    ),
  },
];

// ─── Presentation Component ───
const Presentation = () => {
  const [current, setCurrent] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [scale, setScale] = useState(1);
  const navigate = useNavigate();

  const SLIDE_W = 1920;
  const SLIDE_H = 1080;

  const updateScale = useCallback(() => {
    const container = document.getElementById("slide-container");
    if (!container) return;
    const rect = container.getBoundingClientRect();
    setScale(Math.min(rect.width / SLIDE_W, rect.height / SLIDE_H));
  }, []);

  useEffect(() => {
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [updateScale, isFullscreen]);

  useEffect(() => {
    const onFSChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
      setTimeout(updateScale, 100);
    };
    document.addEventListener("fullscreenchange", onFSChange);
    return () => document.removeEventListener("fullscreenchange", onFSChange);
  }, [updateScale]);

  const goNext = useCallback(() => setCurrent((c) => Math.min(c + 1, slides.length - 1)), []);
  const goPrev = useCallback(() => setCurrent((c) => Math.max(c - 1, 0)), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goNext();
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }
      if (e.key === "Escape" && isFullscreen) {
        document.exitFullscreen();
      }
      if (e.key === "f" || e.key === "F5") {
        e.preventDefault();
        toggleFullscreen();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev, isFullscreen]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Toolbar */}
      {!isFullscreen && (
        <div className="h-14 border-b border-border flex items-center justify-between px-6 shrink-0">
          <button
            onClick={() => navigate("/")}
            className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to G2Cloud
          </button>
          <span className="font-display text-sm font-bold tracking-tight">
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
        {!isFullscreen && (
          <div className="w-52 border-r border-border overflow-y-auto shrink-0 p-3 space-y-2">
            {slides.map((slide, i) => (
              <button
                key={slide.id}
                onClick={() => setCurrent(i)}
                className={`w-full rounded-lg overflow-hidden border-2 transition-all ${
                  i === current
                    ? "border-primary shadow-lg shadow-primary/10"
                    : "border-transparent hover:border-border"
                }`}
              >
                <div className="relative bg-card aspect-video overflow-hidden">
                  <div
                    style={{
                      width: SLIDE_W,
                      height: SLIDE_H,
                      transform: `scale(${176 / SLIDE_W})`,
                      transformOrigin: "top left",
                    }}
                    className="pointer-events-none"
                  >
                    {slide.render()}
                  </div>
                </div>
                <div className="py-1 text-center">
                  <span className="font-mono text-[10px] text-muted-foreground">
                    {i + 1}
                  </span>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Main slide area */}
        <div
          id="slide-container"
          className={`flex-1 relative overflow-hidden ${
            isFullscreen ? "bg-background cursor-none" : "bg-muted/30"
          }`}
          onClick={(e) => {
            if (!isFullscreen) return;
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            if (x > rect.width / 2) goNext();
            else goPrev();
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="absolute"
              style={{
                width: SLIDE_W,
                height: SLIDE_H,
                left: "50%",
                top: "50%",
                marginLeft: -SLIDE_W / 2,
                marginTop: -SLIDE_H / 2,
                transform: `scale(${scale})`,
                transformOrigin: "center center",
              }}
            >
              <div className="w-full h-full bg-background rounded-lg border border-border overflow-hidden shadow-2xl">
                {slides[current].render()}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Fullscreen navigation hint */}
          {isFullscreen && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 opacity-30 hover:opacity-100 transition-opacity">
              <span className="font-mono text-xs text-muted-foreground">
                {current + 1} / {slides.length}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Bottom nav (non-fullscreen) */}
      {!isFullscreen && (
        <div className="h-12 border-t border-border flex items-center justify-center gap-4 shrink-0">
          <button
            onClick={goPrev}
            disabled={current === 0}
            className="font-mono text-xs px-4 py-1.5 rounded-md border border-border hover:bg-card disabled:opacity-30 transition-colors"
          >
            Previous
          </button>
          <button
            onClick={goNext}
            disabled={current === slides.length - 1}
            className="font-mono text-xs px-4 py-1.5 rounded-md border border-border hover:bg-card disabled:opacity-30 transition-colors"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Presentation;
