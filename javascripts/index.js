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

    createTicket.addEventListener('click', () => {
      modal.classList.add('open')
      overlay.classList.add('open')
      overlay.addEventListener('click', closeModal)
      Ticket.addNewTicketForm()
    })

    toggleBackground()
    Ticket.alphabetizeByTitle()

})

function handleModal(e){

  const commentsContainer = document.querySelector('.comments-container')
  if (commentsContainer.classList.contains('open')) {

    commentsContainer.classList.remove('open')
    commentsContainer.style.padding = '0px'
    commentsContainer.style.marginLeft = '0px'
    if(document.querySelector('#new-comment-form')){
      document.querySelector('#new-comment-form').classList.add('d-none')
    }
    commentsContainer.style.width = '0px'

    
  } else {
    commentsContainer.classList.add('open')
    const expandModal = document.querySelector('.expand-modal')
    commentsContainer.style.padding = '25px'
    commentsContainer.style.marginLeft = '10px'
    if(document.querySelector('#new-comment-form')){
      document.querySelector('#new-comment-form').classList.remove('d-none')
    }
    
    const ticketId = e.target.dataset.ticketId
    CommentApi.fetchAll(ticketId)
    commentsContainer.style.width = '400px'
    Comment.renderNewCommentForm()
  }
}

function addDragListener(draggable){
  draggable.removeEventListener('dragstart', function () {})
    draggable.removeEventListener('dragend', function(){})
    draggable.addEventListener('dragstart', () => {
      draggable.classList.add('dragging')
  })
  draggable.addEventListener('dragend', (e) => {
    draggable.classList.remove('dragging')
    const ticketId = e.target.dataset.id
    const ticketStatus = e.target.closest(".ticket-status-column").dataset.status
    TicketApi.updateStatus(ticketId, ticketStatus)
  })
}

function initializeDrag(){
    const draggables = document.querySelectorAll('.draggable')
    const containers = document.querySelectorAll('.ticket-status-column')   

    draggables.forEach(draggable => {
      addDragListener(draggable)
    })
      
    containers.forEach(container => {
        container.addEventListener('dragover', e => {
          e.preventDefault()
          const afterElement = getDragAfterElement(container, e.clientY)
          let draggable = document.querySelector('.dragging')
          if (!draggable) {
            draggable = e.target.closest('.draggable')
          }
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
      const box = child.getBoundingClientRect() // tells you the position of the rect in the viewport of the dom
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

  function toggleBackground(){
    const toggleIcon = document.querySelector('.icon-toggle-background')
    toggleIcon.addEventListener('click', () => {
      document.body.classList.toggle('white')
    })
  }






