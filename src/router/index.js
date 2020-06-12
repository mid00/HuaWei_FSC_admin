import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure(
    [],
    () => r(require('@/page/login')),
    'login'
);

const manage = r => require.ensure(
    [],
    () => r(require('@/page/manage')),
    'manage'
);

const home = r => require.ensure(
    [],
    () => r(require('@/page/home')),
    'home'
);
const basics = r => require.ensure(
    [],
    () => r(require('@/page/basics')),
    'basics'
);
const user = r => require.ensure(
    [],
    () => r(require('@/page/user')),
    'user'
);
const workstation = r => require.ensure(
    [],
    () => r(require('@/page/workstation')),
    'workstation'
);
const product = r => require.ensure(
    [],
    () => r(require('@/page/product')),
    'product'
);
const buss = r => require.ensure(
    [],
    () => r(require('@/page/buss')),
    'buss'
);
const queue = r => require.ensure(
    [],
    () => r(require('@/page/queue')),
    'queue'
);
const queueMap = r => require.ensure(
    [],
    () => r(require('@/page/queueMap')),
    'queueMap'
);


const routes = [
	{
		path: '/',
		component: login
	},
	{
		path: '/manage',
		component: manage,
		name: '',
		children: [
            {
                path: '',
                component: home,
                meta: [],
            }, 
			{
                path: '/basics',                       //基础数据设置
                component: basics,
                meta: [],
            },
			{
                path: '/user',                       //用户设置
                component: user,
                meta: [],
            },
            {
                path: '/workstation',                       //工位设置
                component: workstation,
                meta: [],
            },
			{
                path: '/product',                       //产品设置
                component: product,
                meta: [],
            },
			{
                path: '/buss',                       //业务设置
                component: buss,
                meta: [],
            },
			{
                path: '/queue',                       //队列设置
                component: queue,
                meta: [],
            },
			{
                path: '/queueMap',                       //队列映射设置
                component: queueMap,
                meta: [],
            },
		]
	}
]

export default new Router({
	mode:"history",     //解决路由出现#号问题  路由模式 改为history
    base:"/manage",   //解决改为#号后 无法访问问题  本地开发环境要注释掉
	routes,
	strict: process.env.NODE_ENV !== 'production',
})
