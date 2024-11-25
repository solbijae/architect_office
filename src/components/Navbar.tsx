import { NavContainer, NavList, NavItem } from 'styles/Navbar';
import { Link, useLocation } from 'react-router-dom'; // Link 임포트

function Navbar() {
  const location = useLocation();

  return (
    <NavContainer>
      <NavList>
        <NavItem isActive={location.pathname === '/'}>
          <Link to='/'>HOME</Link>
        </NavItem>
        <NavItem isActive={location.pathname === '/projects'}>
          <Link to='/projects'>PROJECTS</Link>
        </NavItem>
        <NavItem isActive={location.pathname === '/profile'}>
          <Link to='/profile'>PROFILE</Link>
        </NavItem>
        <NavItem>HIGHLIGHTS</NavItem>
        <NavItem>CONTACT</NavItem>
      </NavList>
    </NavContainer>
  );
}

export default Navbar;
