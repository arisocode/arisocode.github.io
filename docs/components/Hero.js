function Hero() {

  const fullText = "Software Engineer | Backend Developer | Tech Enthusiast";
  const [typedText, setTypedText] = React.useState("");
  const [index, setIndex] = React.useState(0);

  // Typing effect limpio
  React.useEffect(() => {
    if (index < fullText.length) {
      const timer = setTimeout(() => {
        setTypedText(fullText.slice(0, index + 1));
        setIndex(index + 1);
      }, 100);

      return () => clearTimeout(timer);
    } else {
      const reset = setTimeout(() => {
        setIndex(0);
        setTypedText("");
      }, 3000);

      return () => clearTimeout(reset);
    }
  }, [index]);

  // Scroll a contacto
  const handleContactClick = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Descargar CV
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "resume/ARIADNA CABRERA-HDV-2026-1.pdf"; // crea esta ruta
    link.download = "Ariadna_Cabrera_CV.pdf";
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center">

      <div className="container mx-auto px-8 text-center">

        <div className="mb-12">
          <div className="w-40 h-40 mx-auto mb-8 rounded-full glassmorphism flex items-center justify-center lofi-glow">
            <i data-lucide="monitor" className="w-20 h-20 text-pink-300"></i>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-8 lofi-text fade-in">
          Hi, I'm Ariadna
        </h1>

        <p className="text-xl md:text-2xl text-pink-200 min-h-[32px] mb-6">
          {typedText}
        </p>

        <p className="text-lg max-w-3xl mx-auto text-gray-300 mb-12">
          A Backend Developer from Colombia, passionate about building scalable systems and exploring
          cloud technologies, software architecture, and emerging tech.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center">

          <button
            onClick={handleDownloadResume}
            className="px-8 py-4 bg-pink-500/80 text-white rounded-lg font-medium hover:bg-pink-400 transition-all duration-300"
          >
            Download Resume
          </button>

          <button
            onClick={handleContactClick}
            className="px-8 py-4 glassmorphism text-pink-200 rounded-lg font-medium hover:scale-105 transition-all"
          >
            Contact Me
          </button>

        </div>

      </div>
    </section>
  );
}
