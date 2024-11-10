const fetcher_button= document.getElementById('fetcher');

fetcher_button.addEventListener('click', (event)=> {
    event.preventDefault();
    fetch('http://localhost:8888')
    .then(response=> response.text())
    .then(data=> console.log(data));
});

const time_button= document.getElementById('time');

time_button.addEventListener('click', (event)=> {
    event.preventDefault();
    fetch('http://localhost:8888/time')
    .then(res=> res.text())
    .then(data=> console.log(data));
});