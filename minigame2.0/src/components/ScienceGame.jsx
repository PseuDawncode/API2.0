export default function ScienceGame() {
    const questions = [
      { q: "What planet is known as the Red Planet?", a: "Mars" },
      { q: "What gas do plants absorb from the atmosphere?", a: "Carbon Dioxide" }
    ];
  
    return (
      <div className="game">
        <h2>Science Quiz</h2>
        <ul>
          {questions.map((item, idx) => (
            <li key={idx}>
              {item.q} ➝ <strong>{item.a}</strong>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  