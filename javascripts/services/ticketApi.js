class TicketApi {

    static fetchAll(){
        fetch('http://127.0.0.1:3000/tickets')
        .then(res => res.json())
        .then(data => data.forEach(ticketJson => {
            const ticket = new Ticket(ticketJson)
            ticket.render()
        }))
        .then(_ => {
            initializeDrag()
        })
    }

    static updateStatus(ticketId, ticketStatus){
        fetch(`http://127.0.0.1:3000/tickets/${ticketId}`, {
            headers: {
                'Content-type': 'application/json', 
                'Accept': 'application/json'
            }, 
            method: 'PATCH', 
            body: JSON.stringify({
                ticket: {
                    status: ticketStatus
                }
            })
        })
    }

    static createTicket(e){
        const data = {
            ticket: {
                title: e.target.querySelector('#title').value, 
                description: e.target.querySelector('#description').value, 
                status: e.target.querySelector('#status').value,
                ticket_type:  e.target.querySelector('input[name="ticket_type"]').value,
                effort: e.target.querySelector('#effort').value
            }
        }
        fetch('http://127.0.0.1:3000/tickets', {
            headers: {
                'Content-type': 'application/json', 
                'Accept': 'application/json'
            }, 
            method: 'POST', 
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            const ticket = new Ticket(data)
            ticket.render()
        })
    }

    

   

}
