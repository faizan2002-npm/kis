import { Link } from "react-router-dom";

function Menu(props) {
  return (
    <>
      <ul>
        <li>
          <Link to="/">
            <i class="fa fa-laptop"></i> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/">
            <i class="fa fa-calendar"></i> Calendar
          </Link>
        </li>
        <li>
          <Link to="/">
            <i class="fa fa-graduation-cap"></i> Subjects
          </Link>
        </li>
        <li>
          <Link to="/teachers">
            <i class="fa fa-users"></i> Teachers
          </Link>
        </li>
        <li>
          <Link to="/">
            <i class="fa fa-address-card"></i> Students
          </Link>
        </li>
        <li>
          <Link to="/parents">
            <i class="fa fa-user"></i> Parents
          </Link>
        </li>
        <li>
          <Link to="/">
            <i class="fa fa-exchange"></i> Enrollment
          </Link>
        </li>
        <li>
          <Link to="/">
            <i class="fa fa-file-text"></i> Reports
          </Link>
        </li>
        <li>
          <Link to="/">
            <i class="fa fa-copy"></i> Transcripts
          </Link>
        </li>
        <li>
          <Link to="/">
            <i class="fa fa-area-chart"></i> Statistics
          </Link>
        </li>
        <li>
          <Link to="/">
            <i class="fa fa-cog"></i> Configuration
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Menu;
