<template>
  <div class="container py-5">
    <!--使用NavTabs元件-->
    <NavTabs />
    <Spinner v-if="isLoading" />
    <template v-else>
      <!--餐廳類別標籤 Restaurants NavPills-->
      <RestaurantsNavPills :categories="categories" />

      <div class="row">
        <!--餐廳列表Restaurant Cards-->
        <RestaurantCard
          v-for="restaurant in restaurants"
          :key="restaurant.id"
          :initial-restaurant="restaurant"
        />
      </div>

      <!-- 分頁標籤 RestaurantPagination -->
      <RestaurantsPagination
        v-if="totalPage.length > 1"
        :current-page="currentPage"
        :total-page="totalPage"
        :previous-page="previousPage"
        :next-page="nextPage"
        :category-id="categoryId"
      />
      <div v-if="restaurants.length < 1">此類別目前無餐廳資料</div>
    </template>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import Spinner from "./../components/Spinner";
import RestaurantCard from "./../components/RestaurantCard";
import RestaurantsNavPills from "./../components/RestaurantsNavPills";
import RestaurantsPagination from "./../components/RestaurantsPagination";
import restaurantsAPI from "./../apis/restaurants";
import { Toast } from "./../utils/helpers";

export default {
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantsPagination,
    Spinner,
  },
  data() {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1,
      isLoading: true,
    };
  },
  created() {
    //這裡會向伺服器請求第一頁且不分餐廳類別的資料
    const { page = "", categoryId = "" } = this.$route.query;
    this.fetchRestaurants({
      queryPage: page,
      queryCategoryId: categoryId,
    });
  },
  //改變路徑的時候
  beforeRouteUpdate(to, from, next) {
    // console.log("to", to); //query:{想去的路徑}
    // console.log("from", from);
    const { page = "", categoryId = "" } = to.query;
    this.fetchRestaurants({ queryPage: page, queryCategoryId: categoryId });
    next();
  },
  methods: {
    async fetchRestaurants({ queryPage, queryCategoryId }) {
      try {
        //step1  API 回傳資料
        const response = await restaurantsAPI.getRestaurants({
          page: queryPage,
          categoryId: queryCategoryId,
        });

        // console.log(response.data);
        //step2 透過解構賦值從response.data取出
        const {
          restaurants,
          categories,
          categoryId,
          page,
          totalPage,
          prev,
          next,
        } = response.data;

        //step3 data帶入Vue內
        this.restaurants = restaurants;
        this.categories = categories;
        this.categoryId = categoryId;
        this.currentPage = page;
        this.totalPage = totalPage;
        this.previousPage = prev;
        this.nextPage = next;
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