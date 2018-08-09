class CrewMember {
  constructor(position) {

    this.position = position
    this.currentShip = 'Looking for a Rig'

  }

  // currentShip() {
  //   if (this.shipId) {
  //     console.log("ship ship")
  //     return spaceships.find(function (spaceship) {
  //       return spaceship.id === this.shipId
  //     })
  //   } else {
  //     console.log('looking for a rig')
  //     return 'Looking for a Rig'
  //   }
  // }

  chargePhasers() {
    if (this.currentShip == 'Looking for a Rig') {
      return 'had no effect'
    }
  }
  engageWarpDrive() {
    if (this.currentShip == 'Looking for a Rig') {
      return 'had no effect'
    }
  }
  setsInvisibility() {
    console.log(this.currentShip)
    if (this.currentShip == 'Looking for a Rig') {
      return 'had no effect'
    } else if (this.position == "Defender") {
      this.currentShip.cloaked = true
    }
  }



  assignShip(ship) {
    this.currentShip = ship
  }
}
