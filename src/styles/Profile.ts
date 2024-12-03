import styled from 'styled-components';

export const ProfileContainer = styled.div`
  position: relative;
  min-height: 100vh;
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
  font-weight: ${({ isActive, theme }) => isActive ? theme.title_16_B : theme.body_16_R};
  color: ${({ isActive, theme }) => isActive ? theme.colors.black : theme.colors.gray_3};
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
    background-color: ${({ isActive, theme }) => isActive ? theme.colors.black : 'transparent'};
    transition: all 0.2s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.black};

    &:after {
      background-color: ${({ theme }) => theme.colors.black};
    }
  }
`;

export const ProfileWrap = styled.div`
  display: grid;
  grid-template-columns: minmax(300px, 400px) 1fr;
  gap: 48px;
  padding: 24px 0;
  padding-bottom: 100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 4px;
    box-shadow: ${({ theme }) => theme.shadows.image};
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
    background: ${({ theme }) => theme.colors.gray_white1};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.gray_white2};
    border-radius: 4px;

    &:hover {
      background: ${({ theme }) => theme.colors.gray_2};
    }
  }

  div {
    margin-bottom: 32px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  h3 {
    ${({ theme }) => theme.typo.title_16_B};
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
