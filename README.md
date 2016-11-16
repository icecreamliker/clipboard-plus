# clipboard-plus
> Copy texts to clipboard via JavaScript (ES6)

Installation
---

```
  $ npm install clipboard-plus
```

Usage
---

Add the paths to configuration:

```javascript
  const copy = require('clipboard-copy');
  let node = document.querySelector('#content');
  copy(node);
```
or
```javascript
  const copy = require('clipboard-copy');
  copy('this is the copied content');
```

License
---

clipboard-plus is available under the terms of [the MIT license](LICENSE).
