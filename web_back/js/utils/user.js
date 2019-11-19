var turl = "http://localhost:8000/";

var user = {
    login: function(myName, myPassword, callback) {
        $.post(turl + 'admin/login', {
            user_name: myName,
            password: myPassword,
        }, function(res) {
            callback(res);
        })
    },
    logout: function(callback) {
        $.post(turl + 'admin/logout', function(res) {
            callback(res);
        })
    },
    getInfo: function(callback) {
        $.get(turl + 'admin/getuser', function(res) {
            callback(res);
        })
    },

}