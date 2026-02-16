import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fef2f2] via-rose-50 to-white relative"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-70"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-6 animate-fade-in">
          <div className="inline-block">
            <p className="text-rose-600 text-sm sm:text-base font-medium mb-2">Hi, my name is</p>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-slate-900">
            Vivek Yadav
          </h1>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-600">
            Full Stack Developer
          </h2>

          <p className="text-slate-600 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            I specialize in building exceptional digital experiences with modern UI designs
            and seamless integrations. Currently crafting innovative solutions at{' '}
            <span className="text-rose-600 font-semibold">BigWings LLC</span>.
          </p>

          <div className="flex justify-center space-x-4 pt-4">
            <a
              href="https://github.com/vivek73470"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-white border border-rose-100 hover:bg-rose-500 text-slate-600 hover:text-white rounded-full transition-all duration-300 transform hover:scale-110 shadow-sm"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/vivek734706"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-white border border-rose-100 hover:bg-rose-500 text-slate-600 hover:text-white rounded-full transition-all duration-300 transform hover:scale-110 shadow-sm"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:vivek734706@gmail.com"
              className="p-3 bg-white border border-rose-100 hover:bg-rose-500 text-slate-600 hover:text-white rounded-full transition-all duration-300 transform hover:scale-110 shadow-sm"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="pt-8">
            <button
              onClick={() => scrollToSection('about')}
              className="px-8 py-3 bg-rose-600 hover:bg-rose-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg shadow-rose-200"
            >
              Explore My Work
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-rose-600 animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
