<template>
  <div class="container-fluid bg-green navbar elevation-5 pt-4">
    <div class="row">
      <div class="d-flex gap-3">
        <div class="dropdown px-5 col-4">
          <img src="" class="user-img-placeholder dropdown-toggle selectable" data-bs-toggle="dropdown"
            aria-expanded="false" alt="">
          <ul class="dropdown-menu text-center">
            <li class="pb-2">
              <span class="fs-md text-decoration-underline">{{ user?.email }}</span>
            </li>
            <li>
              <RouterLink to="/" class="fs-md">Home</RouterLink>
            </li>
            <li v-if="user?.email">
              <RouterLink to="/account" class="fs-md">Account</RouterLink>
            </li>
            <li v-if="user?.email">
              <span @click="logOutOfFirebase()" class="fs-md selectable">Logout</span>
            </li>
            <li v-else>
              <RouterLink to="/sign-in" class="fs-md">Login</RouterLink>
            </li>
          </ul>
        </div>
        <nav v-if="user?.email" class="d-flex col-8 justify-content-evenly">
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
          <RouterLink to="/battle">
            <span title="Battle Page" class="material-symbols-outlined fs-xl">
              swords
            </span>
          </RouterLink>
        </nav>
      </div>
    </div>
    <div v-if="user?.email" class="col-12 d-flex justify-content-evenly pt-4 pb-2 px-2 text-light">
      <div>
        <span class="material-symbols-outlined text-warning fs-xl">
          attach_money
        </span>
        <span class="fs-lg">{{ teams.totalCapital }}</span>
      </div>
      <div>
        <span class="material-symbols-outlined text-secondary fs-xl">
          factory
        </span>
        <span class="fs-lg">{{ teams.totalIndustry }}</span>
      </div>
      <div>
        <span class="material-symbols-outlined text-success fs-xl">
          psychiatry
        </span>
        <span class="fs-lg">{{ teams.totalAgriculture }}</span>
      </div>
      <div>
        <span class="material-symbols-outlined text-dark fs-xl">
          build
        </span>
        <span class="fs-lg">{{ teams.totalProduction }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { useCurrentUser, useFirebaseAuth, useFirestore } from "vuefire";
import { signOut } from "@firebase/auth";
import { computed } from "@vue/reactivity";
import { useRegionStore } from "../stores/RegionStore";

export default {
  props: {
    teams: { type: Object, required: true }
  },
  setup(props) {
    const user = useCurrentUser()
    const db = useFirestore()

    return {
      teams: computed(() => useRegionStore.teams),
      user,
      async logOutOfFirebase() {
        const auth = useFirebaseAuth();
        // @ts-ignore
        signOut(auth).then(() => {
          // console.log("Logged Out")
        }).catch((error) => {
          error.error(error)
        });
      },
    }
  }
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

a:hover {
  text-shadow: white 3px 3px;
}

a:active {
  text-shadow: white 3px 3px;
  color: #FFDA96;
}



@media screen and (min-width: 576px) {
  a {
    padding-right: 5rem;
    padding-left: 5rem;
  }

  .navbar {
    width: fill;
    min-width: fit-content;
  }
}
</style>