import styled, { keyframes } from 'styled-components';

export const HomeContainer = styled.div`
  position: relative;
  min-height: calc(100vh - 100px);
  padding-bottom: 100px;
  width: 1200px;
  margin: 0 auto;
  background-color: #f7f7f7;
`;

const bouncy = keyframes`
  0% {
    bottom: 52px;
  }
  50% {
    bottom: 60px;
  }
  100% {
    bottom: 52px;
  }
`;

interface ScrollDown {
  showScrollIcon: boolean;
}

export const ImageContainer = styled.div<ScrollDown>`
  position: relative;
  height: calc(100vh - 100px);

  svg {
    position: absolute;
    bottom: 60px;
    left: 50%;
    transform: translateX(-50%);
    animation: ${bouncy} 1.5s linear infinite;
    opacity: ${({ showScrollIcon }) => (showScrollIcon ? 1 : 0)};
    visibility: ${({ showScrollIcon }) => (showScrollIcon ? 'visible' : 'hidden')};
    transition: opacity 0.5s, visibility 0.5s;
  }
`;

export const Image = styled.img`
  width: 1200px;
  padding: 50px 0 0 0;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -40%);
`;

export const ProjectWrap = styled.section`
  overflow: hidden;
  border-bottom: 1px solid #ccc;
`;

export const TitleContainer = styled.div`
  padding: 20px;
  font-size: 3rem;
  font-weight: 600;
`;

export const Title = styled.p`
  margin-bottom: 0.5rem;
`;
