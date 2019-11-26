var BASEURL = 'http://localhost:8000/';
var APIURLS = {

    // 类别相关接口
    category_get: BASEURL + 'admin/category_search',

    // 文章相关接口
    article_get: BASEURL + 'admin/search',
    article_add: BASEURL + 'admin/article_publish',
    article_del: BASEURL + 'admin/article_delete',
    article_edit: BASEURL + 'admin/article_edit',
    //评论相关接口

    comment_show: BASEURL + 'get_comments',
    comment_publish: BASEURL + 'post_comment',

}