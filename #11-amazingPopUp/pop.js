var parent = document.querySelector('.modal-parent');
var X = document.querySelector('.X');
var btn = document.querySelector('button');
var section = document.querySelector('section');

btn.addEventListener("click", apper);

function apper(){
  parent.style.display = "block";
  section.style.filter ='blur(30px)';
}

X.addEventListener('click', disapperX);

function disapperX(){
  parent.style.display = "none";
  section.style.filter ='blur(0px)';
}

parent.addEventListener('click', disapperParent);

function disapperParent(e){
  if(e.target.className = "modal-parent"){
    parent.style.display = "none";
    section.style.filter ='blur(0px)';
  }
}