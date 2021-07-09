class Comment {

    static all = []

    constructor({ id, content, ticket }) {
        this.id = id
        this.content = content
        this.ticketId = ticket.id
        Comment.all.push(this)
    }

    render() {
        if (document.querySelector(`#comment-${this.id}`)) {
            return
        }
        const commentsContainer = document.querySelector('.comments-container')
        const ticketDiv = document.getElementById(`ticket-${this.ticketId}`)
        const div = document.createElement('div')

        div.id = `comment-${this.id}`
        div.classList.add('comment')
        div.innerHTML = 
        `
            <li class="comment-info">${this.content}</li>
            <div class="modal-buttons">
                <input type="submit" value="Edit" class="btn btn-create-ticket-button" id="close-modal-btn" />
                <input type="submit" value="Delete" class="btn btn-create-ticket-button" id="delete-modal-btn" />
            </div>
            <div class="modal-buttons add-comment-div">
                <textarea class="form-control" id="content" placeholder="add comment ..." rows="5"></textarea>

                <input type="submit" value="Add Comment" class="btn btn-create-ticket-button add-comment-button" id="add-comment-modal-btn" />
            </div>

        `
        // const deleteButton = document.createElement('button')
        // deleteButton.classList.add('delete-comment-button')
        // deleteButton.dataset.commentId = this.id
        // deleteButton.innerText = "Delete Comment"

        // const editButton = document.createElement('button')
        // editButton.classList.add('edit-comment-button')
        // editButton.dataset.commentId = this.id
        // editButton.innerText = "Edit Comment"

        // div.appendChild(editButton)
        // div.appendChild(deleteButton)
        commentsContainer.appendChild(div)

        deleteButton.addEventListener('click', CommentApi.deleteComment)
        editButton.addEventListener('click', Comment.editComment)
    }





}