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
                Backend Developer passionate about building robust, scalable, and efficient systems. 
                I enjoy transforming ideas into practical solutions through clean code, 
                thoughtful architecture, and modern engineering practices.
              </p>
              
              <p className="text-gray-300 text-spacing">
                I have experience with Java, C#, .NET, Python, JavaScript, SQL databases, 
                cloud technologies, and DevOps tools. I enjoy working on backend logic, 
                database design, APIs, and system architecture.
              </p>
              
              <p className="text-gray-300 text-spacing">
                I am constantly learning and currently exploring software architecture, 
                microservices, cloud-native development, artificial intelligence tools, 
                and blockchain fundamentals.
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
