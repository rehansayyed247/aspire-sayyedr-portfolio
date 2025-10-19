const experience = [
  { role:"Senior DevOps Engineer", company:"Merck & Co.", period:"2021 – Present", bullets:["Designed robust CI/CD pipelines using Terraform and GitHub Actions.","Implemented secure secrets management via AWS Secrets Manager.","Automated DR simulations and infrastructure scaling across environments."] },
  { role:"DevOps Engineer", company:"Infosys Ltd.", period:"2018 – 2021", bullets:["Containerized legacy apps using Docker & Kubernetes.","Streamlined deployments through Jenkins pipelines.","Introduced Infrastructure as Code using Terraform."] }
];

export default function Experience() {
  return (
    <section className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border border-slate-200 dark:border-slate-700">
      <h2 className="text-2xl font-semibold mb-6">🧠 Experience</h2>
      <div className="space-y-6">
        {experience.map((e,i) => (
          <div key={i} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-between items-center mb-2">
              <div>
                <div className="font-medium text-lg">{e.role} — {e.company}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">{e.period}</div>
              </div>
            </div>
            <ul className="list-disc ml-5 text-sm text-slate-600 dark:text-slate-300 mt-2">{e.bullets.map((b,idx)=><li key={idx}>{b}</li>)}</ul>
          </div>
        ))}
      </div>
    </section>
  );
}
