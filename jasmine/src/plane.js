function Plane(){

};

Plane.prototype.landed = function(){
  this._onGround = true;
};

Plane.prototype.taken_off = function(){
  this._onGround = false;
};

Plane.prototype.weather = function(){

}
