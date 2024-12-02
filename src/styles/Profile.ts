import styled from 'styled-components';

export const ProfileContainer = styled.div`
  position: relative;
  min-height: 100vh;
  /* padding-bottom: 100px; */
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

export const ProfileNav = styled.nav`
  padding: 48px 0;

  ul {
    display: flex;
    justify-content: center;
    gap: 48px;
    padding-bottom: 16px;
  }
`;

interface NavItemProps {
  isActive: boolean;
}

export const NavItem = styled.li<NavItemProps>`
  font-weight: ${({ isActive }) => (isActive ? '600' : '400')};
  color: ${({ isActive }) => (isActive ? '#000' : '#666')};
  cursor: pointer;
  position: relative;
  padding-bottom: 8px;

  &:after {
    content: '';
    position: absolute;
    bottom: -17px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${({ isActive }) => (isActive ? '#000' : 'transparent')};
    transition: all 0.2s ease;
  }

  &:hover {
    color: #000;

    &:after {
      background-color: #000;
    }
  }
`;

export const ProfileWrap = styled.div`
  display: grid;
  grid-template-columns: minmax(300px, 400px) 1fr;
  gap: 48px;
  padding: 24px 0;
  /* min-height: calc(100vh - 100px); */
  padding-bottom: 100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 4px;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  }
`;

export const ProfileInfoWrap = styled.div`
  font-size: 0.95rem;
  max-height: 800px;
  overflow-y: auto;
  padding-right: 16px;

  /* Styled scrollbar */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ddd;
    border-radius: 4px;

    &:hover {
      background: #ccc;
    }
  }

  div {
    margin-bottom: 32px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 16px;
    display: flex;
    align-items: center;

    &:before {
      content: '';
      display: inline-block;
      width: 4px;
      height: 16px;
      background-color: #000;
      margin-right: 8px;
      border-radius: 2px;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  li {
    color: #555;
    line-height: 1.5;
    transition: color 0.2s ease;

    &:hover {
      color: #000;
    }
  }
`;

export const SectionTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 16px;
  position: relative;
`;

export const TeamProfileWrap = styled.div`
  /* min-height: calc(100vh - 100px); */
  padding-bottom: 100px;
  width: 100%;
  text-align: center;
`;
