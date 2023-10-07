import React, { useEffect, useState } from "react";
import CardComponent from "../components/CardProjectsComponent";
import LoadingComponent from "../components/LoadingComponent";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "../styles/project.css";
import "swiper/css";
import "swiper/css/pagination";

const Projects = ({ id }) => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/projects");
        if (response.ok) {
          const data = await response.json();
          setProjects(data);
        } else {
          setError(response.json);
        }
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error);
      }
    };
    setTimeout(() => fetchData(), 450);
  }, []);

  return (
    <>
      {isLoading ? (
        <div id={id} className="project--container">
          <LoadingComponent />
        </div>
      ) : (
        <div id={id} className="project--container">
          <p>Projects</p>
          {projects.length < 1 ? (
            <>
              <div>
                <p>Empty section</p>
              </div>
            </>
          ) : (
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              className="swiper"
            >
              {projects.map((element, index) => (
                <SwiperSlide key={index}>
                  <CardComponent
                    title={element.title}
                    appleStoreUrl={element.link_appstore}
                    isPublishedMobile={element.isPublished}
                    playStoreUrl={element.link_playstore}
                    content={element.content}
                    demoLink={element.link_demo}
                    githubLink={element.link_github}
                    img={element.image}
                    tech={element.technologies}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      )}
    </>
  );
};

export default Projects;
