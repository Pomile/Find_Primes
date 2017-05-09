const myApp = require("../apps/getPrime.js");

describe("A suite is just a function", function() {
  

  it("should return [2,3] for 3", function() {

    expect(myApp.getPrimes(3)).toEqual([2, 3]);
  });

  it("should return [2,3, 5] for 6", function() {

    expect(myApp.getPrimes(6)).toEqual([2, 3, 5]);
  });

  it("should return [2,3,5,7] for 7", function() {

    expect(myApp.getPrimes(8)).toEqual([2, 3, 5, 7]);
  });

	it("should return [2,3,5,7,11,13] for 15", function() {

    expect(myApp.getPrimes(15)).toEqual([2, 3, 5, 7, 11, 13]);
  });

	it("should return [2,3,5,7,11,13,17,19] for 15", function() {

    expect(myApp.getPrimes(20)).toEqual([2, 3, 5, 7, 11, 13,17,19]);
  });


	it("should return [2,3,5,7,11,13,17,19,23] for 24", function() {

    expect(myApp.getPrimes(24)).toEqual([2, 3, 5, 7, 11, 13,17,19,23]);
  });

	it("should return result undefined for 0", function() {

    expect(myApp.getPrimes(0)).toEqual([]);
  });

	it("should return result undefined for 0", function() {

    expect(myApp.getPrimes('string')).toEqual([]);
  });

	it("should return result undefined for 1", function() {

    expect(myApp.getPrimes(1)).toEqual([]);
  });

	it("should [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97 ] for 0", function() {

    expect(myApp.getPrimes(100)).toEqual([ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97 ]);
  });



});