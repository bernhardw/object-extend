// TODO: Test to merge extended objects.

var mocha = require('mocha'),
    should = require('chai').should();

var extend = require('../lib/extend');

// Types: number, string, array, object, date, function, boolean, 0, null, undefined
describe('types:', function () {


    // Boilerplate
    /*
    it('', function () {
        var a = {
            foo: ''
        };
        var b = {
            foo: ''
        };
        extend(a, b).should.eql({
            foo: ''
        });
    });
    */

    // Debug
    /*
    console.log('');
    console.log('a:', booleanObj);
    console.log('b:', numberObj);
    console.log('=:', extend(booleanObj, numberObj));
    */


    var numberObj,
        numberObj2,
        stringObj,
        stringObj2,
        arrayObj,
        arrayObj2,
        objectObj,
        objectObj2,
        dateObj,
        dateObj2,
        functionObj,
        functionObj2,
        booleanObj,
        booleanObj2,
        zeroObj,
        zeroObj2,
        nullObj,
        nullObj2,
        undefinedObj,
        undefinedObj2;


    beforeEach(function () {

        numberObj = {
            foo: 1
        };
        numberObj2 = {
            foo: 2
        };


        stringObj = {
            foo: 'bar'
        };
        stringObj2 = {
            foo: 'baz'
        };

        arrayObj = {
            foo: [1, 'b', 3]
        };
        arrayObj2 = {
            foo: [5, 'f', 7]
        };

        objectObj = {
            foo: {
                bar: 'baz'
            }
        };
        objectObj2 = {
            foo: {
                bar: 'bam'
            }
        };

        dateObj = {
            foo: new Date(2013, 4, 4)
        };
        dateObj2 = {
            foo: new Date(2013, 4, 5)
        };

        functionObj = {
            foo: function () { return true; }
        };
        functionObj2 = {
            foo: function () { return false; }
        };

        booleanObj = {
            foo: true
        };
        booleanObj2 = {
            foo: false
        };

        zeroObj = {
            foo: 0
        };
        zeroObj2 = {
            foo: 0
        };

        nullObj = {
            foo: null
        };
        nullObj2 = {
            foo: null
        };

        undefinedObj = {
            foo: undefined
        };
        undefinedObj2 = {
            foo: undefined
        };

    });


    // Number with number
    it('should extend number with number', function () {
        extend(numberObj, numberObj2).should.eql(numberObj2);
    });

    // Number with string
    it('should extend number with string', function () {
        extend(numberObj, stringObj).should.eql(stringObj);
    });

    // Number with array
    it('should extend number with array', function () {
        extend(numberObj, arrayObj).should.eql(arrayObj);
    });

    // Number with object
    it('should extend number with object', function () {
        extend(numberObj, objectObj).should.eql(objectObj);
    });

    // Number with date
    it('should extend number with date', function () {
        extend(numberObj, dateObj).should.eql(dateObj);
    });

    // Number with function
    it('should extend number with function', function () {
        extend(numberObj, functionObj).should.eql(functionObj);
    });

    // Number with boolean
    it('should extend number with boolean', function () {
        extend(numberObj, booleanObj).should.eql(booleanObj);
    });

    // Number with 0
    it('should extend number with 0', function () {
        extend(numberObj, zeroObj).should.eql(zeroObj);
    });

    // Number with null
    it('should extend number with null', function () {
        extend(numberObj, nullObj).should.eql(nullObj);
    });

    // Number with undefined
    it('should extend number with undefined', function () {
        extend(numberObj, undefinedObj).should.eql(undefinedObj);
    });


    // String with number
    it('should extend string with number', function () {
        extend(stringObj, numberObj).should.eql(numberObj);
    });

    // String with string
    it('should extend string with string', function () {
        extend(stringObj, stringObj2).should.eql(stringObj2);
    });

    // String with array
    it('should extend string with array', function () {
        extend(stringObj, arrayObj).should.eql(arrayObj);
    });

    // String with object
    it('should extend string with object', function () {
        extend(stringObj, objectObj).should.eql(objectObj);
    });

    // String with date
    it('should extend string with date', function () {
        extend(stringObj, dateObj).should.eql(dateObj);
    });

    // String with function
    it('should extend string with function', function () {
        extend(stringObj, functionObj).should.eql(functionObj);
    });

    // String with boolean
    it('should extend string with boolean', function () {
        extend(stringObj, booleanObj).should.eql(booleanObj);
    });

    // String with 0
    it('should extend string with 0', function () {
        extend(stringObj, zeroObj).should.eql(zeroObj);
    });

    // String with null
    it('should extend string with null', function () {
        extend(stringObj, nullObj).should.eql(nullObj);
    });

    // String with undefined
    it('should extend string with undefined', function () {
        extend(stringObj, undefinedObj).should.eql(undefinedObj);
    });



    // Array with number
    it('should extend array with number', function () {
        extend(arrayObj, numberObj).should.eql(numberObj);
    });

    // Array with string
    it('should extend array with string', function () {
        extend(arrayObj, stringObj).should.eql(stringObj);
    });

    // Array with array
    it('should extend array with array', function () {
        extend(arrayObj, arrayObj2).should.eql(arrayObj2);
    });

    // Array with object
    it('should extend array with object', function () {
        extend(arrayObj, objectObj).should.eql(objectObj);
    });

    // Array with date
    it('should extend array with date', function () {
        extend(arrayObj, dateObj).should.eql(dateObj);
    });

    // Array with function
    it('should extend array with function', function () {
        extend(arrayObj, functionObj).should.eql(functionObj);
    });

    // Array with boolean
    it('should extend array with boolean', function () {
        extend(arrayObj, booleanObj).should.eql(booleanObj);
    });

    // Array with 0
    it('should extend array with 0', function () {
        extend(arrayObj, zeroObj).should.eql(zeroObj);
    });

    // Array with null
    it('should extend array with null', function () {
        extend(arrayObj, nullObj).should.eql(nullObj);
    });

    // Array with undefined
    it('should extend array with undefined', function () {
        extend(arrayObj, undefinedObj).should.eql(undefinedObj);
    });



    // Object with number
    it('should extend object with number', function () {
        extend(objectObj, numberObj).should.eql(numberObj);
    });

    // Object with string
    it('should extend object with string', function () {
        extend(objectObj, stringObj).should.eql(stringObj);
    });

    // Object with array
    it('should extend object with array', function () {
        extend(objectObj, arrayObj).should.eql(arrayObj);
    });

    // Object with object
    it('should extend object with object', function () {
        extend(objectObj, objectObj2).should.eql(objectObj2);
    });

    // Object with date
    it('should extend object with date', function () {
        extend(objectObj, dateObj).should.eql(dateObj);
    });

    // Object with function
    it('should extend object with function', function () {
        extend(objectObj, functionObj).should.eql(functionObj);
    });

    // Object with boolean
    it('should extend object with boolean', function () {
        extend(objectObj, booleanObj).should.eql(booleanObj);
    });

    // Object with 0
    it('should extend object with 0', function () {
        extend(objectObj, zeroObj).should.eql(zeroObj);
    });

    // Object with null
    it('should extend object with null', function () {
        extend(objectObj, nullObj).should.eql(nullObj);
    });

    // Object with undefined
    it('should extend object with undefined', function () {
        extend(objectObj, undefinedObj).should.eql(undefinedObj);
    });



    // Function with number
    it('should extend function with number', function () {
        extend(functionObj, numberObj).should.eql(numberObj);
    });

    // Function with string
    it('should extend function with string', function () {
        extend(functionObj, stringObj).should.eql(stringObj);
    });

    // Function with array
    it('should extend function with array', function () {
        extend(functionObj, arrayObj).should.eql(arrayObj);
    });

    // Function with object
    it('should extend function with object', function () {
        extend(functionObj, objectObj).should.eql(objectObj);
    });

    // Function with date
    it('should extend function with date', function () {
        extend(functionObj, dateObj).should.eql(dateObj);
    });

    // Function with function
    it('should extend function with function', function () {
        extend(functionObj, functionObj2).should.eql(functionObj2);
    });

    // Function with boolean
    it('should extend function with boolean', function () {
        extend(functionObj, booleanObj).should.eql(booleanObj);
    });

    // Function with 0
    it('should extend function with 0', function () {
        extend(functionObj, zeroObj).should.eql(zeroObj);
    });

    // Function with null
    it('should extend function with null', function () {
        extend(functionObj, nullObj).should.eql(nullObj);
    });

    // Function with undefined
    it('should extend function with undefined', function () {
        extend(functionObj, undefinedObj).should.eql(undefinedObj);
    });



    // Boolean with number
    it('should extend boolean with number', function () {
        extend(booleanObj, numberObj).should.eql(numberObj);
    });

    // Boolean with string
    it('should extend boolean with string', function () {
        extend(booleanObj, stringObj).should.eql(stringObj);
    });

    // Boolean with array
    it('should extend boolean with array', function () {
        extend(booleanObj, arrayObj).should.eql(arrayObj);
    });

    // Boolean with object
    it('should extend boolean with object', function () {
        extend(booleanObj, objectObj).should.eql(objectObj);
    });

    // Boolean with date
    it('should extend boolean with date', function () {
        extend(booleanObj, dateObj).should.eql(dateObj);
    });

    // Boolean with function
    it('should extend boolean with function', function () {
        extend(booleanObj, functionObj).should.eql(functionObj);
    });

    // Boolean with boolean
    it('should extend boolean with boolean', function () {
        extend(booleanObj, booleanObj2).should.eql(booleanObj2);
    });

    // Boolean with 0
    it('should extend boolean with 0', function () {
        extend(booleanObj, zeroObj).should.eql(zeroObj);
    });

    // Boolean with null
    it('should extend boolean with null', function () {
        extend(booleanObj, nullObj).should.eql(nullObj);
    });

    // Boolean with undefined
    it('should extend boolean with undefined', function () {
        extend(booleanObj, undefinedObj).should.eql(undefinedObj);
    });



    // 0 with number
    it('should extend 0 with number', function () {
        extend(zeroObj, numberObj).should.eql(numberObj);
    });

    // 0 with string
    it('should extend 0 with string', function () {
        extend(zeroObj, stringObj).should.eql(stringObj);
    });

    // 0 with array
    it('should extend 0 with array', function () {
        extend(zeroObj, arrayObj).should.eql(arrayObj);
    });

    // 0 with object
    it('should extend 0 with object', function () {
        extend(zeroObj, objectObj).should.eql(objectObj);
    });

    // 0 with date
    it('should extend 0 with date', function () {
        extend(zeroObj, dateObj).should.eql(dateObj);
    });

    // 0 with function
    it('should extend 0 with function', function () {
        extend(zeroObj, functionObj).should.eql(functionObj);
    });

    // 0 with boolean
    it('should extend 0 with boolean', function () {
        extend(zeroObj, booleanObj).should.eql(booleanObj);
    });

    // 0 with 0
    it('should extend 0 with 0', function () {
        extend(zeroObj, zeroObj2).should.eql(zeroObj2);
    });

    // 0 with null
    it('should extend 0 with null', function () {
        extend(zeroObj, nullObj).should.eql(nullObj);
    });

    // 0 with undefined
    it('should extend 0 with undefined', function () {
        extend(zeroObj, undefinedObj).should.eql(undefinedObj);
    });



    // null with number
    it('should extend null with number', function () {
        extend(nullObj, numberObj).should.eql(numberObj);
    });

    // null with string
    it('should extend null with string', function () {
        extend(nullObj, stringObj).should.eql(stringObj);
    });

    // null with array
    it('should extend null with array', function () {
        extend(nullObj, arrayObj).should.eql(arrayObj);
    });

    // null with object
    it('should extend null with object', function () {
        extend(nullObj, objectObj).should.eql(objectObj);
    });

    // null with date
    it('should extend null with date', function () {
        extend(nullObj, dateObj).should.eql(dateObj);
    });

    // null with function
    it('should extend null with function', function () {
        extend(nullObj, functionObj).should.eql(functionObj);
    });

    // null with boolean
    it('should extend null with boolean', function () {
        extend(nullObj, booleanObj).should.eql(booleanObj);
    });

    // null with 0
    it('should extend null with 0', function () {
        extend(nullObj, zeroObj).should.eql(zeroObj);
    });

    // null with null
    it('should extend null with null', function () {
        extend(nullObj, nullObj2).should.eql(nullObj2);
    });

    // null with undefined
    it('should extend null with undefined', function () {
        extend(nullObj, undefinedObj).should.eql(undefinedObj);
    });



    // undefined with number
    it('should extend undefined with number', function () {
        extend(undefinedObj, numberObj).should.eql(numberObj);
    });

    // undefined with string
    it('should extend undefined with string', function () {
        extend(undefinedObj, stringObj).should.eql(stringObj);
    });

    // undefined with array
    it('should extend undefined with array', function () {
        extend(undefinedObj, arrayObj).should.eql(arrayObj);
    });

    // undefined with object
    it('should extend undefined with object', function () {
        extend(undefinedObj, objectObj).should.eql(objectObj);
    });

    // undefined with date
    it('should extend undefined with date', function () {
        extend(undefinedObj, dateObj).should.eql(dateObj);
    });

    // undefined with function
    it('should extend undefined with function', function () {
        extend(undefinedObj, functionObj).should.eql(functionObj);
    });

    // undefined with boolean
    it('should extend undefined with boolean', function () {
        extend(undefinedObj, booleanObj).should.eql(booleanObj);
    });

    // undefined with 0
    it('should extend undefined with 0', function () {
        extend(undefinedObj, zeroObj).should.eql(zeroObj);
    });

    // undefined with null
    it('should extend undefined with null', function () {
        extend(undefinedObj, nullObj).should.eql(nullObj);
    });

    // undefined with undefined
    it('should extend undefined with undefined', function () {
        extend(undefinedObj, undefinedObj2).should.eql(undefinedObj2);
    });

});



describe('complex:', function () {

    // Arrays
    it('should extend arrays', function () {
        var a = {
            foo: ['a, b, c'],
            bar: 'bla',
            baz: function () {}
        };
        var b = {
            foo: 'new',
            bar: [1, 2, 3],
            baz: ['alpha', 'beta']
        };
        extend(a, b).should.eql({
            foo: 'new',
            bar: [1, 2, 3],
            baz: ['alpha', 'beta']
        });
    });

    // Functions
    it('should extend functions', function () {
        // We use two dummy functions to reference in our objects. Otherwise our objects will
        // never be equal since the functions (although looking the same) will never point to
        // the same memory.
        var dummyA = function () {
            return false;
        };
        var dummyB = function () {
            return true;
        };
        var a = {
            baz: dummyA()
        };
        var b = {
            baz: dummyB()
        };

        extend(a, b).should.eql({
            baz: dummyB()
        });
    });

});



describe('deep', function () {

    var dummyFunction = function () {
        return true;
    };

    var a = {
        app: 'My App',
        connections: {
            default: 'mysql',
            mysql: {
                driver: 'mysql',
                host: 'localhost',
                database: 'myapp.dev'
            }
        },
        init: {
            setup: null
        }
    };

    var b = {
        environment: 'production',
        connections: {
            default: 'mongodb',
            mysql: {
                database: 'myapp.prod'
            },
            mongodb: {
                host: 'http://mongo.example.org',
                database: 'myapp'
            }
        },
        init: {
            setup: dummyFunction()
        }
    };

    var expected = {
        app: 'My App',
        environment: 'production',
        connections: {
            default: 'mongodb',
            mysql: {
                driver: 'mysql',
                host: 'localhost',
                database: 'myapp.prod'
            },
            mongodb: {
                host: 'http://mongo.example.org',
                database: 'myapp'
            }
        },
        init: {
            setup: dummyFunction()
        }
    };

    it('should deep extend objects', function () {
        extend(a, b).should.eql(expected);
    });

});




describe('grand finale', function () {

    var dummyFunction = function () {
        return true;
    };

    var a = {
        myVersion: 1,
        myDate: new Date(2013, 4, 10),
        myArray: ['foo', 'bar'],
        deep: {
            myArray: ['a', 2, 'b', { sub: 'test' }],
            object: {
                foo: 'test',
                bar: {
                    subsub: 'go',
                    subsubArr: ['a', 'b', 'c']
                }
            }
        },
        myFunction: function () {
            return true;
        }
    };

    var b = {
        myFoo: 'b',
        myVersion: '1',
        deep: {
            object: {
                bar: {
                    subsubArr: ['d']
                }
            },
            strg: 'String here...',
            subsub: {
                val: 'go'
            }
        },
        myFunction: dummyFunction
    };

    var expected = {
        myFoo: 'b',
        myVersion: '1',
        myDate: new Date(2013, 4, 10),
        myArray: ['foo', 'bar'],
        deep: {
            myArray: ['a', 2, 'b', { sub: 'test' }],
            object: {
                foo: 'test',
                bar: {
                    subsub: 'go',
                    subsubArr: ['d']
                }
            },
            strg: 'String here...',
            subsub: {
                val: 'go'
            }
        },
        myFunction: dummyFunction

    };

    // Grand finale.
    it('should pass the grand finale', function () {
        extend(a, b).should.eql(expected);
    });

});