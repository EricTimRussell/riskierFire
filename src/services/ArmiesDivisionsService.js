import { collection, query, getDocs, where, addDoc, onSnapshot } from "firebase/firestore"
import { useCurrentUser, useFirestore, getCurrentUser, useFirebaseAuth } from "vuefire"
import { useArmyDivisionStore } from "../stores/ArmyDivisionStore";




const db = useFirestore()

class ArmiesDivisionsService {
  async getdivisionsByUserId(user) {
    // get user divisions by their firbase id
    const q = query(collection(db, "divisions"), where("creatorId", "==", user.value?.uid));
    const querySnapshot = await getDocs(q);
    onSnapshot(q, (querySnapshot) => {
      useArmyDivisionStore.divisions = []
      querySnapshot.docs.map((doc) => {
        // console.log(doc.id, " => ", doc.data());
        useArmyDivisionStore.divisions.push({ ...doc.data(), id: doc.id })
        // console.log(useArmyDivisionStore.divisions);
      });
    })
  }

}

export const armiesDivisionsService = new ArmiesDivisionsService()