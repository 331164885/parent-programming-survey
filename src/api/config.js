// API 基础配置
const API_CONFIG = {
  BASE_URL: 'http://your-api-domain',
  TIMEOUT: 10000,
  HEADERS: {
    'Content-Type': 'application/json'
  }
}

// API 端点配置
const API_ENDPOINTS = {
  SURVEY: {
    SUBMIT: '/api/survey/submit'
  }
}

// 错误消息配置
const ERROR_MESSAGES = {
  NETWORK_ERROR: '网络连接失败，请检查网络设置',
  SERVER_ERROR: '服务器错误，请稍后重试',
  TIMEOUT_ERROR: '请求超时，请重试',
  SUBMIT_FAILED: '提交失败，请重试'
}

export { API_CONFIG, API_ENDPOINTS, ERROR_MESSAGES } 