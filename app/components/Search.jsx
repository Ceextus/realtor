import React, { useState } from 'react';

const SimpleSearchComponent = () => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    // You can replace this with any search action you want
    console.log('Searching for:', query);
    // Clear the input field if needed
    setQuery('');
  };

  return (
    <div className="w-full max-w-lg mx-auto p-4">
      <div className="flex items-center max-md:flex-col">
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder="Search for houses..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="ml-2 py-2 px-3 font-bold bg-red-500 text-white rounded-lg hover:bg-red-600 max-md:mt-5"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SimpleSearchComponent;
