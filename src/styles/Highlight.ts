import styled from 'styled-components';

export const HighlightContainer = styled.div`
  position: relative;
  min-height: calc(100vh - 100px);
  padding-bottom: 100px;
  width: 1200px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
`;

export const HighlightsNav = styled.nav`
  padding: 48px 0;

  ul {
    display: flex;
    justify-content: center;
    gap: 48px;
    padding-bottom: 16px;
  }
`;

export const NavItem = styled.li<{isActive?: boolean}>`
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
