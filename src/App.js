import { useState } from 'react';
import './index.scss';

function App() {

  const [ count, setCount ] = useState(0);

  const onClickPlus = () => {
    if(count < 10) {
      setCount(count+1)
    }
  };

  const onClickMinus = () => {
    if(count > -10) {
      setCount(count-1)
    }
  };

  const getRandomNumber = () => {
    setCount((Math.random() * (50 - -50) + -50).toFixed(0))
  };

  const getNull = () => {
    setCount(0)
  }


  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button onClick={onClickMinus} className="minus">- Минус</button>
        <button onClick={getRandomNumber} className="plus">Случайное число</button>
        <button onClick={getNull} className="minus">Обнулить</button>
        <button onClick={onClickPlus} className="plus">Плюс +</button>
      </div>
    </div>
  );
}

export default App;