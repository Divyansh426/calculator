import React, { useState } from 'react';
import './index.css';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const App = () => {
  const [input, setInput] = useState('');
  const [theme, setTheme] = useState('light');

  const handleClick = (value) => {
    if (value === 'C') return setInput('');
    if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput('Error');
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const buttons = [
    'C', '/', '*', '-',
    '7', '8', '9', '+',
    '4', '5', '6', '',
    '1', '2', '3', '=',
    '0', '.', '', ''
  ];

  return (
    <div className={`calculator ${theme}`}>
      <div className="calculator-box">
        <div className="top-bar">
          <h2>Calculator</h2>
          <button onClick={toggleTheme}>
            <DarkModeIcon />
          </button>
        </div>
        <div className="display">{input || '0'}</div>
        <div className="buttons">
          {buttons.map((btn, idx) => (
            <button key={idx} onClick={() => handleClick(btn)}>
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

