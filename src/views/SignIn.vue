<template>
  <div class="container py-5">
    <form class="w-10" @submit.prevent.stop="handleSubmit">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Sign In</h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="email">email</label>
        <input
          id="email"
          v-model="email"
          type="email"
          class="form-control"
          name="email"
          placeholder="email"
          autocomplete="username"
          required
          autofocus
        />
      </div>

      <div class="form-label-group mb-3">
        <label for="password">Password</label>
        <input
          id="password"
          v-model="password"
          name="password"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="current-password"
          required
        />
      </div>

      <button
        class="btn btn-lg btn-primary btn-block mb-3"
        type="submit"
        :disabled="isProcessing"
      >
        Submit
      </button>

      <div class="text-center mb-3">
        <p>
          <router-link to="/signup">Sign Up</router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">&copy; 2017-2018</p>
    </form>
  </div>
</template>

<script>
import authorizationAPI from "./../apis/authorization";
import { Toast } from "./../utils/helpers";

export default {
  data() {
    return {
      email: "",
      password: "",
      isProcessing: false,
    };
  },
  methods: {
    async handleSubmit() {
      // event.preventDefault() <=> @submit.prevent.stop
      // const data = JSON.stringify({
      //   email: this.email,
      //   password: this.password,
      // });
      // TODO: 向後端驗證使用者登入資訊是否合法
      // console.log("@@@@", data);

      try {
        if (!this.email || !this.password) {
          Toast.fire({
            icon: "warning",
            title: "空格需填寫",
          });
          return; //傳回去
        }

        this.isProcessing = true;

        const response = await authorizationAPI.signIn({
          email: this.email,
          password: this.password,
        });
        console.log("1");
        //取得API資料
        const { data } = response;
        console.log("2");
        // 將 token 存放在 localStorage 內
        localStorage.setItem("token", data.token);
        // 如果資料狀態不是success
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        //成功導向
        this.$router.push("/restaurants");
        console.log("3");
      } catch (err) {
        this.password = "";
        Toast.fire({
          icon: "warning",
          title: "帳號或密碼有誤",
        });

        this.isProcessing = false;
        console.log("err", err);
      }
    },
  },
};
</script>