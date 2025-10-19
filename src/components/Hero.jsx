import React from "react";
import { motion } from "framer-motion";

export default function Hero(){
  return (
    <section id="about" className="pt-20 md:pt-28">
      <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.6}}>
        <h1 className="text-4xl md:text-5xl font-extrabold text-sky-600">Hi, I’m Rehan Sayyed</h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
          Senior DevOps Engineer — building scalable CI/CD & infrastructure using Terraform, AWS, Docker, and GitHub Actions.
        </p>
        <div className="mt-6 flex gap-4">
          <a href="#projects" className="px-4 py-2 rounded-md bg-brand text-white font-medium shadow hover:opacity-95">View Projects</a>
          <a href="/resume.pdf" className="px-4 py-2 rounded-md border border-slate-200 dark:border-slate-700 text-sm">Download Resume</a>
        </div>
      </motion.div>
    </section>
  );
}
