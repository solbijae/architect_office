import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Nav 컨테이너 스타일 (clearfix 포함)
export const NavContainer = styled.div`
  position: relative;
  height: 100px;
  display: block;
  background-color: #f7f7f7;
  border-bottom: 1px solid #ccc;

  &:after {
    /* clearfix */
    content: '';
    display: table;
    clear: both;
  }
`;

export const NavLogo = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

// ul 스타일
export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: end;
  align-items: center;
  height: 100%;
`;

// li 스타일 (float: left 적용)
export const NavItem = styled.li<{ isActive?: boolean }>`
  float: left;
  margin: 0 15px;
  font-weight: ${(props) => (props.isActive ? '600' : '500')};
  text-decoration: ${(props) => (props.isActive ? 'underline' : 'none')};
  text-underline-offset: 4px;
  cursor: pointer;

  &:hover {
    font-weight: 600;
    text-decoration: underline;
  }
`;
