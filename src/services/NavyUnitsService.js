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

  async editCarrier(editable, carrier) {
    await updateDoc(carrier, {
      airUnit1: editable.value.airUnit1,
      airUnit2: editable.value.airUnit2,
      airUnit3: editable.value.airUnit3,
      airUnit4: editable.value.airUnit4,
      airUnit5: editable.value.airUnit5,
      airUnit6: editable.value.airUnit6,
      groundUnit1: editable.value.groundUnit1,
      groundUnit2: editable.value.groundUnit2,
      groundUnit3: editable.value.groundUnit3,
      groundUnit4: editable.value.groundUnit4,
      groundUnit5: editable.value.groundUnit5,
      groundUnit6: editable.value.groundUnit6
    });
  }

  async deleteCarrierCard(carrier, team) {
    if (carrier.creatorId != team.creatorId) {
      console.error("invalid id's");
    }
    await deleteDoc(doc(db, "carriers", carrier.id))
  }

}
export const navyUnitsService = new NavyUnitsService()