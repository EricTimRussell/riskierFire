import { collection, query, getDocs, where, addDoc, onSnapshot } from "firebase/firestore"
import { useCurrentUser, useFirestore, getCurrentUser, useFirebaseAuth } from "vuefire"
import { Region } from "../models/Region";
import { useRegionStore } from "../stores/RegionStore";




const db = useFirestore()

class RegionsService {
  async getRegionsByUserId(user) {
    // get user regions by their firbase id
    const q = query(collection(db, "regions"), where("creatorId", "==", user.value?.uid));
    const querySnapshot = await getDocs(q);
    onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        useRegionStore.regions.push(new Region(doc.data()))
        console.log(useRegionStore.regions);
      });
    })
  }
}


export const regionsService = new RegionsService()