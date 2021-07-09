class CommentApi {

    static fetchAll(){
        const ticketId = document.querySelector('#edit-ticket-form').dataset.ticketId
        fetch(`http://127.0.0.1:3000/tickets/${ticketId}/comments`)
        .then(res => res.json())
        .then(data => data.forEach(commentJson => {
            const comment = new Comment(commentJson)
            comment.render()
        }))
    }





}