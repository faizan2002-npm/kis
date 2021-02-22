import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Parents from "./Pages/Parents";
import Teachers from "./Pages/Teachers";
import Student from "./Pages/Student";
import StudentList from "./Pages/StudentList";
import TeacherList from "./Pages/TeacherList";
import TeacherDetails from "./Pages/TeacherDetails";
import ClassDetails from "./Pages/ClassDetails";
import TopPerformer from "./Pages/TopPerformer";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/parents" exact component={Parents} />
          <Route path="/student" exact component={Student} />
          <Route path="/student-list" exact component={StudentList} />
          <Route path="/teachers" exact component={Teachers} />
          <Route path="/teacher-list" exact component={TeacherList} />
          <Route path="/teacher" exact component={TeacherDetails} />
          <Route path="/class" exact component={ClassDetails} />
          <Route path="/top-performer" exact component={TopPerformer} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
