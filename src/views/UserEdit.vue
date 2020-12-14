<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          v-model="user.name"
          required
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
          v-if="user.image"
          :src="user.image"
          class="d-block img-thumbnail mb-3"
          width="200"
          height="200"
        />

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
        {{ isProcessing ? "資料更新中..." : "Submit" }}
      </button>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";

export default {
  data() {
    return {
      user: {
        id: -1,
        name: "",
        image: "",
        email: "",
        isProcessing: false,
      },
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  watch: {
    currentUser() {
      this.setUser();
    },
  },
  created() {
    const { id } = this.$route.params;
    if (id.toString() !== this.currentUser.id.toString()) {
      this.$router.push({ name: "not-found" });
      return;
    }
    this.setUser();
  },
  methods: {
    setUser() {
      // console.log(this.currentUser);
      const { id, name, email, image } = this.currentUser;
      this.user = {
        id,
        name,
        email,
        image,
      };
    },
    handleFileChange(e) {
      const { files } = e.target;
      if (files.length === 0) {
        this.user.image = "";
      } else {
        const imageURL = window.URL.createObjectURL(files[0]);
        this.user.image = imageURL;
      }
    },
    async handleSubmit(e) {
      try {
        this.isProcessing = true;
        console.log(this.user.name);
        if (!this.user.name) {
          Toast.fire({
            icon: "warning",
            title: "您尚未填寫姓名",
          });
          return;
        }

        const form = e.target;
        const formData = new FormData(form);
        console.log("formData", formData);
        const { data } = await usersAPI.update({
          userId: this.user.id,
          formData,
        });

        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.$router.push({ name: "user", params: { id: this.user.id } });
      } catch (err) {
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "無法更新使用者資料，請稍後再試",
        });
      }
    },
  },
};
</script>