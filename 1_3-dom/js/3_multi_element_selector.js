// get multiple elements by class name
    const items = document.getElementsByClassName('collection-item');
    console.log(items)

    // we can access invidual items same as we do in arrays
    items[0].style.color = "red";

    const listItems = document.querySelector('ul').getElementsByClassName('collection-item');


    // !Important - collection is not an array. Methods like .reverse() wont work on it
        // we can however convert HTML collection to array
        const ArrayListItems = Array.from(listItems);
        
        // this allows us to do array methods on those 
        console.log(ArrayListItems)
        console.log(ArrayListItems.reverse())
        ArrayListItems.forEach((item, index)=>{
            console.log(`for each item: ${item.classList}`);
            item.textContent = `${index}: Hello`
        })

// querySelectorAll returns node list 
        // it differs from html collection
        // node list is still not array but it has some methods like forEach


    const nodeListItems = document.querySelectorAll('ul.collection li.collection-item');
    console.log(nodeListItems);

    nodeListItems.forEach((item, index)=> {
        console.log(`Index: ${index} for item with class ${item.className} `)
    });

    const liOdd = document.querySelectorAll('li:nth-child(odd');
    
    liOdd.forEach((item)=> {
        item.style.color= "green";
        item.style.backgroundColor= "#ccc";
    })