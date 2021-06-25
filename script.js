const modal = document.querySelector('#modal')
const card = document.querySelectorAll('.card-body')
const closeModalBtn = document.querySelector('#close-modal-btn')
const overlay = document.querySelector('#overlay')
const createTicket = document.querySelector('#create-ticket')

const cardArray = Array.from(card)

cardArray.forEach(card => 
    card.addEventListener('click', () => {
        modal.classList.add('open')
        overlay.classList.add('open')
}))

createTicket.addEventListener('click', () => {
    modal.classList.add('open')
    overlay.classList.add('open')
})

closeModalBtn.addEventListener('click', closeModal)

overlay.addEventListener('click', closeModal)

function closeModal() {
    modal.classList.remove('open')
    overlay.classList.remove('open')
}

// =========================================== card color changes based on ticket type
const radioContainer = document.querySelector('.radio-container')
const formChecks = document.querySelectorAll('.form-check')
const formCheckInputs = Array.from(document.querySelectorAll('.form-check-input'))


console.log(checkedRadio)

radioContainer.addEventListener('click', e => {
    e.preventDefault()

    const checkedRadio = formCheckInputs.filter(radio => console.log(radio.checked))

    checkedRadio.forEach(formCheckInput => {

        const isChecked = formCheckInput.value === 'true' 

        const formCheck = formCheckInput.closest('.form-check')
        if (isChecked){
            formCheck.classList.add('.card-feature')
        }
 
    })

})

