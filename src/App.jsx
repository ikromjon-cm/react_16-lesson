import axios from 'axios';
import React from 'react';
// get
axios
  .get('https://jsonplaceholder.typicode.com/users')
  .then(data => console.log(data.data))
  .catch(err => console.error(err));
// post
axios
.post('http://jsonplaceholder.typicode.com/posts',{
  title:"pumpkins",
  body:"salom",
  userId:1
})
.then(res=>console.log(res.data))
.catch(err => console.error(err));



const App = () => {
  return (
    <div>

    </div>
  );
}

export default App;
