<template>
  <div>
    <footer class="site-footer footer-default">
      <div class="footer-main-content">
        <div class="container">
          <div class="row">

          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import BaseComponent from "../base-component";
import { postModel, getModel, updateModel, deleteModel } from "../service";
export default BaseComponent.extend({
  data() {
    return {
      User: window.User,
    };
  },
  methods: {

  },
  async mounted() {
  },
});
</script>

<style lang="scss" scoped>
ul li {
  list-style-type: none;
}

ol,
ul {
  list-style: none;
}
</style>
