(function() {

       let userId = JSON.parse(window['@xweb/core-utils/src/util/templateVariable/variables'].pageMetaAttributes).userId;
       // 构建目标URL参数
        const params = new URLSearchParams({
            userId: userId
        });
       // window.location.href = `https://help.sap.com/?${params.toString()}`;
       window.location.href = `https://cockpit.hanatrial.ondemand.com/trial/#/globalaccount/f67dc1f7-2173-4297-904e-5e0c7348f212/?${params.toString()}`;
    }
)();