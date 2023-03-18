<script>
import SignupForm from "../components/SignupForm.vue";

export default {
  name: "SignupView",
  components: {
    SignupForm,
  },
  mounted() {
    if (localStorage.getItem("currentUser")) {
      this.$router.push({ name: "products" });
    }
  },
};
</script>

<template>
  <SignupForm />
</template>
