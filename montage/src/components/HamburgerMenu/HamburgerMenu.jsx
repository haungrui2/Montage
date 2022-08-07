import React, {useRef, useEffect} from "react";
import styled from "styled-components";
import {MenuToggle} from "./MenuToggle";
import {useState} from "react";
import {motion} from "framer-motion";
import {NavMenu} from "./NavMenu";

const HamburgerMenuContainer = styled.div`
  display: flex;
`;

const MenuContainer = styled(motion.div)`
  min-width: 200px;
  width: 80%;
  max-width: 16%;
  height: 100%;
  background-color: #ffeecd;
  box-shadow: -2px 0 10px rgba(15, 15, 15, 0.3);
  z-index: 30;
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

let useClickOutside = (handler) => {
    let domNode = useRef();

    useEffect(() => {
        let maybeHandler = (e) => {
            if (!domNode.current.contains(e.target)) {
                handler();
            }
        };
        document.addEventListener("mousedown", maybeHandler);
        return () => {
            document.removeEventListener("mousedown", maybeHandler);
        };
    });
    return domNode;
};

export function HamburgerMenu(props) {
    const [isOpen, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!isOpen);
    }

    let domNode = useClickOutside(() => {
        setOpen(false);
    });

    return (
        <HamburgerMenuContainer ref={domNode}>
            <MenuToggle toggle={toggleMenu} isOpen={isOpen}/>
            <MenuContainer initial={false} animate={isOpen ? "open" : "closed"}
                           variants={menuVariants} transition={menuTransition}>
                <NavMenu isOpen={isOpen}/>
            </MenuContainer>
        </HamburgerMenuContainer>
    );
}
