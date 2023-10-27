const modal = document.getElementById('modal');
const modalText = document.querySelector('.modal-text');
const modalClose = document.querySelector('.modal-close');
export function showModal(message) {
    modalText.innerText = message;
    modal.style.display = 'block';

    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}