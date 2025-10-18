import { useState } from 'react';
    const errors = {};
function AddRecipeForm() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate({ title, ingredients, steps });
      
        if (Object.keys(newErrors).length > 0) {
          setErrors(newErrors);
          return;
        }
      
        // Submit logic
        console.log({ title, ingredients, steps });
        alert('Recipe submitted successfully!');
        setTitle('');
        setIngredients('');
        setSteps('');
        setErrors({});
      };
      

    function validate({ title, ingredients, steps }) {
        const errors = {};
      
        if (!title.trim()) errors.title = 'Title is required.';
        if (!ingredients.trim()) {
          errors.ingredients = 'Ingredients are required.';
        } else if (ingredients.split(',').length < 2) {
          errors.ingredients = 'Please list at least two ingredients.';
        }
        if (!steps.trim()) errors.steps = 'Preparation steps are required.';
      
        return errors;
      }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 my-10 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">Add a New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="e.g., Vegan Pancakes"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Ingredients (comma-separated)</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-3 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="e.g., Flour, Almond Milk, Maple Syrup"
          />
          {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Preparation Steps</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Describe how to prepare the recipe..."
          />
          {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-colors duration-300"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
