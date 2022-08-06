import styled from "styled-components";
import {NavLink as Link} from "react-router-dom";

export const Nav = styled.nav`
  width: 100%;
  height: 70px;
  // background: #eae4d8;
  backgound: #ffeecd;
  border-bottom: 0px solid white;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 1.5em;
`;

export const NavLink = styled(Link)`
  color: black;
  backgound-color: transparent;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding-right: 20px;
  margin-right: 120px;
  height: 120%;
  width: 10%;
  cursor: pointer;
  font-size: 28px;

  &:hover {
    color: 	#808080;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 100px;
  margin-left: 130px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: rgb(241, 196, 15);
  padding: 10px 22px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    transition: all 0.2s ease-in-out;
    filter: brightness(1.15);
    color: #fff;
  }
`;

export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 28em;
  height: 3.8em;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0px 2px 12px 3px rgba(0, 0, 0, 0.14);
  overflow: hidden;
  margin-top: 0px;
  margin-right: 50px;
  margin-left: 50px;
`;

export const SearchInputContainer = styled.div`
  width: 100%;
  min-height: 4em;
  align-items: center;
  position: relative;
  padding: 0px 15px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  font-size: 21px;
  color: #12112e;
  font-weight: 500;
  border-radius: 6px;
  background-color: transparent;
  position: relative;
  z-index: 10;

  &:focus {
    outline: none;
    &::placeholder {
      opacity: 0;
    }
  }

  &::placeholder {
    color: #bebebe;
    transition: all 250ms ease-in-out;
  }
`;

export const SearchIcon = styled.span`
  color: #bebebe;
  font-size: 30px;
  margin-top: 10px;
  margin-left: -100px;
  cursor: pointer;
  z-index: 20;
  &:hover {
    color: #dfdfdf;
  }
`;
