// ==UserScript==
// @name       Lingr message blockquotize
// @namespace  http://aycabta.github.io/
// @version    0.4.0
// @description  benry
// @match      http://lingr.com/
// @copyright  2014+, You
// ==/UserScript==

(function() {
    function blockquotize(event) {
        console.log(event.target);
        var deliciousLunch = event.target.parentNode.getElementsByTagName('textarea')[0];
        deliciousLunch.value = deliciousLunch.value.replace(/^/gm, '> ');
        deliciousLunch
        .focus();
    }
    var sayIts = document.evaluate('//input[@name="commit"]', document.body, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    for (var i = 0; i < sayIts.snapshotLength; i++) {
    var blockquoteButton = document.createElement("input");
        blockquoteButton.type = "button";
        blockquoteButton.value = "blockquotize";
        blockquoteButton.onclick = blockquotize;
        blockquoteButton.style.float = "right";
        blockquoteButton.style.marginTop = "20px";
        var sayIt = sayIts.snapshotItem(i);
        sayIt.parentNode.insertBefore(blockquoteButton, sayIt);
    }
})();

