(function () {
    // userIdの取得
    let userId = window['@xweb/core-utils/src/util/templateVariable/json'].pageMetaAttributes.userId;
    // 言語の取得
    let userLocale = window['@xweb/core-utils/src/util/templateVariable/json'].pageMetaAttributes.userLocale;
    let languageCode = userLocale.split('_')[0];
    // クエリパラメータの生成
    const a = new URLSearchParams({ 
        loginId: userId,
        lang: languageCode
    });
    try {
        // リダイレクト先URL
        const redirectUrl = `https://mol-dev-j4jvgqnp.launchpad.cfapps.eu10.hana.ondemand.com/01740d26-bdfb-43e7-972b-ec9fff7502ca.zbasfhe001.jpcommolzbusfhe001001zbusfhe001001-0.0.1/index.html?#/talentList?${a.toString()}&type=1`;
        // EdgeやChromeで新しいタブで開く
        window.open(redirectUrl, '_blank');
    } catch (error) {
        console.error("Redirect error:", error);
    }
})();

