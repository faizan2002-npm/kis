function USPs({ icon, iconName, text, href }) {
  return (
    <>
      <div className="col-md-3">
        <div className="icons">
          <a id="main-btns" href={href}>
            {icon ? <i className={iconName}></i> : ""}
            <span>{text}</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default USPs;
