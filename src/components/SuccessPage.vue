<template>
  <div class="success-container">
    <div class="success-content">
      <div class="success-icon-wrapper">
        <el-icon class="success-icon"><CircleCheckFilled /></el-icon>
        <div class="success-circle"></div>
      </div>
      <h2>提交成功！</h2>
      <p>感谢您参与我们的问卷调查</p>
      <el-button type="primary" @click="goBack" class="back-button">
        <el-icon><Back /></el-icon>
        返回首页
      </el-button>
    </div>
  </div>
</template>

<script setup>
import { CircleCheckFilled, Back } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  router.push('/')
}
</script>

<style scoped>
.success-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #e6f3ff 0%, #f0f7ff 100%);
  padding: 20px;
}

.success-content {
  background: #fff;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  text-align: center;
  max-width: 400px;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.success-icon-wrapper {
  position: relative;
  width: 80px;
  height: 80px;
  margin: 0 auto 24px;
}

.success-icon {
  font-size: 64px;
  color: var(--success-color);
  position: relative;
  z-index: 2;
}

.success-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  background: var(--success-color);
  border-radius: 50%;
  opacity: 0.1;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.1;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.2);
    opacity: 0.05;
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.1;
  }
}

h2 {
  color: var(--text-primary);
  margin-bottom: 16px;
  font-size: 24px;
}

p {
  color: var(--text-secondary);
  margin-bottom: 32px;
  font-size: 16px;
}

.back-button {
  width: 100%;
  height: 44px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.back-button .el-icon {
  font-size: 18px;
}
</style> 