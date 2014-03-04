var Yadda = require('yadda');
var English = Yadda.localisation.English;
var Dictionary = Yadda.Dictionary;
var assert = require('assert');
var Game = require('./src/Game.js');
var expect = require('chai').expect;

module.exports = (function() {

    var arrayToString = function (array) {
        var result = '';

        array.forEach(function(element) {
            result += ';' + element.toString();
        });

        return result;
    };

    var game;

    var dictionary = new Dictionary()
        .define('NUM', /(\d+)/)
        .define('BOARD', /(\[(?:\[\d,\d\],{0,1})+\])/ )
        .define('CELLCOORD', /\{(\d,\d)\}/ );

    var library = English.library(dictionary)

    .given("There a board with the following setup $BOARD", function(board, next) {
        var board = eval(board);
        game = new Game(board);
        next();
    })

    .when("Game rolls", function(next) {
        game.roll();
        next();
    })

    .then("Cell is $CELLSTATE on $CELLCOORD", function(state, coord, next) {
        var cellsString = arrayToString(game.getCells());

        if (state == 'dead') {
            expect(cellsString).not.to.contain(coord);
        }
        else if (state == 'live') {
            expect(cellsString).to.contain(coord);
        }
        next();
    })

    return library;
})();