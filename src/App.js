import styled from "styled-components";

import { useSelector } from "react-redux";

import { home } from "react-icons-kit/icomoon/home";
import { globe } from "react-icons-kit/fa/globe";
import { wrench } from "react-icons-kit/fa/wrench";
import { truck } from "react-icons-kit/fa/truck";

import Test from "./Test.jsx";
import Test2 from "./Test2.jsx";

import Menu from "./components/Menu.jsx";
import Heading from "./components/Heading.jsx";
import Content from "./components/Content.jsx";
import Table from "./components/Table.jsx";

const links = [
  { name: "Global", path: "/one", icon: globe, component: <Table /> },
  { name: "Corporate", path: "/two", icon: home, component: <Test2 /> },
  { name: "Settings", path: "/three", icon: wrench, component: <Test /> },
  { name: "Delivery", path: "/four", icon: truck, component: <Test2 /> },
];

const App = () => {
  const sideBar = useSelector((state) => state.menu.sideBar);
  return (
    <Container>
      <Heading />
      <Main>
        {sideBar || <Menu links={links} />}
        <Content links={links} />
      </Main>
    </Container>
  );
};

export default App;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  align-content: stretch;
  height: 100vh;
`;

const Main = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
`;
