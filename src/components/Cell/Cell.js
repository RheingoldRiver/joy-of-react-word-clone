function Cell({letter, status, id}) {
  return <span className={`cell ${status}`} key={id}>
    {letter ?? ""}
  </span>;
}

export default Cell;
