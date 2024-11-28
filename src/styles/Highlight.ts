import styled from 'styled-components';

export const HighlightContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  background-color: #f7f7f7;
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
