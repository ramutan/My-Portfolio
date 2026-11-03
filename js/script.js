(function () {
    "use strict";

    const THEME_KEY = "portfolio-theme";

    function getStoredTheme () {
        try { return localStorage.getItem(THEME_KEY); } catch (e) { return null; }
    }
})