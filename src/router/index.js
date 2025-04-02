import { createRouter, createWebHistory } from 'vue-router'
import SurveyForm from '../components/SurveyForm.vue'
import SuccessPage from '../components/SuccessPage.vue'

const routes = [
  {
    path: '/',
    name: 'Survey',
    component: SurveyForm
  },
  {
    path: '/success',
    name: 'Success',
    component: SuccessPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 