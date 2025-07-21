import { ExternalLink, Github } from 'lucide-react';
import mad_movies from '../assets/mad_movies.png';
import food from '../assets/food.png';
import skillsphere from '../assets/skillsphere.png';
import webintax from '../assets/webintax.png';
import tic from '../assets/tic.png';
import digital from '../assets/digital.png';
const Projects = () => {
  const projects = [
    {
      title: "Mad Movie Platform",
      description: "A front-end movie platform built with React,and TMDB movie database. Features include search options,fetching top rated and popular movies using api.",
      image: mad_movies,
      technologies: ["React","TMDB API","Tailwind CSS"],
      github: "https://github.com/Maddyhub007/mad-movies.git",
      live: "https://maddy-movies007.netlify.app/"
    },
    {
      title: "Food Explorer App",
      description: "A responsive food explorer app that allows users to discover the nutritious foods and helps users to filter and search their favourite foods.",
      image: food,
      technologies: ["React", "Next.js", "OpenFoodFacts api", "tailwind css"],
      github: "https://github.com/Maddyhub007/intern-project.git",
      live: "https://food-explorer-app12345.netlify.app/"
    },
    {
      title: "Skill Sphere",
      description: "This is a hackathon project which is a full-stack web app that enables peer to peer learning and skill sharing. Front end is with Next.js and backend is with clerk and appwrite.",
      image: skillsphere,
      technologies: ["Next.js", "Tailwind css", "Clerk authentication", "Appwrite"],
      github: "https://github.com/Maddyhub007/Skill-Sphere.git",
      live: "https://skill-sphere-omega.vercel.app/"
    },
    {
      title: "Webintax",
      description: "A comprehensive Tax consultancy website built for the company webintax which is a front end focused react project with home,about,contact,services and it consists of a total of 51 pages.",
      image: webintax,
      technologies:["Tailwind css", "React", "TypeScript","Shadcn-ui"],
      github: "https://github.com/Maddyhub007/tax-haven-web.git",
      live: "https://webintax.com/"
    },
    {
      title: "Tic-Tac-Toe",
      description: "A simple tic-tac-toe game built with react which has the features of counting the wins and storing it and reset button to reset the game. It is a fun project to play with friends and family.",
      image: tic,
      technologies: ["React", "Tailwind css", "Shadcn-ui"],
      github: "https://github.com/Maddyhub007/tic-tac-toe.git",
      live: "https://tic-tac-toemaddy007.netlify.app/"
    },
    {
      title: "Digital Clock",
      description: "A real-time digital clock which is a simple project using react hooks useState and useEffect. This project fetches the current time and displays it in a user-friendly format.",
      image: digital,
      technologies: ["TypeScript", "React", "useState", "useEffect"],
      github: "https://github.com/Maddyhub007/digital-clock.git",
      live: "https://maddy-digital-clock.netlify.app/"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <a
                    href={project.github}
                    className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-300"
                  >
                    <Github className="w-4 h-4 text-gray-800" />
                  </a>
                  <a
                    href={project.live}
                    className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4 text-gray-800" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Projects;