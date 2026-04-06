import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'eTrucking System - TMS Platform',
            description:
                'Built a full-scale Transportation Management System using React.js, TypeScript, and Vite with optimized routing, lazy loading, and responsive UI. Integrated Redux for state management and automated invoice and driver data extraction via OCR, cutting manual entry by 60%.',
            tech: ['React.js', 'TypeScript', 'Redux', 'Vite', 'OCR', 'REST APIs'],
            link: 'https://etruckingsystem.com/',
            highlights: [
                'Implemented live-load real-time tracking for active shipments',
                'Built Uber/Ola-style load assignment and trip flow experience',
                'Added WebSocket chat for dispatcher, driver, and admin communication',
                'Solo-designed scalable, type-safe Super Admin Panel architecture',
            ],
        },
        {
            title: 'Nrich Learning',
            description:
                'Designed and developed the Admin Dashboard for the Nrich Learning platform. Worked on UI/UX, layout structuring, reusable components, and responsive design with typescript-based functionality for dynamic content handling.',
            tech: ['Angular', 'TypeScript', 'Responsive Design', 'UI/UX'],
            link: 'https://nrichlearning.com/',
            highlights: [
                'Complete admin dashboard from scratch',
                'Reusable component architecture',
                'API Integration',
                'Enhanced platform performance',
            ],
        },
        {
            title: 'Tech Truckers',
            description:
                'Developed a responsive Product showcase website for Tech Truckers using React.js, MUI & Tailwind CSS. Highlighting key features of web and mobile Apllication with optimized UI/UX & performance',
            tech: ['React.js', 'Javascript', 'Rest APIs', 'MUI'],
            link: 'https://techtruckers.com/',
            highlights: [
                'End-to-end dispatch and load management system for logistics operations',
                'Real-time tracking and fleet monitoring for improved visibility',
                'Driver compliance and operational workflow management features',
                'Dynamic, API-driven dashboards for live logistics data',
            ],
        },
        {
            title: 'Big Wings',
            description:
                'Developed a responsive web platform for a logistics and supply chain management company, enabling businesses to manage freight operations with real-time visibility and streamlined coordination. The platform focuses on transportation management, shipment tracking, and efficient handling of diverse cargo including refrigerated goods, fresh produce, and general freight, delivering a seamless and data-driven user experience.',
            tech: ['React.js', 'JavaScript', 'REST APIs', 'MUI'],
            link: 'https://bigwings.us/',
            highlights: [
                'Transportation and freight management system with real-time visibility',
                'Support for diverse logistics operations including refrigerated and general cargo',
                'Streamlined shipment tracking and supply chain coordination',
                'API-driven data integration for dynamic logistics workflows',
                'Responsive and intuitive UI for operational efficiency across devices',
            ],
        },
        {
            title: 'ShopFusion',
            description:
                'Independently developed a full-stack e-commerce application with secure login, product browsing, cart features, and admin panel. Implemented MVC architecture with clear controllers, services, and routes.',
            tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
            link: 'https://react-shop-fusion.vercel.app/',
            highlights: [
                'Full-stack development',
                'Secure authentication system',
                'Admin panel for product management',
                'MVC architecture implementation',
            ],
        },
        {
            title: 'Chatify',
            description:
                'A modern real-time chat application with seamless user experience and responsive design. Features include instant messaging, user authentication, and clean UI/UX.',
            tech: ['React.js', 'JavaScript', 'Real-time APIs', 'Socket.io'],
            link: 'https://chatify-frontend-pi.vercel.app/',
            highlights: [
                'Real-time one-to-one and group messaging',
                'Conversation sidebar with quick user/group switching',
                'Cursor-based pagination for smooth chat history loading',
                'Secure authentication with fully responsive UI',
            ],
        },
        {
            title: 'Pepecones',
            description:
                'Designed and developed a responsive brand website for Pepecones, focused on herbal and natural pre-rolled cones. Built product-focused pages with clear content structure, integrated APIs for dynamic updates, and aligned the platform with Amazon listing visibility and conversion goals.',
            tech: ['Next.js', 'JavaScript', 'API Integration', 'Responsive Design'],
            link: 'https://pepecones.com/',
            highlights: [
                'Modern UI implementation with product-first visual hierarchy',
                'API integration for dynamic content and catalog updates',
                'Cross-browser compatibility across major desktop and mobile browsers',
                'Performance optimization for faster loading and smoother UX',
            ],
        },
        {
            title: 'Find & Immigration Consult',
            description:
                'Designed and developed a responsive web platform for an immigration consultancy, enabling users to connect with verified consultants and explore essential services such as accommodation, dining, shopping, and local attractions. Integrated APIs for dynamic data exchange and focused on delivering an intuitive, user-friendly experience across devices.',
            tech: ['Vue.js', 'Nuxt.js', 'Real-time APIs', 'Javascript'],
            link: 'http://findandconsult.com/',
            highlights: [
                'Verified consultant discovery with profile-based filtering',
                'Service directory for accommodation, dining, and local essentials',
                'API-driven dynamic content integration',
                'Mobile-first, responsive experience across devices',
            ],
        },

    ];

    return (
        <section id="projects" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        Featured <span className="text-rose-600">Projects</span>
                    </h2>
                    <div className="w-20 h-1 bg-rose-500 mx-auto mb-4"></div>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                        Here are some of my recent projects showcasing my expertise in building
                        scalable and user-focused applications
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg overflow-hidden border border-rose-100 hover:border-rose-300 transition-all duration-300 hover:transform hover:scale-105 group shadow-sm"
                        >
                            <div className="p-6 space-y-4">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-rose-600 transition-colors">
                                        {project.title}
                                    </h3>
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-rose-600 hover:text-rose-500 transition-colors"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                </div>

                                <p className="text-slate-600 leading-relaxed">{project.description}</p>

                                <div className="space-y-3">
                                    <h4 className="text-sm font-semibold text-rose-600 uppercase tracking-wide">
                                        Key Highlights
                                    </h4>
                                    <ul className="space-y-2">
                                        {project.highlights.map((highlight, idx) => (
                                            <li key={idx} className="text-slate-600 text-sm flex items-start">
                                                <span className="text-rose-600 mr-2">▹</span>
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-wrap gap-2 pt-4 border-t border-rose-100">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-rose-50 text-rose-700 rounded-full text-xs font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="https://github.com/vivek73470"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-white hover:bg-rose-500 text-slate-700 hover:text-white rounded-lg font-medium transition-all duration-300 border border-rose-100 hover:border-rose-300 shadow-sm"
                    >
                        <Github className="mr-2" size={20} />
                        View More on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
