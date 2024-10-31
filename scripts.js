// script.js
document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".box");
    const modal = document.getElementById("modal");
    const modalContent = document.getElementById("modal-text");
    const closeModal = document.querySelector(".close");

    boxes.forEach(box => {
        box.addEventListener("click", () => {
            modalContent.innerHTML = box.innerHTML;
            modal.style.display = "flex";
        });
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});

