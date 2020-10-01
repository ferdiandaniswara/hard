$(document).ready(function(){
    $('.write-new').on('submit',function(event){
        event.preventDefault()
        const commentValue = $(this).children('.reply-form').val()
        const commenttempt =`
        <li class="comment author-comment">
                <a class="avatar" href="#">
                   
                <div class="info">
                <a href="#">Bill Gates</a>
                <span>Now</span>
            </div>
                </a>
                <p>${commentValue}</p>
			</li>

        `
        $(this).before(commenttempt)
    })
})