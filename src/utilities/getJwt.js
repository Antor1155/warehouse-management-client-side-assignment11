 // applying for jwt token and storing
 export default async function getJwt(email) {
    await fetch('https://floating-savannah-75899.herokuapp.com/login', {
        method: 'POST',
        headers: { "content-type": "application/json" },
        body: JSON.stringify({email})

    }).then(res => res.json())
        .then(jwt =>{     
        window.localStorage.setItem('accessToken', jwt.accessToken);
    });
}