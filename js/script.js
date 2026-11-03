(function () {
    "use strict";

    const THEME_KEY = "portfolio-theme";

    function getStoredTheme () {
        try { return localStorage.getItem(THEME_KEY); } catch (e) { return null; }
    }

    function storeTheme(val) {
        try { localStorage.setItem(THEME_KEY, val); } catch (e) { /* ignore */ }
    }

    function currentTheme() {
        const attr = document.documentElement.getAttribute("data-theme");
        if (attr === "light" || attr === "dark") return attr;
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }


})