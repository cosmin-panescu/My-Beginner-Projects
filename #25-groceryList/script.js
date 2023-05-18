// variables
const addItemsAction = document.querySelector('.addItems-action');
const input = document.querySelector('.addItems-input');
const submit = document.querySelector('.addItems-submit');

const list = document.querySelector('.grocery-list');
const displayItemsAction = document.querySelector('.displayItems-action');
const clear = document.querySelector('.displayItems-clear');

// event listeners
submit.addEventListener('click', addItem);

clear.addEventListener('click', removeItems);

list.addEventListener('click', removeSingleItem);

// functions
function addItem(e){
   e.preventDefault();
   let value = input.value;

   if(value === ''){
      showAction(addItemsAction, 'Please add grocery item', false); // value = false because default is empty, end for emplty value we have the red alert
   }
   else{
      showAction(addItemsAction, `${value} added to the list`, true);

      // if the value is NOT empty, we will do this: 
      createItem(value);
   }
}

// show action function
function showAction(element, text, value){
   if(value === true){
      element.classList.add('success');
      element.innerText = text;
      input.value = '';

      // green alert to disapear
      setTimeout(function(){
         element.classList.remove('success')
      }, 3000)
   }
   else{
      element.classList.add('alert');
      element.innerText = text;
      input.value = '';

      // red alert to disapear
      setTimeout(function(){
         element.classList.remove('alert')
      }, 3000)
   }
}

// create item function
function createItem(value){

   // create div
   // also, check 'grocery item' part from HTML to understand why we add this classes and why we create this elements
   let parent = document.createElement('div');
   parent.classList.add('grocery-item');

   // let title = document.createElement('h4');
   // title.classList.add('grocery-item__title')

   parent.innerHTML = `<h4 class="grocery-item__title">${value}</h4>
   <a href="#" class="grocery-item__link"><i class="far fa-trash-alt"></i></a>`


   list.appendChild(parent);
}

// remove all items function
function removeItems(){
   let items = document.querySelectorAll('.grocery-item');

   if(items.length > 0){
      
      showAction(displayItemsAction, 'All items deleted', false);

      items.forEach(function(element){
         list.removeChild(element);
      });
   }
   else{
      showAction(displayItemsAction, 'No more items to delete', true);
   }
}

// remove single item function
function removeSingleItem(e){
   e.preventDefault();

   let link = e.target.parentElement;

   if(link.classList.contains('grocery-item__link')){

      // the trash button has more siblings and we target that one who has a class of grecery-item__link (so, the text)
      // so, the previous sibling of the button is that text we want to remove
      let text = link.previousElementSibling.innerHTML;

      let groceryItem = e.target.parentElement.parentElement;

      //  remove from the list 
      list.removeChild(groceryItem);

      showAction(displayItemsAction, `${text} removed from the list`, true);
   }
}





































