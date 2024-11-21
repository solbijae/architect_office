import styled from 'styled-components';

export const SliderContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 0 200px 0;

  /* Slick Slider Customization */
  .slick-slider {
    position: relative;
  }

  .slick-list {
    overflow: visible;
  }

  .slick-track {
    display: flex;
    align-items: center;
  }

  .slick-slide {
    transition: all 0.3s ease;
    opacity: 0.6;
    transform: scale(0.8);
  }

  .slick-slide.slick-center {
    opacity: 1;
    transform: scale(1);
    z-index: 10;
  }

  /* Previous and Next Arrow Customization */
  .slick-arrow {
    display: none !important;
  }
`;

export const ProjectSlide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  padding: 0 15px;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  height: 400px;
  overflow: hidden;
  margin: 0 auto;
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
`;

export const ProjectInfo = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 600px;
  padding: 10px 20px;
  margin: 0 auto;

  .project-title {
    font-size: 1.2rem;
    font-weight: bold;
    text-align: left;
  }

  .project-year {
    font-size: 1.2rem;
    text-align: right;
  }
`;
