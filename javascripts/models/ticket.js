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
        ticketContainer.id = `ticket-${this.id}`
        ticketContainer.dataset.status = `${this.status}`
        ticketContainer.dataset.id = `${this.id}` //using this to send information back to rails
        ticketContainer.innerHTML = 
        
        `
            <a class="card-div-link" href="#">
                <div class="card card-${formatToClass(this.ticket_type)}" data-ticket-id="${this.id}" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${this.title}</h5>
                    </div>
                </div>
            </a>
        `

        const statusClass = formatToClass(this.status)
        const statusContainer = document.querySelector(`.${statusClass}`)
        statusContainer.append(ticketContainer)
        const card = ticketContainer.querySelector('.card')
        card.addEventListener('click', Ticket.addEditTicketForm)

        // overlay.addEventListener('click', closeModal)
        // closeModalBtn.addEventListener('click', closeModal)

    }

    static addEditTicketForm(e){
        modal.classList.add('open')
        overlay.classList.add('open')
        overlay.addEventListener('click', closeModal)

        // const modal = document.querySelector('#modal')
        const ticketId = e.target.closest('.card').dataset.ticketId

        const ticket = Ticket.findById(ticketId) 

        modal.innerHTML = 
        `
        <div class="modal-container">
            <div class="edit-form-container">

                <h2 class="edit-title">Edit a Ticket</h2>
                <button class="expand-modal">View Comments</button>
                <br>

                <form id="edit-ticket-form" data-ticket-id="${ticket.id}">
                    <div class="form-group">
                        <input class="form-control" value="${ticket.title}" id="title" placeholder="Title" rows="5"></input>
                    </div>

                    <br>
                        

                    <div class="form-group">
                        <textarea class="form-control" id="description" placeholder="Description" rows="5">${ticket.description}</textarea>
                    </div>
                
                    <br>

                    <h5>Status</h5>
                    <select class="form-select" aria-label="Default select example" id="status">
                        <option selected>Open this select menu</option>
                        <option value="unscheduled" ${ticket.status === 'unscheduled' ? 'selected' : ''}>Unscheduled</option>
                        <option value="ready for development" ${ticket.status === 'ready for development' ? 'selected' : ''}>Ready for Development</option>
                        <option value="in development" ${ticket.status === 'in development' ? 'selected' : ''}>In Development</option>
                        <option value="ready for review" ${ticket.status === 'ready for review' ? 'selected' : ''}>Ready for Review</option>
                        <option value="ready for deployment" ${ticket.status === 'ready for deployment' ? 'selected' : ''}>Ready for Deployment</option>
                        <option value="completed" ${ticket.status === 'completed' ? 'selected' : ''}>Completed</option>
                    </select>

                    <br>
                    
                    <h5>Ticket Type</h5>

                    <div class="radio-container">
                        <div class="form-check">
                            <input class="form-check-input" ${ticket.ticket_type === 'feature' ? 'checked' : ''} value="feature" type="radio" name="ticket_type" id="feature">
                            <label class="form-check-label" for="feature">
                            Feature
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" ${ticket.ticket_type === 'bug' ? 'checked' : ''} value="bug" type="radio" name="ticket_type" id="bug">
                            <label class="form-check-label" for="bug">
                            Bug
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" ${ticket.ticket_type === 'chore' ? 'checked' : ''} value="chore" type="radio" name="ticket_type" id="chore">
                            <label class="form-check-label" for="chore">
                            Chore
                            </label>
                        </div>
                    </div>
                    
                    <br>
                    
                    <h5>Effort</h5>
                    <select class="form-select" id="effort" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1" ${ticket.effort === 1 ? 'selected' : ''}>1</option>
                        <option value="2" ${ticket.effort === 2 ? 'selected' : ''}>2</option>
                        <option value="3" ${ticket.effort === 3 ? 'selected' : ''}>3</option>
                        <option value="5" ${ticket.effort === 5 ? 'selected' : ''}>5</option>
                        <option value="8" ${ticket.effort === 8 ? 'selected' : ''}>8</option>
                        <option value="13" ${ticket.effort === 13 ? 'selected' : ''}>13</option>
                    </select>
                    
                    <br>
                    <div class="modal-buttons">
                        <input type="submit" value="Save" class="btn btn-create-ticket-button" id="close-modal-btn" />
                        <input type="submit" value="Delete" class="btn btn-create-ticket-button" id="delete-modal-btn" />
                    </div>
                </form>
                
            </div>
            <div class="comments-container">
                
            </div>
        </div>
        `
        document.querySelector('.expand-modal').addEventListener('click', handleModal)
        document.querySelector('#edit-ticket-form').addEventListener('submit', TicketApi.updateTicket)
        document.querySelector('#edit-ticket-form').addEventListener('submit', TicketApi.deleteTicket)
        
    }

    

    static addNewTicketForm(){
        const modal = document.querySelector('#modal')
        modal.innerHTML = 
        `
        <h2>Create a Ticket</h2>

        <form id="new-ticket-form">
            <div class="form-group">
                <input class="form-control" id="title" placeholder="Title" rows="5"></input>
            </div>

            <br>
                

            <div class="form-group">
                <textarea class="form-control" id="description" placeholder="Description" rows="5"></textarea>
            </div>
        
            <br>

            <h5>Status</h5>
            <select class="form-select" aria-label="Default select example" id="status">
                <option selected>Open this select menu</option>
                <option value="unscheduled">Unscheduled</option>
                <option value="ready for development">Ready for Development</option>
                <option value="in development">In Development</option>
                <option value="ready for review">Ready for Review</option>
                <option value="ready for deployment">Ready for Deployment</option>
                <option value="completed">Completed</option>
            </select>

            <br>
            
            <h5>Ticket Type</h5>

            <div class="radio-container">
                <div class="form-check">
                    <input class="form-check-input" value="feature" type="radio" name="ticket_type" id="feature">
                    <label class="form-check-label" for="feature">
                    Feature
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" value="bug" type="radio" name="ticket_type" id="bug">
                    <label class="form-check-label" for="bug">
                    Bug
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" value="chore" type="radio" name="ticket_type" id="chore">
                    <label class="form-check-label" for="chore">
                    Chore
                    </label>
                </div>
            </div>
            
            <br>
            
            <h5>Effort</h5>
            <select class="form-select" id="effort" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="8">8</option>
                <option value="13">13</option>
            </select>
            
            <br>
            <div class="modal-buttons">
                <input type="submit" value="Save" class="btn btn-create-ticket-button" id="close-modal-btn" />
            </div>
        </form>

        `

        document.querySelector('#new-ticket-form').addEventListener('submit', TicketApi.createTicket)
    }

    static findById(id){
        return Ticket.all.find(ticket => ticket.id === parseInt(id))
    }

    refresh({id, status, title, description, ticket_type, effort}){   // setter
            this.id = id
            this.status = status 
            this.title = title
            this.description = description
            this.ticket_type = ticket_type
            this.effort = effort
    }




}