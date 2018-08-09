class CrewMember {
  constructor(position) {
    this.position = position
    this.currentShip = 'Looking for a Rig'
  }

  engageWarpDrive() {
    if (this.currentShip === 'Looking for a Rig') {
      return 'had no effect'
    }
    switch(this.position) {
      case 'Pilot':
        this.currentShip.warpDrive = 'engaged'
        break;
      case 'Gunner':
        break;
      case 'Defender':
        break;
      default:
        break;
    }
  }

  setsInvisibility() {
    if (this.currentShip === 'Looking for a Rig') {
      return 'had no effect'
    }
    switch(this.position) {
      case 'Pilot':
        break;
      case 'Gunner':
        break;
      case 'Defender':
        this.currentShip.cloaked = true;
      default:
        break;
    }
  }

  chargePhasers() {
    if (this.currentShip === 'Looking for a Rig') {
      return 'had no effect'
    }
    switch(this.position) {
      case 'Pilot':
        break;
      case 'Gunner':
        this.currentShip.phasersChage = 'charged'
        break;
      case 'Defender':
        break;
      default:
        break;
    }
  }


}
