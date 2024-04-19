import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  
  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Click Counter Game</h1>
        <p>You have clicked the button {count} times.</p>
        <button onClick={incrementCount}>Click me!</button>
      </header>
    </div>
  );
}

export default App
