export const validateEmail = (email) => {
    return email
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
}

export const addUserIntoLocalStorage = (user) => {
    const users = JSON.parse(localStorage.getItem('users'));
    if (users.length) {
        const isArrayIncludeUser = users.filter(item => item.userData.user_id === user.userData.user_id).length > 0;
        const result = isArrayIncludeUser ? users : [...users, user];
        localStorage.setItem('users', JSON.stringify(result));
    }
}

export const removeUserFromArray = (usersArray, user) => {
    return usersArray.filter(item => item.userData.user_id !== user.userData.user_id)
}
