class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name
    this.crew = crew
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = 'disengaged'
    // this.docked = true
    if (this.crew.length === 0) {
      this.docked = true
    } else if (this.crew.length > 0) {
      this.docked = false
    }
    this.phasersCharge = 'uncharged'
    crew.forEach(member => member.currentShip = this)
  }



}
//
// let pilot, defender, gunner, aluminumFalcon;
// pilot = new CrewMember('Pilot');
// defender = new CrewMember('Defender');
// gunner = new CrewMember('Gunner');
// aluminumFalcon = new Spaceship('Millenium Falcon', [pilot, defender, gunner], 5, 4);
