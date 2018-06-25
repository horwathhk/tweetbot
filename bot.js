console.log('its working');

var Twit = require('twit');

var config = require('./config');    
var T = new Twit(config);


var params = { 
    q: "mood", 
    count: 2 
}
    
T.get('search/tweets', params, gotData);



var saying;

function gotData(err, data, response) {
    var tweets = data.statuses;
    for(var i = 0; i<tweets.length; i++){
        saying = tweets[i].text; 
       console.log(saying);
    }
};

console.log('correct' + saying);
