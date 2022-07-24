# Regular Expression Constructor (NodeJS)

[`RegularExpressionConstructor.NodeJS`](https://github.com/hugoalh-studio/regular-expression-constructor-nodejs)
[![GitHub Contributors](https://img.shields.io/github/contributors/hugoalh-studio/regular-expression-constructor-nodejs?label=Contributors&logo=github&logoColor=ffffff&style=flat-square)](https://github.com/hugoalh-studio/regular-expression-constructor-nodejs/graphs/contributors)
[![GitHub Issues](https://img.shields.io/github/issues-raw/hugoalh-studio/regular-expression-constructor-nodejs?label=Issues&logo=github&logoColor=ffffff&style=flat-square)](https://github.com/hugoalh-studio/regular-expression-constructor-nodejs/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr-raw/hugoalh-studio/regular-expression-constructor-nodejs?label=Pull%20Requests&logo=github&logoColor=ffffff&style=flat-square)](https://github.com/hugoalh-studio/regular-expression-constructor-nodejs/pulls)
[![GitHub Discussions](https://img.shields.io/github/discussions/hugoalh-studio/regular-expression-constructor-nodejs?label=Discussions&logo=github&logoColor=ffffff&style=flat-square)](https://github.com/hugoalh-studio/regular-expression-constructor-nodejs/discussions)
[![GitHub Stars](https://img.shields.io/github/stars/hugoalh-studio/regular-expression-constructor-nodejs?label=Stars&logo=github&logoColor=ffffff&style=flat-square)](https://github.com/hugoalh-studio/regular-expression-constructor-nodejs/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/hugoalh-studio/regular-expression-constructor-nodejs?label=Forks&logo=github&logoColor=ffffff&style=flat-square)](https://github.com/hugoalh-studio/regular-expression-constructor-nodejs/network/members)
![GitHub Languages](https://img.shields.io/github/languages/count/hugoalh-studio/regular-expression-constructor-nodejs?label=Languages&logo=github&logoColor=ffffff&style=flat-square)
[![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/hugoalh-studio/regular-expression-constructor-nodejs?label=Grade&logo=codefactor&logoColor=ffffff&style=flat-square)](https://www.codefactor.io/repository/github/hugoalh-studio/regular-expression-constructor-nodejs)
[![LGTM Alerts](https://img.shields.io/lgtm/alerts/g/hugoalh-studio/regular-expression-constructor-nodejs?label=Alerts&logo=lgtm&logoColor=ffffff&style=flat-square)
![LGTM Grade](https://img.shields.io/lgtm/grade/javascript/g/hugoalh-studio/regular-expression-constructor-nodejs?label=Grade&logo=lgtm&logoColor=ffffff&style=flat-square)](https://lgtm.com/projects/g/hugoalh-studio/regular-expression-constructor-nodejs)
[![License](https://img.shields.io/static/v1?label=License&message=MIT&style=flat-square)](./LICENSE.md)

| **Release** | **Latest** (![GitHub Latest Release Date](https://img.shields.io/github/release-date/hugoalh-studio/regular-expression-constructor-nodejs?label=%20&style=flat-square)) | **Pre** (![GitHub Latest Pre-Release Date](https://img.shields.io/github/release-date-pre/hugoalh-studio/regular-expression-constructor-nodejs?label=%20&style=flat-square)) |
|:-:|:-:|:-:|
| [**GitHub**](https://github.com/hugoalh-studio/regular-expression-constructor-nodejs/releases) ![GitHub Total Downloads](https://img.shields.io/github/downloads/hugoalh-studio/regular-expression-constructor-nodejs/total?label=%20&style=flat-square) | ![GitHub Latest Release Version](https://img.shields.io/github/release/hugoalh-studio/regular-expression-constructor-nodejs?sort=semver&label=%20&style=flat-square) | ![GitHub Latest Pre-Release Version](https://img.shields.io/github/release/hugoalh-studio/regular-expression-constructor-nodejs?include_prereleases&sort=semver&label=%20&style=flat-square) |
| [**NPM**](https://www.npmjs.com/package/@hugoalh/regular-expression-constructor) ![NPM Total Downloads](https://img.shields.io/npm/dt/@hugoalh/regular-expression-constructor?label=%20&style=flat-square) | ![NPM Latest Release Version](https://img.shields.io/npm/v/@hugoalh/regular-expression-constructor/latest?label=%20&style=flat-square) | ![NPM Latest Pre-Release Version](https://img.shields.io/npm/v/@hugoalh/regular-expression-constructor/pre?label=%20&style=flat-square) |

## 📝 Description

A NodeJS module to help for constructing regular expression.

## 📚 Documentation

### Getting Started

#### Install

- NodeJS >= v14.15.0
- NPM >= v6.14.8

```sh
npm install @hugoalh/regular-expression-constructor
```

#### Use In CommonJS

```js
const regularExpressionConstructor = require("@hugoalh/regular-expression-constructor");
```

#### Use In ModuleJS

```js
import regularExpressionConstructor from "@hugoalh/regular-expression-constructor";
```

### API

#### Function

```ts
regularExpressionConstructor(
  pattern: string,
  flags?: (RegularExpressionConstructorFlags|string) = {}
): RegExp

interface RegularExpressionConstructorFlags {
  boundary?: boolean = false,// Add word boundary assertions at the start and end of the pattern.
  caseInsensitive?: boolean = false,
  exactly?: boolean = false,// Add begin and end line assertions at the start and end of the pattern.
  global?: boolean = false,
  multipleLine?: boolean = false,
  sticky?: boolean = false
}
```

### Example

```js
regularExpressionConstructor("fo+", "bi");
//=> /\b(?:fo+)\b/iu

regularExpressionConstructor("fo+", "eg");
//=> /^(?:fo+)$/gu
```
