export const constantRoute = [
  {
    path: '/login',
    name: 'login',
    component: ()=> import('@/views/login/index.vue'),
    meta: {
      title: '登入',
      hidden: true,
      icon: 'Position'
    }
  },
  {
    path: '/',
    name: 'home',
    component: ()=> import('@/layout/index.vue'),
    meta: {
      title: '',
      hidden: false,
      icon: ''
    },
    redirect:'/home',
    children: [
      {
        path: '/home',
        component: ()=> import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          hidden: false,
          icon: 'House'
        },
      }
    ]
  },
  {
    path: '/404',
    name: '404',
    component: ()=> import('@/views/404/index.vue'),
    meta: {
      title: '404',
      hidden: true,
      icon:'Close'
    }
  }, 
  {
    path: '/screen',
    name: 'screen',
    component: ()=>import('@/views/screen/index.vue'),
    meta: {
      title: '数据大屏',
      hidden: false,
      icon:'Histogram',
    }
  },
  {
    path: '/acl',
    name: 'Acl',
    component: ()=>import('@/layout/index.vue'),
    meta: {
      title: '权限管理',
      hidden: false,
      icon:'Lock',
    },
    redirect: '/acl/user',
    children:[
      {
        path: '/acl/user',
        name:'User',
        component: ()=>import('@/views/acl/user/index.vue'),
        meta: {
          title: '用户权限',
          hidden: false,
          icon:'User',
        }
      },
      {
        path: '/acl/rule',
        name:'Rule',
        component: ()=>import('@/views/acl/rule/index.vue'),
        meta: {
          title: '角色管理',
          hidden: false,
          icon:'UserFilled',
        }
      },
      {
        path: '/acl/permission',
        name:'Permission',
        component: ()=>import('@/views/acl/permission/index.vue'),
        meta: {
          title: '菜单管理',
          hidden: false,
          icon:'Menu',
        }
      },
    
    ]
  },
  {
    path: '/product',
    name: 'Product',
    component: ()=>import('@/layout/index.vue'),
    meta: {
      title: '商品管理',
      hidden: false,
      icon:'Goods',
    },
    redirect:'/product/trademark', 
    children:[
      {
        path:'/product/trademark',
        component: ()=> import('@/views/product/trademark/index.vue'),
        name:'Trademark',
        meta: {
          title: '品牌管理',
          hidden: false,
          icon:'ShoppingCartFull',
        },
      },
      {
        path:'/product/attr',
        component: ()=> import('@/views/product/attr/index.vue'),
        name:'Attr',
        meta: {
          title: '属性管理',
          hidden: false,
          icon:'UserFilled',
        },
      },
      {
        path:'/product/sku',
        component: ()=> import('@/views/product/sku/index.vue'),
        name:'Sku',
        meta: {
          title: 'Sku管理',
          hidden: false,
          icon:'Grid',
        },
      },
      {
        path:'/product/spu',
        component: ()=> import('@/views/product/spu/index.vue'),
        name:'Spu',
        meta: {
          title: 'Spu管理',
          hidden: false,
          icon:'Grid',
        },
      },
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any',
    meta: {
      title: '陌生的网站404',
      hidden: true,
      icon:'Close'
    }
  }
]