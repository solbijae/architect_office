import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  position: relative;
  min-height: calc(100vh - 100px);
  padding-bottom: 100px;
  width: 1200px;
  margin: 0 auto;
  user-select: none;
`;

export const ProjectWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 290px);
  gap: 10px;
  width: 100%;
  padding-top: 48px;
`;

export const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    transition: all 0.3s ease;
  }

  &:hover {
    img {
      filter: grayscale(80%);
    }

    div {
      display: block;
      color: white;
    }

    &::after {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease;
  display: block;
`;

export const InfoWrap = styled.div`
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
  ${({ theme }) => theme.typo.title_24_B};
  z-index: 1;

  p {
    margin-bottom: 10px;
    color: inherit;
  }
`;
