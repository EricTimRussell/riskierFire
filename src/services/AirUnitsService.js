import { useFirestore } from "vuefire"
import { doc, increment, updateDoc, where } from "firebase/firestore";




const db = useFirestore()
class AirUnitsService {
  // SECTION Fighter Aircraft
  async addFighterAircraft(team) {
    await updateDoc(team, {
      totalFighterAircraft: increment(1),
      totalCapital: increment(-3),
      totalIndustry: increment(-3),
    });
  }
  async removeFighterAircraft(team) {
    await updateDoc(team, {
      totalFighterAircraft: increment(-1),
      totalCapital: increment(3),
      totalIndustry: increment(3),
    });
  }

  // SECTION Close Air Support
  async addCloseAirSupport(team) {
    await updateDoc(team, {
      totalCloseAirSupport: increment(1),
      totalCapital: increment(-3),
      totalIndustry: increment(-3),
    });
  }
  async removeCloseAirSupport(team) {
    await updateDoc(team, {
      totalCloseAirSupport: increment(-1),
      totalCapital: increment(3),
      totalIndustry: increment(3),
    });
  }

  // SECTION Cargo Aircraft
  async addCargoAircraft(team) {
    await updateDoc(team, {
      totalCargoAircraft: increment(1),
      totalCapital: increment(-1),
      totalIndustry: increment(-2),
    });
  }
  async removeCargoAircraft(team) {
    await updateDoc(team, {
      totalCargoAircraft: increment(-1),
      totalCapital: increment(1),
      totalIndustry: increment(2),
    });
  }
}
export const airUnitsService = new AirUnitsService()