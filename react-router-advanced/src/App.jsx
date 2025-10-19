// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './src/components/Profile';
import BlogPost from './pages/BlogPost';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/blog/:postId" element={<BlogPost />} />
      <Route
        path="/profile/*"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
  ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
    );
}

export default App;
