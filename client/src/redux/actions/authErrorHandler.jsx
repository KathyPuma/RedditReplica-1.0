export const authErrorLoginHandler = (error, username, password) => {
   console.log('error--', error.response)
   
    if (!username && !password) {
        return ('Username and Password fields are empty')
    } else if (!username) {
        return ('Username field is empty')
    } else if (!password) {
        return ('Password field is empty')
    } else {
        return ("Incorrect username or password")
    }
}

