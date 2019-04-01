---
title: Just Enough JS
layout: post
---

# justenough.js

## What do you find different between Ruby and JS?

- Syntax: no `do end`, we pass functions around
- Unlike in Ruby, in JS you ALWAYS need to call functions with `()`
- Curly braces everywhere `{}`
- Use of backticks > ` < to interpolate
- JS >> `${variable}` Ruby >> "#{variable}"
- using `let` `const` to declare variables
- camelCaseAllTheThings instead of snake_casing
- way fewer methods, build your own thing

## Outline

```text
   5m  | Introduction to "Just Enough JS"
   15m | DOM Overview
   25m | Modifying The DOM
   15m | Activity
  ----|----
  60m | Total
```

### Prework

* https://github.com/learn-co-curriculum/fewpjs-fewp-example
* https://github.com/learn-co-curriculum/fewpjs-stitching-together-the-three-pillars
* https://github.com/learn-co-curriculum/fewpjs-introducing-the-dom-and-just-enough-javascript
* https://github.com/learn-co-curriculum/fewpjs-changing-the-dom-with-dev-tools-and-javascript
* https://github.com/learn-co-curriculum/fewpjs-js-fundamentals-variables
* https://github.com/learn-co-curriculum/fewpjs-js-fundamentals-variables-lab
* https://github.com/learn-co-curriculum/fewpjs-js-fundamentals-calling-methods

### Prework learning goals

* Describe the difference between front-end and back-end web programming
* Describe the Document Object Model as a tree of objects
* Identify a specific DOM element using the DevTools
* Define querySelector
* Identify DOM elements using querySelector methods
* Use querySelector methods to assign an element to a variable
* Identify when a method returned a single element vs. a collection
* Use a querySelector methods to retrieve data from a DOM node

### Lesson learning goals

* Use document methods to insert and remove DOM notes programmatically
* Create and edit DOM nodes programmatically
* Use different querySelectors to select single or multiple elements
* Implement an application that updates DOM elements based on user behavior
* Determine when to target single vs. multiple elements of the DOM
* Identify pain points with imperatively manipulating the DOM

### Common Misconceptions

* How server-side and client-side code interact with each other
* Where to find JS documentation


### Problem statement
> You've built a Rails application where users can manage a personal library. As a user, I can Create, Read, Update, and Delete Books. The functionality works, but the application isn't very interactive. Each click means an entire page refresh, and there's not much feedback for users as they navigate around the page.


### Activation
> Welcome to JavaScript! Today's lesson will be an exploration of what's possible in JS. Before we get started, take a few minutes to discuss the following with your partner.

> What are some of your favorite web applications? What are some of the features that make them work really well?

## Lesson

### Just Enough JS (5 minutes)

[Starter Code])(https://github.com/learn-co-curriculum/lectures-starter-code/pull/32)

* Our goal for this lesson is to give you a foundation of just enough JavaScript to build an interactive web application. Take a look at this book lister application.
* It functions well enough, but it's not very interactive. We just discussed some things make web applications really cool.
* In order to implement those types of things, it would be nice if we had a programming language that could actually run in our web browser. Luckily, we do!
* Unlike most other programming languages, JS has an interpreter that ships inside of every modern web browser. This means that we can write JS code to interact with our users.

### DOM Overview (15 minutes)

#### Demonstration (10 minutes)

* Let's look now at The Document Object Model, or the DOM.
* What is the DOM?
  * Object-oriented representation of the webpage which allows programs to manipulate the properties and contents on the page
  * When HTML is compiled, the DOM is created based on that HTML
  * Javascript is a language created to manipulate the DOM
  * Show image representing how the DOM is organized.

* Brief tour of Developer Tools
  * Open the Dev Tools by right-clicking on the page and selecting 'View Page Source' from the context menu
  * View DOM in the 'Elements' tab
    * Show that HTML is directly editable in the main panel
    * Show 'Styles' tab to view and manipulate CSS
    * Show pointer feature to find elements by hovering over the DOM
  * JS Console
    * If they haven't seen it already, show them how the console works

#### Application (5 minutes)

* When our browser, the client, makes a request to the server, what happens?
  * Our server sends back a response.
  * In this case, contains HTML, CSS, and potentially JS code.
  * When our browser loads the HTML and CSS, creates a tree to represent all of those elements. This is the DOM
  * We can access this at the top level on the `document`. The document is a JavaScript Object with methods to allow us to Create, Read, Update, and Delete elements in our web app.
  * **Note** We're not going to go too far into JS objects during this lesson. Remember, we're learning "just enough JS"

### Modifying DOM Nodes (20 minutes)

#### Demonstration (5 minutes)

* We can select individual DOM nodes and save them to a variable. In JavaScript, we declare our variables using a keyword.
  * This let's the interpreter know what type of variable we want to use.
  * `const` is for constants - these are things that can't be reassigned.
  ```js
  const name = 'Ian'
  name = "Bob" // throws an error
  ```
  * `let` is for variables that can be reassigned.
  ```js
  let name = 'Ian'
  name = 'Bob' // No Problem
  name // => 'Bob'
  ```
  * A general good rule of thumb is to use `const` for everything, unless you need to reassign that variable. `let` is a good signal to other developers that the value could change over time.

* Now, let's select a DOM node and save it to a variable.
`const bodyElement = document.querySelector('body')`
* Let's break down what's happening here.
  * We're declaring a constant using `const` called `bodyElement`
  * Per JS convention, we're using lowerCamelCase for our variable names.
  * We're calling the document object, provided to us by the Browser API
  * The document has a method called `querySelector`. Like many other languages, JS allows us to call methods on objects.
  * Methods are simply pre-package behavior. We can execute the behavior using `()`. In this case, `querySelector` takes an argument of a string.
  * **Note** Again, not going too deep into methods here. It might be funny to say "Hashtag JustEnoughJS here"
* The element that we've selected here is the entire body. That's not super interesting, but we can be more specific using CSS selectors.
* To quickly touch on CSS Selectors
  * Individual selectors
    * Class `.class`
    * ID `#id`
    * Tag `div`
  * Combining Selectors
    * Space between `#parent .child`
    * Chain `div.image.highlighted`
  * Chain CSS selectors to get greater specificity

#### Application (5 minutes)

* We can use the following methods on the document
* Notice that some methods return more that one element in a list. We can access those by index, ordered from 0 to the length of the list - 1.

  ```js
  document.querySelector('#unique-element')
  document.querySelectorAll('.some-shared-class')
  document.getElementsByTagName('body')[0]
  document.getElementById('unique-element')
  document.getElementsByClassName('some-shared-class')
  ```

#### Check for Understanding (5 minutes)

* So, our list of books is a `ul` with an id of `book-list`
* Two minute quick quiz: With a partner, using what we've learning so far, how would we do the following?
  * Create a variable called `bookList`, that cannot be overwritten, pointing to our unordered list?


#### Application (10 minutes)
* So, given our booklist now: `const bookList = document.querySelector('ul#book-list')`
* We can changing attributes `bookList.style.backgroundColor = red`
* We can also change what items are rendered.
  * `booklist.innerHTML = '<li>My Great Book</li>'`
* We can delete elements `document.removeChild(bookList)`
* Whoops, now we've deleted our bookList. Don't worry, we can re-create it as well
* We can instantiate new elements using: `const element = document.createElement('ul')`
* Adding attributes to elements `element.id = 'book-list'`
* Appending to node `document.body.appendChild(element)`

### Activity (15 minutes)
Students will go to their favorite websites and modify the DOM programmatically. Wikipedia and Twitter are good examples. During this time, circulate the room and check in with the different groups to see how they are comprehending the material.

* Students should:
  * Select elements and save them to variables
  * Delete at least 2 elements
  * Modify elements (e.g., replace image url, change text, change CSS)
  * Create new elements and add to page

* Encourage students to think programmatically about the DOM by giving them problems that involve iteration and the use of multiple CSS selectors
  * Change all instances of one word
  * Replace all images on only a certain portion of the DOM
  * Change every other header
  * Bonus (Hard): replace all elements of one tag to another (e.g., `p` to `h1`)
