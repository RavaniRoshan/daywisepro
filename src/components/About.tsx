import React from 'react';
import { Code, Palette, Server, Smartphone, Award, Calendar } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: Code,
      technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js', 'SASS']
    },
    {
      category: 'Backend',
      icon: Server,
      technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL']
    },
    {
      category: 'Design',
      icon: Palette,
      technologies: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'Sketch', 'Principle']
    },
    {
      category: 'Mobile',
      icon: Smartphone,
      technologies: ['React Native', 'Flutter', 'iOS', 'Android', 'Expo', 'Ionic']
    }
  ];

  const experience = [
    {
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Inc.',
      period: '2022 - Present',
      description: 'Lead development of enterprise web applications serving 100K+ users. Architected microservices infrastructure and mentored junior developers.'
    },
    {
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      period: '2020 - 2022',
      description: 'Built responsive web applications using React and TypeScript. Collaborated with design team to implement pixel-perfect UI components.'
    },
    {
      title: 'UI/UX Designer',
      company: 'Design Studio',
      period: '2018 - 2020',
      description: 'Created user-centered designs for mobile and web applications. Conducted user research and usability testing to improve conversion rates.'
    }
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="text-accent-primary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-accent-primary mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Professional Summary */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-accent-secondary">Professional Summary</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  With over 6 years of experience in full-stack development and UI/UX design, 
                  I specialize in creating scalable web applications that deliver exceptional user experiences. 
                  My journey began with a passion for solving complex problems through elegant code and intuitive design.
                </p>
                <p>
                  I thrive in collaborative environments where I can bridge the gap between design and development, 
                  ensuring that every pixel serves a purpose and every line of code contributes to the overall user experience. 
                  My expertise spans modern JavaScript frameworks, cloud technologies, and design systems.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                  or sharing knowledge through technical writing and mentoring. I believe in continuous learning and 
                  staying ahead of industry trends to deliver cutting-edge solutions.
                </p>
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-accent-secondary">Key Achievements</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Award className="w-6 h-6 text-accent-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Led team of 8 developers</h4>
                    <p className="text-gray-400">Successfully delivered 15+ enterprise projects on time and under budget</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="w-6 h-6 text-accent-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Performance optimization expert</h4>
                    <p className="text-gray-400">Improved application load times by 60% through code optimization and caching strategies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="w-6 h-6 text-accent-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Open source contributor</h4>
                    <p className="text-gray-400">Contributed to 20+ open source projects with 500+ GitHub stars</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills & Experience */}
          <div className="space-y-12">
            {/* Skills Matrix */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-accent-secondary">Skills & Technologies</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <div key={index} className="bg-secondary rounded-xl p-6 hover:bg-interactive transition-colors">
                    <div className="flex items-center space-x-3 mb-4">
                      <skill.icon className="w-6 h-6 text-accent-primary" />
                      <h4 className="font-semibold text-white">{skill.category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-primary rounded-full text-sm text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Timeline */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-accent-secondary">Experience</h3>
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-accent-primary/30">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-accent-primary rounded-full"></div>
                    <div className="bg-secondary rounded-xl p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-bold text-white text-lg">{exp.title}</h4>
                          <p className="text-accent-primary font-medium">{exp.company}</p>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-400">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                      </div>
                      <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;