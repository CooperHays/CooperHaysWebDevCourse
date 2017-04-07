CSS is the adjectives of the webpage-Describe how it looks
These are separate documents inserted into html
  This allows the HTML to be just the framework and the CSS to be the dressing
CSS Zen Garden shows you how powerful CSS can be
CSS General Rule
  selector {
    propery: value;
    another property: value;
  }

Example:
  h1 {
    color: purple;
    font-size: 56px;
  }

Style Tag insert in the head tag (this is a bad idea however because it is still in the HTML file (good for debugging and you delete after). Use a link tag instead)
To comment out something in CSS, use /* at the start and the reverse at the end

CSS Colors
  Names: colours.neilorangepeel.com
  Hexadecimal: use a colorpicker
  RGB: (red, green, blue) the numbers range from 0-255
    This is similar to Hexadecimal
  RGBA: Similar to RGB and introduces an Alpha (transparency 0-1) channel

  CSS background
    Example:
      h4 {
        background: color;
      }

  CSS Borders
    Have three elements (color, width, style)-Most have all 3
    Can use all three or just use the following syntax:
      border: width style color;

  CSS Selectors
    Element-Selects ALL of that element in an HTML file
    ID-A hook to separate a specific element you want to style  
      Add this as an attribute in HTML id="any name" in the HTML file and in the CSS file use #id name
      The id tag can only be used once in an HTML file
    Class-Similar to ID but can used with any number of elements (not just one like with ID)
      Add this as an attribute in HTML class="any name" in the HTML file and in the CSS file use .class name

Chrome Inspector
  Right click on file and choose Inspect
    This allows you to see how the code is working on the page.  I can edit in inspector but it does not change file.  A good way to make temporary changes to easily see their effect first.
  It is also a good way to inspect the code on other sites.  How did they do something?  How can I replicate the effect on my own site?

  CSS Advanced Selectors
    Star-Selects everything on the page
      * {}
    Descendant Selector-Selects all descendants of a particular element
      li a {}
    Adjacent Selector-Selects an element that comes after an element on the same level
      h4 + ul {}
    Attribute Selector-Selects all of a particular attribute
      a[href=""] {}
    Nth of Type-Selects a particular element
      ul:nth-of-type(3) {}

Inheritance in CSS
  Children inherit from their parent

Specificity in CSS
  The most specific selector wins out
  Think order of operations.  Work inside out
  Look at MDN article on Specificity
  Can use online specificity calculator to see 
