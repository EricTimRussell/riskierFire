import { useFirestore } from "vuefire"
import { collection, doc, getDocs, increment, onSnapshot, updateDoc, where, deleteDoc } from "firebase/firestore";
import { useConstructionStore } from "../stores/ConstructionStore";
import { query } from "firebase/database";




const db = useFirestore()
class BuildingsService {

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