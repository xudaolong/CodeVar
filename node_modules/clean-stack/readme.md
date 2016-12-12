# clean-stack [![Build Status](https://travis-ci.org/sindresorhus/clean-stack.svg?branch=master)](https://travis-ci.org/sindresorhus/clean-stack)

> Clean up error stack traces

Removes the mostly unhelpful internal Node.js entries.


## Install

```
$ npm install --save clean-stack
```


## Usage

```js
const cleanStack = require('clean-stack');
const error = new Error('Missing unicorn');

console.log(error.stack);
/*
Error: Missing unicorn
    at Object.<anonymous> (/Users/sindresorhus/dev/clean-stack/unicorn.js:2:15)
    at Module._compile (module.js:409:26)
    at Object.Module._extensions..js (module.js:416:10)
    at Module.load (module.js:343:32)
    at Function.Module._load (module.js:300:12)
    at Function.Module.runMain (module.js:441:10)
    at startup (node.js:139:18)
*/

console.log(cleanStack(error.stack));
/*
Error: Missing unicorn
    at Object.<anonymous> (/Users/sindresorhus/dev/clean-stack/unicorn.js:2:15)
*/
```


## Related

Check out [stack-utils](https://github.com/tapjs/stack-utils) if you want something more.


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
