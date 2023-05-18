var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// create submit event
form.addEventListener("submit", addItem);

// delete items event
itemList.addEventListener('click', removeItem);

// filter event
filter.addEventListener('keyup', filterItems);


// create submit event's function
function addItem(e){
    //prevent default
    e.preventDefault();

    // get form value
    var newItem = document.getElementById('item').value;

    // create new li item
    var li = document.createElement('li');

    // add class to the new li
    li.className = "list-group-item";

    // add text node to li
    li.appendChild(document.createTextNode(newItem));
    
    // create a delete button
    var deleteBtn = document.createElement('button');
    
    // add a class to the delete button
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";
    
    // add the 'x' text to the del btn
    deleteBtn.appendChild(document.createTextNode("X"));
    
    // append the delete button to the item list
    li.appendChild(deleteBtn);
    
    // append the li to the list
    itemList.appendChild(li);
}


// remove item
function removeItem(e) {
    if (e.target.classList.contains("delete")) {
        var li = e.target.parentElement;
        itemList.removeChild(li);
    }
}

// Filter Items
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();

    // get lis
    var items = itemList.getElementsByTagName("li");

    // convert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;

        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = "block";
        }
        else {
            item.style.display = "none";
        }
    })
}





















