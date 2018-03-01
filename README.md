# smart-ellipsis

> cut text and add ellipsis/tail without quirks

[![Build Status](https://semaphoreci.com/api/v1/gorangajic/smart-ellipsis/branches/master/badge.svg)](https://semaphoreci.com/gorangajic/smart-ellipsis)

When using something like `substr` and adding `...` you get all kind of quirks and this module handle that quirks


### install

```
npm install smart-ellipsis
```

### usage

```js
const smartEllipsis = require('smart-ellipsis');

smartEllipsis(text, maxLength);
```

### examples

#### don't cut word in half
```js
smartEllipsis('hello world', 7) // 'hello...'
```

#### removes extra . and space
```js
smartEllipsis('hello world. what\'s up?', 12) // 'hello word...'
```


#### removes extra ,
```js
smartEllipsis('hello world, what\'s up?', 11) // 'hello word...'
```

#### removes extra \n
```js
smartEllipsis('hello world\n what\'s up?', 11) // 'hello word...'
```

#### removes extra \r\n
```js
smartEllipsis('hello world\r\n what\'s up?', 11) // 'hello word...'
```

#### removes extra ?
```js
smartEllipsis('hello world? what\'s up?', 11) // 'hello word...'
```

#### removes extra !
```js
smartEllipsis('hello world! what\'s up?', 11) // 'hello word...'
```
