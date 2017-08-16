DOM Manipulation
  When using JS to manipulate HTML, be sure to add the JS script code at the bottom of the HTML document before the </body> tag
  DOM: Document Object Model
    The interface between JS and HTML/CSS

Select and Manipulate
  Select means you grab an HTML object (using .querySelector perhaps)
  Manipulate means you run some JS code on that Object

  DOM Selectors
    1.  document.getElementById()
    2.  document.getElementsByClassName()
    3.  document.getElementsByTagName()
    4.  document.querySelector() - Uses a CSS style selector to select an element (# for id and . for class) and it only returns the first one
    5.  document.querySelectorAll() - Returns all matching elements (instead of just 1)

  DOM Manipulation
    1. Style property = .Style  
      .color, .border, .fontSize
      Remember to pass in as strings (this isn't CSS)
      -This is a good way to make the HTML interactive (otherwise use the CSS file)
      -A better way is to use a CSS class to add in the styles and let JS turn these on and off (.add, .remove, .toggle)
    2. Text Content - Retrieve the text in between HTML tags or change the text and/or change the text = .textContent
    3. .innerHTML = returns all of the HTML inside
    4. Attributes = getAttribute() and setAttribute()
      -Change any attribute on a webpage
    Use srcset and not src
    5.
