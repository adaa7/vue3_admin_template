import axios from 'axios';
import { ElMessage } from 'element-plus';
import useUserStore from '@/stores/modules/user';
let request = axios.create({
  baseURL: '/api',
  timeout: 5000
})
request.interceptors.request.use((config) => {
  let userStore = useUserStore();
  if(userStore.token) {
    config.headers.token=userStore.token;
  }
  return config;
})
request.interceptors.response.use((response)=>{
  return response.data;
},(error)=>{
  let message = '';
  let status = error.response.status
  switch(status) {
    case 401:
      message = 'Token已过期'
      break;
    case 403:
      message = '无权访问'
      break;
    case 404:
      message = '地址错误'
      break;
    case 500:
      message = '服务器出现错误'
      break;
    default: 
      message = '网络错误'
      break;
  }
  ElMessage({
    type: 'error',
    message
  });
  return Promise.reject(error)
})

export default request;
