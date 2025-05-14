export default function SvenskaGame() {
    const words = {
      cat: "katt",
      dog: "hund",
      apple: "äpple",
      water: "vatten",
      book: "bok"
    };
  
    return (
      <div className="game">
        <h2>Translate to Swedish</h2>
        <ul>
          {Object.entries(words).map(([eng, swe]) => (
            <li key={eng}>{eng} ➝ <strong>{swe}</strong></li>
          ))}
        </ul>
      </div>
    );
  }
  