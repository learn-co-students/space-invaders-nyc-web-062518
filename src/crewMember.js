class CrewMember {

  constructor(position) {
    this.position = position;
    this.currentShip = 'Looking for a Rig';
  }

  engageWarpDrive() {
    if(this.position === 'pilot' && this.currentShip !== 'Looking for a Rig'){
      return this.currentShip.warpDrive = 'engaged'
    } else{
      return 'had no effect'
    }
  }

  setsInvisibility() {
    if(this.position === 'defender' && this.currentShip !==  'Looking for a Rig'){
      return this.currentShip.cloaked = true
    } else {
      return 'had no effect'
    }
  }

  chargePhasers() {
    if(this.currentShip === 'Looking for a Rig'){
      return 'had no effect'
    }
  }

}
