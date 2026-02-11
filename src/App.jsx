import axios from 'axios';
import React from 'react';
// get
axios
  .get('https://jsonplaceholder.typicode.com/users')
  .then(data => console.log(data.data))
  .catch(err => console.error(err));


const App = () => {
  return (
    <div>

    </div>
  );
}

export default App;
