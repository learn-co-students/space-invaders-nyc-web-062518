class CrewMember {
  constructor(position) {

    this.position = position
    // if (shipId) {
    //   this.shipId = shipId
    // }
  }

  currentShip() {
    if (this.shipId) {
      console.log("ship ship")
      return spaceships.find(function (spaceship) {
        return spaceship.id === this.shipId
      })
    } else {
      console.log('looking for a rig')
      return 'Looking for a Rig'
    }
  }

  chargePhasers() {
    if (!this.shipId) {
      return 'had no effect'
    }
  }
  engageWarpDrive() {
    if (!this.shipId) {
      return 'had no effect'
    }
  }
  setsInvisibility() {
    if (!this.currentShip) {
      return 'had no effect'
    }else if(this.position == "Defender"){
      this.currentShip.cloaked = true
    }
  }



  assignShip(ship) {
    this.currentShip = ship
  }
}
