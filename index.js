module.exports = function(text, max) {
    var i = 0;
    if (text.length > max) {
        text = text.split(' ').filter((word) => {
            i += word.length;
            if (i > max) {
                return false;
            }
            return true;
        }).join(' ');
        // remove , \n \r\n . ? ! from the end of the text
        text = text.replace(/(,|\n|\r\n|\.|\?|!)$/, '');
        return text + '...';
    }
    return text;
};
