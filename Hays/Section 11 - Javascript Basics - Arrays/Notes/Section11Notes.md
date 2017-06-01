Arrays: Groups of data listed together - Puts the data in a list
  Example:  Keep track of friends and their phone numbers

Arrays are indexed starting at 0 and are used with [] and are comma separated

Array Methods:
  Push - Add to the end of an Array
    arrayName.push("what you are adding in");
  Pop - Remove the last item in the array
    arrayName.pop();
  Unshift - Add to the front of an Array
    arrayName.unshift("what youre adding");
  Shift - Remove the first element of the array
    arrayName.shift();
  IndexOf - Find the index of an item in an array
    arrayName.indexOf("item")
    A return of -1 means item is not in array
  Slice - Copy parts of an array  
    arrayName.slice(Start index, End Index-Not included);
  Splice - A method to cut out part of an array not at the front or end
    arrayName.splice(start index, how many to cut out);

Array Iteration:
  You can use a for loop to iterate an array.  Use the .length property to make this work

  ForEach-The best way of iterating over an Array
