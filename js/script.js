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

     function currentTheme() {
        const attr = document.documentElement.getAttribute("data-theme");
        if (attr === "light" || attr === "dark") return attr;
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }

    function applyTheme(theme) {
        document.documentElement.setAttribute("data-theme", theme);
        const btn = document.querySelector(".theme-toggle");
        if (btn) {
            btn.setAttribute("aria-label",
                theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
        }
    }

