# alfred-notifier [![Build Status](https://travis-ci.org/SamVerschueren/alfred-notifier.svg?branch=master)](https://travis-ci.org/SamVerschueren/alfred-notifier)

> Update notifications for your [Alfred](https://www.alfredapp.com/) workflow

<img src="screenshot.png">


## Install

```
$ npm install --save alfred-notifier
```


## Usage

### Simple example

```js
const alfredNotifier = require('alfred-notifier');

alfredNotifier();
```

### Comprehensive example

```js
const alfy = require('alfy');
const alfredNotifier = require('alfred-notifier');

// Checks for available update and updates the `info.plist`
alfredNotifier();

alfy.output([
	{title: '🦄'},
	{title: '🌈'}
]);
```


## API

### alfredNotifier()

Checks if there is an available update. If an update is available, it will add a message as subtext of your workflow.


## License

MIT © [Sam Verschueren](https://github.com/SamVerschueren)
