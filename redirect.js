(function() {
    // 登録ユーザーIDの取得
    let userId = JSON.parse(window['@xweb/core-utils/src/util/templateVariable/variables'].pageMetaAttributes).userId;
    // ターゲットURLパラメータの作成
    const params = new URLSearchParams({
            userId: userId
        });
    // 画面遷移のターゲットURLの作成
    window.location.href = `https://6002bdc8trial.launchpad.cfapps.us10.hana.ondemand.com/8fb4f020-cc8b-45df-a772-627d7ab9b9d2.zbmsf002.comdeloittecnco001zbuco001-0.0.1/index.html/?${params.toString()}`;
    }
)();