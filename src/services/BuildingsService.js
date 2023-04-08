import { useFirestore } from "vuefire"
import { doc, increment, updateDoc, where } from "firebase/firestore";




const db = useFirestore()
class BuildingsService {
  // SECTION Airfield
  async addAirfield(team) {
    await updateDoc(team, {
      totalAirfields: increment(1),
      totalCapital: increment(-2),
      totalAgriculture: increment(-1)
    });
  }

  async removeAirfield(team) {
    await updateDoc(team, {
      totalAirfields: increment(-1),
      totalCapital: increment(2),
      totalAgriculture: increment(1)
    });
  }

  // SECTION Naval Yard
  async addNavalYard(team) {
    await updateDoc(team, {
      totalNavalYards: increment(1),
      totalCapital: increment(-2),
      totalAgriculture: increment(-2)
    });
  }

  async removeNavalYard(team) {
    await updateDoc(team, {
      totalNavalYards: increment(-1),
      totalCapital: increment(2),
      totalAgriculture: increment(2)
    });
  }

  // SECTION Factory
  async addFactory(team) {
    await updateDoc(team, {
      totalFactories: increment(1),
      totalCapital: increment(-2),
      totalIndustry: increment(-2),
      totalAgriculture: increment(-2)
    });
  }

  async removeFactory(team) {
    await updateDoc(team, {
      totalFactories: increment(-1),
      totalCapital: increment(2),
      totalIndustry: increment(-2),
      totalAgriculture: increment(2)
    });
  }

  // SECTION Construction
  async constructBuilding() {

  }

  async constructShip() {

  }
}
export const buildingsService = new BuildingsService()