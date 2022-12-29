import React, { useState } from 'react';

function Search(){

        const [searchInput, setSearchInput] = useState('');
      
        function handleChange(event) {
          setSearchInput(event.target.value);
        }
      
        function handleSubmit(event) {
          event.preventDefault();
          // send search request to server here
        }

    return (
        <div className='container'>
        <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchInput}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
    </div>
    );
}

export default Search