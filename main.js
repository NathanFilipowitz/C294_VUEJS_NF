const product = "Socks";
const { createApp, ref } = Vue;
const app = createApp({
  data() {
    return {
      product: "Shoes",
      description: "to walk outside",
    };
  },
});

app.mount("#app");
