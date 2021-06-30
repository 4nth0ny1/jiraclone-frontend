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

    //create a class function to update the status when moving 

    // - columns, six columns: unscheduled, ready for development, in development, ready for review, ready for deploy, completed


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

    

   

}
