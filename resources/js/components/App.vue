<template>
  <div>
    <nav-bar :user="user"/>
    <div class="divider"></div>
      <router-view />
      <Footer />
  </div>
</template>

<script>
import BaseComponent from "../base-component";
import { postModel, getModel, updateModel, deleteModel } from "../service";

export default BaseComponent.extend({
  components: {
  },
  data() {
    return {
      user: window.User,
    };
  },
  methods: {

  },

  computed: {},

  async mounted() {
  },

  created() {

  },
});
</script>

<style lang="scss">

</style>
