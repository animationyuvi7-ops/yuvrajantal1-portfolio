export const projectsData = [
  {
    id: "neural-studio",
    title: "NeuralCanvas AI Studio",
    subtitle: "Real-time Generative AI Art & Shader Playground",
    category: "ai",
    featured: true,
    tags: ["React", "WebGL", "TypeScript", "Python / FastAPI", "PyTorch"],
    description: "An intuitive web application for creative coding, custom WebGL shader synthesis, and diffusion model prompt experimentation with instantaneous GPU rendering.",
    fullDescription: "NeuralCanvas AI Studio combines WebGL canvas pipelines with backend PyTorch inference to let digital artists generate procedural visual effects and AI artwork in real time. Features node-based shader graph nodes, prompt weight fine-tuning, high-res export capabilities, and collaborative live sessions.",
    metrics: [
      { label: "Rendering Speed", value: "60 FPS WebGL" },
      { label: "Active Creators", value: "45,000+" },
      { label: "Model Latency", value: "< 120ms" }
    ],
    github: "https://github.com/example/neural-studio",
    live: "https://neuralcanvas.demo.app",
    color: "#8b5cf6",
    gradient: "linear-gradient(135deg, rgba(139,92,246,0.3), rgba(6,182,212,0.15))",
    icon: "sparkles"
  },
  {
    id: "hyper-cloud",
    title: "HyperScale Kubernetes Monitor",
    subtitle: "Real-time Distributed Infrastructure Telemetry",
    category: "web",
    featured: true,
    tags: ["Vue 3", "Go", "GraphQL", "TimescaleDB", "Docker"],
    description: "Enterprise observability dashboard presenting micro-second cluster health metrics, anomaly detection alerts, and automated autoscaling triggers.",
    fullDescription: "HyperScale provides intuitive visualization for complex multi-cloud Kubernetes clusters. Includes automated pod resource optimization recommendations, custom node topology maps, distributed tracing viewers, and interactive incident timeline playback.",
    metrics: [
      { label: "Data Throughput", value: "2.5M req/sec" },
      { label: "Cost Reduction", value: "32% Avg." },
      { label: "Alert Latency", value: "< 500ms" }
    ],
    github: "https://github.com/example/hyperscale-k8s",
    live: "https://hyperscale.demo.app",
    color: "#06b6d4",
    gradient: "linear-gradient(135deg, rgba(6,182,212,0.3), rgba(59,130,246,0.15))",
    icon: "activity"
  },
  {
    id: "pulse-finance",
    title: "PulseFlow Algo-Trading Engine",
    subtitle: "High-Frequency Crypto Analytics & Bot Builder",
    category: "web",
    featured: true,
    tags: ["Next.js", "Rust", "WebSockets", "Tailwind CSS", "Redis"],
    description: "Low-latency trading strategy sandbox with visual block builder, backtesting engine over 5 years of tick data, and instant execution hooks.",
    fullDescription: "PulseFlow empowers quantitative traders to compose automated trading algorithms visually. Features order book visualizers, backtesting simulation with slippage simulation, risk management triggers, and real-time execution across major decentralized & centralized exchanges.",
    metrics: [
      { label: "Execution Latency", value: "4.2 ms" },
      { label: "Backtest Speed", value: "10M Ticks/sec" },
      { label: "Volume Traded", value: "$120M+" }
    ],
    github: "https://github.com/example/pulseflow-trading",
    live: "https://pulseflow.demo.app",
    color: "#10b981",
    gradient: "linear-gradient(135deg, rgba(16,185,129,0.3), rgba(6,182,212,0.15))",
    icon: "trending-up"
  },
  {
    id: "synapse-audio",
    title: "Synapse Spatial Synthesizer",
    subtitle: "Interactive WebAudio 3D Sound Engine",
    category: "open-source",
    featured: false,
    tags: ["WebAudio API", "Three.js", "Vanilla JS", "WebAssembly"],
    description: "Immersive WebAudio spatialization library allowing web developers to build binaural 3D acoustic soundscapes directly in the browser.",
    fullDescription: "Synapse brings binaural HRTF audio spatialization to web applications and WebXR experiences. It leverages WebAssembly compiled DSP filters to render positional audio sources, reverb zones, and Doppler effects with zero main-thread lag.",
    metrics: [
      { label: "GitHub Stars", value: "3.8k ★" },
      { label: "NPM Downloads", value: "120k+/mo" },
      { label: "Audio Latency", value: "8 ms" }
    ],
    github: "https://github.com/example/synapse-audio",
    live: "https://synapse-audio.demo.app",
    color: "#f59e0b",
    gradient: "linear-gradient(135deg, rgba(245,158,11,0.3), rgba(239,68,68,0.15))",
    icon: "headphones"
  },
  {
    id: "orbit-mobile",
    title: "Orbit Smart Assistant Mobile App",
    subtitle: "Contextual Personal Task & Workflow Automation",
    category: "mobile",
    featured: false,
    tags: ["React Native", "Expo", "Node.js", "Vector DB"],
    description: "AI-driven mobile workspace app that intelligently prioritizes daily workflows, syncs cross-platform calendar events, and summarizes long documents.",
    fullDescription: "Orbit intelligently aggregates inputs from emails, task boards, and chat applications to automatically generate actionable daily summaries, smart schedule suggestions, and voice-activated quick task execution.",
    metrics: [
      { label: "App Store Rating", value: "4.9 ★" },
      { label: "Downloads", value: "85,000+" },
      { label: "Time Saved", value: "1.5 hrs/day" }
    ],
    github: "https://github.com/example/orbit-mobile",
    live: "https://orbit-app.demo.app",
    color: "#ec4899",
    gradient: "linear-gradient(135deg, rgba(236,72,153,0.3), rgba(139,92,246,0.15))",
    icon: "smartphone"
  },
  {
    id: "nexus-mesh",
    title: "Nexus Edge Router Protocol",
    subtitle: "Zero-Trust Peer-to-Peer Mesh Networking",
    category: "open-source",
    featured: false,
    tags: ["Rust", "eBPF", "WebRTC", "Cryptography"],
    description: "High-performance encrypted P2P mesh network daemon designed for ultra-resilient IoT and distributed edge application nodes.",
    fullDescription: "Nexus Mesh enables direct node-to-node communication without centralized relay servers using modern Noise protocol handshakes, end-to-end encryption, NAT traversal, and lightweight eBPF packet routing.",
    metrics: [
      { label: "Bandwidth Overhead", value: "< 1.2%" },
      { label: "GitHub Stars", value: "5.1k ★" },
      { label: "Security Audit", value: "Passed 100%" }
    ],
    github: "https://github.com/example/nexus-mesh",
    live: "https://nexusmesh.demo.app",
    color: "#6366f1",
    gradient: "linear-gradient(135deg, rgba(99,102,241,0.3), rgba(139,92,246,0.15))",
    icon: "shield-check"
  }
];

export const skillsData = {
  frontend: [
    { name: "React / Next.js", level: 95, icon: "atom", desc: "SSR, App Router, Hooks, Concurrent Mode" },
    { name: "TypeScript", level: 92, icon: "code-2", desc: "Strict Typing, Generics, AST Tools" },
    { name: "Vue.js 3 / Vite", level: 88, icon: "layout-grid", desc: "Composition API, Pinia, Custom Directives" },
    { name: "CSS Design Systems / WebGL", level: 90, icon: "palette", desc: "Glassmorphism, Tailwind, Three.js, Canvas" }
  ],
  backend: [
    { name: "Node.js / Express", level: 94, icon: "server", desc: "Event Loop, Streams, Microservices" },
    { name: "Python / FastAPI / PyTorch", level: 88, icon: "cpu", desc: "Async I/O, ML Models, REST & WebSockets" },
    { name: "Go (Golang)", level: 82, icon: "terminal", desc: "Goroutines, Channels, Microservices" },
    { name: "PostgreSQL / Redis / Vector DB", level: 89, icon: "database", desc: "Query Optimization, Indexing, Caching" }
  ],
  ai_devops: [
    { name: "Docker & Kubernetes", level: 86, icon: "container", desc: "Helm Charts, Ingress, Cluster Scaling" },
    { name: "CI/CD & Cloud Infrastructure", level: 90, icon: "cloud", desc: "AWS, Vercel, GitHub Actions, Terraform" },
    { name: "LLM Orchestration & RAG", level: 87, icon: "brain-circuit", desc: "LangChain, Vector Search, Fine-tuning" },
    { name: "System Architecture & Security", level: 91, icon: "shield", desc: "Zero-Trust, OAuth2, Rate Limiting, P2P" }
  ]
};

export const timelineData = [
  {
    period: "2024 - PRESENT",
    role: "Lead Full-Stack & AI Systems Architect",
    company: "Apex Tech Labs",
    badge: "Current Role",
    description: "Architecting high-throughput generative AI platforms, micro-frontend design systems, and distributed cloud microservices. Scaled web app traffic from 10k to 500k monthly active users while reducing latency by 45%.",
    highlights: [
      "Engineered real-time WebGL & Canvas preview engine with 60 FPS rendering",
      "Mentored a team of 12 software engineers across frontend and backend domains",
      "Implemented enterprise SSO, RBAC, and zero-trust API gateways"
    ]
  },
  {
    period: "2022 - 2024",
    role: "Senior Frontend Engineer",
    company: "Vortex Digital Interactive",
    badge: "Key Impact",
    description: "Led the development of data-dense interactive dashboards and cloud observability tools using React, TypeScript, and RxJS web workers.",
    highlights: [
      "Built custom canvas charting library capable of rendering 100,000 live data points",
      "Pioneered team adoption of Vite, reducing CI/CD build times by 65%",
      "Won Internal Innovation Hackathon with real-time audio spatialization web app"
    ]
  },
  {
    period: "2020 - 2022",
    role: "Full Stack Developer",
    company: "Nexus Software Studio",
    badge: "Growth Phase",
    description: "Developed end-to-end SaaS products, RESTful APIs, and responsive web applications for global fintech and e-commerce client projects.",
    highlights: [
      "Delivered 15+ high-impact client web applications ahead of deadline",
      "Designed PostgreSQL schema & Redis caching layer serving 2M daily requests",
      "Automated testing suite achieving 92% code coverage"
    ]
  }
];
