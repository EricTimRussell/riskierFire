import { collection, query, getDocs, where, addDoc, onSnapshot } from "firebase/firestore"
import { useCurrentUser, useFirestore, getCurrentUser, useFirebaseAuth } from "vuefire"
import { Team } from "../models/Team"
import { useRegionStore } from "../stores/RegionStore";


const db = useFirestore()
class TeamsService {

  async getTeamByUserId(user) {
    const q = query(collection(db, "teams"), where("creatorId", "==", user.value?.uid));
    const querySnapshot = await getDocs(q);
    onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        useRegionStore.teams = new Team(doc.data())
        console.log(useRegionStore.teams);
      });
    })
  }


}
export const teamsService = new TeamsService()