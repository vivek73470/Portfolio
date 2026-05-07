import { Mail, Phone, Github, Linkedin, MapPin } from 'lucide-react';

const Contact = () => {
  const contactItems = [
    {
      title: 'Email',
      value: 'vivek734706@gmail.com',
      href: 'mailto:vivek734706@gmail.com',
      icon: Mail,
    },
    {
      title: 'Phone',
      value: '+91 7347063116',
      href: 'tel:7347063116',
      icon: Phone,
    },
    {
      title: 'GitHub',
      value: 'github.com/vivek73470',
      href: 'https://github.com/vivek73470',
      icon: Github,
      external: true,
    },
    {
      title: 'LinkedIn',
      value: 'linkedin.com/in/vivek734706',
      href: 'https://www.linkedin.com/in/vivek734706',
      icon: Linkedin,
      external: true,
    },
  ];

  return (
    <section id="contact" className="relative overflow-hidden py-24 bg-gradient-to-b from-[#07080a] via-[#0b0f14] to-[#0d121b] border-y border-white/10">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl"></div>
        <div className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-indigo-300 font-semibold mb-3">Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-indigo-300">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-400 mx-auto mb-4"></div>
          <p className="text-[#9c9c9d] text-lg max-w-2xl mx-auto">
            Feel free to reach out if you want to collaborate on a project,
            have a question, or just want to connect.
          </p>
        </div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 max-w-6xl mx-auto">
          <div className="bg-[#141824]/90 backdrop-blur-sm p-7 rounded-3xl border border-white/10 shadow-[0_24px_60px_-34px_rgba(99,102,241,0.3)]">
            <div className="flex items-center mb-5">
              <MapPin className="text-indigo-300 mr-2" size={24} />
              <h3 className="text-white font-semibold text-xl">Location</h3>
            </div>
            <p className="text-[#9c9c9d] text-lg">Bangalore, India</p>
            <p className="text-[#9c9c9d] text-sm mt-2 mb-6">Available for remote opportunities worldwide</p>
            <a
              href="mailto:vivek734706@gmail.com"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-indigo-400 hover:bg-indigo-300 text-white text-sm font-medium transition-colors"
            >
              Send Quick Email
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {contactItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.title}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noreferrer' : undefined}
                  className="group bg-[#141824] p-6 rounded-2xl border border-white/10 hover:border-indigo-300/40 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-indigo-500/10"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-[#0f1420] rounded-xl group-hover:bg-indigo-400 transition-colors">
                      <Icon className="text-indigo-300 group-hover:text-white" size={22} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                      <p className="text-[#9c9c9d] text-sm break-words leading-relaxed">{item.value}</p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
