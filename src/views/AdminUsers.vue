<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />
    <Spinner v-if="isLoading" />
    <table v-else class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col" width="140">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.email }}</td>
          <td>{{ user.isAdmin ? "Admin" : "User" }}</td>
          <td>
            <button
              v-if="currentUser.id !== user.id"
              type="button"
              class="btn btn-link"
              @click.stop.prevent="
                toggleUserRole({ userId: user.id, isAdmin: user.isAdmin })
              "
            >
              {{ user.isAdmin ? "set as user" : "set as admin" }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from "./../components/AdminNav";
import Spinner from "./../components/Spinner";
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";
import { mapState } from "vuex";

export default {
  components: {
    AdminNav,
    Spinner,
  },
  data() {
    return {
      // users: {
      //   id: -1,
      //   name: "",
      //   email: "",
      //   isAdmin: false,
      // },
      users: [],
      isLoading: true,
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  created() {
    this.fetchUser();
  },
  methods: {
    async fetchUser() {
      try {
        const { data } = await adminAPI.users.get();

        this.users = data.users;
        this.isLoading = false;
      } catch (err) {
        this.isLoading = false;
        Toast.fire({
          type: "error",
          title: "無法取得會員資料，請稍後再試",
        });
      }
    },
    async toggleUserRole({ userId, isAdmin }) {
      try {
        const toggleAdmin = !isAdmin;
        const { data } = await adminAPI.users.update({
          userId,
          isAdmin: toggleAdmin.toString(),
          //轉字串才能真正儲存在後端
        });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.users = this.users.map((data) => {
          if (data.id === userId) {
            return {
              ...data,
              isAdmin: toggleAdmin,
            };
          }
          return data;
        });
      } catch (err) {
        Toast.fire({
          type: "error",
          title: "無法更新會員角色，請稍後再試",
        });
      }
    },
  },
};
</script>