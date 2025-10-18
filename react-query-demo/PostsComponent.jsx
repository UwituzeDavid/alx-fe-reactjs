import { useQuery } from 'react-query';

function fetchPosts() {
  return fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());
}

function PostsComponent() {
  const {
    data: posts,
    isLoading,
    isError,
    refetch,
    isFetching,
  } = useQuery('posts', fetchPosts, {
    staleTime: 1000 * 60 * 5, // 5 minutes
    cacheTime: 1000 * 60 * 10, // 10 minutes
  });

  if (isLoading) return <p className="text-center text-blue-600">Loading posts...</p>;
  if (isError) return <p className="text-center text-red-600">Error fetching posts.</p>;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Posts</h1>
        <button
          onClick={() => refetch()}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          {isFetching ? 'Refreshing...' : 'Refetch Posts'}
        </button>
      </div>

      <ul className="space-y-4">
        {posts.map(post => (
          <li key={post.id} className="bg-white p-4 rounded shadow hover:shadow-md transition">
            <h2 className="text-lg font-semibold text-gray-700">{post.title}</h2>
            <p className="text-gray-600">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
