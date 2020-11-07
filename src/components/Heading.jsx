import styled from "styled-components";

//import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import toggleMenu from "../redux/actions/menu.js";
import Search from "./Search";

const Heading = () => {
  const dispatch = useDispatch();
  const sideBar = useSelector((state) => state.menu.sideBar);
  return (
    <HeadingWrapper>
      <Button onClick={() => dispatch(toggleMenu())}>
        {sideBar ? "MENU " : "<< "}
      </Button>
      <Search />
    </HeadingWrapper>
  );
};

const Button = styled.button`
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
  border-radius: 4px;
  padding: 0.5em 1.5em;
  border: none;
  background: #000066dd;
  color: #fff;
`;

const HeadingWrapper = styled.div`
  user-select:none;
  display: flex;
  flex-direction: row;
  background: #fff;
  box-shadow: 0 0 5px silver;
  padding: .3em;
  align-items: baseline;
  & :last-child {
    margin-left:auto;
    margin:right:2em;
  }
`;

export default Heading;
