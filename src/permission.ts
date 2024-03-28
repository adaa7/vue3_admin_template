//路由的鉴权
import router from '@/router';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
import pinia from '@/stores';
import useUserStores from '@/stores/modules/user';
let userStores = useUserStores(pinia);

router.beforeEach(async(to , from:any, next)=>{
  nprogress.start();
  if(userStores.token) {
    if(to.path=='/login'){
      next({path:'/'})
    }else {
      if(userStores.username) {
        next();
      } else {
        
        try {
          await userStores.userInfo();
          next();
        } catch(error) {
          await userStores.userLogout();
          next({path: '/login',query: {redirect: to.path}})
        }
      }
    }
  } else {
    if(to.path=='/login'){
      next(); 
    }else {
      next({path: '/login',query: {redirect:to.path}});
    }
  }
})
router.afterEach((to , from:any)=>{
  document.title='硅谷甄选-'+to.meta.title
  nprogress.done();
})    