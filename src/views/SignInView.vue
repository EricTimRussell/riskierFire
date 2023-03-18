<template>
  <body class="container-fluid">
    <form @submit.prevent="createUser()" class="row justify-content-center">
      <div class="my-3 col-8">
        <label for="email" class="form-label">Email address</label>
        <input type="email" class="form-control" id="email" v-model="userInput.email" aria-describedby="emailHelp">
      </div>
      <div class="mb-3 col-8">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" v-model="userInput.password">
      </div>
      <div class="col-12 d-flex justify-content-center">
        <button @click="loginToFireBase()" type="button" class="btn">Login</button>
        <button type="submit" class="btn mx-2">Create New User</button>
      </div>
    </form>
  </body>
</template>

<script>
import { ref } from "vue";
import { useFirebaseAuth, useFirestore } from "vuefire";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "@firebase/auth";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter()
    const userInput = ref({
      email: '',
      password: ''
    })

    const auth = useFirebaseAuth();
    const db = useFirestore()
    return {
      userInput,
      async createUser() {
        // @ts-ignore
        await createUserWithEmailAndPassword(auth, userInput.value.email, userInput.value.password)
          .then((userCredential) => {
            const user = userCredential.user;
            router.push({ name: 'home' })
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
      },
      async loginToFireBase() {
        // @ts-ignore
        signInWithEmailAndPassword(auth, userInput.value.email, userInput.value.password)
          .then((userCredential) => {
            const user = userCredential.user;
            userInput.value.email = ''
            userInput.value.password = ''
            router.push({ name: 'home' })
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
      }

    }
  }
}
</script>

<style lang="scss" scoped></style>