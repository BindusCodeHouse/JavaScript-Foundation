/*
    memory me data kis tarah se save kiye jate hai or kis tarah se access kiye jate hai based on that
    categorized datatype in 2 part in javascript.
    primitive -> pass-by-value
    non-primitive -> call by reference

    JavaScript is pass-by-value. Primitive values are copied directly, while for objects the copied value 
    is a reference to the object.

    reference it means where locate value of object [home address like: #home101 in this locate particular 
    object value] 

    in primitive only copied particular value 
    in non-primitive copied the reference so, both value is single. not save different object in memory. 
*/

/*
    javascrpt is statically typed language or dynamic typed language ?

    JavaScript = Dynamically typed
    Java = Statically typed

    It means you don't have to specify the data type of a variable, and the type can change during
    the program.
*/

/*
In javascript there are main 8 type of datatype it is devided into 2 part :
1. primitive 
2. non-primitive

✅ Primitive → single value and immutable
✅ Non-primitive → objects/structured values and generally mutable

primitive :
    1.String       → "Hello"
    2.Number       → 100
    3.BigInt       → 100n
    4.Boolean      → true
    5.Undefined    → undefined
    6.Null         → null
    7.Symbol       → Symbol()

non-primitive / Reference Type :
    8.Object       → { name: "Bindu" }
                ├── Array
                ├── Function
                ├── Date
                └── etc.
*/

/*
    Return type of variables in JavaScript
    1) Primitive Datatypes
        Number => number
        String  => string
        Boolean  => boolean
        null  => object
        undefined  =>  undefined
        Symbol  =>  symbol
        BigInt  =>  bigint

    2) Non-primitive Datatypes
        Arrays  =>  object
        Function  =>  function
        Object  =>  object
*/

let age = null
console.log( typeof age)  // ---> object [ This is a historical JavaScript bug/quirk. null is still officially a primitive value, despite typeof null returning "object". ]

let name;
console.log( typeof(name))

/*
    difference between null & undefined :
    undefined means if we not assigned value to the particular variable.
    null means does not have any value
*/

name = " ";
console.log(typeof name);  // string

num = 0;
console.log(typeof num);   // number