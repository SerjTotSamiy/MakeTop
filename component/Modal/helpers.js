export const validateEmail = (email) => {
    return email
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
}

export const addUserIntoLocalStorage = (user) => {
    const users = JSON.parse(localStorage.getItem('users'));
    let result;
    if (users.length) {
        const isArrayIncludeUser = users.find(item => item.userData.user_id === user.userData.user_id);
        result = isArrayIncludeUser ? users : [...users, user];
    }

    return result;
}

export const removeUserFromArray = (usersArray, user) => {
    usersArray.filter(item => item.userData.user_id !== user.userData.user_id)
    return usersArray !== 'undefined' ? usersArray : null;
}
