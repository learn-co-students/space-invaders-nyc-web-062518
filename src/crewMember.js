class CrewMember {

  constructor(position, currentShip) {
    this.position = position;
    // this.currentShip = currentShip;
    // this.currentShip = "Looking for a Rig"
  }

  engageWarpDrive(currentShip) {
    currentShip === "Looking for a Rig" ? return "had no effect" : this.currentShip.warpDrive = "engaged"
  }

  setsInvisibility() {

  }

  chargePhasers() {

  }
}
