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


    static alterCardStatusOnDrag() {
        const draggable = document.querySelectorAll('.draggable')
        const parentOfDraggable = draggable.parentElement
        console.log(parentOfDraggable)
        if (parentOfDraggable.dataset.status === draggable.dataset.status){
            console.log('yes')
        } else {
            console.log('no')
        }
    }

    

   

}
