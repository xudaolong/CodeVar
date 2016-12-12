# cache-conf [![Build Status](https://travis-ci.org/SamVerschueren/cache-conf.svg?branch=master)](https://travis-ci.org/SamVerschueren/cache-conf)

> Simple cache config handling for your app or module

If you don't need caching, you should use [conf](https://github.com/sindresorhus/conf) instead. This module extends that module and
abstracts away the caching mechanism.


## Install

```
$ npm install --save cache-conf
```


## Usage

```js
const delay = require('delay');
const CacheConf = require('cache-conf');
const config = new CacheConf();

config.set('unicorn', '🦄', {maxAge: 5000});
console.log(config.get('unicorn'));
//=> '🦄'

// Wait 5 seconds
await delay(5000);

console.log(config.get('unicorn'));
//=> undefined
```


## API

### CacheConf([options])

Returns a new instance.

#### options

Any of the [conf options](https://github.com/sindresorhus/conf#options).

### Instance

An extended [conf](https://github.com/sindresorhus/conf#instance) instance.

#### set(key, value, [options])

Set an item.

##### options

###### maxAge

Type: `number`

Number of milliseconds the cached value is valid.

#### isExpired(key)

Boolean indicating if the cached data is expired.


## Related

- [conf](https://github.com/sindresorhus/conf) - Simple config handling for your app or module


## License

MIT © [Sam Verschueren](https://github.com/SamVerschueren)
