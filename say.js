var util = require('util');
var fs = require('fs');
var lazy = require('lazy');
//var lazy = new Lazy;
var markov  = require('markov');

function sentenceCase(theText) {

        theText = theText
        

        if(theText.slice(-1) !== ('!'|| '?' || '.')){
            theText = theText.slice(0, theText.length -1);
            theText += '.';
        }

        return theText.toLowerCase()
        .replace(/(^\s*\w|[\.\!\?]\s*\w)/g,function(c){return c.toUpperCase()})
        .replace(/( i )/g, function(){return ' I '})
        .replace(/([.,!?])+\S/g, function(c){
           var output = [c.slice(0, 1), " ", c.slice(1)].join('');
            return output; 
        })
        .replace(/[.!,?][.!,?]/g, function(c){
            return c.split(0,1);    
        })
        .replace(/[.!,?]\s[^A-Z || ^ a-z]/, function(c){
            return c.split(0, 1);    
        })
        .replace(/(roz)/g, function(c){
            return 'Roz';
        })
        .replace(/(niles)/g, function(c){
            return 'Niles';
        })
        .replace(/[^A-Z ^a-z][^A-Z ^a-z] | [ ]/g, function(){
            return ""
        })
        .replace(/[,.?!]\s[,.?!][,.?!]/g, function(c){
            return c.slice(0,1)
        });
}

say = function(){
    var m = markov(3);
    var blurp = "";
    var littleCorpus = "";
    var blurp = fs.readFileSync('./drfrasier.txt', {encoding: 'utf-8'});
    var mlength = 100;
    var said = "";
    var saidClump = "";
    blurp = blurp.split('\n');
    var corpseSeed = Math.floor(Math.random() * (blurp.length - 0 + 1)) + 0;

    for(i = 0; i < mlength; i++){
        littleCorpus += blurp[corpseSeed+i];
    }

    var said = m.seed(littleCorpus, function(){
        var lines = m.fill(m.pick(), 8);
        for(i = 0; i < lines.length; i++){
            saidClump += lines[i] + " " ; 
        }
    });
    saidClump = sentenceCase(saidClump);
    return saidClump;
}
//say();
