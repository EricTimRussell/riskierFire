import { useFirestore } from "vuefire"
import { doc, increment, updateDoc, where } from "firebase/firestore";




const db = useFirestore()
class NavyUnitsService {
  // SECTION Carrier
  async addCarrier(team) {
    await updateDoc(team, {
      totalCarriers: increment(1),
      totalCapital: increment(-5),
      totalIndustry: increment(-3),
      totalAgriculture: increment(-3)
    });
  }
  async removeCarrier(team) {
    await updateDoc(team, {
      totalCarriers: increment(-1),
      totalCapital: increment(5),
      totalIndustry: increment(3),
      totalAgriculture: increment(3)
    });
  }

  // SECTION Cruiser
  async addCruiser(team) {
    await updateDoc(team, {
      totalCruisers: increment(1),
      totalCapital: increment(-3),
      totalIndustry: increment(-4),
      totalAgriculture: increment(-1)
    });
  }
  async removeCruiser(team) {
    await updateDoc(team, {
      totalCruisers: increment(-1),
      totalCapital: increment(3),
      totalIndustry: increment(4),
      totalAgriculture: increment(1)
    });
  }

  // SECTION Destroyer
  async addDestroyer(team) {
    await updateDoc(team, {
      totalDestroyers: increment(1),
      totalCapital: increment(-3),
      totalIndustry: increment(-3),
      totalAgriculture: increment(-1)
    });
  }
  async removeDestroyer(team) {
    await updateDoc(team, {
      totalDestroyers: increment(-1),
      totalCapital: increment(3),
      totalIndustry: increment(3),
      totalAgriculture: increment(1)
    });
  }
}
export const navyUnitsService = new NavyUnitsService()