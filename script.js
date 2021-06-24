const modal = document.querySelector('#modal')
const card = document.querySelector('.card-body')
const closeModalBtn = document.querySelector('#close-modal-btn')
const overlay = document.querySelector('#overlay')

// TODO: 3. Create a click event listener for the open-modal-btn that adds the class "open" to the modal
// BONUS: Also add the class "open" to the overlay

card.addEventListener('click', () => {
    modal.classList.add('open')
    overlay.classList.add('open')
})

// TODO: 4. Create a click event listener for the close-modal-btn that removes the class "open" from the modal
// BONUS: Also remove the class "open" from the overlay

closeModalBtn.addEventListener('click', closeModal)

// BONUS: Add a click event listener to the overlay that removes the class "open" from the modal and the overlay

overlay.addEventListener('click', closeModal)

function closeModal() {
    modal.classList.remove('open')
    overlay.classList.remove('open')
}