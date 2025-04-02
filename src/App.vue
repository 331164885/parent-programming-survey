<script setup>
import SurveyForm from './components/SurveyForm.vue'
</script>

<template>
  <div class="app-container">
    <router-view></router-view>
  </div>
</template>

<style>
:root {
  --primary-color: #4F46E5;
  --primary-light: #EEF2FF;
  --primary-dark: #4338CA;
  --secondary-color: #10B981;
  --accent-color: #F59E0B;
  --text-primary: #1F2937;
  --text-secondary: #6B7280;
  --background-color: #F9FAFB;
  --border-color: #E5E7EB;
  --success-color: #10B981;
  --warning-color: #F59E0B;
  --error-color: #EF4444;
  --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

body {
  font-family: var(--font-family);
  margin: 0;
  padding: 0;
  background: linear-gradient(135deg, #EEF2FF 0%, #F9FAFB 100%);
  color: var(--text-primary);
  min-height: 100vh;
}

.survey-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.survey-header {
  text-align: center;
  margin-bottom: 30px;
  background: linear-gradient(135deg, #4F46E5 0%, #10B981 100%);
  padding: 40px 20px;
  border-radius: 16px;
  color: white;
  box-shadow: 0 4px 20px rgba(79, 70, 229, 0.15);
}

.header-icon {
  font-size: 48px;
  color: white;
  margin-bottom: 16px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.survey-title {
  color: white;
  margin-bottom: 8px;
  font-size: 28px;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.survey-subtitle {
  color: rgba(255, 255, 255, 0.9);
  font-size: 16px;
}

.survey-form {
  background: white;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

:deep(.el-form-item__label) {
  font-weight: 600;
  color: var(--text-primary);
  font-size: 15px;
}

:deep(.el-radio-group) {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

:deep(.el-checkbox-group) {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

:deep(.el-radio),
:deep(.el-checkbox) {
  margin-right: 0;
  padding: 12px;
  border-radius: 12px;
  transition: all 0.3s;
  border: 1px solid var(--border-color);
}

:deep(.el-radio:hover),
:deep(.el-checkbox:hover) {
  background-color: var(--primary-light);
  border-color: var(--primary-color);
}

:deep(.el-radio.is-checked),
:deep(.el-checkbox.is-checked) {
  background-color: var(--primary-light);
  border-color: var(--primary-color);
}

:deep(.el-radio .el-icon),
:deep(.el-checkbox .el-icon) {
  margin-right: 8px;
  font-size: 18px;
  color: var(--primary-color);
}

.custom-input {
  width: 100%;
}

.custom-select {
  width: 100%;
}

.custom-textarea {
  width: 100%;
}

.submit-button {
  width: 100%;
  margin-top: 20px;
  height: 48px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: linear-gradient(135deg, #4F46E5 0%, #10B981 100%);
  border: none;
  border-radius: 12px;
  color: white;
  font-weight: 600;
  transition: all 0.3s;
}

.submit-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.2);
}

.submit-button .el-icon {
  font-size: 18px;
}

:deep(.el-input-number__decrease),
:deep(.el-input-number__increase) {
  background-color: var(--primary-light);
  border-color: var(--border-color);
  color: var(--primary-color);
}

:deep(.el-input-number__decrease:hover),
:deep(.el-input-number__increase:hover) {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
  color: white;
}

:deep(.el-select .el-input__wrapper) {
  box-shadow: 0 0 0 1px var(--border-color);
  border-radius: 12px;
  padding: 8px 12px;
}

:deep(.el-select .el-input__wrapper:hover) {
  box-shadow: 0 0 0 1px var(--primary-color);
}

:deep(.el-textarea__inner) {
  box-shadow: 0 0 0 1px var(--border-color);
  border-radius: 12px;
  padding: 12px;
}

:deep(.el-textarea__inner:hover) {
  box-shadow: 0 0 0 1px var(--primary-color);
}

:deep(.el-radio__input.is-checked .el-radio__inner) {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
}

:deep(.el-checkbox__input.is-checked .el-checkbox__inner) {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
}

:deep(.el-input-number__wrapper) {
  border-radius: 12px;
  box-shadow: 0 0 0 1px var(--border-color);
}

:deep(.el-input-number__wrapper:hover) {
  box-shadow: 0 0 0 1px var(--primary-color);
}

@media (max-width: 768px) {
  .survey-container {
    padding: 16px;
  }
  
  .survey-header {
    padding: 30px 16px;
  }
  
  .survey-title {
    font-size: 24px;
  }
  
  .survey-form {
    padding: 20px;
  }
}
</style>
