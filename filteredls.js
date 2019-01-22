var fs = require('fs');
var path = process.argv[2];
var ext = process.argv[3];

fs.readdir(path, function callback(err,list){
    if(err) return console.error(err);

    var files = []

    for(var i =0; i < list.length ; i++)
    {
        if(list[i].split('.')[1] == ext)
        {
            files.push(list[i]);
        }
    }

    for(var i=0 ; i <files.length;i++){
        console.log(files[i]);
    }
})


// var fs = require('fs')
// var path = require('path')

// var folder = process.argv[2]
// var ext = '.' + process.argv[3]

// fs.readdir(folder, function (err, files) {
//   if (err) return console.error(err)
//   files.forEach(function (file) {
//     if (path.extname(file) === ext) {
//       console.log(file)
//     }
//   })
// })