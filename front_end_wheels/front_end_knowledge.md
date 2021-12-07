// What is event bubbling?
Event Propagation
From the window to the event target parent: this is the capture phase
The event target itself: this is the target phase
From the event target parent back to the window: the bubble phase


// Event Delegation
Capturing and bubbling allow us to implement one of most powerful event handling patterns called event delegation.
The idea is that if we have a lot of elements handled in a similar way, then instead of assigning a handler to each of them 
– we put a single handler on their common ancestor.


// Calback vs Promises
Callback is the function passed to another async function, and it will run after the async function is finished
Promise is an object wrapping the callback function and it will get resolved based on different situation failed or success to execute that function
depends on users need.

// Class Inheritance vs Prototype Inheritance
Class Inheritance: A class is like a blueprint 
— a description of the object to be created. 
Classes inherit from classes and create subclass relationships: hierarchical class taxonomies.
Prototypal Inheritance: A prototype is a working object instance. Objects inherit directly from other objects.


// CSS preprocessors
Cleaner code with reusable pieces and variables
Saves you time
Easier to maintain code with snippets and libraries
Calculations and logic
More organized and easy to setup
Sass is based on Ruby and Less is based on Node.js


// GET vs POST
POST requests are never cached
POST requests do not remain in the browser history
POST requests cannot be bookmarked
POST requests have no restrictions on data length


// Website Accessibility
Good Semantics, makes sure your HTML Markup is using properly, clear language and page layouts
One key aspect of the accessibility of UI controls is that by default, browsers allow them to be manipulated by the keyboard(Like divs for buttons)
Text labels
By default, links are visually different from other text in both color and text-decoration, with links being blue and underlined by default, purple and underlined if visited, and with a focus-ring when they receive keyboard focus. 

Color should not be used as the sole method of distinguishing links from non-linking content. Link text color, like all text, has to be significantly different from the background color (a 4.5:1 contrast). In addition, links should visually be significantly different from non-linking text. With a minimum contrast requirement of 3:1 between link text and surrounding text and between default, visited, and focus/active states and a 4:5 contrast between all those state colors and the background color.
