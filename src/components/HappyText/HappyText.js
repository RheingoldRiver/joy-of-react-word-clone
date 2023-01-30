function HappyText({ currentIndex }) {
  return (
    <>
      <strong>Congratulations!</strong> Got it in{" "}
      <strong>
        {currentIndex + 1} {currentIndex === 0 ? "guess" : "guesses"}!
      </strong>
    </>
  );
}

export default HappyText;
