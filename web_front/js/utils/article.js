var article = {

    get: function(curPage, type, state, callback) {
        $.get(APIURLS.article_get, { page: curPage, state: state, type: type }, function(res) {
            callback(res);
        })
    },
    add: function(fd, callback) {
        // $.post( fd, function(res) {
        //     callback(res);
        // })
        $.ajax({
            url: APIURLS.article_add,
            type: 'post',
            data: fd,
            processData: false,
            contentType: false,
            success: function(res) {
                callback(res);

            }
        })
    },
    del: function(id, callback) {
        $.get(APIURLS.article_del, { 'id': id }, function(res) {
            callback(res);
        })
    },
    edit: function(fd, callback) {
        $.ajax({
            url: APIURLS.article_edit,
            type: 'post',
            data: fd,
            processData: false,
            contentType: false,
            success: function(res) {
                callback(res)
            }
        })
    },
    getDetail: function(id, callback) {
        $.get(APIURLS.article_get, { 'id': id }, function(res) {
            callback(res);
        })
    }
}