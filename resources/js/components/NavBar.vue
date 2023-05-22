<template>
  <div>
    <b-navbar
      id="navbar"
      class="navbar"
      fixed="top"
      toggleable="lg"
      type="dark"
      variant="dark"
    >
      <b-navbar-brand style="cursor: pointer" @click="navigateTo('home')">
        <img
          src="../../images/logo.jpg"
          class="d-inline-block align-middle logo"
          alt="logo"
        />
        Moon
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- <b-navbar-nav
          v-if="user != null && user.role != 3"
          class="nav-container"
        >
          <b-nav-item v-if="user != null" @click="navigateTo('forum')"
            >Diễn đàn</b-nav-item
          >
          <b-nav-item
            v-if="user && user.role == 2"
            @click="navigateTo('schedule')"
            >Lịch làm việc</b-nav-item
          >
          <b-nav-item v-if="user != null" @click="navigateTo('doctors')"
            >Danh sách bác sĩ</b-nav-item
          >
          <b-nav-item
            v-if="user && user.role == 2 || user.role == 1"
            @click="navigateTo('medicalRecordList')"
            >Hồ sơ bệnh án</b-nav-item
          >

          <b-nav-item
            v-if="user && user.role == 1"
            @click="navigateTo('rateHistory')"
            >Lịch sử đánh giá hoạt động</b-nav-item
          >

          <b-nav-item
            v-if="user && user.role == 2"
            @click="navigateTo('treatmentList')"
            >Hoạt động điều trị</b-nav-item
          >
        </b-navbar-nav> -->

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <!-- <b-nav-form  v-if="user != null">
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search</b-button
            >
          </b-nav-form> -->

          <b-button
            @click="navigateToPage('login')"
            style="margin-right: 1rem"
            v-if="user == null"
            size="md"
            class="my-2 my-sm-0"
            >Đăng nhập</b-button
          >
          <b-button
            @click="navigateToPage('register')"
            v-if="user == null"
            size="md"
            class="my-2 my-sm-0"
            >Đăng ký</b-button
          >
          <b-nav-item-dropdown
            right
            v-if="user != null"
            style="margin-top: 6px"
          >
            <!-- Using 'button-content' slot -->
            <template v-if="user" #button-content>
              {{ user.name }}
            </template>
            <b-dropdown-item @click.prevent="navigateTo('userInfo')" href="#"
              >Thông tin cá nhân</b-dropdown-item
            >
            <b-dropdown-item @click="logOut()">Đăng xuất</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import BaseComponent from "../base-component";
import { postModel, getModel, updateModel, deleteModel } from "../service";
export default BaseComponent.extend({
  props: {
    user: {
      default: null,
    },
  },

  data() {
    return {
      notifications: "",
      messagesHistory: [],
    };
  },

  methods: {
    logOut() {
      document.getElementById("logout-form").submit();
    },
    navigateToPage(des) {
      window.location.href = window.location.origin + `/${des}`;
    },
    setChatParticipant(param) {
      this.$emit("setChatParticipant", param);
    },
  },

  async mounted() {
    if (this.user != null) {
    }
  },
});
</script>
<style>
#nav-collapse.show {
  background-color: #343a40 !important;
}
</style>

<style lang="scss" scoped>

.navbar-nav .nav-item {
  margin-right: 20px;
}
</style>
