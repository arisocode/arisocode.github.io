function About() {
  try {
    return (
      <section id="about" className="section-spacing" data-name="about" data-file="components/About.js">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 lofi-text">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="glassmorphism content-box lofi-card">
              <div className="text-center mb-8">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden glassmorphism lofi-glow">
                <img 
                  src="../images/arisocodePortfolio.jpeg" 
                  alt="Ariadna Cabrera" 
                  className="w-full h-full object-cover"
                />
              </div>
                <h3 className="text-2xl font-semibold text-pink-200">Professional Profile</h3>
              </div>
            </div>
            
            <div className="glassmorphism content-box lofi-card">
              <h3 className="text-2xl font-semibold mb-6 text-pink-300">My Journey</h3>
              
              <p className="text-gray-300 text-spacing">
                Backend Developer with professional experience building scalable web applications and robust backend systems, 
                specializing in Java and Spring Boot with clean architecture and RESTful APIs.
              </p>
              
              <p className="text-gray-300 text-spacing">
                I also work with multiple technologies including C#/.NET, Python, JavaScript, and both SQL and NoSQL databases, 
                adapting to different project needs and environments.
              </p>
              
              <p className="text-gray-300 text-spacing">
                I have experience collaborating in Agile teams, optimizing database performance, and applying modern backend 
                development best practices while continuously improving my technical skills.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-center">
                  <i data-lucide="map-pin" className="w-5 h-5 text-pink-300 mr-4"></i>
                  <span className="text-gray-300">Neiva Huila, Colombia</span>
                </div>
                <div className="flex items-center">
                  <i data-lucide="graduation-cap" className="w-5 h-5 text-pink-300 mr-4"></i>
                  <span className="text-gray-300">Indigo Technologies (2023 - 2025)</span>
                </div>
                <div className="flex items-center">
                  <i data-lucide="briefcase" className="w-5 h-5 text-pink-300 mr-4"></i>
                  <span className="text-gray-300">Systems Engineering Student</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('About component error:', error);
    reportError(error);
  }
}
