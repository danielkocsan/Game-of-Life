var expect = require('chai').expect,
    Game = require('./../src/Game.js');

describe('Game', function () {
    it('SHOULD be defined', function () {
        expect(Game).to.exist;
    });

    it('SHOULD be a Constructor', function () {
        expect(typeof Game).to.equal('function');
    });
});

describe('Game instance', function () {
    var game;

    beforeEach(function () {
        game = new Game();
    });

    describe('have a getCells() method which', function () {
        it('SHOULD exist', function () {
            expect(game.getCells).to.exist;
            expect(typeof game.getCells).to.equal('function');
        });
        it('SHOULD return an Array', function () {
            expect(game.getCells()).to.an('Array');
        });
    });

    describe('have a roll() method which', function () {
        it('SHOULD exist', function () {
            expect(game.roll).to.exist;
            expect(typeof game.roll).to.equal('function');
        });
    });
});