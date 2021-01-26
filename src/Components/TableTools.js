function TableTools({ href, icon, iconName, text }) {
  return (
    <>
      <a class="btn" href={href}>
        {icon ? <i class={iconName}></i> : ""}
        {text}
      </a>
    </>
  );
}

export default TableTools;
