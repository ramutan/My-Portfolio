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

     function toggleTheme() {
        const next = currentTheme() === "dark" ? "light" : "dark";
        applyTheme(next);
        storeTheme(next);
    }

    // React to system preference change IF the user hasn't manually chosen
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
        if (!getStoredTheme()) {
            applyTheme(e.matches ? "dark" : "light");
        }
    });

    // Alt+K / Alt+J keyboard shortcut to toggle theme (Bryl-style)
    document.addEventListener("keydown", (e) => {
        if (e.altKey && (e.key === "k" || e.key === "K" || e.key === "j" || e.key === "J")) {
            e.preventDefault();
            toggleTheme();
        }
    });

    document.addEventListener("DOMContentLoaded", function () {
        /* ---------- Theme toggle button ---------- */
        const toggle = document.querySelector(".theme-toggle");
        if (toggle) {
            toggle.addEventListener("click", toggleTheme);
            toggle.setAttribute("aria-label",
                currentTheme() === "dark" ? "Switch to light theme" : "Switch to dark theme");
        }

        /* ---------- Active nav link (path-based, for multi-page) ---------- */
        const here = (location.pathname.split("/").pop() || "index.html");
        document.querySelectorAll(".nav-links a").forEach((link) => {
            const href = link.getAttribute("href");
            if (href === here) link.setAttribute("aria-current", "page");
        });
