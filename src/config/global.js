let UploadBusinessAddress = "";
let UploadBussImgAddress = "";
let UploadWinImgAddres = "";
let UploadFilesAddress = "";
let ServerAddress="";

let host = window.location.host;




if (process.env.NODE_ENV == 'development') {

    // UploadBusinessAddress=baseURL+"http://192.168.0.159/Admin/core/common/image.php?"  //图片
    // -> 地址全在 login.vue 组件设置

    // sessionStorage.setItem('baseURL','http://192.168.0.159')									// 基础地址
    // sessionStorage.setItem('productImgURL', '/Admin/core/common/image.php?fileName=product')	// 产品图片地址
    // sessionStorage.setItem('bussImgUrl', '/Admin/core/common/image.php?fileName=appeal')		// 诉求图片地址

    // let baseURL = sessionStorage.getItem('baseURL')
    // UploadBusinessAddress = baseURL+"/Admin/core/common/image.php?"  //图片

    UploadBusinessAddress = "http://49.4.6.19/Admin/core/common/image.php"  //图片
    // UploadBussImgAddress="http://192.168.1.190/Service/core/common/bussImg.php"  //引导图片
    // UploadWinImgAddres="http://192.168.1.190/Service/core/common/winImg.php"  //窗口广告图片
    // UploadFilesAddress="http://192.168.1.190/Service/core/common/uploadfiles.php"   //上传文件
    ServerAddress="http://49.4.6.19"
}else{

    // sessionStorage.setItem('baseURL','http://' + host)									// 基础地址
    // sessionStorage.setItem('productImgURL', '/Admin/core/common/image.php?fileName=product')	// 产品图片地址
    // sessionStorage.setItem('bussImgUrl', '/Admin/core/common/image.php?fileName=appeal')		// 诉求图片地址

    // let baseURL = sessionStorage.getItem('baseURL')


    UploadBusinessAddress="http://"+host+"/Admin/core/common/image.php"  //图片
    // UploadBussImgAddress="http://"+host+"/Service/core/common/bussImg.php"  //引导图片
    // UploadWinImgAddres="http://"+host+"/Service/core/common/winImg.php"  //窗口广告图片
    // UploadFilesAddress="http://"+host+"/Service/core/common/uploadfiles.php"   //上传文件
    ServerAddress="http://"+host;
}


export default {
    UploadBusinessAddress,
    //UploadFilesAddress,
    ServerAddress,
    //UploadBussImgAddress,
    //UploadWinImgAddres
}
