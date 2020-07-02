# BasicToDoList

The todo list has the features to input new todo list item.

For each list item, it has the features to move up, move down, and revmove itself. 

To allow these buttons to trigger events, you utilize the technique of event bubbling by adding event listener to its parent element/ closest element in the DOM tree.

To remove the list item:
You target the remove button as event target and remove its `parentElement` -- `li`

To move up or down element, you utilize the `previousElementSibling` & `nextElementSibling` properties, and the `insertBefore` method, which takes a `newElement` and a `referenceElement` as function input on the parent element.

Additional Lesson:
generally using `+=` with `.innerHTML` can cause problems. There are better ways, for example using `.insertAdjacentHTML()`.
