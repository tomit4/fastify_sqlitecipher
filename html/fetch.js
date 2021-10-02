async function token() {
    let newToken = await fetch('http://localhost:3000/generateAccessToken', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            //Authorization: 'Bearer' + localStorage.getItem('token'),
        },
        body: JSON.stringify({
            passwd: passwd,
        }),
    })
        .then(async res => await res.json())
        .then(function (data) {
            localStorage.setItem('jwt', data.token)
        })
    return newToken
}

token()
