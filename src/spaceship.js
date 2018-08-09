class Spaceship {

  constructor(name, crewMembers, phasers, shields){
    this.name = name
    this.crew = crewMembers
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = "disengaged"
    if(crewMembers.length === 0) {
      this.docked = true
    } else {
      this.docked = false
    }
    this.phasersCharge = "uncharged"
    this.addCrew()
  }

  addCrew() {
    this.crew.forEach(crewMember => (crewMember.currentShip = this)); 
  }
}
