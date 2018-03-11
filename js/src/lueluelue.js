var orgTitle = document.title;
var titleTimer;
var luelueCount = 0;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        if (titleTimer) 
            clearTimeout( titleTimer );
        if (luelueCount <3) {
            luelueCount++;
            document.title = '╭(°A°`)╮ 页面崩溃啦~';
            titleTimer = setTimeout(function () {
                document.title = "算了没意思";
                titleTimer = setTimeout(function () {
                    document.title = orgTitle;
                }, 800);
            }, 5000);
        } else if (luelueCount ==3) {
            luelueCount++;
            document.title = '不玩了没意思...';
            titleTimer = setTimeout(function () {
                document.title = orgTitle;
            }, 800);
        }
    } else {
        if (titleTimer) 
            clearTimeout( titleTimer );
        if (luelueCount <=3 && document.title != orgTitle) {
            document.title = '(ฅ>ω<*ฅ) 咦又好了~ ' + orgTitle;
            titleTimer = setTimeout(function () {
                document.title = orgTitle;
            }, 1200);
        }
    }
});