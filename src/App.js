import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [aa, setAa] = useState();
  const getPosts = async () => {
    const response = await axios.get('http://localhost:4000/posts');
    console.log(response.data);
    setAa(response.data);
    return response.data;
  };
  return (
    <div>
      <button onClick={getPosts}>test</button>
      {aa && aa.map((item) => <div>{item.title}</div>)}
    </div>
  );
}

export default App;
