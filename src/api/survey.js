import { API_CONFIG, API_ENDPOINTS, ERROR_MESSAGES } from './config'

// 问卷相关的 API 服务
export const surveyApi = {
  // 提交问卷
  async submitSurvey(data) {
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}${API_ENDPOINTS.SURVEY.SUBMIT}`, {
        method: 'POST',
        headers: API_CONFIG.HEADERS,
        body: JSON.stringify({
          grade: data.grade,
          teacherRating: data.teacherRating,
          classManagement: data.classManagement,
          schoolRating: data.schoolRating,
          communication: data.communication,
          suggestions: data.suggestions,
          submitTime: new Date().toISOString()
        })
      })

      if (!response.ok) {
        throw new Error(ERROR_MESSAGES.SUBMIT_FAILED)
      }

      return await response.json()
    } catch (error) {
      if (error.name === 'TypeError' && error.message === 'Failed to fetch') {
        throw new Error(ERROR_MESSAGES.NETWORK_ERROR)
      }
      throw error
    }
  }
} 