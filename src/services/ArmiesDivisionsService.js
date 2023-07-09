import { collection, query, getDocs, where, addDoc, onSnapshot, updateDoc, doc, deleteDoc } from "firebase/firestore"
import { useCurrentUser, useFirestore, getCurrentUser, useFirebaseAuth } from "vuefire"
import { useArmyDivisionStore } from "../stores/ArmyDivisionStore";




const db = useFirestore()

class ArmiesDivisionsService {
  async getDivisionsByUserId(user) {
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

  async deleteDivision(division, team) {
    if (division.creatorId != team.creatorId) {
      console.error("invalid id's");
    }
    await deleteDoc(doc(db, "divisions", division.id));
  }

  async getArmiesByUserId(user) {
    // get user armies by their firbase id
    const q = query(collection(db, "armies"), where("creatorId", "==", user.value?.uid));
    const querySnapshot = await getDocs(q);
    onSnapshot(q, (querySnapshot) => {
      useArmyDivisionStore.armies = []
      querySnapshot.docs.map((doc) => {
        // console.log(doc.id, " => ", doc.data());
        useArmyDivisionStore.armies.push({ ...doc.data(), id: doc.id })
        // console.log(useArmyDivisionStore.armies);
      });
    })
  }

  async editArmy(editable, army) {
    await updateDoc(army, {
      unitSlot1: editable.value.unitSlot1,
      unitSlot2: editable.value.unitSlot2,
      unitSlot3: editable.value.unitSlot3,
      unitSlot4: editable.value.unitSlot4,
      unitSlot5: editable.value.unitSlot5,
      unitSlot6: editable.value.unitSlot6,
      unitSlot7: editable.value.unitSlot7,
      unitSlot8: editable.value.unitSlot8,
      unitSlot9: editable.value.unitSlot9,
    });
  }

  async deleteArmy(armyId) {
    await deleteDoc(doc(db, "armies", armyId))
  }
}

export const armiesDivisionsService = new ArmiesDivisionsService()