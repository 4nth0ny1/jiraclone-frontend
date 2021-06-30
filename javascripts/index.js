const modal = document.querySelector('#modal')
const closeModalBtn = document.querySelector('#close-modal-btn')
const overlay = document.querySelector('#overlay')
const createTicket = document.querySelector('#create-ticket')
const navigation = document.querySelector('.navigation')
const ticketStatusContainer = document.querySelector('#ticket-container')
    
document.addEventListener('DOMContentLoaded', () => {

    TicketApi.fetchAll()

    navigation.addEventListener('mouseover', () => {
      ticketStatusContainer.style.marginLeft = '350px'
    })

    navigation.addEventListener('mouseout', () => {
      ticketStatusContainer.style.marginLeft = '100px'
    })

})




function initializeDrag(){
    const draggables = document.querySelectorAll('.draggable')
    const containers = document.querySelectorAll('.ticket-status-column')
    
    
    draggables.forEach(draggable => {
      draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging')
      })
      draggable.addEventListener('dragend', (e) => {
        draggable.classList.remove('dragging')
        const ticketId = e.target.dataset.id 
        const ticketStatus = e.target.closest(".ticket-status-column").dataset.status
        TicketApi.updateStatus(ticketId, ticketStatus)
      })
    })
    
    containers.forEach(container => {
        container.addEventListener('dragover', e => {
          e.preventDefault()
          const afterElement = getDragAfterElement(container, e.clientY)
          const draggable = document.querySelector('.dragging')
          if (afterElement == null) {
            container.appendChild(draggable)
          } else {
            container.insertBefore(draggable, afterElement)
          }
        })
      })
}

  function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]
  
    return draggableElements.reduce((closest, child) => {
      const box = child.getBoundingClientRect()
      const offset = y - box.top - box.height / 2
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child }
      } else {
        return closest
      }
    }, { offset: Number.NEGATIVE_INFINITY }).element
  }

  function formatToClass(str){
    return str.toLowerCase().split(' ').join('-')
  }

  function closeModal() {
    modal.classList.remove('open')
    overlay.classList.remove('open')
  }

  // function alterCardStatusOnDrag() {
  //   const draggables = document.querySelectorAll('.draggable')
  //     draggables.forEach(draggable => {
  //       const parentOfDraggable = draggable.parentElement
  //       if (parentOfDraggable.dataset.status === draggable.dataset.status) {
  //           console.log('yes')
  //       } else {
  //           console.log('no')
  //       }
  //     })
  // }



