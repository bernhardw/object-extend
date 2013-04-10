object-extend
=============

A well-tested function to deep extend (or merge) JavaScript objects without further dependencies.

Unit-tested with over 94 single assertion tests.


Usage
-----
```javascript
var a = {
    app: 'My App',
    environment: 'development',
    connections: {
        default: 'mysql',
        mysql: {
            driver: 'mysql',
            host: 'localhost',
            database: 'myapp.dev'
        }
    }
};

var b = {
    environment: 'production',
    connections: {
        mysql: {
            database: 'myapp.prod'
        }
    }
};

extend(a, b);

// Result:
{
    app: 'My App',
    environment: 'production',
    connections: {
        default: 'mysql',
        mysql: {
            driver: 'mysql',
            host: 'localhost',
            database: 'myapp.prod'
        }
    }
}
```


Limitations
-----------

Array:
Only actual objects are extended. Arrays will not be merged but overwritten.
```javascript
var a { foo: [1, 2, 3] };
var b { foo: [4, 5, 6] };

extend(a, b); // { foo: [4, 5, 6] }
```


Notes
-----

This function extends only enumerable properties without going up the prototype chain.


License
-------
MIT.