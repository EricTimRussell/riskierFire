import { useFirestore } from "vuefire"
import { doc, increment, updateDoc, where } from "firebase/firestore";




const db = useFirestore()

class GroundForcesService {
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

}
export const groundForcesService = new GroundForcesService()