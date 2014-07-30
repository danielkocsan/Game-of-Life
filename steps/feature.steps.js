var Game = require('./../src/Game.js');
var chai = require('chai');
var expect = chai.expect;

chai.config.includeStack = false;

module.exports = function() {

    var arrayToString = function (array) {
        var result = '';

        array.forEach(function(element) {
            result += ';' + element.toString();
        });

        return result;
    };

    var game;

    this.Given(/^There a board with the following setup (\[(?:\[\d,\d\],{0,1})+\])$/, function(board, done) {
        var board = eval(board);
        game = new Game(board);
        done();
    });

    this.When("Game rolls", function(done) {
        game.roll();
        done();
    });

    this.Then(/^Cell is (dead|live) on \{(\d,\d)\}/, function(state, coord, done) {
        try {
         var cellsString = arrayToString(game.getCells());

         if (state == 'dead') {
         expect(cellsString).not.to.contain(coord);
         }
         else if (state == 'live') {
         expect(cellsString).to.contain(coord);
         }
            done();
        } catch (e) {
            done(e.message);
        }
    });
};
