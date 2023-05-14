# Taggert

Creates random gamer tags.

## Why

Sometimes it's easier to create random gamer names or random gamer tags instead of forcing users to choose a name. For example if pseudonimity is a desired possibility.

## What

Taggert uses a multiple lists of words to create random gamer tags. It iterates through the arrays, selects a random element and combines them to a gamer tag. Currently, taggert uses colors, abjectives, fruits and vegetables.

## How

Simply install the library via [npm](https://npmjs.org).

```js
npm install taggert
```

Import the library and call `new()` to create a random gamer tag.

```js
import taggert from 'taggert'

const tag = new taggert()
tag.new()
```

Some examples of randomly generated tags:

```txt
wideeyed-white-pumpkin
hot-red-chilipepper
scary-purple-bellpepper
witty-black-mango
disgusted-silver-orange
```

Since version 0.3.0 it's possible to create gamer tags following a specific pattern. Just provide an array of wordslists names with the desired order of words in the pattern. Wordslists that doesn't exist will be skipped.

```javascript
console.log(
    tag.make(["color", "adjective", "subject", "color", "fruit-vegetable"])
)
/*
if a wordslist named 'subject' is not provides, this may be the output:
azure-wild-gray-aubergine
*/
```

## LICENSE

MIT License

Copyright (c) 2023 Mark Lubkowitz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
