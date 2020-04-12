let expect = require('chai').expect;
let Util = require('../src/util');
describe('util tests', function() { // Just to verify test libraries work
    beforeEach(function() {
        util = new Util();
    });

    it('should pass this canary test', function() {
        expect(true).to.eql(true);
    });

    it('should pass if f2c returns 0C for 32F', function() {
        var fahrenheit = 32;

        var celsius = util.f2c(fahrenheit);

        expect(celsius).to.eql(0);
    });

    it('should pass if f2c returns 10C for 50F', function() {
        var fahrenheit = 50;

        var celsius = util.f2c(fahrenheit);

        expect(celsius).to.eql(10);
    });

    it('should pass if a decimal number is passed in', function() {
        var fahrenheit = 50.0;

        var celsius = util.f2c(fahrenheit);

        expect(celsius).to.eql(10);
    });

    it('should pass if a negative number is passed in', function() {
        var fahrenheit = -13;

        var celsius = util.f2c(fahrenheit);

        expect(celsius).to.eql(-25);
    });

    it('should pass if celsius is a decimal', function() {
        var fahrenheit = 70;

        var celsius = util.f2c(fahrenheit);

        expect(celsius).to.eql(21.111111111111111)
    })
});