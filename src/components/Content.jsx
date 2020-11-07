import { Switch, Route } from "react-router-dom";
const Content = ({ links }) => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Switch>
        {links.map((x, i) => (
          <Route path={x.path} key={i}>
            {x.component}
          </Route>
        ))}
      </Switch>
    </div>
  );
};

export default Content;
