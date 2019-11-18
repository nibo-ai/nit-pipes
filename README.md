# nit-pipes  
[![npm version](https://badge.fury.io/js/%40nudgeit%2Fnit-pipes.svg)](https://badge.fury.io/js/%40nudgeit%2Fnit-pipes)
[![Build Status](https://travis-ci.org/nibo-ai/nit-pipes.svg?branch=master)](https://travis-ci.org/nibo-ai/nit-pipes)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/NudgeIT/nit-pipes/blob/master/LICENSE)

This is a collection of useful pipes for AngularIO (v>=4) with no external dependencies.

## Table of contents

 - [Installation](#installation)
 - [Pipes](#Pipes)
	- [first](#first)
	- [last](#last)
    - [impureJoin](#impureJoin)
    - [initials](#initials)
    - [isArray](#isArray)
    - [isBoolean](#isBoolean)
    - [isDate](#isDate)
    - [isFunction](#isFunction)
    - [isNull](#isNull)
    - [isString](#isString)
	- [join](#join)
    - [~safeUrl~](#safeUrl)
	- [safe](#safe)
	- [sanitize](#sanitize)
	- [xfilter](#xfilter)

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

Tests if a value is an array and returns true if it is or false otherwise.

**Usage:** `value | isArray`

```html
<p>{{ [1, 2] | isArray }}</p> <!-- Output: "true" -->
<p>{{ "12" | isArray }}</p> <!-- Output: "false" -->
```

### isBoolean

Tests if a value is a boolean and returns true if it is or false otherwise.

**Usage:** `value | isBoolean`

```html
<p>{{ false | isBoolean }}</p> <!-- Output: "true" -->
<p>{{ "12" | isBoolean }}</p> <!-- Output: "false" -->
```

### isDate

Tests if a value is a date and returns true if it is or false otherwise.

**Usage:** `value | isDate`

### isFunction

Tests if a value is a function and returns true if it is or false otherwise.

**Usage:** `value | isFunction`

### isNull

Tests if a value is null or undefined and returns true if it is or false otherwise.

**Usage:** `value | isNull`

```html
<p>{{ null | isNull }}</p> <!-- Output: "true" -->
<p>{{ undefined | isNull }}</p> <!-- Output: "true" -->
<p>{{ "12" | isNull }}</p> <!-- Output: "false" -->
<p>{{ "" | isNull }}</p> <!-- Output: "false" -->
```

### isString

Tests if a value is a string and returns true if it is or false otherwise.

**Usage:** `value | isString`

### ~safeUrl~

Deprecated - better use safe!

Returns the safe version of an URL. Use this with care!

**Usage:** `url | safeUrl`

### initials

Returns the initials of the words in a string.

**Usage:** `string | join: [maxLength|optional, default:3]`

```html
<p>{{ "Nibo AI" | initials }}</p> <!-- Output: "NA" -->
```
### safe

Returns the safe version of an URL or HTML. Use this with care!

**Usage:** `string | safe: context`

Context can be one of 'HTML', 'STYLE', 'SCRIPT', 'URL', 'RESOURCE_URL' (case insensitive) 
depending on what content you would like to sanitize.

```html
<img [src]="url | safe: 'url'"/> <!-- Output: safe version of the URL -->
<script [src]="url | safe: 'resource_url'"></script> <!-- Output: safe version of the URL -->
<p [innerHtml]="content | safe: 'html'"></p> <!-- Output: necessary if content contains tags like SCRIPT -->
```

### sanitize

Returns the sanitized version of an URL or HTML. Use this with care!

**Usage:** `string | sanitize: context`

Context can be one of 'HTML', 'STYLE', 'SCRIPT', 'URL', 'RESOURCE_URL' (case insensitive) 
depending on what content you would like to sanitize.

```html
<img [src]="url | sanitize: 'url'"/> <!-- Output: safe version of the URL -->
<script [src]="url | sanitize: 'resource_url'"></script> <!-- Output: safe version of the URL -->
<p [innerHtml]="content | sanitize: 'html'"></p> <!-- Output: necessary if content contains tags like SCRIPT -->
```

### xfilter

Joins the elements of an array.

**Usage:** `array | xfilter: customFilter`

```typescript
isOdd = (x) => x % 2 === 1;
```

```html
<p>{{ [1, 2, 3, 4] | xfilter: isOdd }}</p> <!-- Output: "1, 3" -->
```
