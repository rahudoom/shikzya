import type { LucideIcon } from "lucide-react";
import {
  CalendarCheck,
  CalendarDays,
  Star,
  Wallet,
  Banknote,
  Users,
  Bell,
  BellRing,
  FileText,
  IdCard,
  ScrollText,
  Bus,
  Database,
  Upload,
  GraduationCap,
  Bot,
  Sparkles,
  MessagesSquare,
  PlayCircle,
  NotebookPen,
  MessageCircle,
  Library,
  Cloud,
  Lock,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Leaf,
  Smartphone,
  Calculator,
  Calendar,
  BarChart3,
  LayoutGrid,
  LayoutDashboard,
  Presentation,
  BookOpen,
  Shield,
  Flame,
  HeartPulse,
  Handshake,
  Salad,
  Brain,
  TrafficCone,
  Activity,
  KeyRound,
  FileCheck,
  Building2,
  Rocket,
  Settings,
  MonitorPlay,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────────────────────
   Site & contact constants
   ───────────────────────────────────────────────────────────────────────── */

export const site = {
  name: "ShikZya",
  url: "https://shikzya.com",
  loginUrl: "https://ShikZya.com",
  edition: "v0.1 · Edition 2026",
  tagline: "Smart Education Management for Modern Institutions",
  description:
    "ShikZya is a complete cloud-based Education Management System for Nepali schools and colleges — attendance, fees, exams, results, communication and more, built around the Bikram Sambat calendar with a built-in AI assistant.",
};

export const contact = {
  email: "connect@shikzya.com",
  // TODO: replace with the real numbers supplied by the client.
  phone: "+977-9708522226",
  whatsapp: "9779708522226",
  address: "Gokarneshwor-4, Kathmandu, Nepal",
  loginUrl: "https://Shikzya.com",
};

export const company = {
  name: "Rahu Doom Pvt. Ltd.",
  url: "https://rahudoom.com",
  location: "Kathmandu, Nepal",
  tagline: "Building Ideas. Creating Future.",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Why ShikZya", href: "/why-shikzya" },
  { label: "AI", href: "/ai" },
  { label: "Pricing", href: "/pricing" },
];

/* ─────────────────────────────────────────────────────────────────────────
   Hero stat bar
   ───────────────────────────────────────────────────────────────────────── */

export const stats: {
  value: number;
  suffix?: string;
  display?: string;
  label: string;
}[] = [
  { value: 80, suffix: "+", label: "Integrated Modules" },
  { value: 11, label: "User Portals" },
  { value: 0, display: "100%", label: "Cloud Based" },
  { value: 0, display: "BS+AD", label: "Dual Calendar" },
];

export const heroChips = [
  "Native Bikram Sambat Calendar",
  "Built-in AI Assistant",
  "11 Role-Based Portals",
  "All Features Included",
];

/* ─────────────────────────────────────────────────────────────────────────
   The challenge (problems)
   ───────────────────────────────────────────────────────────────────────── */

export const challenges: { title: string; text: string }[] = [
  {
    title: "Hours lost to manual work",
    text: "Attendance registers, hand-written fee receipts and marks copied book to book — your team spends more energy on paperwork than on students.",
  },
  {
    title: "Information scattered everywhere",
    text: "Student records in one place, fees in another, exam marks in a third. Finding a single detail means digging through stacks of files.",
  },
  {
    title: "Parents kept at a distance",
    text: "Families usually hear about attendance, fees or concerns only once they've become a problem. There's no simple daily window into a child's progress.",
  },
  {
    title: "Costly, avoidable mistakes",
    text: "A mistyped fee, a miscalculated marksheet, a date in the wrong calendar — small errors quietly erode the trust families place in you.",
  },
];

/* ─────────────────────────────────────────────────────────────────────────
   The solution pillars
   ───────────────────────────────────────────────────────────────────────── */

export const solutionPillars: {
  icon: LucideIcon;
  title: string;
  text: string;
}[] = [
  {
    icon: Cloud,
    title: "100% Cloud",
    text: "No servers and no installation. Access everything securely from anywhere, at any time.",
  },
  {
    icon: ShieldCheck,
    title: "Secure by Design",
    text: "Your data is encrypted, isolated per institution, and protected at every layer of the system.",
  },
  {
    icon: CheckCircle2,
    title: "All Features, Now",
    text: "Every plan tier is unlocked during our introductory period — explore the full platform from day one.",
  },
];

/* ─────────────────────────────────────────────────────────────────────────
   Key benefits
   ───────────────────────────────────────────────────────────────────────── */

export const benefits: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Clock,
    title: "Save hours every single day",
    text: "Mark attendance in seconds, generate fee receipts automatically and calculate marksheets instantly. Staff spend time on students, not stationery.",
  },
  {
    icon: Leaf,
    title: "Go fully paper-free",
    text: "Digital records, receipts, ID cards and certificates. Less printing, less storage — nothing lost, damaged or misfiled again.",
  },
  {
    icon: Smartphone,
    title: "Bring parents truly closer",
    text: "Parents follow attendance, marks, fees and notices from their phone, download marksheets, and raise concerns directly to teachers.",
  },
  {
    icon: Calculator,
    title: "Accuracy you can rely on",
    text: "Marks, GPA, grades and fee totals are all calculated by the system. Manual addition errors on marksheets and receipts simply disappear.",
  },
  {
    icon: Calendar,
    title: "Everything in Nepali dates",
    text: "Holidays, exams, fee due dates and every calendar event display in Bikram Sambat — exactly the way your institution plans its year.",
  },
  {
    icon: BarChart3,
    title: "Decisions backed by real data",
    text: "See attendance trends, fee collection and exam performance at a glance, so you can lead with clear numbers instead of guesswork.",
  },
];

/* ─────────────────────────────────────────────────────────────────────────
   Modules (80+ — representative set from the proposal)
   ───────────────────────────────────────────────────────────────────────── */

export type ModuleGroup = {
  name: string;
  items: { icon: LucideIcon; name: string; desc: string }[];
};

export const moduleGroups: ModuleGroup[] = [
  {
    name: "Academics & Results",
    items: [
      {
        icon: CalendarCheck,
        name: "Attendance",
        desc: "Staff & student attendance, daily and period-wise.",
      },
      {
        icon: Star,
        name: "Marks & Results",
        desc: "Exam marks entry & automatic GPA calculation.",
      },
      {
        icon: FileText,
        name: "Marksheet Generator",
        desc: "PDF marksheets with GPA, downloadable instantly.",
      },
      {
        icon: NotebookPen,
        name: "Homework",
        desc: "Class-wise homework assignments.",
      },
      {
        icon: GraduationCap,
        name: "Higher Secondary",
        desc: "Class 11–12 & college tier support.",
      },
    ],
  },
  {
    name: "Finance",
    items: [
      {
        icon: Wallet,
        name: "Fees Management",
        desc: "Student fee collection & tracking.",
      },
      {
        icon: Banknote,
        name: "Salary Management",
        desc: "Staff salary & deductions.",
      },
    ],
  },
  {
    name: "Communication",
    items: [
      {
        icon: Users,
        name: "Parent Portal",
        desc: "Parent & student login and portal.",
      },
      {
        icon: Bell,
        name: "Notifications",
        desc: "Principal posts notices; urgent ones flash on every portal.",
      },
      {
        icon: MessagesSquare,
        name: "ConnectSchool",
        desc: "Parent–teacher messaging & escalation.",
      },
      {
        icon: MessageCircle,
        name: "StaffConnect",
        desc: "Internal staff chat & messaging.",
      },
    ],
  },
  {
    name: "Documents",
    items: [
      {
        icon: IdCard,
        name: "ID Card Generator",
        desc: "Student & staff ID card printing.",
      },
      {
        icon: ScrollText,
        name: "Certificate Generator",
        desc: "Bonafide, transfer & merit certificates.",
      },
    ],
  },
  {
    name: "Operations",
    items: [
      {
        icon: Bus,
        name: "Transport",
        desc: "Student transport & route management.",
      },
      {
        icon: Database,
        name: "Data Operator Portal",
        desc: "One-click bulk student data import.",
      },
      {
        icon: Library,
        name: "Library",
        desc: "Books catalog, issue & return.",
      },
      {
        icon: CalendarDays,
        name: "School Calendar",
        desc: "Your own monthly & yearly BS calendar, live for parents.",
      },
    ],
  },
  {
    name: "Learning & AI",
    items: [
      {
        icon: PlayCircle,
        name: "LearnHub",
        desc: "Video learning & quizzes for students.",
      },
      {
        icon: Bot,
        name: "AI Chatbot",
        desc: "AI assistant inside the parent portal.",
      },
    ],
  },
];

/* ─────────────────────────────────────────────────────────────────────────
   Why ShikZya — differentiators
   ───────────────────────────────────────────────────────────────────────── */

export const differentiators: {
  icon: LucideIcon;
  title: string;
  text: string;
  tag: string;
}[] = [
  {
    icon: CalendarDays,
    title: "Native Bikram Sambat Calendar",
    text: "Built around Bikram Sambat from the ground up — covering 2000 to 2090 with automatic BS↔AD conversion. Your full calendar of events, holidays and exams shows live in every portal.",
    tag: "Our biggest competitive advantage",
  },
  {
    icon: BellRing,
    title: "Instant Notifications & urgent alerts",
    text: "The principal posts a notice and chooses who sees it. Mark it urgent and it flashes across every relevant portal the instant it's sent — no calls, no missed messages.",
    tag: "Nothing important gets missed",
  },
  {
    icon: MessagesSquare,
    title: "ConnectSchool — real concern resolution",
    text: "Every concern follows a clear, accountable path: Parent → Teacher → Principal, tracked through sent, read and replied status. Nothing slips through the cracks.",
    tag: "Builds lasting parent trust",
  },
  {
    icon: Upload,
    title: "One-Click Student Import",
    text: "Your existing student data imports in a single click through the Data Operator portal. No tedious manual entry, no lost records — you're up and running almost immediately.",
    tag: "Effortless onboarding",
  },
  {
    icon: Sparkles,
    title: "Built-in AI Assistant",
    text: "A friendly AI chatbot lives inside the parent portal. Families ask a question in plain language and get instant help — a native intelligence layer most platforms don't offer.",
    tag: "Smart, always-on support",
  },
  {
    icon: MessageCircle,
    title: "StaffConnect for your team",
    text: "Teachers and staff get a private internal chat with direct messages and groups, keeping official communication cleanly separated from personal messaging apps.",
    tag: "Better internal teamwork",
  },
  {
    icon: GraduationCap,
    title: "One platform for school & college",
    text: "K-12 grades and college programs like BBA and MBA run side by side, with different fee structures and grading handled gracefully — no juggling multiple systems.",
    tag: "Grow without switching tools",
  },
  {
    icon: LayoutGrid,
    title: "11 dedicated portals",
    text: "Where typical software offers three or four logins, ShikZya provides eleven — each role sees exactly the tools it needs, and nothing more.",
    tag: "The right access for everyone",
  },
];

/* ─────────────────────────────────────────────────────────────────────────
   Powered by AI
   ───────────────────────────────────────────────────────────────────────── */

export const aiFeatures: {
  icon: LucideIcon;
  title: string;
  text: string;
  tag: string;
}[] = [
  {
    icon: Sparkles,
    title: "The Principal's AI — your right hand",
    text: 'A genuinely conversational assistant inside the principal\'s portal. Ask "show me Class 9\'s attendance this week" or "draft a holiday notice" and it understands, pulls the answer from across the platform, and gets it done in seconds.',
    tag: "The principal's personal assistant",
  },
  {
    icon: Bot,
    title: "AI in the Parent & Student Portal",
    text: "More than answers — it actively analyses each student. Attendance patterns, GPA trends, fee status and homework are all studied, giving a clear, personalised insight into how the child is really progressing.",
    tag: "Understands every student",
  },
  {
    icon: BarChart3,
    title: "AI-Powered Reports & Insights",
    text: "The same intelligence reads your institution's data and turns it into direction — which classes need attention, where fee collection is slipping, how results are trending — so leadership decides with insight, not guesswork.",
    tag: "Smarter decisions, faster",
  },
];

/* ─────────────────────────────────────────────────────────────────────────
   LearnHub categories
   ───────────────────────────────────────────────────────────────────────── */

export const learnHub: { icon: LucideIcon; title: string; np: string }[] = [
  { icon: Shield, title: "Anti-Bullying", np: "बदमासी विरुद्ध" },
  { icon: Lock, title: "Cyber Safety", np: "साइबर सुरक्षा" },
  { icon: Activity, title: "Earthquake Safety", np: "भूकम्प सुरक्षा" },
  { icon: Leaf, title: "Environment", np: "वातावरण संरक्षण" },
  { icon: Flame, title: "Fire Safety", np: "आगलागी सुरक्षा" },
  { icon: HeartPulse, title: "First Aid", np: "प्राथमिक उपचार" },
  { icon: Handshake, title: "Good Manners", np: "सदाचार र शिष्टाचार" },
  { icon: Salad, title: "Health & Nutrition", np: "स्वास्थ्य र पोषण" },
  { icon: Brain, title: "Mental Health", np: "मानसिक स्वास्थ्य" },
  { icon: TrafficCone, title: "Road Safety", np: "सडक सुरक्षा" },
];

/* ─────────────────────────────────────────────────────────────────────────
   Roles & portals
   ───────────────────────────────────────────────────────────────────────── */

export const roles: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: LayoutDashboard,
    title: "Principal & Owner",
    text: "A bird's-eye dashboard of the whole institution — attendance, fees, performance and staff — with AI support and a direct line to every parent concern.",
  },
  {
    icon: Presentation,
    title: "Teacher",
    text: "Mark attendance, enter exam marks, manage classes and subjects, set homework and respond to parent concerns — all from a single screen.",
  },
  {
    icon: Users,
    title: "Parent",
    text: "Follow your child's attendance, marks and fees, download marksheets, pay online and raise concerns directly. Ask the built-in AI anything.",
  },
  {
    icon: BookOpen,
    title: "Student",
    text: "Check timetable, attendance and results, download marksheets, and learn from LearnHub videos and quizzes whenever it suits.",
  },
  {
    icon: Calculator,
    title: "Accountant",
    text: "Collect fees, generate receipts, manage salaries and transport fees, and keep clean, auditable financial records all year.",
  },
  {
    icon: Database,
    title: "Front Office & Operators",
    text: "Reception, Data Operator, Librarian, Transport Officer and Canteen Staff each get a tailored portal — including one-click student import.",
  },
];

export const portals = [
  "Principal",
  "Teacher",
  "Parent",
  "Student",
  "Accountant",
  "Reception",
  "Data Operator",
  "Librarian",
  "Transport Officer",
  "Canteen Staff",
  "Superadmin",
];

/* ─────────────────────────────────────────────────────────────────────────
   Plans
   ───────────────────────────────────────────────────────────────────────── */

export const plans: {
  name: string;
  tagline: string;
  accent: string; // tailwind color class for the top bar
  features: string[];
  inherits?: string;
}[] = [
  {
    name: "Essential",
    tagline: "Core day-to-day basics",
    accent: "bg-brand",
    features: [
      "Attendance (staff & student)",
      "Fees Management",
      "Parent & Student Portal",
      "Notifications",
      "School Calendar (BS)",
    ],
  },
  {
    name: "Professional",
    tagline: "Academics, finance & operations",
    accent: "bg-emerald-500",
    inherits: "Everything in Essential",
    features: [
      "Marks & Results (GPA)",
      "Salary Management",
      "Transport management",
      "Data Operator (bulk import)",
      "Homework assignments",
    ],
  },
  {
    name: "Premium",
    tagline: "Full admin & documents",
    accent: "bg-accent",
    inherits: "Everything in Professional",
    features: [
      "Marksheet, ID & certificate generators",
      "Higher Secondary (Class 11–12 & college)",
      "ConnectSchool & StaffConnect",
      "Library management",
    ],
  },
  {
    name: "Enterprise AI",
    tagline: "Online learning & AI",
    accent: "bg-violet-500",
    inherits: "Everything in Premium",
    features: [
      "LearnHub videos & quizzes",
      "AI assistant in parent portal",
      "Priority support",
      "Dedicated onboarding",
    ],
  },
];

/* ─────────────────────────────────────────────────────────────────────────
   Trust & security
   ───────────────────────────────────────────────────────────────────────── */

export const security: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Building2,
    title: "Each institution kept separate",
    text: "Your data lives in its own secure space. No other institution can ever see, reach or access your records — strict isolation is built into the foundation.",
  },
  {
    icon: KeyRound,
    title: "Protected logins",
    text: "Every password is stored in encrypted, irreversible form, and each login is freshly secured. Only the right person reaches the right portal.",
  },
  {
    icon: ShieldCheck,
    title: "Role-based access",
    text: "A teacher sees teaching tools, an accountant sees finance, a parent sees only their child. Everyone is limited to exactly what their role allows.",
  },
  {
    icon: FileCheck,
    title: "Safe uploads",
    text: "Photos and documents are checked for type and size before they're accepted, keeping unwanted or harmful files out of your system.",
  },
];

/* ─────────────────────────────────────────────────────────────────────────
   Roadmap
   ───────────────────────────────────────────────────────────────────────── */

export const roadmap: {
  title: string;
  text: string;
  status: "Coming Soon" | "Planned";
}[] = [
  {
    title: "Online Payment Gateway",
    text: "Pay fees online with major banks and wallets — eSewa, Khalti and IME Pay — with receipts reconciled automatically.",
    status: "Coming Soon",
  },
  {
    title: "ShikZya Mobile App",
    text: "A dedicated mobile app for parents, students and staff.",
    status: "Coming Soon",
  },
  {
    title: "Educational Games — Math & Science",
    text: "In-app games that turn practice into play for younger students.",
    status: "Coming Soon",
  },
  {
    title: "eBooks — Chapter-wise Class Books",
    text: "A built-in eBook library so students read their class textbooks right inside the app.",
    status: "Coming Soon",
  },
  {
    title: "Student Behaviour Analytics",
    text: "Daily behaviour notes turned into a clear monthly graph by AI, for students below Class 10.",
    status: "Coming Soon",
  },
  {
    title: "Punching-Card Attendance",
    text: "Card-based punch-in/out for student and staff attendance.",
    status: "Coming Soon",
  },
  {
    title: "Online Classes",
    text: "Live online classes built right into ShikZya — no third-party tool required.",
    status: "Coming Soon",
  },
  {
    title: "Where is my Child — Live Location",
    text: "Parents see their child's real-time location in the app, for Class 8 and below.",
    status: "Planned",
  },
  {
    title: "GPS-based Real-Time Transport",
    text: "Live bus tracking with GPS and estimated arrival times.",
    status: "Planned",
  },
  {
    title: "Homework Submission",
    text: "Students submit homework digitally; teachers review and grade in the portal.",
    status: "Planned",
  },
  {
    title: "Punching-Card Canteen",
    text: "Cashless canteen transactions through the punching-card system.",
    status: "Planned",
  },
  {
    title: "Advanced Analytics & Multi-Language",
    text: "Richer dashboards and a multi-language interface for wider accessibility.",
    status: "Planned",
  },
];

/* ─────────────────────────────────────────────────────────────────────────
   Getting started
   ───────────────────────────────────────────────────────────────────────── */

export const steps: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: MonitorPlay,
    title: "Free Demo",
    text: "We walk you through ShikZya with sample data from an institution like yours, and answer every question you have.",
  },
  {
    icon: Settings,
    title: "Quick Setup",
    text: "We create your institution's account and import your existing students in a single click — no manual re-entry.",
  },
  {
    icon: Rocket,
    title: "Go Live",
    text: "Your team receives a short, friendly training session, and from that day your institution runs on ShikZya.",
  },
];

export const roleOptions = [
  "Principal / Owner",
  "Vice-Principal / Coordinator",
  "Administrator",
  "Accountant",
  "Teacher",
  "Other",
];
