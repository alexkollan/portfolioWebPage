$('#homebtn, #cvbtn, #portfoliobtn, #contactbtn').on('click', function(event) {

    event.preventDefault();
    var sectionID = $(this).attr("data");
    var btn = $(this).attr("id");
    scrollToID('#' + sectionID, 1000, btn);

    console.log(btn);
});


function scrollToID(id, speed, clickedbtn) {
    var offSet = 50;
    var targetOffset = $(id).offset().top - offSet;
    var mainNav = $('#navbtns');
    $('html,body').animate({
        scrollTop: targetOffset
    }, speed);
    var btn = "#" + clickedbtn;
    $('ul').children().removeClass('active');
    $(btn).parent().addClass('active');
}
