# Node JS Example app and various npm scripts

A simple node js web application that includes various build, watch, testing processes though npm scripts.

## How is this project structured?

The `client` folder contains the `js` and `scss` to be build right to the `build` folder. This is done also through an npm script (more [below](#scripts)).
The `scripts` folder is supposed to contain any scripts to be used from `package.json`.

```
├── client
│   ├── js
│   └── scss
├── public
│   ├── css
│   ├── js
│   └── views
├── scripts
└── test
```

## <a name="scripts"></a> Npm scripts

- **Lifecycle scripts via `npm {script}`:**

### start
```
  node app.js
```
### test
```
  tap test/test.hello.js
```
### pretest
```
  npm run lint
```
- **Available via `npm run {script}`:**

### lint
```
  eslint **/*.js *.js
```
### build:sass
```
  node-sass ./client/scss/main.scss ./public/css/main.css
```
### build:js
```
  browserify ./client/js/app.js | uglifyjs -mc > ./public/js/app.js
```
### build:clean
```
  rimraf ./public/css/* && rimraf ./public/js/*
```
### prebuild
```
  npm run build:clean
```
### build
```
  npm run build:sass && npm run build:js
```
### watch:lint
```
  watch 'npm run lint ' .
```
### watch:test
```
  nodemon -q -x 'npm test '
```
### watch:server
```
  nodemon --ignore client --ignore public app.js
```
### watch:server:config
```
  nodemon --ignore $npm_package_config_ignoreClient --ignore $npm_package_config_ignorePublic app.js
```
### watch:client
```
  watchify ./client/js/app.js -o ./public/js/app.js -dv
```
### watch:browser
```
  live-reload --port 2001 public/
```
### watch
```
  npm run watch:test & npm run watch:server & npm run watch:browser
```
### version:major
```
  npm version major
```
### version:minor
```
  npm version minor
```
### version:patch
```
  npm version patch
```
### prepush:origin
```
  echo 'Pushing code to git (master branch)'
```
### push:origin
```
  git push --tags origin HEAD:master
```
### deploy:prod
```
  npm test -s && npm run build -s  && npm run version:patch && npm run push:origin
```
### deploy:prod:script
```
  bash ./scripts/deploy.sh
```