import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg'; // ✅ FIXED: use relative path
import './App.css';
import WelcomeMessage from './components/WelcomeMessage.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
        <h1>Vite + React</h1>
        <h1>Hello World</h1>
      </div>
      <div>
        <WelcomeMessage />
      </div>
    </>
  );
}

export default App;
