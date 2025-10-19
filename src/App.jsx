import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-slate-100 transition-all duration-500 overflow-x-hidden">
      
      {/* Blobs background */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-10 right-1/3 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <main className="max-w-5xl mx-auto p-8 space-y-12">
        <Header />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer className="text-center py-6 text-sm text-slate-500">
        © {new Date().getFullYear()} Rehan Sayyed — DevOps Engineer
      </footer>

      <style>{`
        @keyframes blob {
          0%,100% { transform: translate(0px,0px) scale(1); }
          33% { transform: translate(30px,-50px) scale(1.1); }
          66% { transform: translate(-20px,20px) scale(0.9); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </div>
  );
}
