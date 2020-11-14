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

const links = [
  { name: "App", path: "/hr", icon: users, component: <HR /> },
  { name: "Corporate", path: "/two", icon: home, component: <Test /> },
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

const Login = ({ setLogged }) => {
  const auth = () => setLogged(true);
  return (
    <FormContainer>
      <form action="">
        <h1>HESABDAR LOGO</h1>
        <label htmlFor="">username</label>
        <input id="" type="text" name="" />
        <label htmlFor="">password</label>
        <input id="" type="password" name="" />
        <button onClick={auth}>Login</button>
      </form>
    </FormContainer>
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

const FormContainer = styled.div`
  form {
    button {
      border: none;
      border-radius: 4px;
      background: #000066;
      color: #fff;
      padding: 1em;
      margin-top: 1em;
    }
    margin: 7em auto;
    width: 20%;
    display: flex;
    gap: 0.5em;
    flex-flow: column nowrap;
  }
`;
