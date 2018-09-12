module.exports = function(text, max, dots) {
    var i = 0;
    if (text.length > max) {
        text = text.split(' ').filter(function (word) {
            i += word.length;
            if (i > max) {
                return false;
            }
            return true;
        }).join(' ');
        // remove , \n \r\n . ? ! from the end of the text
        text = text.replace(/(,|\n|\r\n|\.|\?|!)$/, '');
        return text + (typeof dots === 'undefined' ? '...' : dots);
    }
    return text;
};
