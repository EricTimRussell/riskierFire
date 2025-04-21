import { useCurrentUser, useFirestore, getCurrentUser, useFirebaseAuth } from "vuefire"
import { collection, query, getDocs, where, addDoc, onSnapshot, updateDoc, increment, doc, deleteDoc } from "firebase/firestore";
import { useNavyStore } from "../stores/NavyStore"



const db = useFirestore()
class NavyUnitsService {
  // SECTION Carrier

  async getCarriersByUserId(user) {
    // get user carriers by their firbase id
    const q = query(collection(db, "carriers"), where("creatorId", "==", user.value?.uid));
    const querySnapshot = await getDocs(q);
    onSnapshot(q, (querySnapshot) => {
      useNavyStore.navy = []
      querySnapshot.docs.map((doc) => {
        // console.log(doc.id, " => ", doc.data());
        useNavyStore.navy.push({ ...doc.data(), id: doc.id })
      });
    })
  }

  async deleteCarrierCard(carrier, team) {
    if (carrier.creatorId != team.creatorId) {
      console.error("invalid id's");
    }
    await deleteDoc(doc(db, "carriers", carrier.id))
  }

}
export const navyUnitsService = new NavyUnitsService()