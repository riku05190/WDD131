# WDD 131 - Web Frontend Development Study Guide & Reference

This repository contains learning projects, exercises, and reference notes for **WDD 131: Dynamic Web Fundamentals**. Below is a comprehensive reference sheet covering HTML metadata, CSS selectors and layouts, JavaScript fundamentals, DOM manipulation, event handling, and ARIA accessibility standards.

---

## Table of Contents

1. [HTML Metadata & Semantic Elements](#1-html-metadata--semantic-elements)
   - [Meta Tags](#meta-tags)
   - [Favicon](#favicon)
   - [Dialog Element (`<dialog>`)](#dialog-element-dialog)
2. [CSS Selectors, Combinators & Styling](#2-css-selectors-combinators--styling)
   - [CSS Selectors](#css-selectors)
   - [CSS Combinators](#css-combinators)
   - [Pseudo-Class Selectors](#pseudo-class-selectors)
   - [CSS Transform & Transitions](#css-transform--transitions)
   - [CSS Positioning (`position`)](#css-positioning-position)
3. [Responsive Web Design](#3-responsive-web-design)
   - [Mobile-First Design](#mobile-first-design)
   - [Media Queries](#media-queries)
   - [Responsive Navigation & CSS Grid](#responsive-navigation--css-grid)
4. [JavaScript Fundamentals](#4-javascript-fundamentals)
   - [Variables (`let`)](#variables-let)
   - [Constants (`const`)](#constants-const)
   - [Scope (Global vs. Block)](#scope-global-vs-block)
   - [Functions & Conditionals](#functions--conditionals)
   - [Compound Conditionals & Comparison Operators](#compound-conditionals--comparison-operators)
   - [String Method: `.replace()`](#string-method-replace)
   - [String Method: `.trim()`](#string-method-trim)
   - [Template Literals](#template-literals)
   - [JavaScript Objects](#javascript-objects)
   - [Array Methods (`.forEach`, `.map`, `.filter`, `.reduce`, `.indexOf`, `Array.from`)](#array-methods)
5. [DOM Manipulation & Events](#5-dom-manipulation--events)
   - [Selecting Elements (`querySelector`, `getElementById`)](#selecting-elements)
   - [Attributes & Text Content (`setAttribute`, `textContent`, `value`)](#attributes--text-content)
   - [Inline Styles & Class Management (`style`, `className`, `classList`)](#inline-styles--class-management)
   - [Event Listeners, `.preventDefault()`, & Event Parameter](#event-listeners-preventdefault--event-parameter)
   - [Form Reset (`.reset()`)](#form-reset-reset)
   - [Form Validation & Dynamic Fields](#form-validation--dynamic-fields)
6. [ARIA (Accessible Rich Internet Applications)](#6-aria-accessible-rich-internet-applications)
7. [Instructor Feedback & Course Best Practices](#7-instructor-feedback--course-best-practices)
   - [Code Formatting & Readability Standards](#code-formatting--readability-standards)
   - [Week 1: Mission Statement Feedback](#week-1-mission-statement-feedback)
   - [Week 3: Cool Pics Part One Feedback](#week-3-cool-pics-part-one-feedback)
   - [Mobile-First CSS Anti-Patterns to Avoid](#mobile-first-css-anti-patterns-to-avoid)

---

## 1. HTML Metadata & Semantic Elements

### Meta Tags
The `<meta>` tag defines metadata (information about the HTML document).
- **Placement**: Always placed inside the `<head>` element.
- **Purpose**: Specifies character set, page description, author, viewport settings for responsive design, SEO keywords, etc.
- **Display**: Metadata is interpreted by browsers and search engines, not rendered directly on the visible webpage.

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="An in-depth guide to HTML meta tags.">
  <meta name="author" content="Jane Doe">
  <title>Document Title</title>
</head>
```

### Favicon
A favicon is a small image displayed next to the page title in the browser tab.
- **Dimensions**: The image will be quite small and square. Size can range from 16x16 pixels to 64x64 pixels.
- **Naming**: A common name for the favicon image is `'favicon.ico'`.

```html
<link rel="icon" type="image/x-icon" href="images/favicon.ico">
```

### Dialog Element (`<dialog>`)
The HTML `<dialog>` tag represents a modal popup or subwindow.
- **Hidden by default**: The browser hides dialog elements until triggered.
- **Native Methods**: Use `.showModal()` to display as a backdrop modal and `.close()` to dismiss.

```html
<dialog id="favDialog">
  <form method="dialog">
    <p>This is a native dialog modal!</p>
    <button>Close</button>
  </form>
</dialog>
```

```javascript
const dialog = document.getElementById("favDialog");

// Open dialog as modal
dialog.showModal();

// Close dialog
dialog.close();
```

---

## 2. CSS Selectors, Combinators & Styling

### CSS Selectors
Target elements in the HTML tree for styling.

| Selector Type | Example | Description |
| :--- | :--- | :--- |
| **Element** | `h2` | Selects all `<h2>` elements |
| **ID** | `#topics` | Selects the element with `id="topics"` |
| **Class** | `.list` | Selects all elements with `class="list"` |

### CSS Combinators
A combinator explains the relationship between selectors.

| Sign / Combinator | Example | Description |
| :--- | :--- | :--- |
| **Descendant** (space) | `div p` | Selects all `<p>` elements anywhere inside a `<div>` |
| **Multiple / List** (`,`) | `div, p` | Selects all `<div>` elements and all `<p>` elements |
| **Child** (`>`) | `div > p` | Selects all `<p>` elements that are direct children of a `<div>` |
| **Adjacent Sibling** (`+`) | `div + p` | Selects the first `<p>` element immediately following a `<div>` |
| **General Sibling** (`~`) | `h2 ~ p` | Selects all `<p>` elements that follow an `<h2>` element as siblings |

### Pseudo-Class Selectors
Target elements based on user interaction or DOM structure.

| Example | Description |
| :--- | :--- |
| `a:hover` | Selects the `<a>` element currently hovered over by the cursor |
| `li:nth-of-type(2)` | Selects specifically the second `<li>` among its siblings |

### CSS Transform & Transitions
The `transform` property applies 2D or 3D transformations like rotating, scaling, moving, or skewing elements.
- **`translate(x, y)`**: Moves an element along the X and/or Y axes.
- **`rotate(angle)`**: Rotates an element clockwise or counter-clockwise.

```css
/* Example: Hamburger menu bar animation */
.change .bar1 {
  transform: translate(0, 11px) rotate(-45deg);
  transition: transform 0.3s ease;
}
```

### CSS Positioning (`position`)
Controls how an element is positioned within the document layout.

| Value | Behavior |
| :--- | :--- |
| `static` | **Default**. Follows normal document flow. Offsets (`top`, `left`, etc.) have no effect. |
| `relative` | Positioned relative to its normal flow position. Offsets move it without affecting surrounding elements. |
| `absolute` | Positioned relative to its nearest positioned ancestor (non-static). Removed from normal flow. |
| `fixed` | Positioned relative to the viewport. Remains pinned in place during scrolling. |
| `sticky` | Hybrid of `relative` and `fixed`. Toggles to fixed once a scroll threshold is reached. |

```css
.close-viewer {
  position: absolute;
  top: 10px;
  right: 20px;
}
```

---

## 3. Responsive Web Design

### Mobile-First Design
A design philosophy and workflow that starts by styling for smaller screens (smartphones) first, then progressively enhancing the layout for larger viewports (tablets, desktops) using `min-width` media queries.

### Media Queries
The `@media` rule applies CSS rules only when specific media conditions are met.

```css
/* Base styles: Mobile-first default */
body {
  background-color: #ffffff;
  font-size: 16px;
}

/* Media Query: Applied when viewport width is 480px or wider */
@media screen and (min-width: 480px) {
  body {
    background-color: lightgreen;
  }
}
```

> **Note**: Place media queries at the bottom of your stylesheet so cascading rules override base styles properly. Use `min-width` for mobile-first approaches.

### Responsive Navigation & CSS Grid
- **Responsive Navigation**: Show a toggleable hamburger menu on mobile screens, expanding into an inline horizontal bar on larger desktop screens.
- **CSS Grid (`grid-template-columns`)**: Define column structures that fluidly adapt across screen resolutions:
  ```css
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
  }
  ```

---

## 4. JavaScript Fundamentals

### Variables (`let`)
Variables act as containers for storing data values.
- Must be declared before use.
- Values can be reassigned during execution.

```javascript
// Declare a variable called num and initialize with 6
let num = 6;

// Reassign a new value
num = 10;
```

### Constants (`const`)
Constants hold data that should not be reassigned.
- Must be declared and initialized simultaneously.
- The reference cannot be reassigned.

```javascript
// Declare a constant
const password = 'R3d1ng!';

// Reassigning password = 'new' will throw a TypeError
```

### Scope (Global vs. Block)
Scope defines the accessibility (visibility) of variables.
- **Global Scope**: Declared outside any function or block `{}`. Accessible anywhere in the script.
- **Block Scope**: Declared inside a block `{}` (functions, `if` statements, `for` loops). Accessible only within that block.

```javascript
let course = "CSE131"; // Global scope

if (true) {
  let student = "John";  // Block scope
  console.log(course);   // Works: 'course' is global
  console.log(student);  // Works: accessed inside its block
}

console.log(course);     // Works: global
console.log(student);    // ReferenceError: 'student' is not defined outside the block
```

### Functions & Conditionals
- **Functions**: Reusable blocks of code that execute when called or triggered by an event.
- **Conditionals (`if` / `else`)**: Direct code execution paths based on evaluated boolean expressions.

```javascript
function toggleTheme(mode) {
  if (mode === "dark") {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
}
```

### Compound Conditionals & Comparison Operators
If you need to check for multiple conditions, use logical operators combined with comparison operators.

#### Logical Operators
- `&&` : **AND** (true if both conditions evaluate to true)
- `||` : **OR** (true if at least one condition evaluates to true)
- `!` : **NOT** (inverts the truthiness of the condition)

#### Comparison Operators
- `===` : Strictly equal (checks both value and type)
- `==` : Equal (type-coercing equality)
- `!==` : Not equal (strictly not equal)
- `>` : Greater than
- `<` : Less than
- `>=` : Greater than or equal to
- `<=` : Less than or equal to

```javascript
// Example: Checking compound conditions
// Checks if type strictly equals 'many' AND fewer than 2 campuses were selected
if (type === "many" && selectedCampuses.length < 2) {
  output.textContent = "Please select at least two campuses.";
  return;
}
```

### String Method: `.replace()`
Searches a string for a specified substring/pattern and returns a **new string** with the replacement. It does not mutate the original string.

```javascript
const paragraph = "I think Max's code is more efficient than yours.";

const updated = paragraph.replace("Max's", "my");
console.log(updated);
// Output: "I think my code is more efficient than yours."
```

### String Method: `.trim()`
The `.trim()` method is a string method in JavaScript that removes whitespace from both ends of a string.
- **Use Case**: A user might inadvertently add spaces before and after an input entry. We want to eliminate these extra spaces before validation or storage.
- **Example**: Getting the input value the user entered and trimming any whitespace before and after the entry:

```javascript
const cardNum = cardNumber.value.trim();
```

### Template Literals
A template literal is a special type of string in JS that allows multiple lines, calculations, calls to functions, and string interpolation.
- **Backticks (`` ` ``)**: The template literal uses backticks (`` ` ``) to enclose the string.
- **String Interpolation (`${...}`)**: String interpolation uses `${...}` to insert variables or expressions directly into the string.

```javascript
const movieSummary = `
  <div class="movie-summary">
    <h2>${movie.title}</h2>
    <p>${movie.genre} - ${stars}</p>
  </div>
`;

document.getElementById("movie-list").innerHTML += movieSummary;
```

### JavaScript Objects
Objects are variables, but objects contain many values stored as name/value (or key/value) pairs of data.
- Like the object of a car would have a name with the value of Fiat, a model with a number 500, and a color with the value of white.

```javascript
const car = { type: "Fiat", model: "500", color: "white" };

// Access properties using dot notation or bracket notation:
console.log(car.type);   // "Fiat"
console.log(car["model"]); // "500"
```

### Array Methods

Methods to iterate, transform, filter, aggregate, or search arrays.

#### 1. `.forEach()`
The `.forEach()` method calls a function for each element in an array.

```javascript
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);

function myFunction(item) {
  console.log(item * 10);
}
// Console output: 650, 440, 120, 40
```

#### 2. `.map()`
The `.map()` method creates a new array from calling a function for every array element.

```javascript
const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction);

function myFunction(num) {
  return num * 10;
}
// newArr: [650, 440, 120, 40]
```

#### 3. `.filter()`
The `.filter()` method creates a new array filled with elements that pass a test provided by a function.

```javascript
const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
// result: [32, 33, 40]
```

#### 4. `.reduce()`
The `.reduce()` method executes a reducer function on each array element to reduce the array to a single value.

```javascript
const numbers = [125, 20, 5];

document.getElementById("output").innerHTML = numbers.reduce(myFunc);

function myFunc(total, num) {
  return total - num;
}
// Output: 100 (125 - 20 - 5)
```

#### 5. `.indexOf()`
The `.indexOf()` method returns the first index position of a specified value, or `-1` if not found.

```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let index = fruits.indexOf("Apple");
// index: 2
```

#### 6. `Array.from()`
Converts an array-like object or collection (such as a `NodeList` returned by `querySelectorAll`) into a real JavaScript array.
- Once converted, you can chain array methods like `.filter()`, `.map()`, and `.reduce()`.

```javascript
// Example: Converting checkbox NodeList to an array, filtering checked ones, and extracting values
const campusBoxes = document.querySelectorAll('input[name="campus"]');

const selectedValues = Array.from(campusBoxes)
  .filter(box => box.checked)
  .map(box => box.value);
```

---

## 5. DOM Manipulation & Events

### Selecting Elements
Methods to query and locate elements in the DOM tree.

```javascript
// .querySelector(): Returns the first matching element
const firstExample = document.querySelector(".example");
firstExample.style.backgroundColor = "red";

// .getElementById(): Returns the unique element with the matching ID
const myElement = document.getElementById("content");
```

### Attributes & Text Content

```javascript
// .setAttribute(name, value): Sets an attribute's value
document.getElementById("myImg").setAttribute("src", "portrait.webp");

// .textContent: Gets or sets the raw text content inside an element
document.querySelector(".title").textContent = "I have changed!";

// .value: Reads or sets the value of form inputs or dropdown selections
let selectElem = document.querySelector("select");
let currentValue = selectElem.value;
```

### Inline Styles & Class Management

```javascript
// .style: Manipulates inline CSS properties
document.getElementById("myH1").style.color = "red";

// .className: Overwrites the entire class attribute
document.getElementById("myDIV").className = "mystyle";

// .classList: Convenient interface to manipulate individual classes
const element = document.querySelector(".box");

element.classList.add("hide");     // Adds 'hide'
element.classList.remove("hide");  // Removes 'hide'
element.classList.toggle("hide");  // Toggles 'hide' on/off
```

### Event Listeners & Event Parameter
The `.addEventListener()` method registers an event handler function on a target element.
- The handler function automatically receives an **event object** (commonly named `e` or `event`).
- `e.target` refers to the exact element that triggered the event.

```javascript
const gallery = document.querySelector(".gallery");

gallery.addEventListener("click", openModal);

function openModal(e) {
  console.log("Event type:", e.type);
  console.log("Triggered element:", e.target);
}
```

#### Preventing Default Behavior (`.preventDefault()`)
The `.preventDefault()` method is used to stop the default browser behavior of an event from happening (e.g., preventing form submission from reloading the page or an `<a>` tag from navigating).

```javascript
const form = document.querySelector("#myForm");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Stops the default form submission / page reload
  // Custom JavaScript form handling...
});
```

### Form Reset (`.reset()`)
The `.reset()` method restores a `<form>` to the exact state it was in when the page loaded.
- Resets all form controls (text inputs, textareas, checkboxes, radio buttons, select menus, etc.).

```javascript
const form = document.querySelector("#myForm");
form.reset();
```

### Form Validation & Dynamic Fields
In modern forms, conditional inputs can be toggled dynamically based on user selection, and submissions must be validated prior to processing:
- **Dynamic Field Toggling**: Use the `hidden` attribute or class toggling to reveal conditional input fields (such as student ID or access codes).
- **Date Comparison**: Check that a selected date occurs strictly in the future by comparing date objects.
- **Pattern Matching (Regex)**: Use regular expressions (e.g. `/^\d{9}$/`) to test numerical patterns like 9-digit student IDs.
- **Accessible Error Announcement**: Place error containers below the form with `aria-live="polite"` so screen readers immediately inform the user of validation issues.

```javascript
// Example: Checking 9-digit pattern and future date
const isNineDigits = /^\d{9}$/.test(studentId.trim());

function isFutureDate(dateString) {
  const [year, month, day] = dateString.split("-").map(Number);
  const chosenDate = new Date(year, month - 1, day);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return chosenDate > today;
}
```

---

## 6. ARIA (Accessible Rich Internet Applications)

ARIA attributes make web applications accessible to users relying on assistive technologies (screen readers).

> **Rule of Thumb**: Prefer semantic HTML elements (`<button>`, `<nav>`, `<dialog>`, `<header>`) whenever possible. Use ARIA only when semantic elements alone cannot fully convey state or meaning.

| ARIA Attribute / Role | Purpose |
| :--- | :--- |
| `role` | Defines the element's type or function (e.g., `role="button"`, `role="dialog"`) |
| `aria-label` | Provides an explicit, custom text label for assistive devices |
| `aria-labelledby` | References the `id` of another element whose text acts as this element's label |
| `aria-describedby` | References the `id` of another element containing supplementary descriptive text |
| `aria-hidden` | Hides the element and its children from assistive technologies (`"true"` / `"false"`) |
| `aria-live` | Instructs screen readers to announce dynamic content changes (`"polite"`, `"assertive"`) |
| `aria-expanded` | Indicates whether a collapsible container is currently open (`"true"` / `"false"`) |
| `aria-controls` | Points to the `id` of the element being controlled or toggled |
| `aria-checked` | Indicates current checked state of a custom checkbox or switch |
| `aria-selected` | Indicates whether an item is currently selected in a tablist, option list, or tree |
| `aria-disabled` | Marks an interactive element as disabled without disabling standard keyboard focus |

### Example Usage:
```html
<!-- Providing accessible context for visual ratings -->
<p>
  User Rating:
  <span aria-label="4 out of 5 stars">⭐⭐⭐⭐</span>
</p>

<!-- Accessible Hamburger Toggle Button -->
<button id="menu-btn" aria-expanded="false" aria-controls="primary-nav" aria-label="Toggle navigation menu">
  ☰
</button>
```

---

## 7. Instructor Feedback & Course Best Practices

This section documents instructor review feedback and coding standards emphasized throughout course assignments.

### Code Formatting & Readability Standards
- **Under 100 Characters per Line**: Avoid horizontal scrolling in code editors by capping lines under 100 characters. If a line exceeds this (e.g., 106+ characters), break it across multiple lines.
- **Vertical Attribute Alignment**: For HTML tags with long or multiple attributes, place each attribute on a separate line and indent cleanly:

```html
<!-- ❌ Avoid: Exceeds 100 characters and forces horizontal scrolling -->
<img src="images/norris-full.jpg" alt="Chuck Norris standing on a mountain" class="gallery-image" data-id="norris-01">

<!-- ✅ Recommended: Vertically aligned attributes with clear closing tag -->
<img
  src="images/norris-full.jpg"
  alt="Chuck Norris standing on a mountain"
  class="gallery-image"
  data-id="norris-01"
>
```

- **Enclosing Tags & Semantic Structure**: Ensure proper closing tags and clear hierarchy (`<header>`, `<main>`, `<footer>`, `.content`).

---

### Week 1: Mission Statement Feedback
- **Container Padding / Spacing**:
  - The main `.content` container needs extra breathing room. Add top padding and side padding inside the container to prevent content from touching container boundaries.
- **Semantic Tags**:
  - Effective use of semantic tags (`<header>`, `<main>`, `<footer>`) and wrapper divs.
- **Deployment URL**:
  - Correct submission format and understanding of deployment / hosting URLs.

---

### Week 3: Cool Pics Part One Feedback
- **Responsive Layout**:
  - Solid responsive structure across both mobile and desktop viewports.
- **Meta Tags**:
  - Ensure essential meta tags are present in `<head>`, including descriptive meta tags (`viewport`, `description`, `author`).
- **Image Styling**:
  - Properly styled responsive images that fluidly scale up across breakpoints.

---

### Mobile-First CSS Anti-Patterns to Avoid

| Anti-Pattern | Why It's Problematic | Recommended Practice |
| :--- | :--- | :--- |
| **`max-width: 1000px` in base rules** | Base styles target mobile screens. Mobile screens are narrow (e.g. 360–480px), so setting a 1000px max-width on mobile is irrelevant and desktop-centric. | Let mobile elements take up full natural width (`100%`). Apply `max-width` only inside larger media queries (`min-width: ...`). |
| **`grid-template-columns: 1fr;` on mobile** | A single column is already the natural default flow of block elements. Explicitly specifying `1fr` is redundant. | Keep base mobile CSS minimal. Introduce multi-column grids (e.g. `repeat(2, 1fr)`) only inside media queries. |
| **Over-specifying layout defaults** | Clutters stylesheet and complicates cascading overrides. | Leverage default browser flow for mobile, progressively enhancing for larger viewports. |

---

*Authored for WDD 131 coursework and reference.*
