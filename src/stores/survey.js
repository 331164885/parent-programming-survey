import { defineStore } from 'pinia'
import { surveyApi } from '../api/survey'

export const useSurveyStore = defineStore('survey', {
  state: () => ({
    surveyData: null,
    loading: false,
    error: null
  }),
  
  actions: {
    async submitSurvey(data) {
      this.loading = true
      this.error = null
      
      try {
        const result = await surveyApi.submitSurvey(data)
        this.surveyData = result
        return true
      } catch (error) {
        console.error('提交问卷时出错：', error)
        this.error = error.message
        return false
      } finally {
        this.loading = false
      }
    }
  }
}) 