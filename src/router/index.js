import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
import componentsRouter from './modules/components'
import chartsRouter from './modules/charts'
import tableRouter from './modules/table'
import nestedRouter from './modules/nested'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/ling/index',
    name: 'Ling',
    meta: {
      title: 'CSS',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: '/ling/index',
        component: () => import('@/views/ling/index'),
        name: 'ling',
        meta: { title: 'ling', icon: 'dashboard', noCache: true }
      },
      {
        path: '/ling/LoadingCycle',
        component: () => import('@/views/ling/loadingCycle'),
        name: 'LoadingCycle',
        meta: { title: 'LoadingCycle', icon: 'dashboard', noCache: true }
      }
    ]
  },
  {
    path: '/echarts',
    component: Layout,
    redirect: '/echarts/index',
    name: 'echarts',
    meta: {
      title: 'echarts',
      icon: 'chart',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: '/echarts/JsonToChart',
        component: () => import('@/views/echarts/JsonToChart'),
        name: 'JsonToChart',
        meta: { title: 'JsonToChart', icon: 'chart', noCache: true }
      },
      {
        path: '/echarts/JsonToChart2',
        component: () => import('@/views/echarts/JsonToChart2'),
        name: 'JsonToChart2',
        meta: { title: 'JsonToChart2', icon: 'chart', noCache: true }
      },
      {
        path: '/echarts/index',
        component: () => import('@/views/echarts/index'),
        name: 'echarts',
        meta: { title: 'BarChart', icon: 'chart', noCache: true }
      },
      {
        path: '/echarts/BarChart2',
        component: () => import('@/views/echarts/BarChart2'),
        name: 'BarChart2',
        meta: { title: 'BarChart2', icon: 'chart', noCache: true }
      },
      {
        path: '/echarts/LineChart',
        component: () => import('@/views/echarts/LineChart'),
        name: 'LineChart',
        meta: { title: 'LineChart', icon: 'chart', noCache: true }
      },
      {
        path: '/echarts/PieChart',
        component: () => import('@/views/echarts/PieChart'),
        name: 'PieChart',
        meta: { title: 'PieChart', icon: 'chart', noCache: true }
      }
    ]
  },
  {
    path: '/amap',
    component: Layout,
    redirect: '/amap/index',
    name: 'amap',
    meta: {
      title: 'amap',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: '/amap/index',
        component: () => import('@/views/amap/index'),
        name: 'amap',
        meta: { title: 'amap', icon: 'dashboard', noCache: true }
      },
      {
        path: '/amap/iconPoint',
        component: () => import('@/views/amap/iconPoint'),
        name: 'iconPoint',
        meta: { title: 'iconPoint', icon: 'dashboard', noCache: true }
      },
      {
        path: '/amap/L7Line',
        component: () => import('@/views/amap/L7Line'),
        name: 'L7Line',
        meta: { title: 'L7Line', icon: 'dashboard', noCache: true }
      },
      {
        path: '/amap/HotMap',
        component: () => import('@/views/amap/HotMap'),
        name: 'HotMap',
        meta: { title: 'HotMap', icon: 'dashboard', noCache: true }
      },
      {
        path: '/amap/cluster',
        component: () => import('@/views/amap/cluster'),
        name: 'amap_cluster',
        meta: { title: 'cluster', icon: 'dashboard', noCache: true }
      }
    ]
  },
  {
    path: '/ol',
    component: Layout,
    redirect: '/ol/index',
    name: 'openlayers',
    meta: {
      title: 'openlayers',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: '/ol/index',
        component: () => import('@/views/openlayers/index'),
        name: 'openlayers',
        meta: { title: 'openlayers', icon: 'dashboard', noCache: true }
      },
      {
        path: '/ol/cluster',
        component: () => import('@/views/openlayers/cluster'),
        name: 'cluster',
        meta: { title: 'cluster', icon: 'dashboard', noCache: true }
      },
      {
        path: '/ol/flyline',
        component: () => import('@/views/openlayers/flyline'),
        name: 'flyline',
        meta: { title: 'flyline', icon: 'dashboard', noCache: true }
      },
      {
        path: '/ol/heatMap',
        component: () => import('@/views/openlayers/heatMap'),
        name: 'olheatMap',
        meta: { title: 'heatMap', icon: 'dashboard', noCache: true }
      }
    ]
  },
  {
    path: '/avue',
    component: Layout,
    redirect: '/avue/index',
    name: 'avue',
    meta: {
      title: 'avue',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: '/avue/index',
        component: () => import('@/views/avue/index'),
        name: 'avue',
        meta: { title: 'avue', icon: 'dashboard', noCache: true }
      }
    ]
  },
  {
    path: '/dashboard',
    component: Layout,
    redirect: '/dashboard/index',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'Dashboard', icon: 'dashboard', noCache: true }
      }
    ]
  },
  {
    path: '/documentation',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/documentation/index'),
        name: 'Documentation',
        meta: { title: 'Documentation', icon: 'documentation', noCache: true }
      }
    ]
  },
  {
    path: '/guide',
    component: Layout,
    redirect: '/guide/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/guide/index'),
        name: 'Guide',
        meta: { title: 'Guide', icon: 'guide', noCache: true }
      }
    ]
  },
  {
    path: '/profile',
    component: Layout,
    redirect: '/profile/index',
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/profile/index'),
        name: 'Profile',
        meta: { title: 'Profile', icon: 'user', noCache: true }
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/page',
    alwaysShow: true, // will always show the root menu
    name: 'Permission',
    meta: {
      title: 'Permission',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'page',
        component: () => import('@/views/permission/page'),
        name: 'PagePermission',
        meta: {
          title: 'Page Permission',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive'),
        name: 'DirectivePermission',
        meta: {
          title: 'Directive Permission'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'role',
        component: () => import('@/views/permission/role'),
        name: 'RolePermission',
        meta: {
          title: 'Role Permission',
          roles: ['admin']
        }
      }
    ]
  },

  {
    path: '/icon',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/icons/index'),
        name: 'Icons',
        meta: { title: 'Icons', icon: 'icon', noCache: true }
      }
    ]
  },

  /** when your routing map is too long, you can split it into small modules **/
  componentsRouter,
  chartsRouter,
  nestedRouter,
  tableRouter,

  {
    path: '/example',
    component: Layout,
    redirect: '/example/list',
    name: 'Example',
    meta: {
      title: 'Example',
      icon: 'example'
    },
    children: [
      {
        path: 'create',
        component: () => import('@/views/example/create'),
        name: 'CreateArticle',
        meta: { title: 'Create Article', icon: 'edit' }
      },
      {
        path: 'edit/:id(\\d+)',
        component: () => import('@/views/example/edit'),
        name: 'EditArticle',
        meta: { title: 'Edit Article', noCache: true, activeMenu: '/example/list' },
        hidden: true
      },
      {
        path: 'list',
        component: () => import('@/views/example/list'),
        name: 'ArticleList',
        meta: { title: 'Article List', icon: 'list' }
      }
    ]
  },

  {
    path: '/tab',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/tab/index'),
        name: 'Tab',
        meta: { title: 'Tab', icon: 'tab' }
      }
    ]
  },

  {
    path: '/error',
    component: Layout,
    redirect: 'noRedirect',
    name: 'ErrorPages',
    meta: {
      title: 'Error Pages',
      icon: '404'
    },
    children: [
      {
        path: '401',
        component: () => import('@/views/error-page/401'),
        name: 'Page401',
        meta: { title: '401', noCache: true }
      },
      {
        path: '404',
        component: () => import('@/views/error-page/404'),
        name: 'Page404',
        meta: { title: '404', noCache: true }
      }
    ]
  },

  {
    path: '/error-log',
    component: Layout,
    children: [
      {
        path: 'log',
        component: () => import('@/views/error-log/index'),
        name: 'ErrorLog',
        meta: { title: 'Error Log', icon: 'bug' }
      }
    ]
  },

  {
    path: '/excel',
    component: Layout,
    redirect: '/excel/export-excel',
    name: 'Excel',
    meta: {
      title: 'Excel',
      icon: 'excel'
    },
    children: [
      {
        path: 'export-excel',
        component: () => import('@/views/excel/export-excel'),
        name: 'ExportExcel',
        meta: { title: 'Export Excel' }
      },
      {
        path: 'export-selected-excel',
        component: () => import('@/views/excel/select-excel'),
        name: 'SelectExcel',
        meta: { title: 'Export Selected' }
      },
      {
        path: 'export-merge-header',
        component: () => import('@/views/excel/merge-header'),
        name: 'MergeHeader',
        meta: { title: 'Merge Header' }
      },
      {
        path: 'upload-excel',
        component: () => import('@/views/excel/upload-excel'),
        name: 'UploadExcel',
        meta: { title: 'Upload Excel' }
      }
    ]
  },

  {
    path: '/zip',
    component: Layout,
    redirect: '/zip/download',
    alwaysShow: true,
    name: 'Zip',
    meta: { title: 'Zip', icon: 'zip' },
    children: [
      {
        path: 'download',
        component: () => import('@/views/zip/index'),
        name: 'ExportZip',
        meta: { title: 'Export Zip' }
      }
    ]
  },

  {
    path: '/pdf',
    component: Layout,
    redirect: '/pdf/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/pdf/index'),
        name: 'PDF',
        meta: { title: 'PDF', icon: 'pdf' }
      }
    ]
  },
  {
    path: '/pdf/download',
    component: () => import('@/views/pdf/download'),
    hidden: true
  },

  {
    path: '/theme',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/theme/index'),
        name: 'Theme',
        meta: { title: 'Theme', icon: 'theme' }
      }
    ]
  },

  {
    path: '/clipboard',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/clipboard/index'),
        name: 'ClipboardDemo',
        meta: { title: 'Clipboard', icon: 'clipboard' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://github.com/PanJiaChen/vue-element-admin',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
