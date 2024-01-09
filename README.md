# vue-project-cli

### 介绍

开箱即用的`Vue3项目`快速成型工具，提供了一系列命令和工具取解决项目开发上的问题。

### 目录

```
    ├── README.md
    ├── README.zh-CN.md
    ├── cjs
    │   ├── babel.config.cjs
    │   ├── babel.sfc.transform.cjs
    │   ├── jest.config.cjs
    │   ├── jest.media.mock.cjs
    │   └── jest.style.mock.cjs
    ├── client.d.ts
    ├── client.js
    ├── lib                 ------编译后产物
    │   └── node
    │       ├── bin.js
    │       └── index.js
    ├── package.json
    ├── preset.cjs
    ├── site                ------文档站点
    │   ├── components
    │   │   ├── button
    │   │   │   ├── Button.vue
    │   │   │   ├── button.less
    │   │   │   ├── index.ts
    │   │   │   └── props.ts
    │   │   ├── cell
    │   │   │   ├── Cell.vue
    │   │   │   ├── cell.less
    │   │   │   ├── index.ts
    │   │   │   └── props.ts
    │   │   ├── code-example
    │   │   │   ├── CodeExample.vue
    │   │   │   ├── codeExample.less
    │   │   │   └── index.ts
    │   │   ├── context
    │   │   │   ├── index.ts
    │   │   │   ├── lock.ts
    │   │   │   └── zIndex.ts
    │   │   ├── icon
    │   │   │   ├── Icon.vue
    │   │   │   ├── icon.less
    │   │   │   ├── index.ts
    │   │   │   └── props.ts
    │   │   ├── loading
    │   │   │   ├── Loading.vue
    │   │   │   ├── index.ts
    │   │   │   ├── loading.less
    │   │   │   └── props.ts
    │   │   ├── loading-bar
    │   │   │   ├── LoadingBar.tsx
    │   │   │   ├── index.ts
    │   │   │   ├── loadingBar.less
    │   │   │   └── props.ts
    │   │   ├── popup
    │   │   │   ├── Popup.tsx
    │   │   │   ├── index.ts
    │   │   │   ├── popup.less
    │   │   │   └── props.ts
    │   │   ├── ripple
    │   │   │   ├── index.ts
    │   │   │   └── ripple.less
    │   │   ├── snackbar
    │   │   │   ├── Snackbar.vue
    │   │   │   ├── core.vue
    │   │   │   ├── index.tsx
    │   │   │   ├── props.ts
    │   │   │   └── snackbar.less
    │   │   ├── styles
    │   │   │   ├── common.less
    │   │   │   ├── elevation.less
    │   │   │   └── var.less
    │   │   └── utils
    │   │       ├── components.ts
    │   │       └── elements.ts
    │   ├── index.html
    │   ├── mobile
    │   │   ├── App.vue
    │   │   ├── components
    │   │   │   ├── AppHome.vue
    │   │   │   └── app-bar
    │   │   │       ├── AppBar.vue
    │   │   │       ├── appBar.less
    │   │   │       ├── index.ts
    │   │   │       └── props.ts
    │   │   └── main.ts
    │   ├── mobile.html
    │   ├── module.d.ts
    │   ├── pc
    │   │   ├── App.vue
    │   │   ├── Layout.vue
    │   │   ├── components
    │   │   │   ├── AnimationBox.vue
    │   │   │   ├── AppHeader.vue
    │   │   │   ├── AppMobile.vue
    │   │   │   ├── AppSidebar.vue
    │   │   │   └── LogoAnimation.vue
    │   │   ├── floating.ts
    │   │   ├── main.ts
    │   │   └── pages
    │   │       └── index
    │   │           ├── index.less
    │   │           ├── index.vue
    │   │           └── locale
    │   │               ├── en-US.ts
    │   │               └── zh-CN.ts
    │   ├── tsconfig.json
    │   └── utils.ts
    ├── src                     -------源码
    │   ├── client
    │   │   ├── appType.ts
    │   │   └── index.ts
    │   ├── module.d.ts
    │   └── node
    │       ├── bin.ts
    │       ├── commands        -------命令相关
    │       │   ├── build.ts
    │       │   ├── changelog.ts
    │       │   ├── checklist.ts
    │       │   ├── commitLint.ts
    │       │   ├── compile.ts
    │       │   ├── create.ts
    │       │   ├── dev.ts
    │       │   ├── extension.ts
    │       │   ├── gen.ts
    │       │   ├── icons.ts
    │       │   ├── jest.ts
    │       │   ├── lint.ts
    │       │   ├── preview.ts
    │       │   ├── release.ts
    │       │   └── vite.ts
    │       ├── compiler        -------编译相关
    │       │   ├── compileModule.ts
    │       │   ├── compileSFC.ts
    │       │   ├── compileScript.ts
    │       │   ├── compileSiteEntry.ts
    │       │   ├── compileStyle.ts
    │       │   ├── compileTemplateHighlight.ts
    │       │   └── compileTypes.ts
    │       ├── config          -------配置相关
    │       │   ├── varlet.config.ts
    │       │   ├── varlet.default.config.ts
    │       │   └── vite.config.ts
    │       ├── index.ts
    │       └── shared          -------utils方法
    │           ├── constant.ts
    │           ├── fsUtils.ts
    │           └── logger.ts
    ├── template                -------模板相关
    │   ├── create
    │   │   ├── [ComponentName].tsx.ejs
    │   │   ├── [ComponentName].vue.ejs
    │   │   ├── [componentName].less.ejs
    │   │   ├── __tests__
    │   │   │   └── index.spec.js.ejs
    │   │   ├── docs
    │   │   │   ├── en-US.md
    │   │   │   └── zh-CN.md
    │   │   ├── example
    │   │   │   ├── index.vue.ejs
    │   │   │   └── locale
    │   │   │       ├── en-US.ts
    │   │   │       ├── index.ts
    │   │   │       └── zh-CN.ts
    │   │   ├── index.ts.ejs
    │   │   └── props.ts
    │   └── generators
    │       ├── base
    │       │   ├── README.md
    │       │   ├── _gitignore
    │       │   ├── babel.config.js
    │       │   ├── package.json
    │       │   ├── public
    │       │   │   └── logo.svg
    │       │   ├── shims
    │       │   │   ├── shims-md.d.ts
    │       │   │   └── shims-vue.d.ts
    │       │   └── tsconfig.json
    │       └── config
    │           ├── default
    │           │   ├── base
    │           │   │   ├── docs
    │           │   │   │   └── home.zh-CN.md
    │           │   │   ├── types
    │           │   │   │   ├── basicComponent.d.ts
    │           │   │   │   ├── button.d.ts
    │           │   │   │   └── index.d.ts
    │           │   │   └── varlet.config.mjs
    │           │   ├── sfc
    │           │   │   └── src
    │           │   │       └── button
    │           │   │           ├── Button.vue
    │           │   │           ├── __tests__
    │           │   │           │   └── index.spec.js
    │           │   │           ├── button.less
    │           │   │           ├── docs
    │           │   │           │   └── zh-CN.md
    │           │   │           ├── example
    │           │   │           │   ├── BasicUse.vue
    │           │   │           │   ├── ModifyColor.vue
    │           │   │           │   └── index.vue
    │           │   │           └── index.ts
    │           │   └── tsx
    │           │       └── src
    │           │           └── button
    │           │               ├── Button.tsx
    │           │               ├── __tests__
    │           │               │   └── index.spec.js
    │           │               ├── button.less
    │           │               ├── docs
    │           │               │   └── zh-CN.md
    │           │               ├── example
    │           │               │   ├── BasicUse.vue
    │           │               │   ├── ModifyColor.vue
    │           │               │   └── index.vue
    │           │               └── index.ts
    │           └── i18n
    │               ├── base
    │               │   ├── docs
    │               │   │   ├── home.en-US.md
    │               │   │   └── home.zh-CN.md
    │               │   ├── types
    │               │   │   ├── basicComponent.d.ts
    │               │   │   ├── button.d.ts
    │               │   │   ├── index.d.ts
    │               │   │   └── locale.d.ts
    │               │   └── varlet.config.mjs
    │               ├── sfc
    │               │   └── src
    │               │       ├── button
    │               │       │   ├── Button.vue
    │               │       │   ├── __tests__
    │               │       │   │   └── index.spec.js
    │               │       │   ├── button.less
    │               │       │   ├── docs
    │               │       │   │   ├── en-US.md
    │               │       │   │   └── zh-CN.md
    │               │       │   ├── example
    │               │       │   │   ├── BasicUse.vue
    │               │       │   │   ├── ModifyColor.vue
    │               │       │   │   ├── index.vue
    │               │       │   │   └── locale
    │               │       │   │       ├── en-US.ts
    │               │       │   │       ├── index.ts
    │               │       │   │       └── zh-CN.ts
    │               │       │   └── index.ts
    │               │       └── locale
    │               │           ├── __tests__
    │               │           │   └── index.spec.js
    │               │           ├── docs
    │               │           │   ├── en-US.md
    │               │           │   └── zh-CN.md
    │               │           ├── en-US.d.ts
    │               │           ├── en-US.ts
    │               │           ├── index.ts
    │               │           ├── zh-CN.d.ts
    │               │           └── zh-CN.ts
    │               └── tsx
    │                   └── src
    │                       ├── button
    │                       │   ├── Button.tsx
    │                       │   ├── __tests__
    │                       │   │   └── index.spec.js
    │                       │   ├── button.less
    │                       │   ├── docs
    │                       │   │   ├── en-US.md
    │                       │   │   └── zh-CN.md
    │                       │   ├── example
    │                       │   │   ├── BasicUse.vue
    │                       │   │   ├── ModifyColor.vue
    │                       │   │   ├── index.vue
    │                       │   │   └── locale
    │                       │   │       ├── en-US.ts
    │                       │   │       ├── index.ts
    │                       │   │       └── zh-CN.ts
    │                       │   └── index.ts
    │                       └── locale
    │                           ├── __tests__
    │                           │   └── index.spec.js
    │                           ├── docs
    │                           │   ├── en-US.md
    │                           │   └── zh-CN.md
    │                           ├── en-US.d.ts
    │                           ├── en-US.ts
    │                           ├── index.ts
    │                           ├── zh-CN.d.ts
    │                           └── zh-CN.ts
    └── tsconfig.json
```
