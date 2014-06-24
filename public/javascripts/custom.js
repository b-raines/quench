$(function() {
    var about_slidr = slidr.create('slidr-img', {
        controls: 'none',
        keyboard: 'true',
        pause: 'true'
    }).auto();
    about_slidr.add('h', ['one', 'two', 'three', 'four', 'five', 'one']);
});
