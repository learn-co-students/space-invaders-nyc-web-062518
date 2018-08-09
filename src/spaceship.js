let spaceships = []

let spaceshipId = 0
class Spaceship {
  constructor(name, crew, phasers, shields, cloaked = false, warpDrive='disengaged') {

    this.name = name
    this.crew = crew
    this.phasers = phasers
    this.shields = shields
    this.cloaked = cloaked
    this.warpDrive = warpDrive
    this.phasersCharge = 'uncharged'
    this.id = ++spaceshipId

    if (crew.length > 0) {
      this.docked = false
    } else {
      this.docked = true
    }
    spaceships.push(this)

    this.crew.forEach(function(member) {member.currentShip = this}.bind(this))
    // !crew == [] ? this.docked = true : this.docked = false

  }

}
