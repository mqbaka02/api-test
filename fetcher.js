const BACKEND_PATH= 'http://localhost:8888';

const api_get_text= async (path, uri) => {
    let response= await fetch(path + uri);
    let data= await response.text();
    return data;
};

const api_post_text= async (path, uri, the_body) => {
    let response= await fetch(path + uri, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(the_body)
    });
    let data= await response.text();
    return data;
};

const fetcher_button= document.getElementById('fetcher');

fetcher_button.addEventListener('click', (event)=> {
    event.preventDefault();
    api_get_text(BACKEND_PATH, '/').then(data => console.log(data));
});

const time_button= document.getElementById('time');

time_button.addEventListener('click', (event)=> {
    event.preventDefault();
    api_get_text(BACKEND_PATH, '/time').then(data => console.log(data));
});

const hello= document.getElementById('hello');

const postBody= {
    name: "Jon Snow",
    age: '32',
    city: 'Eldorado'
};

hello.addEventListener('click', (event)=> {
    event.preventDefault();
    api_post_text(BACKEND_PATH, '/hello', postBody).then(data => console.log(data));
});