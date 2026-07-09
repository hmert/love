# love

A library to **overcomplicate** `love`.

[![CI](https://github.com/hmert/love/actions/workflows/publish.yml/badge.svg)](https://github.com/hmert/love/actions/workflows/publish.yml)

### Usage
##### Require the module
```javascript
var love = require('love');
```

##### In the browser
```html
<script type="text/javascript" src="./love"></script>
```

##### Basic love
```javascript
love();
```


### Development
##### The code
```
./love.js
```

##### Tests
```
npm test
```

Continuous integration runs on GitHub Actions against Node.js 20, 22, and 24.

Publishing to npm runs from GitHub Actions when you push a tag matching `v*`. Configure the `NPM_TOKEN` repository secret before creating a release tag.

### License
LOVE
