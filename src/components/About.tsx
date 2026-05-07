import { useEffect } from 'react';
import { Sparkles } from 'lucide-react';

const About = () => {
    const skillGroups = [
        {
            title: 'Frontend',
            items: ['React.js', 'Next.js', 'Vue.js', 'JavaScript', 'TypeScript', 'Redux', 'HTML5', 'CSS3'],
        },
        {
            title: 'UI & Styling',
            items: ['Tailwind CSS', 'Material UI', 'Chakra UI', 'Bootstrap', 'Ant Design'],
        },
        {
            title: 'Backend',
            items: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'RESTful APIs', 'MVC Architecture'],
        },
        {
            title: 'Tools',
            items: ['Git', 'GitHub', 'Postman', 'Swagger', 'Jira', 'Vite', 'Webpack'],
        },
    ];

    useEffect(() => {
        const revealElements = document.querySelectorAll<HTMLElement>('.reveal-on-scroll');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            },
            { threshold: 0.15 }
        );

        revealElements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" className="relative overflow-hidden py-20 bg-[#0b0f14] border-y border-white/10">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-20 -left-10 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl"></div>
                <div className="absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <p className="reveal-on-scroll text-sm uppercase tracking-[0.2em] text-indigo-300 font-semibold mb-3">Profile</p>
                    <h2 className="reveal-on-scroll text-4xl md:text-5xl font-bold text-white mb-4">
                        About <span className="text-indigo-300">Me</span>
                    </h2>
                    <div className="reveal-on-scroll w-20 h-1 bg-indigo-400 mx-auto"></div>
                </div>

                <div className="space-y-10">
                    <div className="space-y-8">
                        <h3 className="reveal-on-scroll text-2xl md:text-3xl font-bold text-white">
                            LET ME{' '}
                            <span className="relative inline-block bg-gradient-to-r from-[#e2e8f0] to-[#c7d2fe] bg-clip-text text-transparent after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:rounded-full after:bg-gradient-to-r after:from-indigo-300/70 after:to-blue-300/60">
                                INTRODUCE
                            </span>{' '}
                            MYSELF
                        </h3>

                        <div className="space-y-6">
                            <div className="reveal-on-scroll pl-5 border-l border-indigo-300/40">
                                <p className="text-[#9c9c9d] leading-relaxed">
                                    Hello! My name is <span className="text-indigo-200 font-semibold">Vivek Yadav</span>.
                                    I am a Full Stack Developer currently working at <span className="text-indigo-200 font-semibold">BigWings LLC</span>.
                                </p>
                            </div>

                            <div className="reveal-on-scroll pl-5 border-l border-white/10">
                                <p className="text-[#9c9c9d] leading-relaxed">
                                    I specialize in building user-friendly web applications with modern UI designs and seamless
                                    AI integrations that deliver excellent user experiences.
                                </p>
                            </div>

                            <div className="reveal-on-scroll pl-5 border-l border-white/10">
                                <p className="text-[#9c9c9d] leading-relaxed">
                                    Strong focus on clean architecture, reusable UI systems, and production-ready
                                    frontend development for real-world products.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="reveal-on-scroll flex items-center gap-3">
                            <Sparkles className="text-indigo-300" size={20} />
                            <h4 className="text-xl font-semibold text-white">Core Skills</h4>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {skillGroups.map((group) => (
                                <div key={group.title} className="reveal-on-scroll space-y-3">
                                    <p className="text-indigo-200 text-sm uppercase tracking-[0.15em]">{group.title}</p>
                                    <div className="flex flex-wrap gap-2.5">
                                        {group.items.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1.5 rounded-full bg-[#141824] text-[#9c9c9d] border border-white/10 text-sm hover:border-indigo-300/50 hover:text-indigo-100 transition-all duration-300"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
