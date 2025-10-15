import { Github, Linkedin, Mail, Briefcase, GraduationCap, Award, Moon, Sun, Send } from 'lucide-react';
import { useState, useEffect } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
    }

    setTimeout(() => setIsVisible(true), 100);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);
  const portfolio = {
    name: "Sai Charan, Seri",
    title: "Cloud Support Technician",
    email: "serisai070@gmail.com",
    linkedin: "https://www.linkedin.com/in/sai-seri-6424482a3/",
    github: "https://github.com/CharanSeri",

    summary: "Azure-certified Cloud Support Technician with 1 year of hands-on experience supporting enterprise-scale applications in a high-ticket, SLA-driven environment",

    certifications: [
      { name: "AZ-900 Microsoft Certified: Azure Fundamental", issuer: "Microsoft", year: "2024" },
      { name: "AZ-104 Microsoft Certified: Azure Administrator Associate", issuer: "Microsoft", year: "2025" },
      { name: "DP-100 Microsoft Certified: Azure Data Scientist Associate", issuer: "Microsoft", year: "2025" },
      {name:"Python", issuer: "Kaggle", year: "2023"}
    ],

    experience: [
      {
        title: "Cloud Support Technician",
        company: "Communication expert incorporated",
        period: "2024 - Present",
        description: "Delivered Tier 1 and Tier 2 support for widely used Azure-hosted applications in a high-ticket, SLA-bound environment.Provisioned and managed Azure resources including VMs, storage accounts, VNets, and access policies using Terraform and Azure CLI. Automated routine tasks and deployment pipelines using Bash scripts, improving operational efficiency and reducing manual errors. Monitored system health and performance using Azure Monitor and Log Analytics, proactively identifying and resolving issues. Collaborated with cross-functional teams including developers, security, and product owners to troubleshoot incidents and implement fixes. Documented technical procedures and contributed to knowledge base articles to streamline onboarding and support processes.Maintained compliance with security and governance policies across cloud environments.",
        technologies: ["Terraform", "Bash Scripting", "GIT", "JIRA", "Azure CLI", "RBAC/IAM"]
      }
    ],

    education: [
      {
        degree: "Application development",
        institution: "Algonquin College",
        period: "2021 - 2023",
        achievements: "Graduated with Honors, GPA: 4.0"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 py-12 sm:px-8 lg:px-12">

        {/* Dark Mode Toggle */}
        <div className="fixed top-6 right-6 z-50">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center justify-center w-12 h-12 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 border border-slate-200 dark:border-slate-600"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>

        {/* Header Section */}
        <header className={`bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 sm:p-12 mb-8 border border-slate-200 dark:border-slate-700 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex-1">
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-2 animate-fade-in">
                {portfolio.name}
              </h1>
              <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 font-medium mb-4 animate-fade-in-delay-1">
                {portfolio.title}
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl animate-fade-in-delay-2">
                {portfolio.summary}
              </p>
            </div>

            <div className="flex gap-4 animate-fade-in-delay-3">
              <a
                href={portfolio.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all hover:scale-110 shadow-md hover:shadow-lg"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href={portfolio.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-slate-800 dark:bg-slate-600 text-white rounded-full hover:bg-slate-900 dark:hover:bg-slate-500 transition-all hover:scale-110 shadow-md hover:shadow-lg"
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href={`mailto:${portfolio.email}`}
                className="flex items-center justify-center w-12 h-12 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-all hover:scale-110 shadow-md hover:shadow-lg"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Contact Me Button */}
          <div className="mt-8 animate-fade-in-delay-4">
            <a
              href={`mailto:${portfolio.email}?subject=Let's Connect&body=Hi, I'd like to get in touch with you.`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105"
            >
              <Send className="w-5 h-5" />
              Get In Touch
            </a>
          </div>
        </header>

        {/* Certifications Section */}
        <section className={`bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 sm:p-10 mb-8 border border-slate-200 dark:border-slate-700 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '200ms'}}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center">
              <Award className="w-6 h-6 text-amber-600 dark:text-amber-400" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Certifications</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolio.certifications.map((cert, index) => (
              <div
                key={index}
                className="p-5 bg-gradient-to-br from-slate-50 to-white dark:from-slate-700 dark:to-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-xl hover:shadow-md transition-all hover:-translate-y-1"
              >
                <h3 className="font-semibold text-slate-900 dark:text-white mb-1 leading-snug">
                  {cert.name}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{cert.issuer}</p>
                <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">{cert.year}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className={`bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 sm:p-10 mb-8 border border-slate-200 dark:border-slate-700 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '400ms'}}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Experience</h2>
          </div>

          <div className="space-y-6">
            {portfolio.experience.map((job, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-slate-50 to-white dark:from-slate-700 dark:to-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-xl hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{job.title}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">{job.company}</p>
                  </div>
                  <span className="text-slate-500 dark:text-slate-400 font-medium whitespace-nowrap">{job.period}</span>
                </div>

                <p className="text-slate-600 dark:text-slate-300 mb-3 leading-relaxed">{job.description}</p>

                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-600 text-slate-700 dark:text-slate-200 rounded-full text-sm font-medium border border-slate-200 dark:border-slate-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className={`bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 sm:p-10 border border-slate-200 dark:border-slate-700 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '600ms'}}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Education</h2>
          </div>

          <div className="space-y-4">
            {portfolio.education.map((edu, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-slate-50 to-white dark:from-slate-700 dark:to-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-xl hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{edu.degree}</h3>
                  <span className="text-slate-500 dark:text-slate-400 font-medium whitespace-nowrap">{edu.period}</span>
                </div>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{edu.institution}</p>
                <p className="text-slate-600 dark:text-slate-300">{edu.achievements}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 text-center text-slate-500 dark:text-slate-400">
          <p className="text-sm">© {new Date().getFullYear()} {portfolio.name}. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
