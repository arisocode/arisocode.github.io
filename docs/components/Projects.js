function Projects() {
  try {
    const projects = [
      { 
        title: 'Poblado Nómina', 
        description: 'Integrated payroll system managing employees, contracts, settlements, and related third parties. Entire database logic implemented in PL/SQL for secure, automated, and reliable operations.', 
        url: 'https://github.com/arisocode/PayrollProyect',
        image: '/images/poblado.png'
      },
      { 
        title: 'ZonaFitGYM', 
        description: 'Full-stack Java project using Spring Boot, JSF, and PrimeFaces. Manage gym clients with CRUD operations through console, desktop GUI, and web.', 
        url: 'https://github.com/arisocode/ZonaFitGymCRUD',
        image: '/images/zonafit.png'
      },
      {
        title: 'DataBaseATC',
        description: 'Desktop Java application with Swing GUI for managing and categorizing pharmacological data. Import, visualize, and export large lists of drugs by ATC code and therapeutic groups.',
        url: 'https://github.com/arisocode/DataBaseATC',
        image: '/images/atcdb.png'
      },
      {
        title: 'EnergyDistributionAPI',
        description: 'Backend system built in .NET for processing and analyzing electric power distribution data. Focused on scalable database design, efficient historical data loading, and analytical API exposure.',
        url: 'https://github.com/arisocode/EnergyDistributionAPI',
        image: '/images/apisapp.png'
      }
    ];

    return (
      <section id="projects" className="section-spacing" data-name="projects" data-file="components/Projects.js">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 lofi-text">Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="glassmorphism rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-top"
                />

                <div className="p-6 text-center">
                  <h3 className="text-2xl font-semibold mb-4 lofi-text">{project.title}</h3>
                  <p className="text-gray-300 mb-6 text-sm md:text-base">{project.description}</p>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lofi-button"
                  >
                    View Project →
                  </a>
                </div>
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
