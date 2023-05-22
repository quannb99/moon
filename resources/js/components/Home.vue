<template>
  <div>

  </div>
</template>

<script>
import BaseComponent from "../base-component";
import { postModel, getModel, updateModel, deleteModel } from "../service";
export default BaseComponent.extend({
  data() {
    return {
      model: "posts",
      slide: 0,
      sliding: null,
      countInfo: "",
      featurePosts: "",
    };
  },

  methods: {

  },

  async mounted() {
    console.log('mounted');
  },
});
</script>

<style lang="scss" scoped>
// @import "../../sass/home.css";

ul li {
  list-style-type: none;
}

ol,
ul {
  list-style: none;
}

.uni-shortcode-counter-2 .uni-shortcode-counter-default ul li.counter-icons {
  height: 60px;
}

.uni-shortcode-counter-2 .uni-shortcode-counter-default ul li.counter-number {
  height: 62px;
}

.blog-grid-item .uni-entry-top .thumbnail-img img {
  height: 222px;
}

.blog-grid-item .uni-entry-body .uni-entry-content .uni-entry-meta {
  padding: 0;
}
.post-ellipsis {
  width: 350px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
}
.uni-shortcode-icon-box-1-default .item-caption {
    padding: 70px 40px 30px 30px;
}
</style>
