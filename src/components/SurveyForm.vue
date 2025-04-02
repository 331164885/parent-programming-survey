<template>
  <div class="survey-container">
    <div class="survey-header">
      <el-icon class="header-icon"><School /></el-icon>
      <h2 class="survey-title">家长对班主任、班级及学校满意度调查问卷</h2>
      <p class="survey-subtitle">您的意见对我们很重要</p>
    </div>
    
    <el-form
      ref="formRef"
      :model="formData"
      :rules="rules"
      label-position="top"
      class="survey-form"
    >
      <!-- 基本信息 -->
      <el-form-item label="您的孩子所在年级" prop="grade">
        <el-select v-model="formData.grade" placeholder="请选择" class="custom-select">
          <el-option label="一年级" value="1" />
          <el-option label="二年级" value="2" />
          <el-option label="三年级" value="3" />
          <el-option label="四年级" value="4" />
          <el-option label="五年级" value="5" />
          <el-option label="六年级" value="6" />
        </el-select>
      </el-form-item>

      <!-- 班主任评价 -->
      <el-form-item label="您对班主任工作的总体评价" prop="teacherRating">
        <el-radio-group v-model="formData.teacherRating" class="custom-radio-group">
          <el-radio label="1">
            <el-icon><Star /></el-icon>
            非常满意
          </el-radio>
          <el-radio label="2">
            <el-icon><CircleCheckFilled /></el-icon>
            比较满意
          </el-radio>
          <el-radio label="3">
            <el-icon><CircleCheck /></el-icon>
            一般
          </el-radio>
          <el-radio label="4">
            <el-icon><CircleClose /></el-icon>
            不太满意
          </el-radio>
          <el-radio label="5">
            <el-icon><Close /></el-icon>
            非常不满意
          </el-radio>
        </el-radio-group>
      </el-form-item>

      <!-- 班级管理 -->
      <el-form-item label="您对班级管理的评价（可多选）" prop="classManagement">
        <el-checkbox-group v-model="formData.classManagement" class="custom-checkbox-group">
          <el-checkbox label="1">
            <el-icon><Medal /></el-icon>
            班级纪律良好
          </el-checkbox>
          <el-checkbox label="2">
            <el-icon><User /></el-icon>
            师生关系融洽
          </el-checkbox>
          <el-checkbox label="3">
            <el-icon><Reading /></el-icon>
            学习氛围浓厚
          </el-checkbox>
          <el-checkbox label="4">
            <el-icon><Trophy /></el-icon>
            班级活动丰富
          </el-checkbox>
          <el-checkbox label="5">
            <el-icon><Star /></el-icon>
            班级荣誉感强
          </el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <!-- 学校评价 -->
      <el-form-item label="您对学校工作的评价（可多选）" prop="schoolRating">
        <el-checkbox-group v-model="formData.schoolRating" class="custom-checkbox-group">
          <el-checkbox label="1">
            <el-icon><School /></el-icon>
            教学质量好
          </el-checkbox>
          <el-checkbox label="2">
            <el-icon><Monitor /></el-icon>
            硬件设施完善
          </el-checkbox>
          <el-checkbox label="3">
            <el-icon><Operation /></el-icon>
            安全管理到位
          </el-checkbox>
          <el-checkbox label="4">
            <el-icon><Cpu /></el-icon>
            课外活动丰富
          </el-checkbox>
          <el-checkbox label="5">
            <el-icon><Money /></el-icon>
            收费合理透明
          </el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <!-- 沟通反馈 -->
      <el-form-item label="您与班主任的沟通情况" prop="communication">
        <el-radio-group v-model="formData.communication" class="custom-radio-group">
          <el-radio label="1">
            <el-icon><ChatDotRound /></el-icon>
            经常沟通，反馈及时
          </el-radio>
          <el-radio label="2">
            <el-icon><ChatLineRound /></el-icon>
            偶尔沟通，基本及时
          </el-radio>
          <el-radio label="3">
            <el-icon><ChatSquare /></el-icon>
            沟通较少，反馈较慢
          </el-radio>
          <el-radio label="4">
            <el-icon><ChatDotSquare /></el-icon>
            几乎不沟通
          </el-radio>
        </el-radio-group>
      </el-form-item>

      <!-- 建议 -->
      <el-form-item label="您对班主任、班级或学校工作的建议" prop="suggestions">
        <el-input
          v-model="formData.suggestions"
          type="textarea"
          :rows="3"
          placeholder="请输入您的建议"
          class="custom-textarea"
        />
      </el-form-item>

      <el-form-item>
        <el-button 
          type="primary" 
          @click="submitForm" 
          :loading="store.loading"
          class="submit-button"
        >
          <el-icon><Upload /></el-icon>
          提交问卷
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'
import { useSurveyStore } from '../stores/survey'
import { useRouter } from 'vue-router'
import {
  School,
  Star,
  CircleCheckFilled,
  CircleCheck,
  CircleClose,
  Close,
  Medal,
  User,
  Reading,
  Trophy,
  Monitor,
  Operation,
  Cpu,
  Money,
  ChatDotRound,
  ChatLineRound,
  ChatSquare,
  ChatDotSquare,
  Upload
} from '@element-plus/icons-vue'

const store = useSurveyStore()
const router = useRouter()
const formRef = ref(null)

const formData = reactive({
  grade: '',
  teacherRating: '',
  classManagement: [],
  schoolRating: [],
  communication: '',
  suggestions: ''
})

const rules = {
  grade: [
    { required: true, message: '请选择孩子所在年级', trigger: 'change' }
  ],
  teacherRating: [
    { required: true, message: '请选择对班主任的评价', trigger: 'change' }
  ],
  classManagement: [
    { required: true, message: '请至少选择一项班级管理评价', trigger: 'change' }
  ],
  schoolRating: [
    { required: true, message: '请至少选择一项学校工作评价', trigger: 'change' }
  ],
  communication: [
    { required: true, message: '请选择与班主任的沟通情况', trigger: 'change' }
  ]
}

const submitForm = async () => {
  if (!formRef.value) return
  
  try {
    await formRef.value.validate()
    const success = await store.submitSurvey(formData)
    
    if (success) {
      ElMessage.success('问卷提交成功！')
      router.push('/success')
    } else {
      ElMessage.error('提交失败，请重试')
    }
  } catch (error) {
    console.error('表单验证失败：', error)
    ElMessage.error('请检查表单填写是否完整')
  }
}
</script>

<style scoped>
.survey-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.survey-header {
  text-align: center;
  margin-bottom: 30px;
}

.header-icon {
  font-size: 48px;
  color: var(--primary-color);
  margin-bottom: 16px;
}

.survey-title {
  color: var(--primary-color);
  margin-bottom: 8px;
  font-size: 24px;
}

.survey-subtitle {
  color: var(--text-secondary);
  font-size: 16px;
}

.survey-form {
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

:deep(.el-form-item__label) {
  font-weight: 600;
  color: var(--text-primary);
  font-size: 15px;
  padding-bottom: 8px;
  line-height: 1.5;
  display: block;
  width: 100%;
}

:deep(.el-form-item) {
  margin-bottom: 24px;
  width: 100%;
}

:deep(.el-form-item__content) {
  width: 100%;
  margin-left: 0 !important;
}

:deep(.el-form--label-top .el-form-item__label) {
  float: none;
  display: block;
  text-align: left;
  padding: 0 0 8px;
  line-height: 1.5;
  height: auto;
}

:deep(.el-form--label-top .el-form-item__content) {
  margin-left: 0 !important;
}

:deep(.el-form-item__error) {
  padding-top: 4px;
  font-size: 12px;
  color: var(--error-color);
}

:deep(.el-form-item.is-error .el-input__wrapper) {
  box-shadow: 0 0 0 1px var(--error-color);
}

:deep(.el-form-item.is-error .el-textarea__inner) {
  box-shadow: 0 0 0 1px var(--error-color);
}

:deep(.el-form-item.is-error .el-select .el-input__wrapper) {
  box-shadow: 0 0 0 1px var(--error-color);
}

:deep(.el-radio-group) {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
}

:deep(.el-checkbox-group) {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
}

:deep(.el-radio),
:deep(.el-checkbox) {
  margin-right: 0;
  padding: 12px 16px;
  border-radius: 12px;
  transition: all 0.3s;
  border: 1px solid var(--border-color);
  width: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
}

:deep(.el-radio .el-radio__label),
:deep(.el-checkbox .el-checkbox__label) {
  display: flex;
  align-items: center;
  width: 100%;
}

:deep(.el-radio .el-icon),
:deep(.el-checkbox .el-icon) {
  margin-right: 12px;
  font-size: 18px;
  color: var(--primary-color);
  flex-shrink: 0;
}

:deep(.el-radio__input),
:deep(.el-checkbox__input) {
  margin-right: 12px;
  flex-shrink: 0;
}

:deep(.el-input-number) {
  width: 100%;
}

:deep(.el-select) {
  width: 100%;
}

:deep(.el-textarea) {
  width: 100%;
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
  height: 44px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.submit-button .el-icon {
  font-size: 18px;
}

:deep(.el-input-number__decrease),
:deep(.el-input-number__increase) {
  background-color: var(--primary-light);
  border-color: var(--border-color);
}

:deep(.el-input-number__decrease:hover),
:deep(.el-input-number__increase:hover) {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
  color: #fff;
}

:deep(.el-select .el-input__wrapper) {
  box-shadow: 0 0 0 1px var(--border-color);
}

:deep(.el-select .el-input__wrapper:hover) {
  box-shadow: 0 0 0 1px var(--primary-color);
}

:deep(.el-textarea__inner) {
  box-shadow: 0 0 0 1px var(--border-color);
}

:deep(.el-textarea__inner:hover) {
  box-shadow: 0 0 0 1px var(--primary-color);
}
</style> 