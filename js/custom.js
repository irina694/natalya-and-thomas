
jQuery(document).ready(function($) {
    $('#more-pics').click(function () {
        var n = Math.floor((Math.random() * 15) + 1);
        var image = 'images/shh/' + n.toString() + '.jpg';
        $('#secret-img').attr('src', image);
    });
});

