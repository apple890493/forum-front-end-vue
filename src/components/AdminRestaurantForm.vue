<template>
  <Spinner v-if="isLoading" />
  <form v-else @submit.stop.prevent="handleSubmit">
    <div class="form-group">
      <label for="name">Name</label>
      <input
        v-model="restaurant.name"
        id="name"
        type="text"
        class="form-control"
        name="name"
        placeholder="Enter name"
        required
      />
    </div>

    <div class="form-group">
      <label for="categoryId">Category</label>
      <select
        id="categoryId"
        class="form-control"
        name="categoryId"
        v-model="restaurant.categoryId"
        required
      >
        <option value="" selected disabled>--請選擇--</option>
        <option
          v-for="category in categories"
          :key="category.id"
          :value="category.id"
        >
          {{ category.name }}
        </option>
      </select>
    </div>

    <div class="form-group">
      <label for="tel">Tel</label>
      <input
        id="tel"
        type="text"
        class="form-control"
        name="tel"
        v-model="restaurant.tel"
        placeholder="Enter telephone number"
      />
    </div>

    <div class="form-group">
      <label for="address">Address</label>
      <input
        id="address"
        type="text"
        class="form-control"
        placeholder="Enter address"
        v-model="restaurant.address"
        name="address"
      />
    </div>

    <div class="form-group">
      <label for="opening-hours">Opening Hours</label>
      <input
        id="opening-hours"
        type="time"
        class="form-control"
        v-model="restaurant.openingHours"
        name="opening_hours"
      />
    </div>

    <div class="form-group">
      <label for="description">Description</label>
      <textarea
        id="description"
        class="form-control"
        rows="3"
        name="description"
        v-model="restaurant.description"
      />
    </div>

    <div class="form-group">
      <label for="image">Image</label>
      <!-- 顯示圖片預覽,綁定src-->
      <img
        v-if="restaurant.image"
        :src="restaurant.image"
        class="d-block img-thumbnail mb-3"
        width="200"
        height="200"
      />
      <!-- 圖片選擇,v-on事件觸發-->
      <input
        id="image"
        type="file"
        name="image"
        accept="image/*"
        class="form-control-file"
        @change="handleFileChange"
      />
    </div>

    <button type="submit" class="btn btn-primary" :disabled="isProcessing">
      {{ isProcessing ? "處理中..." : "送出" }}
    </button>
  </form>
</template>

<script>
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";
import Spinner from "./../components/Spinner";

export default {
  components: {
    Spinner,
  },
  //帶入edit的資料
  props: {
    initialRestaurant: {
      type: Object,
      //回傳 object literal需使用()來包住括號
      default: () => ({
        name: "",
        categoryId: "",
        tel: "",
        address: "",
        description: "",
        image: "",
        openingHours: "",
      }),
    },
    isProcessing: {
      type: Boolean,
      dafault: false,
    },
  },
  data() {
    return {
      restaurant: {
        name: "",
        categoryId: "",
        tel: "",
        address: "",
        openingHours: "",
        description: "",
        image: "",
      },
      categories: [], //for option
      isLoading: true, //isLoading 狀態指標
    };
  },
  watch: {
    initialRestaurant(newValue) {
      this.restaurant = {
        ...this.restaurant,
        ...newValue,
      };
    },
  },
  created() {
    this.fetchCategories();
    this.restaurant = {
      //先展開 data 裡的預設值，也就是空白表單
      ...this.restaurant,
      //接著展開 props 裡的資料，也就是父層傳進來的資料
      ...this.initialRestaurant,
      //如果沒有資料，就調動 default 的回傳值
    };
  },
  methods: {
    async fetchCategories() {
      try {
        const { data } = await adminAPI.categories.get();
        this.categories = data.categories;
        this.isLoading = false;
      } catch (err) {
        this.isLoading = false;
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳類別，請稍後再試",
        });
      }
    },
    handleFileChange(e) {
      // const files = e.target.files;
      const { files } = e.target;
      if (files.length === 0) {
        this.restaurant.image = "";
      } else {
        const imageURL = window.URL.createObjectURL(files[0]);
        this.restaurant.image = imageURL;
      }
    },
    handleSubmit(e) {
      if (!this.restaurant.name) {
        Toast.fire({
          icon: "warning",
          title: "請填寫餐廳名稱",
        });
        return;
      } else if (!this.restaurant.categoryId) {
        Toast.fire({
          icon: "warning",
          title: "請選擇餐廳類別",
        });
        return;
      }

      const form = e.target;
      const formData = new FormData(form);
      this.$emit("after-submit", formData);
    },
  },
};
</script>