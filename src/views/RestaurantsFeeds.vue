<template>
  <div class="container py-5">
    <NavTabs />
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
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import NewestRestaurants from "./../components/NewestRestaurants";
import NewestComments from "./../components/NewestComments";

const dummyData = {
  restaurants: [
    {
      id: 1,
      name: "Maxie Trantow V",
      tel: "890-533-5519 x71749",
      address: "1268 Bosco Prairie",
      opening_hours: "08:00",
      description:
        "Officiis aut excepturi ipsa. Et ratione eveniet unde laboriosam aut. Explicabo autem eos pariatur aut molestiae perspiciatis debitis. Et repellat consequatur sapiente velit.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=51.756313654300044",
      viewCounts: 2,
      createdAt: "2020-11-23T10:08:45.000Z",
      updatedAt: "2020-11-25T07:54:36.000Z",
      CategoryId: 4,
      Category: null,
    },
    {
      id: 2,
      name: "Ardella Batz",
      tel: "793.250.7899 x5826",
      address: "814 Lubowitz Turnpike",
      opening_hours: "08:00",
      description:
        "Ipsum sint in impedit. Occaecati ipsum ut. Necessitatibus id culpa.\n \rNatus ipsa quis molestiae ab aperiam expedita enim impedit. Eius velit iure fugiat quibusdam. Autem ipsam voluptate voluptatem nihil. Vel ut iure alias. Eius nihil quis doloremque. Sint officia atque sunt amet fuga nihil ducimus.\n \rLabore laborum rerum tempore ratione consequatur dolorem. Veritatis sint nisi dolor hic ut ut aut alias veritatis. Et commodi officiis vero reiciendis provident. Soluta sit doloribus autem qui quo molestias magni unde quibusdam.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=74.39642698470448",
      viewCounts: 0,
      createdAt: "2020-11-23T10:08:45.000Z",
      updatedAt: "2020-11-23T10:08:45.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2020-11-23T10:08:45.000Z",
        updatedAt: "2020-11-23T10:08:45.000Z",
      },
    },
    {
      id: 3,
      name: "Harold Hauck",
      tel: "(064) 036-6228 x6320",
      address: "024 Yost Inlet",
      opening_hours: "08:00",
      description:
        "Delectus iusto facilis. Temporibus blanditiis quidem aut odit libero. Pariatur voluptatem iste quo velit doloribus deleniti et. Ad dolor autem ipsum ea nam placeat consectetur quidem. Eius nobis iure ipsum iure.\n \rMinus voluptatum perspiciatis vel esse. Sit qui blanditiis in ab et quod ut suscipit placeat. Minus modi provident sit nisi est repudiandae omnis delectus non. Assumenda soluta sit eum eum. Dolorum quidem et deleniti commodi dolores pariatur. Voluptatem ab aliquam totam minima totam atque.\n \rSed cum dicta magnam reiciendis doloremque occaecati. Fugiat voluptatem perspiciatis dicta id eveniet praesentium autem totam. Omnis omnis illo ratione pariatur neque consequuntur deserunt soluta natus. Voluptatum et labore consectetur voluptatibus nihil et mollitia.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=8.88156169757055",
      viewCounts: 0,
      createdAt: "2020-11-23T10:08:45.000Z",
      updatedAt: "2020-11-23T10:08:45.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2020-11-23T10:08:45.000Z",
        updatedAt: "2020-11-23T10:08:45.000Z",
      },
    },
    {
      id: 4,
      name: "Gerry Ebert DVM",
      tel: "171-491-6764 x9283",
      address: "81624 McGlynn Skyway",
      opening_hours: "08:00",
      description: "Non quia voluptas eum vero in illum ea asperiores et.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=57.05367081822943",
      viewCounts: 0,
      createdAt: "2020-11-23T10:08:45.000Z",
      updatedAt: "2020-11-23T10:08:45.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2020-11-23T10:08:45.000Z",
        updatedAt: "2020-11-23T10:08:45.000Z",
      },
    },
    {
      id: 5,
      name: "Cyrus Aufderhar",
      tel: "044-687-1298 x361",
      address: "62946 Kristofer Tunnel",
      opening_hours: "08:00",
      description:
        "Occaecati voluptas odio perspiciatis delectus pariatur quia deserunt. Voluptas vero asperiores non. Consequatur consequatur totam deleniti quia soluta alias. Temporibus minus eos magni. Aut labore dolorem minima suscipit porro quod inventore.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=96.10569340226543",
      viewCounts: 0,
      createdAt: "2020-11-23T10:08:45.000Z",
      updatedAt: "2020-11-23T10:08:45.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2020-11-23T10:08:45.000Z",
        updatedAt: "2020-11-23T10:08:45.000Z",
      },
    },
    {
      id: 6,
      name: "Dejuan Lemke",
      tel: "1-878-150-9084 x300",
      address: "399 Lueilwitz Islands",
      opening_hours: "08:00",
      description:
        "Deleniti dolorem aut perferendis id sint voluptatem quia consequuntur quisquam. Aspernatur fugiat dolorem et fugit. Qui velit autem unde inventore pariatur quia ipsum adipisci. Fugiat velit assumenda voluptates aliquid aliquam eius. Repellendus sit provident quam eius et quia officiis cum.\n \rMagni eum tempore ea est. Minima quo at. Repellat cumque eligendi hic doloremque illo et reiciendis porro.\n \rPraesentium odit aliquid libero dolore nemo. Et rerum sapiente. Quidem tenetur aut perferendis excepturi quo facere enim. Quia est debitis omnis rerum quia nihil sed maiores consequatur. Impedit ut unde voluptatem ipsam ut occaecati voluptatibus ut.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=42.92691470956817",
      viewCounts: 0,
      createdAt: "2020-11-23T10:08:45.000Z",
      updatedAt: "2020-11-23T10:08:45.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2020-11-23T10:08:45.000Z",
        updatedAt: "2020-11-23T10:08:45.000Z",
      },
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
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2020-11-23T10:08:45.000Z",
        updatedAt: "2020-11-23T10:08:45.000Z",
      },
    },
    {
      id: 8,
      name: "Dr. Isabella Mann",
      tel: "423-810-1915 x065",
      address: "619 Gislason Radial",
      opening_hours: "08:00",
      description:
        "Aut occaecati assumenda voluptas eius est saepe sed. Accusantium qui natus vel vel voluptatem distinctio est sint. Reprehenderit doloribus voluptas doloremque architecto quis harum facilis aut. Hic placeat tempora et qui id. Velit hic qui numquam nihil voluptatem consectetur nesciunt rerum est.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=46.54040641576476",
      viewCounts: 0,
      createdAt: "2020-11-23T10:08:45.000Z",
      updatedAt: "2020-11-23T10:08:45.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2020-11-23T10:08:45.000Z",
        updatedAt: "2020-11-23T10:08:45.000Z",
      },
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
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2020-11-23T10:08:45.000Z",
        updatedAt: "2020-11-23T10:08:45.000Z",
      },
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
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2020-11-23T10:08:45.000Z",
        updatedAt: "2020-11-23T10:08:45.000Z",
      },
    },
  ],
  comments: [
    {
      id: 76,
      text: "Earum ducimus dolorem voluptas eum optio.",
      UserId: 3,
      RestaurantId: 26,
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
      Restaurant: {
        id: 26,
        name: "Eudora Casper",
        tel: "(148) 618-1282 x13780",
        address: "1745 Margret Glens",
        opening_hours: "08:00",
        description:
          "Ut nihil optio consequatur. Et quidem corrupti culpa iusto facere asperiores repudiandae. Dolor quo maiores sit facere et quos repudiandae. Voluptas in quos dolore provident magnam aut. Illo fuga quo vitae et iste hic.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=91.4615016363926",
        viewCounts: 0,
        createdAt: "2020-11-23T10:08:45.000Z",
        updatedAt: "2020-11-23T10:08:45.000Z",
        CategoryId: 3,
      },
    },
    {
      id: 96,
      text: "Ipsum quam incidunt voluptas beatae dolores quia.",
      UserId: 3,
      RestaurantId: 46,
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
      Restaurant: {
        id: 46,
        name: "Breanna Robel V",
        tel: "633.836.6935 x8892",
        address: "3102 Tristian Track",
        opening_hours: "08:00",
        description:
          "Nostrum soluta aliquam. Sit culpa maiores. Et sed rerum. Ut ipsam quae nulla sapiente harum voluptatem voluptates.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=17.630825864006482",
        viewCounts: 0,
        createdAt: "2020-11-23T10:08:45.000Z",
        updatedAt: "2020-11-23T10:08:45.000Z",
        CategoryId: 5,
      },
    },
    {
      id: 97,
      text: "Reprehenderit sunt officia eaque ut odit id.",
      UserId: 2,
      RestaurantId: 47,
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
      Restaurant: {
        id: 47,
        name: "Lorenzo Cremin",
        tel: "237-701-0423",
        address: "6963 Astrid Route",
        opening_hours: "08:00",
        description:
          "Maiores quae voluptate possimus quia id omnis. Pariatur impedit nemo illum laudantium illum. Est eos nemo quidem est praesentium eos expedita labore consequatur. Cupiditate qui temporibus pariatur. Ut vel voluptates dignissimos voluptatibus non repellendus voluptatibus qui quisquam. Qui possimus nihil quis qui corporis aliquam et.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=58.39944310924374",
        viewCounts: 0,
        createdAt: "2020-11-23T10:08:45.000Z",
        updatedAt: "2020-11-23T10:08:45.000Z",
        CategoryId: 2,
      },
    },
    {
      id: 98,
      text: "Repellat ipsum pariatur eos.",
      UserId: 3,
      RestaurantId: 48,
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
      Restaurant: {
        id: 48,
        name: "Lonnie Hackett",
        tel: "(750) 379-9165",
        address: "964 Marisa Inlet",
        opening_hours: "08:00",
        description:
          "Qui excepturi quisquam fugiat. Quam sed nemo quo sapiente labore illo ut corrupti. Soluta velit dignissimos enim tempore adipisci commodi. Sint quam quis magni occaecati esse voluptatem facere ut.\n \rSunt rem in repellat. Aspernatur commodi eos possimus hic quia at. Quis eveniet eligendi voluptas et. Enim dignissimos sed ea accusamus ut ut doloremque.\n \rRerum unde suscipit dignissimos. Laboriosam quam quasi impedit eveniet repellendus incidunt possimus. Accusamus asperiores dignissimos illo eaque quod aut ea eos. Ea et totam iste quibusdam ea consectetur facilis. Maxime cum suscipit molestias. In magnam harum.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=54.357470974798375",
        viewCounts: 0,
        createdAt: "2020-11-23T10:08:45.000Z",
        updatedAt: "2020-11-23T10:08:45.000Z",
        CategoryId: 4,
      },
    },
    {
      id: 99,
      text: "Inventore molestiae provident voluptatem.",
      UserId: 2,
      RestaurantId: 49,
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
      Restaurant: {
        id: 49,
        name: "Lyda Waters MD",
        tel: "(238) 593-2485 x69217",
        address: "28135 Thompson Square",
        opening_hours: "08:00",
        description:
          "Omnis quidem sit modi. Non omnis voluptatem sapiente et deserunt odio. Ipsum recusandae enim incidunt perferendis a harum.\n \rBlanditiis dolores cupiditate. Nemo alias alias ut veritatis totam rerum. Aperiam provident quia. Ipsum voluptas dignissimos molestiae repellat odio velit. Dicta illum consequatur eum voluptas quia quia quasi at.\n \rIllo nihil sapiente. Corrupti rerum natus voluptatem pariatur ex. Dignissimos sit qui in. Eligendi qui quo consequatur fugiat. Cumque porro quibusdam non voluptatem molestiae dolorem doloremque architecto labore.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=42.07884417771331",
        viewCounts: 0,
        createdAt: "2020-11-23T10:08:45.000Z",
        updatedAt: "2020-11-23T10:08:45.000Z",
        CategoryId: 4,
      },
    },
    {
      id: 100,
      text: "Sed est amet autem.",
      UserId: 1,
      RestaurantId: 50,
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
      Restaurant: {
        id: 50,
        name: "Janessa Hilpert",
        tel: "1-545-254-2375",
        address: "109 Hamill Garden",
        opening_hours: "08:00",
        description: "ex",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=23.88359290942157",
        viewCounts: 0,
        createdAt: "2020-11-23T10:08:45.000Z",
        updatedAt: "2020-11-23T10:08:45.000Z",
        CategoryId: 3,
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
      Restaurant: {
        id: 1,
        name: "Maxie Trantow V",
        tel: "890-533-5519 x71749",
        address: "1268 Bosco Prairie",
        opening_hours: "08:00",
        description:
          "Officiis aut excepturi ipsa. Et ratione eveniet unde laboriosam aut. Explicabo autem eos pariatur aut molestiae perspiciatis debitis. Et repellat consequatur sapiente velit.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=51.756313654300044",
        viewCounts: 2,
        createdAt: "2020-11-23T10:08:45.000Z",
        updatedAt: "2020-11-25T07:54:36.000Z",
        CategoryId: 4,
      },
    },
    {
      id: 102,
      text: "Rem facilis dolore culpa commodi et excepturi autem ex.",
      UserId: 2,
      RestaurantId: 2,
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
      Restaurant: {
        id: 2,
        name: "Ardella Batz",
        tel: "793.250.7899 x5826",
        address: "814 Lubowitz Turnpike",
        opening_hours: "08:00",
        description:
          "Ipsum sint in impedit. Occaecati ipsum ut. Necessitatibus id culpa.\n \rNatus ipsa quis molestiae ab aperiam expedita enim impedit. Eius velit iure fugiat quibusdam. Autem ipsam voluptate voluptatem nihil. Vel ut iure alias. Eius nihil quis doloremque. Sint officia atque sunt amet fuga nihil ducimus.\n \rLabore laborum rerum tempore ratione consequatur dolorem. Veritatis sint nisi dolor hic ut ut aut alias veritatis. Et commodi officiis vero reiciendis provident. Soluta sit doloribus autem qui quo molestias magni unde quibusdam.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=74.39642698470448",
        viewCounts: 0,
        createdAt: "2020-11-23T10:08:45.000Z",
        updatedAt: "2020-11-23T10:08:45.000Z",
        CategoryId: 5,
      },
    },
    {
      id: 103,
      text: "Tempore cum minima ut voluptas velit.",
      UserId: 3,
      RestaurantId: 3,
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
      Restaurant: {
        id: 3,
        name: "Harold Hauck",
        tel: "(064) 036-6228 x6320",
        address: "024 Yost Inlet",
        opening_hours: "08:00",
        description:
          "Delectus iusto facilis. Temporibus blanditiis quidem aut odit libero. Pariatur voluptatem iste quo velit doloribus deleniti et. Ad dolor autem ipsum ea nam placeat consectetur quidem. Eius nobis iure ipsum iure.\n \rMinus voluptatum perspiciatis vel esse. Sit qui blanditiis in ab et quod ut suscipit placeat. Minus modi provident sit nisi est repudiandae omnis delectus non. Assumenda soluta sit eum eum. Dolorum quidem et deleniti commodi dolores pariatur. Voluptatem ab aliquam totam minima totam atque.\n \rSed cum dicta magnam reiciendis doloremque occaecati. Fugiat voluptatem perspiciatis dicta id eveniet praesentium autem totam. Omnis omnis illo ratione pariatur neque consequuntur deserunt soluta natus. Voluptatum et labore consectetur voluptatibus nihil et mollitia.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=8.88156169757055",
        viewCounts: 0,
        createdAt: "2020-11-23T10:08:45.000Z",
        updatedAt: "2020-11-23T10:08:45.000Z",
        CategoryId: 2,
      },
    },
    {
      id: 104,
      text: "Hic sit et corrupti ratione.",
      UserId: 3,
      RestaurantId: 4,
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
      Restaurant: {
        id: 4,
        name: "Gerry Ebert DVM",
        tel: "171-491-6764 x9283",
        address: "81624 McGlynn Skyway",
        opening_hours: "08:00",
        description: "Non quia voluptas eum vero in illum ea asperiores et.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=57.05367081822943",
        viewCounts: 0,
        createdAt: "2020-11-23T10:08:45.000Z",
        updatedAt: "2020-11-23T10:08:45.000Z",
        CategoryId: 3,
      },
    },
  ],
};

export default {
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments,
  },
  //使用 data 函式將資料放入 Vue
  data() {
    return {
      //定義空陣列
      restaurants: [],
      comments: [],
    };
  },
  //將種子資料放入 fetch
  methods: {
    //fetch API DATA
    fetcfFeeds() {
      const { restaurants, comments } = dummyData;
      this.restaurants = restaurants;
      this.comments = comments.filter((data) => data.Restaurant && data.text); //篩選出的餐廳或留言並非空白
    },
  },
  //利用生命週期created階段,將資料取得進來
  created() {
    this.fetcfFeeds();
  },
};
</script>