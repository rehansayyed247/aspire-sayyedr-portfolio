import React from "react";

export default function Footer(){
  return (
    <footer className="text-center py-6 text-sm text-slate-500">
      © {new Date().getFullYear()} Rehan Sayyed. Built with ❤️ using React & Tailwind.
      <div className="text-xs text-gray-400 mt-1">Inspired by open-source templates.</div>
    </footer>
  );
}
