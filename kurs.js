/*
                                                                                   
        88                                                                   88                     
        88                                                                   ""              ,d     
        88                                                                                   88     
        88 ,adPPYYba, 8b       d8 ,adPPYYba, ,adPPYba,  ,adPPYba, 8b,dPPYba, 88 8b,dPPYba, MM88MMM  
        88 ""     `Y8 `8b     d8' ""     `Y8 I8[    "" a8"     "" 88P'   "Y8 88 88P'    "8a  88     
        88 ,adPPPPP88  `8b   d8'  ,adPPPPP88  `"Y8ba,  8b         88         88 88       d8  88     
88,   ,d88 88,    ,88   `8b,d8'   88,    ,88 aa    ]8I "8a,   ,aa 88         88 88b,   ,a8"  88,    
 "Y8888P"  `"8bbdP"Y8     "8"     `"8bbdP"Y8 `"YbbdP"'  `"Ybbd8"' 88         88 88`YbbdP"'   "Y888  
                                                                                88                  
                                                                                88                  
*/

var topics = ["variables", "functions"];

/*
                                                                                          
                                                                                      88  
                                                                                      88  
                                                                                      88  
8b,dPPYba,  ,adPPYba, ,adPPYba,  ,adPPYba, 8b,dPPYba, 8b       d8  ,adPPYba,  ,adPPYb,88  
88P'   "Y8 a8P_____88 I8[    "" a8P_____88 88P'   "Y8 `8b     d8' a8P_____88 a8"    `Y88  
88         8PP"""""""  `"Y8ba,  8PP""""""" 88          `8b   d8'  8PP""""""" 8b       88  
88         "8b,   ,aa aa    ]8I "8b,   ,aa 88           `8b,d8'   "8b,   ,aa "8a,   ,d88  
88          `"Ybbd8"' `"YbbdP"'  `"Ybbd8"' 88             "8"      `"Ybbd8"'  `"8bbdP"Y8  


*/

abstract
boolean break byte
case catch char class const continue
debugger default delete do double
else enum export extends
false final finally float for function
goto
if implements import in instanceof int interface
long
native new null
package private protected public
return
short static super switch synchronized
this throw throws transient true try typeof
var volatile void
while with


// Should have been reserved
undefined 
NaN
Infinity




/*

                                                                                       
8b           d8                     88            88          88                       
`8b         d8'                     ""            88          88                       
 `8b       d8'                                    88          88                       
  `8b     d8' ,adPPYYba, 8b,dPPYba, 88 ,adPPYYba, 88,dPPYba,  88  ,adPPYba, ,adPPYba,  
   `8b   d8'  ""     `Y8 88P'   "Y8 88 ""     `Y8 88P'    "8a 88 a8P_____88 I8[    ""  
    `8b d8'   ,adPPPPP88 88         88 ,adPPPPP88 88       d8 88 8PP"""""""  `"Y8ba,   
     `888'    88,    ,88 88         88 88,    ,88 88b,   ,a8" 88 "8b,   ,aa aa    ]8I  
      `8'     `"8bbdP"Y8 88         88 `"8bbdP"Y8 8Y"Ybbd8"'  88  `"Ybbd8"' `"YbbdP"'  
                                                                                       
*/


var str = new String("") || "Hello world";
var num = 0,
  arr = new Array() || [0,"2",{}],
  obj = new Object() || { key: "value" },
  reg = new RegExp() || /^(.*?)$/,
        flag = true || false,
        und = undefined,
        fn = function(){};

// Only Arrays have order 



/*



                                                               
                                                         ad88  
  ,d                                                    d8"    
  88                                                    88     
MM88MMM 8b       d8 8b,dPPYba,   ,adPPYba,  ,adPPYba, MM88MMM  
  88    `8b     d8' 88P'    "8a a8P_____88 a8"     "8a  88     
  88     `8b   d8'  88       d8 8PP""""""" 8b       d8  88     
  88,     `8b,d8'   88b,   ,a8" "8b,   ,aa "8a,   ,a8"  88     
  "Y888     Y88'    88`YbbdP"'   `"Ybbd8"'  `"YbbdP"'   88     
            d8'     88                                         
           d8'      88                               





Value               Class      Type
-------------------------------------*/
typeof "foo"               String     string
typeof new String("foo")   String     object
typeof 1.2                 Number     number
typeof new Number(1.2)     Number     object
typeof true                Boolean    boolean
typeof new Boolean(true)   Boolean    object
typeof new Date()          Date       object
typeof new Error()         Error      object
typeof [1,2,3]             Array      object
typeof new Array(1, 2, 3)  Array      object
typeof new Function("")    Function   function
typeof /abc/g              RegExp     object (function in Nitro/V8)
typeof new RegExp("meow")  RegExp     object (function in Nitro/V8)
typeof {}                  Object     object
typeof new Object()        Object     object

"use strict";



/*


                                             
   ad88            88                        
  d8"              88                        
  88               88                        
MM88MMM ,adPPYYba, 88 ,adPPYba, 8b       d8  
  88    ""     `Y8 88 I8[    "" `8b     d8'  
  88    ,adPPPPP88 88  `"Y8ba,   `8b   d8'   
  88    88,    ,88 88 aa    ]8I   `8b,d8'    
  88    `"8bbdP"Y8 88 `"YbbdP"'     Y88'     
                                    d8'      
                                   d8'       


*/

console.log(true + 1); // outputs 2
console.log(true == 1); // outputs true
console.log(true === 1); // outputs false. true is not the number 1. 
console.log(false + 1); // outputs 1
console.log(false == 0); // outputs true
console.log(false === 0); // outputs false. false is not the number 0.

    false
    null
    undefined
    The empty string ''
    The number 0
    The number NaN (yep, 'Not a Number' is a number, it is a special number)

/*

                             88                   88                                
                             ""   ,d              88                                
                                  88              88                                
,adPPYba, 8b      db      d8 88 MM88MMM ,adPPYba, 88,dPPYba,   ,adPPYba, ,adPPYba,  
I8[    "" `8b    d88b    d8' 88   88   a8"     "" 88P'    "8a a8P_____88 I8[    ""  
 `"Y8ba,   `8b  d8'`8b  d8'  88   88   8b         88       88 8PP"""""""  `"Y8ba,   
aa    ]8I   `8bd8'  `8bd8'   88   88,  "8a,   ,aa 88       88 "8b,   ,aa aa    ]8I  
`"YbbdP"'     YP      YP     88   "Y888 `"Ybbd8"' 88       88  `"Ybbd8"' `"YbbdP"'  
                                                                                    
                                                                                   
*/

if(/anything truthy/){
  
}else if(condition){
  
}else{
  
}


switch(variable){

  case true:
      break;

  default:
      return true;

}



/*
                                                  
88                                                
88                                                
88                                                
88  ,adPPYba,   ,adPPYba,  8b,dPPYba,  ,adPPYba,  
88 a8"     "8a a8"     "8a 88P'    "8a I8[    ""  
88 8b       d8 8b       d8 88       d8  `"Y8ba,   
88 "8a,   ,a8" "8a,   ,a8" 88b,   ,a8" aa    ]8I  
88  `"YbbdP"'   `"YbbdP"'  88`YbbdP"'  `"YbbdP"'  
                           88                     
                           88                     



*/
var object = {
    a: 1,
    b: 2 
  },
  arr = [0,1,2];

for (var i = 0, u = arr.length; i < u; i++ ){
  // Do something arr[i]
}



var i = 0, u = 10;
while(i>u){
  // do stuff
  i++;
}



for( var key in object ) {
  var i = object[key];
  if (i==1)
    {
    continue;
    }
    // Do something
    if(i = 2){
      break;
    }
}




/*

                                                                                         
88888888888                                        88                                    
88                                           ,d    ""                                    
88                                           88                                          
88aaaaa 88       88 8b,dPPYba,   ,adPPYba, MM88MMM 88  ,adPPYba,  8b,dPPYba,  ,adPPYba,  
88""""" 88       88 88P'   `"8a a8"     ""   88    88 a8"     "8a 88P'   `"8a I8[    ""  
88      88       88 88       88 8b           88    88 8b       d8 88       88  `"Y8ba,   
88      "8a,   ,a88 88       88 "8a,   ,aa   88,   88 "8a,   ,a8" 88       88 aa    ]8I  
88       `"YbbdP'Y8 88       88  `"Ybbd8"'   "Y888 88  `"YbbdP"'  88       88 `"YbbdP"'  
                                                                                         
           
           Functions in JavaScript are first class objects. That means they can be passed around like any other value. One common use of this feature is to pass an anonymous function as a callback to another, possibly asynchronous function.                                                                              

*/


// Global functions
function foo (){}

// anonymous function
functionWithCallback(function(data){ });

// Self executing function
!function(w){  }(window);



var fn = function (arg1, arg2){
        if(arguments.length){
                console.log('hello', arguments);
        }       
        return this;
};
fn.prototype.init= function (argument) { console.log(this, argument);};
fn(1); 
fn(9).init(); // Reference Error
new fn(2);
new fn(3).init(4);










/*
                                  
        88          88            
  ,d    88          ""            
  88    88                        
MM88MMM 88,dPPYba,  88 ,adPPYba,  
  88    88P'    "8a 88 I8[    ""  
  88    88       88 88  `"Y8ba,   
  88,   88       88 88 aa    ]8I  
  "Y888 88       88 88 `"YbbdP"'  
                                  
How this Works

JavaScript has a different concept of what the special name this refers to than most other programming languages do. 
There are exactly five different ways in which the value of this can be bound in the language.
*/

// The Global Scope
this;
// Calling a Function
foo();
// Both refers to global object.
/*ES5 Note: In strict mode, the global case no longer exists. */ undefined 

//Calling a Method
test.foo(); 
// In this example, this will refer to test.

// Calling a Constructor
new foo(); 
// A function call that is preceded by the new keyword acts as a constructor.
// Inside the function, this will refer to a newly created Object.

//Explicit Setting of this
function foo(a, b, c) { this.a = a; console.log(this, a,b,c);}
var bar = {};
foo.apply(bar, [1, 2, 3]); // array will expand to the below
foo.call(null, 2, 3, 4); // results in a = 1, b = 2, c = 3





/*

                                                           
            88            ad88            88 88            
            ""   ,d      d8"              88 88            
                 88      88               88 88            
8b,dPPYba,  88 MM88MMM MM88MMM ,adPPYYba, 88 88 ,adPPYba,  
88P'    "8a 88   88      88    ""     `Y8 88 88 I8[    ""  
88       d8 88   88      88    ,adPPPPP88 88 88  `"Y8ba,   
88b,   ,a8" 88   88,     88    88,    ,88 88 88 aa    ]8I  
88`YbbdP"'  88   "Y888   88    `"8bbdP"Y8 88 88 `"YbbdP"'  
88                                                         
88      


*/

var open = function(){
  console.log(this)
};















// Anonymous selfexecuting functions
(function(){

  var hello = function(){};
  var open = function(){};
  hello();
  open();

}());
hello(); // Reference Error
















for(var i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i);  
    }, 1000);
}






















for(var i = 0; i < 10; i++) {
    (function(e) {
        setTimeout(function() {
            console.log(e);  
        }, 1000);
    })(i);
}






/*

                                                                    
   88   ,ad8888ba,                                                  
   ""  d8"'    `"8b                                                 
      d8'        `8b                                                
   88 88          88 88       88  ,adPPYba, 8b,dPPYba, 8b       d8  
   88 88          88 88       88 a8P_____88 88P'   "Y8 `8b     d8'  
   88 Y8,    "88,,8P 88       88 8PP""""""" 88          `8b   d8'   
   88  Y8a.    Y88P  "8a,   ,a88 "8b,   ,aa 88           `8b,d8'    
   88   `"Y8888Y"Y8a  `"YbbdP'Y8  `"Ybbd8"' 88             Y88'     
  ,88                                                      d8'      
888P"                                                     d8'       

*/

// Global namespace
// For easier crossbrowser javascript

/*

                     88                                                                
                     88                         ,d                                     
                     88                         88                                     
,adPPYba,  ,adPPYba, 88  ,adPPYba,  ,adPPYba, MM88MMM ,adPPYba,  8b,dPPYba, ,adPPYba,  
I8[    "" a8P_____88 88 a8P_____88 a8"     ""   88   a8"     "8a 88P'   "Y8 I8[    ""  
 `"Y8ba,  8PP""""""" 88 8PP""""""" 8b           88   8b       d8 88          `"Y8ba,   
aa    ]8I "8b,   ,aa 88 "8b,   ,aa "8a,   ,aa   88,  "8a,   ,a8" 88         aa    ]8I  
`"YbbdP"'  `"Ybbd8"' 88  `"Ybbd8"'  `"Ybbd8"'   "Y888 `"YbbdP"'  88         `"YbbdP"'  
                                                                                       
*/

// Collection . action
$('#id, .class, div > p').hide();
// Chainable
$('#id, .class, div > p').hide().bind('click', clickHandler);


/*

                                                                                                                                                  
                                                                                     88                               88                          
                                                                                     ""                         ,d    ""                          
                                                                                                                88                                
 ,adPPYba,  ,adPPYba,  88,dPYba,,adPYba,  88,dPYba,,adPYba,  88       88 8b,dPPYba,  88  ,adPPYba, ,adPPYYba, MM88MMM 88  ,adPPYba,  8b,dPPYba,   
a8"     "" a8"     "8a 88P'   "88"    "8a 88P'   "88"    "8a 88       88 88P'   `"8a 88 a8"     "" ""     `Y8   88    88 a8"     "8a 88P'   `"8a  
8b         8b       d8 88      88      88 88      88      88 88       88 88       88 88 8b         ,adPPPPP88   88    88 8b       d8 88       88  
"8a,   ,aa "8a,   ,a8" 88      88      88 88      88      88 "8a,   ,a88 88       88 88 "8a,   ,aa 88,    ,88   88,   88 "8a,   ,a8" 88       88  
 `"Ybbd8"'  `"YbbdP"'  88      88      88 88      88      88  `"YbbdP'Y8 88       88 88  `"Ybbd8"' `"8bbdP"Y8   "Y888 88  `"YbbdP"'  88       88  
                                                                                                                                                  
                                                                                                                                                  

*/


$.ajax({url: '/hello', success: function(){}});
$.get('/hello', callback);
$.post('/hello', {data: 1}, callback);
$.getJSON('/hello', callback);
$(selector).load(url, callback);



/*

                                                                                        
                                                                                     88  
  ,d                                                                                 88  
  88                                                                                 88  
MM88MMM 8b,dPPYba, ,adPPYYba, 8b       d8  ,adPPYba, 8b,dPPYba, ,adPPYba, ,adPPYYba, 88  
  88    88P'   "Y8 ""     `Y8 `8b     d8' a8P_____88 88P'   "Y8 I8[    "" ""     `Y8 88  
  88    88         ,adPPPPP88  `8b   d8'  8PP""""""" 88          `"Y8ba,  ,adPPPPP88 88  
  88,   88         88,    ,88   `8b,d8'   "8b,   ,aa 88         aa    ]8I 88,    ,88 88  
  "Y888 88         `"8bbdP"Y8     "8"      `"Ybbd8"' 88         `"YbbdP"' `"8bbdP"Y8 88  
                                                                                         
 

*/ 
$(this).siblings()
$(this).children()
$(this).find('a')
$(this).closest()
$(this).parent()
$(this).parents()

/*
                                                                
                         ,d                              ,d     
                         88                              88     
 ,adPPYb,d8  ,adPPYba, MM88MMM    ,adPPYba,  ,adPPYba, MM88MMM  
a8"    `Y88 a8P_____88   88       I8[    "" a8P_____88   88     
8b       88 8PP"""""""   88        `"Y8ba,  8PP"""""""   88     
"8a,   ,d88 "8b,   ,aa   88,      aa    ]8I "8b,   ,aa   88,    
 `"YbbdP"Y8  `"Ybbd8"'   "Y888    `"YbbdP"'  `"Ybbd8"'   "Y888  
 aa,    ,88                                                     
  "Y8bbdP"                                                      

*/
$(this).text()
$(this).html()
$(this).height()
$(this).width()
$(this).css('background-color')

/*
                                                                                                                       
                                          88                         88                    88                          
                                          ""                         88              ,d    ""                          
                                                                     88              88                                
88,dPYba,,adPYba,  ,adPPYYba, 8b,dPPYba,  88 8b,dPPYba,  88       88 88 ,adPPYYba, MM88MMM 88  ,adPPYba,  8b,dPPYba,   
88P'   "88"    "8a ""     `Y8 88P'   `"8a 88 88P'    "8a 88       88 88 ""     `Y8   88    88 a8"     "8a 88P'   `"8a  
88      88      88 ,adPPPPP88 88       88 88 88       d8 88       88 88 ,adPPPPP88   88    88 8b       d8 88       88  
88      88      88 88,    ,88 88       88 88 88b,   ,a8" "8a,   ,a88 88 88,    ,88   88,   88 "8a,   ,a8" 88       88  
88      88      88 `"8bbdP"Y8 88       88 88 88`YbbdP"'   `"YbbdP'Y8 88 `"8bbdP"Y8   "Y888 88  `"YbbdP"'  88       88  
                                             88                                                                        
                                             88                                                                        

*/ 
$(this).appendTo(target);
$(this).prependTo(target);
$(this).insertBefore(target);
$(this).insertAfter(target);
$(this).detach(target);
$(this).empty(target);

/*
                                                                
                                               ,d               
                                               88               
 ,adPPYba, 8b       d8  ,adPPYba, 8b,dPPYba, MM88MMM ,adPPYba,  
a8P_____88 `8b     d8' a8P_____88 88P'   `"8a  88    I8[    ""  
8PP"""""""  `8b   d8'  8PP""""""" 88       88  88     `"Y8ba,   
"8b,   ,aa   `8b,d8'   "8b,   ,aa 88       88  88,   aa    ]8I  
 `"Ybbd8"'     "8"      `"Ybbd8"' 88       88  "Y888 `"YbbdP"'  
                                                                

*/
// To exactly these elements
$(element).bind('event', handler);
$(element).unbind('event', handler);

// To existing and future elements
$(element).live('event', handler);
$(element).die('event', handler);


/*
                                                              
                    88 88 88         88                       
              ,d    "" 88 ""   ,d    ""                       
              88       88      88                             
88       88 MM88MMM 88 88 88 MM88MMM 88  ,adPPYba, ,adPPYba,  
88       88   88    88 88 88   88    88 a8P_____88 I8[    ""  
88       88   88    88 88 88   88    88 8PP"""""""  `"Y8ba,   
"8a,   ,a88   88,   88 88 88   88,   88 "8b,   ,aa aa    ]8I  
 `"YbbdP'Y8   "Y888 88 88 88   "Y888 88  `"Ybbd8"' `"YbbdP"'  

*/ 
$.extend({a: 1}, {b: 2}); // returns {a:1, b:2}

// Waiting for document ready
$(document).ready(function(){});
$(function(){});


/*

                                                                                                                       
88888888888                                                    88            88          88 88 88                      
88                        ,d                                   88            88          "" 88 ""   ,d                 
88                        88                                   88            88             88      88                 
88aaaaa     8b,     ,d8 MM88MMM ,adPPYba, 8b,dPPYba,   ,adPPYb,88 ,adPPYYba, 88,dPPYba,  88 88 88 MM88MMM 8b       d8  
88"""""      `Y8, ,8P'    88   a8P_____88 88P'   `"8a a8"    `Y88 ""     `Y8 88P'    "8a 88 88 88   88    `8b     d8'  
88             )888(      88   8PP""""""" 88       88 8b       88 ,adPPPPP88 88       d8 88 88 88   88     `8b   d8'   
88           ,d8" "8b,    88,  "8b,   ,aa 88       88 "8a,   ,d88 88,    ,88 88b,   ,a8" 88 88 88   88,     `8b,d8'    
88888888888 8P'     `Y8   "Y888 `"Ybbd8"' 88       88  `"8bbdP"Y8 `"8bbdP"Y8 8Y"Ybbd8"'  88 88 88   "Y888     Y88'     
                                                                                                              d8'      
 

*/





$.callToBeCalledFromGlobalAnywhere = function(){};
// $.newPlugin() can be called from anywhere after this

$.fn.functionToBeEnabledInChainingPrototype = function(){
  $(this).each(function(){
      // Do whatever  
  });
  return this;
};



















