import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLink,
} from "./navbarElements";
import Logo from "../../Assets/images/logo.svg";
import { FaTwitch, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Media } from "../../styles/media";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <img src={Logo} alt="Logo" />
          </NavLogo>
          <Media greaterThan="md">
            <NavMenu>
              <NavItem>
                <NavLink to="">Eventos</NavLink>
                <NavLink to="">Cafecito</NavLink>
                <NavLink to="">
                  <FaTwitter />
                </NavLink>
                <NavLink to="">
                  <FaInstagram />
                </NavLink>
                <NavLink to="">
                  <FaTwitch />
                </NavLink>
                <NavLink to="">
                  <FaLinkedin />
                </NavLink>
              </NavItem>
            </NavMenu>
          </Media>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
