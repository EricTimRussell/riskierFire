import { ref } from "vue";
import { Rules } from "../models/Rules";
import { useRulesStore } from "../stores/RulesStore";

import { firebaseApp } from "../firebase";
import { collection, query, getDocs, onSnapshot } from "firebase/firestore"
import { useFirestore, useCollection, useDocument } from "vuefire"

const db = useFirestore()
class RulesService {


  async getRules() {
    try {
      useRulesStore.rules = {}
      const q = query(collection(db, "rules"));
      const querySnapshot = await getDocs(q);
      onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          useRulesStore.rules = new Rules(doc.data())
        });
      })
    } catch (error) {
    }
  }

}

export const rulesService = new RulesService()