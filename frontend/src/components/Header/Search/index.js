import React from 'react';

const Search = () => {
  return (
    <form className="form-inline mt-2 mt-md-0">
      <input
        className="form-control mr-sm-2"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  );
};

export default Search;
