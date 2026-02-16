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
    <section id="contact" className="relative overflow-hidden py-24 bg-gradient-to-b from-[#fef2f2] via-rose-50 to-white border-y border-rose-100">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-rose-100/70 blur-3xl"></div>
        <div className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-orange-100/50 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-rose-600 font-semibold mb-3">Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Get In <span className="text-rose-600">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-rose-500 mx-auto mb-4"></div>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Feel free to reach out if you want to collaborate on a project,
            have a question, or just want to connect.
          </p>
        </div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 max-w-6xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm p-7 rounded-3xl border border-rose-100 shadow-[0_24px_60px_-34px_rgba(225,29,72,0.35)]">
            <div className="flex items-center mb-5">
              <MapPin className="text-rose-600 mr-2" size={24} />
              <h3 className="text-slate-900 font-semibold text-xl">Location</h3>
            </div>
            <p className="text-slate-700 text-lg">Bangalore, India</p>
            <p className="text-slate-500 text-sm mt-2 mb-6">Available for remote opportunities worldwide</p>
            <a
              href="mailto:vivek734706@gmail.com"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-sm font-medium transition-colors"
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
                  className="group bg-white p-6 rounded-2xl border border-rose-100 hover:border-rose-300 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-rose-50 rounded-xl group-hover:bg-rose-500 transition-colors">
                      <Icon className="text-rose-600 group-hover:text-white" size={22} />
                    </div>
                    <div>
                      <h3 className="text-slate-900 font-semibold mb-1">{item.title}</h3>
                      <p className="text-slate-600 text-sm break-words leading-relaxed">{item.value}</p>
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
