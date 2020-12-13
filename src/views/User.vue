<template>
  <div class="album py-5 bg-light">
    <div class="container">
      <UsersProfileCard
        :user="user"
        :initial-is-followed="isFollowed"
        :currentUser="currentUser"
      />

      <div class="row">
        <div class="col-md-4">
          <UserFollowingsCard :followings="followings" />
          <br />
          <UserFollowersCard :followers="followers" />
        </div>
        <div class="col-md-8">
          <UserCommentsCard :comments="comments" />
          <br />
          <UserFavoritedRestaurantsCard
            :favoritedRestaurants="favoritedRestaurants"
          />
        </div>
      </div>
    </div>
  </div>
</template>>

<script>
import UsersProfileCard from "./../components/UsersProfileCard";
import UserFollowingsCard from "./../components/UserFollowingsCard";
import UserFollowersCard from "./../components/UserFollowersCard";
import UserCommentsCard from "./../components/UserCommentsCard";
import UserFavoritedRestaurantsCard from "./../components/UserFavoritedRestaurantsCard";
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";
import { mapState } from "vuex";

export default {
  components: {
    UsersProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard,
  },
  data() {
    return {
      user: {
        id: -1,
        name: "",
        image: "",
        email: "",
        followersCount: 0,
        followingsCount: 0,
        commentsCount: 0,
        favoritedRestaurantsCount: 0,
      },
      isFollowed: false,
      followers: [],
      followings: [],
      comments: [],
      favoritedRestaurants: [],
    };
  },
  created() {
    const { id } = this.$route.params;
    this.fetchUserData(id);
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params;
    this.fetchUser(id);
    next();
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  methods: {
    async fetchUserData(userId) {
      try {
        const { data, statusText } = await usersAPI.get({ userId });

        const { profile, isFollowed } = data;

        if (statusText !== "OK") {
          throw new Error(statusText);
        }
        const {
          id,
          name,
          image,
          email,
          Comments,
          FavoritedRestaurants,
          Followers,
          Followings,
        } = profile;
        this.user = {
          id,
          name,
          image,
          email,
          followersCount: Followers.length,
          followingsCount: Followings.length,
          commentsCount: Comments.length,
          favoritedRestaurantsCount: FavoritedRestaurants.length,
        };
        (this.isFollowed = isFollowed),
          (this.followers = Followers),
          (this.followings = Followings),
          (this.favoritedRestaurants = FavoritedRestaurants);

        //處理 comment.Restaurant 可能有空值的情況
        this.comments = Comments.filter((comment) => comment.Restaurant);
      } catch (err) {
        Toast.fire({
          type: "error",
          title: "無法取得使用者資料，請稍後再試",
        });
      }
    },
  },
};
</script>