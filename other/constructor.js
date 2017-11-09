function Building (windows) {
  this.what = "building";
  this.windows = windows;
}

Building.prototype.countWindows = function() {
  console.log(this.windows);
}

var myBuilding = new Building(4);
