describe('Plane', function(){

  var plane;
  var airport;
  beforeEach(function() {
    plane = new Plane ;
  });

  describe("when a plane has landed, it is on land" , function(){
    it("When a palne lands, it's on ground status will be true",function(){
    plane = new Plane ;
    var airport;
    plane.landed();
    expect(plane._onGround).toBe(true);

  });
  });
});
