define(function (require, exports, module) {

//    module.exports.fnv132 = require('./delta/fnv132');
    module.exports.lcs = require('./delta/lcs');
    module.exports.tree = require('./delta/tree');
    module.exports.xcc = require('./delta/xcc');
//    module.exports.skelmatch = require('./delta/skelmatch');
//    module.exports.contextmatcher = require('./delta/contextmatcher');
//    module.exports.resolver = require('./delta/resolver');
//    module.exports.domtree = require('./delta/domtree');
//    module.exports.jsobjecttree = require('./delta/jsobjecttree');
//    module.exports.domdelta = require('./delta/domdelta');
//    module.exports.jsondelta = require('./delta/jsondelta');
//    module.exports.xmlpayload = require('./delta/xmlpayload');
//    module.exports.jsonpayload = require('./delta/jsonpayload');
    module.exports.delta = require('./delta/delta');

});