function SadText({ answer }) {
  return (
    <>
      Sorry, the correct answer is <strong>{answer.toUpperCase()}</strong>.
    </>
  );
}

export default SadText;
