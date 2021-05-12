# Installing

Add the following in a .npmrc file:
```
//npm.pkg.github.com/:_authToken=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
registry=https://npm.pkg.github.com/SillyScribe95
```

Then run the following command:
```
npm install git+https://github.com/SillyScribe95/bearui-web.git#master
```

Add this to your "scripts" section in package.json to get the latest version:
```
"update:packages": "npm install git+https://github.com/SillyScribe95/bearui-web#master"
```

