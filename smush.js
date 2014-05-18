var fs = require('graceful-fs');
var blob = fs.readFile('text.txt','utf-8', function(err, data){
    var ray = data.split('\n');
    for(i = 0; i < ray.length; i++){
        var checker = ray[i].indexOf('Frasier:');
        console.log(checker);
        if(checker !== -1){
            fs.appendFile('drfrasier.txt', ray[i].substr(8) + '\n');
        }
    }
});
