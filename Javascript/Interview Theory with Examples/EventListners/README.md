# JavaScript Event Listeners

This repository contains examples and practice questions to help you understand and master JavaScript event listeners.

## Table of Contents

- [Examples](#examples)
  - [Click Event](#click-event)
  - [Mouse Events](#mouse-events)
  - [Keyboard Events](#keyboard-events)
  - [Form Events](#form-events)
  - [Window Events](#window-events)
  - [Double Click Event](#double-click-event)
  - [Context Menu Event](#context-menu-event)
  - [Focus and Blur Events](#focus-and-blur-events)
  - [Drag and Drop Events](#drag-and-drop-events)
  - [Media Events](#media-events)
- [Practice Questions](#practice-questions)

## Examples

### Click Event

[Source Code](examples/click-event.html)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Click Event</title>
</head>
<body>
    <button id="click-me">Click Me!</button>

    <script>
        document.getElementById('click-me').addEventListener('click', function() {
            alert('Button was clicked!');
        });
    </script>
</body>
</html>
