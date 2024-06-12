import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [metrics, setMetrics] = useState({});

  useEffect(() => {
    axios.get('/api/metrics')
      .then(response => setMetrics(response.data))
      .catch(error => console.error('Error fetching metrics:', error));
  }, []);

  return (
    <div className="App">
      <h1>Network Monitoring Dashboard</h1>
      <pre>{JSON.stringify(metrics, null, 2)}</pre>
    </div>
  );
}

export default App;
