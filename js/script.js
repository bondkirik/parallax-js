
$(document).on('click', '.parallax_guardian', function () {
    alert('gg');
});


$(document).ready(function () {
    $('.parallax__list .parallax_guardian').click(function (e) {
       e.preventDefault();
       console.log('gg');
    });
    $('.parallax__list>li').addClass('layer');
    $('.parallax__list').parallax();
    $('.wrapper').addClass('active');

});

