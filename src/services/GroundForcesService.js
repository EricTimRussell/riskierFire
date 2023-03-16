import { useFirestore } from "vuefire"
import { doc, increment, updateDoc, where } from "firebase/firestore";




const db = useFirestore()

class GroundForcesService {
  // SECTION Infantry
  async addInfantry(team) {
    await updateDoc(team, {
      totalInfantry: increment(1),
      totalCapital: increment(-1),
      totalIndustry: increment(-1),
      totalAgriculture: increment(-3)
    });
  }
  async removeInfantry(team) {
    await updateDoc(team, {
      totalInfantry: increment(-1),
      totalCapital: increment(1),
      totalIndustry: increment(1),
      totalAgriculture: increment(3)
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
      totalCapital: increment(-2),
      totalIndustry: increment(-2),
      totalAgriculture: increment(-3)
    });
  }
  async removeMechanized(team) {
    await updateDoc(team, {
      totalMechanized: increment(-1),
      totalCapital: increment(2),
      totalIndustry: increment(2),
      totalAgriculture: increment(3)
    });
  }

  // SECTION IFV
  async addIFV(team) {
    await updateDoc(team, {
      totalIFV: increment(1),
      totalCapital: increment(-2),
      totalIndustry: increment(-3),
      totalAgriculture: increment(-1)
    });
  }
  async removeIFV(team) {
    await updateDoc(team, {
      totalIFV: increment(-1),
      totalCapital: increment(2),
      totalIndustry: increment(3),
      totalAgriculture: increment(1)
    });
  }
}
export const groundForcesService = new GroundForcesService()