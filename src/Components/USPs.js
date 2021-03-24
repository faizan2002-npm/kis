import { Link } from "react-router-dom";
function USPs({ icon, iconName, text, href }) {
  return (
    <>
      <div className="col-md-3">
        <div className="icons">
          <Link id="main-btns" to={href}>
            {icon ? <i className={iconName}></i> : ""}
            <span
              dangerouslySetInnerHTML={{
                __html: text,
              }}
            ></span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default USPs;
