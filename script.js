const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

// You can write your code here
const outputAll = document.getElementById('output-all');
const outputAny = document.getElementById('output-any');

function fetchData(url) {
  return fetch(url).then(response => response.json());
}

function fetchAll() {
  const start = performance.now();
  Promise.all(apiUrls.map(fetchData))
    .then(data => {
      const end = performance.now();
      const timeTaken = end - start;
      outputAll.innerText = `${timeTaken} ms`;
      console.log('Promise.all took', timeTaken, 'ms');
    })
    .catch(error => console.log(error));
}

function fetchAny() {
  const start = performance.now();
  Promise.any(apiUrls.map(fetchData))
    .then(data => {
      const end = performance.now();
      const timeTaken = end - start;
      outputAny.innerText = `${timeTaken} ms`;
      console.log('Promise.any took', timeTaken, 'ms');
    })
    .catch(error => console.log(error));
}

fetchAll();
fetchAny();