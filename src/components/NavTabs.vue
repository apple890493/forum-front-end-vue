<template>
  <ul class="nav nav-tabs mb-4">
    <li class="nav-item" :key="tab.id" v-for="tab in tabs">
      <router-link :to="tab.path" class="nav-link">
        {{ tab.title }}
      </router-link>
    </li>
  </ul>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
// 使用v-for來改寫內容
export default {
  data() {
    return {
      tabs: [
        {
          id: uuidv4(),
          title: "首頁",
          path: "/restaurants",
        },
        {
          id: uuidv4(),
          title: "最新動態",
          path: "/restaurants/feeds",
        },
        {
          id: uuidv4(),
          title: "TOP 10 人氣餐廳",
          path: "/restaurants/top",
        },
        {
          id: uuidv4(),
          title: "美食達人",
          path: "/users/top",
        },
      ],
    };
  },
};
</script>