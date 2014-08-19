var jerk = require('jerk');
var frasier = require('./say.js');
var options = {
    server: 'irc.slashnet.org',
    nick  : 'insufferable',
    channels : ['#mefi-frasier', '#mefi']
};
jerk(function(j){
    j.watch_for('be frasier', function(message){
        message.say(say());    
    });    
    j.watch_for('tossed salad', function(message){
        message.say('FUCK AN EGG');    
    });
}).connect(options);
