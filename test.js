const smartEllipsis = require('./');


it('should cut text at the end of word', () => {
    expect(smartEllipsis('hello world', 9)).toBe('hello...');
});

it('should remove extra . at the end of a sentence', () => {
    expect(smartEllipsis('hello world. what\'s up?', 16)).toBe('hello world...');
});

it('should remove extra , at the end of a sentence', () => {
    expect(smartEllipsis('hello world, what\'s up?', 16)).toBe('hello world...');
});

it('should remove extra \\n at the end of a sentence', () => {
    expect(smartEllipsis('hello world\n what\'s up?', 16)).toBe('hello world...');
});

it('should remove extra \\r\\n at the end of a sentence', () => {
    expect(smartEllipsis('hello world\r\n what\'s up?', 17)).toBe('hello world...');
});

it('should remove extra ? at the end of a sentence', () => {
    expect(smartEllipsis('hello world? what\'s up?', 16)).toBe('hello world...');
});

it('should remove extra ! at the end of a sentence', () => {
    expect(smartEllipsis('hello world! what\'s up?', 16)).toBe('hello world...');
});

it('should make dots customizable', () => {
    expect(smartEllipsis('hello world! what\'s up?', 16, '!!!')).toBe('hello world!!!');
});

it('should cut long text', () => {
    const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultricies porta mi. Nullam at tempus magna, sit amet molestie urna. Curabitur sed dictum sapien. Nullam bibendum convallis hendrerit. Curabitur lobortis porta suscipit. Nullam ut nulla et mi bibendum interdum nec eget est. Sed euismod ex metus, ac tempor magna molestie id.';

    expect(smartEllipsis(text, 120, '...').length).toBeLessThanOrEqual(120);
});