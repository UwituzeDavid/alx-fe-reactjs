import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch('/src/data.json')
      .then(res => res.json())
      .then(data => {
        const found = data.find(item => item.id === parseInt(id));
        setRecipe(found);
      });
  }, [id]);

  if (!recipe) return <p className="text-center mt-10">Loading recipe...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 my-10 bg-white rounded-lg shadow-lg">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-md mb-6"
      />
      <h1 className="text-3xl font-bold text-green-700 mb-4">{recipe.title}</h1>
      <p className="text-gray-700 mb-6">{recipe.summary}</p>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Ingredients</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Ingredient 1</li>
          <li>Ingredient 2</li>
          <li>Ingredient 3</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Instructions</h2>
        <ol className="list-decimal list-inside text-gray-600 space-y-2">
          <li>Step 1: Prep the ingredients.</li>
          <li>Step 2: Cook according to recipe.</li>
          <li>Step 3: Serve and enjoy!</li>
        </ol>
      </div>
      <div>
  <h2 className="text-xl font-semibold text-gray-800 mb-2">Instructions</h2>
  <ol className="list-decimal list-inside text-gray-600 space-y-2">
    {recipe.instructions.map((step, index) => (
      <li key={index}>{step}</li>
    ))}
  </ol>
</div>

    </div>

  );
}

export default RecipeDetail;
