import { collection, query, getDocs, doc, where, addDoc, onSnapshot, deleteDoc, updateDoc, increment } from "firebase/firestore"
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

  async deleteRegion(region, teamCreatorId, team) {
    if (region.creatorId != teamCreatorId) {
      console.error("invalid id's");
    }
    await deleteDoc(doc(db, "regions", region.id));
    // Delete region updates team object to reflect resources lost automatically
    updateDoc(team, {
      totalCapital: increment(-region.capital),
      totalIndustry: increment(-region.industry),
      totalAgriculture: increment(-region.agriculture)
    });
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

  async createSmallCity(editable, user, team) {
    const newSmallCity = await addDoc(collection(db, "cities"), {
      ...editable.value
    });
    await updateDoc(team, {
      // Create city updates team object to reflect resources gained automatically
      totalCapital: increment(editable.value.capital),
      totalIndustry: increment(editable.value.industry),
      totalAgriculture: increment(editable.value.agriculture),
      totalProduction: increment(editable.value.production)
    });
  }

  async createMediumCity(editable, user, team) {
    const newMediumCity = await addDoc(collection(db, "cities"), {
      ...editable.value
    });
    await updateDoc(team, {
      // Create city updates team object to reflect resources gained automatically
      totalCapital: increment(editable.value.capital),
      totalIndustry: increment(editable.value.industry),
      totalAgriculture: increment(editable.value.agriculture),
      totalProduction: increment(editable.value.production)
    });
  }

  async createLargeCity(editable, user, team) {
    const newLargeCity = await addDoc(collection(db, "cities"), {
      ...editable.value
    });
    await updateDoc(team, {
      // Create city updates team object to reflect resources gained automatically
      totalCapital: increment(editable.value.capital),
      totalIndustry: increment(editable.value.industry),
      totalAgriculture: increment(editable.value.agriculture),
      totalProduction: increment(editable.value.production)
    });
  }

  async deleteCity(city, teamCreatorId, team) {
    if (city.creatorId != teamCreatorId) {
      console.error("invalid id's");
    }
    await deleteDoc(doc(db, "cities", city.id));
    // Delete city updates team object to reflect resources lost automatically
    updateDoc(team, {
      totalCapital: increment(-city.capital),
      totalIndustry: increment(-city.industry),
      totalAgriculture: increment(-city.agriculture),
      totalProduction: increment(-city.production)
    });
  }

}
export const regionsService = new RegionsService()