import { Mail, Linkedin, Github } from "lucide-react";
import profilePic from "../assets/profile.jpg"; // Import your profile image

export default function Header() {
  return (
    <header className="text-center space-y-4">
      
      {/* Profile photo */}
      <div className="flex justify-center">
        <img 
          src={profilePic} 
          alt="Rehan Sayyed" 
          className="w-32 h-32 rounded-full border-sky-500 shadow-lg"
        />
      </div>

      <h1 className="text-5xl font-extrabold text-400 dark:text-400 drop-shadow-md">Rehan Sayyed</h1>
      
      <p className="text-lg text-slate-600 dark:text-slate-300 font-medium">
        Helping teams deploy faster & scalable infrastructure using CI/CD 🚀
      </p>
      
      <div className="flex justify-center space-x-6 text-slate-600 dark:text-slate-300 mt-4">
        <a href="mailto:rehansayyed247@gmail.com" className="hover:text-sky-600 transform hover:scale-125 transition duration-300"><Mail /></a>
        <a href="https://www.linkedin.com/in/sayyed-rehan" target="_blank" rel="noreferrer" className="hover:text-sky-600 transform hover:scale-125 transition duration-300"><Linkedin /></a>
        <a href="https://github.com/rehansayyed247" target="_blank" rel="noreferrer" className="hover:text-sky-600 transform hover:scale-125 transition duration-300"><Github /></a>
      </div>
    </header>
  );
}
