Text and Fonts
  Font-Family: Lets you select a font for different elements
  Font-Size:  Lets you set the size of the font for a particluar element (either in pixels or in ems, which are dynamic)
    Example:
    h1 {
      font size: 2.0em;
    }
  Font-Weight: How bold or lightweight a font is
  Line Height: Line spacing on the page
  Text-Align:  Left, center, right
  Text-Decoration: Underline, Strikethrough (line-through), Overline

Google Fonts  
  fonts.google.com
  Use the search bar
  Click the red circle plus sign
  Click the grey tab that appears in lower right corner
  Click Customize to select any needed options
  Click embed tab adn copy link beneath the standard option
  Paste this in the head of the HTML BEFORE the link to the CSS file

Box Model in CSS
  Every element has a rectangular box around it
    Content (blue in chrome inspect)
      Can change the width of elements using the width property
        Example:
          p {
            width: 200px;
          }
      Can also use percentages for width and height (responsive) and is based off of a percentage of the parent element.
    Padding(green in chrome inspect)-Space between text and border (inside box)
      Can use padding property to add it to all 4 sides or can specify top, bottom, left, or right
    Border
    Margin (orange in chrome inspect)-Space between border on edge of box (outside box)
      Margin used to space elements (like paragraphs)
      Can be specific to a side of box or in general
        Can use just margin property and then 4 values if we want specific values that are different
        Example:
          margin: top, right, bottom, left;
        Margin auto will center the content for us

Float in CSS allows divs to go from being stacked (because they are block level) into forming a grid.
