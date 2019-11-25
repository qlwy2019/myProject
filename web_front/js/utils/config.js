var baseurl = 'http://localhost:8000/';
var APIURLS = {

    // 类别相关接口
    category_get: baseurl + 'admin/category_search',

    // 文章相关接口
    article_get: baseurl + 'admin/search',
    article_add: baseurl + 'admin/article_publish',
    article_del: baseurl + 'admin/article_delete',
    article_edit: baseurl + 'admin/article_edit',
    //评论相关接口

    comment_show: baseurl + 'get_comments',
    comment_publish: baseurl + 'post_comment',

}