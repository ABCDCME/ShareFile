(function() {

       let userId = JSON.parse(window['@xweb/core-utils/src/util/templateVariable/variables'].pageMetaAttributes).userId;
       // 构建目标URL参数
        const params = new URLSearchParams({
            userId: userId
        });
        window.location.href = `https://help.sap.com/?${params.toString()}`;
    }
);