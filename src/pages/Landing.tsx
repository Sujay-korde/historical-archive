import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollWordReveal from '../components/ui/motion-scroll-word-reveal';
import FeatureCarousel from '../components/ui/feature-carousel';
import { records, type HistoricalRecord } from '../data/records';
import { useState, useMemo } from 'react';
import {
  Search,
  ArrowRight,
  Sparkles,
  FileText,
  ScanLine,
  Database,
  Network,
  Zap,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   HERO — Minimalist Geist Typography with Split-Second Neural Query
   ═══════════════════════════════════════════════════════════════ */
function Hero({ onSelectRecord }: { onSelectRecord: (r: HistoricalRecord) => void }) {
  const sampleQueries = [
    { label: 'Aryabhata planetary motion', query: 'aryabhatiya', recordId: 'aryabhatiya' },
    { label: 'Mughal imperial taxation', query: 'ain-i-akbari', recordId: 'ain-i-akbari' },
    { label: 'Ajanta fresco survey 1920', query: 'ajanta', recordId: 'ajanta-survey' },
    { label: 'Panchatantra fable origin', query: 'panchatantra', recordId: 'panchatantra' },
  ];

  const [activeQuery, setActiveQuery] = useState(sampleQueries[0].query);
  const [searchLatency, setSearchLatency] = useState(14);
  const [isSearching, setIsSearching] = useState(false);

  const matchedRecord = useMemo(() => {
    const q = activeQuery.toLowerCase().trim();
    return (
      records.find(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.description.toLowerCase().includes(q) ||
          r.id.toLowerCase().includes(q)
      ) || records[1]
    );
  }, [activeQuery]);

  const handleQuery = (q: string) => {
    setIsSearching(true);
    setActiveQuery(q);
    setSearchLatency(Math.floor(Math.random() * 12) + 9);
    setTimeout(() => setIsSearching(false), 100);
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 px-6 lg:px-8 border-b border-zinc-800/80 arch-grid">
      <div className="mx-auto max-w-7xl w-full">
        {/* Top Minimalist Header Tag */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="font-['Geist_Mono'] text-xs uppercase tracking-[0.2em] text-zinc-400">
            Cognitive Knowledge Intelligence
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Minimalist Geist Headline */}
          <div className="lg:col-span-7">
            <h1 className="font-['Geist'] text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.06] mb-6">
              Heritage, indexed.
              <br />
              <span className="text-zinc-400 font-normal">
                One searchable neural graph.
              </span>
            </h1>

            <p className="font-['Geist'] text-zinc-400 text-base sm:text-lg max-w-xl leading-relaxed mb-8 font-light">
              Transforming fragile manuscripts, epigraphic surveys, and centuries of administrative
              records into an interconnected semantic intelligence platform. Ask complex historical questions
              and retrieve grounded evidence in milliseconds.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Link
                to="/app"
                className="px-6 py-3 rounded-lg bg-white text-zinc-950 font-['Geist'] font-medium text-sm hover:bg-zinc-200 transition-colors inline-flex items-center gap-2"
              >
                <span>Launch Search App</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#manifesto"
                className="px-6 py-3 rounded-lg border border-zinc-800 text-zinc-300 font-['Geist'] text-sm hover:text-white hover:bg-zinc-900 transition-colors"
              >
                Read Manifesto
              </a>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-zinc-800/80 max-w-md">
              <div>
                <div className="font-['Bebas_Neue'] text-3xl text-white tracking-wide">3.4M+</div>
                <div className="font-['Geist_Mono'] text-[11px] text-zinc-400 uppercase tracking-wider">
                  Indexed Folios
                </div>
              </div>
              <div>
                <div className="font-['Bebas_Neue'] text-3xl text-white tracking-wide">14ms</div>
                <div className="font-['Geist_Mono'] text-[11px] text-zinc-400 uppercase tracking-wider">
                  Vector Latency
                </div>
              </div>
              <div>
                <div className="font-['Bebas_Neue'] text-3xl text-white tracking-wide">94%</div>
                <div className="font-['Geist_Mono'] text-[11px] text-zinc-400 uppercase tracking-wider">
                  AI Accuracy
                </div>
              </div>
            </div>
          </div>

          {/* Right: Split-Second Neural Query Terminal */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-2xl bg-zinc-900/90 border border-zinc-800 p-6 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-zinc-800">
                <div className="flex items-center gap-2 text-xs font-['Geist_Mono'] text-zinc-300">
                  <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Instant Vector Retrieval</span>
                </div>
                <div className="font-mono text-[11px] text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-2 py-0.5 rounded">
                  {searchLatency}ms query
                </div>
              </div>

              {/* Input field */}
              <div className="relative mb-4">
                <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-3" />
                <input
                  type="text"
                  value={activeQuery}
                  onChange={(e) => handleQuery(e.target.value)}
                  placeholder="Ask anything about ancient Indian science or history..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-sm font-['Geist'] text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-600"
                />
              </div>

              {/* Suggested query chips */}
              <div className="space-y-1.5 mb-4">
                <div className="font-['Geist_Mono'] text-[10px] text-zinc-400 uppercase tracking-wider">
                  Example Queries
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {sampleQueries.map((sq, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleQuery(sq.query)}
                      className={`px-2.5 py-1 rounded text-xs font-['Geist'] transition-colors ${
                        activeQuery.toLowerCase().includes(sq.query)
                          ? 'bg-zinc-200 text-zinc-950 font-medium'
                          : 'bg-zinc-800/70 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
                      }`}
                    >
                      {sq.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Holographic Result Card */}
              <div
                className={`p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 transition-all duration-200 ${
                  isSearching ? 'opacity-50' : 'opacity-100'
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <span className="font-['Geist_Mono'] text-[10px] uppercase text-zinc-400 tracking-wider">
                      {matchedRecord.classification} • {matchedRecord.date}
                    </span>
                    <h4 className="font-['Montserrat'] font-semibold text-white text-base leading-snug">
                      {matchedRecord.title}
                    </h4>
                  </div>
                  <span className="font-['Geist_Mono'] text-xs text-emerald-400 font-medium px-2 py-0.5 rounded bg-emerald-950/40 border border-emerald-900 shrink-0">
                    {Math.round(matchedRecord.confidenceScore * 100)}% Match
                  </span>
                </div>

                <p className="font-['Geist'] text-xs text-zinc-400 line-clamp-2 leading-relaxed mb-3">
                  {matchedRecord.description}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-zinc-900 text-xs font-['Geist']">
                  <span className="text-zinc-400">
                    Source: <strong className="text-zinc-300">{matchedRecord.source}</strong>
                  </span>
                  <button
                    onClick={() => onSelectRecord(matchedRecord)}
                    className="text-white hover:text-zinc-300 font-medium inline-flex items-center gap-1"
                  >
                    <span>Inspect Record</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   THE ARCHIVAL PROBLEM SECTION — High Contrast Editorial Cards
   ═══════════════════════════════════════════════════════════════ */
function ProblemSection() {
  const problems = [
    {
      num: '01',
      title: 'Disconnected Repositories',
      desc: 'Archives reside in physically isolated institutions worldwide — different formats, languages, and cataloguing styles with zero inter-repository context.',
    },
    {
      num: '02',
      title: 'Inconsistent Metadata Schemas',
      desc: 'Cataloguing standards vary wildly between libraries, archaeological surveys, and government bodies, preventing reliable automated cross-referencing.',
    },
    {
      num: '03',
      title: 'Keyword Search Collapse',
      desc: 'Traditional keyword search fails across historical synonyms, archaic spellings, script transliterations, and cross-lingual concept matches.',
    },
    {
      num: '04',
      title: 'Knowledge Quietly Disappears',
      desc: 'Without semantic relationship discovery, fragile physical manuscripts degrade while the vital scientific and cultural discoveries inside them remain invisible.',
    },
  ];

  return (
    <section className="py-28 px-6 lg:px-8 border-b border-zinc-800/80 bg-zinc-950">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl mb-16">
          <div className="font-['Geist_Mono'] text-xs text-zinc-400 uppercase tracking-widest mb-3">
            The Structural Challenge
          </div>
          <h2 className="font-['Montserrat'] text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            Historical records are dark data.
          </h2>
          <p className="font-['Geist'] text-zinc-400 text-base mt-3 leading-relaxed font-light">
            Billions of pages of historical documents exist in digitised form, but cannot be synthesized by researchers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((p, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="font-['Bebas_Neue'] text-3xl text-zinc-400 tracking-wider mb-4">
                  {p.num}
                </div>
                <h3 className="font-['Montserrat'] font-semibold text-lg text-white mb-2 leading-snug">
                  {p.title}
                </h3>
                <p className="font-['Geist'] text-xs text-zinc-400 leading-relaxed font-light">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PIPELINE — "A Journey Through Metadata"
   ═══════════════════════════════════════════════════════════════ */
function PipelineSection() {
  const stages = [
    {
      step: '01',
      title: 'Raw Document Ingest',
      desc: 'Multilingual ingestion of scanned palm leaves, Arabic/Persian treatises, and colonial gazetteers.',
      icon: FileText,
    },
    {
      step: '02',
      title: 'Metadata Extraction',
      desc: 'Specialized optical models extract names, coordinates, dates, and lineage entities.',
      icon: ScanLine,
    },
    {
      step: '03',
      title: 'Knowledge Entity',
      desc: 'Unstructured folios become structured, typed, verifiable semantic nodes in a graph.',
      icon: Database,
    },
    {
      step: '04',
      title: 'Semantic Linking',
      desc: 'Cross-document neural embeddings connect mathematical discoveries across centuries.',
      icon: Network,
    },
    {
      step: '05',
      title: 'Intelligent Discovery',
      desc: 'Sub-20ms semantic search with grounded citation chains for students and historians.',
      icon: Zap,
    },
  ];

  return (
    <section id="pipeline" className="py-28 px-6 lg:px-8 border-b border-zinc-800/80 bg-zinc-950/60">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="font-['Geist_Mono'] text-xs text-zinc-400 uppercase tracking-widest mb-3">
            Neural Processing Pipeline
          </div>
          <h2 className="font-['Montserrat'] text-3xl sm:text-4xl font-bold tracking-tight text-white">
            A Journey Through Metadata
          </h2>
          <p className="font-['Geist'] text-zinc-400 text-base mt-3 leading-relaxed font-light">
            From fragile physical folios to living, connected intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-['Bebas_Neue'] text-2xl text-zinc-400 tracking-wider">
                      {stage.step}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-zinc-800/80 flex items-center justify-center text-zinc-300">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="font-['Montserrat'] font-semibold text-base text-white mb-2 leading-snug">
                    {stage.title}
                  </h3>
                  <p className="font-['Geist'] text-xs text-zinc-400 leading-relaxed font-light">
                    {stage.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FEATURED SPOTLIGHT — Aryabhatiya Masterwork Showcase
   ═══════════════════════════════════════════════════════════════ */
function SpotlightSection({ onSelectRecord }: { onSelectRecord: (r: HistoricalRecord) => void }) {
  const featured = records.find((r) => r.id === 'aryabhatiya')!;

  return (
    <section className="py-28 px-6 lg:px-8 border-b border-zinc-800/80 bg-zinc-950">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Real Photography */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 aspect-[4/3] shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1200"
              alt="Ancient Astronomical Observation"
              className="w-full h-full object-cover brightness-90 contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
              <div>
                <span className="font-['Geist_Mono'] text-[10px] uppercase tracking-wider text-zinc-400">
                  Historic Pataliputra Astronomical Folio
                </span>
                <div className="font-['Montserrat'] font-semibold text-xl">
                  Aryabhatiya (आर्यभटीय)
                </div>
              </div>
              <span className="px-3 py-1 rounded bg-zinc-900/90 border border-zinc-700 text-xs font-mono text-emerald-400">
                499 CE
              </span>
            </div>
          </div>

          {/* Right Details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="font-['Geist_Mono'] text-xs uppercase tracking-widest text-zinc-400">
              Curatorial Spotlight
            </div>
            <h2 className="font-['Montserrat'] text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              Aryabhatiya: Foundational Indian Mathematical Astronomy
            </h2>
            <p className="font-['Geist'] text-zinc-400 text-base leading-relaxed font-light">
              Composed by Aryabhata at Kusumapura (modern-day Patna) in 499 CE, this seminal verse treatise
              introduced the approximation of pi, the earliest sine tables, quadratic equations, and
              the accurate calculation of the earth's circumference.
            </p>

            {/* AI Vector Insight Box */}
            <div className="p-5 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-2">
              <div className="flex items-center gap-2 font-['Geist_Mono'] text-xs font-semibold text-zinc-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>AI Grounding & Citation Analysis</span>
              </div>
              <p className="font-['Geist'] text-xs text-zinc-400 leading-relaxed font-light">
                {featured.matchReason}
              </p>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <button
                onClick={() => onSelectRecord(featured)}
                className="px-6 py-2.5 rounded-lg bg-white text-zinc-950 font-['Geist'] text-xs font-medium hover:bg-zinc-200 transition-colors"
              >
                Inspect Folio Metadata
              </button>
              <Link
                to="/app"
                className="px-6 py-2.5 rounded-lg border border-zinc-800 text-zinc-300 font-['Geist'] text-xs hover:text-white hover:bg-zinc-900 transition-colors"
              >
                Search In Console →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   TRUST STRIP
   ═══════════════════════════════════════════════════════════════ */
function TrustStrip() {
  return (
    <section className="py-12 border-b border-zinc-800/80 bg-zinc-950 text-center font-['Geist_Mono'] text-xs text-zinc-400 tracking-wider">
      FEDERATED WITH OPEN PUBLIC ARCHIVES •{' '}
      <span className="text-zinc-200 font-medium">INTERNET ARCHIVE</span> •{' '}
      <span className="text-zinc-200 font-medium">WIKIMEDIA COMMONS</span> •{' '}
      <span className="text-zinc-200 font-medium">DATA.GOV.IN</span>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ROADMAP TEASER
   ═══════════════════════════════════════════════════════════════ */
function RoadmapSection() {
  const phases = [
    {
      phase: 'Phase 1: Prototype',
      status: 'Current',
      desc: 'Interactive demonstration with structured Indian & global heritage records, neural extraction schema, and simulated low-latency queries.',
    },
    {
      phase: 'Phase 2: Pilot Engine',
      status: 'Next',
      desc: 'Live ingestion pipeline with OCR/HTR for Indic scripts (Devanagari, Persian, Tamil), vector embeddings, and real-time archival indexing.',
    },
    {
      phase: 'Phase 3: Global Graph',
      status: 'Future',
      desc: 'Federation across 500+ national libraries, multi-modal audio/visual historical search, and crowdsourced scholarly verification.',
    },
  ];

  return (
    <section className="py-28 px-6 lg:px-8 bg-zinc-950">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="font-['Geist_Mono'] text-xs text-zinc-400 uppercase tracking-widest mb-3">
            System Evolution
          </div>
          <h2 className="font-['Montserrat'] text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Architecture Roadmap
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {phases.map((p, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="font-['Montserrat'] font-semibold text-lg text-white">
                  {p.phase}
                </span>
                <span
                  className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                    p.status === 'Current'
                      ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                      : 'bg-zinc-800 text-zinc-400'
                  }`}
                >
                  {p.status}
                </span>
              </div>
              <p className="font-['Geist'] text-xs text-zinc-400 leading-relaxed font-light">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   RECORD DETAIL MODAL
   ═══════════════════════════════════════════════════════════════ */
function DetailModal({
  record,
  onClose,
}: {
  record: HistoricalRecord | null;
  onClose: () => void;
}) {
  if (!record) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl">
      <div className="relative w-full max-w-2xl rounded-2xl bg-zinc-950 border border-zinc-800 p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-zinc-400 hover:text-white font-mono text-xs"
        >
          ✕ Close
        </button>

        <div className="mb-6">
          <span className="font-['Geist_Mono'] text-[11px] uppercase tracking-wider text-emerald-400 px-2.5 py-1 rounded bg-emerald-950/40 border border-emerald-900">
            {record.classification} • {record.documentType}
          </span>
          <h2 className="font-['Montserrat'] text-3xl font-bold text-white mt-3">
            {record.title}
          </h2>
          <div className="font-['Geist_Mono'] text-xs text-zinc-400 mt-1">
            {record.date} • {record.location} • {record.era}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 mb-6 font-['Geist_Mono'] text-xs">
          <div>
            <span className="text-zinc-500 text-[10px] block">AI Confidence</span>
            <span className="text-emerald-400 font-bold">{Math.round(record.confidenceScore * 100)}%</span>
          </div>
          <div>
            <span className="text-zinc-500 text-[10px] block">Repository</span>
            <span className="text-zinc-200">{record.source}</span>
          </div>
          <div>
            <span className="text-zinc-500 text-[10px] block">Format</span>
            <span className="text-zinc-200">{record.documentType}</span>
          </div>
          <div>
            <span className="text-zinc-500 text-[10px] block">Taxonomy</span>
            <span className="text-zinc-200">{record.classification}</span>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <div className="font-['Geist_Mono'] text-xs uppercase tracking-wider text-zinc-400">
            Archival Record Synopsis
          </div>
          <p className="font-['Geist'] text-zinc-300 text-sm leading-relaxed font-light">
            {record.description}
          </p>
        </div>

        <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 mb-8 space-y-1">
          <div className="font-['Geist_Mono'] text-[11px] uppercase tracking-wider text-zinc-300">
            Reasoning Vector
          </div>
          <p className="font-['Geist_Mono'] text-xs text-zinc-400 leading-relaxed">
            {record.matchReason}
          </p>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
          <a
            href={record.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-['Geist_Mono'] text-zinc-400 hover:text-white inline-flex items-center gap-1.5"
          >
            <span>View Source Repository</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <Link
            to="/app"
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-white text-zinc-950 font-['Geist'] text-xs font-medium hover:bg-zinc-200 transition-colors"
          >
            Open in Search Console →
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN LANDING ASSEMBLY
   ═══════════════════════════════════════════════════════════════ */
export default function Landing() {
  const [selectedRecord, setSelectedRecord] = useState<HistoricalRecord | null>(null);

  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-white selection:text-black">
      <Navbar />

      {/* Hero Section */}
      <Hero onSelectRecord={setSelectedRecord} />

      {/* Sticky Word Reveal Animation Section Directly Below Hero */}
      <section id="manifesto" className="relative border-b border-zinc-800/80 bg-zinc-950">
        <ScrollWordReveal
          kicker="Archival Manifesto"
          text="Every forgotten manuscript holds an unclosed conversation with the future. When machine intelligence indexes physical archives, scattered centuries of knowledge suddenly answer each other in a split second."
        />
      </section>

      {/* Interactive Feature Carousel (Real Heritage Photography, Smooth Physics) */}
      <section className="py-24 px-6 lg:px-8 border-b border-zinc-800/80 bg-zinc-950/80">
        <div className="mx-auto max-w-7xl mb-8">
          <div className="font-['Geist_Mono'] text-xs text-zinc-400 uppercase tracking-widest mb-2">
            Interactive Catalog Showcase
          </div>
          <h2 className="font-['Montserrat'] text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Curated Historical Folios
          </h2>
          <p className="font-['Geist'] text-zinc-400 text-sm mt-2 font-light">
            Navigate through Indian manuscripts, astronomical treatises, and archaeological epigraphy.
          </p>
        </div>

        <FeatureCarousel
          onSelect={(item) => {
            const r = records.find((rec) => rec.id === item.id);
            if (r) setSelectedRecord(r);
          }}
        />
      </section>

      {/* The Problem Section */}
      <ProblemSection />

      {/* The Metadata Pipeline */}
      <PipelineSection />

      {/* Curatorial Spotlight */}
      <SpotlightSection onSelectRecord={setSelectedRecord} />

      {/* Trust Strip */}
      <TrustStrip />

      {/* Architecture Roadmap */}
      <RoadmapSection />

      {/* Footer */}
      <Footer />

      {/* Record Inspection Modal */}
      <DetailModal record={selectedRecord} onClose={() => setSelectedRecord(null)} />
    </div>
  );
}
