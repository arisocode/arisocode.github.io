function Certifications() {
  try {
    const certifications = [
      { title: 'Applied Software Engineering Fundamentals', issuer: 'IBM Coursera', date: '2024' },
      { title: 'Software Engineering Essentials', issuer: 'IBM Coursera', date: '2024' },
      { title: 'Introduction to Data Science', issuer: 'IBM', date: '2024' },
      { title: 'Microsoft IT Support Specialist', issuer: 'Microsoft', date: '2024' },
      { title: 'Snowflake Data Engineering', issuer: 'Snowflake', date: '2024' },
      { title: 'Python for Data Science', issuer: 'IBM', date: '2024' }
    ];

    React.useEffect(() => {
      lucide.createIcons();
    }, []);

    return (
      <section id="certifications" className="section-spacing" data-name="certifications" data-file="components/Certifications.js">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 lofi-text">Certifications</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="glassmorphism content-box lofi-card text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full glassmorphism flex items-center justify-center lofi-glow">
                  <i data-lucide="award" className="w-8 h-8 text-pink-300"></i>
                </div>
                
                <h3 className="text-lg font-semibold mb-4 text-white leading-relaxed">
                  {cert.title}
                </h3>
                
                <p className="text-pink-300 mb-2 font-medium">
                  {cert.issuer}
                </p>
                
                <p className="text-gray-400">
                  {cert.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Certifications component error:', error);
    reportError(error);
  }
}
