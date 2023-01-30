function Cell({ letter, status }) {
  let className = status ? `cell ${status}` : "cell";
  return <span className={className}>{letter ?? ""}</span>;
}

export default Cell;
