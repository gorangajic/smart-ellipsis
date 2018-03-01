# smart-ellipsis
cut text tail but smarter


```js

const smartEllipsis = require('./');


it('should cut text at the end of word', () => {
    expect(smartEllipsis('hello world', 7)).toBe('hello...');
});

it('should remove extra . at the end of a sentence', () => {
    expect(smartEllipsis('hello world. what\'s up?', 12)).toBe('hello world...');
});

it('should remove extra , at the end of a sentence', () => {
    expect(smartEllipsis('hello world, what\'s up?', 12)).toBe('hello world...');
});

it('should remove extra \\n at the end of a sentence', () => {
    expect(smartEllipsis('hello world\n what\'s up?', 12)).toBe('hello world...');
});

it('should remove extra \\r\\n at the end of a sentence', () => {
    expect(smartEllipsis('hello world\r\n what\'s up?', 12)).toBe('hello world...');
});

it('should remove extra ? at the end of a sentence', () => {
    expect(smartEllipsis('hello world? what\'s up?', 12)).toBe('hello world...');
});

it('should remove extra ! at the end of a sentence', () => {
    expect(smartEllipsis('hello world! what\'s up?', 12)).toBe('hello world...');
});

```
