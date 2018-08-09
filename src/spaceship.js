let spaceshipId = 0

class Spaceship {
  constructor(name, crew, phaserCount, shieldCount){
    this.name = name
    this.crew = crew
    this.shields = shieldCount
    this.warpDrive = "disengaged"
    this.docked = true
    this.cloaked = false
    this.phasers = phaserCount
    this.phasersCharge = "uncharged"
    this.id = ++spaceshipId

    if (this.crew.length === 0) {
      return this.crew.docked = true;
    } else {
      this.crew.map( (crewMember) => crewMember.currentShip = this)
      return this.docked = false;
     }
    }


};
