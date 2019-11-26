var article = {

    get: (curPage, type, state, callback) => $.get(APIURLS.article_get, { page: curPage, state: state, type: type }, res => callback(res)),
    add: (fd, callback) => {
        // $.post( fd, function(res) {
        //     callback(res);
        // })
        $.ajax({
            url: APIURLS.article_add,
            type: 'post',
            data: fd,
            processData: false,
            contentType: false,
            success: res => callback(res)
        })
    },
    del: (id, callback) => $.get(APIURLS.article_del, { 'id': id }, res => callback(res)),
    edit: (fd, callback) => {
        $.ajax({
            url: APIURLS.article_edit,
            type: 'post',
            data: fd,
            processData: false,
            contentType: false,
            success: res => callback(res)
        })
    },
    getDetail: (id, callback) => $.get(APIURLS.article_get, { 'id': id }, res => callback(res))
}