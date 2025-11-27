const popupContainer = document.getElementById("popup");

async function pop_up(file) {
    const html = await fetch(`./popup/${file}`).then(res => res.text());
    popupContainer.innerHTML = html;
}

document.querySelectorAll(".btn-popup").forEach(btn => {
    btn.addEventListener("click", () => {
        const file = btn.dataset.file;
        pop_up(file);
    });
});
