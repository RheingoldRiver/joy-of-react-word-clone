function Key({children, status}) {
  return <div className={`keyboard-cell ${status}`}>{children}</div>;
}

export default Key;
