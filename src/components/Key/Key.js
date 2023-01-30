function Key({ children, status }) {
  let className = status ? `keyboard-cell ${status}` : "keyboard-cell";
  return <div className={className}>{children}</div>;
}

export default Key;
