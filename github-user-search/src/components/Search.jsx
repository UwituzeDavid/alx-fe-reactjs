import { useState } from 'react';
import { fetchUserData, fetchAdvancedUsers } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUser(null);
    setUsers([]);

    try {
      if (location || minRepos) {
        const data = await fetchAdvancedUsers({ username, location, minRepos });
        setUsers(data.items);
      } else {
        const data = await fetchUserData(username.trim());
        setUser(data);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full p-2 border rounded" />
        <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} className="w-full p-2 border rounded" />
        <input type="number" placeholder="Minimum Repositories" value={minRepos} onChange={(e) => setMinRepos(e.target.value)} className="w-full p-2 border rounded" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Search</button>
      </form>

      {loading && <p className="mt-4 text-gray-600">Loading...</p>}
      {error && <p className="mt-4 text-red-500">Looks like we cant find the user</p>}

      {user && (
        <div className="mt-6 border p-4 rounded shadow">
          <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
          <h2 className="text-lg font-semibold">{user.name || user.login}</h2>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View GitHub Profile</a>
        </div>
      )}

      <div className="mt-6 space-y-4">
        {users.map((u) => (
          <div key={u.id} className="border p-4 rounded shadow flex items-center space-x-4">
            <img src={u.avatar_url} alt={u.login} className="w-16 h-16 rounded-full" />
            <div>
              <h2 className="text-lg font-semibold">{u.login}</h2>
              <a href={u.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Profile</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
