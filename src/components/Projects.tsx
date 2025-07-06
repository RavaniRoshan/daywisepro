import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { ExternalLink, Github, Filter, Eye, Code, Star } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and real-time inventory tracking.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
      category: 'fullstack',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
      category: 'frontend',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: false
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics using multiple APIs.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'SASS'],
      category: 'frontend',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: true
    },
    {
      id: 4,
      title: 'API Gateway Service',
      description: 'Microservices API gateway with authentication, rate limiting, and monitoring. Built with Node.js and deployed on AWS.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      technologies: ['Node.js', 'Express', 'Redis', 'AWS', 'Docker'],
      category: 'backend',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: false
    },
    {
      id: 5,
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application with biometric authentication, transaction history, and real-time notifications.',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      technologies: ['React Native', 'Redux', 'Node.js', 'PostgreSQL'],
      category: 'mobile',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: true
    },
    {
      id: 6,
      title: 'Design System Library',
      description: 'Comprehensive design system with reusable components, documentation, and automated testing for consistent UI across products.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      technologies: ['React', 'Storybook', 'TypeScript', 'Jest', 'Figma'],
      category: 'design',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
    { id: 'frontend', label: 'Frontend', count: projects.filter(p => p.category === 'frontend').length },
    { id: 'backend', label: 'Backend', count: projects.filter(p => p.category === 'backend').length },
    { id: 'mobile', label: 'Mobile', count: projects.filter(p => p.category === 'mobile').length },
    { id: 'design', label: 'Design', count: projects.filter(p => p.category === 'design').length }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const filterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const filterItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const projectsGridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
        delayChildren: 0.4
      }
    }
  };

  const projectCardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const imageVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const overlayVariants = {
    rest: { opacity: 0 },
    hover: { 
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const buttonVariants = {
    rest: { scale: 1, y: 20 },
    hover: { 
      scale: 1.05, 
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section id="projects" className="py-24 px-6 bg-secondary" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Enhanced Header */}
          <motion.div variants={headerVariants} className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-accent-primary/10 text-accent-primary text-sm font-medium mb-6"
            >
              <Star className="w-4 h-4 mr-2" />
              Featured Work
            </motion.div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              My <span className="text-accent-primary">Projects</span>
            </h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto mb-8"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A showcase of my recent work spanning full-stack development, mobile applications, 
              and design systems. Each project represents a unique challenge and innovative solution.
            </p>
          </motion.div>

          {/* Enhanced Filter Buttons */}
          <motion.div 
            variants={filterVariants}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                variants={filterItemVariants}
                onClick={() => setFilter(category.id)}
                className={`group relative px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-accent-primary text-white shadow-lg'
                    : 'bg-interactive text-gray-300 hover:bg-accent-primary/20 hover:text-white'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>{category.label}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    filter === category.id 
                      ? 'bg-white/20' 
                      : 'bg-accent-primary/20 group-hover:bg-white/20'
                  }`}>
                    {category.count}
                  </span>
                </span>
                {filter !== category.id && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 rounded-full opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Enhanced Projects Grid */}
          <motion.div 
            variants={projectsGridVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={projectCardVariants}
                layout
                className="group relative bg-primary rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                whileHover={{ y: -8 }}
                style={{ willChange: 'transform' }}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    className="absolute top-4 right-4 z-20 bg-gradient-to-r from-accent-primary to-accent-secondary text-white px-3 py-1 rounded-full text-xs font-semibold"
                  >
                    Featured
                  </motion.div>
                )}

                {/* Enhanced Project Image */}
                <div className="relative overflow-hidden h-48">
                  <motion.img
                    variants={imageVariants}
                    initial="rest"
                    whileHover="hover"
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  
                  {/* Enhanced Overlay */}
                  <motion.div
                    variants={overlayVariants}
                    initial="rest"
                    whileHover="hover"
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-center space-x-4"
                  >
                    <motion.a
                      variants={buttonVariants}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-accent-primary transition-all duration-300 group/btn"
                      aria-label="View live project"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Eye className="w-5 h-5 text-white group-hover/btn:scale-110 transition-transform" />
                    </motion.a>
                    <motion.a
                      variants={buttonVariants}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-accent-primary transition-all duration-300 group/btn"
                      aria-label="View source code"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Code className="w-5 h-5 text-white group-hover/btn:scale-110 transition-transform" />
                    </motion.a>
                  </motion.div>
                </div>

                {/* Enhanced Project Content */}
                <div className="p-6">
                  <motion.h3 
                    className="text-xl font-bold text-white mb-3 group-hover:text-accent-primary transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-300 mb-4 leading-relaxed line-clamp-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                  >
                    {project.description}
                  </motion.p>
                  
                  {/* Enhanced Technologies */}
                  <motion.div 
                    className="flex flex-wrap gap-2 mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-3 py-1 bg-secondary rounded-full text-sm text-accent-primary font-medium hover:bg-accent-primary/20 transition-colors cursor-default"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.6 + techIndex * 0.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Enhanced Links */}
                  <motion.div 
                    className="flex space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.7 }}
                  >
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-accent-primary hover:text-accent-secondary transition-colors group/link"
                      whileHover={{ x: 5 }}
                    >
                      <ExternalLink className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                      <span className="font-medium">Live Demo</span>
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-accent-primary hover:text-accent-secondary transition-colors group/link"
                      whileHover={{ x: 5 }}
                    >
                      <Github className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                      <span className="font-medium">Source</span>
                    </motion.a>
                  </motion.div>
                </div>

                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent-primary/5 via-accent-secondary/5 to-accent-tertiary/5 opacity-0 pointer-events-none"
                  animate={{ 
                    opacity: hoveredProject === project.id ? 1 : 0 
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced View More Button */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-accent-primary to-accent-secondary text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
              whileHover={{ 
                scale: 1.05, 
                y: -3,
                boxShadow: "0 20px 25px -5px rgba(99, 102, 241, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
              <span>View All Projects on GitHub</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ExternalLink className="w-5 h-5" />
              </motion.div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;