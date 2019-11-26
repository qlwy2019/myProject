var category = {
    get: callback => $.get(APIURLS.category_get, res => callback(res)),
    add: (name, slug, callback) => $.post(APIURLS.category_add, { 'name': name, 'slug': slug }, res => callback(res)),
    edit: (id, name, slug, callback) => $.post(APIURLS.category_edit, { 'id': id, 'name': name, 'slug': slug }, res => callback(res)),
    del: (id, callback) => $.post(APIURLS.category_del, { 'id': id }, res => callback(res))
}