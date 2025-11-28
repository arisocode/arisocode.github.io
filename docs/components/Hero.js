function Hero() {
  try {
    const [typedText, setTypedText] = React.useState('');
    const fullText = "Software Engineer | Backend Developer | Tech enthusiast";
    
    React.useEffect(() => {
      let currentIndex = 0;
      const typeTimer = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setTypedText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          setTimeout(() => {
            currentIndex = 0;
            setTypedText('');
          }, 3000);
        }
      }, 100);
      
      return () => clearInterval(typeTimer);
    }, []);

    return (
      <section id="home" className="min-h-screen flex items-center justify-center" data-name="hero" data-file="components/Hero.js">
        <div className="container mx-auto px-8 text-center">
          <div className="floating mb-12">
            <div className="w-40 h-40 mx-auto mb-8 rounded-full glassmorphism flex items-center justify-center lofi-glow">
              <i data-lucide="monitor" className="w-20 h-20 text-pink-300"></i>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 lofi-text fade-in">
            Hi, I'm Ariadna
          </h1>
          
          <div className="mb-6">
            <p className="text-xl md:text-2xl text-pink-200 typing-animation min-h-[32px]">
              {typedText}
            </p>
          </div>
          
          <div className="mb-12">
            <p className="text-lg max-w-3xl mx-auto text-gray-300 text-spacing">
              A Backend Developer from Colombia, passionate about building scalable systems and exploring
              cloud technologies, software architecture, and emerging tech.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button className="px-8 py-4 bg-pink-500/80 text-white rounded-lg font-medium hover:bg-pink-400 transition-all duration-300">
              Download Resume
            </button>
            <button className="px-8 py-4 glassmorphism text-pink-200 rounded-lg font-medium lofi-card">
              Contact Me
            </button>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    reportError(error);
  }
}
