const helpers = {
    'mongo': require('../helpers/db.posts'),
    'pcloud': require('../helpers/db.pcloud')
}

const body = `Lorem ipsum dolor sit amet,\n consectetur adipiscing elit. Sed eget tellus at lacus efficitur tincidunt. Suspendisse a malesuada nulla. Morbi rhoncus ipsum quis nunc rutrum porta. Nulla bibendum elementum mauris, quis porta ipsum bibendum facilisis. Donec eget euismod eros, a volutpat lectus. Duis tincidunt nunc ut lacus lacinia, eget vulputate tellus varius. Morbi efficitur pharetra aliquam. Etiam dapibus nunc sit amet mi feugiat lobortis. Sed dictum eleifend tellus, pretium elementum odio dictum a. Etiam at commodo magna, sed tempus ante. Duis sapien eros, laoreet euismod tincidunt nec, tristique vitae dolor.

Mauris hendrerit fringilla sapien, eu finibus sem pharetra ullamcorper. Duis tempus commodo consequat. Phasellus orci erat, semper et semper et, euismod quis nunc. Morbi ac iaculis justo. Duis vel purus convallis, tincidunt elit id, pellentesque libero. Nullam eros leo, dignissim sit amet odio id, rhoncus hendrerit turpis. Aliquam venenatis quis purus a maximus. Nam velit urna, posuere quis lacinia ut, tincidunt eget ipsum. Aenean posuere libero sed justo feugiat tincidunt. Aenean placerat dolor sit amet dolor ultrices egestas. Aliquam et ex massa. In et mattis magna.

Ut dui ligula, tincidunt eget sapien vitae, consequat egestas tortor. Pellentesque suscipit maximus metus quis iaculis. Aenean vel finibus ipsum, sed bibendum massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti. Cras sit amet libero at diam sagittis ultrices. Quisque quam velit, sodales pellentesque maximus ac, pretium vitae lacus. Curabitur bibendum cursus neque, ac euismod dolor malesuada convallis. Vivamus augue sem, pellentesque id convallis ac, consectetur a arcu. Phasellus sed ante facilisis, consectetur ante et, sagittis elit. Integer rutrum feugiat ante, ac molestie enim maximus eget. Fusce pulvinar tellus ut justo aliquet, at iaculis ex dictum. Nam ac faucibus risus. Duis pellentesque urna ac dui porta, ac molestie risus condimentum. Praesent et scelerisque quam, auctor blandit leo. Suspendisse porttitor nisi feugiat, tincidunt lacus elementum, viverra dui.

Curabitur in enim sed nisl viverra volutpat quis faucibus risus. Phasellus eleifend molestie tortor, id imperdiet felis efficitur nec. Pellentesque vulputate urna id tellus porta blandit. Sed laoreet suscipit viverra. Fusce lorem quam, ornare ac eleifend at, tristique ac felis. Vivamus purus sem, consequat at lacus a, placerat porttitor tellus. Nulla vel justo id ipsum lobortis rhoncus. Praesent luctus, turpis at suscipit condimentum, nunc justo laoreet lorem, sit amet auctor leo velit et neque. Ut vel nisi eget neque rutrum ultrices. Quisque tincidunt ante vel mauris commodo sodales. Nunc nec dapibus dolor, at accumsan justo.

Mauris magna risus, dictum non tristique vel, tempor vitae ex. Aenean finibus a lectus sit amet rutrum. Ut lectus dolor, semper in blandit eget, laoreet sit amet massa. Proin eu dui blandit, rutrum ipsum id, maximus tellus. Praesent sagittis varius bibendum. Aenean tristique ex sit amet felis finibus consequat. Sed in semper urna. In nec dui in turpis interdum dictum nec sit amet ipsum. Sed a bibendum tortor.`

module.exports.main = (req, res) => {
    res.send('<h1>HOME PAGE</h1>')
}

module.exports.add = (req, res) => {
    res.send('<h1>added</h1>')
    helpers.mongo.addPost('Man saves aligator with toothbrush', ['squid', 'aligator', 'idk'], 'benkorpella', body)
}

module.exports.update = (req, res) => {
    res.send('<h1>updated</h1>')
    helpers.mongo.updatePost('606e773044424897ff1c8d68', {tags: ['h']})
}

module.exports.get = (req, res) => {
    res.send('<h1>got</h1>')
    helpers.mongo.getPost('606e773044424897ff1c8d68')
}

module.exports.delete = (req, res) => {
    res.send('<h1>deleted</h1>')
    helpers.mongo.deletePost('606e773044424897ff1c8d68')
}