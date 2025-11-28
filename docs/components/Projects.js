function Projects() {
  try {
    const projects = [
      { 
        title: 'Poblado Nómina', 
        description: 'Web application for HR payroll management with PL/SQL business logic.', 
        url: 'https://github.com/arisocode/PayrollProyect'
      },
      { 
        title: 'TraderBosque', 
        description: 'Stock trading platform applying software architecture & engineering principles.', 
        url: 'https://github.com/arisocode/TraderBosque'
      },
      {
        title: 'Snakes & Ladders Game',
        description: 'Java GUI project developed during first semester; learning Java fundamentals and GUI development.',
        url: '#'
      },
      {
        title: 'ATC Organizer',
        description: 'Java GUI application to organize ATCs and their categories, focusing on table management and object-oriented programming.',
        url: '#'
      },
      {
        title: 'Anitta Agenda',
        description: 'Java desktop application for personal organization, practicing persistence, file handling, and GUI.',
        url: '#'
      }
    ];

    return (
      <section id="projects" className="section-spacing" data-name="projects" data-file="components/Projects.js">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 lofi-text">Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="glassmorphism content-box lofi-card text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full glassmorphism flex items-center justify-center lofi-glow">
                  <i data-lucide="code" className="w-8 h-8 text-pink-300"></i>
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-6 text-spacing">
                  {project.description}
                </p>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-pink-500/80 hover:bg-pink-400 text-white rounded-lg transition-all duration-300"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Projects component error:', error);
    reportError(error);
  }
}
