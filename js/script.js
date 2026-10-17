const here = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll("nav a").forEach((link) => {
    if (link.getAttribute("href") === here) link.setAttribute("aria-current", "page");
});
