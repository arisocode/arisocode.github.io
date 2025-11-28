function Contact() {
  try {
    const socialLinks = [
      { name: 'Email', url: 'mailto:aricabrerac21@gmail.com', icon: 'mail' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ariadna-sophia-cabrera-carrera-aa35001a8/', icon: 'linkedin' },
      { name: 'GitHub', url: 'https://github.com/arisocode', icon: 'github' },
      { name: 'Instagram', url: 'https://www.instagram.com/ariso.code', icon: 'instagram' }
    ];

    return (
      <section id="contact" className="section-spacing" data-name="contact" data-file="components/Contact.js">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-16 lofi-text">Get In Touch</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="glassmorphism content-box lofi-card">
              <h3 className="text-2xl font-semibold mb-8 text-pink-300">Send a Message</h3>
              <form className="space-y-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 rounded-lg bg-gray-800/50 border border-gray-600 text-white focus:border-pink-400 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-4 rounded-lg bg-gray-800/50 border border-gray-600 text-white focus:border-pink-400 focus:outline-none"
                />
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="w-full p-4 rounded-lg bg-gray-800/50 border border-gray-600 text-white focus:border-pink-400 focus:outline-none"
                ></textarea>
                <button className="w-full py-4 bg-pink-500/80 text-white rounded-lg font-medium hover:bg-pink-400 transition-all duration-300">
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="glassmorphism content-box lofi-card">
              <h3 className="text-2xl font-semibold mb-8 text-pink-300">Connect With Me</h3>
              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 glassmorphism rounded-lg lofi-card"
                  >
                    <i data-lucide={link.icon} className="w-6 h-6 text-pink-300 mr-4"></i>
                    <span className="text-white font-medium">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Contact component error:', error);
    reportError(error);
  }
}
