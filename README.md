# global-preload-called-twice

Reproduction of Nodejs bug in v20.

The bug: https://github.com/nodejs/node/issues/47655. Happens in Node.js 20.0.0.

To replicate: ` node --loader ./loader.mjs index.mjs`. You will see "loader loaded" written many many times...

Fixed in 20.1.0!
