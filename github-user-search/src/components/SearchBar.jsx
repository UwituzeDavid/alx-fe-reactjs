{loading && <p>Loading...</p>}
{error && <p>Looks like we cant find the user</p>}
{user && (
  <div style={{ border: '1px solid #ccc', padding: '20px', maxWidth: '400px' }}>
    <img src={user.avatar_url} alt={user.login} width="100" />
    <h2>{user.name || user.login}</h2>
    <p>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">
        View GitHub Profile
      </a>
    </p>
  </div>
)}
