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
        ticketContainer.innerHTML = `

            <a class="card-div-link" href="#">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${this.title}</h5>
                    </div>
                </div>
            </a>

        `

        const statusClass = this.status.toLowerCase().split(' ').join('-')
        const statusContainer = document.querySelector(`.${statusClass}`)
        statusContainer.append(ticketContainer)
    }



}