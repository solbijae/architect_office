import { NavContainer, NavList, NavItem } from 'styles/Navbar';

function Navbar() {
  return (
    <NavContainer>
      <NavList>
        <NavItem>PROJECTS</NavItem>
        <NavItem>PROFILE</NavItem>
        <NavItem>HIGHLIGHTS</NavItem>
        <NavItem>CONTACT</NavItem>
      </NavList>
    </NavContainer>
  );
}

export default Navbar;
