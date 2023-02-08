function Header({ totalWins, totalLosses }) {
  return (
    <header>
      <h1>Word Game</h1>
      <div className="total-score">
        {totalWins} / {totalLosses}
      </div>
    </header>
  );
}

export default Header;
