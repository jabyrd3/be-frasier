var inspect = require('eyes').inspector({maxLength:20000});
var pdf_extract = require('pdf-extract');
var fs = require('fs');
var options = {
      type: 'text'  // extract the actual text in the pdf file
}
var callback = function(thing){
    console.log(thing);
        fs.appendFile('text.txt', thing, function(err){
            if(err){
                console.log(err);
            }else{
                console.log('all done');
            }
        });
}

for(i = 0; i < 264; i++){
    console.log(__dirname + '/pdf/' + i + '.pdf');
    if(i !== 200){
        var processor = pdf_extract(__dirname + '/pdf/' + i + '.pdf', options, function(err) {
              if (err) {
                      return callback(err);
                        }
        });
        processor.on('complete', function(data) {
            //console.log(i);
              //inspect(data.text_pages, 'extracted text pages');
              //if(text_pages !== undefined){
                callback(data.text_pages);
              //};
        });
        processor.on('error', function(err) {
              inspect(err, 'error while extracting pages');
                return callback(err);
        });
    }
}
