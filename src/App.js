// ================= React =================
import { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

// ================= Icons =================
import { home } from "react-icons-kit/icomoon/home";
import { users } from "react-icons-kit/icomoon/users";
import { wrench } from "react-icons-kit/fa/wrench";
import { truck } from "react-icons-kit/fa/truck";

// ================= Components ============
import Test from "./Test.jsx";
import Menu from "./components/Menu.jsx";
import Heading from "./components/Heading.jsx";
import Content from "./components/Content.jsx";
import HR from "./components/HR.jsx";
import Login from "./components/Login";

const links = [
  { name: "HR", path: "/hr", icon: users, component: <HR /> },
  { name: "Home", path: "/two", icon: home, component: <Test /> },
  { name: "Settings", path: "/three", icon: wrench, component: <Test /> },
  { name: "Delivery", path: "/four", icon: truck, component: <Test /> },
];

const App = () => {
  const [logged, setLogged] = useState(false);
  return (
    <Container>
      {logged || <Login setLogged={setLogged} />}
      {logged && <Auth />}
    </Container>
  );
};
export default App;

const Auth = () => {
  const sideBar = useSelector((state) => state.menu.sideBar);
  return (
    <>
      <Heading />
      <Main>
        {sideBar && <Menu links={links} />}
        <Content links={links} />
      </Main>
    </>
  );
};

// ================= Styling =================
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
