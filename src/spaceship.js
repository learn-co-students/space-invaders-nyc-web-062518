let spaceshipId = 0

class Spaceship {
  constructor(name, crew, phasers, shields){
    this.name = name
    this.crew = crew
    this.shields = shields
    this.warpDrive = "disengaged"
    // this.docked = true
    this.cloaked = false
    this.phasers = phasers
    this.phasersCharge = "uncharged"
    this.id = ++spaceshipId

    if (this.crew.length === 0) {
      return this.docked = true
    } else {
      this.crew.map( (crewMember) => crewMember.currentShip = this)
      return this.docked = false
    }

  }

}
