(function () {
    try {
        // 安全にテンプレート変数を取得
        const templateVar = window['@xweb/core-utils/src/util/templateVariable/json'];
        const pageMeta = templateVar && templateVar.pageMetaAttributes;
        const userId = (pageMeta && pageMeta.userId) || '';
        const userLocale = (pageMeta && pageMeta.userLocale) || '';
        const languageCode = userLocale ? String(userLocale).split('_')[0] : '';

        // クエリパラメータの生成
        const params = new URLSearchParams({
            loginId: userId,
            lang: languageCode
        });

        // JavaScriptファイルのURL取得
        let currentScript = document.currentScript;
        // document.currentScript が null になる環境への降級処理
        if (!currentScript) {
            const scripts = document.getElementsByTagName('script');
            currentScript = scripts[scripts.length - 1];
        }
        // URLとpageIdの取得
        const src = (currentScript && currentScript.src) ? currentScript.src : '';
        const url = src ? new URL(src, location.href) : null;
        const pageId = url ? url.searchParams.get('page') : null;

        // リダイレクト先URL の作成（pageId がない場合はデフォルトルートにする）
        const base = 'https://mol-dev-j4jvgqnp.launchpad.cfapps.eu10.hana.ondemand.com/01740d26-bdfb-43e7-972b-ec9fff7502ca.zbasfhe001.jpcommolzbusfhe001001zbusfhe001001-0.0.1/index.html';
        const hash = pageId ? `#/${pageId}?${params.toString()}&type=1` : `#/?${params.toString()}&type=1`;
        const redirectUrl = `${base}${hash}`;

        // 新しいタブで開く
        window.open(redirectUrl, '_blank');
    } catch (error) {
        console.error('Redirect error:', error);
    }
})();
