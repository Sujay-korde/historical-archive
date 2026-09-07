import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollWordReveal from '../components/ui/motion-scroll-word-reveal';
import FeatureCarousel from '../components/ui/feature-carousel';
import { records, type HistoricalRecord } from '../data/records';
import { useState } from 'react';
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
  ShieldCheck,
  Search,
  Sparkles,
  Lock,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   HERO — Classical Art Masterwork + Condensed Bebas Neue Display
   (Directly inspired by the user's reference image)
   HERO — Minimalist Geist Typography with Split-Second Neural Query
   ═══════════════════════════════════════════════════════════════ */
function Hero() {
  return (
    <section className="relative w-full min-h-[94vh] bg-black flex flex-col justify-between pt-20 pb-12 px-6 lg:px-12 border-b border-zinc-900 overflow-hidden">
      {/* Background Classical Historical Painting with Vignette and Dramatic Chiaroscuro */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=2000"
          alt="Classical Historical Oil Painting"
          className="w-full h-full object-cover object-center opacity-65 scale-105 filter contrast-125 brightness-90"
        />
        {/* Cinematic gradient fade to pure black */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
      </div>
function Hero({ onSelectRecord }: { onSelectRecord: (r: HistoricalRecord) => void }) {
  const sampleQueries = [
    { label: 'Aryabhata planetary motion', query: 'aryabhatiya', recordId: 'aryabhatiya' },
    { label: 'Mughal imperial taxation', query: 'ain-i-akbari', recordId: 'ain-i-akbari' },
    { label: 'Ajanta fresco survey 1920', query: 'ajanta', recordId: 'ajanta-survey' },
    { label: 'Panchatantra fable origin', query: 'panchatantra', recordId: 'panchatantra' },
  ];

      {/* Top Curatorial Meta Strip */}
      <div className="relative z-10 w-full flex items-center justify-between text-zinc-400 font-['Geist_Mono'] text-xs uppercase tracking-widest pt-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-zinc-300">National Archive Federation</span>
        </div>
        <div className="hidden sm:block text-zinc-500">
          SAMSON AND DELILAH · RUBENS ARCHIVE
        </div>
        <div className="text-zinc-400">
          EST. 499 CE — 1901 CE
        </div>
      </div>
  const [activeQuery, setActiveQuery] = useState(sampleQueries[0].query);
  const [searchLatency, setSearchLatency] = useState(14);
  const [isSearching, setIsSearching] = useState(false);

      {/* Center Giant Hero Title directly over artwork (Mirroring Reference Image) */}
      <div className="relative z-10 my-auto text-center py-12">
        <h1 className="font-['Bebas_Neue'] text-[18vw] sm:text-[16vw] md:text-[14vw] lg:text-[13vw] leading-[0.85] tracking-tight text-[#d8be8d] drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)] select-none">
          HISTORY
        </h1>
        <div className="font-['Montserrat'] text-xs sm:text-sm md:text-base uppercase tracking-[0.45em] text-zinc-300 font-medium mt-3 sm:mt-5 drop-shadow-md">
          ARCHIVAL KNOWLEDGE INTELLIGENCE
        </div>
      </div>
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

      {/* Bottom Action Bar */}
      <div className="relative z-10 w-full flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-white/10">
        <p className="font-['Geist'] text-xs sm:text-sm text-zinc-300 max-w-lg font-light leading-relaxed text-center sm:text-left">
          Indexing thousands of ancient Indian manuscripts, colonial surveys, and forgotten folios
          into a grounded, instant neural inquiry system.
        </p>
  const handleQuery = (q: string) => {
    setIsSearching(true);
    setActiveQuery(q);
    setSearchLatency(Math.floor(Math.random() * 12) + 9);
    setTimeout(() => setIsSearching(false), 100);
  };

        <div className="flex items-center gap-4 shrink-0">
          <Link
            to="/app"
            className="px-6 py-3 rounded bg-white text-black font-['Montserrat'] font-semibold text-xs tracking-wider uppercase hover:bg-zinc-200 transition-colors inline-flex items-center gap-2"
          >
            <span>Explore Archive</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <a
            href="#manifesto"
            className="px-6 py-3 rounded border border-white/20 text-white font-['Montserrat'] text-xs tracking-wider uppercase hover:bg-white/10 transition-colors"
          >
            Read Manifesto
          </a>
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
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION 2: MANIFESTO & USER DEMO BROWSER MOCKUP (SPLIT SCREEN)
   - Left Half: Quote in Bebas Neue + Compact Scroll Word Reveal Animation
   - Right Half: Professional user demo mockup in soft-rounded browser frame
   ═══════════════════════════════════════════════════════════════ */
function ManifestoAndMockupSection({ onSelectRecord }: { onSelectRecord: (r: HistoricalRecord) => void }) {
  const aryabhata = records.find((r) => r.id === 'aryabhatiya')!;
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

  return (
    <section id="manifesto" className="py-28 px-6 lg:px-12 bg-black border-b border-zinc-900">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* ── Left Half: Editorial Manifesto with Scroll Word Reveal ── */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="font-['Geist_Mono'] text-[11px] uppercase tracking-[0.3em] text-zinc-500 mb-3">
                01 ARCHIVAL MANIFESTO
              </div>
              {/* Tall Bebas Neue Quote echoing Santayana from the Reference Image */}
              <blockquote className="font-['Bebas_Neue'] text-3xl sm:text-4xl md:text-5xl text-zinc-200 tracking-wide leading-[1.08] mb-6">
                THOSE WHO DON’T KNOW HISTORY ARE DESTINED TO REPEAT IT.
              </blockquote>
              <div className="font-['Geist_Mono'] text-xs text-zinc-500 uppercase tracking-widest">
                — George Santayana
              </div>
            </div>
            <p className="font-['Geist'] text-zinc-400 text-base sm:text-lg max-w-xl leading-relaxed mb-8 font-light">
              Transforming fragile manuscripts, epigraphic surveys, and centuries of administrative
              records into an interconnected semantic intelligence platform. Ask complex historical questions
              and retrieve grounded evidence in milliseconds.
            </p>

            {/* The Compact Scroll Word Reveal Component */}
            <div className="pt-4 pb-2 border-t border-zinc-900">
              <ScrollWordReveal
                compact={true}
                kicker="Neural Retrieval Thesis"
                text="Every forgotten manuscript holds an unclosed conversation with the future. When machine intelligence indexes physical archives, scattered centuries of knowledge suddenly answer each other in a split second."
                headingClassName="font-['Montserrat'] text-base sm:text-lg md:text-xl text-zinc-200 font-normal leading-relaxed"
              />
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

            {/* Editorial Paragraph mimicking reference poster right column */}
            <div className="space-y-4 pt-4 border-t border-zinc-900 text-xs font-['Geist'] text-zinc-400 font-light leading-relaxed">
              <p>
                Heritage Archive is an autonomous knowledge synthesis platform. By federating open
                catalogues from the Internet Archive, Wikimedia, and data.gov.in, we transform fragile
                palm leaves and colonial gazetteers into high-dimensional semantic entities.
              </p>
              <p className="text-[11px] text-zinc-500 font-mono">
                Open access for scholars, researchers, and cultural institutions globally.
              </p>
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

          {/* ── Right Half: Professional User Demo Mockup in Soft-Rounded Browser Grid ── */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl md:rounded-3xl border border-zinc-800 bg-[#0c0c0e] shadow-[0_25px_70px_rgba(0,0,0,0.95)] overflow-hidden">
              {/* Browser Window Chrome Top Header */}
              <div className="px-5 py-3.5 bg-zinc-950 border-b border-zinc-800/80 flex items-center justify-between gap-4">
                {/* Traffic Light Window Controls */}
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          {/* Right: Split-Second Neural Query Terminal */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-2xl bg-zinc-900/90 border border-zinc-800 p-6 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-zinc-800">
                <div className="flex items-center gap-2 text-xs font-['Geist_Mono'] text-zinc-300">
                  <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Instant Vector Retrieval</span>
                </div>

                {/* Simulated URL Bar */}
                <div className="flex-1 max-w-sm mx-auto px-3.5 py-1.5 rounded-lg bg-zinc-900/90 border border-zinc-800 flex items-center justify-center gap-2 text-[11px] font-['Geist_Mono'] text-zinc-400">
                  <Lock className="w-3 h-3 text-zinc-500" />
                  <span className="truncate">heritage-archive.ai/console?query=aryabhatiya</span>
                <div className="font-mono text-[11px] text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-2 py-0.5 rounded">
                  {searchLatency}ms query
                </div>
              </div>

                <div className="text-[10px] font-mono text-zinc-500 hidden sm:block">
                  PREVIEW
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

              {/* Inside Browser Canvas */}
              <div className="p-6 md:p-8 space-y-6">
                {/* Search Bar Display */}
                <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 flex items-center justify-between gap-3 shadow-inner">
                  <div className="flex items-center gap-3 min-w-0">
                    <Search className="w-4 h-4 text-zinc-400 shrink-0" />
                    <span className="font-['Geist'] text-xs sm:text-sm text-white truncate">
                      Aryabhata planetary motion Kusumapura
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
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-950/60 border border-emerald-800/50 text-emerald-400 font-['Geist_Mono'] text-[10px] shrink-0 font-medium">
                    <Sparkles className="w-3 h-3" />
                    <span>14ms</span>
                  </div>
                  <span className="font-['Geist_Mono'] text-xs text-emerald-400 font-medium px-2 py-0.5 rounded bg-emerald-950/40 border border-emerald-900 shrink-0">
                    {Math.round(matchedRecord.confidenceScore * 100)}% Match
                  </span>
                </div>

                {/* Document Preview Card Mockup */}
                <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 overflow-hidden">
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-0">
                    {/* Real Historical Photography Preview */}
                    <div className="sm:col-span-5 relative aspect-[4/3] sm:aspect-auto overflow-hidden bg-zinc-950">
                      <img
                        src="https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800"
                        alt="Aryabhatiya Astronomical Treatises"
                        className="w-full h-full object-cover brightness-95 contrast-105"
                      />
                      <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-['Geist_Mono'] text-white">
                        499 CE
                      </div>
                    </div>
                <p className="font-['Geist'] text-xs text-zinc-400 line-clamp-2 leading-relaxed mb-3">
                  {matchedRecord.description}
                </p>

                    {/* Metadata & AI Grounding Details */}
                    <div className="sm:col-span-7 p-5 flex flex-col justify-between space-y-4">
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <span className="font-['Geist_Mono'] text-[10px] uppercase tracking-wider text-zinc-400">
                            Scientific Knowledge
                          </span>
                          <span className="flex items-center gap-1 text-emerald-400 font-['Geist_Mono'] text-xs font-semibold">
                            <ShieldCheck className="w-3.5 h-3.5" />
                            94.2% AI
                          </span>
                        </div>

                        <h4 className="font-['Montserrat'] font-semibold text-white text-base leading-snug">
                          Aryabhatiya (आर्यभटीय)
                        </h4>
                        <p className="font-['Geist'] text-xs text-zinc-400 mt-1.5 line-clamp-3 leading-relaxed font-light">
                          Mathematical treatise introducing sine tables, geometric approximations of π (3.1416),
                          and heliocentric day-cycles by Aryabhata at Pataliputra.
                        </p>
                      </div>

                      {/* Knowledge Graph Vector Chips */}
                      <div className="pt-3 border-t border-zinc-800/80 space-y-2">
                        <div className="font-['Geist_Mono'] text-[9px] uppercase tracking-widest text-zinc-500">
                          Neural Cross-References
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          <span className="px-2 py-0.5 rounded bg-zinc-800 text-[10px] font-['Geist'] text-zinc-300">
                            Trigonometric Sines
                          </span>
                          <span className="px-2 py-0.5 rounded bg-zinc-800 text-[10px] font-['Geist'] text-zinc-300">
                            Brahmagupta (628 CE)
                          </span>
                          <span className="px-2 py-0.5 rounded bg-zinc-800 text-[10px] font-['Geist'] text-zinc-300">
                            Kusumapura Node
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-1">
                        <span className="text-[10px] font-['Geist_Mono'] text-zinc-500">
                          Internet Archive #499-PAT
                        </span>
                        <button
                          onClick={() => onSelectRecord(aryabhata)}
                          className="text-xs font-['Geist'] font-medium text-white hover:text-zinc-300 inline-flex items-center gap-1"
                        >
                          <span>Inspect Full Folio</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom System Status Bar */}
                <div className="flex items-center justify-between text-[11px] font-['Geist_Mono'] text-zinc-500 pt-2 border-t border-zinc-800/60">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>Cross-Index Latency: 14.1ms</span>
                  </div>
                  <Link to="/app" className="text-zinc-300 hover:text-white inline-flex items-center gap-1">
                    <span>Try In App</span>
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
                  </Link>
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
   SECTION 3: EDITORIAL POSTER TYPOGRAPHY FEATURE
   (Directly mirroring the lower half of the user's reference image:
    "TYPO GRAPHY" masked with classical artwork + Bebas Neue & Montserrat alphabet guides)
   THE ARCHIVAL PROBLEM SECTION — High Contrast Editorial Cards
   ═══════════════════════════════════════════════════════════════ */
function TypographyPosterSection() {
  const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
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
    <section className="py-28 px-6 lg:px-12 bg-black border-b border-zinc-900 relative overflow-hidden">
    <section className="py-28 px-6 lg:px-8 border-b border-zinc-800/80 bg-zinc-950">
      <div className="mx-auto max-w-7xl">
        <div className="relative py-12 flex flex-col items-center justify-center">
          {/* Top Label & Alphabet Track */}
          <div className="w-full max-w-4xl flex items-start justify-between mb-4 px-2">
            <div>
              <div className="font-['Geist_Mono'] text-[10px] text-zinc-500 uppercase tracking-widest">
                01 HEADLINE ARCHITECTURE
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
              <div className="font-['Bebas_Neue'] text-2xl text-white tracking-wider">
                BEBAS NEUE
              </div>
              <div className="font-['Montserrat'] text-[9px] uppercase tracking-[0.3em] text-zinc-400">
                DISPLAY TYPOGRAPHY
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

            {/* Alphabet matrix like reference image */}
            <div className="hidden sm:grid grid-cols-9 gap-x-2.5 gap-y-0.5 font-['Geist_Mono'] text-[9px] text-zinc-400 text-center">
              {alphabet.map((letter) => (
                <span key={letter}>{letter}</span>
              ))}
            </div>
          </div>
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

          {/* Giant Artwork-Masked Letters "TYPO" */}
          <div className="font-['Bebas_Neue'] text-[24vw] sm:text-[20vw] md:text-[18vw] leading-[0.8] tracking-tighter artwork-text-mask-poster select-none text-center">
            TYPO
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

          {/* Giant Artwork-Masked Letters "GRAPHY" */}
          <div className="font-['Bebas_Neue'] text-[24vw] sm:text-[20vw] md:text-[18vw] leading-[0.8] tracking-tighter artwork-text-mask-poster select-none text-center">
            GRAPHY
          </div>

          {/* Bottom Label: Montserrat */}
          <div className="w-full max-w-4xl flex items-end justify-between mt-6 px-2">
            <div className="font-['Geist_Mono'] text-[11px] text-zinc-400 max-w-xs font-light leading-relaxed">
              Classical aesthetics combined with contemporary computational retrieval.
            </div>

            <div className="text-right">
              <div className="font-['Geist_Mono'] text-[10px] text-zinc-500 uppercase tracking-widest">
                02 BODY ARCHITECTURE
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
              <div className="font-['Montserrat'] text-2xl font-bold text-white tracking-tight">
                MONTSERRAT
              </div>
              <div className="font-['Montserrat'] text-[9px] uppercase tracking-[0.3em] text-zinc-400">
                EDITORIAL TYPOGRAPHY
              </div>
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
   SECTION 4: CURATED ARTIFACT EXHIBITION (FEATURE CAROUSEL)
   FEATURED SPOTLIGHT — Aryabhatiya Masterwork Showcase
   ═══════════════════════════════════════════════════════════════ */
function ExhibitionSection({ onSelectRecord }: { onSelectRecord: (r: HistoricalRecord) => void }) {
function SpotlightSection({ onSelectRecord }: { onSelectRecord: (r: HistoricalRecord) => void }) {
  const featured = records.find((r) => r.id === 'aryabhatiya')!;

  return (
    <section className="py-28 px-6 lg:px-12 bg-black border-b border-zinc-900">
    <section className="py-28 px-6 lg:px-8 border-b border-zinc-800/80 bg-zinc-950">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="font-['Geist_Mono'] text-[11px] uppercase tracking-[0.3em] text-zinc-500 mb-2">
              03 ARCHIVAL SELECTION
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
            <h2 className="font-['Bebas_Neue'] text-4xl sm:text-5xl text-white tracking-wide">
              CURATED HISTORICAL FOLIOS
          </div>

          {/* Right Details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="font-['Geist_Mono'] text-xs uppercase tracking-widest text-zinc-400">
              Curatorial Spotlight
            </div>
            <h2 className="font-['Montserrat'] text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              Aryabhatiya: Foundational Indian Mathematical Astronomy
            </h2>
            <p className="font-['Geist'] text-zinc-400 text-sm mt-1 max-w-md font-light">
              Indian scientific manuscripts, cave fresco epigraphy, and nineteenth-century census surveys.
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

          <Link
            to="/app"
            className="inline-flex items-center gap-2 font-['Montserrat'] text-xs uppercase tracking-wider text-white hover:text-zinc-300 font-semibold"
          >
            <span>Open All 6 Records in Demo App</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Feature Carousel Component */}
        <FeatureCarousel
          onSelect={(item) => {
            const r = records.find((rec) => rec.id === item.id);
            if (r) onSelectRecord(r);
          }}
        />
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION 5: THE FIVE-STAGE METADATA PIPELINE
   TRUST STRIP
   ═══════════════════════════════════════════════════════════════ */
function PipelineSection() {
  const stages = [
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
      num: '01',
      title: 'Raw Document Ingest',
      desc: 'Multilingual ingestion of scanned palm-leaf manuscripts and regional gazetteers.',
      phase: 'Phase 1: Prototype',
      status: 'Current',
      desc: 'Interactive demonstration with structured Indian & global heritage records, neural extraction schema, and simulated low-latency queries.',
    },
    {
      num: '02',
      title: 'Metadata Extraction',
      desc: 'Vision-LLMs extract temporal dates, lineage taxonomies, and geographic nodes.',
      phase: 'Phase 2: Pilot Engine',
      status: 'Next',
      desc: 'Live ingestion pipeline with OCR/HTR for Indic scripts (Devanagari, Persian, Tamil), vector embeddings, and real-time archival indexing.',
    },
    {
      num: '03',
      title: 'Knowledge Entity',
      desc: 'Unstructured text fragments transform into typed, verifiable semantic records.',
      phase: 'Phase 3: Global Graph',
      status: 'Future',
      desc: 'Federation across 500+ national libraries, multi-modal audio/visual historical search, and crowdsourced scholarly verification.',
    },
    {
      num: '04',
      title: 'Semantic Link',
      desc: 'Neural vector embeddings identify conceptual connections across centuries.',
    },
    {
      num: '05',
      title: 'Intelligent Discovery',
      desc: 'Sub-20ms semantic search with grounded source provenance for researchers.',
    },
  ];

  return (
    <section className="py-28 px-6 lg:px-12 bg-black border-b border-zinc-900">
    <section className="py-28 px-6 lg:px-8 bg-zinc-950">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-xl mb-16">
          <div className="font-['Geist_Mono'] text-[11px] uppercase tracking-[0.3em] text-zinc-500 mb-2">
            04 INGESTION ARCHITECTURE
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="font-['Geist_Mono'] text-xs text-zinc-400 uppercase tracking-widest mb-3">
            System Evolution
          </div>
          <h2 className="font-['Bebas_Neue'] text-4xl sm:text-5xl text-white tracking-wide">
            A JOURNEY THROUGH METADATA
          <h2 className="font-['Montserrat'] text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Architecture Roadmap
          </h2>
          <p className="font-['Geist'] text-zinc-400 text-sm mt-2 font-light">
            How physical folios transcend time into an actionable, interconnected intelligence graph.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {stages.map((stage) => (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {phases.map((p, idx) => (
            <div
              key={stage.num}
              className="p-6 rounded-xl bg-zinc-950 border border-zinc-800/80 flex flex-col justify-between"
              key={idx}
              className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 space-y-4"
            >
              <div>
                <div className="font-['Bebas_Neue'] text-3xl text-zinc-500 tracking-wider mb-3">
                  {stage.num}
                </div>
                <h3 className="font-['Montserrat'] font-semibold text-sm text-white mb-2 leading-snug">
                  {stage.title}
                </h3>
                <p className="font-['Geist'] text-xs text-zinc-400 leading-relaxed font-light">
                  {stage.desc}
                </p>
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl">
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

        <div className="space-y-3 mb-6">
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
            className="px-5 py-2.5 rounded-lg bg-white text-black font-['Montserrat'] font-semibold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-colors"
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
   PAGE ASSEMBLY
   MAIN LANDING ASSEMBLY
   ═══════════════════════════════════════════════════════════════ */
export default function Landing() {
  const [selectedRecord, setSelectedRecord] = useState<HistoricalRecord | null>(null);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-white selection:text-black">
      <Navbar />

      {/* Hero: Classical Art + Giant Bebas Neue Title */}
      <Hero />
      {/* Hero Section */}
      <Hero onSelectRecord={setSelectedRecord} />

      {/* Split Section: Manifesto with Scroll Word Reveal (Left) & Soft-Rounded Browser Mockup (Right) */}
      <ManifestoAndMockupSection onSelectRecord={setSelectedRecord} />
      {/* Sticky Word Reveal Animation Section Directly Below Hero */}
      <section id="manifesto" className="relative border-b border-zinc-800/80 bg-zinc-950">
        <ScrollWordReveal
          kicker="Archival Manifesto"
          text="Every forgotten manuscript holds an unclosed conversation with the future. When machine intelligence indexes physical archives, scattered centuries of knowledge suddenly answer each other in a split second."
        />
      </section>

      {/* Poster Feature: Artwork Masked Typography ("TYPO / GRAPHY") */}
      <TypographyPosterSection />
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

      {/* Interactive Curated Folios Carousel */}
      <ExhibitionSection onSelectRecord={setSelectedRecord} />
        <FeatureCarousel
          onSelect={(item) => {
            const r = records.find((rec) => rec.id === item.id);
            if (r) setSelectedRecord(r);
          }}
        />
      </section>

      {/* Five-stage Metadata Pipeline */}
      {/* The Problem Section */}
      <ProblemSection />

      {/* The Metadata Pipeline */}
      <PipelineSection />

      {/* Minimal Footer */}
      {/* Curatorial Spotlight */}
      <SpotlightSection onSelectRecord={setSelectedRecord} />

      {/* Trust Strip */}
      <TrustStrip />

      {/* Architecture Roadmap */}
      <RoadmapSection />

      {/* Footer */}
      <Footer />

      {/* Artifact Modal */}
      {/* Record Inspection Modal */}
      <DetailModal record={selectedRecord} onClose={() => setSelectedRecord(null)} />
    </div>
  );
}
