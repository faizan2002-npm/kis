import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Parents from "./Pages/Parents";
import Teachers from "./Pages/Teachers";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/parents" exact component={Parents} />
          <Route path="/teachers" exact component={Teachers} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
