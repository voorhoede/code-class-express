# Code Class Express

## Getting started

```sh
# clone repository
$ git clone git@github.com:voorhoede/code-class-express.git

# go inside
$ cd code-class-express

# install dependencies
$ npm install

# start server http://localhost:9777
$ npm start
```

## Exercises

1. [Use custom middelware](exercises/middleware.js)
2. [Read request values](exercises/request.js)
3. [Find a route](exercises/routing.js)
4. [Respond in kind](exercises/respond.js)

## Solutions

See [Solutions branch](https://github.com/voorhoede/code-class-express/tree/solutions)

## Slides

[Code class Express presentation (PDF)](https://github.com/jbmoelker/presentations/blob/master/code-class-express-2017-08.pdf)

## What's next?

Done? You might like these code classes next:

* [Code Class Rest](https://github.com/voorhoede/code-class-rest)
* [Code Class `Fetch`](https://github.com/voorhoede/code-class-fetch)
* [Code Class Koa](https://github.com/voorhoede/code-class-koa)

## Tips

### Debugging with Node.js inspector

Node.js's built-in inspector (`node --inspect`) works great for [debugging Node.js with Chrome DevTools](https://medium.com/@paul_irish/debugging-node-js-nightlies-with-chrome-devtools-7c4a1b95ae27). Nodemon however restarts our Node.js server on every code change creating a new URL for debugging. To have your DevTools automatically reconnect with your new app you can use the [NIM (Node Inspector Manager) Chrome extension](https://chrome.google.com/webstore/detail/nodejs-v8-inspector-manag/gnhhdgbaldcilmgcpfddgdbkhjohddkj).