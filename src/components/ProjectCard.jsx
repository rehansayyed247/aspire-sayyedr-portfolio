import React from "react";

export default function ProjectCard({title,desc,repo}){
  return (
    <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow hover:shadow-lg transition-transform hover:-translate-y-1">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">{desc}</p>
      <a href={repo} target="_blank" rel="noreferrer" className="text-sm text-sky-600 mt-3 inline-block">Repo →</a>
    </div>
  );
}
