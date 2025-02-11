import { useFirestore } from "vuefire"
import { doc, increment, updateDoc, where } from "firebase/firestore";

const db = useFirestore()

class ResourcesService {
  async updateResources(team, agr, cap, ind, prod) {
    await updateDoc(team, {
      totalAgriculture: increment(agr),
      totalCapital: increment(cap),
      totalIndustry: increment(ind),
      totalProduction: increment(prod)
    });
  }
}
export const resourcesService = new ResourcesService()