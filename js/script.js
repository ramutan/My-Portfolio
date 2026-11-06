(function () {
    "use strict";

    /* ---------- Theme toggle (no-flash handled inline in <head>) ---------- */
    const THEME_KEY = "portfolio-theme";

    function getStoredTheme() {
        try { return localStorage.getItem(THEME_KEY); } catch (e) { return null; }
    }

     function storeTheme(val) {
        try { localStorage.setItem(THEME_KEY, val); } catch (e) { /* ignore */ }
    }
