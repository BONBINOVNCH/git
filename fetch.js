const requestURL = "https://jsonplaceholder.typicode.com/users"



function sendRequest(method, url, body = null) {
    const headers = {
        "Content-Type": "application/json"
    }

    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    }).then(response => {
        if (response.ok) {
            return response.json()
        }

        return response.json().then(error => {
            const e = new Error("Щось не так")
            e.data = error
            throw e
        })
    })
}

// sendRequest("get", requestURL)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

let body = {
    name: "Val",
    age:54
}

sendRequest("post", requestURL, body)
    .then(data => console.log(data))
    .catch(err => console.log(err))