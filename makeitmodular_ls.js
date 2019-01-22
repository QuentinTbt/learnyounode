var fs = require('fs');
var path = require('path');


module.exports = function(patharg,ext,callback){
   fs.readdir(patharg, function (err,files){
        if(err)
        {
            return callback(err)
        }

        files=files.filter(function(file){
            return path.extname(file) === '.' + ext;
        })

        callback(null,files)
   })
}

// var fs = require('fs')
// var path = require('path')

// module.exports = function (dir, filterStr, callback) {
//   fs.readdir(dir, function (err, list) {
//     if (err) {
//       return callback(err)
//     }

//     list = list.filter(function (file) {
//       return path.extname(file) === '.' + filterStr
//     })

//     callback(null, list)
//   })
// }