import {
  BadgeCheck,
  BarChart3,
  BookOpenText,
  Calculator,
  CheckCircle2,
  ChevronRight,
  Code2,
  ContactRound,
  Download,
  FileSpreadsheet,
  FileText,
  Gauge,
  Github,
  Globe2,
  HardDriveDownload,
  HelpCircle,
  KeyRound,
  Landmark,
  Layers3,
  LifeBuoy,
  Mail,
  MonitorDown,
  Palette,
  ReceiptText,
  Rocket,
  Settings2,
  ShieldCheck,
  Sparkles,
  UserRound,
  UsersRound,
} from "lucide-react";
import { motion, type MotionProps, useReducedMotion } from "framer-motion";
import { release } from "./config";
import { HeroAnimation } from "./components/HeroAnimation";

type RevealOptions = {
  delay?: number;
  y?: number;
};

const navItems = ["Preview", "Features", "Morocco", "Team", "Download", "FAQ"];

const featureStrip = [
  { icon: UsersRound, label: "Employees" },
  { icon: ReceiptText, label: "Payroll" },
  { icon: FileText, label: "PDF bulletins" },
  { icon: FileSpreadsheet, label: "Excel exports" },
  { icon: Landmark, label: "Moroccan compliance" },
];

const featureCards = [
  {
    icon: ContactRound,
    title: "Employee records",
    text: "Centralize staff profiles, contracts, chantiers, family situation, salary data, and administrative details.",
  },
  {
    icon: Gauge,
    title: "Payroll engine",
    text: "Calculate gross salary, seniority bonus, overtime, CNSS, AMO, IGR, deductions, and net salary in one workflow.",
  },
  {
    icon: BookOpenText,
    title: "Payroll status control",
    text: "Track monthly payroll preparation, validation, corrections, and finalization with clear operational states.",
  },
  {
    icon: FileText,
    title: "Bulletin de Paie PDFs",
    text: "Generate polished payslip PDFs for employees with the core payroll lines already structured.",
  },
  {
    icon: FileSpreadsheet,
    title: "Excel exports",
    text: "Export payroll journal and CNSS-ready spreadsheets for accounting, review, and reporting.",
  },
  {
    icon: KeyRound,
    title: "Activation support",
    text: "License and activation flows help protect desktop deployments while keeping setup straightforward.",
  },
];

const moroccoItems = [
  "CNSS, AMO, and IGR payroll components",
  "Chantier and project-based organization",
  "French and Arabic-friendly business context",
  "Built for Moroccan SMEs, accountants, HR, and admin teams",
];

const teamRoles = [
  { icon: Code2, label: "Desktop app engineering" },
  { icon: Calculator, label: "Moroccan payroll logic" },
  { icon: Palette, label: "Product and interface design" },
  { icon: ShieldCheck, label: "Licensing and activation" },
  { icon: Rocket, label: "Website, releases, and deployment" },
  { icon: LifeBuoy, label: "Customer support and updates" },
];

const faqs = [
  {
    question: "Is CDL-Maroc Paie a web app?",
    answer:
      "No. It is a Windows desktop application built with Electron and React. This website is static and only distributes the installer.",
  },
  {
    question: "Where is the installer hosted?",
    answer:
      "The installer should be uploaded as a GitHub Release asset. The website points to that release URL from one config file.",
  },
  {
    question: "Can the site be deployed on Cloudflare Pages?",
    answer:
      "Yes. It is a static Vite build with no backend, so Cloudflare Pages can serve it from the generated dist folder.",
  },
  {
    question: "Does the app generate payslips and Excel exports?",
    answer:
      "Yes. CDL-Maroc Paie generates Bulletin de Paie PDFs and exports payroll journal and CNSS Excel files.",
  },
];

function App() {
  const reduceMotion = useReducedMotion();

  const reveal = ({ delay = 0, y = 22 }: RevealOptions = {}) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-90px" },
          transition: { duration: 0.65, delay, ease: "easeOut" },
        } satisfies MotionProps;

  return (
    <main className="min-h-screen overflow-hidden bg-graphite-950 text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-graphite-950/76 backdrop-blur-xl">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-lg border border-white/15 bg-white shadow-glow">
              <img
                src={release.logoUrl}
                alt="CDL-Maroc"
                className="h-full w-full object-cover"
              />
            </span>
            <span className="hidden text-sm font-semibold tracking-wide text-white sm:block">
              CDL-Maroc Paie
            </span>
          </a>

          <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="rounded-full px-3 py-2 text-xs font-medium text-slate-300 transition hover:bg-white/8 hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>

          <a
            href={release.downloadUrl}
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-bold text-graphite-950 transition hover:bg-cyan-100 sm:px-4"
          >
            <Download className="h-4 w-4" />
            Download
          </a>
        </nav>
      </header>

      <section
        id="top"
        className="relative min-h-screen bg-radial-grid pt-24 sm:pt-28"
      >
        <HeroAnimation />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-graphite-950 to-transparent" />

        <div className="relative mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-12 px-4 pb-14 sm:px-6 lg:grid-cols-[0.94fr_1.06fr] lg:px-8">
          <motion.div {...reveal({ y: 28 })} className="min-w-0 max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-300/25 bg-emerald-300/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">
              <Sparkles className="h-3.5 w-3.5 flex-none" />
              Payroll command center
            </div>

            <div className="mb-5 flex items-center gap-4">
              <div className="grid h-16 w-16 place-items-center overflow-hidden rounded-xl border border-white/15 bg-white shadow-glow">
                <img
                  src={release.logoUrl}
                  alt="CDL-Maroc logo"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <div className="text-sm font-black uppercase tracking-[0.22em] text-slate-400">
                  Compagnie de Logiciel
                </div>
                <div className="mt-1 text-sm font-semibold text-red-200">
                  Moroccan payroll software
                </div>
              </div>
            </div>

            <h1 className="max-w-full font-display text-[2.8rem] font-black leading-[0.98] tracking-normal text-white sm:text-6xl lg:text-7xl">
              <span className="block">CDL-Maroc</span>
              <span className="block">Paie</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              A futuristic Windows payroll cockpit for Moroccan companies:
              employees, chantiers, monthly payroll, CNSS, AMO, IGR, PDFs, Excel,
              and activation in one focused desktop app.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={release.downloadUrl}
                className="group inline-flex items-center justify-center gap-3 rounded-lg bg-cyan-300 px-5 py-3 text-sm font-black text-graphite-950 shadow-glow transition hover:bg-white"
              >
                <MonitorDown className="h-5 w-5" />
                Download for Windows
                <ChevronRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
              <a
                href={release.releaseNotesUrl}
                className="inline-flex items-center justify-center gap-3 rounded-lg border border-white/14 bg-white/[0.04] px-5 py-3 text-sm font-bold text-white transition hover:border-emerald-300/40 hover:bg-emerald-300/10"
              >
                <Github className="h-5 w-5" />
                View release notes
              </a>
            </div>

            <div className="mt-8 grid max-w-xl grid-cols-3 gap-3">
              {[
                ["CNSS", "ready lines"],
                ["IGR", "calculation"],
                ["PDF", "bulletins"],
              ].map(([value, label]) => (
                <div
                  key={value}
                  className="rounded-lg border border-white/10 bg-white/[0.045] p-3"
                >
                  <div className="text-lg font-black text-white">{value}</div>
                  <div className="mt-1 text-xs text-slate-400">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...reveal({ delay: 0.1, y: 36 })}
            className="relative mx-auto w-full max-w-2xl"
          >
            <ProductConsole />
          </motion.div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-graphite-900/90">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 py-4 sm:grid-cols-3 sm:px-6 lg:grid-cols-5 lg:px-8">
          {featureStrip.map(({ icon: Icon, label }) => (
            <motion.div
              key={label}
              {...reveal({ y: 12 })}
              className="flex items-center gap-3 border border-white/10 bg-white/[0.035] px-4 py-4"
            >
              <Icon className="h-5 w-5 text-cyan-200" />
              <span className="text-sm font-semibold text-slate-100">
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="preview" className="bg-graphite-950 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Product preview"
            title="A desktop payroll interface that feels operational, not ornamental."
            text="Mocked screens show the intended experience when real screenshots are not yet connected: dashboard clarity, payroll tables, employee records, and export controls."
            reveal={reveal}
          />
          <motion.div
            {...reveal({ delay: 0.08, y: 34 })}
            className="mt-12 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]"
          >
            <DashboardMockup />
            <div className="grid gap-5">
              <PayrollMockup />
              <EmployeeMockup />
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="features"
        className="border-y border-white/10 bg-graphite-900 py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Detailed features"
            title="Everything a Moroccan payroll workflow needs to move cleanly."
            text="From contracts and monthly status tracking to exports and activation, the app keeps payroll work structured inside one Windows desktop environment."
            reveal={reveal}
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featureCards.map(({ icon: Icon, title, text }, index) => (
              <motion.article
                key={title}
                {...reveal({ delay: index * 0.035, y: 24 })}
                className="group rounded-lg border border-white/10 bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/[0.055]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-cyan-300/25 bg-cyan-300/10 text-cyan-100">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-black text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="morocco" className="relative bg-graphite-950 py-24">
        <div className="absolute inset-0 bg-[linear-gradient(125deg,rgba(239,68,68,0.09),transparent_28%,rgba(52,211,153,0.08)_62%,transparent)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <motion.div {...reveal({ y: 26 })}>
            <div className="inline-flex items-center gap-2 rounded-full border border-red-400/25 bg-red-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-red-200">
              <Globe2 className="h-3.5 w-3.5" />
              Built for Morocco
            </div>
            <h2 className="mt-5 font-display text-4xl font-black leading-tight text-white sm:text-5xl">
              Moroccan payroll logic, chantier reality, desktop reliability.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              CDL-Maroc Paie is shaped for local payroll operations: Moroccan
              deductions and declarations, project-based teams, and the French
              and Arabic-friendly administrative context many companies live in.
            </p>
          </motion.div>

          <motion.div
            {...reveal({ delay: 0.08, y: 30 })}
            className="grid gap-4 sm:grid-cols-2"
          >
            {moroccoItems.map((item) => (
              <div
                key={item}
                className="flex gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-5"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-emerald-300" />
                <span className="text-sm leading-7 text-slate-200">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section
        id="team"
        className="border-y border-white/10 bg-graphite-900 py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:px-8">
          <motion.div {...reveal({ y: 26 })}>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/25 bg-emerald-300/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">
              <UserRound className="h-3.5 w-3.5" />
              Team
            </div>
            <h2 className="mt-5 font-display text-4xl font-black leading-tight text-white sm:text-5xl">
              Built and maintained by Houssam Lemrini.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              CDL-Maroc Paie is operated by one accountable maker handling the
              product, engineering, payroll logic, design, release process, and
              user support end to end.
            </p>
            <a
              href={`mailto:${release.contactEmail}`}
              className="mt-8 inline-flex items-center gap-3 rounded-lg border border-cyan-300/30 bg-cyan-300/10 px-5 py-3 text-sm font-bold text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/20"
            >
              <Mail className="h-5 w-5" />
              {release.contactEmail}
            </a>
          </motion.div>

          <motion.div
            {...reveal({ delay: 0.08, y: 30 })}
            className="rounded-xl border border-white/10 bg-white/[0.04] p-5 shadow-glow"
          >
            <div className="flex flex-col gap-5 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="grid h-16 w-16 place-items-center overflow-hidden rounded-xl border border-white/15 bg-white">
                  <img
                    src={release.logoUrl}
                    alt="CDL-Maroc"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-2xl font-black text-white">
                    {release.founder.name}
                  </div>
                  <div className="mt-1 max-w-xl text-sm leading-6 text-slate-400">
                    {release.founder.title}
                  </div>
                </div>
              </div>
              <div className="rounded-lg border border-red-400/25 bg-red-400/10 px-4 py-3 text-sm font-black text-red-100">
                Solo founder
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {teamRoles.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-lg border border-white/10 bg-black/20 p-4"
                >
                  <Icon className="h-5 w-5 flex-none text-emerald-300" />
                  <span className="text-sm font-semibold leading-6 text-slate-200">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="download"
        className="border-y border-white/10 bg-[linear-gradient(135deg,#0a0d10,#101419_52%,#050608)] py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.82fr] lg:px-8">
          <motion.div {...reveal({ y: 26 })}>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
              <HardDriveDownload className="h-3.5 w-3.5" />
              Windows installer
            </div>
            <h2 className="mt-5 font-display text-4xl font-black leading-tight text-white sm:text-5xl">
              Download CDL-Maroc Paie for Windows.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              The installer is delivered through GitHub Releases, keeping this
              website fast, static, and ready for Cloudflare Pages.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={release.downloadUrl}
                className="inline-flex items-center justify-center gap-3 rounded-lg bg-emerald-300 px-5 py-3 text-sm font-black text-graphite-950 shadow-emerald transition hover:bg-white"
              >
                <Download className="h-5 w-5" />
                Download installer
              </a>
              <a
                href={release.githubUrl}
                className="inline-flex items-center justify-center gap-3 rounded-lg border border-white/14 bg-white/[0.04] px-5 py-3 text-sm font-bold text-white transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
              >
                <Github className="h-5 w-5" />
                GitHub release
              </a>
            </div>
          </motion.div>

          <motion.aside
            {...reveal({ delay: 0.08, y: 30 })}
            className="rounded-lg border border-white/10 bg-white/[0.045] p-6 shadow-glow"
          >
            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div className="flex items-center gap-4">
                <div className="grid h-14 w-14 place-items-center overflow-hidden rounded-lg border border-white/15 bg-white">
                  <img
                    src={release.logoUrl}
                    alt="CDL-Maroc"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                <div className="text-sm font-semibold text-slate-400">
                  Current version
                </div>
                <div className="mt-1 text-2xl font-black text-white">
                  {release.version}
                </div>
                </div>
              </div>
              <ShieldCheck className="h-10 w-10 text-emerald-300" />
            </div>

            <dl className="mt-5 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-lg bg-black/20 p-4">
                <dt className="text-slate-500">File size</dt>
                <dd className="mt-1 font-bold text-white">{release.fileSize}</dd>
              </div>
              <div className="rounded-lg bg-black/20 p-4">
                <dt className="text-slate-500">Release date</dt>
                <dd className="mt-1 font-bold text-white">
                  {release.releaseDate}
                </dd>
              </div>
            </dl>

            <div className="mt-5 rounded-lg border border-white/10 bg-black/20 p-4">
              <div className="mb-3 text-sm font-bold text-white">
                System requirements
              </div>
              <ul className="space-y-2">
                {release.systemRequirements.map((requirement) => (
                  <li
                    key={requirement}
                    className="flex items-center gap-2 text-sm text-slate-300"
                  >
                    <BadgeCheck className="h-4 w-4 text-cyan-200" />
                    {requirement}
                  </li>
                ))}
              </ul>
            </div>
          </motion.aside>
        </div>
      </section>

      <section id="faq" className="bg-graphite-950 py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="FAQ"
            title="A few clear answers before the first install."
            text="The website stays light and static; the product remains a Windows desktop app distributed as a release asset."
            reveal={reveal}
          />
          <div className="mt-10 grid gap-4">
            {faqs.map((faq, index) => (
              <motion.details
                key={faq.question}
                {...reveal({ delay: index * 0.04, y: 18 })}
                className="group rounded-lg border border-white/10 bg-white/[0.035] p-5 open:border-cyan-300/35 open:bg-white/[0.055]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-base font-bold text-white">
                  <span>{faq.question}</span>
                  <HelpCircle className="h-5 w-5 flex-none text-cyan-200 transition group-open:rotate-45" />
                </summary>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {faq.answer}
                </p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-graphite-900 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="grid h-12 w-12 place-items-center overflow-hidden rounded-lg border border-white/15 bg-white">
              <img
                src={release.logoUrl}
                alt="CDL-Maroc"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <div className="text-lg font-black text-white">CDL-Maroc Paie</div>
              <p className="mt-2 text-sm text-slate-400">
                Premium Windows payroll management for Moroccan companies.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-slate-300">
            <a className="hover:text-white" href={`mailto:${release.contactEmail}`}>
              {release.contactEmail}
            </a>
            <a className="hover:text-white" href={release.githubUrl}>
              GitHub release
            </a>
            <a className="hover:text-white" href="#privacy">
              Privacy
            </a>
            <a className="hover:text-white" href="#license">
              License
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  text: string;
  reveal: (options?: RevealOptions) => MotionProps;
};

function SectionHeader({ eyebrow, title, text, reveal }: SectionHeaderProps) {
  return (
    <motion.div {...reveal({ y: 24 })} className="max-w-3xl">
      <div className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">
        {eyebrow}
      </div>
      <h2 className="mt-4 font-display text-3xl font-black leading-tight text-white sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-slate-400">{text}</p>
    </motion.div>
  );
}

function ProductConsole() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-[2rem] bg-cyan-300/10 blur-3xl" />
      <div className="relative overflow-hidden rounded-xl border border-white/15 bg-graphite-850/88 shadow-2xl shadow-cyan-950/30 backdrop-blur">
        <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.035] px-4 py-3">
        <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-amber-300" />
            <span className="h-3 w-3 rounded-full bg-emerald-300" />
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
            <img
              src={release.logoUrl}
              alt=""
              className="h-6 w-6 rounded bg-white object-cover"
            />
            payroll.core / may-2026
          </div>
        </div>

        <div className="grid gap-0 lg:grid-cols-[14rem_1fr]">
          <aside className="hidden border-r border-white/10 bg-black/20 p-4 lg:block">
            {["Dashboard", "Employees", "Payroll", "Chantiers", "Exports"].map(
              (item, index) => (
                <div
                  key={item}
                  className={`mb-2 flex items-center gap-3 rounded-lg px-3 py-2 text-sm ${
                    index === 2
                      ? "bg-cyan-300/12 text-cyan-100"
                      : "text-slate-400"
                  }`}
                >
                  <span className="h-2 w-2 rounded-full bg-current" />
                  {item}
                </div>
              ),
            )}
          </aside>

          <div className="p-4 sm:p-6">
            <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-emerald-200">
                  Monthly payroll
                </div>
                <div className="mt-2 text-2xl font-black text-white">
                  May 2026 control
                </div>
              </div>
              <div className="rounded-lg border border-emerald-300/25 bg-emerald-300/10 px-3 py-2 text-sm font-bold text-emerald-100">
                Ready to export
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {[
                ["Employees", "128", "synced"],
                ["Net payroll", "1.42M", "MAD"],
                ["Deductions", "214K", "MAD"],
              ].map(([label, value, meta]) => (
                <div
                  key={label}
                  className="rounded-lg border border-white/10 bg-white/[0.04] p-4"
                >
                  <div className="text-xs text-slate-500">{label}</div>
                  <div className="mt-2 text-2xl font-black text-white">
                    {value}
                  </div>
                  <div className="mt-1 text-xs text-cyan-200">{meta}</div>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-lg border border-white/10 bg-black/20 p-4">
              <div className="mb-4 flex items-center justify-between gap-4">
                <div className="font-bold text-white">Payroll signals</div>
                <BarChart3 className="h-5 w-5 text-cyan-200" />
              </div>
              <div className="flex h-32 items-end gap-2">
                {[42, 68, 51, 88, 73, 95, 64, 80, 58, 91, 76, 99].map(
                  (height, index) => (
                    <span
                      key={index}
                      className="flex-1 rounded-t bg-gradient-to-t from-emerald-400 to-cyan-300"
                      style={{ height: `${height}%` }}
                    />
                  ),
                )}
              </div>
            </div>

            <div className="mt-5 grid gap-3 text-sm">
              {[
                ["CNSS", "4.48%", "validated"],
                ["AMO", "2.26%", "validated"],
                ["IGR", "progressive", "reviewed"],
              ].map(([name, value, status]) => (
                <div
                  key={name}
                  className="grid grid-cols-[1fr_auto_auto] items-center gap-3 rounded-lg border border-white/10 bg-white/[0.035] px-3 py-3"
                >
                  <span className="font-bold text-white">{name}</span>
                  <span className="text-slate-300">{value}</span>
                  <span className="rounded-full bg-emerald-300/10 px-2 py-1 text-xs font-bold text-emerald-200">
                    {status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardMockup() {
  return (
    <article className="rounded-xl border border-white/10 bg-white/[0.035] p-5 shadow-glow">
      <MockupHeader icon={Layers3} title="Dashboard" meta="Company overview" />
      <div className="mt-5 grid gap-4 sm:grid-cols-4">
        {[
          ["Active employees", "128"],
          ["Chantiers", "17"],
          ["Open payroll", "May"],
          ["Exports", "2 files"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-lg bg-black/20 p-4">
            <div className="text-xs text-slate-500">{label}</div>
            <div className="mt-2 text-xl font-black text-white">{value}</div>
          </div>
        ))}
      </div>
      <div className="mt-5 grid gap-5 lg:grid-cols-[0.72fr_0.28fr]">
        <div className="rounded-lg border border-white/10 bg-black/20 p-4">
          <div className="mb-4 flex items-center justify-between text-sm">
            <span className="font-bold text-white">Payroll journal</span>
            <span className="text-cyan-200">MAD</span>
          </div>
          <div className="space-y-3">
            {[
              ["Gross salary", "1,634,800", "88%"],
              ["Deductions", "214,200", "35%"],
              ["Net salary", "1,420,600", "76%"],
            ].map(([label, value, width]) => (
              <div key={label}>
                <div className="mb-2 flex justify-between text-xs">
                  <span className="text-slate-400">{label}</span>
                  <span className="font-bold text-white">{value}</span>
                </div>
                <div className="h-2 rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-emerald-300 to-red-400"
                    style={{ width }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-white/10 bg-black/20 p-4">
          <div className="text-sm font-bold text-white">Status</div>
          <div className="mt-4 space-y-3">
            {["Prepared", "Checked", "Final PDF"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                <span className="text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function PayrollMockup() {
  return (
    <article className="rounded-xl border border-white/10 bg-white/[0.035] p-5">
      <MockupHeader icon={ReceiptText} title="Payroll table" meta="Fast review" />
      <div className="mt-5 overflow-hidden rounded-lg border border-white/10">
        {[
          ["A. Mansouri", "CNSS", "PDF", "Net 11,420"],
          ["S. El Idrissi", "AMO", "Excel", "Net 8,930"],
          ["M. Benali", "IGR", "Ready", "Net 14,200"],
        ].map((row) => (
          <div
            key={row[0]}
            className="grid grid-cols-[1.2fr_0.7fr_0.7fr_1fr] gap-3 border-b border-white/10 bg-black/20 px-3 py-3 text-xs last:border-b-0"
          >
            {row.map((cell, index) => (
              <span
                key={cell}
                className={index === 0 ? "font-bold text-white" : "text-slate-400"}
              >
                {cell}
              </span>
            ))}
          </div>
        ))}
      </div>
    </article>
  );
}

function EmployeeMockup() {
  return (
    <article className="rounded-xl border border-white/10 bg-white/[0.035] p-5">
      <MockupHeader icon={UsersRound} title="Employee profile" meta="Contract data" />
      <div className="mt-5 grid gap-3">
        {[
          ["Contract", "CDI"],
          ["Chantier", "Casa Finance City"],
          ["Family deductions", "2 dependents"],
          ["Seniority", "6 years"],
        ].map(([label, value]) => (
          <div
            key={label}
            className="flex items-center justify-between rounded-lg bg-black/20 px-4 py-3 text-sm"
          >
            <span className="text-slate-500">{label}</span>
            <span className="font-bold text-slate-100">{value}</span>
          </div>
        ))}
      </div>
    </article>
  );
}

type MockupHeaderProps = {
  icon: typeof UsersRound;
  title: string;
  meta: string;
};

function MockupHeader({ icon: Icon, title, meta }: MockupHeaderProps) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-lg border border-cyan-300/25 bg-cyan-300/10 text-cyan-100">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-black text-white">{title}</h3>
          <p className="mt-1 text-xs text-slate-500">{meta}</p>
        </div>
      </div>
      <Settings2 className="h-5 w-5 text-slate-500" />
    </div>
  );
}

export default App;
