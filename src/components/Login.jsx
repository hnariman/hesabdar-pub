import styled from "styled-components";

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
export default Login;

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
