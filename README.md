# tceles

Generate JavaScript to select DOM elements

## what?

tceles generates JavaScript for you to select a certain DOM element. I came up with the idea when trying to scrape a website - I got tired of manually generating a long JavaScript tag to access one element from a table, so if you input a DOM element, tceles will give you JavaScript to select it

## usage

After importing tceles, run `tceles(domElement)` with `domElement` being the element you want to find a path for.

Right now you're probably thinking, "wait, Matthew, don't I need to find a way to select the element to input it into the tceles method?". Yes! All you need to do is give your desired element an id via the chrome console, run `var myElement = document.getElementById(yourId)`, remove the id you artificially added to your element, and run `tceles(myElement)`. This will then give you a way to access the element with pure JavaScript, without needing to manipulate your element in the chrome console. 