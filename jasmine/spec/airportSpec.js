describe("airport", function() {
  describe("landing", function(){
  it("when a plane labnds in an airport",function(){
    airport = new Airport ;
    var plane ;
    airport.land(plane);
    expect(airport.planes).toContain(plane);
  });
  });





});
