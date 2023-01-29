function Cell({letter, status, key}) {
  return <div className={`cell ${status}`} key={key}>
    {letter ?? ""}
  </div>;
}

export default Cell;
