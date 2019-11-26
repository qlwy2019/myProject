var comment = {
    show: (article_id, callback) => {
        $.get(APIURLS.comment_show, { 'article_id': article_id }, res => callback(res))
    },
    publish: (name, content, article_id, callback) =>
        $.post(APIURLS.comment_publish, {
            'name': name,
            'content': content,
            'article_id': article_id
        }, res => callback(res))
}