import { useFirestore } from "vuefire"
import { collection, doc, getDocs, increment, onSnapshot, updateDoc, where, deleteDoc } from "firebase/firestore";
import { useConstructionStore } from "../stores/ConstructionStore";
import { query } from "firebase/database";




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
      totalCapital: increment(-1),
      totalAgriculture: increment(-3),
      totalProduction: increment(1)
    });
  }

  async removeFactory(team) {
    await updateDoc(team, {
      totalFactories: increment(-1),
      totalCapital: increment(1),
      totalAgriculture: increment(3),
      totalProduction: increment(-1)
    });
  }

  // SECTION Construction
  async getConstructionByUserId(user) {
    const q = query(collection(db, "construction"), where("creatorId", "==", user.value?.uid));
    const querySnapshot = await getDocs(q);
    onSnapshot(q, (querySnapshot) => {
      useConstructionStore.construction = []
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        useConstructionStore.construction.push({ ...doc.data(), id: doc.id })
        // console.log(useConstructionStore.construction);
      });
    })
  }

  async deleteConstruction(construction, teamCreatorId, team) {
    if (construction.creatorId != teamCreatorId) {
      console.error("invalid id's");
    }
    deleteDoc(doc(db, "construction", construction.id));
    updateDoc(team, {
      totalProduction: increment(1),
    });
  }
}
export const buildingsService = new BuildingsService()