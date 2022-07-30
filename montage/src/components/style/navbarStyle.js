import styled from "styled-components";
import {NavLink as Link} from "react-router-dom";

export const Nav = styled.nav`
  background: white;
  height: 80px;
  width: 65.2%;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
`;

export const NavLink = styled(Link)`
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding-right: 20px;
  margin-right: -180px;
  margin-left: -80px;
  margin-top: 10px;
  height: 120%;
  width: 13%;
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
  margin-right: -80px;

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
  margin-top: 15px;
  margin-right: 60px;
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
  margin-top: 30px;
  margin-left: -340px;
  cursor: pointer;
  &:hover {
    color: #dfdfdf;
  }
`;
