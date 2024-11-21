import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  SliderContainer,
  ProjectSlide,
  ImageWrapper,
  ProjectImage,
  ProjectInfo,
} from 'styles/Carousel';

// Types
interface Project {
  id: number;
  title: string;
  year: string;
  image: string;
}
function ProjectCarousel() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch('/assets/data/projects.json')
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        console.log(data);
      })
      .catch((error) => console.error('Error loading JSON data:', error));
  }, []);

  const settings = {
    dots: false, // Removed dots
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    focusOnSelect: true,
    variableWidth: false,
    arrows: true,

    // Custom prev/next arrows
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <SliderContainer>
      <Slider {...settings}>
        {projects.map((project) => (
          <ProjectSlide key={project.id}>
            <ImageWrapper>
              <ProjectImage
                src={project.image}
                alt={project.title}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = '/placeholder.png';
                }}
              />
            </ImageWrapper>
            <ProjectInfo>
              <p className="project-title">{project.title}</p>
              <p className="project-year">{project.year}</p>
            </ProjectInfo>
          </ProjectSlide>
        ))}
      </Slider>
    </SliderContainer>
  );
}

// Custom Previous Arrow
const CustomPrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'rgba(128,128,128,0.5)',
        borderRadius: '50%',
      }}
      onClick={onClick}
    />
  );
};

// Custom Next Arrow
const CustomNextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'rgba(128,128,128,0.5)',
        borderRadius: '50%',
      }}
      onClick={onClick}
    />
  );
};

export default ProjectCarousel;
