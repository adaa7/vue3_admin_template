//创建用户习惯的仓库
import { defineStore } from "pinia";

import { reqLogin,reqUserInfo, reqLogout } from "@/api/user";
import { SET_TOKEN, GET_TOKEN } from "@/utils/token";
import {constantRoute} from '@/router/routes';

let useUserStore = defineStore("User", {
  state: ():any => {
    return {
      token: GET_TOKEN(),
      meunRouters: constantRoute,
      username: '',
      avatar: '',
    };
  },
  actions: {
    async userLogin(data: any) {
      let result: any = await reqLogin(data);
      
      if (result.code === 200) {
        this.token = result.data;
        SET_TOKEN(result.data);
        return "ok";
      } else {
        return Promise.reject(new Error(result.data));
      }
    },
    async userInfo() {
      let result = await reqUserInfo()
      if(result.code == 200) {
        console.log(result.data.name);
        this.username = result.data.name
        this.avatar = result.data.avatar
        return 'ok'
      } else {
        localStorage.clear()
      }
    },
    async userLogout() {
      let result = await reqLogout()
      if(result.code == 200) {
        this.token =''
        this.username=''
        this.avatar=''
        localStorage.clear()
        return 'ok'
      }else {
        return Promise.reject(new Error(result.message))
      }

    }
  },
  getters: {},
});
export default useUserStore;
