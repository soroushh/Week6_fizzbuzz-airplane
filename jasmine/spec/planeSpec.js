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
  describe("when a plane has takne_off, it is not on land" , function(){
    it("When a palne takes off, it's on ground status will be false",function(){
    plane = new Plane ;
    var airport;
    plane.taken_off();
    expect(plane._onGround).toBe(false);
  });
  });
});
