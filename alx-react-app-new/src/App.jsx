import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from "./assets/vite.svg"; // ✅ no space before the path
import './App.css';

import WelcomeMessage from "./components/WelcomeMessage";
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Logos Section */}
      <div className="logo-container">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {/* Title Section */}
      <div className="title-section">
        <h1>Vite + React</h1>
        <h1>Hello World</h1>
      </div>

      {/* Welcome Message */}
      <WelcomeMessage />
      <Header />
      <MainContent />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <h1 style={{ textAlign: 'center' }}>Simple Counter App</h1>
      <Counter />
      <Footer />
     
    </>
  );
}

export default App;
