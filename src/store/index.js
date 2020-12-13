import Vue from 'vue'
import Vuex from 'vuex'
//為了抓取usersAPI
import usersAPI from './../apis/users'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {
      id: -1,
      name: "",
      email: "",
      isAdmin: false,
    },
    isAuthenticated: false,
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser, //先把預設資料展開
        // api資料取用後覆蓋預設
        ...currentUser
      }
      //若是登入成功就會是登入狀態true
      state.isAuthenticated = true
    }
  },
  actions: {
    async fetchCurrentUser({ commit }) {
      try {
        // 呼叫 usersAPI.getCurrentUser() 方法，並將 response 顯示出來
        // const response = await usersAPI.getCurrentUser()
        // console.log('response', response)
        const { data } = await usersAPI.getCurrentUser()
        const { id, name, email, image, isAdmin } = data
        commit('setCurrentUser', {
          id,
          name,
          email,
          image,
          isAdmin
        })

      } catch (err) {
        console.log('err', err)
        console.err('can not fetch user information')
      }
    }
  },
  modules: {
  }
})
