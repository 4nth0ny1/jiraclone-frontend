// const modal = document.querySelector('#modal')
// const card = document.querySelectorAll('.card-body')
// const closeModalBtn = document.querySelector('#close-modal-btn')
// const overlay = document.querySelector('#overlay')
// const createTicket = document.querySelector('#create-ticket')

// const cardArray = Array.from(card)

// cardArray.forEach(card => 
    // card.addEventListener('click', () => {
    //     modal.classList.add('open')
    //     overlay.classList.add('open')
// }))

// createTicket.addEventListener('click', () => {
//     modal.classList.add('open')
//     overlay.classList.add('open')
// })

// closeModalBtn.addEventListener('click', closeModal)

// overlay.addEventListener('click', closeModal)

// function closeModal() {
//     modal.classList.remove('open')
//     overlay.classList.remove('open')
// }

// =========================================== card color changes based on ticket type
// const radioContainer = document.querySelector('.radio-container')
// const formChecks = document.querySelectorAll('.form-check')
// const formCheckInputs = Array.from(document.querySelectorAll('.form-check-input'))


// console.log(checkedRadio)

// radioContainer.addEventListener('click', e => {
//     e.preventDefault()

//     const checkedRadio = formCheckInputs.filter(radio => console.log(radio.checked))

//     checkedRadio.forEach(formCheckInput => {

//         const isChecked = formCheckInput.value === 'true' 

//         const formCheck = formCheckInput.closest('.form-check')
//         if (isChecked){
//             formCheck.classList.add('.card-feature')
//         }

//     })
// })

// --------------------- drag n drop

// const draggables = document.querySelectorAll('.draggable')
// const containers = document.querySelectorAll('.ticket-status-column')


// draggables.forEach(draggable => {
//   draggable.addEventListener('dragstart', () => {
//     draggable.classList.add('dragging')
//   })

//   draggable.addEventListener('dragend', () => {
//     draggable.classList.remove('dragging')
//   })
// })

// containers.forEach(container => {
//     container.addEventListener('dragover', e => {
//       e.preventDefault()
//       const afterElement = getDragAfterElement(container, e.clientY)
//       const draggable = document.querySelector('.dragging')
//       if (afterElement == null) {
//         container.appendChild(draggable)
//       } else {
//         container.insertBefore(draggable, afterElement)
//       }
//     })
//   })

//   function getDragAfterElement(container, y) {
//     const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]
  
//     return draggableElements.reduce((closest, child) => {
//       const box = child.getBoundingClientRect()
//       const offset = y - box.top - box.height / 2
//       if (offset < 0 && offset > closest.offset) {
//         return { offset: offset, element: child }
//       } else {
//         return closest
//       }
//     }, { offset: Number.NEGATIVE_INFINITY }).element
//   }