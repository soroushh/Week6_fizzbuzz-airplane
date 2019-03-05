describe("airport", function() {
  describe("landing", function(){
  it("when a plane labnds in an airport",function(){
    airport = new Airport ;
    var plane ;
    plane = {
      landed: function(){}
    };
    spyOn(plane,"landed");
    airport.land(plane);
    expect(airport.planes).toContain(plane);
    expect(plane.landed).toHaveBeenCalled();
  });
  });
});
