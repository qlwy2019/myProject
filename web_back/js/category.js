var category = {

    get: function(callback) {
        $.get(category_get, function(res) {
            callback(res);
        })
    },
    add: function(name, slug, callback) {
        $.post(category_add, { 'name': name, 'slug': slug }, function(res) {
            callback(res);
        })
    },
    edit: function(id, name, slug, callback) {
        $.post(category_edit, { 'id': id, 'name': name, 'slug': slug }, function(res) {
            callback(res);
        })
    },
    del: function(callback) {
        $.post(category_del, { 'id': id }, function(res) {
            callback(res);
        })
    }
}