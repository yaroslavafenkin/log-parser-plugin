window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".lpp-toggle-list").forEach((toggle) => {
        toggle.addEventListener("click", (event) => {
            event.preventDefault();
            const { displayCategory } = event.target.closest(".lpp-toggle-list").dataset;

            element = document.getElementById(displayCategory).style;
            element.display = element.display == 'none' ? 'block' : 'none';
        })
    });
});
