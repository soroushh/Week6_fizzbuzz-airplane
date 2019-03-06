function Airport(){
  this.planes=[];
};

Airport.prototype.land = function(plane) {
  this.planes.push(plane);
  plane.landed();
};

Airport.prototype.take_off = function(plane){
  this.planes = this.planes.filter(item => item != plane);
  plane.taken_off();
}
