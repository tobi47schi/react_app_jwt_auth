const axios = require('axios')

export function test () {
    alert("service")
}

export function setAccessToken(user) {
    sessionStorage.setItem('access_token', user.access_token)
}

export function removeAccessToken() {
    sessionStorage.removeItem('access_token')
}

export function login(user) {
    axios.post('http://localhost:5000/login', user).then(
        
        response => {
            let returnedUser = response.data
            this.setAccessToken(returnedUser)
        }, 
        err => {
            this.removeAccessToken()
        }
    )
}