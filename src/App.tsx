import React, { useEffect, useState } from 'react';
import { Mail, Github, Linkedin, User, Briefcase, FileCode,Award, Book, Globe } from 'lucide-react';
import { ThemeToggle } from './components/ThemeToggle';
import { Section } from './components/Section';
import { ProjectCard } from './components/ProjectCard';
import {
  Cloud,
  Server,
  ShieldCheck,
  Terminal,
} from "lucide-react";

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const projects = [
  {
    title: "Static Website Hosting on AWS S3",
    description: "Hosted a fully responsive static website using Amazon S3 with public access management, IAM policies, and CloudFront distribution for performance.",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80&w=1600",
    technologies: ["AWS S3", "IAM", "CloudFront"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Serverless File Backup Workflow",
    description: "Implemented an automated backup solution using AWS Lambda triggered by S3 events, generating logs and notifications.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=1600",
    technologies: ["Lambda", "S3", "CloudWatch"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "EC2 Infrastructure Setup",
    description: "Configured EC2 instances with proper security groups, IAM roles, Apache server setup, and networking using subnets & route tables.",
    image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&q=80&w=1600",
    technologies: ["EC2", "Security Groups", "IAM Roles", "Linux"],
    githubUrl: "#",
    liveUrl: "#"
  }
];

 const stats = [
  {
    icon: Cloud,
    label: "AWS Services Used",
    value: "15+",
  },
  {
    icon: Server,
    label: "Cloud Projects Completed",
    value: "10+",
  },
  {
    icon: ShieldCheck,
    label: "Secure Configurations",
    value: "50+",
  },
  {
    icon: Terminal,
    label: "Scripts & Automations",
    value: "20+",
  },
];

  

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
      <ThemeToggle isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/5 dark:via-purple-500/5 dark:to-pink-500/5">
        <div className="text-center">
          <div className="mb-6 inline-block p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white transform hover:scale-110 transition-transform duration-300">
            <Cloud className="w-8 h-8" />

          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 
dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
  Cloud Support Engineer
</h1>

<p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
  AWS Cloud Practitioner with hands-on experience in EC2, S3, IAM, VPC, Lambda, 
  CloudWatch, and serverless automation. I help build, troubleshoot, and optimize 
  secure cloud environments.
</p>
          <div className="flex justify-center gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center gap-2 transform hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-6 py-3 bg-white dark:bg-slate-800 text-gray-800 dark:text-white rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-all duration-300 flex items-center gap-2 transform hover:scale-105 shadow-lg"
            >
              <Briefcase className="w-5 h-5" />
              View Projects
            </a>
             {/* Download Resume Button */}
  <a
    href="/resume.pdf"
    download
     className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white 
             rounded-lg hover:from-blue-600 hover:to-purple-600 
             transition-all duration-300 flex items-center gap-2 
             transform hover:scale-105 shadow-lg"
  >
    <FileCode className="w-5 h-5" />
    Download Resume
  </a>
          </div>
          
          <div className="mt-12 flex justify-center gap-6">
            <a href="https://github.com/ajaysaran247"
            target="_blank"
            rel="noopener noreferrer" 
            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors transform hover:scale-110">
               
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/saran-pannerselvam"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors transform hover:scale-110">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Section id="stats" title="">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ icon: Icon, label, value }) => (
              <div key={label} className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center shadow-lg transform hover:-translate-y-2 transition-all duration-300">
                <Icon className="w-8 h-8 mx-auto mb-4 text-blue-500" />
                <p className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">{value}</p>
                <p className="text-gray-600 dark:text-gray-300">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* About Section */}
      <Section id="about" title="About Me">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-start items-center gap-12">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                Who am I?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
  I’m a Cloud Support Engineer with a strong foundation in AWS services, Linux fundamentals, 
  networking concepts, and troubleshooting. I enjoy solving cloud-related issues, automating 
  workflows, and helping organizations maintain reliable and secure infrastructure.
  I am certified as an AWS Cloud Practitioner and have hands-on experience working with EC2, 
  S3, IAM, Lambda, VPC, and monitoring tools like CloudWatch.
</p>

<div className="grid grid-cols-2 gap-4">
  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
    <User className="w-5 h-5 text-blue-500" />
    <span>Cloud Support & AWS Services</span>
  </div>
  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
    <FileCode className="w-5 h-5 text-purple-500" />
    <span>Automation & Scripting (Python, Bash)</span>
  </div>
</div>

            </div>
            <div className="flex-1">
              <div className="grid grid-cols-2 gap-4">
                {[
  'AWS EC2', 'S3', 'IAM', 'VPC', 'CloudWatch', 'CloudTrail',
  'Lambda', 'API Gateway', 'RDS', 'DynamoDB',
  'Python', 'Bash', 'Linux', 'Git/GitHub', 'SQL'
].map((skill) => (
                  <div
                    key={skill}
                    className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md text-center transform hover:-translate-y-1 transition-transform hover:shadow-lg"
                  >
                    <p className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="certifications" title="Certifications">
  <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg">
      <h3 className="font-semibold text-lg mb-2">AWS Certified Cloud Practitioner</h3>
      <p className="text-gray-600 dark:text-gray-300">Valid: 2025 - 2028</p>
    </div>
    <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg">
      <h3 className="font-semibold text-lg mb-2">AWS re/Start Graduate</h3>
      <p className="text-gray-600 dark:text-gray-300">Cloud Foundations & Linux Fundamentals</p>
    </div>
  </div>
</Section>


      {/* Services Section */}
      <Section id="services" title="What I Do">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
  {
    icon: Globe,
    title: "Cloud Infrastructure Support",
    description: "Deploying, configuring, and troubleshooting AWS cloud resources including EC2, S3, IAM, VPC, and RDS."
  },
  {
    icon: Book,
    title: "Monitoring & Troubleshooting",
    description: "Using CloudWatch, CloudTrail, and AWS CLI to diagnose issues, improve performance, and ensure system reliability."
  },
  {
    icon: Award,
    title: "Serverless Automations",
    description: "Building automation workflows with AWS Lambda, S3 event triggers, and scheduled tasks."
  }
].map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg transform hover:-translate-y-2 transition-all duration-300">
                <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">{title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="My Projects">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </Section>

      

      {/* Contact Section */}
       <section
  id="contact"
  className="w-full px-6 py-20 flex flex-col items-center text-center bg-white"
>
  <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-500 text-transparent bg-clip-text">
    Get in Touch
  </h2>

  <p className="text-gray-600 max-w-xl leading-relaxed">
    Feel free to reach out for collaboration, cloud support inquiries, or any technical assistance.  
    I am always open to new opportunities and meaningful conversations.
  </p>

  <div className="flex flex-wrap gap-4 mt-8 justify-center">
  {/* Gmail Button */}
  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=saranajay54658@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-3 rounded-xl text-white font-medium shadow-md 
              transition-all duration-300 hover:scale-105"
    style={{
      background: "linear-gradient(90deg, #4e54c8, #8f94fb)",
    }}
  >
    Email Me
  </a>

  {/* GitHub Button */}
  <a
    href="https://github.com/ajaysaran247"
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-3 rounded-xl text-white font-medium shadow-md 
              transition-all duration-300 hover:scale-105"
    style={{
      background: "linear-gradient(90deg, #4e54c8, #8f94fb)",
    }}
  >
    GitHub
  </a>

  {/* LinkedIn Button */}
  <a
    href="https://www.linkedin.com/in/saran-pannerselvam"
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-3 rounded-xl text-white font-medium shadow-md 
              transition-all duration-300 hover:scale-105"
    style={{
      background: "linear-gradient(90deg, #4e54c8, #8f94fb)",
    }}
  >
    LinkedIn
  </a>
</div>

</section>

    </div>
  );
}

export default App;