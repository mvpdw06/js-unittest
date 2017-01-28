# JavaScript UnitTest

TDD is very popular these two years, so we need to use unittest to protect our code being something wrong with refactor.

## Library

* [expect](https://github.com/mjackson/expect)

> Yes, just using one library to write these code.

## Requirement

* Pure functional programming

> Because we need to avoid side-effect in our function, so our tests will be useful.

## Useful API

* toEqual

```
expect(object).toEqual(value, [message])
```

## Special notice

* You need to test special scenario like js-undefined or empty object without property you need.

## Refrence

[Dan Abramov's Redux courses at egghead.](egghead.io)
