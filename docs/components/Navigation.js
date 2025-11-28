function Navigation() {
  try {
    const [activeSection, setActiveSection] = React.useState('home');
    
    const navItems = [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'skills', label: 'Skills' },
      { id: 'certifications', label: 'Certifications' },
      { id: 'projects', label: 'Projects' },
      { id: 'contact', label: 'Contact' }
    ];

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(sectionId);
      }
    };

    return (
      <nav className="fixed top-0 left-0 right-0 z-50 glassmorphism m-4" data-name="navigation" data-file="components/Navigation.js">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-semibold lofi-text">
              Ariadna Cabrera
            </div>
            <div className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
                    activeSection === item.id 
                      ? 'text-pink-300 bg-pink-500/20' 
                      : 'text-gray-300 hover:text-pink-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
    );
  } catch (error) {
    console.error('Navigation component error:', error);
    reportError(error);
  }
}
