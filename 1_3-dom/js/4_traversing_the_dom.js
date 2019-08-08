// moving through the dom (up and down)

let val;
const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');



// diffrent properties attached to those nodes

// get child nodes - it will retuern also text nodes (those are from line breaks in html document)
val = list.childNodes; // gives node list of child nodes from the poarrent
    // number of those items will be larger than we expect
    //it will even add nodes for comments!
    
    // Methods used on nodes:
        val = list.childNodes[1].nodeName;
        val = list.childNodes[1].nodeType; //1- Element, 2- Attribute, 3- Text node

//Get html collection - children elements without line breaks
// val = list.children;

// children vs child nodes
    //children will be more used. due to fact that it only gives us elements.
    //child nodes very often will give us to much (line break text nodes, js comments etc)


// we can go to children of the children

    val = list.children[3].children // list > list item no3 > link



// getting only first child
    val = list.firstChild //it will return node that can be non-element like line break (#text)

    val = list.firstElementChild //only first element
    val = list.lastElementChild // only last child

    val = list.childElementCount

// getting parent node & parent element
    val= listItem.parentNode
    val = listItem.parentElement

// getting sibling node and element sibling
    val = listItem.nextSibling
    val = listItem.nextElementSibling
console.log(val);


// NodeList vs HTMLCollection:
    // The most simplest answer is that both a NodeList and HTMLCollection are collections of DOM nodes. The difference is that while a NodeList can contain any node type, the HTMLCollection is going to only to contain any node Element.

    // So what is the difference between a node element and a node type?

    // Nodes: in the DOM, everything is a node and every node is an object. The name node is used as a generic term, for everything.

    // Element: is one specific type of node. It can be a list item, a div, the body, the window, whatever, but its a specific type.

    // Now we can see what the difference between a nodeList is and what a node element is:

    // In the end, one is general and one is specific lists of nodes. It's important to know simply because you should know what you are returning and for more advanced JavaScript issues such as speed, in the case of static NodeLists vs Live NodeLists.

    // By the way this is an awesome question!
