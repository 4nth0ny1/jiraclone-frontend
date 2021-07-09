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
        const commentsOnly = document.querySelector('.comments-only')
        // const ticketDiv = document.getElementById(`ticket-${this.ticketId}`)
        const div = document.createElement('div')

        div.id = `comment-${this.id}`
        div.classList.add('comment')
        div.innerHTML = 
        `
            <li class="comment-info">${this.content}</li>
            <div class="modal-buttons">
                <input type="submit" value="Edit" class="btn btn-create-comment-button" id="close-modal-btn" />
                <input type="submit" value="Delete" class="btn btn-create-comment-button" id="delete-modal-btn" />
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
        commentsOnly.appendChild(div)

        
        // deleteButton.addEventListener('click', CommentApi.deleteComment)
        // editButton.addEventListener('click', Comment.editComment)
    }

    static renderNewCommentForm(){
        if (document.querySelector('#new-comment-form')){
            return
        }
        const div = document.createElement('div')
        const ticketId = document.querySelector('#edit-ticket-form').dataset.ticketId
        const commentsContainer = document.querySelector('.comments-container')

        div.classList.add('modal-buttons')
        div.classList.add('add-comment-div')
        div.innerHTML = 
        `
            <form id="new-comment-form">
                <textarea class="form-control" id="content" placeholder="add comment ..." rows="3"></textarea>

                <input type="hidden" value="${ticketId}" id="comment-ticket-id" />
                <input type="submit" value="Add Comment" class="btn btn-create-comment-button add-comment-button" id="add-comment-modal-btn" />
                
            </form>

        `

        commentsContainer.append(div)
        
        document.querySelector('#new-comment-form').addEventListener('submit', CommentApi.createComment)

    }



}

