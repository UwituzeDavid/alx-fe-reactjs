import { useState, useEffect } from 'react';

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('/src/data.json')
      .then(res => res.json())
      .then(data => setRecipes(data))
      .catch(err => console.error('Failed to load recipes:', err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-green-700">Featured Recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map(recipe => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out p-4 transform hover:scale-[1.02]"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-2 hover:text-green-600 transition-colors duration-300">
              {recipe.title}
            </h2>
            <p className="text-gray-600 text-sm">{recipe.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
