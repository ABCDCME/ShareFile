// 当SuccessFactors加载此文件时，会自动注入user对象
(function() {
    // 检查user对象是否存在（SuccessFactors环境自动注入）
    if (typeof user !== 'undefined') {
        // 构建目标URL参数
        const params = new URLSearchParams({
            userId: user.id || '',
            empId: user.employeeId || '',
            firstName: encodeURIComponent(user.firstName || ''),
            lastName: encodeURIComponent(user.lastName || ''),
            email: encodeURIComponent(user.email || '')
        });
        
        // 跳转到目标页面
        debugger;
        
        window.location.href = `https://help.sap.com/?${params.toString()}`;
    } else {
        // 回退方案：无用户信息时直接跳转
        //debugger;
       // window.location.href = 'https://help.sap.com/';
       let userId = JSON.parse(window['@xweb/core-utils/src/util/templateVariable/variables'].pageMetaAttributes).userId;
       // 构建目标URL参数
        const params = new URLSearchParams({
            userId: userId
        });
        window.location.href = `https://help.sap.com/?${params.toString()}`;
    }
})();