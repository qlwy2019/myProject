var comment = {
    show: function(article_id, callback) {
        $.get(APIURLS.comment_show, { 'article_id': article_id }, function(res) {
            callback(res);
        })
    },
    publish: function(name, content, article_id, callback) {
        $.post(APIURLS.comment_publish, {
            'name': name,
            'content': content,
            'article_id': article_id
        }, function(res) {
            callback(res)
        })
    }
}