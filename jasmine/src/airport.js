function Airport(){
  this.planes=[];
};

Airport.prototype.land = function(plane) {
  if ( plane.weather() == "stormy") {
    throw new Error("It can not land");
  };
  this.planes.push(plane);
  plane.landed();
};

Airport.prototype.take_off = function(plane){
  if ( plane.weather() == "stormy") {
    throw new Error("It can not take_off");
  }
  this.planes = this.planes.filter(item => item != plane);
  plane.taken_off();
}
