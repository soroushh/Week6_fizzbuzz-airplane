describe("airport", function() {
  describe("landing", function(){
  it("when a plane labnds in an airport",function(){
    airport = new Airport ;
    var plane ;
    plane = {
      landed: function(){},
      taken_off: function(){},
      weather: function(){}
    };
    spyOn(plane,"landed");
    airport.land(plane);
    expect(airport.planes).toContain(plane);
    expect(plane.landed).toHaveBeenCalled();
  });
  });

  describe("take_off",function(){
  it("when a plane takes off from an airport",function(){
    airport = new Airport ;
    var plane ;
    plane = {
      landed: function(){},
      taken_off: function(){},
      weather: function(){}
    };
    spyOn(plane,"landed");
    airport.land(plane);
    expect(plane.landed).toHaveBeenCalled();
    spyOn(plane , "taken_off")
    airport.take_off(plane)
    expect(airport.planes).not.toContain(plane);
    expect(plane.taken_off).toHaveBeenCalled();
  });
  });
  describe("taking_off is impossible in stormy weather",function(){
  it("When it is stormy, a plane can not take_off",function(){
    airport = new Airport ;
    var plane ;
    plane = {
      landed: function(){},
      taken_off: function(){},
      weather: function(){}
    };
    spyOn(plane,"weather").and.returnValue("stormy");
    expect(function(){airport.take_off(plane)}).toThrowError("It can not take_off");
  });
  });

  describe("landing is impossible in stormy weather",function(){
  it("When it is stormy, a plane can not take_off",function(){
    airport = new Airport ;
    var plane ;
    plane = {
      landed: function(){},
      taken_off: function(){},
      weather: function(){}
    };
    spyOn(plane,"weather").and.returnValue("stormy");
    expect(function(){airport.land(plane)}).toThrowError("It can not land");
  });
  });



});
