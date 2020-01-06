/* https://github.com/rickwierenga/AsyncImg */

$(function() {
    $('img[async-src]').each(function() {
            $(this).attr( 'src', $(this).attr('async-src'));
        }
    );
});
