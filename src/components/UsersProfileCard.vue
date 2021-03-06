<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="user.image | emptyImage" width="300px" height="300px" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ user.name }}</h5>
          <p class="card-text">{{ user.email }}</p>
          <ul class="list-unstyled list-inline">
            <li>
              <strong>{{ user.commentsCount }}</strong> 已評論餐廳
            </li>
            <li>
              <strong>{{ user.favoritedRestaurantsCount }}</strong> 收藏的餐廳
            </li>
            <li>
              <strong>{{ user.followingsCount }}</strong> followings (追蹤者)
            </li>
            <li>
              <strong>{{ user.followersCount }}</strong> followers (追隨者)
            </li>
          </ul>
          <p>
            <template v-if="currentUser.id === user.id">
              <router-link :to="{ name: 'user-edit', params: { id: user.id } }"
                ><button type="submit" class="btn btn-primary">
                  edit
                </button></router-link
              >
            </template>
            <template v-else>
              <button
                v-if="isFollowed"
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
            </template>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from "../utils/mixins";
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";

export default {
  mixins: [emptyImageFilter],
  props: {
    user: {
      type: Object,
      required: true,
    },
    currentUser: {
      type: Object,
      required: true,
    },
    initialIsFollowed: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      isFollowed: this.initialIsFollowed,
    };
  },
  watch: {
    initialIsFollowed(isFollowed) {
      this.isFollowed = isFollowed;
    },
  },
  methods: {
    async addFollow(userId) {
      try {
        const { data } = await usersAPI.addFollow({ userId });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.isFollowed = true;
      } catch (err) {
        Toast.fire({
          type: "error",
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

        this.isFollowed = false;
      } catch (err) {
        Toast.fire({
          type: "error",
          title: "無法取消追蹤，請稍後再試",
        });
      }
    },
  },
};
</script>