import React from 'react';

const Header = ({ search, setSearch }) => {
  return (
    <header className="bg-white shadow p-4 sticky top-0">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold text-center mb-4">ค้นหา</h1>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="ค้นหา"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </header>
  );
};

export default Header;