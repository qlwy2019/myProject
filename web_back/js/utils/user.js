let user = {
    login: (myName, myPassword, callback) => $.post(APIURLS.user_login, {
        user_name: myName,
        password: myPassword,
    }, res => callback(res)),
    logout: callback => $.post(APIURLS.user_logout, res => callback(res)),
    getInfo: callback => $.get(APIURLS.user_getInfo, res => callback(res)),
}