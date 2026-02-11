import axios from "axios"


const App = () => {
    // GET request
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(data => console.log(data.data))
      .catch(err => console.error(err));

    // POST request
    axios
      .post('https://jsonplaceholder.typicode.com/posts', {
        title: 'Pumpkins',
        body: 'Salom',
        userId: 1
      })
      .then(res => console.log(res.data))
      .catch(err => console.error(err));
    
    //PUT request
    axios
    .put('https://jsonplaceholder.typicode.com/posts/9', {
      title: 'Updated',
      body: 'Salom',
    })
    .then(data =>console.log(data))
    .catch(err => console.error(err));

    // Delete request
    axios
    .delete('https://jsonplaceholder.typicode.com/posts/4')
    .then(data => console.log(data,"O'chirildi"));
  }
export default App