# Responsive CSS and Flexbox Guide

## Introduction

This guide provides an overview of using responsive CSS techniques and Flexbox properties to create flexible and adaptive layouts for web development.

## Flexbox

Flexbox is a powerful layout model in CSS that allows you to design flexible and responsive layouts with ease.

### Centering a Div

To center a `div` element horizontally and vertically using Flexbox, you can use the following CSS properties:

```css
.parent {
    display: flex;
    justify-content: center;
    align-items: center;
}

Spacing and Alignment
Use the gap property to add spacing between flex items.
justify-content property can be set to space-between, space-around, or space-evenly for distributing space between and around flex items.
flex property or flex-grow can be used to specify the growth factor of a flex item.
Flex Direction and Ordering
By default, the flex-direction property is set to row, but it can be changed to column, row-reverse, or column-reverse.
The order property can be used to change the order of flex items. Items with a lower order value are rendered first.
Aligning Individual Items
Use align-self property to override the alignment set by the parent for individual flex items.
Media Queries
Media queries allow you to apply specific CSS rules based on the characteristics of the device, such as screen size and orientation. This enables you to create responsive designs that adapt to different screen sizes.

Example of using a media query to change CSS based on screen size:

@media screen and (max-width: 768px) {
    /* CSS rules for screens with a maximum width of 768 pixels */
    .example {
        /* Example CSS */
    }
}
