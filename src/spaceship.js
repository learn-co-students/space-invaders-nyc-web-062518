class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name;
    //console.log(this.name)
    this.crew = crew;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = "disengaged"
    this.docked = true;
    this.phasersCharge = "uncharged"
    crew.length > 0 ? this.docked = false : this.docked = true
    this.setCrew()
    console.log(this.crew)
  }

  setCrew(){
    this.crew.forEach(member => (member.currentShip = this))
  }
}
