# Regular Expression Constructor (NodeJS)

[`RegularExpressionConstructor.NodeJS`](https://github.com/hugoalh-studio/regular-expression-constructor-nodejs)

![NodeJS](https://img.shields.io/badge/NodeJS-339933?logo=nodedotjs&logoColor=ffffff&style=flat-square "NodeJS")
![License](https://img.shields.io/static/v1?label=License&message=MIT&style=flat-square "License")
[![GitHub Stars](https://img.shields.io/github/stars/hugoalh-studio/regular-expression-constructor-nodejs?label=Stars&logo=github&logoColor=ffffff&style=flat-square "GitHub Stars")](https://github.com/hugoalh-studio/regular-expression-constructor-nodejs/stargazers)
[![GitHub Contributors](https://img.shields.io/github/contributors/hugoalh-studio/regular-expression-constructor-nodejs?label=Contributors&logo=github&logoColor=ffffff&style=flat-square "GitHub Contributors")](https://github.com/hugoalh-studio/regular-expression-constructor-nodejs/graphs/contributors)
[![GitHub Issues](https://img.shields.io/github/issues-raw/hugoalh-studio/regular-expression-constructor-nodejs?label=Issues&logo=github&logoColor=ffffff&style=flat-square "GitHub Issues")](https://github.com/hugoalh-studio/regular-expression-constructor-nodejs/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr-raw/hugoalh-studio/regular-expression-constructor-nodejs?label=Pull%20Requests&logo=github&logoColor=ffffff&style=flat-square "GitHub Pull Requests")](https://github.com/hugoalh-studio/regular-expression-constructor-nodejs/pulls)
[![GitHub Discussions](https://img.shields.io/github/discussions/hugoalh-studio/regular-expression-constructor-nodejs?label=Discussions&logo=github&logoColor=ffffff&style=flat-square "GitHub Discussions")](https://github.com/hugoalh-studio/regular-expression-constructor-nodejs/discussions)
[![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/hugoalh-studio/regular-expression-constructor-nodejs?label=Grade&logo=codefactor&logoColor=ffffff&style=flat-square "CodeFactor Grade")](https://www.codefactor.io/repository/github/hugoalh-studio/regular-expression-constructor-nodejs)

| **Releases** | **Latest** (![GitHub Latest Release Date](https://img.shields.io/github/release-date/hugoalh-studio/regular-expression-constructor-nodejs?label=&style=flat-square "GitHub Latest Release Date")) | **Pre** (![GitHub Latest Pre-Release Date](https://img.shields.io/github/release-date-pre/hugoalh-studio/regular-expression-constructor-nodejs?label=&style=flat-square "GitHub Latest Pre-Release Date")) |
|:-:|:-:|:-:|
| [![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=ffffff&style=flat-square "GitHub")](https://github.com/hugoalh-studio/regular-expression-constructor-nodejs/releases) ![GitHub Total Downloads](https://img.shields.io/github/downloads/hugoalh-studio/regular-expression-constructor-nodejs/total?label=&style=flat-square "GitHub Total Downloads") | ![GitHub Latest Release Version](https://img.shields.io/github/release/hugoalh-studio/regular-expression-constructor-nodejs?sort=semver&label=&style=flat-square "GitHub Latest Release Version") | ![GitHub Latest Pre-Release Version](https://img.shields.io/github/release/hugoalh-studio/regular-expression-constructor-nodejs?include_prereleases&sort=semver&label=&style=flat-square "GitHub Latest Pre-Release Version") |
| [![NPM](https://img.shields.io/badge/NPM-CB3837?logo=npm&logoColor=ffffff&style=flat-square "NPM")](https://www.npmjs.com/package/@hugoalh/regular-expression-constructor) ![NPM Total Downloads](https://img.shields.io/npm/dt/@hugoalh/regular-expression-constructor?label=&style=flat-square "NPM Total Downloads") | ![NPM Latest Release Version](https://img.shields.io/npm/v/@hugoalh/regular-expression-constructor/latest?label=&style=flat-square "NPM Latest Release Version") | ![NPM Latest Pre-Release Version](https://img.shields.io/npm/v/@hugoalh/regular-expression-constructor/pre?label=&style=flat-square "NPM Latest Pre-Release Version") |

## 📝 Description

A NodeJS module to help for constructing regular expression.

## 📚 Documentation

### Getting Started

#### Install

- NodeJS >= v10.13.0

```sh
npm install @hugoalh/regular-expression-constructor
```

#### Use

##### CommonJS

```js
const regularExpressionConstructor = require("@hugoalh/regular-expression-constructor");
```

##### ModuleJS

```js
import regularExpressionConstructor from "@hugoalh/regular-expression-constructor";
```

### API

#### Function

```ts
regularExpressionConstructor(pattern: string, flags: (RegularExpressionConstructorFlags|string) = {}): RegExp

interface RegularExpressionConstructorFlags {
  boundary: boolean = false;// Add word boundary assertions at the start and end of the pattern.
  caseInsensitive: boolean = false;
  exactly: boolean = false;// Add begin and end line assertions at the start and end of the pattern.
  global: boolean = false;
  indices: boolean = false;
  multipleLine: boolean = false;
  sticky: boolean = false;
}
```

### Example

```js
regularExpressionConstructor("fo+", "bi");
//=> /\b(?:fo+)\b/iu

regularExpressionConstructor("fo+", "eg");
//=> /^(?:fo+)$/gu
```
