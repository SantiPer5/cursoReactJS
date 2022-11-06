const url = 'https://jsonplaceholder.typicode.com/users';

/* fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',//tipo de contenido que se envia, tipo json
        'Authorization': 'Bearer 1234567890'//token de autorizacion
    }, //se utiliza para crear un recurso
    body: JSON.stringify({
        name: 'Juan',
        website: 'google.com'
    })
}) // hay otros metodos como PUT, DELETE, PATCH, GET
    .then((response) => response.json())
    .then((data) => console.log(data)) */

    const fn = async () => {

        const response = await fetch(url, {
            method: 'POST', // hay otros metodos como PUT, DELETE, PATCH, GET
            headers: {
                'Content-Type': 'application/json',//tipo de contenido que se envia, tipo json
                'Authorization': 'Bearer 1234567890'//token de autorizacion
            }, //se utiliza para crear un recurso
            body: JSON.stringify({
                name: 'Juan',
                website: 'google.com'
            })
        }) 
        const data = await response.json();
        console.log(data);
    }
    fn();