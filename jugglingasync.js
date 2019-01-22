var http = require('http')
var bl = require('bl')

var http1 = process.argv[2];
var http2 = process.argv[3];
var http3 = process.argv[4];
var data1;
var data2;
var data3;
var count = 0;

http.get(http1, function callback(response){

    response.setEncoding("utf8")
    response.pipe(bl(function(err, data){
        if(err) console.error(err)

        data1 = data.toString();
        count++;
        if(count == 3) print()
    }))
})

http.get(http2, function callback(response){

    response.setEncoding("utf8")
    response.pipe(bl(function(err, data){
        if(err) console.error(err)

        data2 = data.toString();
        count++;
        if(count == 3) print()
    }))
})

http.get(http3, function callback(response){

    response.setEncoding("utf8")
    response.pipe(bl(function(err, data){
        if(err) console.error(err)

        data3 = data.toString();
        count++;
        if(count == 3) print()
    }))
})

function print(){
    console.log(data1)
    console.log(data2)
    console.log(data3)
}


// var http = require('http')
// var bl = require('bl')
// var results = []
// var count = 0

// function printResults () {
//   for (var i = 0; i < 3; i++) {
//     console.log(results[i])
//   }
// }

// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err) {
//         return console.error(err)
//       }

//       results[index] = data.toString()
//       count++

//       if (count === 3) {
//         printResults()
//       }
//     }))
//   })
// }

// for (var i = 0; i < 3; i++) {
//   httpGet(i)
// }
