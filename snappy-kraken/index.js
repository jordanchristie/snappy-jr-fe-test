$(document).ready(function() {


    $('#contact-form').submit(e => {
        e.preventDefault();
        $('#modal').addClass('modal-active').slideDown();
    })

    $('#modal-close').click(() => {
        $('#modal').slideUp();
    })
})