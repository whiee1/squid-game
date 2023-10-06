const Card = ({ card, drawnNumbers }) => {
  const isDrawn = (number) => {
    if (drawnNumbers.includes(number)) {
      return true;
    }
  };

  return (
    <>
      <h1>This card is the losing card</h1>
      <div className="card">
        {card.map((row, i) => (
          <div className="row" key={i}>
            {row.map((box, j) => (
              <span
                key={j}
                style={{ fontWeight: isDrawn(box) ? "bold" : "normal" }}
              >
                {box}
              </span>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
