const ticketContainer = document.createElement('div')

class Ticket {

    static all = []

    constructor({id, status, title, description, ticket_type, effort}){
        this.id = id
        this.status = status 
        this.title = title
        this.description = description
        this.ticket_type = ticket_type
        this.effort = effort
        Ticket.all.push(this)
    }

    render(){
        const ticketContainer = document.createElement('div')
        ticketContainer.classList.add('draggable')
        ticketContainer.setAttribute('draggable', 'true')
        ticketContainer.dataset.status = `${this.status}`
        ticketContainer.dataset.id = `${this.id}` //using this to send information back to rails
        ticketContainer.innerHTML = 
        
        `
            <a class="card-div-link" href="#">
                <div class="card card-${formatToClass(this.ticket_type)}" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${this.title}</h5>
                    </div>
                </div>
            </a>
        `

        const statusClass = formatToClass(this.status)
        const statusContainer = document.querySelector(`.${statusClass}`)
        statusContainer.append(ticketContainer)
        const cardBody = ticketContainer.querySelector('.card-body')
        cardBody.addEventListener('click', () => {
            modal.classList.add('open')
            overlay.classList.add('open')
        })

        overlay.addEventListener('click', closeModal)
        closeModalBtn.addEventListener('click', closeModal)

    }




}