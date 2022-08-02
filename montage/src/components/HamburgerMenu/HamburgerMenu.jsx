import React from "react";
import styled from "styled-components";
import {MenuToggle} from "./MenuToggle";
import {useState} from "react";
import {motion} from "framer-motion";
import {NavMenu} from "./NavMenu"

const HamburgerMenuContainer = styled.div`
  display: flex;
`;

const MenuContainer = styled(motion.div)`
  min-width: 200px;
  width: 80%;
  max-width: 16%;
  height: 100%;
  background-color: #eae4d8;
  box-shadow: -2px 0 2px rgba(15, 15, 15, 0.3);
  z-index: 90;
  position: fixed;
  top: 0;
  right: 0;
  transform: translateX(4em);
  user-select: none;
  padding: 1em 2.5em;
`;

const menuVariants = {
  open: {
    transform: "translateX(3%)"
  },
  closed: {
    transform: "translateX(103%)",
  }
};

const menuTransition = {
  type: "spring",
  duration: 1,
  stiffness: 33,
  delay: 0.1
};

export function HamburgerMenu(props) {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  }

  return (
    <HamburgerMenuContainer>
     <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
     <MenuContainer initial={false} animate={isOpen ? "open" : "closed"}
     variants={menuVariants} transition={menuTransition}>
      <NavMenu isOpen={isOpen} />
     </MenuContainer>
    </HamburgerMenuContainer>
  );
}
