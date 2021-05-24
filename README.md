# Local Install

run the following command:
```
npm i --save ../bareui-web
```


# Github Install

Add the following in a .npmrc file:
```
//npm.pkg.github.com/:_authToken=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
registry=https://npm.pkg.github.com/SillyScribe95
```

Then run the following command:
```
npm install git+https://github.com/SillyScribe95/bearui-web.git#master
```

The library should appear in the dependencies of your package.json;
```
"@SillyScribe95/bearui-web": "git+https://github.com/SillyScribe95/bearui-web.git#master",
```

Add this to your "scripts" section in package.json to get the latest version:
```
"update:packages": "npm install git+https://github.com/SillyScribe95/bearui-web#master"
```

link your modules this way:
```
SHARED LIBRARY: 
npm link node_modules/react && npm link node_modules/react-dom
YOUR LIBRARY:
npm link react && npm link react-dom 
```
