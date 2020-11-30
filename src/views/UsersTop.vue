<template>
  <div class="container py-5">
    <NavTabs />
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
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";

const dummyData = {
  users: [
    {
      id: 2,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$s7ShjXk/VR4nVoFtm9PLG.LR6x7wv77vwouGXoKssT7Xfk/rOsQZe",
      isAdmin: false,
      image: null,
      createdAt: "2020-11-23T10:08:45.000Z",
      updatedAt: "2020-11-23T10:08:45.000Z",
      Followers: [
        {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$s7ShjXk/VR4nVoFtm9PLG.LR6x7wv77vwouGXoKssT7Xfk/rOsQZe",
          isAdmin: false,
          image: null,
          createdAt: "2020-11-23T10:08:45.000Z",
          updatedAt: "2020-11-23T10:08:45.000Z",
          Followship: {
            followerId: 2,
            followingId: 2,
            createdAt: "2020-03-25T07:52:27.000Z",
            updatedAt: "2020-03-25T07:52:27.000Z",
          },
        },
        {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$0dBI.8S//NhlGeouBUbV3.oBDkdbbqXObuMJyuS.PHxjzdW/PvqYy",
          isAdmin: true,
          image: null,
          createdAt: "2020-11-23T10:08:45.000Z",
          updatedAt: "2020-11-23T10:08:45.000Z",
          Followship: {
            followerId: 1,
            followingId: 2,
            createdAt: "2020-11-18T07:59:46.000Z",
            updatedAt: "2020-11-18T07:59:46.000Z",
          },
        },
      ],
      FollowerCount: 2,
      isFollowed: true,
    },
    {
      id: 3,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$TPKFC8BS5/E37CFM3kx8yOPya6L5ifI0S8aFQ7b3jdA.oEzjXwYby",
      isAdmin: false,
      image: null,
      createdAt: "2020-11-23T10:08:45.000Z",
      updatedAt: "2020-11-23T10:08:45.000Z",
      Followers: [
        {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$0dBI.8S//NhlGeouBUbV3.oBDkdbbqXObuMJyuS.PHxjzdW/PvqYy",
          isAdmin: true,
          image: null,
          createdAt: "2020-11-23T10:08:45.000Z",
          updatedAt: "2020-11-23T10:08:45.000Z",
          Followship: {
            followerId: 1,
            followingId: 3,
            createdAt: "2020-11-18T08:00:08.000Z",
            updatedAt: "2020-11-18T08:00:08.000Z",
          },
        },
      ],
      FollowerCount: 1,
      isFollowed: true,
    },
    {
      id: 1,
      name: "root",
      email: "root@example.com",
      password: "$2a$10$0dBI.8S//NhlGeouBUbV3.oBDkdbbqXObuMJyuS.PHxjzdW/PvqYy",
      isAdmin: true,
      image: null,
      createdAt: "2020-11-23T10:08:45.000Z",
      updatedAt: "2020-11-23T10:08:45.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 902,
      name: "Serena",
      email: "serena@gmail.com",
      password: "$2a$10$qh4WPjAiZsOxg2sCF2KEP.4P7p9kS6vAeTujIr3cZXfE3vaWVqUMO",
      isAdmin: false,
      image: null,
      createdAt: "2020-11-23T10:13:44.000Z",
      updatedAt: "2020-11-23T10:13:44.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
  ],
};

export default {
  components: {
    NavTabs,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      this.users = dummyData.users;
    },
    addFollow(id) {
      console.log(id);
      this.users = this.users.map((user) => {
        if (user.id !== id) {
          return user;
        } else {
          return {
            ...user,
            isFollowed: true,
            FollowerCount: user.FollowerCount + 1,
          };
        }
      });
    },
    deleteFollow(id) {
      console.log(id);
      this.users = this.users.map((user) => {
        if (user.id !== id) {
          return user;
        } else {
          return {
            ...user,
            isFollowed: false,
            FollowerCount: user.FollowerCount - 1,
          };
        }
      });
    },
  },
};
</script>