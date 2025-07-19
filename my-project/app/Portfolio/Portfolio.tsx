import React, { useState, useEffect } from 'react';
import {
  Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Download,
  Send, Calendar, Code, Briefcase, User, MessageSquare
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [emailSent, setEmailSent] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleFormSubmit = () => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    const mailtoLink = `mailto:your.email@example.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\n${formData.message}`
    )}`;
    window.open(mailtoLink);
    setEmailSent(true);
    setTimeout(() => setEmailSent(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const experiences = [
    {
      title: 'Full-Stack Developer And UI/UX Designer',
      company: 'Futech',
      period: '2024 - Present',
      description: 'Led development of multiple web applications using React and Node.js. Managed a team of 3 developers and improved application performance by 40%.',
      technologies: ['React', 'Node.js','php', 'AWS', 'MongoDB', 'Bootstrap', 'Firebase','My SQL']
    },
    {
      title: 'Freelancer',
      company: 'Fiverr',
      period: '2023 - Present',
      description: 'Create UI Designs',
      technologies: ['Figma']
    }
  ];


  const skills = [
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'React Router', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactrouter/reactrouter-original.svg' },
    { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    { name: 'Tailwind', logo: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
    { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },]

const projects = [
    {
      title: 'MarineTrack',
      description: 'A marine vessel tracking app for monitoring ships and all marine activities in real-time.',
      technologies: ['React','Boostrap', 'Node.js', 'Firebase'],
      image: 'https://ik.imagekit.io/njjpywgrr/Screenshot%202025-07-19%20at%2017.27.33.jpg?updatedAt=1752926439088',
      link: 'https://github.com/BHdahanayaka2003/MarineTrack-Final-Project'
    },
    {
      title: 'HRIS',
      description: 'A human resource information system for employee data, leave tracking, and payroll management.',
      technologies: ['PHP', 'MySQL', 'Bootstrap','HTML'],
      image: 'https://i.pinimg.com/1200x/40/a4/aa/40a4aa4b9e4273c4bcf4777e6e0dcb98.jpg',
      link: 'https://github.com/AmayaSamarawikcrama/HRIS-Futech'
    },
    {
      title: 'E-Commerce Clothing Store',
      description: 'An online shopping platform for a clothing brand with product filters, cart, and checkout flow.',
      technologies: ['React', 'MongoDB', 'Boostrap', 'Node.js'],
      image: 'https://ik.imagekit.io/njjpywgrr/Screenshot%202025-07-19%20at%2018.21.14.jpg?updatedAt=1752929901347',
      link: 'https://github.com/AmayaSamarawikcrama/E-Commerce'
    }
  ];




  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white overflow-x-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Amaya Anusarani
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 hover:text-purple-400 ${
                    activeSection === item ? 'text-purple-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 to-pink-800/20"></div>
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            >
              <div className="w-2 h-2 bg-purple-400 rounded-full opacity-30"></div>
            </div>
          ))}
        </div>

        <div className={`container mx-auto px-6 text-center z-10 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="mb-8">
            <img
              src="https://ik.imagekit.io/njjpywgrr/06224DD2-261E-4C19-9CA8-B520A4E6923E_1_105_c.jpeg?updatedAt=1752928546670"
              alt="Profile"
              className="w-50 h-60 rounded-full mx-auto mb-6 border-4 border-purple-500 shadow-2xl animate-pulse"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
            Amaya Anusarani
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Full Stack Developer & UI/UX Enthusiast
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/AmayaSamarawikcrama" className="text-gray-400 hover:text-purple-400">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400">
              <Linkedin size={24} />
            </a>
           <a href="https://www.behance.net/samarawamaya" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
    <img src="https://cdn.worldvectorlogo.com/logos/behance-1.svg" alt="Behance" className="w-7 h-7 filter grayscale opacity-70 hover:opacity-100 transition" />
  </a>
          </div>
          <div className="mt-6 flex justify-center">
          <a
          href="https://ik.imagekit.io/njjpywgrr/amaya.pdf?updatedAt=1752852207044"
          download
           className="w-50% px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold flex items-center justify-center gap-2">
  
          <Download size={20} /> Download CV
          </a>
        </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-black/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  I'm a passionate full-stack developer with over 1 year of experience...
                </p>
                <div className="flex items-center gap-4 text-gray-400">
                  <MapPin size={20} />
                  <span>Colombo, Sri Lanka</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2 text-purple-400 flex items-center">
                    <User className="mr-2" size={20} />
                    Personal Info
                  </h3>
                  <p className="text-gray-300">Email: amayasamarawicrama@gmail.com</p>
                  <p className="text-gray-300">Behance: Amaya Samarawicrama</p>
                  <p className="text-gray-300">Phone: +94(76)1062014</p>
                  <p className="text-gray-300">Languages: English, Sinhala</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

       <section id="experience" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-8 relative pl-8 border-l-2 border-purple-500">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full"></div>
                <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 p-6 rounded-lg backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase size={20} className="text-purple-400" />
                    <h3 className="text-xl font-semibold text-purple-400">{exp.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-1">{exp.company}</p>
                  <p className="text-gray-500 mb-3 flex items-center gap-1">
                    <Calendar size={16} />
                    {exp.period}
                  </p>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 bg-black/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center bg-gradient-to-br from-purple-800/40 to-pink-800/40 p-6 rounded-xl shadow-md hover:shadow-purple-500/30 transition-shadow duration-300 hover:scale-105 hover:animate-bounce"
              >
                <img src={skill.logo} alt={skill.name} className="w-12 h-12 mb-4 drop-shadow-md" />
                <div className="text-base font-medium text-white tracking-wide uppercase">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-800/10 to-pink-800/10 rounded-xl p-6 shadow-lg hover:shadow-purple-400/40 transition-transform hover:scale-105">
  <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-md mb-4" />
  <h3 className="text-xl font-semibold mb-2 text-purple-300">{project.title}</h3>
  <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
  <div className="flex flex-wrap gap-2 mb-4">
    {project.technologies.map((tech, i) => (
      <span key={i} className="px-2 py-1 bg-purple-600/20 text-purple-200 text-xs rounded-full">{tech}</span>
    ))}
  </div>
  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white text-sm rounded hover:bg-purple-700 transition">
    <Github size={16} /> View on GitHub
  </a>
</div>
                
              
            ))}
          </div>
        </div>
      </section>


      <section id="contact" className="py-20 bg-black/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-purple-400 flex items-center">
                <MessageSquare className="mr-2" size={24} />
                Let's Connect
              </h3>
              <p className="text-gray-300 mb-8 text-lg">
                I'm always open to discussing new opportunities...
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="text-purple-400" size={20} />
                  <span className="text-gray-300">amayasamarawicrama@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-purple-400" size={20} />
                  <span className="text-gray-300">+94(76)1062014</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="text-purple-400" size={20} />
                  <span className="text-gray-300">Colombo, Sri Lanka</span>
                </div>
              </div>
            </div>

            <div>
              <div className="space-y-6">
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your Name"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400" />
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Your Email"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400" />
                <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} placeholder="Subject"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400" />
                <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Your Message" rows={5}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 resize-none" />
                <button onClick={handleFormSubmit}
                  className="w-full px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold flex items-center justify-center gap-2">
                  <Send size={20} />
                  Send Message
                </button>
                {emailSent && (
                  <div className="mt-4 p-4 bg-green-600/20 border border-green-500/30 rounded-lg text-green-400 text-center">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;