export const validateEmail = (email) => {
    return email
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
}

export const addUserIntoArray = (usersArray, user) => {
    const isArrayIncludeUser = usersArray.filter(item => item.userData.user_id === user.userData.user_id).length > 0
    return isArrayIncludeUser ? usersArray : [...usersArray, user]
}
