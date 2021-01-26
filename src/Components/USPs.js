function USPs({ icon, iconName, text, href }) {
  return (
    <>
      <div class="col-md-3">
        <div class="icons">
          <a id="main-btns" href={href}>
            {icon ? <i class={iconName}></i> : ""}
            <span>{text}</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default USPs;
