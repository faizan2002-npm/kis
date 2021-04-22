import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Parents from "./Pages/Parents";
import Teachers from "./Pages/Teachers";
import Student from "./Pages/Student";
import StudentList from "./Pages/StudentList";
import TeacherList from "./Pages/TeacherList";
import TeacherDetails from "./Pages/TeacherDetails";
import ClassDetails from "./Pages/ClassDetails";
import PerformanceTop from "./Pages/Performance/PerformanceTop";
import TeacherDashboard from "./Pages/Teacher";
import ClassList from "./Pages/ClassList";
import PerformanceDashboard from "./Pages/Performance";
import MyClass from "./Pages/Class";
import PerformanceByGrade from "./Pages/Performance/PerformanceByGrade";
import PerformanceBySubject from "./Pages/Performance/PerformanceBySubject";
import PerformanceLeast from "./Pages/Performance/PerformanceLeast";
import PerformanceList from "./Pages/Performance/PerformanceList";
import ParentDashboard from "./Pages/Parent/index";
import ReportsDashboard from "./Pages/Reports";
import TestsReportsByWeeks from "./Pages/Reports/TestsReportsByWeeks";
import TestsReportsByTerms from "./Pages/Reports/TestsReportsByTerms";
import AssignmentsReportsByWeeks from "./Pages/Reports/AssignmentsReportsByWeeks";
import AssignmentsReportsByTerms from "./Pages/Reports/AssignmentsReportsByTerms";
import SubjectList from "./Pages/SubjectList";
// import TeacherDashboard from './Pages/Teacher/index';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={TeacherDashboard} />
          <Route path="/login" exact component={Login} />
          <Route path="/parents" exact component={Parents} />
          {/* Class */}
          <Route path="/class-detail" exact component={ClassDetails} />
          <Route path="/class-list" exact component={ClassList} />
          <Route path="/class" exact component={MyClass} />
          {/* Student */}
          <Route path="/student" exact component={Student} />
          <Route path="/student-list" exact component={StudentList} />
          {/* Teacher */}
          <Route path="/teacher-index" exact component={TeacherDashboard} />
          <Route path="/teachers" exact component={Teachers} />
          <Route path="/teacher-list" exact component={TeacherList} />
          <Route path="/teacher" exact component={TeacherDetails} />
          {/* Performance */}
          <Route path="/performer" exact component={PerformanceDashboard} />
          <Route
            path="/performance-grade"
            exact
            component={PerformanceByGrade}
          />
          <Route
            path="/performance-subject"
            exact
            component={PerformanceBySubject}
          />
          <Route path="/performance-least" exact component={PerformanceLeast} />
          <Route path="/performance-list" exact component={PerformanceList} />
          <Route path="/performance-top" exact component={PerformanceTop} />
          {/* Parent */}
          <Route path="/parent-index" exact component={ParentDashboard} />
          {/* Reports */}
          <Route path="/reports" exact component={ReportsDashboard} />
          <Route
            path="/reports/assignments-reports-by-terms"
            exact
            component={AssignmentsReportsByTerms}
          />
          <Route
            path="/reports/assignments-reports-by-weeks"
            exact
            component={AssignmentsReportsByWeeks}
          />
          <Route
            path="/reports/tests-reports-by-terms"
            exact
            component={TestsReportsByTerms}
          />
          <Route
            path="/reports/tests-reports-by-weeks"
            exact
            component={TestsReportsByWeeks}
          />
          {/* Subject */}
          <Route path="/subjects" exact component={SubjectList} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
