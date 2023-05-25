<template>
  <div class="container-fluid bg-green navbar elevation-5 pt-4">
    <div class="row">
      <div class="d-flex gap-3">
        <div class="dropdown px-4 col-5">
          <img title="Menu" src="../assets/riskierLogo/Riskier-logo.png"
            class="logo-img rounded dropdown-toggle selectable" data-bs-toggle="dropdown" aria-expanded="false" alt="">
          <ul class="dropdown-menu text-center mx-4">
            <span v-if="user?.email" class="fs-sm text-decoration-underline px-3">{{ user?.email }}</span>
            <li>
              <RouterLink to="/" class="fs-md">Home</RouterLink>
            </li>
            <!-- <li v-if="user?.email">
              <RouterLink to="/account" class="fs-md">Account</RouterLink>
            </li> -->
            <li v-if="user?.email">
              <span @click="logOutOfFirebase()" class="fs-md selectable">Logout</span>
            </li>
            <li v-else>
              <RouterLink to="/sign-in" class="fs-md">Login/Create</RouterLink>
            </li>
          </ul>
        </div>
        <nav v-if="user?.email" class="d-flex gap-2 col-6 ">
          <RouterLink to="/rules">
            <span title="Rules Page" class="material-symbols-outlined fs-xl">
              menu_book
            </span>
          </RouterLink>
          <RouterLink :to="{ name: 'game', params: { id: user.uid } }">
            <span title="Game Page" class="material-symbols-outlined fs-xl">
              sports_esports
            </span>
          </RouterLink>
          <RouterLink :to="{ name: 'construction', params: { id: user.uid } }">
            <span title="Construction Page" class="material-symbols-outlined fs-xl">
              construction
            </span>
          </RouterLink>
          <RouterLink to="/battle">
            <span title="Combat Page" class="material-symbols-outlined fs-xl">
              swords
            </span>
          </RouterLink>
        </nav>
      </div>
    </div>
    <div v-if="user?.uid" class="col-12 d-flex justify-content-evenly pt-4 pb-2 px-2 text-light">
      <div>
        <span class="material-symbols-outlined text-warning fs-xl">
          attach_money
        </span>
        <span v-if="teams.totalCapital >= 0" class="fs-lg text">{{ teams.totalCapital }}</span>
        <span v-if="teams.totalCapital < 0" class="fs-lg text-danger">{{ teams.totalCapital }}</span>
      </div>
      <div>
        <span class="material-symbols-outlined text-secondary fs-xl">
          factory
        </span>
        <span v-if="teams.totalIndustry >= 0" class="fs-lg">{{ teams.totalIndustry }}</span>
        <span v-if="teams.totalIndustry < 0" class="fs-lg text-danger">{{ teams.totalIndustry }}</span>
      </div>
      <div>
        <span class="material-symbols-outlined text-success fs-xl">
          psychiatry
        </span>
        <span v-if="teams.totalAgriculture >= 0" class="fs-lg">{{ teams.totalAgriculture }}</span>
        <span v-if="teams.totalAgriculture < 0" class="fs-lg text-danger">{{ teams.totalAgriculture }}</span>
      </div>
      <div>
        <span class="material-symbols-outlined text-dark fs-xl">
          build
        </span>
        <span v-if="teams.totalProduction >= 0" class="fs-lg">{{ teams.totalProduction }}</span>
        <span v-if="teams.totalProduction < 0" class="fs-lg text-danger">{{ teams.totalProduction }}</span>
      </div>
    </div>
  </div>
</template>

<script>
// Firebase
import { useCurrentUser, useFirebaseAuth, useFirestore } from "vuefire";
import { signOut } from "@firebase/auth";

// Vue
import { computed } from "@vue/reactivity";
import { RouterLink, useRouter } from "vue-router";

// State Management
import { useRegionStore } from "../stores/RegionStore";

export default {
  props: {
    teams: { type: Object, required: true }
  },
  setup(props) {
    const user = useCurrentUser();
    const db = useFirestore();
    const router = useRouter()
    return {
      teams: computed(() => useRegionStore.teams),
      user,
      async logOutOfFirebase() {
        const auth = useFirebaseAuth();
        // @ts-ignore
        signOut(auth).then(() => {
          router.push({ name: 'home' })
        }).catch((error) => {
          error.error(error);
        });
      },
    };
  },
  components: { RouterLink }
}
</script>

<style lang="scss" scoped>
.navbar {
  min-height: 100px;
}

a {
  color: black;
  text-decoration: none;
}

.router-link-active {
  color: #FFDA96;
}

.router-link-active:hover {
  text-shadow: none;
}

a:hover {
  text-shadow: white 3px 3px;
}

a:active {
  text-shadow: white 3px 3px;
  color: #FFDA96;
}

li:hover {
  text-decoration: underline 3px;
}

.logo-img:hover {
  border: black solid 2px;
}

.logo-img:active {
  border: black solid 2px;
}

@media screen and (min-width: 576px) {
  a {
    padding-right: 2rem;
    padding-left: 2rem;
  }

  .navbar {
    width: fill;
    min-width: fit-content;
  }

}
</style>