
CSS - Cascade Style Sheet

CSS stands for Cascading Style Sheets, where "cascade" refers to the process of styles being applied in a particular order, with later styles potentially overwriting earlier ones.

Types of CSS:

Inline CSS: Styles injected directly inside HTML tags.
Internal CSS: HTML and CSS reside in the same file.
External CSS: CSS is stored in a separate file and linked to the HTML document.
Cascade Order:
The order of precedence for CSS rules is as follows:

Inline CSS (applied directly inside HTML tags)
Internal CSS (within the <style> tag in the HTML file)
External CSS (linked CSS file)
Overriding Styles:
To ensure a property is applied regardless of the cascade order, you can use !important after the property value.

Selectors:
ID: Unique identifier for an element.
Class: Common identifier for multiple elements.
Approach:
CSS is typically implemented using a top-down approach, where styles are defined from general to specific.

Using Multiple Classes:
It's possible to apply multiple classes to the same element simultaneously.

Style Preference:
When conflicts occur, the preference of style application is as follows:

!important
Inline styles
ID selectors
Class selectors
Tag (element) selectors