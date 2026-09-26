# Green Earth

A tree plantation campaign website built for Programming Hero's Green Earth assignment (006). Visitors can browse trees by category, check out details for a specific tree, add trees to a cart, and see a running total. All data comes from the Programming Hero Plants API.
This is a learning project which follows the assignment brief and guidance along the way.

Live site: https://green-earth-09fad5.netlify.app/

## APIs used

- All plants: `https://openapi.programming-hero.com/api/plants`
- Categories: `https://openapi.programming-hero.com/api/categories`
- Plants by category: `https://openapi.programming-hero.com/api/category/:id`
- Single plant details: `https://openapi.programming-hero.com/api/plant/:id`

## Features

- Responsive navbar with mobile dropdown
- Categories loaded dynamically, filters the tree list on click, active category highlighted
- Plant cards pulled from the API (image, name, description, category, price)
- Click a plant's name to see full details in a modal
- Cart: add a plant (increases quantity if already added), remove one quantity at a time, running total
- Loading spinner while plant data fetches
- About, Impact, and donation form sections
- Responsive across mobile/tablet/desktop

## Built with

HTML, Tailwind CSS, DaisyUI, vanilla JavaScript (fetch, async/await, DOM manipulation), Font Awesome, Google Fonts.

## JS concepts

**var vs let vs const**
`var` is function-scoped and can be redeclared, which makes it easy to misuse. It is mostly avoided in modern JS. `let` is block-scoped and can be reassigned, good for values that change, like `cart` getting reassigned when an item is removed. `const` is block-scoped and can't be reassigned, default for functions and anything that stays fixed.`const` only locks the variable itself; an array or object declared with `const` can still have its contents changed (e.g. `cart.push(...)`).

**map() vs forEach() vs filter()**
`forEach()` runs a function on every item but returns nothing. It is used here to build and append a card for each plant. `map()` also runs on every item but returns a new array of the results which is good for transforming data. `filter()` returns a new array with only the items that pass a test. It is used in the cart to remove one specific plant: `cart.filter(plant => plant.id !== id)`.

**Arrow functions**
A shorter function syntax introduced in ES6. `function add(a, b) { return a + b }` becomes `const add = (a, b) => a + b`. Used throughout this project in `.then()` callbacks and array loops.

**Destructuring**
Pulls values out of an object or array directly into variables instead of accessing each property one by one, e.g. `const { name, price } = plant` instead of `plant.name` / `plant.price`. This project also uses the related spread operator when adding to the cart `{ ...plant, quantity: 1 }` copies all of a plant's fields into a new object and adds a quantity on top.

**Template literals**
Strings written with backticks that let us insert variables directly using `${}`, instead of joining strings with `+`. They also support multiple lines, which is why they're used to build the plant cards, cart items, and modal content in this project. It is much easier to read than concatenation.

## Acknowledgements

Built as part of the Programming Hero frontend development course. API provided by Programming Hero.
