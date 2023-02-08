function TotalScore({ totalWins, totalLosses }) {
  return (
    <div className="total-score">
      {totalWins} / {totalLosses}
    </div>
  );
}

export default TotalScore;
