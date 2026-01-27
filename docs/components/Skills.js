function Skills() {
  try {
    const [isVisible, setIsVisible] = React.useState(false);
    
    const technicalSkills = [
      { name: 'Java', level: 87 },
      { name: 'Spring Boot / Spring Framework', level: 85 },
      { name: 'RESTful APIs', level: 84 },
      { name: 'SQL & Relational Databases', level: 83 },
      { name: 'C# / .NET', level: 75 },
      { name: 'JavaScript / TypeScript', level: 74 },
      { name: 'React.js', level: 72 },
      { name: 'MongoDB (NoSQL)', level: 68 },
      { name: 'Python', level: 65 },
    ];
    
    const tools = [
      'Git & GitHub',
      'Postman',
      'Docker (Basic)',
      'AWS (Basic)',
      'Azure',
      'Maven',
      'IntelliJ IDEA',
      'VS Code'
    ];

    React.useEffect(() => {
      const timer = setTimeout(() => setIsVisible(true), 500);
      return () => clearTimeout(timer);
    }, []);

    return (
      <section id="skills" className="section-spacing" data-name="skills" data-file="components/Skills.js">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 lofi-text">Skills & Tools</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="glassmorphism content-box lofi-card">
              <h3 className="text-2xl font-semibold mb-8 text-pink-300">Technical Skills</h3>
              <div className="space-y-6">
                {technicalSkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-pink-300 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="glassmorphism content-box lofi-card">
              <h3 className="text-2xl font-semibold mb-8 text-pink-300">Tools & Platforms</h3>
              <div className="grid grid-cols-1 gap-4">
                {tools.map((tool) => (
                  <div key={tool} className="glassmorphism p-4 rounded-lg text-center">
                    <span className="text-gray-300 font-medium">{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Skills component error:', error);
    reportError(error);
  }
}
