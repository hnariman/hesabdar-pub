import styled from "styled-components";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";

const Menu = ({ links }) => {
  return (
    <MenuWrapper>
      {links.map((x) => (
        <li>
          <Link exact to={x.path}>
            <div style={{}}>
              <Icon icon={x.icon} size={24} />
              <p>{x.name}</p>
            </div>
          </Link>
        </li>
      ))}
    </MenuWrapper>
  );
};

export default Menu;

const MenuWrapper = styled.ul`
  color: #fff;
  background: #000066;
  padding: 0.2em;
  margin: 0;
  flex-basis: 70px;
  list-style-type: none;
  user-select: none;
  li {
    padding: 0;
    margin: 3em 1em;
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  a {
    text-decoration: none;
    color: #fff;
    &:visited,
    &:hover {
      color: white;
    }
    &:active {
      color: #000077;
    }
  }
`;
