# Using in project

```
import {
  //
  BearDiv,
} from "@SillyScribe95/bearui-web";
import {
  //
  logs,
} from "@SillyScribe95/bedia-shared";

```

# Local Install

run the following command:
```
npm i --save ../bareui-web
npm i --save ../bedia-shared
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

<p align="center">
  <img width="160" height="100" src="http://www.fillmurray.com/460/300">
<br/><b>
Bear UI <b/>
<br/>
Build at the speed of thought.
</p>

You're starting a new project. You're sick and tired of having closing tags mess get in the way of your code, or declaring the same rules for forms over and over again.
It's not exactly best practice, but you don't need something custom or aaaaa right now. 
Isn't there something you could plugin for now and have all of the main cases taken care of?

Bear UI is the answer. We build aaaa

Here just some of the hundreds of custom components we've written:

**The one div to rule them all.** 
```
<BearDiv obj="Hello! I'm a div." fontSize="40px"/>
```

**Write validation forms in seconds, not hours.**
```
	<BearForm
		onSubmit={submitFunc}
		listvar=["name", "username", "password"] 
		dictvar={{
			username: {
					required: true,
					validationRegex: 
					errorMessage: "Make sure your username doesn't have spaces!"
				}
		}}
	/>
```

**Lists with all the use cases covered.**

```
	<BearList
		listvar={["Apples", "Bananas", "Oranges"]}
		renderItem={(fruit) => `I love ${fruit}`}
		horiz={true}
	/>
```

**Write complex UI components**
```
	<BearIconText
		iconvar="signup"
		textvar="Sign Up to Bear"
		onClick={signupFunc} 
	/>
```
**Easily balances elements inline with each other (seriously! we mean it!)**
```
	<BearFloat
		leftobj="Left Item"
		centerobj="Center Item"
		rightobj="Right Item"
	/>
```
**Keep up with the kids.**
```
	<BearEmoji
		listvar="happy, sad, funny"
		multiSelect={true}
	/>
```
And a bunch more components we can't wait for you to use.

