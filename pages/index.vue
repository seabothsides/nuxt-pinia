<template>
  <div>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <h1 class="text-2xl text-green-600 text-center">my new nuxt bridge file</h1>
    <p>{{ products.title }}</p>
    <p>{{ products.price }}</p>
  </div>
</template>

<script>
import { useProducts } from "~/store/counter";

export default {
  name: "IndexPage",
  // using store and composition api to import state
  setup() {
    const products = useProducts();
    return {
      // you can return the whole store instance to use it in the template
      products,
    };
  },
};
</script>

<style>
</style>