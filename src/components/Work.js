import { useState, useEffect } from 'react';


// Sample project data
const projects = [
    {
        id: 1,
        title: 'DressTalk',
        description: 'Full-stack e-commerce website with HTML,CSS,JS',
        color: '#4f46e5',
        technologies: ['React', 'Node.js', 'MongoDB'],
        imageUrl: '/projects/ecommerce.jpg'
    },
    {
        id: 2,
        title: 'AI Dashboard',
        description: 'Machine learning visualization dashboard',
        color: '#10b981',
        technologies: ['Python', 'TensorFlow', 'D3.js'],
        imageUrl: '/mypic.png'
    },
    {
        id: 3,
        title: 'Mobile Game',
        description: 'Cross-platform mobile game with Unity',
        color: '#f59e0b',
        technologies: ['Unity', 'C#', 'Firebase'],
        imageUrl: '/projects/mobile-game.jpg'
    }
];

function HolographicProject({ project, active, onClick, style}) {
    return (
        <div
            className={`holographic-project ${active ? 'active' : ''}`}
            onClick={onClick}
            style={{
                '--project-color': project.color,
                '--project-image': `url(${project.imageUrl})`,
                ...style,
            }}
        >
            <div className="holographic-disk">
                <div className="project-image" />
                <div className="project-title">{project.title}</div>
            </div>
        </div>
    );
}

function ProjectDetails({ project }) {
    if (!project) return null;

    return (
        <div className="project-details-panel">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="tech-tags">
                {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                ))}
            </div>
            <button className="view-project-btn">View Project</button>
        </div>
    );
}

export default function HolographicDisplay() {
    const [activeProject, setActiveProject] = useState(0);

    // Auto-rotate projects
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveProject((prev) => (prev + 1) % projects.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    // Calculate positions in a circle
    const getProjectPosition = (index) => {
        const angle = (index / projects.length) * Math.PI * 2;
        const radius = 150; // px
        return {
            x: Math.cos(angle) * radius,
            z: Math.sin(angle) * radius
        };
    };

    return (
        <>
        <div className="holographic-display">
          <div className="holo-layout">
            <div className="holograph-left">
              <div className="projects-container">
                {projects.map((project, i) => {
                  const position = getProjectPosition(i);
                  return (
                    <HolographicProject
                      key={project.id}
                      project={project}
                      active={i === activeProject}
                      onClick={() => setActiveProject(i)}
                      style={{
                        transform: `translate3d(${position.x}px)`,
                        zIndex: i === activeProject ? 2 : 1
                      }}
                    />
                  );
                })}
              </div>
            </div>
      
            <div className="project-details-right">
              <ProjectDetails project={projects[activeProject]} />
            </div>
          </div>
      
          <div className="project-navigation">
            {projects.map((_, i) => (
              <button
                key={i}
                className={`nav-dot ${i === activeProject ? 'active' : ''}`}
                onClick={() => setActiveProject(i)}
              />
            ))}
          </div>

          
        </div>

        <div class="copyright">
                <p>Copyright © Pratyush.</p>
            </div>
        </>
        
      );
      
}