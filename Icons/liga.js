/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'home3': '&#xe902;',
            'house3': '&#xe902;',
            'images': '&#xe90e;',
            'pictures': '&#xe90e;',
            'profile': '&#xe923;',
            'file2': '&#xe923;',
            'files-empty': '&#xe925;',
            'files': '&#xe925;',
            'cart': '&#xe93a;',
            'purchase': '&#xe93a;',
            'phone': '&#xe942;',
            'telephone': '&#xe942;',
            'location': '&#xe947;',
            'map-marker': '&#xe947;',
            'bubbles3': '&#xe96f;',
            'comments3': '&#xe96f;',
            'user': '&#xe971;',
            'profile2': '&#xe971;',
            'user-plus': '&#xe973;',
            'user2': '&#xe973;',
            'user-minus': '&#xe974;',
            'user3': '&#xe974;',
            'quotes-left': '&#xe977;',
            'ldquo': '&#xe977;',
            'quotes-right': '&#xe978;',
            'rdquo': '&#xe978;',
            'cog': '&#xe994;',
            'gear': '&#xe994;',
            'trophy': '&#xe99e;',
            'cup': '&#xe99e;',
            'star-empty': '&#xe9d7;',
            'rate': '&#xe9d7;',
            'star-full': '&#xe9d9;',
            'rate3': '&#xe9d9;',
            'heart': '&#xe9da;',
            'like': '&#xe9da;',
            'happy2': '&#xe9e0;',
            'emoticon2': '&#xe9e0;',
            'wink': '&#xe9e7;',
            'emoticon9': '&#xe9e7;',
            'checkmark': '&#xea10;',
            'tick': '&#xea10;',
            'checkmark2': '&#xea11;',
            'tick2': '&#xea11;',
            'enter': '&#xea13;',
            'signin': '&#xea13;',
            'exit': '&#xea14;',
            'signout': '&#xea14;',
            'embed2': '&#xea80;',
            'code2': '&#xea80;',
            'facebook2': '&#xea91;',
            'brand11': '&#xea91;',
            'instagram': '&#xea92;',
            'brand12': '&#xea92;',
            'whatsapp': '&#xea93;',
            'brand13': '&#xea93;',
            'telegram': '&#xea95;',
            'brand15': '&#xea95;',
            'twitter': '&#xea96;',
            'brand16': '&#xea96;',
            'youtube': '&#xea9d;',
            'brand21': '&#xea9d;',
            'youtube2': '&#xea9e;',
            'brand22': '&#xea9e;',
            'twitch': '&#xea9f;',
            'brand23': '&#xea9f;',
            'github': '&#xeab0;',
            'brand40': '&#xeab0;',
            'linkedin': '&#xeac9;',
            'brand64': '&#xeac9;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/icon-/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
