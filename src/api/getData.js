import fetch from '@/config/fetch'

/**
 * 登陆
 */

export const login = (username, password)=>{
    let SendData = {
        "cmd":"login",
		"type":"login",
        "username": username,
        "password":password
    }

    return  fetch('', SendData,'POST',"",1);
};

/**
 * 退出
 */

export const signout = () => fetch('/admin/signout',"",'POST');


/**
 * 获取窗口列表
 */
export const getWindowList = (data,isOnline=0) =>{

    if (isOnline ==0){
        return  fetch('/admin/window_list', data,'POST',"",0);
    }else{
        let param = {
            "cmd":"querymement",
            "dataType":["T_WinDisplay"]
        }
        return  fetch('/admin/window_list',param,'POST',"",1);
    }

}


/**
 * 添加窗口
 */
export const AddWindowData = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/add_window_data', data,'POST');
    }else{

        let SendData = {
            "cmd":"savemement",
            "dataType":"T_WinDisplay",
            "data":data
        }
        console.log("vvvvvvvvvvvvv")
        console.log(SendData)

        return  fetch('', SendData,'POST',"",1);
    }
}


/**
 * 编辑窗口
 */
export const SaveWindowData = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/save_window_data', data,'POST');
    }else{
        let SendData = {
            "cmd":"updatemement",
            "dataType":"T_WinDisplay",
            "data":data
        }

        return  fetch('', SendData,'POST',"",1);
    }
}



/**
 * 删除窗口
 */
export const DeleteWindowData = (data,isOnline=0) =>{


    if (isOnline ==0){
        return fetch('/admin/delete_window_data', data,'POST');
    }else{
        let SendData = {
            "cmd":"deletemement",
            "dataType":"T_WinDisplay",
            "entId":data
        }

        return  fetch('',SendData,'POST',"",1);
    }
}

/**
 * 添加综合屏
 */
export const AddScreenListData = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/add_screen_data', data,'POST');
    }else{

        let SendData = {
            "cmd":"savemement",
            "dataType":"T_CompDisplay",
            "entId":data.CompDisplayId,
            "data":data
        }

        return  fetch('', SendData,'POST',"",1);
    }
}


/**
 * 获取综合屏列表
 */
export const getScreenList = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/screen_list', data,'POST');
    }else{

        let SendData = {
            "cmd":"querymement",
            "dataType":["T_CompDisplay"]
        }

        return  fetch('', SendData,'POST',"",1);
    }
}





/**
 * 添加综合屏
 */
export const AddWinCallerListData = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/add_screen_data', data,'POST');
    }else{

        let SendData = {
            "cmd":"savedbent",
            "dataType":"T_CompDisplay",
            "entId":data.CompDisplayId,
            "data":data
        }

        return  fetch('', SendData,'POST',"",1);
    }
}


/**
 * 编辑综合屏
 */
export const SaveScreenListData = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/save_screen_data', data,'POST');
    }else{

        let SendData = {
            "cmd":"updatemement",
            "dataType":"T_CompDisplay",
            "entId":data.compDisplayId,
            "data":data
        }

        return  fetch('', SendData,'POST',"",1);
    }
}


/**
 * 删除综合屏
 */
export const DelScreenListData = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/del_screen_data', data,'POST');
    }else{
        console.log(data.compDisplayId)
        let SendData = {
            "cmd":"deletemement",
            "dataType":"T_CompDisplay",
            "entId":data,
        }

        return  fetch('', SendData,'POST',"",1);
    }
}



/**
 * 获取叫号器列表
 */
export const WInCallerListData = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/wincaller_list', data,'POST');
    }else{

        let SendData = {
            "cmd":"querymement",
            "dataType":["T_WinCaller"]
        }

        return  fetch('', SendData,'POST',"",1);
    }
}

/**
 * 添加叫号器
 */
export const AddWInCallerData = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/add_wincaller_data', data,'POST');
    }else{

        let SendData = {
            "cmd":"savemement",
            "dataType":"T_WinCaller",
            "data":data
        }

        return  fetch('', SendData,'POST',"",1);
    }
}

/**
 * 编辑叫号器
 */
export const SaveWInCallerData = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/save_wincaller_data', data,'POST');
    }else{
        let SendData = {
            "cmd":"updatemement",
            "dataType":"T_WinCaller",
            "data":data
        }

        return  fetch('', SendData,'POST',"",1);
    }
}


/**
 * 删除叫号器
 */
export const DelWInCallerData = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/del_wincaller_data', data,'POST');
    }else{

        let SendData = {
            "cmd":"deletemement",
            "dataType":"T_WinCaller",
            "entId":data
        }

        return  fetch('', SendData,'POST',"",1);
    }
}


/**
 * 获取系统客户端程序版本
 */
export const getClientVerListData = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/wincaller_list', data,'POST');
    }else{

        let SendData = {
            "cmd":"querymement",
            "dataType":["T_ClientVer"]
        }

        return  fetch('', SendData,'POST',"",1);
    }
}

/**
 * 添加系统客户端程序版本
 */
export const AddClientVerData = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/add_wincaller_data', data,'POST');
    }else{

        let SendData = {
            "cmd":"savemement",
            "dataType":"T_ClientVer",
            "data":data
        }

        return  fetch('', SendData,'POST',"",1);
    }
}

/**
 * 编辑系统客户端程序版本
 */
export const SaveClientVerData = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/save_wincaller_data', data,'POST');
    }else{
        let SendData = {
            "cmd":"updatemement",
            "dataType":"T_ClientVer",
            "data":data
        }

        return  fetch('', SendData,'POST',"",1);
    }
}


/**
 * 删除系统客户端程序版本
 */
export const DelClientVerData = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/del_wincaller_data', data,'POST');
    }else{

        let SendData = {
            "cmd":"deletemement",
            "dataType":"T_ClientVer",
            "entId":data
        }

        return  fetch('', SendData,'POST',"",1);
    }
}





/**
 * 获取评价器列表
 */
export const EvaluatoListData = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/evaluato_list', data,'POST');
    }else{

        let SendData = {
            "cmd":"querymement",
            "dataType":["T_Evaluator"]
        }

        return  fetch('', SendData,'POST',"",1);
    }
}


/**
 * 添加评价器
 */
export const AddEvaluatoListData = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/add_evaluato_data', data,'POST');
    }else{

        let SendData = {
            "cmd":"savemement",
            "dataType":"T_Evaluator",
            "data":data
        }

        return  fetch('', SendData,'POST',"",1);
    }
}

/**
 * 编辑评价器
 */
export const SaveEvaluatoListData = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/save_evaluator_data', data,'POST');
    }else{

        let SendData = {
            "cmd":"updatemement",
            "dataType":"T_Evaluator",
            "data":data
        }

        return  fetch('', SendData,'POST',"",1);
    }
}


/**
 * 删除评价器
 */
export const DelEvaluatoListData = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/del_evaluator_data', data,'POST');
    }else{

        let SendData = {
            "cmd":"deletemement",
            "dataType":"T_Evaluator",
            "entId":data
        }

        return  fetch('', SendData,'POST',"",1);
    }
}







/**
 * 获取排队机列表
 */
export const QueuingMachineListData = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/queuing_machine_list', data,'POST');
    }else{

        let SendData = {
            "cmd":"querymement",
            "dataType":["T_QueueMachine"]
        }

        return  fetch('', SendData,'POST',"",1);
    }
}


/**
 * 添加排队机
 */
export const AddQueuingMachineListData = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/add_queuing_machine_data', data,'POST');
    }else{

        let SendData = {
            "cmd":"savemement",
            "dataType":"T_QueueMachine",
            "data":data
        }

        return  fetch('', SendData,'POST',"",1);
    }
}

/**
 * 编辑排队机
 */
export const SaveQueuingMachineListData = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/save_queuing_machine_data', data,'POST');
    }else{

        let SendData = {
            "cmd":"updatemement",
            "dataType":"T_QueueMachine",
            "data":data
        }

        return  fetch('', SendData,'POST',"",1);
    }
}


/**
 * 删除排队机
 */
export const DelQueuingMachineListData = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/del_queuing_machine_data', data,'POST');
    }else{

        let SendData = {
            "cmd":"deletemement",
            "dataType":"T_QueueMachine",
            "entId":data
        }

        return  fetch('', SendData,'POST',"",1);
    }
}



/**
 * 获取填单机列表
 */
export const FillingMachineListData = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/filling_machine_list', data,'POST');
    }else{

        let SendData = {
            "cmd":"querymement",
            "dataType":["T_FillingMachine"]
        }

        return  fetch('', SendData,'POST',"",1);
    }
}


/**
 * 添加填单机
 */
export const AddFillingMachineListData = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/add_filling_machine', data,'POST');
    }else{

        let SendData = {
            "cmd":"savemement",
            "dataType":"T_FillingMachine",
            "data":data
        }

        return  fetch('', SendData,'POST',"",1);
    }
}

/**
 * 编辑填单机
 */
export const SaveFillingMachineListData = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/save_filling_machine', data,'POST');
    }else{

        let SendData = {
            "cmd":"updatemement",
            "dataType":"T_FillingMachine",
            "entId":data.machineId,
            "data":data
        }

        return  fetch('', SendData,'POST',"",1);
    }
}


/**
 * 删除填单机
 */
export const DelFillingMachineListData = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/del_filling_machine', data,'POST');
    }else{

        let SendData = {
            "cmd":"deletemement",
            "dataType":"T_FillingMachine",
            "entId":data
        }

        return  fetch('', SendData,'POST',"",1);
    }
}




/**
 * 获取语音外放列表
 */
export const SpeakerListData = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/speaker_list', data,'POST');
    }else{

        let SendData = {
            "cmd":"querymement",
            "dataType":["T_Speaker"]
        }

        return  fetch('', SendData,'POST',"",1);
    }
}


/**
 * 添加语音外放
 */
export const AddSpeakerListData = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/add_speaker_machine', data,'POST');
    }else{

        let SendData = {
            "cmd":"savemement",
            "dataType":"T_Speaker",
            "data":data
        }

        return  fetch('', SendData,'POST',"",1);
    }
}

/**
 * 编辑语音外放
 */
export const SaveSpeakerListData = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/speaker_machine', data,'POST');
    }else{

        let SendData = {
            "cmd":"updatemement",
            "dataType":"T_Speaker",
            "data":data
        }

        return  fetch('', SendData,'POST',"",1);
    }
}


/**
 * 删除语音外放
 */
export const DelSpeakerListData = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/speaker_machine', data,'POST');
    }else{

        let SendData = {
            "cmd":"deletemement",
            "dataType":"T_Speaker",
            "entId":data
        }

        return  fetch('', SendData,'POST',"",1);
    }
}

/**
 * 获取业务列表
 */
export const BussTypeListData = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/buss_type_list', data,'POST');
    }else{

        let SendData = {
            "cmd":"querymement",
            "dataType":["T_BussType"]
        }

        return  fetch('', SendData,'POST',"",1);
    }
}


/**
 * 添加业务类型
 */
export const AddBussTypeListData = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/add_buss_type', data,'POST');
    }else{

        let SendData = {
            "cmd":"savemement",
            "dataType":"T_BussType",
            "data":data
        }

        return  fetch('', SendData,'POST',"",1);
    }
}

/**
 * 编辑业务类型
 */
export const SaveBussTypeListData = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/save_buss_type', data,'POST');
    }else{

        let SendData = {
            "cmd":"updatemement",
            "dataType":"T_BussType",
            "entId":data.bussId,
            "data":data
        }

        return  fetch('', SendData,'POST',"",1);
    }
}


/**
 * 删除业务类型
 */
export const DelBussTypeListData = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/del_buss_type', data,'POST');
    }else{

        let SendData = {
            "cmd":"deletemement",
            "dataType":"T_BussType",
            "entId":data
        }
        console.log(SendData);
        return  fetch('', SendData,'POST',"",1);
    }
}

/**
 * 添加业务时间段(多条)
 */
export const AddBussTypeListPeriodData = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/add_buss_type_period_type', data,'POST');
    }else{

        let SendData = {
            "cmd":"savemoreent",
            "dataType":"T_BussTime",
            "data":data
        }

        return  fetch('',SendData,'POST',"",1);
    }
}


/**
 * 获取业务时间段(多条)
 */
export const GetBussTypeListPeriodData = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/buss_type_period_type', data,'POST');
    }else{

        let SendData = {
            "cmd":"querymement",
            "dataType":["T_BussTime"]
        }

        return  fetch('',SendData,'POST',"",1);
    }
}


/**
 * 更新业务时间段(多条)
 */
export const UpdateBussTypeListPeriodData = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/update_type_period_type', data,'POST');
    }else{

        let SendData = {
            "cmd":"updatemement",
            "dataType":"T_BussTime",
            "data":data
        }

        return  fetch('',SendData,'POST',"",1);
    }
}


/**
 * 插入业务时间段(多条)
 */
export const InsertBussTypeListPeriodData = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/update_type_period_type', data,'POST');
    }else{

        let SendData = {
            "cmd":"savemement",
            "dataType":"T_BussTime",
            "data":data
        }

        return  fetch('',SendData,'POST',"",1);
    }
}

/**
 * 删除业务时间段(多条)
 */
export const DeleteBussTypeListPeriodData = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/delete_type_period_type', data,'POST');
    }else{

        let SendData = {
            "cmd":"deletemement",
            "dataType":"T_BussTime",
            "entId":data
        }

        return  fetch('',SendData,'POST',"",1);
    }
}



/**
 * 获取部门列表
 */
export const DepartmentListData = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/department_list', data,'POST');
    }else{

        let SendData = {
            "cmd":"querymement",
            "dataType":["T_Department"]
        }

        return  fetch('', SendData,'POST',"",1);
    }
}


/**
 * 添加部门类型
 */
export const AddDepartmentListData = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/add_department_type', data,'POST');
    }else{

        let SendData = {
            "cmd":"savemement",
            "dataType":"T_Department",
            "data":data
        }
        return  fetch('', SendData,'POST',"",1);
    }
}

/**
 * 编辑部门类型
 */
export const SaveDepartmentListData = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/save_department_type', data,'POST');
    }else{

        let SendData = {
            "cmd":"updatemement",
            "dataType":"T_Department",
            "entId":data.departmentId,
            "data":data
        }

        return  fetch('', SendData,'POST',"",1);
    }
}


/**
 * 删除部门
 */
export const DelDepartmentListData = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/del_department_type', data,'POST');
    }else{

        let SendData = {
            "cmd":"deletemement",
            "dataType":"T_Department",
            "entId":data
        }

        return  fetch('', SendData,'POST',"",1);
    }
}




/**
 * 获取事项列表
 */
export const getBussItemList = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/buss_item_list', data,'POST');
    }else{

        let SendData = {
            "cmd":"querymement",
            "dataType":["T_BussItem"]
        }
        return  fetch('', SendData,'POST',"",1);
    }
}


/**
 * 添加事项
 */
export const addBussItemList = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/add_buss_item', data,'POST');
    }else{

        let SendData = {
            "cmd":"savemement",
            "dataType":"T_BussItem",
            "data":data
        }
        return  fetch('', SendData,'POST',"",1);
    }
}

/**
 * 更新事项
 */
export const SaveBussItemList = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/save_buss_item', data,'POST');
    }else{
        console.log('6666666666');
        console.log(data)
        let SendData = {
            "cmd":"updatemement",
            "dataType":"T_BussItem",
            "entId":data.bussItemId,
            "data":data,
            // "entId":data.entId,
            // "data":data[0]
        }

        console.log('sssssssssssssss');
        console.log(SendData);
       // return ;
        return  fetch('', SendData,'POST',"",1);
    }
}

/**
 * 删除事项
 */
export const DelBussItemList = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/del_buss_item', data,'POST');
    }else{
        let SendData = {
            "cmd":"deletemement",
            "dataType":"T_BussItem",
            "entId":data
        }
        console.log("44444444443")
        console.log(SendData);
        return  fetch('', SendData,'POST',"",1);
    }
}


/**
 * 获取大厅列表
 */
export const getHallList = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/hall_list', data,'POST');
    }else{

        let SendData = {
            "cmd":"querymement",
            "dataType":["T_Hall"]
        }
        return  fetch('', SendData,'POST',"",1);
    }
}


/**
 * 添加大厅
 */
export const addHallList = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/add_hall_list_item', data,'POST');
    }else{

        let SendData = {
            "cmd":"savemement",
            "dataType":"T_Hall",
            "data":data
        }
        return  fetch('', SendData,'POST',"",1);
    }
}

/**
 * 编辑大厅
 */
export const SaveHallList = (data,isOnline=0) =>{


    if (isOnline ==0){
        return fetch('/admin/save_hall_item', data,'POST');
    }else{

        let SendData = {
            "cmd":"updatemement",
            "dataType":"T_Hall",
            "entId":data.hallId,
            "data":data
        }
        console.log(SendData)
        console.log("989989")
        //return ;
        return  fetch('', SendData,'POST',"",1);
    }
}

/**
 * 删除大厅
 */
export const DelHallList = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/del_hall_item', data,'POST');
    }else{

        let SendData = {
            "cmd":"deletemement",
            "dataType":"T_Hall",
            "entId":data
        }
        return  fetch('', SendData,'POST',"",1);
    }
}



/**
 * 获取楼层列表
 */
export const getHallFloorList = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/hall_floor_list', data,'POST');
    }else{

        let SendData = {
            "cmd":"querymement",
            "dataType":["T_HallFloor"]
        }
        return  fetch('', SendData,'POST',"",1);
    }
}


/**
 * 添加楼层列表
 */
export const addHallFloorList = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/add_hall_floor_item', data,'POST');
    }else{

        let SendData = {
            "cmd":"savemement",
            "dataType":"T_HallFloor",
            "data":data
        }
        return  fetch('', SendData,'POST',"",1);
    }
}

/**
 * 编辑楼层
 */
export const SaveHallFloorList = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/save_hall_floor_item', data,'POST');
    }else{
        console.log(data.hallId)
        let SendData = {
            "cmd":"updatemement",
            "dataType":"T_HallFloor",
            "data":data
        }
        return  fetch('', SendData,'POST',"",1);
    }
}

/**
 * 删除大厅
 */
export const DelHallFloorList = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/del_hall_floor_item', data,'POST');
    }else{

        let SendData = {
            "cmd":"deletemement",
            "dataType":"T_HallFloor",
            "entId":data
        }
        return  fetch('', SendData,'POST',"",1);
    }
}


/**
 * 获取区域列表
 */
export const getHallRegionList = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/hall_region_list', data,'POST');
    }else{

        let SendData = {
            "cmd":"querymement",
            "dataType":["T_HallRegion"]
        }
        return  fetch('', SendData,'POST',"",1);
    }
}


/**
 * 添加区域
 */
export const addHallRegionList = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/add_hall_region_item', data,'POST');
    }else{

        let SendData = {
            "cmd":"savemement",
            "dataType":"T_HallRegion",
            "data":data
        }
        return  fetch('', SendData,'POST',"",1);
    }
}

/**
 * 编辑区域
 */
export const SaveHallRegionList = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/save_hall_region_item', data,'POST');
    }else{
        console.log(data.hallId)
        let SendData = {
            "cmd":"updatemement",
            "dataType":"T_HallRegion",
            "entId":data.regionId,
            "data":data
        }
        return  fetch('', SendData,'POST',"",1);
    }
}

/**
 * 删除区域
 */
export const DelHallRegionList = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/del_hall_region_item', data,'POST');
    }else{

        let SendData = {
            "cmd":"deletemement",
            "dataType":"T_HallRegion",
            "entId":data
        }
        return  fetch('', SendData,'POST',"",1);
    }
}

/**
 * 获取业务流程步骤
 */
export const getFlowStep = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/win_list', data,'POST');
    }else{

        let SendData = {
            "cmd":"querymement",
            "dataType":["T_FlowStep"]
        }
        return  fetch('', SendData,'POST',"",1);
    }
}

/**
 * 添加业务流程步骤
 */
export const addFlowStep = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/win_list', data,'POST');
    }else{
        let SendData = {
            "cmd":"savemement",
            "dataType":"T_FlowStep",
            "data":data
        }

        return  fetch('', SendData,'POST',"",1);
    }
}
/**
 * 删除业务流程步骤
 */
export const DelFlowStep = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/win_list', data,'POST');
    }else{

        let SendData = {
            "cmd":"deletemement",
            "dataType":"T_FlowStep",
            "entId":data

        }
        return  fetch('', SendData,'POST',"",1);
    }
}



/**
 * 获取业务流程
 */
export const getFlowPath = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/win_list', data,'POST');
    }else{

        let SendData = {
            "cmd":"querymement",
            "dataType":["T_FlowPath"]
        }
        return  fetch('', SendData,'POST',"",1);
    }
}

/**
 * 添加业务流程
 */
export const addFlowPath = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/win_list', data,'POST');
    }else{
        let SendData = {
            "cmd":"savemement",
            "dataType":"T_FlowPath",
            "data":data
        }

        return  fetch('', SendData,'POST',"",1);
    }
}

/**
 * 编辑业务流程
 */
export const SaveFlowPath = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/win_list', data,'POST');
    }else{

        let SendData = {
            "cmd":"updatemement",
            "dataType":"T_FlowPath",
            "entId":data.flowPathId,
            "data":data,
        }
        return  fetch('', SendData,'POST',"",1);
    }
}
/**
 * 删除业务流程
 */
export const DelFlowPath = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/win_list', data,'POST');
    }else{

        let SendData = {
            "cmd":"deletemement",
            "dataType":"T_FlowPath",
            "entId":data

        }
        return  fetch('', SendData,'POST',"",1);
    }
}

/**
 * 获取业务窗口
 */
export const getWinList = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/win_list', data,'POST');
    }else{

        let SendData = {
            "cmd":"querymement",
            "dataType":["T_Win"]
        }
        return  fetch('', SendData,'POST',"",1);
    }
}


/**
 * 添加业务窗口
 */
export const addWinList = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/add_win_item', data,'POST');
    }else{

        let SendData = {
            "cmd":"savemement",
            "dataType":"T_Win",
            //"entId":data.winId,
            "data":data
        }
        console.log("777777");
        console.log(SendData);

        return  fetch('', SendData,'POST',"",1);
    }
}

/**
 * 编辑业务窗口
 */
export const SaveWinList = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/save_win_item', data,'POST');
    }else{
        console.log("888888");
        console.log(data);
        console.log(data.winId)
        let SendData = {
            "cmd":"updatemement",
            "dataType":"T_Win",
            "entId":data.winId,
            "data":data,
        }


        // return ;
        return  fetch('', SendData,'POST',"",1);
    }
}

/**
 * 删除业务窗口
 */
export const DelWinList = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/del_win_item', data,'POST');
    }else{

        let SendData = {
            "cmd":"deletemement",
            "dataType":"T_Win",
            "entId":data
        }


        return  fetch('', SendData,'POST',"",1);
    }
}


/**
 * 获取叫号器、评价器、语音外放、窗口屏、楼层区域
 */
export const GetWinJointData = (data,isOnline=0) =>{

        if (isOnline ==0){
            return fetch('/admin/get_win_join_data', data,'POST');
        }else{

            let SendData = {
                "cmd":"querymement",
                "dataType":["T_WinCaller","T_Evaluator","T_Speaker","T_WinDisplay","T_HallRegion"]
            }
            return  fetch('', SendData,'POST',"",1);
        }
    }
/**
 * 获取综合屏、楼层区域
 */
export const GetCompRegionData = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/get_win_join_data', data,'POST');
    }else{

        let SendData = {
            "cmd":"querymement",
            "dataType":["T_CompDisplay","T_HallRegion"]
        }
        return  fetch('', SendData,'POST',"",1);
    }
}

/**
 * 获取业务窗口
 */
export const getCompRegionList = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/win_list', data,'POST');
    }else{

        let SendData = {
            "cmd":"querymement",
            "dataType":["T_CompRegion"]
        }
        return  fetch('', SendData,'POST',"",1);
    }
}

/**
 * 添加综合屏区域
 */
export const addCompRegionList = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/add_win_item', data,'POST');
    }else{

        let SendData = {
            "cmd":"savemement",
            "dataType":"T_CompRegion",
            "data":data
        }
        console.log("777777");
        console.log(SendData);

        return  fetch('', SendData,'POST',"",1);
    }
}

/**
 * 编辑综合屏区域
 */
export const SaveCompRegionList = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/save_win_item', data,'POST');
    }else{

        let SendData = {
            "cmd":"updatemement",
            "dataType":"T_CompRegion",
            "entId":data.compRegionId,
            "data":data,
        }


        // return ;
        return  fetch('', SendData,'POST',"",1);
    }
}

/**
 * 删除综合屏区域
 */
export const DelCompRegionList = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/del_win_item', data,'POST');
    }else{

        let SendData = {
            "cmd":"deletemement",
            "dataType":"T_CompRegion",
            "entId":data
        }


        return  fetch('', SendData,'POST',"",1);
    }
}



/**
 * 获取管理员、区域、部门、业务流程
 *
 */
export const GetBussTypeJointData = (isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/get_win_join_data', data,'POST');
    }else{

        let SendData = {
            "cmd":"querymement",
            "dataType":["T_FlowPath","T_Manager","T_HallRegion", "T_Department"]
        }

        return  fetch('', SendData,'POST',"",1);
    }
}




/**
 * 获取业务、管理员、业务流程、部门、楼层区域
 *
 */
export const GetBussItemJointData = (isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/get_win_join_data', data,'POST');
    }else{

        let SendData = {
            "cmd":"querymement",
            "dataType":["T_FlowPath","T_BussType","T_Manager","T_Department","T_HallRegion"]
        }

        return  fetch('', SendData,'POST',"",1);
    }
}





/**
 * 获取管理员列表
 */
export const getMangerList = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/manger_list', data,'POST');
    }else{

        let SendData = {
            "cmd":"querymement",
            "dataType":["T_Manager"]
        }
        return  fetch('', SendData,'POST',"",1);
    }
}


/**
 * 添加管理员
 */
export const addMangerList = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/addManger', data,'POST');
    }else{

        let SendData = {
            "cmd":"savemement",
            "dataType":"T_Manager",
            "data":data
        }
        console.log("888888");
        console.log(data);
        // return ;
        return  fetch('', SendData,'POST',"",1);
    }
}


/**
 * 更新管理员
 */
export const saveMangerList = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/saveManger', data,'POST');
    }else{

        let SendData = {
            "cmd":"updatemement",
            "dataType":"T_Manager",
            "data":data
        }

        return  fetch('', SendData,'POST',"",1);
    }
}


/**
 * 删除管理员
 */
export const deleteMangerList = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/delManger', data,'POST');
    }else{

        let SendData = {
            "cmd":"deletemement",
            "dataType":"T_Manager",
            //"data":data
            "entId":data

        }

        return  fetch('', SendData,'POST',"",1);
    }
}

/////

/**
 * 获取窗口广告
 */
export const getWinAdvertisList = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/manger_list', data,'POST');
    }else{

        let SendData = {
            "cmd":"querymement",
            "dataType":["T_WinAdvertis"]
        }
        return  fetch('', SendData,'POST',"",1);
    }
}


/**
 * 添加窗口广告
 */
export const addWinAdvertisList = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/addManger', data,'POST');
    }else{

        let SendData = {
            "cmd":"savemement",
            "dataType":"T_WinAdvertis",
            "data":data
        }

        return  fetch('', SendData,'POST',"",1);
    }
}


/**
 * 更新窗口广告
 */
export const saveWinAdvertisList = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/saveManger', data,'POST');
    }else{

        let SendData = {
            "cmd":"updatemement",
            "dataType":"T_WinAdvertis",
            "data":data
        }

        return  fetch('', SendData,'POST',"",1);
    }
}


/**
 * 删除窗口广告
 */
export const deleteWinAdvertisList = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/delManger', data,'POST');
    }else{

        let SendData = {
            "cmd":"deletemement",
            "dataType":"T_WinAdvertis",
            "entId":data
        }

        return  fetch('', SendData,'POST',"",1);
    }
}


/**
 * 获取工作人员列表
 */
export const getWorkerList = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/worker_list', data,'POST');
    }else{

        let SendData = {
            "cmd":"querymement",
            "dataType":["T_Worker"]
        }

        return  fetch('', SendData,'POST',"",1);
    }
}


/**
 * 添加工作人员
 */
export const addWorkerList = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/addWorker', data,'POST');
    }else{

        let SendData = {
            "cmd":"savemement",
            "dataType":"T_Worker",
            "data":data
        }
        console.log("aaaaaaaaaaaaaaaaaaaaa")
        console.log(SendData)
        //return ;

        return  fetch('', SendData,'POST',"",1);
    }
}


/**
 * 更新工作人员
 */
export const saveWorkerList = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/saveManger', data,'POST');
    }else{

        let SendData = {
            "cmd":"updatemement",
            "dataType":"T_Worker",
            "data":data
        }

        console.log("ddddddddddddddddd")
        console.log(SendData)
        //return ;
        return  fetch('', SendData,'POST',"",1);
    }
}


/**
 * 删除工作人员
 */
export const deleteWorkerList = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/delWorker', data,'POST');
    }else{

        let SendData = {
            "cmd":"deletemement",
            "dataType":"T_Worker",
            "entId":data
        }
        return  fetch('', SendData,'POST',"",1);
    }
}


/**
 * 获取工作人员映射业务事项
 */
export const getWorkerBussList = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/worker_buss_list', data,'POST');
    }else{

        let SendData = {
            "cmd":"querymement",
            "dataType":["T_WorkerBuss"]
        }
        return  fetch('', SendData,'POST',"",1);
    }
}



/**
 * 添加工作人员映射业务事项
 */
export const addWorkerBussList = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/add_worker', data,'POST');
    }else{

        let SendData = {
            "cmd":"savemement",
            "dataType":"T_WorkerBuss",
            "data":data
        }
        return  fetch('', SendData,'POST',"",1);
    }
}



/*删除工作人员映射业务事项
 */
export const deleWorkerBussList = (data,isOnline=0) =>{

    if (isOnline ==0){
        return fetch('/admin/del_worker', data,'POST');
    }else{

        let SendData = {
            "cmd":"deletemement",
            "dataType":"T_WorkerBuss",
            "entid":data
        }
        return  fetch('', SendData,'POST',"",1);
    }
}

/*1.1 查询基础管理配置数据
 */
export const getList = data => fetch('', data,'POST',"",1);

/*1.2 添加基础管理配置数据
 */
export const inserList = data => fetch('', data,'POST',"",1);

/*1.3 修改基础管理配置数据
 */
export const updataList = data => fetch('', data,'POST',"",1);

/*1.4 删除基础管理配置数据
 */
export const delectList = data => fetch('', data,'POST',"",1);


/*查询票面配置数据
 */
export const selectTicket = data => fetch('', data,'POST',"",1);

/*添加票面配置数据
 */
export const insertTicket = data => fetch('', data,'POST',"",1);

/*查询窗口屏
 */
export const selectList = data => fetch('', data,'POST',"",1);

/*添加窗口屏
 */
export const addArea = data => fetch('', data,'POST',"",1);

/*查询综合屏
 */
export const selectComplex = data => fetch('', data,'POST',"",1);

/*添加综合屏
 */
export const addComplex = data => fetch('', data,'POST',"",1);

/*获取短信模板信息列表
 */
export const getSmsList = data => fetch('', data,'POST',"",1);

/*添加短信模板
 */
export const addSms = data => fetch('', data,'POST',"",1);

/*编辑短信模板
 */
export const editSms = data => fetch('', data,'POST',"",1);

/*删除短信模板
 */
export const deleteSms = data => fetch('', data,'POST',1);
