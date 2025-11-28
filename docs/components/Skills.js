function Skills() {
  try {
    const [isVisible, setIsVisible] = React.useState(false);
    
    const technicalSkills = [
      { name: 'Java', level: 90 },
      { name: 'C#', level: 75 },
      { name: 'APIs REST', level: 85 },
      { name: 'SQL', level: 85 },
      { name: 'MongoDB', level: 70 },
      { name: 'Python', level: 70 },
      { name: 'JavaScript', level: 80 },
      { name: 'React', level: 80 },
    ];
    
    const tools = [
      'Git & GitHub', 'VS Code', 'Azure Cloud', 
      'Postman', 'Docker', 'AWS', 'IntelliJ IDEA',
      'PyCharm'
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
