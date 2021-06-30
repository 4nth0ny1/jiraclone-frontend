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

        // overlay.addEventListener('click', closeModal)
        // closeModalBtn.addEventListener('click', closeModal)

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




}