# hymn-core

Core API for Hymn.

### Introduction

This repo contains the core APP api where we create an mantra app and initialize it.

Also, this package contains exported functions from both [`hymn-composer`](https://github.com/markoshust/hymn-komposer) and [`hymn-di`](https://github.com/markoshust/hymn-di).
That's purely for the ease of use.

The base of this project stems from <a href="https://github.com/mantrajs/mantra-core">mantra-core</a>. It is not intended to be backwards-compatible, as it will introduce breaking updates & new features.

### Differences from mantra-core

* Updates from latest hymn-composer and hymn-di
* Future updates planned

### Installation

```
npm i --save hymn-core react
```

### App API

```js
import MyComp from './myComp';
import {createApp} from 'hymn-core';

// Here's a simple Hymn Module
const module = {
  routes(injectDeps) {
    const InjectedComp = injectDeps(MyComp);
    // load routes and put `InjectedComp` to the screen.
  },
  load(context, actions) {
    // do any module initialization
  },
  actions: {
    myNamespace: {
      doSomething: (context, arg1) => {}
    }
  }
};

const context = {
  client: new DataClient()
};

const app = createApp(context);
app.loadModule(module);
// app.loadModule(someOtherModule);
app.init();
```
