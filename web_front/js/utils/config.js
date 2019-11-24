var baseurl = 'http://localhost:8000/';
var APIURLS = {
    //    用户相关接口
    user_login: baseurl + 'admin/login',
    user_logout: baseurl + 'admin/logout',
    user_getInfo: baseurl + 'admin/getuser',
    // 类别相关接口
    category_get: baseurl + 'admin/category_search',
    category_add: baseurl + 'admin/category_add',
    category_edit: baseurl + 'admin/category_edit',
    category_del: baseurl + 'admin/category_delete',
    // 文章相关接口
    article_get: baseurl + 'admin/search',
    article_add: baseurl + 'admin/article_publish',
    article_del: baseurl + 'admin/article_delete',
    article_edit: baseurl + 'admin/article_edit',
    //评论相关接口
    comment_get: baseurl + 'admin/comment_search'
}