import { collection, query, getDocs, doc, where, addDoc, onSnapshot, deleteDoc } from "firebase/firestore"
import { useCurrentUser, useFirestore, getCurrentUser, useFirebaseAuth } from "vuefire"
import { useRegionStore } from "../stores/RegionStore";




const db = useFirestore()

class RegionsService {
  async getRegionsByUserId(user) {
    // get user regions by their firbase id
    const q = query(collection(db, "regions"), where("creatorId", "==", user.value?.uid));
    const querySnapshot = await getDocs(q);
    onSnapshot(q, (querySnapshot) => {
      useRegionStore.regions = []
      querySnapshot.docs.map((doc) => {
        // console.log(doc.id, " => ", doc.data());
        useRegionStore.regions.push({ ...doc.data(), id: doc.id })
        // console.log(useRegionStore.regions);
      });
    })
  }

  async getCitiesByUserId(user) {
    // get user regions by their firbase id
    const q = query(collection(db, "cities"), where("creatorId", "==", user.value?.uid));
    const querySnapshot = await getDocs(q);
    onSnapshot(q, (querySnapshot) => {
      useRegionStore.cities = []
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        useRegionStore.cities.push({ ...doc.data(), id: doc.id })
        // console.log(useRegionStore.cities);
      });
    })
  }

}
export const regionsService = new RegionsService()