class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name;
    this.crew = [];
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = "disengaged"
    this.docked = true;
    this.phasersCharge = "uncharged"
    crew.length > 0 ? this.docked = false : this.docked = true
  }
}
