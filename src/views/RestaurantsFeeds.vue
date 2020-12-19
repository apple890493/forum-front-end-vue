<template>
  <div class="container py-5">
    <NavTabs />
    <Spinner v-if="isLoading" />
    <template v-else>
      <h1 class="mt-5">最新動態</h1>
      <hr />
      <div class="row">
        <div class="col-md-6">
          <h3>最新餐廳</h3>
          <!-- 最新餐廳 NewestRestaurants -->
          <NewestRestaurants :restaurants="restaurants" />
        </div>
        <div class="col-md-6">
          <h3>最新評論</h3>
          <!-- 最新評論 NewestComments-->
          <NewestComments :comments="comments" />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import NewestRestaurants from "./../components/NewestRestaurants";
import NewestComments from "./../components/NewestComments";
import Spinner from "./../components/Spinner";
import restaurantsAPI from "./../apis/restaurants";
import { Toast } from "./../utils/helpers";

export default {
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments,
    Spinner,
  },
  //使用 data 函式將資料放入 Vue
  data() {
    return {
      //定義空陣列
      restaurants: [],
      comments: [],
      isLoading: true,
    };
  },
  //利用生命週期created階段,將資料取得進來
  created() {
    this.fetcfFeeds();
  },
  //將種子資料放入 fetch
  methods: {
    //fetch API DATA
    async fetcfFeeds() {
      try {
        const { data } = await restaurantsAPI.getFeeds();
        const { restaurants, comments } = data;

        this.restaurants = restaurants;
        this.comments = comments.filter((data) => data.Restaurant && data.text); //篩選出的餐廳或留言並非空白
        this.isLoading = false;
      } catch (err) {
        this.isLoading = false;
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳資料，請稍後再試",
        });
      }
    },
  },
};
</script>