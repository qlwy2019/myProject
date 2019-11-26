var BASEURL = 'http://localhost:8000/';
var APIURLS = {
    //    用户相关接口
    user_login: BASEURL + 'admin/login',
    user_logout: BASEURL + 'admin/logout',
    user_getInfo: BASEURL + 'admin/getuser',
    // 类别相关接口
    category_get: BASEURL + 'admin/category_search',
    category_add: BASEURL + 'admin/category_add',
    category_edit: BASEURL + 'admin/category_edit',
    category_del: BASEURL + 'admin/category_delete',
    // 文章相关接口
    article_get: BASEURL + 'admin/search',
    article_add: BASEURL + 'admin/article_publish',
    article_del: BASEURL + 'admin/article_delete',
    article_edit: BASEURL + 'admin/article_edit',
    //评论相关接口
    comment_get: BASEURL + 'admin/comment_search'
}