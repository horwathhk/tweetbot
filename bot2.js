console.log('its working');

var Twit = require('twit');

var config = require('./config');    
var T = new Twit(config);

var hello = myFunction();

function myFunction(){
    return "@BarackObama";
}

var tweet = {
    status: hello,

    }

T.post('statuses/update',tweet, tweeted);

function tweeted(err,data,response){
    if(err){
        console.log(err);
    } else{
        console.log('working!');
    }
}