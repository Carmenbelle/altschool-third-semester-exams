<template>
  <div class="container w-full h-[100vh] relative">
    <img
      alt="background"
      src="../assets/backgl.jpeg"
      class="w-full h-full object-cover"
    />
    <div class="w-full h-[100vh] absolute inset-0 bg-[#374efa] bg-opacity-80">
      <header class="conainer flex justify-between p-2 mb-8">
        <div class="text-center ml-8 md:ml-16 m-auto">
          <a href="/">
            <div class="flex">
              <img
                alt="logo"
                src="../assets/Logo3.png"
                class="w-12 md:w-16 md:hover:scale-150 transition duration-700 ease-in-out cursor-pointer"
              />
              <h5 class="text-orange-300 hidden md:block text-lg">
                e-commence
              </h5>
            </div>
          </a>
        </div>
        <nav
          class="flex justify-end gap-x-6 md:gap-x-16 mr-8 md:mr-28 p-2 md:mb-2"
        >
          <router-link
            to="/login"
            class="border text-center p-2 md:p-3 w-18 md:w-22 rounded-md font-normal md:font-medium text-lg text-white"
            >Login</router-link
          >
        </nav>
      </header>
      <div
        class="text-[#1a2934] border py-4 mx-auto max-w-md bg-white bg-opacity-20 shadow-lg shadow-black-500/50 px-4 md:px-6"
      >
        <div class="text-xl">
          <h1 class="text-3xl p-6 text-center font-bold">SignUp Page</h1>
          <form @submit.prevent="signup">
            <h3 class="text-center text-white font-medium" v-if="error">
              {{ error }}
            </h3>

            <div class="space-y-1">
              <label for="username">Username</label>
              <input
                type="text"
                id="name"
                v-model="username"
                class="w-full h-[55px] rounded-lg p-4 bg-transparent border-2 border-solid border-black"
              />
              <span
                class="text-xs text-yellow-300 py-1"
                v-if="inputError.username"
                >{{ inputError.username }}</span
              >
            </div>
            <div class="mt-2 space-y-1">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                v-model="email"
                class="w-full h-[55px] rounded-lg p-4 bg-transparent border-2 border-solid border-black"
              />
              <span class="text-xs text-yellow-300" v-if="inputError.email">{{
                inputError.email
              }}</span>
            </div>
            <div class="mt-2 space-y-1">
              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                v-model="password"
                class="w-full h-[55px] rounded-lg p-4 bg-transparent border-2 border-solid border-black"
              />
              <span
                class="text-xs text-yellow-300"
                v-if="inputError.password"
                >{{ inputError.password }}</span
              >
            </div>
            <div class="text-center py-4">
              <button
                @click="submitBtn"
                type="submit"
                class="hover:text-[#30658b] font-semibold"
              >
                SignUp
              </button>
            </div>
          </form>
          <div class="text-center text-[#162c3e] text-base py-4">
            <p>
              Already have an account?
              <router-link to="/login" class="hover:text-[#30658b]"
                >Login</router-link
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignupForm",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      error: null,
      inputError: {},
    };
  },

  mounted() {
    if (this.$store.getters.getLogin) {
      this.$router.push({ name: "products" });
    }
  },

  methods: {
    checkErrors() {
      if (this.username === "" || this.username.length < 6) {
        this.inputError.username =
          "Username should not be less than 6 characters";
      }
      if (this.email === "" || !this.email.match("@")) {
        this.inputError.email = "Invalid Email format";
      }

      if (this.password === "" || this.password.length < 8) {
        this.inputError.password =
          "Password must not be less than 8 characters";
      }

      if (Object.keys(this.inputError).length > 0) {
        return false;
      }

      return true;
    },

    signup() {
      if (!this.checkErrors()) {
        return;
      }
      const user = {
        username: this.username,
        email: this.email,
        password: this.password,
      };
      const localUsers = JSON.parse(window.localStorage.getItem("users")) || [];
      localUsers.push(user);

      window.localStorage.setItem("users", JSON.stringify(localUsers));
      this.$router.push({ name: "products" });
    },
  },
};
</script>
