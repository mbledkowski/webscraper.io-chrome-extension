!function(e) {
    var r = {};
    function n(t) {
        if (r[t]) return r[t].exports;
        var o = r[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
    }
    n.m = e, n.c = r, n.d = function(e, r, t) {
        n.o(e, r) || Object.defineProperty(e, r, {
            configurable: !1,
            enumerable: !0,
            get: t
        });
    }, n.n = function(e) {
        var r = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return n.d(r, "a", r), r;
    }, n.o = function(e, r) {
        return Object.prototype.hasOwnProperty.call(e, r);
    }, n.p = "", n(n.s = 568);
}({
    568: function(e, r) {
        chrome.devtools.panels.create("Web Scraper", "images/icon48.png", "devtools_web_scraper_panel.html");
    }
});