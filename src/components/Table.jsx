import styled from "styled-components";
import React from "react";
import Search from "./Search";
import { useDispatch, useSelector } from "react-redux";
import createUser from "../redux/actions/tableActions.js";

import { useQuery } from "@apollo/react-hooks";
import { gql } from "@apollo/client";

const getEmployees = gql`
  query {
    employees {
      id
      name
      hiredOn
      department {
        name
      }
    }
  }
`;

const Table = () => {
  const { data, loading } = useQuery(getEmployees);
  const showUserModal = useSelector(
    (state) => state.tableReducer.showUserModal
  );
  const dispatch = useDispatch();
  const createUserHandler = (e) => {
    e.preventDefault();
    dispatch(createUser());
  };
  const showPop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    return alert(e.target.innerText);
  };
  return (
    <Container>
      {showUserModal && <CreateUser />}
      <h1>Employees</h1>
      <ButtonRow>
        <div>
          <button onClick={createUserHandler}>new </button>
          <button onClick={createUserHandler}>new group </button>
          <button>+</button>
        </div>
        <div style={{ display: "flex" }}>
          <select id="" name="">
            <option value="one">one</option>
            <option value="one">one</option>
            <option value="one">one</option>
            <option value="one">one</option>
            <option value="one">one</option>
            <option value="one">one</option>
            <option value="one">one</option>
          </select>
          <Search />
        </div>
      </ButtonRow>
      <TableWrapper>
        <li>
          <span>ID</span>
          <span>Name</span>
          <span>Hired On</span>
          <span>Department</span>
        </li>
        {loading ||
          data.employees.map((x, i) => (
            <li onClick={showPop} key={i}>
              <span>{x.id.substring(3, 5)}</span>
              <span>{x.name}</span>
              <span>{x.hiredOn.substring(0, 7)}</span>
              <span>{x.department.name}</span>
            </li>
          ))}
      </TableWrapper>
    </Container>
  );
};

export default Table;

const CreateUser = () => {
  const dispatch = useDispatch();
  const createUserHandler = (e) => {
    if (e.target !== null) {
      e.preventDefault();
    }
    dispatch(createUser());
  };
  return (
    <CreateUserWrapper>
      <form action="">
        <CloseButton onClick={createUserHandler}> X </CloseButton>
        <h2>Create New Record</h2>
        <div>
          <label htmlFor="">Firstname</label>
          <input id="" type="text" name="" />
        </div>
        <div>
          <label htmlFor="">Lastname</label>
          <input id="" type="text" name="" />
        </div>
        <div>
          <label htmlFor="">Other</label>
          <input id="" type="text" name="" />
        </div>
        <div>
          <label htmlFor="">Other</label>
          <input id="" type="text" name="" />
        </div>
        <div>
          <label htmlFor="">Other</label>
          <input id="" type="text" name="" />
        </div>
        <div>
          <label htmlFor="">Other</label>
          <input id="" type="text" name="" />
        </div>
        <input type="submit" value="SUBMIT" onClick={createUserHandler} />
      </form>
    </CreateUserWrapper>
  );
};

const CloseButton = styled.button`
  display: table-cell;
  vertical-align: middle;
  margin-left: auto;
  margin-right: 0;
  padding: 0.5em 0.8em;
  background: #000066;
  color: #fff;
  border: none;
  border-radius: 2px;
  font-weight: 900;
`;

const ButtonRow = styled.div`
  margin-bottom: 1em;
  padding: 0.2em;
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  line-height: 1.6em;
  align-items: baseline;
  justify-content: space-between;
  input {
    height: 1.8em;
    flex: 1;
  }
  button {
    background: #000066dd;
    color: #fff;
    border: 1px solid white;
    border-radius: 4px;
    padding: 0.5em 1.5em;
    &:hover {
      opacity: 0.8;
      cursor: pointer;
    }
  }
  select {
    height: 2.2em;
  }
  button:first-child {
    border-radius: 4px 0 0 4px;
  }
  button:nth-child(2) {
    border-radius: 0;
  }
  button:nth-child(3) {
    border-radius: 0 4px 4px 0;
  }
`;

const Container = styled.section`
  user-select: none;
  margin: 0.5em;
  padding: 0.5em;
  border: 1px solid silver;
  border-radius: 4px;
  h1 {
    font-size: 1.4em;
    &::first-letter {
      text-transform: capitalize;
    }
  }
`;

const TableWrapper = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: flex;
  align-self: stretch;
  flex-direction: column;
  & li:first-child {
    text-transform: uppercase;
    font-weight: 700;
    border-radius: 4px 4px 0 0;
    background: #000066;
    color: #fff;
  }
  & :last-child {
    border-radius: 0 0 4px 4px;
  }
  li {
    padding: 0.5em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    :not(:first-child):hover {
      opacity: 0.5;
      cursor: pointer;
    }
    span {
      width: 25%;
    }
  }
  & li:nth-child(even) {
    background: #00006633;
  }
`;

const CreateUserWrapper = styled.div`
  background: #000000cc;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 2;
  form {
    margin: 10% auto;
    translate: transform(50%, 50%);
    width: 30em;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    background: white;
    padding: 2em;
    h2 {
      margin: 0;
      margin-bottom: 1em;
    }
    div {
      display: flex;
      justify-content: space-between;
      &:first-letter {
        text-transform: capitalize;
      }
    }
    input[type="submit"] {
      height: 2em;
      width: 300px;
      margin: 0.6em auto;
      border-radius: 4px;
      border: none;
      background: #000066;
      color: #fff;
    }
  }
`;
