function validate({ username, email, password }) {
    const errors = {};
  
    if (!username) errors.username = 'Username is required';
    if (!email) errors.email = 'Email is required';
    if (!password) errors.password = 'Password is required';
  
    return errors;
  }
  import { useState } from 'react';

  function RegistrationForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const newErrors = validate({ username, email, password });
  
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }
  
      console.log('Submitted:', { username, email, password });
      alert('User registered!');
      setUsername('');
      setEmail('');
      setPassword('');
      setErrors({});
    };
  
    return (
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded shadow space-y-4">
        <h2 className="text-2xl font-bold text-center text-blue-600">Register</h2>
  
        <div>
          <label className="block mb-1 font-medium">Username</label>
          <input
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border p-2 rounded"
          />
          {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
        </div>
  
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-2 rounded"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
  
        <div>
          <label className="block mb-1 font-medium">Password</label>
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-2 rounded"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>
  
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Submit
        </button>
      </form>
    );
  }
  
  export default RegistrationForm;
    