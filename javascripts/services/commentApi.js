class CommentApi {

    static fetchAll(){
        const ticketId = document.querySelector('#edit-ticket-form').dataset.ticketId
        fetch(`http://127.0.0.1:3000/tickets/${ticketId}/comments`)
        .then(res => res.json())
        .then(data => data.forEach(commentJson => {
            const comment = new Comment(commentJson)
            comment.render()
            Comment.renderNewCommentForm()
        }))
    }

    static createComment(e) {
        e.preventDefault()
        const form = e.target
        const data = {
            comment: {
                content: form.querySelector('#content').value,
                ticket_id: form.querySelector('#comment-ticket-id').value
            }
        }
        form.reset()
        fetch('http://127.0.0.1:3000/comments', {
            headers: {
                'Content-type': 'application/json', 
                'Accept': 'application/json'
            }, 
            method: 'POST', 
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            const comment = new Comment(data)
            comment.render()
        })
    }

    

    static deleteComment(e){
        const commentId = e.target.dataset.commentId

        document.querySelector(`#comment-${commentId}`).remove()

        fetch(`http://127.0.0.1:3000/comments/${commentId}`, {
            method: "DELETE"
        })
     
    }





}