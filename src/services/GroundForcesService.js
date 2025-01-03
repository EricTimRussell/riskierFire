import { useFirestore } from "vuefire"
import { doc, increment, updateDoc, where } from "firebase/firestore";




const db = useFirestore()

class GroundForcesService {
  // SECTION Infantry
  async addInfantry(team) {
    await updateDoc(team, {
      totalInfantry: increment(1),
      totalCapital: increment(-2),
      totalIndustry: increment(-1),
      totalAgriculture: increment(-5)
    });
  }
  async removeInfantry(team) {
    await updateDoc(team, {
      totalInfantry: increment(-1),
      totalCapital: increment(2),
      totalIndustry: increment(1),
      totalAgriculture: increment(5)
    });
  }

  // SECTION SpecialForces
  async addSpecialForces(team) {
    await updateDoc(team, {
      totalSpecialForces: increment(1),
      totalCapital: increment(-3),
      totalIndustry: increment(-1),
      totalAgriculture: increment(-3)
    });
  }
  async removeSpecialForces(team) {
    await updateDoc(team, {
      totalSpecialForces: increment(-1),
      totalCapital: increment(3),
      totalIndustry: increment(1),
      totalAgriculture: increment(3)
    });
  }

  // SECTION Mechanized
  async addMechanized(team) {
    await updateDoc(team, {
      totalMechanized: increment(1),
      totalCapital: increment(-3),
      totalIndustry: increment(-3),
      totalAgriculture: increment(-5)
    });
  }
  async removeMechanized(team) {
    await updateDoc(team, {
      totalMechanized: increment(-1),
      totalCapital: increment(3),
      totalIndustry: increment(3),
      totalAgriculture: increment(5)
    });
  }

  // SECTION IFV
  async addIFV(team) {
    await updateDoc(team, {
      totalIFV: increment(1),
      totalCapital: increment(-4),
      totalIndustry: increment(-5),
      totalAgriculture: increment(-1)
    });
  }
  async removeIFV(team) {
    await updateDoc(team, {
      totalIFV: increment(-1),
      totalCapital: increment(4),
      totalIndustry: increment(5),
      totalAgriculture: increment(1)
    });
  }

  // SECTION MBT
  async addMBT(team) {
    await updateDoc(team, {
      totalMBT: increment(1),
      totalCapital: increment(-6),
      totalIndustry: increment(-6),
      totalAgriculture: increment(-1)
    });
  }
  async removeMBT(team) {
    await updateDoc(team, {
      totalMBT: increment(-1),
      totalCapital: increment(6),
      totalIndustry: increment(6),
      totalAgriculture: increment(1)
    });
  }

  // SECTION Anti-Aircraft
  async addAntiAircraft(team) {
    await updateDoc(team, {
      totalAntiAircraft: increment(1),
      totalCapital: increment(-3),
      totalIndustry: increment(-1),
    });
  }
  async removeAntiAircraft(team) {
    await updateDoc(team, {
      totalAntiAircraft: increment(-1),
      totalCapital: increment(3),
      totalIndustry: increment(1),
    });
  }

  // SECTION Artillery
  async addArtillery(team) {
    await updateDoc(team, {
      totalArtillery: increment(1),
      totalCapital: increment(-1),
      totalIndustry: increment(-3),
    });
  }
  async removeArtillery(team) {
    await updateDoc(team, {
      totalArtillery: increment(-1),
      totalCapital: increment(1),
      totalIndustry: increment(3),
    });
  }

  // SECTION Missile Artillery
  async addMissileArtillery(team) {
    await updateDoc(team, {
      totalMissileArtillery: increment(1),
      totalCapital: increment(-3),
      totalIndustry: increment(-3),
    });
  }
  async removeMissileArtillery(team) {
    await updateDoc(team, {
      totalMissileArtillery: increment(-1),
      totalCapital: increment(3),
      totalIndustry: increment(3),
    });
  }
}
export const groundForcesService = new GroundForcesService()