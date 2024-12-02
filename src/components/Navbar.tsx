import { NavContainer, NavLogo, NavList, NavItem } from 'styles/Navbar';
import { Link, useLocation } from 'react-router-dom'; // Link 임포트

function Navbar() {
  const location = useLocation();

  return (
    <NavContainer>
      <NavLogo>
        <Link to="/">
          <img src="/assets/images/nav/logo.png" alt="top logo" />
        </Link>
      </NavLogo>
      <NavList>
        <NavItem isActive={location.pathname === '/'}>
          <Link to="/">HOME</Link>
        </NavItem>
        <NavItem isActive={location.pathname === '/projects'}>
          <Link to="/projects">PROJECTS</Link>
        </NavItem>
        <NavItem isActive={location.pathname === '/profile'}>
          <Link to="/profile">PROFILE</Link>
        </NavItem>
        <NavItem isActive={location.pathname === '/highlights'}>
          <Link to="/highlights">HIGHLIGHTS</Link>
        </NavItem>
        <NavItem isActive={location.pathname === '/contact'}>
          <Link to="/contact">CONTACT</Link>
        </NavItem>
      </NavList>
    </NavContainer>
  );
}

export default Navbar;
