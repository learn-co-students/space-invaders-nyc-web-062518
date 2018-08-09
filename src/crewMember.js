class CrewMember {

  constructor(position) {
    this.position = position
    this.currentShip = "Looking for a Rig"
  }

//pilot
  engageWarpDrive() {
    if (this.currentShip === "Looking for a Rig") {
      return "had no effect"
    } else if (this.position === "Pilot") {
        this.currentShip.warpDrive = "engaged"
    }

  }
//defender
  setsInvisibility() {
    if (this.currentShip === "Looking for a Rig") {
      return "had no effect"
    } else if (this.position === "Defender") {
        this.currentShip.cloaked = true
    }
  }
//gunner
  chargePhasers() {
    if (this.currentShip === "Looking for a Rig") {
      return "had no effect"
    } else if (this.position === "Gunner") {
        this.currentShip.phasersCharge = "charged"
    }
  }
}
