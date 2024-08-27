import Router, { Route } from "preact-router";
import "./app.css";
import Home from "./components/Home";
import Line from "./line";
import Momentum from "./momentum";
import Stay from "./stay";

export function App() {
  return (
    <div>
      <Router>
        <Route path="/" component={Home} />
        <Route path="/line" component={Line} />
        <Route path="/momentum" component={Momentum} />
        <Route path="/stay" component={Stay} />
      </Router>
    </div>
  );
}
