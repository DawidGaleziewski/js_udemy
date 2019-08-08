// creating elements and inserting them
    // Create a list item and inserting it
    const li = document.createElement('li');

    // Add class
    li.className = "collection-item"
    

    // Add id
    li.id = "new-item";

    // Add attribute
        // add attribute accepts two properties - attribute type and its value
    li.setAttribute('title', "New Item");

    // We create text by creating textNode
    const textNode = document.createTextNode('Hello World')

    // appendChild = put something inside element
    li.appendChild(textNode);

    // create new link element
    const link = document.createElement('a');
    
    // add class to link
    link.className = 'delete-item secondary-content';

    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';

    li.appendChild(link);
    
    // Append li as child to ul
    document.querySelector('ul.collection').appendChild(li)
    console.log(li);
