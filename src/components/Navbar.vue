<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
    <router-link class="navbar-brand" to="/"> 餐廳評論網 </router-link>

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>

    <div id="navbarSupportedContent" class="navbar-collapse collapse">
      <div class="ml-auto d-flex align-items-center">
        <!-- is user is admin -->
        <router-link
          to="/admin/restaurants"
          class="text-white mr-3"
          v-if="currentUser.isAdmin"
        >
          管理員後台
        </router-link>

        <!-- is user is login -->
        <template v-if="isAuthenticated">
          <router-link
            :to="{ name: 'user', params: { id: currentUser.id } }"
            class="text-white mr-3"
          >
            {{ currentUser.name || "使用者" }} 您好
          </router-link>

          <router-link
            :to="{ name: 'user', params: { id: currentUser.id } }"
            class="text-white mr-3"
          >
            Profile
          </router-link>
          <button
            type="button"
            class="btn btn-sm btn-outline-success my-2 my-sm-0"
          >
            登出
          </button>
        </template>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from "vuex";

// eslint - disable;
//seed data
// const dummyUser = {
//   currentUser: {
//     id: 1,
//     name: "root",
//     email: "root@example.com",
//     image: "https://i.pravatar.cc/300",
//     isAdmin: true,
//   },
//   isAuthenticated: true,
// };

export default {
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
  // //類似預設值
  // data() {
  //   return {
  //     currentUser: {
  //       id: -1,
  //       nam: "",
  //       email: "",
  //       image: "",
  //       isAdmin: false,
  //     },
  //     isAuthenticated: false,
  //   };
  // },
  // methods: {
  //   //會向後端API拉取資料
  //   fetchUser() {
  //     this.currentUser = {
  //       ...this.currentUser,
  //       ...dummyUser.currentUser,
  //       //兩者有的資料,後面資料會蓋過預設值
  //     };
  //     this.isAuthenticated = dummyUser.isAuthenticated;
  //   },
  // },
  // created() {
  //   this.fetchUser();
  // },
};
</script>