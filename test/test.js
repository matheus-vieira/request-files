'use strict';

var expect = require('chai').expect;
var requireFiles = require('../index');

describe('#requireFiles', function() {
    it('require a single file', function() {
        requireFiles('./index.js', function (fileContent) {
            expect(fileContent).to.be.a('function');
        });
    });

    it('require a json file', function() {
        requireFiles('./*.json', function (fileContent) {
            expect(fileContent).to.be.a('object');
        });
    });

    it('require multiple js files from multiple folder', function() {
        var count = 0;
        requireFiles('./test/**/*.js', function (fileContent) {
            count++;
        });
        expect(count).to.equal(4);
    });

    it('require a multiple js files from single folder', function() {
        var count = 0;
        requireFiles('./test/test_folder/*.js', function (fileContent) {
            count++;
        });
        expect(count).to.equal(3);
    });
});