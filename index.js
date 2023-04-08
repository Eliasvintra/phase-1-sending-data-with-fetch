// // Add your code here

function submitData(name, email){
    
    return fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            Accept: 'application/json',
            },
            body: JSON.stringify({
                name,
                email
            }),
        })
        .then( res => res.json())
        .then( data => {
            const new_id = document.createElement('p');
            new_id.textContent = data.id;
            document.querySelector('body').appendChild(new_id);
        
        })
        .catch( function ( error ) {      
            document.body.innerHTML = error.message    
        
        } )}
    
 submitData("Steve", "steve@steve.com");