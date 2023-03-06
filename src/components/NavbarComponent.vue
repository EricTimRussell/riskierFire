<template>
  <div class="container-fluid bg-green navbar elevation-5 pt-4">
    <div class="row">
      <div class="d-flex gap-3">
        <RouterLink to="/account">
          <div class="dropdown px-3">
            <img src="" class="user-img-placeholder dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"
              alt="">
            <ul class="dropdown-menu text-center">
              <li class="pb-2">
                <RouterLink to="/" class="fs-md">Home</RouterLink>
              </li>
              <li>
                <RouterLink to="/account" class="fs-md">Account</RouterLink>
              </li>
            </ul>
          </div>
        </RouterLink>
        <RouterLink to="/rules">
          <button>
            <span class="material-symbols-outlined fs-xl">
              menu_book
            </span>
          </button>
        </RouterLink>
        <RouterLink to="/game">
          <button>
            <span class="material-symbols-outlined fs-xl">
              sports_esports
            </span>
          </button>
        </RouterLink>
        <RouterLink to="/battle">
          <button>
            <span class="material-symbols-outlined fs-xl">
              swords
            </span>
          </button>
        </RouterLink>
      </div>
    </div>
    <div class="col-12 d-flex justify-content-evenly pt-4 pb-2 px-2">
      <div>
        <span class="mx-2 material-symbols-outlined text-warning fs-xl">
          attach_money
        </span>
        <span class="fs-lg">0</span>
      </div>
      <div>
        <span class="mx-2 material-symbols-outlined text-secondary fs-xl">
          factory
        </span>
        <span class="fs-lg">0</span>
      </div>
      <div>
        <span class="mx-2 material-symbols-outlined text-success fs-xl">
          psychiatry
        </span>
        <span class="fs-lg">0</span>
      </div>
      <div>
        <span class="mx-2 material-symbols-outlined text-dark fs-xl">
          build
        </span>
        <span class="fs-lg">0</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {


    return {}
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

li:hover {
  text-decoration: underline 2px black solid;
}
</style>