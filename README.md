# nit-pipes  
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/NudgeIT/nit-pipes/blob/master/LICENSE)

Useful pipes for Angular with no external dependencies

## Table of contents

 - [Installation](#installation)
 - [Pipes]
    - [join](#join)
    - [impureJoin](#impureJoin)
    - [initials](#initials)
    - [safeUrl](#safeUrl)

## Installation

1. Use npm to install the package

  ```terminal
  $ npm install @nudgeit/nit-pipes --save
  ```

2. Add into your module `imports` the `NitPipesModule` in order to add all of the pipes.

  ```typescript
  import {NitPipesModule} from ' @nudgeit/nit-pipes';

  @NgModule({
   // ...
   imports: [
     // ...
     NitPipesModule
   ]
  })
  ```

## Pipes

### join

Joins the elements of an array.

**Usage:** `array | join: [separator|optional]`

```html
<p>{{ [1, 2] | join: ', ' }}</p> <!-- Output: "1, 2" -->
```

### impureJoin

The impure version of join.

### safeUrl

Returns the safe version of an URL. Use this with care!

**Usage:** `url | safeUrl`

### initials

Returns the initials of the words in a string.

**Usage:** `string | join: [maxLength|optional, default:3]`

```html
<p>{{ "Nibo AI" | initials }}</p> <!-- Output: "NA" -->
```
