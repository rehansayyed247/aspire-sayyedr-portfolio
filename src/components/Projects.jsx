const projects = [
  { title:"BAAMR Platform", repo:"https://github.com/rehansayyed247/baamr", desc:"Containerized R-based analytical platform deployed via CI/CD pipelines on AWS using Terraform and GitHub Actions." },
  { title:"SBAT Automation Tool", repo:"https://github.com/rehansayyed247/sbat", desc:"Automated study build process using Node.js, AWS Lambda, and S3 integration with secure secret management." },
  { title:"GIMAS Cloud Migration", repo:"https://github.com/rehansayyed247/gimas", desc:"Led migration from on-prem to AWS with automated deployments, load balancing, and disaster recovery testing." }
];

export default function Projects() {
  return (
    <section className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border border-slate-200 dark:border-slate-700">
      <h2 className="text-2xl font-semibold mb-6">📁 Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div key={p.title} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <a href={p.repo} target="_blank" rel="noreferrer" className="text-sm text-sky-600 hover:underline">Repo</a>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
