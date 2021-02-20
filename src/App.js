import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Parents from "./Pages/Parents";
import Teachers from "./Pages/Teachers";
import Student from "./Pages/Student";
import StudentList from "./Pages/StudentList";
import TeacherList from "./Pages/TeacherList";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/parents" exact component={Parents} />
          <Route path="/teachers" exact component={Teachers} />
          <Route path="/student" exact component={Student} />
          <Route path="/student-list" exact component={StudentList} />
          <Route path="/teacher-list" exact component={TeacherList} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
