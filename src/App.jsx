import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    if (value === '÷') value = '/';
    if (value === '×') value = '*';
    if (value === '+/–') {
      if (input) setInput((prev) => (parseFloat(prev) * -1).toString());
      return;
    }
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString()); // Use a parser in real apps
    } catch {
      setInput('Error');
    }
  };

  const buttons = [
    { label: 'AC', class: 'secondary' },
    { label: '+/–', class: 'secondary' },
    { label: '%', class: 'secondary' },
    { label: '÷', class: 'operator' },
    { label: '7', class: '' },
    { label: '8', class: '' },
    { label: '9', class: '' },
    { label: '×', class: 'operator' },
    { label: '4', class: '' },
    { label: '5', class: '' },
    { label: '6', class: '' },
    { label: '-', class: 'operator' },
    { label: '1', class: '' },
    { label: '2', class: '' },
    { label: '3', class: '' },
    { label: '+', class: 'operator' },
    { label: '0', class: 'zero' },
    { label: '.', class: '' },
    { label: '=', class: 'operator' },
  ];

  return (
    <div className="calculator">
      <div className="display">{input || '0'}</div>
      <div className="buttons">
        {buttons.map(({ label, class: cls }) => (
          <button
            key={label}
            className={cls}
            onClick={() =>
              label === 'AC' ? handleClear() :
              label === '=' ? handleCalculate() :
              handleClick(label)
            }
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
