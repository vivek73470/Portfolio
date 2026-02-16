import { Code2, Palette, Server, Wrench } from 'lucide-react';

const About = () => {
    const skills = {
        frontend: [
            'React.js',
            'Next.js',
            'Vue.js',
            'JavaScript',
            'TypeScript',
            'Redux',
            'HTML5',
            'CSS3',
        ],
        styling: [
            'Tailwind CSS',
            'Material UI',
            'Chakra UI',
            'Bootstrap',
            'Ant Design',
        ],
        backend: [
            'Node.js',
            'Express.js',
            'MongoDB',
            'Mongoose',
            'RESTful APIs',
            'MVC Architecture',
        ],
        tools: [
            'Git',
            'GitHub',
            'Postman',
            'Swagger',
            'Jira',
            'Vite',
            'Webpack',
        ],
    };

    return (
        <section id="about" className="relative overflow-hidden py-24 bg-white border-y border-rose-100">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-20 -left-10 h-72 w-72 rounded-full bg-rose-100/60 blur-3xl"></div>
                <div className="absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-orange-100/50 blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-14">
                    <p className="text-sm uppercase tracking-[0.2em] text-rose-600 font-semibold mb-3">Profile</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        About <span className="text-rose-600">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-rose-500 mx-auto"></div>
                </div>

                <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 items-start">
                    <div className="bg-[#fef2f2] border border-rose-100 rounded-3xl p-7 sm:p-10 shadow-[0_24px_60px_-34px_rgba(225,29,72,0.35)]">
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                            LET ME <span className="text-rose-600">INTRODUCE</span> MYSELF
                        </h3>

                        <div className="text-slate-700 space-y-4 leading-relaxed">
                            <p>
                                Hello! My name is <span className="text-rose-600 font-semibold">Vivek Yadav</span>.
                                I am a Full Stack Developer currently working at <span className="text-rose-600 font-semibold">BigWings LLC</span>.
                            </p>

                            <p>
                                I specialize in building user-friendly web applications with modern UI designs and seamless
                                AI integrations that deliver excellent user experiences.
                            </p>

                            <p>
                                I am proficient in frontend technologies such as{' '}
                                <span className="text-rose-600 font-semibold">
                                    React.js, Next.js, Vue.js, JavaScript, TypeScript,Redux, HTML5, CSS3
                                </span>
                            </p>

                            <p>
                                I work extensively with modern UI frameworks and build tools including{' '}
                                <span className="text-rose-600 font-semibold">
                                    Tailwind CSS, Material UI, Chakra UI, Bootstrap, Ant Design, Vite, and Webpack
                                </span>
                            </p>

                            <p>
                                On the backend, I have experience working with{' '}
                                <span className="text-rose-600 font-semibold">
                                    Node.js, Express.js, MongoDB, Mongoose, and RESTful APIs
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
            <div className="h-full bg-white p-6 rounded-2xl border border-rose-100 hover:border-rose-300 transition-all duration-300 shadow-sm hover:shadow-md">
                            <div className="flex items-center mb-4">
                                <Code2 className="text-rose-600 mr-3" size={24} />
                                <h4 className="text-xl font-semibold text-slate-900">Frontend</h4>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skills.frontend.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-rose-50 text-slate-700 rounded-full text-sm hover:bg-rose-500 hover:text-white transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

            <div className="h-full bg-white p-6 rounded-2xl border border-rose-100 hover:border-rose-300 transition-all duration-300 shadow-sm hover:shadow-md">
                            <div className="flex items-center mb-4">
                                <Palette className="text-rose-600 mr-3" size={24} />
                                <h4 className="text-xl font-semibold text-slate-900">UI Frameworks</h4>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skills.styling.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-rose-50 text-slate-700 rounded-full text-sm hover:bg-rose-500 hover:text-white transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

            <div className="h-full bg-white p-6 rounded-2xl border border-rose-100 hover:border-rose-300 transition-all duration-300 shadow-sm hover:shadow-md">
                            <div className="flex items-center mb-4">
                                <Server className="text-rose-600 mr-3" size={24} />
                                <h4 className="text-xl font-semibold text-slate-900">Backend</h4>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skills.backend.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-rose-50 text-slate-700 rounded-full text-sm hover:bg-rose-500 hover:text-white transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

            <div className="h-full bg-white p-6 rounded-2xl border border-rose-100 hover:border-rose-300 transition-all duration-300 shadow-sm hover:shadow-md">
                            <div className="flex items-center mb-4">
                                <Wrench className="text-rose-600 mr-3" size={24} />
                                <h4 className="text-xl font-semibold text-slate-900">Tools</h4>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skills.tools.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-rose-50 text-slate-700 rounded-full text-sm hover:bg-rose-500 hover:text-white transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
