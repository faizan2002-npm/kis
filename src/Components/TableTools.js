function TableTools({ href, icon, iconName, text }) {
  return (
    <>
      <a className="btn" href={href}>
        {icon ? <i className={iconName}></i> : ""}
        {text}
      </a>
    </>
  );
}

export default TableTools;
