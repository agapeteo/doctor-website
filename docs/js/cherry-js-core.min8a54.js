var CherryJsCore;
! function(e) {
    "use strict";
    CherryJsCore = {
        name: "Cherry Js Core",
        varsion: "1.0.0",
        author: "Cherry Team",
        variable: {
            $document: e(document),
            $window: e(window),
            browser: e.browser,
            browser_supported: !0,
            security: cherry_ajax,
            loaded_assets: {
                script: wp_load_script,
                style: wp_load_style
            },
            ui_auto_init: "true" == ui_init_object.auto_init ? !0 : !1,
            ui_auto_target: ui_init_object.targets
        },
        status: {
            on_load: !1,
            is_ready: !1
        },
        init: function() {
            CherryJsCore.set_variable(), e(document).ready(CherryJsCore.ready), e(window).load(CherryJsCore.load)
        },
        set_variable: function() {
            CherryJsCore.variable.browser_supported = function() {
                var e = CherryJsCore.variable.browser,
                    r = {
                        msie: [8]
                    };
                for (var i in r)
                    if ("undefined" != e.browser)
                        for (var t in r[i])
                            if (e.version <= r[i][t]) return !1;
                return !0
            }()
        },
        ready: function() {
            CherryJsCore.status.is_ready = !0, CherryJsCore.variable.ui_auto_init && CherryJsCore.expressions.ui_init(), CherryJsCore.expressions.widget_added_ui_init(), CherryJsCore.expressions.widget_updated_ui_init()
        },
        load: function() {
            CherryJsCore.status.on_load = !0
        },
        expressions: {
            ui_init: function() {
                CherryJsCore.variable.ui_auto_target.forEach(function(r) {
                    CherryJsCore.variable.$window.trigger("cherry-ui-elements-init", {
                        target: e(r)
                    })
                })
            },
            widget_added_ui_init: function() {
                e(document).on("widget-added", function(r, i) {
                    e(window).trigger("cherry-ui-elements-init", {
                        target: i
                    })
                })
            },
            widget_updated_ui_init: function() {
                e(document).on("widget-updated", function(r, i) {
                    e(window).trigger("cherry-ui-elements-init", {
                        target: i
                    })
                })
            }
        },
        utilites: {
            namespace: function(e) {
                var r = e.split("."),
                    i = CherryJsCore,
                    t = r.length,
                    s = 0;
                for (s = 0; t > s; s += 1) "undefined" == typeof i[r[s]] && (i[r[s]] = {}), i = i[r[s]];
                return i
            },
            get_compress_assets: function(r, i) {
                var t = {
                        action: "get_compress_assets",
                        security: CherryJsCore.variable.security,
                        style: [],
                        script: []
                    },
                    s = /([\S.]+\/)/gim,
                    a = /(\.js|\.css)/gim,
                    o = i || function() {};
                e.isArray(r) || (r = [r]);
                for (var n in r) {
                    var u = r[n],
                        d = u.replace(s, ""),
                        c = u.match(a)[0];
                    ".js" === c && -1 == e.inArray(d, CherryJsCore.variable.loaded_assets.script) && (t.script.push(u), CherryJsCore.variable.loaded_assets.script.push(d)), ".css" === c && -1 == e.inArray(d, CherryJsCore.variable.loaded_assets.style) && (t.style.push(u), CherryJsCore.variable.loaded_assets.style.push(d))
                }
                e.get(ajaxurl, t, function(r) {
                    var i = e.parseJSON(r),
                        t = i.style,
                        s = i.script;
                    if (t) {
                        var a = document.createElement("style");
                        a.type = "text/css", a.media = "all", a.innerHTML = t, e("body", document).append(a)
                    }
                    if (s) {
                        new Function(s)()
                    }
                    return o()
                })
            }
        }
    }, CherryJsCore.init()
}(jQuery);