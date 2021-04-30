export const authErrorLoginHandler = (error, username, password) => {
   
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

