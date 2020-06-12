/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * baseImgPath: 图片存放地址
 *
 */

let baseUrl = '';
let remotelyUrl = '';
let routerMode = 'hash';
let baseImgPath="";

let host = window.location.host;
if (process.env.NODE_ENV == 'development') {
    baseUrl = '//49.4.6.19/Youngtek/';
    remotelyUrl = '//49.4.6.19/Admin/BussCmd.php';

    baseImgPath = '/img/';
}else{
	//baseUrl = '//elm.cangdu.org';
	baseUrl = '//'+host+'/';
    remotelyUrl = baseUrl+'Admin/BussCmd.php';

    //baseImgPath = '//elm.cangdu.org/img/';
	baseImgPath = baseUrl+'img/';
}

export {
	baseUrl,
	routerMode,
	baseImgPath,
    remotelyUrl
}
