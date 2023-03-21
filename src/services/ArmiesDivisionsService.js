import { collection, query, getDocs, where, addDoc, onSnapshot, updateDoc } from "firebase/firestore"
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

  async editDivision(editable, division) {
    await updateDoc(division, {
      unitSlot1: editable.value.unitSlot1,
      unitSlot2: editable.value.unitSlot2,
      unitSlot3: editable.value.unitSlot3,
      unitSlot4: editable.value.unitSlot4,
      unitSlot5: editable.value.unitSlot5,
      unitSlot6: editable.value.unitSlot6
    });
  }
}

export const armiesDivisionsService = new ArmiesDivisionsService()