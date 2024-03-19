Display Property
Block Level vs. Inline Level Elements
Block Level: Elements like <div> and <p> occupy the entire width available to them and appear on separate lines.
Inline Level: Elements like <span> and <button> only occupy the space bounded by their content and do not force new lines.
However, if an inline-level element is given display: inline, it may break into a new line if there isn't enough horizontal space.


Box Model
Understanding Padding, Margin, and Borders
Padding: Space between the element's content and its border, i.e., inside the border.
Margin: Space outside the element's border, affecting its positioning concerning other elements.
Border: Boundary of the element.
When specifying dimensions for an element (e.g., height and width), note that these dimensions exclude padding, margin, and border. For example, if an element has 100px height and width, 10px border, and 10px margin, the total space it occupies will be 120px.


Margin Overlapping
If multiple elements have the same margin and are adjacent to each other, their margins may overlap.
Alternatively, if one element has a larger margin than the other, it will occupy more space.


Box Sizing Property
Content Box: By default, dimensions (width and height) apply only to the content area.
Border Box: When set, dimensions include padding and border but not margin.


Positioning
Static: Default positioning, elements follow the normal flow of the document.
Relative: Positioned relative to its normal position.
Absolute: Positioned relative to the nearest positioned ancestor.
Fixed: Remains in a fixed position on the screen, unaffected by scrolling.
Sticky: Initially positioned according to the normal flow, but then "sticks" in place when the viewport is scrolled to a specific point.
For position: sticky to work, the parent element must have a defined height or details about where it should "stick." Additionally, it's crucial to note that elements with position: relative or position: fixed create a new stacking context, affecting how elements are layered on top of each other.






