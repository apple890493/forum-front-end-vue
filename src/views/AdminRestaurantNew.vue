<template>
  <div class="container py-5">
    <!-- 餐廳表單 AdminRestaurantForm -->
    <AdminRestaurantForm :is-processing="isProcessing" @after-submit="handleAfterSubmit" />
  </div>
</template>

<script>
import AdminRestaurantForm from "./../components/AdminRestaurantForm";
// STEP 1: 匯入 adminAPI 和 Toast
import adminAPI from './../apis/admin'
import { Toast } from './../utils/helpers'


export default {
  components: {
    AdminRestaurantForm,
  },
  data(){
    return {
      isProcessing: false
    }
  },
  methods: {
    async handleAfterSubmit(formData) {
      try {
        this.isProcessing = true
        //透過 restaurants.create 方法來向伺服器建立餐廳
        const { data } = await adminAPI.restaurants.create({
          formData
        })
        //失敗的話顯示錯誤提示
        if (data.status !== "success") {
          throw new Error(data.message)
        }
        //成功的話轉路由
        this.$router.push({ name: 'admin-restaurants' })
      } catch (err) {
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '無法建立餐廳，請稍後再試'
        })
      }
      // (尚未串接api前)透過 API 將表單資料送到伺服器
      // for (let [name, value] of formData.entries()) {
      //   console.log(name + ": " + value);
      // }
    },
  },
};
</script>