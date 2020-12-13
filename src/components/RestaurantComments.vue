<template>
  <div>
    <h2 class="my-4">所有評論：</h2>

    <div>
      <blockquote
        class="blockquote mb-0"
        v-for="comment in restaurantComments"
        :key="comment.id"
      >
        <button
          v-if="currentUser.isAdmin"
          type="button"
          class="btn btn-danger float-right"
          @click.stop.prevent="handleDeleteButtonClick(comment.id)"
        >
          Delete
        </button>
        <h3>
          <router-link :to="{ name: 'user', params: { id: comment.User.id } }">
            {{ comment.User.name }}
          </router-link>
        </h3>
        <p>{{ comment.text }}</p>
        <footer class="blockquote-footer">
          {{ comment.createdAt | fromNow }}
        </footer>
      </blockquote>
      <hr />
    </div>
  </div>
</template>

<script>
// 載入撰寫好的 mixin
import { fromNowFilter } from "./../utils/mixins";
import commentsAPI from "./../apis/comments";
import { Toast } from "./../utils/helpers";
import { mapState } from "vuex";

export default {
  // 透過 mixins 屬性將撰寫好的 mixin 放入
  mixins: [fromNowFilter],
  props: {
    restaurantComments: {
      type: Array,
      required: true,
    },
  },
  // data() {
  //   return {
  //     currentUser: dummyUser.currentUser,
  //   };
  // },
  computed: {
    ...mapState(["currentUser"]),
  },
  methods: {
    async handleDeleteButtonClick(commentId) {
      try {
        const { data } = await commentsAPI.delete({ commentId });

        if (data.ststus === "error") {
          throw new Error(data.message);
        }
        console.log("handleDeleteButtonClick", commentId);
        // TODO: 請求 API 伺服器刪除 id 為 commentId 的評論
        // 觸發父層事件 - $emit( '事件名稱' , 傳遞的資料 )
        this.$emit("after-delete-comment", commentId);
        Toast.fire({
          icon: "success",
          title: "移除評論成功",
        });
      } catch (err) {
        Toast.fire({
          icon: "error",
          title: "無法移除評論，請稍後再試",
        });
      }
    },
  },
};
</script>