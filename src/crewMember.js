// let crewMemberId = 0
//
// class CrewMember {
//   constructor(position) {
//     this.id = ++crewMemberId
//     this.position = position
//     this.currentShip = "Looking for a Rig"
//   }
//
//   engageWarpDrive() {
//     if (this.currentShip === "Looking for a Rig") {
//       return "had no effect"
//     } else {
//       return this.currentShip.warpDrive = "engaged"
//     }
//   }
//
//   setsInvisibility() {
//     if (this.currentShip === "Looking for a Rig") {
//       return "had no effect"
//     } else {
//       if (this.currentShip.cloaked === false) {
//         return this.currentShip.cloaked = true
//       } else {
//         return this.currentShip.cloaked = false
//       }
//     }
//   }
//
//   chargePhasers() {
//     if (this.currentShip === "Looking for a Rig") {
//       return "had no effect"
//     } else {
//       return this.phasersCharge = "charged"
//     }
//   }
//
// }

let crewMemberId = 0

class CrewMember {
  constructor(position) {
    this.id = ++crewMemberId
    this.position = position
    this.currentShip = "Looking for a Rig"
  };

  engageWarpDrive() {
    if (this.currentShip === "Looking for a Rig") {
      return "had no effect"
    } else {
      if (this.currentShip.warpDrive === "disengaged") {
        return this.currentShip.warpDrive = "engaged"
      } else {
        return this.currentShip.warpDrive = "disengaged"
      }
    }
  }

  setsInvisibility() {
    if (this.currentShip === "Looking for a Rig") {
      return "had no effect"
    } else {
      if (this.currentShip.cloaked === true) {
        return this.currentShip.cloaked = false
      } else {
        return this.currentShip.cloaked = true
      };

    };
  };

  chargePhasers() {
    if (this.currentShip === "Looking for a Rig") {
      return "had no effect"
    } else {
      return this.phasersCharge = "charged"
    };
  };

};
