import { apiHelper } from './../utils/helpers'
// const getToken = () => localStorage.getItem('token')

export default {
  //categories: { } 的方式，規劃出一個命名空間(namespace)。
  categories: {
    get() {
      return apiHelper.get('/admin/categories')
    },
    create({ name }) {
      return apiHelper.post('/admin/categories', { name })
    },
    delete({ categoryId }) {
      return apiHelper.delete(`/admin/categories/${categoryId}`)
    },
    update({ categoryId, name }) {
      return apiHelper.put(`/admin/categories/${categoryId}`, { name })
    }
  },
  restaurants: {
    create({ formData }) {
      return apiHelper.post('/admin/restaurants', formData)
    },
    get() {
      return apiHelper.get('/admin/restaurants')
    },
    delete({ restaurantId }) {
      return apiHelper.delete(`/admin/restaurants/${restaurantId}`)
    },
    getDetail({ restaurantId }) {
      return apiHelper.get(`/admin/restaurants/${restaurantId}`)
    },
    update({ restaurantId, formData }) {
      return apiHelper.put(`/admin/restaurants/${restaurantId}`, formData)
    }
  },
  users: {
    get() {
      return apiHelper.get('/admin/users')
    },
    update({ userId, isAdmin }) {
      return apiHelper.put(`/admin/users/${userId}`, { isAdmin })
    }
  }
}