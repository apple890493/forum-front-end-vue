<template>
  <div class="container py-5">
    <NavTabs />
    <Spinner v-if="isLoading" />
    <template v-else>
      <h1 class="mt-5">美食達人</h1>
      <hr />
      <div class="row text-center">
        <div class="col-3" v-for="user in users" :key="user.id">
          <a href="#">
            <img
              :src="user.image ? user.image : 'https://i.imgur.com/Lq0dUBY.png'"
              width="140px"
              height="140px"
            />
          </a>
          <h2>{{ user.name }}</h2>
          <span class="badge badge-secondary"
            >追蹤人數：{{ user.FollowerCount }}</span
          >
          <p class="mt-3">
            <button
              v-if="user.isFollowed"
              type="button"
              class="btn btn-danger"
              @click.stop.prevent="deleteFollow(user.id)"
            >
              取消追蹤
            </button>
            <button
              v-else
              type="button"
              class="btn btn-primary"
              @click.stop.prevent="addFollow(user.id)"
            >
              追蹤
            </button>
          </p>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import Spinner from "./../components/Spinner";
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";

export default {
  components: {
    NavTabs,
    Spinner,
  },
  data() {
    return {
      users: [],
      isLoading: true,
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const { data } = await usersAPI.getTopUsers();

        this.users = data.users.map((user) => ({
          id: user.id,
          name: user.name,
          image: user.image,
          followerCount: user.FollowerCount,
          isFollowed: user.isFollowed,
        }));
        this.isLoading = false
      } catch (err) {
        this.isLoading = false
        Toast.fire({
          icon: "error",
          title: "無法取得美食達人，請稍後再試",
        });
      }
    },
    async addFollow(userId) {
      try {
        const { data } = await usersAPI.addFollow({ userId });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.users = this.users.map((user) => {
          if (user.id !== userId) {
            return user;
          } else {
            return {
              ...user,
              isFollowed: true,
              FollowerCount: user.FollowerCount + 1,
            };
          }
        });
      } catch (err) {
        Toast.fire({
          icon: "error",
          title: "無法加入追蹤，請稍後再試",
        });
      }
    },
    async deleteFollow(userId) {
      try {
        const { data } = await usersAPI.deleteFollow({ userId });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.users = this.users.map((user) => {
          if (user.id !== userId) {
            return user;
          } else {
            return {
              ...user,
              isFollowed: false,
              FollowerCount: user.FollowerCount - 1,
            };
          }
        });
      } catch (err) {
        Toast.fire({
          icon: "error",
          title: "無法取消追蹤，請稍後再試",
        });
      }
    },
  },
};
</script>