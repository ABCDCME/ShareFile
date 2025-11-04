(function() {
    // 登録ユーザーIDの取得
    let userID = JSON.parse(window['@xweb/core-utils/src/util/templateVariable/variables'].pageMetaAttributes).userId;
    // ターゲットURLパラメータの作成
    const params = new URLSearchParams({
            userID: userID
        });
    try {
    // 画面遷移のターゲットURLの作成
    const redirectUrl = `https://mol-dev-j4jvgqnp.launchpad.cfapps.eu10.hana.ondemand.com/01740d26-bdfb-43e7-972b-ec9fff7502ca.zbasfhe001.jpcommolzbusfhe001001zbusfhe001001-0.0.1/index.html?#/talentList?lang=en_us&type=1&${params.toString()}`;
    window.open(redirectUrl, '_blank');
    } catch (error) {
        console.error("Redirect error:", error);
    }
}
)();


