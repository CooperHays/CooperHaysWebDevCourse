Functions in JS:
  Reusable bits of "code"
  Syntax for functions is:
    function functionname () {
      //insert code here;
    }
    To execute the function, type in the name of the function with () at the end
    If you don't use the (), then it just returns all of the code.

Arguments in JS:
  Functions that take inputs
  The arugment is a name that goes inside the () after the function name - Think of it as a variable that is user defined
  You can have multiple arguments for a function

Return Keyword in JS:
  Console.log only prints to the console, but you can't capture the output
  To capture the output, use return() and not console.log
  You can also store return values inside of variables
  A return value will stop the execution of the function
  The function declaration is how we have been coding the fucntion
  A function expression is when a var is declared as a function

  JS Scope:
    The context that the code is executed in
    Functions have their own scope or context (variables inside of function may have a different context than outside of function)
    You can reference variables outside of function (parent) in a function but cannot reference variables inside of function (child) outside of function.

  Set Interval:
    A way to have a function repeat itself every time interval
    Example setInterval(function name, interval in milisec)
    Can also use an anonymous function where the function is not defined ahead of time, but is coded inside the setInterval and is only used there.
