(function() {

       let userId = JSON.parse(window['@xweb/core-utils/src/util/templateVariable/variables'].pageMetaAttributes).userId;
       // 构建目标URL参数
        const params = new URLSearchParams({
            userId: userId
        });
       // window.location.href = `https://help.sap.com/?${params.toString()}`;
       window.location.href = `https://6002bdc8trial.launchpad.cfapps.us10.hana.ondemand.com/8fb4f020-cc8b-45df-a772-627d7ab9b9d2.zbmsf002.comdeloittecnco001zbuco001-0.0.1/index.html/?${params.toString()}`;
    }
)();