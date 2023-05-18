const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

// Select tab content
function selectItem(e){
    // Remove red botder
    removeBorder();

    // Remove inner content for each tabs
    removeShow();
    // Add that red border
    this.classList.add('tab-border');

    // take content item from DOM
        //this.id will return "tab-1/ tab-2/ tab-3" when we click on that tag (check html class for Tab Content 1/2/3), and after
        //  add "-content" to select the whole class (for example: tab-1-content) and so on;

        // the 'icons' have class of "tab-1/2/3". 
        // the inner content (content for each tab) has class of "tab-1/2/3-content"
        // when we click tab-1, select tab-1-content and add "show" class to him 
    const tabContentItem = document.querySelector(`#${this.id}-content`); // This is a little bit complicated 

    tabContentItem.classList.add("show");
}


function removeBorder(){
   tabItems.forEach(item => item.classList.remove("tab-border")); 
}

function removeShow(){
    tabContentItems.forEach(item => item.classList.remove("show")); 
 }

// Tab click
tabItems.forEach(item => item.addEventListener("click", selectItem));
