<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>

    <hr />
    <div
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      class="card mb-3"
      style="max-width: 540px; margin: auto"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <router-link
            :to="{ name: 'restaurant', params: { id: restaurant.id } }"
          >
            <img class="card-img" :src="restaurant.image" />
          </router-link>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ restaurant.name }}</h5>
            <span class="badge badge-secondary"
              >收藏數：{{ restaurant.FavoriteCount }}</span
            >
            <p class="card-text">
              {{ restaurant.description }}
            </p>
            <router-link
              :to="{ name: 'restaurant', params: { id: restaurant.id } }"
              class="btn btn-primary mr-2"
            >
              Show
            </router-link>

            <button
              v-if="restaurant.isFavorited"
              @click.stop.prevent="deleteFavor(restaurant.id)"
              type="button"
              class="btn btn-danger mr-2"
            >
              移除最愛
            </button>
            <button
              v-else
              @click.stop.prevent="addFavor(restaurant.id)"
              type="button"
              class="btn btn-primary"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";

const dummyData = {
  restaurants: [
    {
      id: 26,
      name: "Eudora Casper",
      tel: "(148) 618-1282 x13780",
      address: "1745 Margret Glens",
      opening_hours: "08:00",
      description: "Ut nihil optio consequatur. Et quidem corrupti cul",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=91.4615016363926",
      viewCounts: 3,
      createdAt: "2020-11-23T10:08:45.000Z",
      updatedAt: "2020-11-29T05:07:21.000Z",
      CategoryId: 3,
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
            RestaurantId: 26,
            createdAt: "2020-04-17T04:35:49.000Z",
            updatedAt: "2020-04-17T04:35:49.000Z",
          },
        },
        {
          id: 3,
          name: "user2",
          email: "user2@example.com",
          password:
            "$2a$10$TPKFC8BS5/E37CFM3kx8yOPya6L5ifI0S8aFQ7b3jdA.oEzjXwYby",
          isAdmin: false,
          image: null,
          createdAt: "2020-11-23T10:08:45.000Z",
          updatedAt: "2020-11-23T10:08:45.000Z",
          Favorite: {
            UserId: 3,
            RestaurantId: 26,
            createdAt: "2020-07-15T19:27:21.000Z",
            updatedAt: "2020-07-15T19:27:21.000Z",
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
          Favorite: {
            UserId: 1,
            RestaurantId: 26,
            createdAt: "2020-11-29T05:07:27.000Z",
            updatedAt: "2020-11-29T05:07:27.000Z",
          },
        },
      ],
      isFavorited: true,
      FavoriteCount: 3,
    },
    {
      id: 9,
      name: "Lindsay Stoltenberg",
      tel: "1-413-683-7333",
      address: "793 Valentine Walks",
      opening_hours: "08:00",
      description: "laudantium",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=9.825477787450376",
      viewCounts: 0,
      createdAt: "2020-11-23T10:08:45.000Z",
      updatedAt: "2020-11-23T10:08:45.000Z",
      CategoryId: 5,
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
            RestaurantId: 9,
            createdAt: "2020-03-24T08:51:28.000Z",
            updatedAt: "2020-03-24T08:51:28.000Z",
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
          Favorite: {
            UserId: 1,
            RestaurantId: 9,
            createdAt: "2020-11-29T12:37:00.000Z",
            updatedAt: "2020-11-29T12:37:00.000Z",
          },
        },
      ],
      isFavorited: true,
      FavoriteCount: 2,
    },
    {
      id: 7,
      name: "Loyce King",
      tel: "(243) 305-5940",
      address: "76836 Aufderhar Mission",
      opening_hours: "08:00",
      description: "Rerum qui ea.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=17.46646129183562",
      viewCounts: 0,
      createdAt: "2020-11-23T10:08:45.000Z",
      updatedAt: "2020-11-23T10:08:45.000Z",
      CategoryId: 1,
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
            RestaurantId: 7,
            createdAt: "2020-06-08T08:12:16.000Z",
            updatedAt: "2020-06-08T08:12:16.000Z",
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
          Favorite: {
            UserId: 1,
            RestaurantId: 7,
            createdAt: "2020-11-29T12:36:57.000Z",
            updatedAt: "2020-11-29T12:36:57.000Z",
          },
        },
      ],
      isFavorited: true,
      FavoriteCount: 2,
    },
    {
      id: 6,
      name: "Dejuan Lemke",
      tel: "1-878-150-9084 x300",
      address: "399 Lueilwitz Islands",
      opening_hours: "08:00",
      description: "Deleniti dolorem aut perferendis id sint voluptate",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=42.92691470956817",
      viewCounts: 0,
      createdAt: "2020-11-23T10:08:45.000Z",
      updatedAt: "2020-11-23T10:08:45.000Z",
      CategoryId: 4,
      FavoritedUsers: [
        {
          id: 3,
          name: "user2",
          email: "user2@example.com",
          password:
            "$2a$10$TPKFC8BS5/E37CFM3kx8yOPya6L5ifI0S8aFQ7b3jdA.oEzjXwYby",
          isAdmin: false,
          image: null,
          createdAt: "2020-11-23T10:08:45.000Z",
          updatedAt: "2020-11-23T10:08:45.000Z",
          Favorite: {
            UserId: 3,
            RestaurantId: 6,
            createdAt: "2020-07-17T11:47:59.000Z",
            updatedAt: "2020-07-17T11:47:59.000Z",
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
          Favorite: {
            UserId: 1,
            RestaurantId: 6,
            createdAt: "2020-11-29T12:36:54.000Z",
            updatedAt: "2020-11-29T12:36:54.000Z",
          },
        },
      ],
      isFavorited: true,
      FavoriteCount: 2,
    },
    {
      id: 5,
      name: "Cyrus Aufderhar",
      tel: "044-687-1298 x361",
      address: "62946 Kristofer Tunnel",
      opening_hours: "08:00",
      description: "Occaecati voluptas odio perspiciatis delectus pari",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=96.10569340226543",
      viewCounts: 3,
      createdAt: "2020-11-23T10:08:45.000Z",
      updatedAt: "2020-11-29T04:42:54.000Z",
      CategoryId: 1,
      FavoritedUsers: [
        {
          id: 3,
          name: "user2",
          email: "user2@example.com",
          password:
            "$2a$10$TPKFC8BS5/E37CFM3kx8yOPya6L5ifI0S8aFQ7b3jdA.oEzjXwYby",
          isAdmin: false,
          image: null,
          createdAt: "2020-11-23T10:08:45.000Z",
          updatedAt: "2020-11-23T10:08:45.000Z",
          Favorite: {
            UserId: 3,
            RestaurantId: 5,
            createdAt: "2020-07-15T06:37:49.000Z",
            updatedAt: "2020-07-15T06:37:49.000Z",
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
          Favorite: {
            UserId: 1,
            RestaurantId: 5,
            createdAt: "2020-11-29T12:36:53.000Z",
            updatedAt: "2020-11-29T12:36:53.000Z",
          },
        },
      ],
      isFavorited: true,
      FavoriteCount: 2,
    },
    {
      id: 4,
      name: "Gerry Ebert DVM",
      tel: "171-491-6764 x9283",
      address: "81624 McGlynn Skyway",
      opening_hours: "08:00",
      description: "Non quia voluptas eum vero in illum ea asperiores ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=57.05367081822943",
      viewCounts: 0,
      createdAt: "2020-11-23T10:08:45.000Z",
      updatedAt: "2020-11-23T10:08:45.000Z",
      CategoryId: 3,
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
            RestaurantId: 4,
            createdAt: "2020-03-31T06:37:16.000Z",
            updatedAt: "2020-03-31T06:37:16.000Z",
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
          Favorite: {
            UserId: 1,
            RestaurantId: 4,
            createdAt: "2020-11-29T12:36:51.000Z",
            updatedAt: "2020-11-29T12:36:51.000Z",
          },
        },
      ],
      isFavorited: true,
      FavoriteCount: 2,
    },
    {
      id: 3,
      name: "Harold Hauck",
      tel: "(064) 036-6228 x6320",
      address: "024 Yost Inlet",
      opening_hours: "08:00",
      description: "Delectus iusto facilis. Temporibus blanditiis quid",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=8.88156169757055",
      viewCounts: 0,
      createdAt: "2020-11-23T10:08:45.000Z",
      updatedAt: "2020-11-23T10:08:45.000Z",
      CategoryId: 2,
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
            RestaurantId: 3,
            createdAt: "2020-03-24T16:54:31.000Z",
            updatedAt: "2020-03-24T16:54:31.000Z",
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
          Favorite: {
            UserId: 1,
            RestaurantId: 3,
            createdAt: "2020-11-29T12:36:52.000Z",
            updatedAt: "2020-11-29T12:36:52.000Z",
          },
        },
      ],
      isFavorited: true,
      FavoriteCount: 2,
    },
    {
      id: 13,
      name: "Vito Stroman",
      tel: "(583) 814-0267 x51316",
      address: "149 Nolan Bypass",
      opening_hours: "08:00",
      description: "Minima neque eveniet. Ut reiciendis ducimus fugit ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=55.830999586431275",
      viewCounts: 1,
      createdAt: "2020-11-23T10:08:45.000Z",
      updatedAt: "2020-11-29T04:51:12.000Z",
      CategoryId: 5,
      FavoritedUsers: [
        {
          id: 3,
          name: "user2",
          email: "user2@example.com",
          password:
            "$2a$10$TPKFC8BS5/E37CFM3kx8yOPya6L5ifI0S8aFQ7b3jdA.oEzjXwYby",
          isAdmin: false,
          image: null,
          createdAt: "2020-11-23T10:08:45.000Z",
          updatedAt: "2020-11-23T10:08:45.000Z",
          Favorite: {
            UserId: 3,
            RestaurantId: 13,
            createdAt: "2020-03-30T01:34:36.000Z",
            updatedAt: "2020-03-30T01:34:36.000Z",
          },
        },
      ],
      isFavorited: false,
      FavoriteCount: 1,
    },
    {
      id: 11,
      name: "Earnestine Metz",
      tel: "(573) 917-8496 x01546",
      address: "364 Rafael Pines",
      opening_hours: "08:00",
      description: "delectus",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=35.25135222681837",
      viewCounts: 0,
      createdAt: "2020-11-23T10:08:45.000Z",
      updatedAt: "2020-11-23T10:08:45.000Z",
      CategoryId: 3,
      FavoritedUsers: [
        {
          id: 3,
          name: "user2",
          email: "user2@example.com",
          password:
            "$2a$10$TPKFC8BS5/E37CFM3kx8yOPya6L5ifI0S8aFQ7b3jdA.oEzjXwYby",
          isAdmin: false,
          image: null,
          createdAt: "2020-11-23T10:08:45.000Z",
          updatedAt: "2020-11-23T10:08:45.000Z",
          Favorite: {
            UserId: 3,
            RestaurantId: 11,
            createdAt: "2020-07-15T05:40:21.000Z",
            updatedAt: "2020-07-15T05:40:21.000Z",
          },
        },
      ],
      isFavorited: false,
      FavoriteCount: 1,
    },
    {
      id: 10,
      name: "Kip Heathcote",
      tel: "(234) 261-0553 x328",
      address: "3951 Demarco Burg",
      opening_hours: "08:00",
      description: "repudiandae molestiae eius",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=90.3851170471334",
      viewCounts: 0,
      createdAt: "2020-11-23T10:08:45.000Z",
      updatedAt: "2020-11-23T10:08:45.000Z",
      CategoryId: 3,
      FavoritedUsers: [
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
          Favorite: {
            UserId: 1,
            RestaurantId: 10,
            createdAt: "2020-11-29T12:37:01.000Z",
            updatedAt: "2020-11-29T12:37:01.000Z",
          },
        },
      ],
      isFavorited: true,
      FavoriteCount: 1,
    },
  ],
};

export default {
  components: {
    NavTabs,
  },
  data() {
    return {
      restaurants: [],
    };
  },
  created() {
    this.fetchTopRestaurants();
  },
  methods: {
    fetchTopRestaurants() {
      this.restaurants = dummyData.restaurants;
    },
    addFavor(id) {
      this.restaurants = this.restaurants.map((data) => {
        if (data.id === id) {
          return {
            ...data,
            isFavorited: true,
            FavoriteCount: data.FavoriteCount + 1,
          };
        } else {
          return data;
        }
      });
    },
    deleteFavor(id) {
      this.restaurants = this.restaurants.map((data) => {
        if (data.id === id) {
          return {
            ...data,
            isFavorited: false,
            FavoriteCount: data.FavoriteCount - 1,
          };
        } else {
          return data;
        }
      });
    },
  },
};
</script>