function Experience() {
  try {
    return (
      <section id="experience" className="py-20 px-6" data-name="experience" data-file="components/Experience.js">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 neon-text">Experience</h2>
          
          <div className="glassmorphism p-8 rounded-2xl">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full glassmorphism flex items-center justify-center neon-glow flex-shrink-0">
                <i data-lucide="briefcase" className="w-6 h-6 text-cyan-400"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">Backend Developer</h3>
                <p className="text-cyan-400 mb-2">Dic 2023 – Sep 2025</p>
                <p className="text-gray-300">
                  Worked on backend development tasks including debugging, implementing Product Backlog Items, and improving system reliability.  
                  Participated in Scrum ceremonies, contributed to code reviews, and ensured the use of clean code and best development practices.  
                  Experienced in database management, including creating and maintaining stored procedures, views, triggers, and relational tables.  
                  Utilized version control tools to collaborate effectively across the development team and maintain clean, trackable workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Experience component error:', error);
    reportError(error);
  }
}
