import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AppDemo() {
  return (
    <div className="min-h-screen bg-void">
      <Navbar />
      <main className="pt-28 pb-20 px-6 lg:px-10 max-w-6xl mx-auto">
        <span className="text-[10px] uppercase tracking-[0.35em] text-gold-dim block mb-4">Interactive Demo</span>
        <h1 className="font-serif text-4xl md:text-6xl text-ivory mb-6 font-light">
          Archive <em className="text-gold not-italic">Search</em>
        </h1>
        <p className="text-silver/50 text-lg leading-relaxed">
          Interactive archive search with filters, semantic search, and detail panels. Coming in Phase C.
        </p>
      </main>
      <Footer />
    </div>
  );
}
