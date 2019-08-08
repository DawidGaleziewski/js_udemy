//REPLACE ELEMENT

        //create element
        const newHeading = document.createElement('h2');

        //Add id
        newHeading.id = 'task-title';

        //New text node
        newHeading.appendChild(document.createTextNode('task list 22'))

        //Get the old heading
        const oldHeading = document.getElementById('task-title');

        //Parent (needed for the swap)
        const parentElement =  document.querySelector('.card-action');

        // Replace
            //accepts two params - new element and old element to be replaced
        parentElement.replaceChild(newHeading, oldHeading);

        console.log(newHeading)


    //REMOVE ELEMENTS
    const listItems = document.querySelectorAll('li');
    const list = document.querySelector('ul');

    //Remove list items
        // remove() method
    listItems[0].remove()

        // remove by child
        list.removeChild(listItems[2])

    
    //CLASSES AND ATTRIBUTES
        const firstLi = document.querySelector('li:first-child');

        const link =  firstLi.children[0];

        let val;
        val = link.className; // gets class names as a string
        val = link.classList[0]; // get class list as a dom token list

        // adding classes
        link.classList.add('test')

        // removing classes
        link.classList.remove('test')

        console.log(link )

    //attributes

        // Get attributes
        val = link.getAttribute('href');

        // Set new attribute
        val = link.setAttribute('href', 'https://google.com');

        //Bool for having a specific attribute
        val = link.hasAttribute('href')

        //Remove attribute
        val = link.removeAttribute('href')
    console.log(val)

