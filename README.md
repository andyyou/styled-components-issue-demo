### Preface:
This is an example I try to simplify entire related apps and mimic real problem.
Originally I am developing a Chrome extension that made of `React`, `styled-components`.
It's a very simple extension that injects the `content script` to some pages.
Occasionally, I found out my extension broken style of some site such as React demo from [Glitch](https://glitch.com), `codesandbox` and my local development site `localhost:3000`.

Back to topic anyway, I found out if a site has `styled-components` and build by webpack with `development` mode.
The additional `<script>` or `content script` externally will broke stylesheet of dynamic components taht load before. It means the bundle script you load will miss some style which `styled-components` not rendered for the first time will miss it's style such as component show by condition `{isActive ? <A /> : <B />}`. In this situation, if `isActive` is `true` then `<B />`'s style will miss.

### Description:
In this example, `app.js` represent the role of a site, and `extension.js` represents an extension from the third party. Both using `styled-components`.

You can use `npm start` to run the demo. At first it's work fine, then when you add extension.js no matter by `<script src="extension.js"></script>` or `document.body.appendChild()` in `componentDidMount` of `app.js`. It will broke `B`'s style.

NOTE:

* It must build in `development` mode, `production` mode work fine.
* The component which miss style must show after first rendering
* Both using `styled-components`, and the final script will break component live the previous script

#### No extension

![](https://i.gyazo.com/2fb2bd718af25e242eb3d55f5e56d878.gif)

#### After add extension

![](https://i.gyazo.com/330a2050246aa5e9327d84886147c655.gif)

I am not sure it's kind of issues that I searched during try to figure it out:

* [Two instances of styled-components conflict issue](https://github.com/styled-components/styled-components/issues/1032)
* [Document techniques for avoiding conflicts when embedded ](https://github.com/styled-components/styled-components-website/pull/258)

Hope someone can help understand why it happened and provide a solution. Thanks

### Usage

```bash
$ npm start

# Edit `src/app.js` or `public/index.html` to show problem
```

### Resource

* [Issue](https://github.com/styled-components/styled-components/issues/2562)
