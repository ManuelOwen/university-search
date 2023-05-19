import React, { useState } from 'react';


function App() {
  const [data, setData] = useState([]);
  const [searchParam, setSearchParam] = useState('');

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://universities.hipolabs.com/search?country=${searchParam}`);
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  return (
    <>
      <h4>
        Country: <input id="searchInput" type="text" value={searchParam} onChange={(e) => setSearchParam(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
      </h4>
      {data.length > 0 ? (
        <div className="grid-container">
          {data.map((university) => (
            <div key={university.name} className="grid-item">
              <h3>{university.name}</h3>
              <p>Country: {university.country}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No universities found.</p>
      )}
    </>
  );
}

export default App;
