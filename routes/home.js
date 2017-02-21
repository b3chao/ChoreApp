var chore_data = require("../json/chore_schedule.json");
var user_data = require("../json/users.json");

exports.viewHome = function(req, res) {
    var username = chore_data['current_user']['username'];
    var password = chore_data['current_user']['password'];

    //if (make check to see if user is not in a house) {
    //	  res.render('no_home');
    //}

    var rendData = chore_data[username];
    rendData['rating'] = user_data[username + "_" + password]['rating'];
    console.log(rendData);
    res.render('home', rendData);


};

exports.jsonHome = function(req, res) {
    res.json(chore_data);
};


//Can be deleted when the viewHome function is updated to reroute to no_home when appropriate
exports.viewNoHome = function(req, res) {
    var username = chore_data['current_user']['username'];
    var password = chore_data['current_user']['password'];
    var rendData = {};
    rendData['username'] = username;

    res.render('no_home', rendData);


};