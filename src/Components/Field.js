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
        <div class="form-group">
          {label ? <label for={name}>{placeholder}</label> : ""}
          <div class="input-group">
            {icon ? (
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class={iconName}></i>
                </span>
              </div>
            ) : (
              ""
            )}
            <input
              name={name}
              id={name}
              class={`form-control ${className}`}
              placeholder={label ? "" : placeholder}
              type={type}
            />
          </div>
        </div>
      ) : (
        <div class="form-group login-btn-area">
          <button type={btnType} class="btn btn-primary btn-block">
            {btnText}
          </button>
        </div>
      )}
    </>
  );
}

export default Field;
