const skills = ["AWS","Docker","Kubernetes","Terraform","Jenkins","GitHub Actions","Ansible","Linux","Python","Bash"];

export default function Skills() {
  return (
    <section className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border border-slate-200 dark:border-slate-700">
      <h2 className="text-2xl font-semibold mb-5">💻 Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((s) => (
          <span key={s} className="px-4 py-1 rounded-full bg-gradient-to-r from-sky-300 to-sky-500 text-white font-medium text-sm hover:scale-110 hover:from-sky-400 hover:to-sky-600 transition-all duration-300 cursor-pointer">{s}</span>
        ))}
      </div>
    </section>
  );
}
