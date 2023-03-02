import { ref } from "vue";
import { useRulesStore } from "../stores/RulesStore";
import { firebaseApp } from "../firebase";
import { collection, query, getDocs, getDoc, onSnapshot, doc, where } from "firebase/firestore"
import { useCollection, useFirestore } from "vuefire"
import { Building, Combat, General, Unit } from "../models/Rules";

const db = useFirestore()
class RulesService {
  async getUnitRules() {
    try {
      const docRef = doc(db, "rules", "units");
      const docSnap = await getDoc(docRef);
      // console.log("Document data:", docSnap.data());
      useRulesStore.units = new Unit(docSnap.data())
    } catch (error) {
      console.error(error);
    }
  }

  async getBuildingRules() {
    try {
      const docRef = doc(db, "rules", "buildings");
      const docSnap = await getDoc(docRef);
      // console.log("Document data:", docSnap.data());
      useRulesStore.buildings = new Building(docSnap.data())
    } catch (error) {
      console.error(error);
    }
  }

  async getGeneralRules() {
    try {
      const docRef = doc(db, "rules", "general");
      const docSnap = await getDoc(docRef);
      // console.log("Document data:", docSnap.data());
      useRulesStore.general = new General(docSnap.data())
    } catch (error) {
      console.error(error);
    }
  }

  async getCombatRules() {
    try {
      const docRef = doc(db, "rules", "combat");
      const docSnap = await getDoc(docRef);
      // console.log("Document data:", docSnap.data());
      useRulesStore.combat = new Combat(docSnap.data())
    } catch (error) {
      console.error(error);
    }
  }
}
export const rulesService = new RulesService()



