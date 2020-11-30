<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </span>
    </div>

    <hr />

    <ul>
      <li>評論數： {{ restaurant.commentsLength }}</li>
      <li>瀏覽次數： {{ restaurant.viewCounts }}</li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>

<script>
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
    updatedAt: "2020-11-29T16:32:09.000Z",
    CategoryId: 4,
    Category: {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2020-11-23T10:08:45.000Z",
      updatedAt: "2020-11-23T10:08:45.000Z",
    },
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
};

export default {
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        commentsLength: 0,
        viewCounts: 0,
      },
    };
  },
  created() {
    console.log(this.$route.params);
    const { id } = this.$route.params;
    this.fetchRestaurant(id);
  },
  methods: {
    fetchRestaurant(restaurantId) {
      console.log(restaurantId);
      const { id, name, Category, Comments, viewCounts } = dummyData.restaurant;

      this.restaurant = {
        ...this.restaurant,
        id,
        name,
        categoryName: Category ? Category.name : "未分類",
        commentsLength: Comments.length,
        viewCounts,
      };
    },
  },
};
</script>