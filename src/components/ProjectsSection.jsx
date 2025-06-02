import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects =[
    {
        id: 1,
        title: "Cyber Colosseum",
        description: "A 2D action shooter game where you take control of a robot and fight waves of incoming enemy robots.",
        image: "/projects/cyber_colosseum.png",
        tags: ["C#", "Unity"],
        demoUrl: "#",
    },

    {
        id: 2,
        title: "System Overhaul",
        description: "A third person action shooter set in a dystopian future where you've broken free of the mind control and now fight for the ones who aren't so fortunate.",
        image: "/projects/system_overhaul.png",
        tags: ["C#", "Unity"],
        demoUrl: "https://thunderb0lt.itch.io/cyber-colosseum",
    },

    {
        id: 3,
        title: "Not Dead Enough",
        description: "A first person zombie shooter where you survive waves of incoming zombies for as long as possible.",
        image: "/projects/not_dead_enough.png",
        tags: ["C++", "C", "Unreal Engine 4"],
        demoUrl: "https://thunderb0lt.itch.io/not-dead-enough",
    },

    {
        id: 4,
        title: "Star Grazer",
        description: "A resource management and base building browser game.",
        image: "/projects/stargrazer.png",
        tags: ["JavaScript", "p5.js", "MySQL", "HTML", "CSS"],
        demoUrl: "#",
    },

    {
        id: 5,
        title: "Running To Masters",
        description: "A short 2D sidescrolling runner game devloped for a 2 day game jam.",
        image: "/projects/running_to_masters.png",
        tags: ["C#", "Unity"],
        demoUrl: "#",
    }
]

export const ProjectsSection = () => {
    return (
    
        <section id="projects" className="py-24 px-4 relative">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary"> Projects </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my projects.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">

                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border-full bg-secondary text-secondary">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            
                            
                            <h3 className="text-xl font-semibold mb-1"> {project.title} </h3>

                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>
                                
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a href={project.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <ExternalLink size={20}/>
                                        </a>

                                        <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <Github size={20}/>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>                        
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/sheehanBoi" target="_blank">
                        Check My Github <ArrowRight size={16}/>
                    </a>
                </div>

            </div>
                    
        </section>
    
    );
};