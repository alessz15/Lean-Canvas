// script.js

const boxes = document.querySelectorAll('.box');
const modal = document.createElement('div');
modal.classList.add('modal');
document.body.appendChild(modal);

boxes.forEach(box => {
    box.addEventListener('click', () => {
        modal.innerHTML = `
            <div class="modal-content">
                <h2>${box.querySelector('h2').innerText}</h2>
                <p>${box.querySelector('p').innerText}</p>
                ${box.querySelector('h3') ? `<h3>${box.querySelector('h3').innerText}</h3><p>${box.querySelectorAll('p')[1].innerText}</p>` : ''}
            </div>
        `;
        modal.style.display = 'flex';
    });
});

modal.addEventListener('click', () => {
    modal.style.display = 'none';
});
