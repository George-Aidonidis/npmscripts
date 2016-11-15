# Node JS Example app and various npm scripts

A simple node js web application that includes various build, watch, testing processes though npm scripts.

#### How is this project structured?

The `client` folder contains the `js` and `scss` to be build right to the `build` folder. This is done also through an npm script (more below).

```
├── client
│   ├── js
│   └── scss
├── public
│   ├── css
│   ├── js
│   └── views
└── test
```

#### Npm scripts

- Lifecycle scripts included in examplejs:
```
  start
    node app.js
  test
    tap test/test.hello.js
  pretest
    npm run lint
```
- Available via `npm run-script`:
```
  lint
    eslint **/*.js *.js
  build:sass
    node-sass ./client/scss/main.scss ./public/css/main.css
  build:js
    browserify ./client/js/app.js | uglifyjs -mc > ./public/js/app.js
  build:clean
    rimraf ./public/css/* && rimraf ./public/js/*
  prebuild
    npm run build:clean
  build
    npm run build:sass && npm run build:js
  watch:lint
    watch 'npm run lint ' .
  watch:test
    nodemon -q -x 'npm test '
  watch:server
    nodemon --ignore client --ignore public app.js
  watch:client
    watchify ./client/js/app.js -o ./public/js/app.js -dv
  watch:browser
    live-reload --port 2001 public/
  watch
    npm run watch:test & npm run watch:server & npm run watch:browser
  version:major
    npm version major
  version:minor
    npm version minor
  version:patch
    npm version patch
  push:origin
    git push --tags origin HEAD:master
```