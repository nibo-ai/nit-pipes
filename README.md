# nit-pipes  
[![npm version](https://badge.fury.io/js/%40nudgeit%2Fnit-pipes.svg)](https://badge.fury.io/js/%40nudgeit%2Fnit-pipes)
[![Build Status](https://travis-ci.org/NudgeIT/nit-pipes.svg?branch=master)](https://travis-ci.org/NudgeIT/nit-pipes)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/NudgeIT/nit-pipes/blob/master/LICENSE)

This is a collection of useful pipes for AngularIO (v>=4) with no external dependencies.

## Table of contents

 - [Installation](#installation)
 - [Pipes](#Pipes)
	- [first](#first)
	- [last](#last)
	- [join](#join)
    - [impureJoin](#impureJoin)
    - [initials](#initials)
    - [safeUrl](#safeUrl)
    - [isArray](#isArray)

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

### first

Returns the first n elements of the array. Any negative value of n is treated as 0 and an empty array will be returned.

**Usage:** `array | first: n`

```html
<p>{{ [1, 2, 3, 4] | first: 2 }}</p> <!-- Output: "1, 2" -->
```

### last

Returns the last n elements of the array. Any negative value of n is treated as 0 and an empty array will be returned.

**Usage:** `array | last: n`

```html
<p>{{ [1, 2, 3, 4] | last: 2 }}</p> <!-- Output: "3, 4" -->
```

### join

Joins the elements of an array.

**Usage:** `array | join: [separator|optional]`

```html
<p>{{ [1, 2] | join: ', ' }}</p> <!-- Output: "1, 2" -->
```

### impureJoin

The impure version of join.

### isArray

Tests if an object is an array and returns true if it is or false otherwise.

**Usage:** `obj | isArray`

```html
<p>{{ [1, 2] | isArray }}</p> <!-- Output: "true" -->
<p>{{ "12" | isArray }}</p> <!-- Output: "false" -->
```

### safeUrl

Returns the safe version of an URL. Use this with care!

**Usage:** `url | safeUrl`

### initials

Returns the initials of the words in a string.

**Usage:** `string | join: [maxLength|optional, default:3]`

```html
<p>{{ "Nibo AI" | initials }}</p> <!-- Output: "NA" -->
```
