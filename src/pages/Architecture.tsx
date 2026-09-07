import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Architecture() {
  return (
    <div className="min-h-screen bg-void">
      <Navbar />
      <main className="pt-28 pb-20 px-6 lg:px-10 max-w-4xl mx-auto">
        <span className="text-[10px] uppercase tracking-[0.35em] text-gold-dim block mb-4">Documentation</span>
        <h1 className="font-serif text-4xl md:text-6xl text-ivory mb-6 font-light">
          Architecture <em className="text-gold not-italic">&amp;</em> Docs
        </h1>
        <p className="text-silver/50 text-lg leading-relaxed">
          Full architecture documentation, data pipeline details,
          tech stack overview, and developer guide. Coming in Phase B.
        </p>
      </main>
      <Footer />
    </div>
  );
}
