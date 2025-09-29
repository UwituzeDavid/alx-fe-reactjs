import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

import WelcomeMessage from './components/WelcomeMessage.jsx';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Logos Section */}
      <div className="logo-container">
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

      {/* Page Structure */}
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
