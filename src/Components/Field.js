function Field({
  element,
  name,
  type,
  placeholder,
  className,
  icon,
  iconName,
  label,
  btnType,
  btnText,
}) {
  return (
    <>
      {element == "input" ? (
        <div className="form-group">
          {label ? <label for={name}>{placeholder}</label> : ""}
          <div className="input-group">
            {icon ? (
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className={iconName}></i>
                </span>
              </div>
            ) : (
              ""
            )}
            <input
              name={name}
              id={name}
              className={`form-control ${className}`}
              placeholder={label ? "" : placeholder}
              type={type}
            />
          </div>
        </div>
      ) : (
        <div className="form-group login-btn-area">
          <button type={btnType} className="btn btn-primary btn-block">
            {btnText}
          </button>
        </div>
      )}
    </>
  );
}

export default Field;
