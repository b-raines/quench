$(function() {
    var about_slidr = slidr.create('slidr-img', {
        controls: 'none',
        touch: 'true',
        keyboard: 'true',
        pause: 'true'
    }).auto();
    about_slidr.add('h', ['one', 'two', 'three', 'four', 'one']);
});
