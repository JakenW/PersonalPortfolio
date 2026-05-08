import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Palette, Database, Globe } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

//import my images to be used on the site
import aboutMeImage from './components/images/JKN.jpg';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const projects = [
    {
      title: 'Automated Colony Counting Using Deep Learning',
      description: 'Research project aimed to train deep learning models to detect bacterial colonies. Research Paper: https://doi.ieeecomputersociety.org/10.1109/BigMM55396.2022.00028',
      tech: ['Python', 'YOLOv5'],
      image: '/images/JKNColonyCounting.jpg',
    },
    {
      title: 'Computer Science Education Game',
      description: 'Collaborative project to help students study Computer Science topics by exploring an open-world environment with visual novel like interactions.',
      tech: ['Flask', 'Python', 'SQL', 'JavaScript', 'CSS', 'HTML'],
      image: '/images/EducationGame.jpg',
    },
    {
      title: 'Photo Collection Web Application',
      description: 'Web based photo management application with API connections to download new images from the internet',
      tech: ['Flask', 'Python', 'SQL', 'JavaScript', 'CSS', 'HTML'],
      image: '/images/PhotoApp.jpg',
    },
  ];

  const skills = [
    {
      category: 'Languages',
      icon: <Code2 className="w-8 h-8" />,
      items: ['Python', 'C#', 'Java', 'JavaScript', 'C++'],
    },
    {
      category: 'Database Tech',
      icon: <Database className="w-8 h-8" />,
      items: ['SQL Server', 'MySQL', 'MongoDB'],
    },
    {
      category: 'Design',
      icon: <Palette className="w-8 h-8" />,
      items: ['HTML', 'CSS', 'Figma', 'Adobe XD', 'UI/UX'],
    },
    {
      category: 'DevOps',
      icon: <Globe className="w-8 h-8" />,
      items: ['Git', 'AWS', 'Vercel', 'Docker', 'CI/CD'],
    },
  ];

  const workExperience = [
    {
      title: 'Developer',
      company: 'DataLab USA',
      period: '2026 - Present',
      description: 'Mid-level Developer working on development for enterprise proecesses. Help improve efficiency of existing code and confirgure automation for new processes.',
    },
    {
      title: 'Production Programmer',
      company: 'DataLab USA',
      period: 'April 2025 - December 2025',
      description: 'Entry-level developer configuring ETL processes for incoming data. Processed and troubleshooted existing scripts to verify data accuracy.',
    },
    {
      title: 'Application Developer',
      company: 'Maritz',
      period: '2023 - 2024',
      description: 'Designed, developed, and implemented scalable web applications in Angular, C#, and SQL. Test and perform root cause analysis issues and debug accordingly.',
    },
  ];

  const education = [
    {
      degree: 'Master of Science in Computer Science',
      institution: 'Hood College',
      period: '2024 - 2026',
      description: 'Concerntation in AI and Data Science. Also completed the Cybersecurity Certificate.',
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Hood College',
      period: '2019 - 2023',
      description: 'Graduated Summa Cum Laude and was on the Dean\'s list all semesters.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">

      {/* Right Sidebar Navigation */}
      <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <ul className="flex flex-col gap-6">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className="group flex items-center gap-3 justify-end"
              >
                <span
                  className={`text-sm transition-all duration-300 text-right min-w-[90px] ${
                    activeSection === item.id
                      ? 'text-white opacity-100'
                      : 'text-gray-500 opacity-0 group-hover:opacity-100'
                  }`}
                >
                  {item.label}
                </span>
                <div
                  className={`w-12 h-0.5 transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-purple-500 w-16'
                      : 'bg-gray-600 group-hover:bg-gray-400 group-hover:w-14'
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      <main className="relative">
        {/* Home Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center px-6 lg:px-20 overflow-hidden">
          {/* Home Background Image */}
          <div className="absolute inset-0 z-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1777861845854-4f35ab170680?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
              alt="Developer workspace"
              className="w-full h-full object-cover brightness-125 contrast-110"
              style={{ filter: 'brightness(1.25) contrast(1.1) saturate(0.9)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/50 to-black/70" />
          </div>
          <div className="max-w-6xl w-full relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl lg:text-8xl mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-500 bg-clip-text text-transparent">
                Jaken Whipp
              </h1>
              <h2 className="text-3xl lg:text-4xl mb-6 text-gray-300">
                Developer
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mb-8">
                Driven by curiosity, a desire for knowledge, and a love for problem-solving. 
                I enjoy deconstructing complex problems and creating code to solve them
              </p>
              <div className="flex gap-4">
                <a
                  href="#contact"
                  className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
                >
                  Get In Touch
                </a>
                <a
                  href="#projects"
                  className="px-8 py-3 border border-gray-600 hover:border-gray-400 rounded-lg transition-colors"
                >
                  View Work
                </a>
              </div>
              <div className="flex gap-6 mt-12">
                <a href="https://github.com/JakenW" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/jaken-whipp-ba1143278/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:jaw32@hood.edu" className="text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Shared Background for All Sections After Home */}
        <div className="relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10 pointer-events-none" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40 pointer-events-none" />

          {/* About Section */}
          <section id="about" className="relative min-h-screen flex items-center justify-center px-6 lg:px-20 py-20">
            <div className="max-w-6xl w-full relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl lg:text-6xl mb-12">About Me</h2>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-lg text-gray-300 mb-6">
                    I'm a passionate developer with a few years of experience, with the majority
                    of my experience involving configuring automated ETL pipelines for data.
                    My journey in tech started with a curiosity for how things work, this has 
                    stayed true even today where I come across things I have not seen before at work
                    and try to learn more about them or ask people what its doing to further my understanding. 
                    This innate curiosity has evolved into a career creating solutions that make a difference.
                  </p>
                  <p className="text-lg text-gray-300 mb-6">
                    I specialize in SQL and Python based ecosystems, but have experience working
                    with other languages as well. I believe in writing clean, documented, and maintainable code 
                    as well as staying up-to-date with the latest technology news.
                  </p>
                  <p className="text-lg text-gray-300">
                    When I'm not coding, you'll find me either actively looking to learn new topics or concepts or exploring new technologies.
                  </p>
                </div>
                <div className="relative">
                  <div className="aspect-square rounded-2xl overflow-hidden border border-gray-800">
                    <ImageWithFallback
                      src={aboutMeImage}
                      alt="Developer workspace"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-600/20 rounded-2xl blur-3xl" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

          {/* Skills Section */}
          <section id="skills" className="relative min-h-screen flex items-center justify-center px-6 lg:px-20 py-20">
            <div className="max-w-6xl w-full relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl lg:text-6xl mb-12">Experience</h2>

              {/* Work Experience and Education Side by Side */}
              <div className="grid lg:grid-cols-2 gap-8 mb-20">
                {/* Work Experience */}
                <div>
                  <h3 className="text-3xl lg:text-4xl mb-8">Work Experience</h3>
                  <div className="space-y-6">
                    {workExperience.map((work, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="relative bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
                      >
                        <div className="flex flex-col mb-4">
                          <div>
                            <h4 className="text-xl mb-1">{work.title}</h4>
                            <p className="text-purple-400">{work.company}</p>
                          </div>
                          <span className="text-gray-500 mt-2 flex items-center gap-2">
                            <span className="w-2 h-2 bg-purple-500 rounded-full" />
                            {work.period}
                          </span>
                        </div>
                        <p className="text-gray-400">{work.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h3 className="text-3xl lg:text-4xl mb-8">Education</h3>
                  <div className="space-y-6">
                    {education.map((edu, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="relative bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
                      >
                        <div className="flex flex-col mb-4">
                          <div>
                            <h4 className="text-xl mb-1">{edu.degree}</h4>
                            <p className="text-purple-400">{edu.institution}</p>
                          </div>
                          <span className="text-gray-500 mt-2 flex items-center gap-2">
                            <span className="w-2 h-2 bg-purple-500 rounded-full" />
                            {edu.period}
                          </span>
                        </div>
                        <p className="text-gray-400">{edu.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Technical Skills */}
              <div>
                <h3 className="text-3xl lg:text-4xl mb-8">Skills</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
                    >
                      <div className="text-purple-500 mb-4">{skill.icon}</div>
                      <h4 className="text-xl mb-4">{skill.category}</h4>
                      <ul className="space-y-2">
                        {skill.items.map((item, i) => (
                          <li key={i} className="text-gray-400 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

          {/* Projects Section */}
          <section id="projects" className="relative min-h-screen flex items-center justify-center px-6 lg:px-20 py-20">
            <div className="max-w-6xl w-full relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl lg:text-6xl mb-12">Projects</h2>
              <div className="grid lg:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300"
                  >
                    <div className="aspect-video overflow-hidden">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl mb-3 flex items-center gap-2">
                        {project.title}
                        {/* <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" /> */}
                      </h3>
                      <p className="text-gray-400 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-sm text-purple-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

          {/* Contact Section */}
          <section id="contact" className="relative min-h-screen flex items-center justify-center px-6 lg:px-20 py-20">
            <div className="max-w-6xl w-full relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-5xl lg:text-6xl mb-8">Let's Work Together</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
                I'm always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                <a
                  href="mailto:jaw32@hood.edu"
                  className="flex items-center gap-3 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  jaw32@hood.edu
                </a>
                <a
                  href="https://www.linkedin.com/in/jaken-whipp-ba1143278/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 border border-gray-600 hover:border-gray-400 rounded-lg transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn Profile
                </a>
              </div>
              <div className="flex gap-6 justify-center">
                <a href="https://github.com/JakenW" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="w-7 h-7" />
                </a>
                <a href="https://www.linkedin.com/in/jaken-whipp-ba1143278/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-7 h-7" />
                </a>
                <a href="mailto:jaw32@hood.edu" className="text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-7 h-7" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative py-8 px-6 border-t border-gray-800 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          <p>&copy; 2026 Jaken Whipp. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
