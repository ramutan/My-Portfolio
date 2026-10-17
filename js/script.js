const here = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll("nav a").forEach((link) => {
    if (link.getAttribute("href") === here) link.setAttribute("aria-current", "page");
});

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const copyBtn = document.getElementById("copy-email");
if (copyBtn) {
    const status = document.getElementById("copy-status");
    copyBtn.addEventListener("click", async () => {
        const email = document.getElementById("email-link").textContent;
        try {
            await navigator.clipboard.writeText(email);
            status.textContent = "Email address copied.";
        } catch (err) {
            status.textContent = "Couldn't copy. Select the address above and copy it manually.";
        }
    });
}
