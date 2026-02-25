import '../styles/components/Keypad.css'

const Keypad = ({ onKeyPressed }) => {
  const KEYS = {
    others: ["C", "AC",],
    digits: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    extras: ['=', '.'],
    operations: ["+", "-", "x", "/", "%"],
  };

  return <div id="calc-keypad">
    {Object.entries(KEYS).map(([group, values]) => (
      <div key={group} className={group}>
        {values.map((value) => (
          <button key={value} onClick={() => onKeyPressed(String(value))}>{value}</button>
        ))}
      </div>
    ))}
  </div>;
};

export default Keypad;
