import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/api')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>API Data</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading data...</p>}
    </div>
  );
}

export default App;
