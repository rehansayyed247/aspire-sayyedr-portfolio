import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import logoLight from "/logo-light.svg";
import logoDark from "/logo-dark.svg";

export default function Navbar(){
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed top-4 left-0 right-0 mx-auto max-w-5xl px-4">
      <div className="backdrop-blur bg-white/40 dark:bg-black/40 border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={theme === "dark" ? logoDark : logoLight} alt="Rehan" className="h-9 w-auto"/>
          <span className="font-semibold text-lg">Rehan Sayyed</span>
        </div>

        <div className="flex items-center gap-4">
          <a href="#projects" className="text-sm hover:text-brand">Projects</a>
          <a href="#contact" className="text-sm hover:text-brand">Contact</a>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={16}/> : <Moon size={16}/>}
          </button>
        </div>
      </div>
    </nav>
  );
}
