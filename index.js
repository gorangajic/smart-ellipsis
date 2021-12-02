module.exports = function(text, max, _dots) {
    if (text.length <= max) {
        return text;
    }
    var dots = _dots ? _dots : '...';
    var i = dots.length;
    text = text.split(' ').filter(function (word) {
        i += word.length;
        if (i > max) {
            return false;
        }
        i += 1; // add a space sharacter after a word
        return true;
    }).join(' ').replace(/(,|\n|\r\n|\.|\?|!)$/, '');

    return text + dots;
};
