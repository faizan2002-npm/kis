import { Link } from "react-router-dom";

function Menu(props) {
  return (
    <>
      <ul>
        <li>
          <Link to="/">
            <i className="fa fa-laptop"></i> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/">
            <i className="fa fa-calendar"></i> Calendar
          </Link>
        </li>
        <li>
          <Link to="/">
            <i className="fa fa-graduation-cap"></i> Subjects
          </Link>
        </li>
        <li>
          <Link to="/teacher-list">
            <i className="fa fa-users"></i> Teachers
          </Link>
        </li>
        <li>
          <Link to="/student-list">
            <i className="fa fa-address-card"></i> Students
          </Link>
        </li>
        <li>
          <Link to="/parents">
            <i className="fa fa-user"></i> Parents
          </Link>
        </li>
        <li>
          <Link to="/">
            <i className="fa fa-exchange"></i> Enrollment
          </Link>
        </li>
        <li>
          <Link to="/">
            <i className="fa fa-file-text"></i> Reports
          </Link>
        </li>
        <li>
          <Link to="/">
            <i className="fa fa-copy"></i> Transcripts
          </Link>
        </li>
        <li>
          <Link to="/">
            <i className="fa fa-area-chart"></i> Statistics
          </Link>
        </li>
        <li>
          <Link to="/">
            <i className="fa fa-cog"></i> Configuration
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Menu;
