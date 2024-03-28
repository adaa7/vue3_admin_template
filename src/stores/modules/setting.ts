import { defineStore } from 'pinia';
let useSettingStore = defineStore('SettingStore',{
  state:()=>{
    return {
      fold: false,
      flag: true
    }
  }
})
export default useSettingStore;