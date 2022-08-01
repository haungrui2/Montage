import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import {useSelector} from 'react-redux';
import {useState} from "react";

const NavMenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const NavList = styled.ul`
  padding: 1.4em 0em;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const NavLink = styled(motion.li)`
  font-weight: 600;
  height: 40px;
  width: 55px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 4px;
  background: rgb(241, 196, 15);
  border: none;
  outline: none;

  a {
    text-decoration: none;
    color: white;
    font-size: 18px;
    transition: all 200ms ease-in-out;
    margin-left: -5px;
    margin-top: 5px;
  }

  &:hover {
    filter: brightness(1.1);
    a {
      transition: all 0.2s ease-in-out;
      color: white;
    }
  }
`;

const variants = {
  show: {
    transform: "translateX(0em)",
    opacity: 1
  },
  hide: {
    transform: "translateX(3em)",
    opacity: 0
  }
}

export function NavMenu({isOpen}) {
  const profileData = useSelector(state => state.others.profile.data);
  // const [login, setLogin] = useState(true);

  let adminDisplay = "none";
  let login = false;
  if (profileData.isAdmin){
      adminDisplay = "block";
  }
  if (profileData.isLogin) {
    login = true;
  }

  return (
    <NavMenuContainer>
      <NavList>
        <NavLink initial={false} animate={isOpen ? "show" : "hide"}
        variants={{
          show: {...variants.show, transition: {delay: 0.1, duration: 0.2}},
          hide: {...variants.hide, transition: {delay: 0.05, duration: 0.05}},
        }}>
          <a href="/">Home</a>
        </NavLink>

        {login ? (
        <NavLink initial={false} animate={isOpen ? "show" : "hide"}
        variants={{
          show: {...variants.show, transition: {delay: 0.2, duration: 0.2}},
          hide: {...variants.hide, transition: {delay: 0.1, duration: 0.05}},
        }}>
          <a href="/">Logout</a>
        </NavLink>)
      : (
        <NavLink initial={false} animate={isOpen ? "show" : "hide"}
      variants={{
        show: {...variants.show, transition: {delay: 0.2, duration: 0.2}},
        hide: {...variants.hide, transition: {delay: 0.1, duration: 0.05}},
      }}>
        <a href="/Login">Login</a>
      </NavLink>)}

        <NavLink initial={false} animate={isOpen ? "show" : "hide"}
        variants={{
          show: {...variants.show, transition: {delay: 0.3, duration: 0.2}},
          hide: {...variants.hide, transition: {delay: 0.15, duration: 0.05}},
        }} style={{display: adminDisplay}}>
          <a href="/Upload">Upload</a>
        </NavLink>

      </NavList>
    </NavMenuContainer>
  );
}
