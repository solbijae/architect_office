import styled, { keyframes } from 'styled-components';

interface ScrollDown {
  showScrollIcon: boolean;
}

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

export const HomeContainer = styled.div`
  position: relative;
  margin: 0 auto;
  padding-bottom: 100px;
  width: 1200px;
  min-height: calc(100vh - 100px);
  background-color: ${({ theme }) => theme.colors.backgroundColor};
`;

export const ImageContainer = styled.div<ScrollDown>`
  position: relative;
  height: calc(100vh - 100px);
  user-select: none;

  svg {
    position: absolute;
    bottom: 60px;
    left: 50%;
    transform: translateX(-50%);
    visibility: ${({ showScrollIcon }) => (showScrollIcon ? 'visible' : 'hidden')};
    opacity: ${({ showScrollIcon }) => (showScrollIcon ? 1 : 0)};
    transition: opacity 0.5s, visibility 0.5s;
    animation: ${bouncy} 1.5s linear infinite;
  }
`;

export const Image = styled.img`
  position: absolute;
  padding: 50px 0 0 0;
  width: 1200px;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -40%);
  user-select: none;
`;

export const ProjectWrap = styled.section`
  overflow: hidden;
  border-bottom: ${({ theme }) => theme.border.gray_1};
  user-select: none;
`;

export const TitleContainer = styled.div`
  padding: 20px;
  ${({ theme }) => theme.typo.title_48_B};
`;

export const Title = styled.p`
  margin-bottom: 10px;
`;
