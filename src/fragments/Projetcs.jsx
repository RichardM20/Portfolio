import React, { useEffect, useState } from "react";
import CardComponent from "../components/CardProjectsComponent";

const Projects = () => {
 
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/projects");
        if (response.ok) {
          const data = await response.json();
          console.log(JSON.stringify(data));
          setProjects(data);
        } else {
          setError(true);
        }
      } catch (error) {
        setError(true);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="projects--container">
        {projects.map((element) => (
          <CardComponent
            title={element.title}
            content={element.content}
            demoLink={element.link_demo}
            githubLink={element.link_github}
            img={element.image}
            tech={element.technologies}
            key={element.id}
            isPublishedMobile={element.isPublished}
            appleStoreUrl={element.link_appstore}
            playStoreUrl={element.link_playstore}
          />
        ))}
      </div>
    </>
  );
};

export default Projects;
