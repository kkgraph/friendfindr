var path = require("path");
var newPerson;
var bestMatch;

friendsDataArray = require("../data/friends");

module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function (req, res) {
    let matchArray = [];
    newPerson = req.body;
    friendsDataArray.forEach(function (person) {
        let talley = 0;
      for (var i = 0; i < 10; i++) {
        let scoreResult = Math.abs(person.scores[i] - newPerson.scores[i]);
        talley = talley + scoreResult;
      }
      matchArray.push(talley);
    });

    let i = matchArray.indexOf(Math.min(...matchArray));
    friendsDataArray.push(newPerson);
    res.send(friendsDataArray[i]);
  });
}