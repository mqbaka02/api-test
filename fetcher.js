const fetcher_button= document.getElementById('fetcher');

fetcher_button.addEventListener('click', (event)=> {
    event.preventDefault();
    fetch('/api/api.php')
    .then(response=> response.text())
    .then(data=> console.log(data));
});