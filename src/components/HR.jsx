import React from "react";
import { Link } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

import Test from "../Test.jsx";
import Table from "./Table.jsx";

const links = [
  { name: "Employees", path: "/hr/one", component: <Table /> },
  { name: "more", path: "/hr/two", component: <Test /> },
  { name: "more", path: "/hr/three", component: <Test /> },
  { name: "more", path: "/hr/four", component: <Test /> },
];

const HR = () => {
  return (
    <section>
      <ul
        style={{
          listStyleType: "none",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: " 0 3em ",
        }}
      >
        {links.map((x) => (
          <li key={x.name}>
            <Link exact to={x.path}>
              <p>{x.name}</p>
            </Link>
          </li>
        ))}
      </ul>
      <Switch>
        {" "}
        {links.map((x, i) => (
          <Route path={x.path} key={i}>
            {" "}
            {x.component}{" "}
          </Route>
        ))}{" "}
      </Switch>
    </section>
  );
};

export default HR;
