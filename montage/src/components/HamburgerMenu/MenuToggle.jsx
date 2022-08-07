import {motion} from "framer-motion";
import React from "react";
import styled from "styled-components";

const Button = styled.div`
  z-index: 99;
  cursor: pointer;
  margin-left: 400px;
  margin-top: 14px;
`;

const Path = (props) => (
    <motion.path fill="transparent" strokeLinecap="round" strokeWidth="3" {...props}/>
)

const transition = {duration: 0.3};

export function MenuToggle({toggle, isOpen}) {
    return (
        <Button onClick={toggle}>
            <svg width="28" height="28" viewBox="0 0 28 28">
                <Path animate={isOpen ? "open" : "closed"} initial={false} variants={{
                    closed: {d: "M 2 2.5 L 26 2.5", stroke: "rgb(241, 196, 15)"},
                    open: {d: "M 3 16.5 L 17 2.5", stroke: "rgb(241, 196, 15)"}
                }} transition={transition}/>
                <Path d="M 2 9.423 L 26 9.423" stroke="rgb(241, 196, 15)"
                      animate={isOpen ? "open" : "closed"} initial={false} variants={{
                    closed: {opacity: 1},
                    open: {opacity: 0},
                }} transition={transition}/>
                <Path animate={isOpen ? "open" : "closed"} initial={false} variants={{
                    closed: {d: "M 2 16.346 L 26 16.346", stroke: "rgb(241, 196, 15)"},
                    open: {d: "M 3 2.5 L 17 16.346", stroke: "rgb(241, 196, 15)"},
                }} transition={transition}/>
            </svg>
        </Button>
    );
}
