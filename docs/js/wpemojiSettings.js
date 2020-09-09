window._wpemojiSettings = {
    baseUrl: "https://s.w.org/images/core/emoji/11/72x72/",
    ext: ".png",
    svgUrl: "https://s.w.org/images/core/emoji/11/svg/",
    svgExt: ".svg",
    source: {
        concatemoji: "/js/wp-emoji-release.min.js",
    },
};
!(function (a, b, c) {
    function d(a, b) {
        var c = String.fromCharCode;
        l.clearRect(0, 0, k.width, k.height), l.fillText(c.apply(this, a), 0, 0);
        var d = k.toDataURL();
        l.clearRect(0, 0, k.width, k.height), l.fillText(c.apply(this, b), 0, 0);
        var e = k.toDataURL();
        return d === e;
    }

    function e(a) {
        var b;
        if (!l || !l.fillText) return !1;
        switch (((l.textBaseline = "top"), (l.font = "600 32px Arial"), a)) {
            case "flag":
                return (
                    !(b = d([55356, 56826, 55356, 56819], [55356, 56826, 8203, 55356, 56819])) &&
                    ((b = d(
                        [55356, 57332, 56128, 56423, 56128, 56418, 56128, 56421, 56128, 56430, 56128, 56423, 56128, 56447],
                        [55356, 57332, 8203, 56128, 56423, 8203, 56128, 56418, 8203, 56128, 56421, 8203, 56128, 56430, 8203, 56128, 56423, 8203, 56128, 56447]
                    )),
                    !b)
                );
            case "emoji":
                return (b = d([55358, 56760, 9792, 65039], [55358, 56760, 8203, 9792, 65039])), !b;
        }
        return !1;
    }

    function f(a) {
        var c = b.createElement("script");
        (c.src = a), (c.defer = c.type = "text/javascript"), b.getElementsByTagName("head")[0].appendChild(c);
    }
    var g,
        h,
        i,
        j,
        k = b.createElement("canvas"),
        l = k.getContext && k.getContext("2d");
    for (
        j = Array("flag", "emoji"),
            c.supports = {
                everything: !0,
                everythingExceptFlag: !0,
            },
            i = 0;
        i < j.length;
        i++
    )
        (c.supports[j[i]] = e(j[i])), (c.supports.everything = c.supports.everything && c.supports[j[i]]), "flag" !== j[i] && (c.supports.everythingExceptFlag = c.supports.everythingExceptFlag && c.supports[j[i]]);
    (c.supports.everythingExceptFlag = c.supports.everythingExceptFlag && !c.supports.flag),
        (c.DOMReady = !1),
        (c.readyCallback = function () {
            c.DOMReady = !0;
        }),
        c.supports.everything ||
            ((h = function () {
                c.readyCallback();
            }),
            b.addEventListener
                ? (b.addEventListener("DOMContentLoaded", h, !1), a.addEventListener("load", h, !1))
                : (a.attachEvent("onload", h),
                  b.attachEvent("onreadystatechange", function () {
                      "complete" === b.readyState && c.readyCallback();
                  })),
            (g = c.source || {}),
            g.concatemoji ? f(g.concatemoji) : g.wpemoji && g.twemoji && (f(g.twemoji), f(g.wpemoji)));
})(window, document, window._wpemojiSettings);
// Set some defaults
var timeFormat = "h:i A";
var timeInterval = 60;

var i18n_confirm_appt_delete = "Are you sure you want to cancel this appointment?",
    i18n_please_wait = "Please wait...",
    i18n_wrong_username_pass = "Wrong username/password combination.",
    i18n_request_appointment = "Request Appointment",
    i18n_fill_out_required_fields = "Please fill out all required fields.",
    i18n_appt_required_fields = "A first name and an email address are required fields.";
/* <![CDATA[ */
var wp_load_style = [
    "formidable.css",
    "jquery-swiper.html",
    "jquery-slider-pro.html",
    "booked-gf.html",
    "booked-tooltipster.html",
    "booked-tooltipster-theme.html",
    "booked-animations.html",
    "booked-styles.html",
    "booked-responsive.html",
    "contact-form-7.html",
    "be_dentist-theme-style.html",
    "cherry-google-fonts.html",
    "tm-builder-modules-style.html",
    "magnific-popup.css",
];
var wp_load_script = [
    "cherry-js-core.js",
    "jquery.html",
    "booked-spin-js.html",
    "booked-spin-jquery.html",
    "booked-tooltipster-2.html",
    "booked-functions.html",
    "tm-builder-modules-global-functions-script.html",
    "jquery-swiper-2.html",
    "jquery-slider-pro-2.html",
    "contact-form-8.html",
    "be_dentist-theme-script.html",
    "cherry-post-formats.html",
    "do-etfw-twitter-widgets.html",
    "google-maps-api.html",
    "divi-fitvids.html",
    "waypoints.html",
    "magnific-popup.html",
    "tm-jquery-touch-mobile.html",
    "tm-builder-frontend-closest-descendent.html",
    "tm-builder-frontend-reverse.html",
    "tm-builder-frontend-simple-carousel.html",
    "tm-builder-frontend-simple-slider.html",
    "tm-builder-frontend-easy-pie-chart.html",
    "tm-builder-frontend-tm-hash.html",
    "tm-builder-modules-script.html",
    "fittext.js",
];
var cherry_ajax = "8c28d134ab";
var ui_init_object = { auto_init: "false", targets: [] };
/* ]]> */
/* <![CDATA[ */
var wpcf7 = { apiSettings: { root: "http://www.bestnyosteopathic.com/wp-json/contact-form-7/v1", namespace: "contact-form-7/v1" }, recaptcha: { messages: { empty: "Please verify that you are not a robot." } } };
/* ]]> */
/* <![CDATA[ */
var be_dentist = { ajaxurl: "http://www.bestnyosteopathic.com/wp-admin/admin-ajax.php", labels: { totop_button: "Top" } };
/* ]]> */
/* <![CDATA[ */
var tm_pb_custom = {
    ajaxurl: "http://www.bestnyosteopathic.com/wp-admin/admin-ajax.php",
    images_uri: "http://www.bestnyosteopathic.com/wp-content/themes/bedentist/images",
    builder_images_uri: "http://www.bestnyosteopathic.com/wp-content/plugins/power-builder/framework/assets/images",
    tm_frontend_nonce: "dcd3db8ce6",
    subscription_failed: "Please, check the fields below to make sure you entered the correct information.",
    fill_message: "Please, fill in the following fields:",
    contact_error_message: "Please, fix the following errors:",
    invalid: "Invalid email",
    captcha: "Captcha",
    prev: "Prev",
    previous: "Previous",
    next: "Next",
    wrong_captcha: "You entered the wrong number in captcha.",
    is_builder_plugin_used: "1",
    is_divi_theme_used: "",
    widget_search_selector: ".widget_search",
};
/* ]]> */
