<script>
import axios from "axios";

export default {
  name: "ProductsView",

  data() {
    return {
      gadget: [],
    };
  },

  async mounted() {
    const product = await axios.get("https://dummyjson.com/products");
    console.log(product.data.products);
    this.gadget = product.data.products;
  },

  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$store.dispatch("setLogin", null);
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<template>
  <header class="conainer flex justify-between bg-blue-900">
    <div class="flex mt-2 ml-4 md:ml-16">
      <a href="/">
        <img
          alt="logo"
          src="../assets/Logo3.png"
          class="w-16 md:hover:scale-104 transition duration-700 ease-in-out cursor-pointer"
        />
      </a>
    </div>
    <nav class="flex justify-end mr-4 md:mr-16 p-2">
      <button
        @click="logout"
        class="border text-center bg-slate-200 p-4 rounded-md font-medium text-lg text-gray-700"
      >
        Logout
      </button>
    </nav>
  </header>

  <h1 class="mt-8 p-8 font-extrabold text-5xl flex justify-center">
    Product Page
  </h1>

  <div
    class="grid p-8 md:p-16 md:grid-cols-2 lg:grid-cols-3 space-x-6 md:space-x-10 gap-10"
  >
    <ul
      class="border p-10 border-white drop-shadow-xl bg-slate-100"
      v-for="item in gadget"
      :key="item.id"
    >
      <!-- <li>{{ item.id }}</li> -->
      <div class="">
        <li class="p-4">
          <img :src="item.images[0]" class="h-[200px] w-full" />
        </li>
        <div class="pt-6">
          <li class="text-green-700">{{ item.title }}</li>
          <li>Brand: {{ item.brand }}</li>
          <li class="text-red-600">Price: ${{ item.price }}</li>
          <li class="text-yellow-600">Rating: {{ item.rating }}</li>
        </div>
      </div>
    </ul>
  </div>
</template>
