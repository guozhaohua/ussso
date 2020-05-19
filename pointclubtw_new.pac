function FindProxyForURL(url, host) {
    var PROXY_9502 = "PROXY stg.checkproxy.rakuten-it.com:9502"
    var whiteList_9502 = [
        "https://ap.accounts.global.rakuten.com",
        "https://stg-gpoint-club-tw.stg.jp.local",
        "https://stg-gpoint-club-us.stg.jp.local",
        "https://stg-qa-gpoint-club-us.stg.jp.local"
    ]
    for (var index in whiteList_9502) {
        if (shExpMatch(url, whiteList_9502[index] + "*")) {
            return PROXY_9502;
        }
    }
    // Everything else directly!
    return "DIRECT";
}