<template>
  <div class="container py-5">
    <h1>餐廳描述頁</h1>
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail :initial-restaurant="restaurant" />
    <hr />
    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments
      :restaurant-comments="restaurantComments"
      @after-delete-comment="afterDeleteComment"
    />
    <!-- 新增評論 CreateComment -->
    <CreateComment
      :restaurant-id="restaurant.id"
      @after-create-comment="afterCreateComment"
    />
  </div>
</template>

<script>
import RestaurantDetail from "./../components/RestaurantDetail";
import RestaurantComments from "./../components/RestaurantComments";
import CreateComment from "./../components/CreateComment";

//宣告假資料並存入API假資料
const dummyData = {
  restaurant: {
    id: 1,
    name: "Maxie Trantow V",
    tel: "890-533-5519 x71749",
    address: "1268 Bosco Prairie",
    opening_hours: "08:00",
    description:
      "Officiis aut excepturi ipsa. Et ratione eveniet unde laboriosam aut. Explicabo autem eos pariatur aut molestiae perspiciatis debitis. Et repellat consequatur sapiente velit.",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=51.756313654300044",
    viewCounts: 4,
    createdAt: "2020-11-23T10:08:45.000Z",
    updatedAt: "2020-11-28T04:45:55.115Z",
    CategoryId: 4,
    Category: {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2020-11-23T10:08:45.000Z",
      updatedAt: "2020-11-23T10:08:45.000Z",
    },
    FavoritedUsers: [
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
        Favorite: {
          UserId: 2,
          RestaurantId: 1,
          createdAt: "2020-03-07T14:43:52.000Z",
          updatedAt: "2020-03-07T14:43:52.000Z",
        },
      },
    ],
    LikedUsers: [
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
        Like: {
          UserId: 2,
          RestaurantId: 1,
          createdAt: "2020-03-07T14:42:45.000Z",
          updatedAt: "2020-03-07T14:42:45.000Z",
        },
      },
    ],
    Comments: [
      {
        id: 1,
        text: "Ut nostrum velit esse autem nesciunt et.",
        UserId: 1,
        RestaurantId: 1,
        createdAt: "2020-11-23T10:08:45.000Z",
        updatedAt: "2020-11-23T10:08:45.000Z",
        User: {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$0dBI.8S//NhlGeouBUbV3.oBDkdbbqXObuMJyuS.PHxjzdW/PvqYy",
          isAdmin: true,
          image: null,
          createdAt: "2020-11-23T10:08:45.000Z",
          updatedAt: "2020-11-23T10:08:45.000Z",
        },
      },
      {
        id: 51,
        text: "Eum doloremque a.",
        UserId: 2,
        RestaurantId: 1,
        createdAt: "2020-11-23T10:08:45.000Z",
        updatedAt: "2020-11-23T10:08:45.000Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$s7ShjXk/VR4nVoFtm9PLG.LR6x7wv77vwouGXoKssT7Xfk/rOsQZe",
          isAdmin: false,
          image: null,
          createdAt: "2020-11-23T10:08:45.000Z",
          updatedAt: "2020-11-23T10:08:45.000Z",
        },
      },
      {
        id: 101,
        text: "Explicabo praesentium aliquam.",
        UserId: 3,
        RestaurantId: 1,
        createdAt: "2020-11-23T10:08:45.000Z",
        updatedAt: "2020-11-23T10:08:45.000Z",
        User: {
          id: 3,
          name: "user2",
          email: "user2@example.com",
          password:
            "$2a$10$TPKFC8BS5/E37CFM3kx8yOPya6L5ifI0S8aFQ7b3jdA.oEzjXwYby",
          isAdmin: false,
          image: null,
          createdAt: "2020-11-23T10:08:45.000Z",
          updatedAt: "2020-11-23T10:08:45.000Z",
        },
      },
    ],
  },
  isFavorited: false,
  isLiked: false,
};

const dummyUser = {
  currentUser: {
    id: 1,
    name: "root",
    email: "root@example.com",
    image: "https://i.pravatar.cc/300",
    isAdmin: true,
  },
  isAuthenticated: true,
};

export default {
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment,
  },
  data() {
    return {
      //預設的假資料格式
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        image: "",
        openingHours: "",
        tel: "",
        address: "",
        description: "",
      },
      currentUser: dummyUser.currentUser,
      restaurantComments: [],
    };
  },
  created() {
    const { id } = this.$route.params;
    this.fetchRestaurant(id);
  },
  methods: {
    fetchRestaurant(restaurantId) {
      console.log("params", restaurantId); //check params

      const { restaurant, isFavorited, isLiked } = dummyData;
      const {
        id,
        name,
        Category,
        image,
        opening_hours: openingHours, //not a camel case so that change title
        tel,
        address,
        description,
        Comments,
      } = restaurant;

      this.restaurant = {
        id,
        name,
        categoryName: Category ? Category.name : "未分類", //以防值為null
        image,
        openingHours,
        tel,
        address,
        description,
        isFavorited,
        isLiked,
      };

      this.restaurantComments = Comments;
    },
    afterDeleteComment(commentId) {
      // 以 filter 保留未被選擇的 comment.id
      this.restaurantComments = this.restaurantComments.filter(
        (comment) => comment.id !== commentId
      );
    },
    afterCreateComment(payload) {
      console.log(payload);
      const { commentId, restaurantId, text } = payload;
      this.restaurantComments.push({
        id: commentId,
        RestaurantId: restaurantId,
        text,
        createdAt: new Date(),
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name,
        },
      });
    },
  },
};
</script>