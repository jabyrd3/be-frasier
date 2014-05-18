var Browser = require('zombie');
var async = require('async');
var http = require('http');
var fs = require('fs');

browser = new Browser();
browser.visit('http://catsnguitars.wordpress.com/scripts-archive/', function(){
   var questions = browser.queryAll(".content > p > a"); 
   var count = 0;
   async.eachLimit(questions, 500, function (question, cb) {
       console.log(count);
        var fileName = count + '.pdf';
        console.log(fileName);
        var file = fs.createWriteStream(__dirname + '/' +  fileName);
        var request = http.get(question.getAttribute('href'), function(response){
            response.pipe(file);    
        });
        count++;
   });
});
