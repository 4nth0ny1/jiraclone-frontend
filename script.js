const modal = document.querySelector('#modal')
const card = document.querySelectorAll('.card-body')
const closeModalBtn = document.querySelector('#close-modal-btn')
const overlay = document.querySelector('#overlay')

const cardArray = Array.from(card)

cardArray.forEach(card => 
    card.addEventListener('click', () => {
        modal.classList.add('open')
        overlay.classList.add('open')
}))

closeModalBtn.addEventListener('click', closeModal)

overlay.addEventListener('click', closeModal)

function closeModal() {
    modal.classList.remove('open')
    overlay.classList.remove('open')
}