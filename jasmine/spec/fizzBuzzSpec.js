
describe('FizzBuzz', function() {

  beforeEach(function() {
    fizzBuzz = new FizzBuzz;
  });


  describe("multiplies of 3",function(){
  it("returns fizz when the input is 3", function() {
    expect(fizzBuzz.play(3)).toEqual("fizz");
  });
  });

  describe("multiplies of 5",function(){
  it("returns buzz when the input is 5", function() {
    expect(fizzBuzz.play(5)).toEqual("buzz");
  });
  });

describe("multiplies of 15", function() {
  it("returns fizzbuzz when the input is 15", function(){
    expect(fizzBuzz.play(15)).toEqual("fizzbuzz");
  });
  });
  describe("multiplies of none", function(){
  it("returns the number itself when the number is not 3, 5, or 15",function(){
    expect(fizzBuzz.play(1)).toEqual(1);
  });
  });
});
